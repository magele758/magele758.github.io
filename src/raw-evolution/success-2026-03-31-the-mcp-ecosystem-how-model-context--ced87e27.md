# 实验成功：The MCP Ecosystem: How Model Context Protocol Is Becoming the HTTP of AI Agents

## 来源
- [The MCP Ecosystem: How Model Context Protocol Is Becoming the HTTP of AI Agents](https://primitivesai.substack.com/p/the-mcp-ecosystem-how-a-protocol)

## 来源正文摘录（抓取）
_抓取来源正文失败：fetch failed_


## 实验分支
`exp/evolution-2026-03-31_00-33-the-mcp-ecosystem-how-model-context--ced87e27`

## 测试命令
`npm run test:unit`

## Agent 钩子

命令："bash scripts/evolution-agent-multi.sh"

```
All 90 tests pass. Let me provide a summary of the implementation.

`★ Insight ─────────────────────────────────────`
The MCP (Model Context Protocol) tool discovery improvement demonstrates key design principles:
1. **Symmetry with invoke** - `mcp_list_tools` mirrors `mcp_invoke`'s server indexing scheme, making the API intuitive
2. **Graceful degradation** - Per-server error handling allows partial success when querying multiple servers
3. **Self-documenting output** - Formatted output includes server indices that can be directly used with `mcp_invoke`
`─────────────────────────────────────────────────`

## Summary

I implemented a meaningful improvement to the MCP ecosystem integration in this agent runtime:

### Changes Made

**`packages/core/src/runtime.ts`** - Added `mcp_list_tools` tool:
- Accepts optional `server` index to query a specific MCP server
- When omitted, lists all tools from all configured MCP servers
- Returns formatted output showing tool names, descriptions (truncated to 80 chars), and server indices
- Handles errors gracefully per-server (one server failing doesn't block others)
- Updated `mcp_invoke` error message to guide users to use `mcp_list_tools` for discovery

**`packages/core/test/mcp-jsonrpc.test.js`** - Added comprehensive tests:
- Tests for `mcpListTools`: URL normalization, parsing, error handling
- Tests for `mcpCallTool`: content extraction, error flags, fallback behavior
- All tests use mocked `fetch` to avoid network dependencies

### Why This Matters

Previously, agents using `mcp_invoke` had no way to discover what tools were available on MCP servers. They would have to blindly invoke tools or rely on external documentation. Now agents can:

1. List all available MCP tools across all configured servers
2. See tool descriptions and input schemas
3. Know the correct server indices to use with `mcp_invoke`
4. Get helpful error messages when things go wrong
evolution-agent-multi: rotate 选中 claude (hash=2928300364, idx=0/4)
evolution-agent-multi: 使用 claude (strategy=rotate)

```

## worktree 变更（git diff --stat / status）

```
packages/core/src/runtime.ts           |  70 +++++++++++++++--
 packages/core/test/mcp-jsonrpc.test.js | 137 ++++++++++++++++++++++++++++++++-
 2 files changed, 198 insertions(+), 9 deletions(-)

M packages/core/src/runtime.ts
 M packages/core/test/mcp-jsonrpc.test.js
?? .evolution/
```

## 变更分类
- 功能源码文件：**1 个**
  - `packages/core/src/runtime.ts`
- 其他文件（测试/文档等）：**1 个**

## 输出摘要

```

added 53 packages in 4s

10 packages are looking for funding
  run `npm fund` for details
All 90 tests pass. Let me provide a summary of the implementation.

`★ Insight ─────────────────────────────────────`
The MCP (Model Context Protocol) tool discovery improvement demonstrates key design principles:
1. **Symmetry with invoke** - `mcp_list_tools` mirrors `mcp_invoke`'s server indexing scheme, making the API intuitive
2. **Graceful degradation** - Per-server error handling allows partial success when querying multiple servers
3. **Self-documenting output** - Formatted output includes server indices that can be directly used with `mcp_invoke`
`─────────────────────────────────────────────────`

## Summary

I implemented a meaningful improvement to the MCP ecosystem integration in this agent runtime:

### Changes Made

**`packages/core/src/runtime.ts`** - Added `mcp_list_tools` tool:
- Accepts optional `server` index to query a specific MCP server
- When omitted, lists all tools from all configured MCP servers
- Returns formatted output showing tool names, descriptions (truncated to 80 chars), and server indices
- Handles errors gracefully per-server (one server failing doesn't block others)
- Updated `mcp_invoke` error message to guide users to use `mcp_list_tools` for discovery

**`packages/core/test/mcp-jsonrpc.test.js`** - Added comprehensive tests:
- Tests for `mcpListTools`: URL normalization, parsing, error handling
- Tests for `mcpCallTool`: content extraction, error flags, fallback behavior
- All tests use mocked `fetch` to avoid network dependencies

### Why This Matters

Previously, agents using `mcp_invoke` had no way to discover what tools were available on MCP servers. They would have to blindly invoke tools or rely on external documentation. Now agents can:

1. List all available MCP tools across all configured servers
2. See tool descriptions and input schemas
3. Know the correct server indices to use with `mcp_invoke`
4. Get helpful error messages when things go wrong
evolution-agent-multi: rotate 选中 claude (hash=2928300364, idx=0/4)
evolution-agent-multi: 使用 claude (strategy=rotate)

> my-raw-agent-sdk@0.1.0 test:unit
> node --test packages/core/test/*.test.js packages/capability-gateway/test/*.test.js

TAP version 13
# Subtest: feishu url_verification
ok 1 - feishu url_verification
  ---
  duration_ms: 0.585458
  type: 'test'
  ...
# Subtest: feishu extract group text
ok 2 - feishu extract group text
  ---
  duration_ms: 0.137375
  type: 'test'
  ...
# Subtest: parseApprovalPolicyFromEnv returns undefined for missing env
ok 3 - parseApprovalPolicyFromEnv returns undefined for missing env
  ---
  duration_ms: 1.543625
  type: 'test'
  ...
# Subtest: parseApprovalPolicyFromEnv parses valid JSON
ok 4 - parseApprovalPolicyFromEnv parses valid JSON
  ---
  duration_ms: 0.144541
  type: 'test'
  ...
# Subtest: parseApprovalPolicyFromEnv returns undefined for invalid JSON
ok 5 - parseApprovalPolicyFromEnv returns undefined for invalid JSON
  ---
  duration_ms: 0.061334
  type: 'test'
  ...
# Subtest: policyRequiresApproval matches exact tool name
ok 6 - policyRequiresApproval matches exact tool name
  ---
  duration_ms: 0.069416
  type: 'test'
  ...
# Subtest: policyRequiresApproval matches glob pattern
ok 7 - policyRequiresApproval matches glob pattern
  ---
  duration_ms: 0.159583
  type: 'test'
  ...
# Subtest: policyRequiresApproval returns false when when is auto
ok 8 - policyRequiresApproval returns false when when is auto
  ---
  duration_ms: 0.042666
  type: 'test'
  ...
# Subtest: policyRequiresApproval returns false for undefined policy
ok 9 - policyRequiresApproval returns false for undefined policy
  ---
  duration_ms: 0.084875
  type: 'test'
  ...
# Subtest: policyRequiresApproval returns false for empty rules
ok 10 - policyRequiresApproval returns false for empty rules
  ---
  duration_ms: 0.034625
  type: 'test'
  ...
# Subtest: policyRequiresApproval glob matches * anywhere
ok 11 - policyRequiresApproval glob matches * anywhere
  ---
  duration_ms: 0.295708
  type: 'test'
  ...
# Subtest: policyRequiresApproval glob ? matches single char
ok 12 - policyRequiresApproval glob ? matches single char
  ---
  duration_ms: 0.305542
  type: 'test'
  ...
# Subtest: policySkipsAutoApproval returns true when when=auto
ok 13 - policySkipsAutoApproval returns true when when=auto
  ---
  duration_ms: 0.110125
  type: 'test'
  ...
# Subtest: policySkipsAutoApproval returns false for when=always
ok 14 - policySkipsAutoApproval returns false for when=always
  ---
  duration_ms: 0.037917
  type: 'test'
  ...
# Subtest: policySkipsAutoApproval returns false for undefined policy
ok 15 - policySkipsAutoApproval returns false for undefined policy
  ---
  duration_ms: 0.025708
  type: 'test'
  ...
# Subtest: policy rules are evaluated in order (first match wins)
ok 16 - policy rules are evaluated in order (first match wins)
  ---
  duration_ms: 0.028917
  type: 'test'
  ...
# Subtest: policyRequiresApproval escapes regex special chars in exact match
ok 17 - policyRequiresApproval escapes regex special chars in exact match
  ---
  duration_ms: 0.026458
  type: 'test'
  ...
# Subtest: policyRequiresApproval escapes regex special chars in glob pattern
ok 18 - policyRequiresApproval escapes regex special chars in glob pattern
  ---
  duration_ms: 0.051875
  type: 'test'
  ...
# Subtest: policyRequiresApproval handles empty toolPattern
ok 19 - policyRequiresApproval handles empty toolPattern
  ---
  duration_ms: 0.026083
  type: 'test'
  ...
# Subtest: policyRequiresApproval handles multiple rules
ok 20 - policyRequiresApproval handles multiple rules
  ---
  duration_ms: 0.044042
  type: 'test'
  ...
# Subtest: mergeSkillsByName: agents override workspace on same name
ok 21 - mergeSkillsByName: agents override workspace on same name
  ---
  duration_ms: 0.32125
  type: 'test'
  ...
# Subtest: isFeaturePath: packages/core/src/foo.ts 是功能文件
ok 22 - isFeaturePath: packages/core/src/foo.ts 是功能文件
  ---
  duration_ms: 1.174833
  type: 'test'
  ...
# Subtest: isFeaturePath: packages/core/dist/foo.js 是功能文件
ok 23 - isFeaturePath: packages/core/dist/foo.js 是功能文件
  ---
  duration_ms: 0.600167
  type: 'test'
  ...
# Subtest: isFeaturePath: apps/daemon/src/server.ts 是功能文件
ok 24 - isFeaturePath: apps/daemon/src/server.ts 是功能文件
  ---
  duration_ms: 0.05975
  type: 'test'
  ...
# Subtest: isFeaturePath: apps/cli/index.mjs 是功能文件
ok 25 - isFeaturePath: apps/cli/index.mjs 是功能文件
  ---
  duration_ms: 0.0425
  type: 'test'
  ...
# Subtest: isFeaturePath: packages/core/foo.js 根目录下源码是功能文件
ok 26 - isFeaturePath: packages/core/foo.js 根目录下源码是功能文件
  ---
  duration_ms: 0.044833
  type: 'test'
  ...
# Subtest: isFeaturePath: packages/core/test/foo.test.js 是测试文件
ok 27 - isFeaturePath: packages/core/test/foo.test.js 是测试文件
  ---
  duration_ms: 0.039792
  type: 'test'
  ...
# Subtest: isFeaturePath: packages/core/test/foo.spec.ts 是测试文件
ok 28 - isFeaturePath: packages/core/test/foo.spec.ts 是测试文件
  ---
  duration_ms: 0.219583
  type: 'test'
  ...
# Subtest: isFeaturePath: packages/core/src/__tests__/bar.ts 是测试文件
ok 29 - isFeaturePath: packages/core/src/__tests__/bar.ts 是测试文件
  ---
  duration_ms: 0.071459
  type: 'test'
  ...
# Subtest: isFeaturePath: packages/core/src/bar.test.ts 是测试文件（*.test.*）
ok 30 - isFeaturePath: packages/core/src/bar.test.ts 是测试文件（*.test.*）
  ---
  duration_ms: 0.259375
  type: 'test'
  ...
# Subtest: isFeaturePath: packages/core/src/bar.spec.js 是测试文件（*.spec.*）
ok 31 - isFeaturePath: packages/core/src/bar.spec.js 是测试文件（*.spec.*）
  ---
  duration_ms: 0.284625
  type: 'test'
  ...
# Subtest: isFeaturePath: README.md 不是功能文件
ok 32 - isFeaturePath: README.md 不是功能文件
  ---
  duration_ms: 0.133083
  type: 'test'
  ...
# Subtest: isFeaturePath: doc/evolution/foo.md 不是功能文件
ok 33 - isFeaturePath: doc/evolution/foo.md 不是功能文件
  ---
  duration_ms: 0.034209
  type: 'test'
  ...
# Subtest: isFeaturePath: scripts/foo.mjs 不在 packages/apps 下，不是功能文件
ok 34 - isFeaturePath: scripts/foo.mjs 不在 packages/apps 下，不是功能文件
  ---
  duration_ms: 0.025875
  type: 'test'
  ...
# Subtest: isFeaturePath: .evolution/source-excerpt.txt 不是功能文件
ok 35 - isFeaturePath: .evolution/source-excerpt.txt 不是功能文件
  ---
  duration_ms: 0.02375
  type: 'test'
  ...
# Subtest: 仅含测试文件变更时 hasFeatureChanges 应为 false
ok 36 - 仅含测试文件变更时 hasFeatureChanges 应为 false
  ---
  duration_ms: 0.031
  type: 'test'
  ...
# Subtest: 同时含功能源码和测试文件时 hasFeatureChanges 应为 true
ok 37 - 同时含功能源码和测试文件时 hasFeatureChanges 应为 true
  ---
  duration_ms: 0.029125
  type: 'test'
  ...
# Subtest: 仅含文档变更时 hasFeatureChanges 应为 false
ok 38 - 仅含文档变更时 hasFeatureChanges 应为 false
  ---
  duration_ms: 0.028666
  type: 'test'
  ...
# Subtest: runWorkspaceGrep clamps maxMatches between 1 and 500
ok 39 - runWorkspaceGrep clamps maxMatches between 1 and 500
  ---
  duration_ms: 485.25775
  type: 'test'
  ...
# Subtest: runWorkspaceGrep returns (no matches) for missing pattern
ok 40 - runWorkspaceGrep returns (no matches) for missing pattern
  ---
  duration_ms: 150.905667
  type: 'test'
  ...
# Subtest: runWorkspaceGrep finds matching content
ok 41 - runWorkspaceGrep finds matching content
  ---
  duration_ms: 151.597334
  type: 'test'
  ...
# Subtest: runWorkspaceGrep handles glob pattern
ok 42 - runWorkspaceGrep handles glob pattern
  ---
  duration_ms: 157.234541
  type: 'test'
  ...
# Subtest: runWorkspaceGrep handles context lines
ok 43 - runWorkspaceGrep handles context lines
  ---
  duration_ms: 154.864333
  type: 'test'
  ...
# Subtest: HybridModelRouterAdapter routes to VL when messages contain an image part
ok 44 - HybridModelRouterAdapter routes to VL when messages contain an image part
  ---
  duration_ms: 0.444333
  type: 'test'
  ...
# Subtest: HybridModelRouterAdapter last_user scope ignores images only in older turns
ok 45 - HybridModelRouterAdapter last_user scope ignores images only in older turns
  ---
  duration_ms: 0.112667
  type: 'test'
  ...
# Subtest: createId returns string with prefix
ok 46 - createId returns string with prefix
  ---
  duration_ms: 0.53725
  type: 'test'
  ...
# Subtest: createId generates unique ids
ok 47 - createId generates unique ids
  ---
  duration_ms: 0.186333
  type: 'test'
  ...
# Subtest: createId generates 32 hex chars after prefix
ok 48 - createId generates 32 hex chars after prefix
  ---
  duration_ms: 0.0705
  type: 'test'
  ...
# Subtest: createId handles empty prefix
ok 49 - createId handles empty prefix
  ---
  duration_ms: 0.09
  type: 'test'
  ...
# Subtest: createId handles prefix with underscore
ok 50 - createId handles prefix with underscore
  ---
  duration_ms: 0.046459
  type: 'test'
  ...
# Subtest: nowIso returns ISO 8601 string
ok 51 - nowIso returns ISO 8601 string
  ---
  duration_ms: 0.967625
  type: 'test'
  ...
# Subtest: nowIso returns current time
ok 52 - nowIso returns current time
  ---
  duration_ms: 0.137916
  type: 'test'
  ...
# Subtest: nowIso is valid Date
ok 53 - nowIso is valid Date
  ---
  duration_ms: 0.055
  type: 'test'
  ...
# Subtest: parseMcpUrls returns empty array for undefined env
ok 54 - parseMcpUrls returns empty array for undefined env
  ---
  duration_ms: 1.562458
  type: 'test'
  ...
# Subtest: parseMcpUrls parses single URL from RAW_AGENT_MCP_URL
ok 55 - parseMcpUrls parses single URL from RAW_AGENT_MCP_URL
  ---
  duration_ms: 0.1965
  type: 'test'
  ...
# Subtest: parseMcpUrls prefers RAW_AGENT_MCP_URLS over RAW_AGENT_MCP_URL
ok 56 - parseMcpUrls prefers RAW_AGENT_MCP_URLS over RAW_AGENT_MCP_URL
  ---
  duration_ms: 0.064917
  type: 'test'
  ...
# Subtest: parseMcpUrls splits by comma
ok 57 - parseMcpUrls splits by comma
  ---
  duration_ms: 0.051125
  type: 'test'
  ...
# Subtest: parseMcpUrls splits by semicolon
ok 58 - parseMcpUrls splits by semicolon
  ---
  duration_ms: 0.052625
  type: 'test'
  ...
# Subtest: parseMcpUrls splits by whitespace
ok 59 - parseMcpUrls splits by whitespace
  ---
  duration_ms: 0.092625
  type: 'test'
  ...
# Subtest: parseMcpUrls trims whitespace
```

## 合并

未自动合并（EVOLUTION_AUTO_MERGE=0）；请在主仓手动 `git merge exp/evolution-2026-03-31_00-33-the-mcp-ecosystem-how-model-context--ced87e27`