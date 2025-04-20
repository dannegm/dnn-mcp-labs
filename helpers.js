export const makeResponse = text => ({
    content: [
        {
            type: 'text',
            text,
        },
    ],
});

export const attachTools = (server, tools = []) => {
    const flatTools = tools.flat();
    flatTools.forEach(({ key, description, payload = {}, handler } = {}) => {
        server.tool(key, description, payload, handler);
    });
    return server;
};
