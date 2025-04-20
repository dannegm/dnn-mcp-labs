import { z } from 'zod';
import { makeResponse } from './helpers.js';

const SHORTENER_API = 'https://s.hckr.mx';

export const shortener = async ({ url }) => {
    const response = await fetch(`${SHORTENER_API}/shorten`, {
        method: 'POST',
        body: JSON.stringify({
            url,
        }),
        headers: {
            'Content-type': 'application/json',
        },
    });

    if (!response.ok) {
        return { data: null, error: 'Something wrong shortening the given url' };
    }

    const data = await response.json();
    return { data, error: null };
};

const shortenerTool = async ({ url }) => {
    const { data, error } = await shortener({ url });
    if (error) return makeResponse(error);
    return makeResponse(JSON.stringify(data));
};

export const shortenerTools = [
    {
        key: 'url-shortener',
        description: 'Short the given url',
        payload: { url: z.string().url() },
        handler: shortenerTool,
    },
];
