import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';

import { attachTools } from './helpers.js';
import { shortenerTools } from './shortener.js';
import { factsTools } from './facts.js';
import { sharingTools } from './sharing.js';

const server = new McpServer({
    name: 'dnn-mcp-labs',
    version: '1.0.0',
});

const serverWithTools = attachTools(server, [
    // ...
    factsTools,
    shortenerTools,
    sharingTools,
]);

const main = async () => {
    const transport = new StdioServerTransport();
    await serverWithTools.connect(transport);
    console.error('DNN-MCP Labs Server running on stdio');
};

main().catch(error => {
    console.error('Fatal error in main():', error);
    process.exit(1);
});
