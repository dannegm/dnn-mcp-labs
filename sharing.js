import fs from 'fs';
import path from 'path';
import mime from 'mime-types';

import { createClient } from '@supabase/supabase-js';
import { z } from 'zod';

import { makeResponse } from './helpers.js';
import { shortener } from './shortener.js';

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const sharing = async ({ filePath }) => {
    const fileBuffer = fs.readFileSync(filePath);
    const fileName = path.basename(filePath);
    const storagePath = fileName;
    const contentType = mime.lookup(filePath) || 'application/octet-stream';

    const { error } = await supabase.storage.from('shared').upload(storagePath, fileBuffer, {
        contentType,
        upsert: true,
    });

    if (error) return makeResponse('Something wrong uploading the file');

    const { data: publicUrl } = supabase.storage.from('shared').getPublicUrl(storagePath);

    const shorted = await shortener({ url: publicUrl.publicUrl });

    if (shorted.error) return makeResponse('Something wrong creating the shared link');

    return makeResponse(`Your shared link is: ${shorted.data?.short}`);
};

export const sharingTools = [
    {
        key: 'sharing-file',
        description:
            'Sharing a local resource to anyone, receive an absolute local path an return the URL to share',
        payload: { filePath: z.string() },
        handler: sharing,
    },
];
