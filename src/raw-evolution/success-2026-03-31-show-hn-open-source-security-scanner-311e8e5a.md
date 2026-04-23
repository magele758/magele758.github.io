# 实验成功：Show HN: Open-source security scanner for MCP (Model Context Protocol) servers

## 来源
- [Show HN: Open-source security scanner for MCP (Model Context Protocol) servers](https://www.npmjs.com/package/mcp-security-auditor)

## 来源正文摘录（抓取）
_抓取来源正文失败：HTTP 403_


## 实验分支
`exp/evolution-2026-03-31_00-33-show-hn-open-source-security-scanner-311e8e5a`

## 测试命令
`npm run test:unit`

## Agent 钩子

命令："bash scripts/evolution-agent-multi.sh"

```

消息里的摘录为空，我按 worktree 主题与 `skills/agent-tech-digest` 里「MCP 安全扫描」相关条目，在 **HTTP JSON-RPC MCP 客户端**上做了加固。

### 改动摘要
1. **`packages/core/src/mcp-jsonrpc.ts`**
   - 新增 **`assertAllowedMcpHttpUrl`**：仅允许 `http`/`https`；禁止 URL 内嵌用户名密码；拦截常见元数据目标（`169.254.169.254`、`metadata.google.internal`）及 IPv6 link-local（`fe80:`）。
   - **`rpc`**：每次请求前校验 URL；默认 **`AbortSignal.timeout(60000)`**（可用 `RAW_AGENT_MCP_TIMEOUT_MS` 覆盖，`0` 表示不超时）；非 JSON 响应时抛出明确错误。
2. **`packages/core/src/runtime.ts`**：`mcpUrls` 改为使用 **`parseMcpUrls(process.env)`**，与解析逻辑单一来源一致。
3. **`packages/core/test/mcp-jsonrpc.test.js`**：为 `assertAllowedMcpHttpUrl` 增加用例。

**说明**：仅执行 `npm run test:unit` 且未先编译时，可能因缺少 `packages/capability-gateway/dist` 失败；先执行 `npx tsc -b packages/core packages/capability-gateway` 后 **`npm run test:unit` 已全部通过**（87 tests）。
evolution-agent-multi: rotate 选中 cursor (hash=4069845231, idx=3/4)
evolution-agent-multi: 使用 cursor (strategy=rotate)

```

## worktree 变更（git diff --stat / status）

```
packages/core/src/mcp-jsonrpc.ts       | 70 +++++++++++++++++++++++++++++++---
 packages/core/src/runtime.ts           |  6 +--
 packages/core/test/mcp-jsonrpc.test.js | 21 +++++++++-
 3 files changed, 86 insertions(+), 11 deletions(-)

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

added 53 packages in 4s

10 packages are looking for funding
  run `npm fund` for details

消息里的摘录为空，我按 worktree 主题与 `skills/agent-tech-digest` 里「MCP 安全扫描」相关条目，在 **HTTP JSON-RPC MCP 客户端**上做了加固。

### 改动摘要
1. **`packages/core/src/mcp-jsonrpc.ts`**
   - 新增 **`assertAllowedMcpHttpUrl`**：仅允许 `http`/`https`；禁止 URL 内嵌用户名密码；拦截常见元数据目标（`169.254.169.254`、`metadata.google.internal`）及 IPv6 link-local（`fe80:`）。
   - **`rpc`**：每次请求前校验 URL；默认 **`AbortSignal.timeout(60000)`**（可用 `RAW_AGENT_MCP_TIMEOUT_MS` 覆盖，`0` 表示不超时）；非 JSON 响应时抛出明确错误。
2. **`packages/core/src/runtime.ts`**：`mcpUrls` 改为使用 **`parseMcpUrls(process.env)`**，与解析逻辑单一来源一致。
3. **`packages/core/test/mcp-jsonrpc.test.js`**：为 `assertAllowedMcpHttpUrl` 增加用例。

**说明**：仅执行 `npm run test:unit` 且未先编译时，可能因缺少 `packages/capability-gateway/dist` 失败；先执行 `npx tsc -b packages/core packages/capability-gateway` 后 **`npm run test:unit` 已全部通过**（87 tests）。
evolution-agent-multi: rotate 选中 cursor (hash=4069845231, idx=3/4)
evolution-agent-multi: 使用 cursor (strategy=rotate)

> my-raw-agent-sdk@0.1.0 test:unit
> node --test packages/core/test/*.test.js packages/capability-gateway/test/*.test.js

TAP version 13
# Subtest: feishu url_verification
ok 1 - feishu url_verification
  ---
  duration_ms: 0.573208
  type: 'test'
  ...
# Subtest: feishu extract group text
ok 2 - feishu extract group text
  ---
  duration_ms: 0.141292
  type: 'test'
  ...
# Subtest: parseApprovalPolicyFromEnv returns undefined for missing env
ok 3 - parseApprovalPolicyFromEnv returns undefined for missing env
  ---
  duration_ms: 1.74975
  type: 'test'
  ...
# Subtest: parseApprovalPolicyFromEnv parses valid JSON
ok 4 - parseApprovalPolicyFromEnv parses valid JSON
  ---
  duration_ms: 0.359916
  type: 'test'
  ...
# Subtest: parseApprovalPolicyFromEnv returns undefined for invalid JSON
ok 5 - parseApprovalPolicyFromEnv returns undefined for invalid JSON
  ---
  duration_ms: 0.146625
  type: 'test'
  ...
# Subtest: policyRequiresApproval matches exact tool name
ok 6 - policyRequiresApproval matches exact tool name
  ---
  duration_ms: 0.233375
  type: 'test'
  ...
# Subtest: policyRequiresApproval matches glob pattern
ok 7 - policyRequiresApproval matches glob pattern
  ---
  duration_ms: 0.47025
  type: 'test'
  ...
# Subtest: policyRequiresApproval returns false when when is auto
ok 8 - policyRequiresApproval returns false when when is auto
  ---
  duration_ms: 0.075416
  type: 'test'
  ...
# Subtest: policyRequiresApproval returns false for undefined policy
ok 9 - policyRequiresApproval returns false for undefined policy
  ---
  duration_ms: 0.101666
  type: 'test'
  ...
# Subtest: policyRequiresApproval returns false for empty rules
ok 10 - policyRequiresApproval returns false for empty rules
  ---
  duration_ms: 0.041584
  type: 'test'
  ...
# Subtest: policyRequiresApproval glob matches * anywhere
ok 11 - policyRequiresApproval glob matches * anywhere
  ---
  duration_ms: 0.324875
  type: 'test'
  ...
# Subtest: policyRequiresApproval glob ? matches single char
ok 12 - policyRequiresApproval glob ? matches single char
  ---
  duration_ms: 0.303834
  type: 'test'
  ...
# Subtest: policySkipsAutoApproval returns true when when=auto
ok 13 - policySkipsAutoApproval returns true when when=auto
  ---
  duration_ms: 0.108708
  type: 'test'
  ...
# Subtest: policySkipsAutoApproval returns false for when=always
ok 14 - policySkipsAutoApproval returns false for when=always
  ---
  duration_ms: 0.036375
  type: 'test'
  ...
# Subtest: policySkipsAutoApproval returns false for undefined policy
ok 15 - policySkipsAutoApproval returns false for undefined policy
  ---
  duration_ms: 0.025292
  type: 'test'
  ...
# Subtest: policy rules are evaluated in order (first match wins)
ok 16 - policy rules are evaluated in order (first match wins)
  ---
  duration_ms: 0.029
  type: 'test'
  ...
# Subtest: policyRequiresApproval escapes regex special chars in exact match
ok 17 - policyRequiresApproval escapes regex special chars in exact match
  ---
  duration_ms: 0.027291
  type: 'test'
  ...
# Subtest: policyRequiresApproval escapes regex special chars in glob pattern
ok 18 - policyRequiresApproval escapes regex special chars in glob pattern
  ---
  duration_ms: 0.050459
  type: 'test'
  ...
# Subtest: policyRequiresApproval handles empty toolPattern
ok 19 - policyRequiresApproval handles empty toolPattern
  ---
  duration_ms: 0.02525
  type: 'test'
  ...
# Subtest: policyRequiresApproval handles multiple rules
ok 20 - policyRequiresApproval handles multiple rules
  ---
  duration_ms: 0.042459
  type: 'test'
  ...
# Subtest: mergeSkillsByName: agents override workspace on same name
ok 21 - mergeSkillsByName: agents override workspace on same name
  ---
  duration_ms: 0.3225
  type: 'test'
  ...
# Subtest: isFeaturePath: packages/core/src/foo.ts 是功能文件
ok 22 - isFeaturePath: packages/core/src/foo.ts 是功能文件
  ---
  duration_ms: 1.446625
  type: 'test'
  ...
# Subtest: isFeaturePath: packages/core/dist/foo.js 是功能文件
ok 23 - isFeaturePath: packages/core/dist/foo.js 是功能文件
  ---
  duration_ms: 0.19125
  type: 'test'
  ...
# Subtest: isFeaturePath: apps/daemon/src/server.ts 是功能文件
ok 24 - isFeaturePath: apps/daemon/src/server.ts 是功能文件
  ---
  duration_ms: 0.045292
  type: 'test'
  ...
# Subtest: isFeaturePath: apps/cli/index.mjs 是功能文件
ok 25 - isFeaturePath: apps/cli/index.mjs 是功能文件
  ---
  duration_ms: 0.040125
  type: 'test'
  ...
# Subtest: isFeaturePath: packages/core/foo.js 根目录下源码是功能文件
ok 26 - isFeaturePath: packages/core/foo.js 根目录下源码是功能文件
  ---
  duration_ms: 0.044542
  type: 'test'
  ...
# Subtest: isFeaturePath: packages/core/test/foo.test.js 是测试文件
ok 27 - isFeaturePath: packages/core/test/foo.test.js 是测试文件
  ---
  duration_ms: 0.036958
  type: 'test'
  ...
# Subtest: isFeaturePath: packages/core/test/foo.spec.ts 是测试文件
ok 28 - isFeaturePath: packages/core/test/foo.spec.ts 是测试文件
  ---
  duration_ms: 0.03375
  type: 'test'
  ...
# Subtest: isFeaturePath: packages/core/src/__tests__/bar.ts 是测试文件
ok 29 - isFeaturePath: packages/core/src/__tests__/bar.ts 是测试文件
  ---
  duration_ms: 0.032167
  type: 'test'
  ...
# Subtest: isFeaturePath: packages/core/src/bar.test.ts 是测试文件（*.test.*）
ok 30 - isFeaturePath: packages/core/src/bar.test.ts 是测试文件（*.test.*）
  ---
  duration_ms: 0.227375
  type: 'test'
  ...
# Subtest: isFeaturePath: packages/core/src/bar.spec.js 是测试文件（*.spec.*）
ok 31 - isFeaturePath: packages/core/src/bar.spec.js 是测试文件（*.spec.*）
  ---
  duration_ms: 0.376917
  type: 'test'
  ...
# Subtest: isFeaturePath: README.md 不是功能文件
ok 32 - isFeaturePath: README.md 不是功能文件
  ---
  duration_ms: 0.13925
  type: 'test'
  ...
# Subtest: isFeaturePath: doc/evolution/foo.md 不是功能文件
ok 33 - isFeaturePath: doc/evolution/foo.md 不是功能文件
  ---
  duration_ms: 0.04075
  type: 'test'
  ...
# Subtest: isFeaturePath: scripts/foo.mjs 不在 packages/apps 下，不是功能文件
ok 34 - isFeaturePath: scripts/foo.mjs 不在 packages/apps 下，不是功能文件
  ---
  duration_ms: 0.027417
  type: 'test'
  ...
# Subtest: isFeaturePath: .evolution/source-excerpt.txt 不是功能文件
ok 35 - isFeaturePath: .evolution/source-excerpt.txt 不是功能文件
  ---
  duration_ms: 0.168709
  type: 'test'
  ...
# Subtest: 仅含测试文件变更时 hasFeatureChanges 应为 false
ok 36 - 仅含测试文件变更时 hasFeatureChanges 应为 false
  ---
  duration_ms: 0.051583
  type: 'test'
  ...
# Subtest: 同时含功能源码和测试文件时 hasFeatureChanges 应为 true
ok 37 - 同时含功能源码和测试文件时 hasFeatureChanges 应为 true
  ---
  duration_ms: 0.038042
  type: 'test'
  ...
# Subtest: 仅含文档变更时 hasFeatureChanges 应为 false
ok 38 - 仅含文档变更时 hasFeatureChanges 应为 false
  ---
  duration_ms: 0.032625
  type: 'test'
  ...
# Subtest: runWorkspaceGrep clamps maxMatches between 1 and 500
ok 39 - runWorkspaceGrep clamps maxMatches between 1 and 500
  ---
  duration_ms: 503.095875
  type: 'test'
  ...
# Subtest: runWorkspaceGrep returns (no matches) for missing pattern
ok 40 - runWorkspaceGrep returns (no matches) for missing pattern
  ---
  duration_ms: 160.944125
  type: 'test'
  ...
# Subtest: runWorkspaceGrep finds matching content
ok 41 - runWorkspaceGrep finds matching content
  ---
  duration_ms: 153.101291
  type: 'test'
  ...
# Subtest: runWorkspaceGrep handles glob pattern
ok 42 - runWorkspaceGrep handles glob pattern
  ---
  duration_ms: 155.863
  type: 'test'
  ...
# Subtest: runWorkspaceGrep handles context lines
ok 43 - runWorkspaceGrep handles context lines
  ---
  duration_ms: 151.677125
  type: 'test'
  ...
# Subtest: HybridModelRouterAdapter routes to VL when messages contain an image part
ok 44 - HybridModelRouterAdapter routes to VL when messages contain an image part
  ---
  duration_ms: 0.556334
  type: 'test'
  ...
# Subtest: HybridModelRouterAdapter last_user scope ignores images only in older turns
ok 45 - HybridModelRouterAdapter last_user scope ignores images only in older turns
  ---
  duration_ms: 0.129167
  type: 'test'
  ...
# Subtest: createId returns string with prefix
ok 46 - createId returns string with prefix
  ---
  duration_ms: 0.530042
  type: 'test'
  ...
# Subtest: createId generates unique ids
ok 47 - createId generates unique ids
  ---
  duration_ms: 0.199542
  type: 'test'
  ...
# Subtest: createId generates 32 hex chars after prefix
ok 48 - createId generates 32 hex chars after prefix
  ---
  duration_ms: 0.076625
  type: 'test'
  ...
# Subtest: createId handles empty prefix
ok 49 - createId handles empty prefix
  ---
  duration_ms: 0.090833
  type: 'test'
  ...
# Subtest: createId handles prefix with underscore
ok 50 - createId handles prefix with underscore
  ---
  duration_ms: 0.049166
  type: 'test'
  ...
# Subtest: nowIso returns ISO 8601 string
ok 51 - nowIso returns ISO 8601 string
  ---
  duration_ms: 0.922583
  type: 'test'
  ...
# Subtest: nowIso returns current time
ok 52 - nowIso returns current time
  ---
  duration_ms: 0.133167
  type: 'test'
  ...
# Subtest: nowIso is valid Date
ok 53 - nowIso is valid Date
  ---
  duration_ms: 0.048292
  type: 'test'
  ...
# Subtest: parseMcpUrls returns empty array for undefined env
ok 54 - parseMcpUrls returns empty array for undefined env
  ---
  duration_ms: 1.437792
  type: 'test'
  ...
# Subtest: parseMcpUrls parses single URL from RAW_AGENT_MCP_URL
ok 55 - parseMcpUrls parses single URL from RAW_AGENT_MCP_URL
  ---
  duration_ms: 0.209458
  type: 'test'
  ...
# Subtest: parseMcpUrls prefers RAW_AGENT_MCP_URLS over RAW_AGENT_MCP_URL
ok 56 - parseMcpUrls prefers RAW_AGENT_MCP_URLS over RAW_AGENT_MCP_URL
  ---
  duration_ms: 0.064375
  type: 'test'
  ...
# Subtest: parseMcpUrls splits by comma
ok 57 - parseMcpUrls splits by comma
  ---
  duration_ms: 0.0505
  type: 'test'
  ...
# Subtest: parseMcpUrls splits by semicolon
ok 58 - parseMcpUrls splits by semicolon
  ---
  duration_ms: 0.053959
  type: 'test'
  ...
# Subtest: parseMcpUrls splits by whitespace
ok 59 - parseMcpUrls splits by whitespace
  ---
  duration_ms: 0.14925
  type: 'test'
  ...
# Subtest: parseMcpUrls trims whitespace from URLs
ok 60 - parseMcpUrls trims whitespace from URLs
  ---
  duration_ms: 0.063
  type: 'test'
  ...
# Subtest: parseMcpUrls filters empty strings
ok 61 - parseMcpUrls filters empty strings
  ---
  duration_ms: 0.104292
  type: 'test'
  ...
# Subtest: assertAllowedMcpHttpUrl accepts plain http(s) URLs
ok 62 - assertAllowedMcpHttpUrl accepts plain http(s) URLs
  ---
  duration_ms: 0.365708
  type: 'test'
  ...
# Subtest: assertAllowedMcpHttpUrl rejects non-http(s) schemes
ok 63 - assertAllowedMcpHttpUrl rejects non-http(s) schemes
  ---
  duration_ms: 0.642416
  type: 'test'
  ...
# Subtest: assertAllowedMcpHttpUrl rejects embedded credentials
ok 64 - assertAllowedMcpHttpUrl rejects embedded credentials
  ---
  duration_ms: 0.13125
  type: 'test'
  ...
# Subtest: assertAllowedMcpHttpUrl blocks metadata-style targets
ok 65 - assertAllowedMcpHttpUrl blocks metadata-style targets
  ---
  duration_ms: 0.242542
  type: 'test'
  ...
# (node:81530) ExperimentalWarning: SQLite is an experimental feature and might change at any time
# (Use `node --trace-warnings ...` to show where the warning was created)
# Subte
```

## 合并

未自动合并（EVOLUTION_AUTO_MERGE=0）；请在主仓手动 `git merge exp/evolution-2026-03-31_00-33-show-hn-open-source-security-scanner-311e8e5a`