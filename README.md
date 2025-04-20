# DNN MCP Labs

This repository is a playground for experimenting with **MCP (Model Context Protocol)**. It serves as a centralized space to test, simulate, and explore how MCP can be used to extend model capabilities beyond the prompt.

## What is MCP?

**Model Context Protocol (MCP)** is a proposed standard by OpenAI, Anthropic, and others, aimed at defining structured context for models. It enables tools, documents, APIs, and other data sources to be loaded into a model’s environment — giving it richer, more dynamic context awareness.

This repo is meant for prototyping and testing how MCPs work, especially with early implementations in Claude and ChatGPT.

---

## Example Configuration for Claude

To use MCP with Claude, you need to load an `.mcp.json` file through a supported interface (like Anthropic Console or any experimental MCP client). Here’s a basic example:

```json
{
    "mcpServers": {
        "dnn-mcp-labs": {
            "command": "node",
            "args": ["/path/to/index.js"],
            "env": {
                "SUPABASE_URL": ".supabase.co",
                "SUPABASE_KEY": "<credentials>"
            }
        }
    }
}
```

This defines a `dnn-mcp-labs` tool that Claude can call when you ask about the superpowers.

---

## Available Tools

Below is a list of experimental tools included or being developed in this repo:

### 📓 `get-random-fact`

Get a random useless (but funny) fact

### 📆 `get-today-fact`

Get the today's useless fact

### ✂️ `url-shortener`

Short the given url

### 🌍 `sharing-file`

Sharing a local resource to anyone, receive an absolute local path an return the URL to share

---

## Contributing

This is a personal lab — contributions, ideas, and issues are welcome. Feel free to submit pull requests or open discussions around MCP experimentation.

---

## Disclaimer

This project is not officially affiliated with OpenAI, Anthropic, or any other organization. It’s an independent sandbox for exploring MCP implementations and possibilities.
