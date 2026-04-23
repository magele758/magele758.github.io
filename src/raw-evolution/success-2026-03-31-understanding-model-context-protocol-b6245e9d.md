# 实验成功：Understanding Model Context Protocol: Connecting Your Software to AI

## 来源
- [Understanding Model Context Protocol: Connecting Your Software to AI](https://fusionauth.io/articles/ai/mcp-connecting-software-ai)

## 来源正文摘录（抓取）
```
Understanding Model Context Protocol: Connecting Your Software To AI | FusionAuth Docs / Articles Resources Resources Docs Quickstarts Articles Blog Developer Tools Release Notes Download Talk To An Expert Login Light Dark System Log In Get a demo Open main menu ESC Results Recent Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Search... AI Authentication Login &amp; Auth Workflows CIAM Gaming &amp; Entertainment Identity Basics OAuth Security Tokens AI AI Authentication and Authorization Authenticating AI Agents: The New Authentication Paradigm How to Make Your Developer Documentation Work with LLMs: Lessons from the Trenches Securing AI Agents The Authentication Rabbit Hole: What I Learned From Vibe-Coding Auth with AI Understanding Model Context Protocol: Connecting Your Software To AI Contribute Edit on GitHub Understanding Model Context Protocol: Connecting Your Software To AI By Simon Russell When the first version of the Model Context Protocol (MCP) specification was released last November, it became a buzzword overnight. Like a lot of buzzwords, it gets thrown around so much that it tends to lose meaning. But it is actually a very specific thing, that&#39;s quite well defined; it&#39;s also probably the least &quot;AI&quot; part of modern AI. It&#39;s a definition of how one piece of software can talk to another – something that&#39;s going to be familiar to nearly every software engineer. That simplicity does mask the fundamental shift that it represents though – it&#39;s similar to the move from desktop software to the web; or from the web to mobile apps. It&#39;s a new user interface: but it&#39;s more than that too. It&#39;s the first time a generalised approach to allowing AI agents to access software has been attempted. If you&#39;re building software, understanding how MCP affects what you&#39;re building is essential. Users will grow to expect all software to work with the agent platforms they&#39;re using; to be able to be automated by those agents. Prefactor exists to close this gap and is focused on enabling builders to operate securely and at scale. Prefactor&#39;s approach is grounded in our belief that thinking MCP is a nice-to-have integration layer is a mistake. Instead, it&#39;s an identity problem at scale. Every agent, every API, every human needs to be authenticated and controlled on the same footing — or you&#39;re just building the next generation of shadow IT. How did we get to MCP? # At this point, chatbot-style interfaces for interacting with large language models have become commonplace. While these models can be useful on their own, there are many situations where being able to use external tools makes sense. The most common one is web search – most chatbot platforms will now search the web for you to get up-to-date information; without this you&#39;d have to rely on whatever the facts were when their training data (often six to twelve months out of date). The possibility of hallucinations is also quite high, depending on the topic. Early versions of this capability (circa 2022) had the model emit marked up calls in tool-specific formats; the issue with this was that the model would need to be trained to understand that specific tool and invocation format. Over time this evolved into the more generic concept of &quot;tools&quot; – a description of the tool and the parameters. The LLM provider would split out the tool calls from normal text generation, to avoid ambiguity, and the agent framework would intercept these requests from the language model, perform the call, then add the result of the call to the conversation. This solved the problem of &quot;how should the LLM indicate it needs to call a tool&quot;, but the actual communication was still specific to a particular agent framework; each tool would need to be modified to use it with a different agent. To encourage the development of more tools, Anthropic realised a standardised API format would be needed, and created the Model Context Protocol at the end of 2024. It&#39;s important to say that there&#39;s a lot more to MCP than just tool calls – but we&#39;ll focus on those since they&#39;re probably what most people are thinking about when they&#39;re thinking about MCP. And I mean if you&#39;re thinking &quot;what about resources, prompts, elicitations and sampling&quot; then you probably don&#39;t need to read this article... A quick reminder on how LLMs work # At this point, it&#39;s probably worth a reminder that large language models work by looking at a conversation, and asking &quot;what would the agent say now&quot;. Each chunk of the conversation is marked with &quot;user&quot;, &quot;agent&quot;, or &quot;tool response&quot;; everything is represented within the conversation, as a single stream. To figure out &quot;who should speak next&quot;, you can look at the last chunk of the conversation: if it&#39;s a user or tool response, then the agent framework needs to use the LLM to generate an agent response if it&#39;s an agent response with a tool call, then the next step is to call the tools and wait for those responses if it&#39;s an agent response without tool calls, then wait for the user to continue the conversation. (There can be more to it than this and error handling complicates it a little more, but this is the core of how an agent framework operates.) Each time the agent framework wants to generate a response, it sends the entire conversation – including all previous user input, agent responses and tool responses. The model then generates the next agent chunk (which can contain more tool requests). The language model is stateless. In addition to everything mentioned above, there&#39;s an implicit &quot;system prompt&quot; that instructs the model on how to act, what tools are available and what they do. What&#39;s important to remember is that the language model doesn&#39;t call the MCP server directly – it&#39;s all driven by the agent framework. MCP isn&#39;t something that the language model cares about – it&#39;s how the agent framework actually implements the tool call. But what actually is it? # Before jumping into the lower-level details, it&#39;s probably worth discussing the high-level actors that the MCP specification mentions: the MCP host: this is the &quot;agent framework&quot; that we discussed previously; the part that&#39;s managing the LLM and the conversation the MCP client: manages a connection to an MCP server the MCP server: where the action happens. The server is the whole reason that MCP exists. In practice the lines between client and host are somewhat blurry, and unless you&#39;re implementing that side the distinction is not that important. The layers of MCP # From top to bottom: Data layer Primitives The specification defines a set of JSON-RPC endpoints that can be called to perform tool calls and access other features. JSON-RPC Defines a simple remote procedure call protocol using JSON. It&#39;s a pretty short read , and some features like batching aren&#39;t supported in MCP. Transport layer Specifies how the JSON-RPC calls will be made Let&#39;s look at the transport layers defined in the current version of the specification. The stdio transport # The simplest transport layer to understand is the &quot;stdio&quot; transport . This is also called &quot;local&quot;. This transport gets its name from the way it communicates with the server process. The MCP client will actually start a process on the same machine; the input and output handles from that process become the input and output for the JSON-RPC calls. The HTTP streaming transport # This is actually the second version of an HTTP transport in the short life of MCP – the earlier SSE transport was a little more complicated to implement. This is also called &quot;remote&quot;. Although it&#39;s called a streaming transport, in the simplest implementation it&#39;s a very simple 1:1 HTTP request to MCP request. There is an option to allow for responses and updates to stream back, but for a lot of servers it may not be necessary to worry about this. A tool request via HTTP streaming # While we won&#39;t dive too far into the details here, let&#39;s take a quick look at what a tool request looks like. This should give you a flavour of how MCP works. The example tool is retrieving the contents of a todo list. (Note that some headers have been left out for clarity.) POST /mcp HTTP/1.1 accept: application/json, text/event-stream content-type: application/json content-length: 181 { &quot;id&quot;: 8, &quot;jsonrpc&quot;: &quot;2.0&quot;, &quot;method&quot;: &quot;tools/call&quot;, &quot;params&quot;: { &quot;arguments&quot;: { &quot;todo_list_id&quot;: &quot;6b0ea930-d4f7-4822-b7a1-19dc4a0f5770&quot; }, &quot;name&quot;: &quot;retrieve_todo_list&quot; } } The server then responds: HTTP/1.1 200 OK content-type: application/json; charset=utf-8 { &quot;id&quot;: 8, &quot;result&quot;: { &quot;content&quot;: [ { &quot;type&quot;: &quot;text&quot;, &quot;text&quot;: &quot;# Todo list: Chores (id=6b0ea930-d4f7-4822-b7a1-19dc4a0f5770)\nWeb URL: /list/6b0ea930-d4f7-4822-b7a1-19dc4a0f5770\n\n\n## Items\n\n 0. [ ] Feed dogs (id=aceb4f43-ff34-4354-a38f-bc23d7aca2a7)\n 1. [ ] Buy groceries (id=ee300415-b16b-4b56-a1f7-09f0fd9aed14)\n 2. [ ] Make dinner (id=c74d9b80-40f2-4026-84fe-85b7effc4690)\n 3. [ ] Wash dishes (id=4d2e2990-972d-402f-be77-02055b1269c5)&quot; } ], &quot;isError&quot;: false }, &quot;jsonrpc&quot;: &quot;2.0&quot; } Probably the most unexpected thing for people new to MCP is that the response there is actually in Markdown! But the LLM figures it out – it even understands the Github checkbox format to indicate which to-do items are completed. Note that it doesn&#39;t have to be Markdown, it can be basically anything that an LLM can understand. Markdown is a common choice for LLMs as it has a little bit of semantic markup (headings, bullet lists etc) but without overwhelming the model with too much structure. The best approach is to use the minimum necessary – just imagine there&#39;s a person on the other end reading it. There is also a structured response format in the June 2025 version of the spec which allows responses more like a traditional API. Support is mixed, though, and it isn&#39;t necessarily going to work better. Ultimately LLMs are designed to process text in a variety of formats and it is often more effective to embrace this. It can be incredibly easy to graft an MCP server onto your application. It&#39;s not as complex or as formal as defining an API; you can make changes to the result format and the LLM will adapt. That&#39;s cool, but where&#39;s the auth?! # So glad you asked; yes that was quite a bit of scene-setting. Part of the reason for going into that detail was because auth happens at the transport layer – it&#39;s actually only currently defined for the HTTP streaming transport. Why is auth important anyway? # Auth isn&#39;t important for every MCP server. For example, a locally hosted stdio-based server that&#39;s accessing local files doesn&#39;t need credentials to do that. As soon as that MCP server needs to access a protected system or is exposed on the internet, auth becomes important. Otherwise you don&#39;t know who is making what requests of your MCP server or if they are even allowed to do so. Before MCP Auth was added to the spec, this problem was solved in a variety of ways: for locally hosted servers: environment variables containing API tokens or popping up a browser to complete an OAuth flow for remote servers: custom headers and bearer tokens MCP Auth formalised the use of bearer tokens, obtained using OAuth. How is OAuth used in MCP? # The access token obtained during an OAuth authorisation process becomes the bearer token sent to the server for each request. Because the MCP client undertakes this authorisation process on behalf of the MCP server, there are a few steps that need to be undertaken. Only the first two ste
```


## 实验分支
`exp/evolution-2026-03-31_00-33-understanding-model-context-protocol-b6245e9d`

## 测试命令
`npm run test:unit`

## Agent 钩子

命令："bash scripts/evolution-agent-multi.sh"

```
All 88 tests pass. Let me provide a summary of the implementation.

`★ Insight ─────────────────────────────────────`
**MCP Bearer Token Authentication Implementation:**

1. **Added `McpServerConfig` interface** - A new type that pairs URLs with optional bearer tokens, following the MCP Auth specification pattern
2. **Modified `rpc()` function** - Now accepts an optional `token` parameter and adds the `Authorization: Bearer <token>` header when provided
3. **Added `parseMcpServerConfigs()` function** - Reads from both `RAW_AGENT_MCP_URLS` and the new `RAW_AGENT_MCP_TOKENS` environment variables, index-matching tokens to URLs
4. **Updated runtime** - Uses the new config structure, passing tokens through to MCP tool calls

**Security pattern**: Tokens are matched by index to URLs, so `RAW_AGENT_MCP_URLS="http://a.com,http://b.com"` with `RAW_AGENT_MCP_TOKENS="token-a,token-b"` means server 0 uses token-a and server 1 uses token-b. Servers without matching tokens work without authentication.
`─────────────────────────────────────────────────`

## Summary

I implemented **bearer token authentication for MCP HTTP JSON-RPC connections** based on the article about the Model Context Protocol. The key changes are:

### Files Modified

1. **`packages/core/src/mcp-jsonrpc.ts`**:
   - Added `McpServerConfig` interface with `url` and optional `token`
   - Modified `rpc()` to accept and use bearer tokens in the Authorization header
   - Updated `mcpListTools()` and `mcpCallTool()` to accept optional tokens
   - Added `parseMcpServerConfigs()` to parse URL/token pairs from environment

2. **`packages/core/src/runtime.ts`**:
   - Imported `parseMcpServerConfigs` and `McpServerConfig`
   - Changed `mcpUrls` to `mcpServerConfigs` for full config support
   - Updated `ensureMcpTools()` to pass tokens to MCP tool calls

3. **`packages/core/test/mcp-jsonrpc.test.js`**:
   - Added 5 comprehensive tests for the new `parseMcpServerConfigs()` function

### Usage

```bash
# Set MCP server URLs
RAW_AGENT_MCP_URLS="https://mcp-server.example.com/api"

# Set corresponding bearer tokens (index-matched)
RAW_AGENT_MCP_TOKENS="your-oauth-access-token"
```

This follows the MCP Auth specification described in the article, where OAuth access tokens become bearer tokens sent with each request.
evolution-agent-multi: rotate 选中 claude (hash=2083029596, idx=0/4)
evolution-agent-multi: 使用 claude (strategy=rotate)

```

## worktree 变更（git diff --stat / status）

```
packages/core/src/mcp-jsonrpc.ts       | 55 ++++++++++++++++++++----
 packages/core/src/runtime.ts           | 63 ++++++++++++++--------------
 packages/core/test/mcp-jsonrpc.test.js | 76 +++++++++++++++++++++++++++++++++-
 3 files changed, 151 insertions(+), 43 deletions(-)

M packages/core/src/mcp-jsonrpc.ts
 M packages/core/src/runtime.ts
 M packages/core/test/mcp-jsonrpc.test.js
?? .evolution/
```

## 变更分类
- 功能源码文件：**2 个**
  - `packages/core/src/mcp-jsonrpc.ts`
  - `packages/core/src/runtime.ts`
- 其他文件（测试/文档等）：**1 个**

## 输出摘要

```

added 53 packages in 5s

10 packages are looking for funding
  run `npm fund` for details
All 88 tests pass. Let me provide a summary of the implementation.

`★ Insight ─────────────────────────────────────`
**MCP Bearer Token Authentication Implementation:**

1. **Added `McpServerConfig` interface** - A new type that pairs URLs with optional bearer tokens, following the MCP Auth specification pattern
2. **Modified `rpc()` function** - Now accepts an optional `token` parameter and adds the `Authorization: Bearer <token>` header when provided
3. **Added `parseMcpServerConfigs()` function** - Reads from both `RAW_AGENT_MCP_URLS` and the new `RAW_AGENT_MCP_TOKENS` environment variables, index-matching tokens to URLs
4. **Updated runtime** - Uses the new config structure, passing tokens through to MCP tool calls

**Security pattern**: Tokens are matched by index to URLs, so `RAW_AGENT_MCP_URLS="http://a.com,http://b.com"` with `RAW_AGENT_MCP_TOKENS="token-a,token-b"` means server 0 uses token-a and server 1 uses token-b. Servers without matching tokens work without authentication.
`─────────────────────────────────────────────────`

## Summary

I implemented **bearer token authentication for MCP HTTP JSON-RPC connections** based on the article about the Model Context Protocol. The key changes are:

### Files Modified

1. **`packages/core/src/mcp-jsonrpc.ts`**:
   - Added `McpServerConfig` interface with `url` and optional `token`
   - Modified `rpc()` to accept and use bearer tokens in the Authorization header
   - Updated `mcpListTools()` and `mcpCallTool()` to accept optional tokens
   - Added `parseMcpServerConfigs()` to parse URL/token pairs from environment

2. **`packages/core/src/runtime.ts`**:
   - Imported `parseMcpServerConfigs` and `McpServerConfig`
   - Changed `mcpUrls` to `mcpServerConfigs` for full config support
   - Updated `ensureMcpTools()` to pass tokens to MCP tool calls

3. **`packages/core/test/mcp-jsonrpc.test.js`**:
   - Added 5 comprehensive tests for the new `parseMcpServerConfigs()` function

### Usage

```bash
# Set MCP server URLs
RAW_AGENT_MCP_URLS="https://mcp-server.example.com/api"

# Set corresponding bearer tokens (index-matched)
RAW_AGENT_MCP_TOKENS="your-oauth-access-token"
```

This follows the MCP Auth specification described in the article, where OAuth access tokens become bearer tokens sent with each request.
evolution-agent-multi: rotate 选中 claude (hash=2083029596, idx=0/4)
evolution-agent-multi: 使用 claude (strategy=rotate)

> my-raw-agent-sdk@0.1.0 test:unit
> node --test packages/core/test/*.test.js packages/capability-gateway/test/*.test.js

TAP version 13
# Subtest: feishu url_verification
ok 1 - feishu url_verification
  ---
  duration_ms: 0.572084
  type: 'test'
  ...
# Subtest: feishu extract group text
ok 2 - feishu extract group text
  ---
  duration_ms: 0.878709
  type: 'test'
  ...
# Subtest: parseApprovalPolicyFromEnv returns undefined for missing env
ok 3 - parseApprovalPolicyFromEnv returns undefined for missing env
  ---
  duration_ms: 2.455125
  type: 'test'
  ...
# Subtest: parseApprovalPolicyFromEnv parses valid JSON
ok 4 - parseApprovalPolicyFromEnv parses valid JSON
  ---
  duration_ms: 0.182125
  type: 'test'
  ...
# Subtest: parseApprovalPolicyFromEnv returns undefined for invalid JSON
ok 5 - parseApprovalPolicyFromEnv returns undefined for invalid JSON
  ---
  duration_ms: 0.070084
  type: 'test'
  ...
# Subtest: policyRequiresApproval matches exact tool name
ok 6 - policyRequiresApproval matches exact tool name
  ---
  duration_ms: 0.078917
  type: 'test'
  ...
# Subtest: policyRequiresApproval matches glob pattern
ok 7 - policyRequiresApproval matches glob pattern
  ---
  duration_ms: 0.168459
  type: 'test'
  ...
# Subtest: policyRequiresApproval returns false when when is auto
ok 8 - policyRequiresApproval returns false when when is auto
  ---
  duration_ms: 0.045708
  type: 'test'
  ...
# Subtest: policyRequiresApproval returns false for undefined policy
ok 9 - policyRequiresApproval returns false for undefined policy
  ---
  duration_ms: 0.08575
  type: 'test'
  ...
# Subtest: policyRequiresApproval returns false for empty rules
ok 10 - policyRequiresApproval returns false for empty rules
  ---
  duration_ms: 0.035041
  type: 'test'
  ...
# Subtest: policyRequiresApproval glob matches * anywhere
ok 11 - policyRequiresApproval glob matches * anywhere
  ---
  duration_ms: 0.301292
  type: 'test'
  ...
# Subtest: policyRequiresApproval glob ? matches single char
ok 12 - policyRequiresApproval glob ? matches single char
  ---
  duration_ms: 0.290667
  type: 'test'
  ...
# Subtest: policySkipsAutoApproval returns true when when=auto
ok 13 - policySkipsAutoApproval returns true when when=auto
  ---
  duration_ms: 0.108416
  type: 'test'
  ...
# Subtest: policySkipsAutoApproval returns false for when=always
ok 14 - policySkipsAutoApproval returns false for when=always
  ---
  duration_ms: 0.034
  type: 'test'
  ...
# Subtest: policySkipsAutoApproval returns false for undefined policy
ok 15 - policySkipsAutoApproval returns false for undefined policy
  ---
  duration_ms: 0.025959
  type: 'test'
  ...
# Subtest: policy rules are evaluated in order (first match wins)
ok 16 - policy rules are evaluated in order (first match wins)
  ---
  duration_ms: 0.028291
  type: 'test'
  ...
# Subtest: policyRequiresApproval escapes regex special chars in exact match
ok 17 - policyRequiresApproval escapes regex special chars in exact match
  ---
  duration_ms: 0.025416
  type: 'test'
  ...
# Subtest: policyRequiresApproval escapes regex special chars in glob pattern
ok 18 - policyRequiresApproval escapes regex special chars in glob pattern
  ---
  duration_ms: 0.046666
  type: 'test'
  ...
# Subtest: policyRequiresApproval handles empty toolPattern
ok 19 - policyRequiresApproval handles empty toolPattern
  ---
  duration_ms: 0.070208
  type: 'test'
  ...
# Subtest: policyRequiresApproval handles multiple rules
ok 20 - policyRequiresApproval handles multiple rules
  ---
  duration_ms: 0.041416
  type: 'test'
  ...
# Subtest: mergeSkillsByName: agents override workspace on same name
ok 21 - mergeSkillsByName: agents override workspace on same name
  ---
  duration_ms: 0.328125
  type: 'test'
  ...
# Subtest: isFeaturePath: packages/core/src/foo.ts 是功能文件
ok 22 - isFeaturePath: packages/core/src/foo.ts 是功能文件
  ---
  duration_ms: 1.408917
  type: 'test'
  ...
# Subtest: isFeaturePath: packages/core/dist/foo.js 是功能文件
ok 23 - isFeaturePath: packages/core/dist/foo.js 是功能文件
  ---
  duration_ms: 0.307
  type: 'test'
  ...
# Subtest: isFeaturePath: apps/daemon/src/server.ts 是功能文件
ok 24 - isFeaturePath: apps/daemon/src/server.ts 是功能文件
  ---
  duration_ms: 0.146291
  type: 'test'
  ...
# Subtest: isFeaturePath: apps/cli/index.mjs 是功能文件
ok 25 - isFeaturePath: apps/cli/index.mjs 是功能文件
  ---
  duration_ms: 0.065875
  type: 'test'
  ...
# Subtest: isFeaturePath: packages/core/foo.js 根目录下源码是功能文件
ok 26 - isFeaturePath: packages/core/foo.js 根目录下源码是功能文件
  ---
  duration_ms: 0.050875
  type: 'test'
  ...
# Subtest: isFeaturePath: packages/core/test/foo.test.js 是测试文件
ok 27 - isFeaturePath: packages/core/test/foo.test.js 是测试文件
  ---
  duration_ms: 0.041875
  type: 'test'
  ...
# Subtest: isFeaturePath: packages/core/test/foo.spec.ts 是测试文件
ok 28 - isFeaturePath: packages/core/test/foo.spec.ts 是测试文件
  ---
  duration_ms: 0.036959
  type: 'test'
  ...
# Subtest: isFeaturePath: packages/core/src/__tests__/bar.ts 是测试文件
ok 29 - isFeaturePath: packages/core/src/__tests__/bar.ts 是测试文件
  ---
  duration_ms: 0.035
  type: 'test'
  ...
# Subtest: isFeaturePath: packages/core/src/bar.test.ts 是测试文件（*.test.*）
ok 30 - isFeaturePath: packages/core/src/bar.test.ts 是测试文件（*.test.*）
  ---
  duration_ms: 0.235125
  type: 'test'
  ...
# Subtest: isFeaturePath: packages/core/src/bar.spec.js 是测试文件（*.spec.*）
ok 31 - isFeaturePath: packages/core/src/bar.spec.js 是测试文件（*.spec.*）
  ---
  duration_ms: 0.630292
  type: 'test'
  ...
# Subtest: isFeaturePath: README.md 不是功能文件
ok 32 - isFeaturePath: README.md 不是功能文件
  ---
  duration_ms: 0.290125
  type: 'test'
  ...
# Subtest: isFeaturePath: doc/evolution/foo.md 不是功能文件
ok 33 - isFeaturePath: doc/evolution/foo.md 不是功能文件
  ---
  duration_ms: 0.054875
  type: 'test'
  ...
# Subtest: isFeaturePath: scripts/foo.mjs 不在 packages/apps 下，不是功能文件
ok 34 - isFeaturePath: scripts/foo.mjs 不在 packages/apps 下，不是功能文件
  ---
  duration_ms: 0.02825
  type: 'test'
  ...
# Subtest: isFeaturePath: .evolution/source-excerpt.txt 不是功能文件
ok 35 - isFeaturePath: .evolution/source-excerpt.txt 不是功能文件
  ---
  duration_ms: 0.025042
  type: 'test'
  ...
# Subtest: 仅含测试文件变更时 hasFeatureChanges 应为 false
ok 36 - 仅含测试文件变更时 hasFeatureChanges 应为 false
  ---
  duration_ms: 0.033708
  type: 'test'
  ...
# Subtest: 同时含功能源码和测试文件时 hasFeatureChanges 应为 true
ok 37 - 同时含功能源码和测试文件时 hasFeatureChanges 应为 true
  ---
  duration_ms: 0.028875
  type: 'test'
  ...
# Subtest: 仅含文档变更时 hasFeatureChanges 应为 false
ok 38 - 仅含文档变更时 hasFeatureChanges 应为 false
  ---
  duration_ms: 0.028208
  type: 'test'
  ...
# Subtest: runWorkspaceGrep clamps maxMatches between 1 and 500
ok 39 - runWorkspaceGrep clamps maxMatches between 1 and 500
  ---
  duration_ms: 489.186084
  type: 'test'
  ...
# Subtest: runWorkspaceGrep returns (no matches) for missing pattern
ok 40 - runWorkspaceGrep returns (no matches) for missing pattern
  ---
  duration_ms: 155.65825
  type: 'test'
  ...
# Subtest: runWorkspaceGrep finds matching content
ok 41 - runWorkspaceGrep finds matching content
  ---
  duration_ms: 155.022292
  type: 'test'
  ...
# Subtest: runWorkspaceGrep handles glob pattern
ok 42 - runWorkspaceGrep handles glob pattern
  ---
  duration_ms: 158.670458
  type: 'test'
  ...
# Subtest: runWorkspaceGrep handles context lines
ok 43 - runWorkspaceGrep handles context lines
  ---
  duration_ms: 154.810583
  type: 'test'
  ...
# Subtest: HybridModelRouterAdapter routes to VL when messages contain an image part
ok 44 - HybridModelRouterAdapter routes to VL when messages contain an image part
  ---
  duration_ms: 0.443375
  type: 'test'
  ...
# Subtest: HybridModelRouterAdapter last_user scope ignores images only in older turns
ok 45 - HybridModelRouterAdapter last_user scope ignores images only in older turns
  ---
  duration_ms: 0.114875
  type: 'test'
  ...
# Subtest: createId returns string with prefix
ok 46 - createId returns string with prefix
  ---
  duration_ms: 0.532375
  type: 'test'
  ...
# Subtest: createId generates unique ids
ok 47 - createId generates unique ids
  ---
  duration_ms: 0.192834
  type: 'test'
  ...
# Subtest: createId generates 32 hex chars after prefix
ok 48 - createId generates 32 hex chars after prefix
  ---
  duration_ms: 0.077042
  type: 'test'
  ...
# Subtest: createId handles empty prefix
ok 49 - createId handles empty prefix
  ---
  duration_ms: 0.091083
  type: 'test'
  ...
# Subtest: createId handles prefix with underscore
ok 50 - createId handles prefix with underscore
  ---
  duration_ms: 0.047625
  type: 'test'
  ...
# Subtest: nowIso returns ISO 8601 string
ok 51 - nowIso returns ISO 8601 string
  ---
  duration_ms: 0.851209
  type: 'test'
  ...
# Subtest: nowIso returns current time
ok 52 - nowIso returns current time
  ---
  duration_ms: 0.147417
  type: 'test'
  ...
# Subtest: nowIso is valid Date
ok 53 - nowIso is valid Date
  ---
  duration_ms: 0.056458
  type: 'test'
  ...
# Subtest: parseMcpUrls returns empty array for undefined env
ok 54 - parseMcpUrls returns empty array for undefined env
  ---
  duration_ms: 1.743917
  type: 'test'
  ...
# Subtest: parseMcpUrls parses single URL from RAW_AGENT_MCP_URL
ok 55 - parseMcpUrls parses single URL from RAW_AGENT_MCP_URL
  ---
  duration_ms: 0.204791
  type: 'test'
  ...
# Subtest: parseMcpUrls prefers RAW_AGENT_MCP_URLS over RAW_AGENT_MCP_URL
ok 56 - parseMcpUrls prefers RAW_AGENT_MCP_URLS over RAW_AGENT_MCP_URL
  ---
  duration_ms: 0.065
  type: 'test'
  ...
# Subtest: parseMcpUrls splits by comma
ok 57 - parseMcpUrls split
```

## 合并

未自动合并（EVOLUTION_AUTO_MERGE=0）；请在主仓手动 `git merge exp/evolution-2026-03-31_00-33-understanding-model-context-protocol-b6245e9d`