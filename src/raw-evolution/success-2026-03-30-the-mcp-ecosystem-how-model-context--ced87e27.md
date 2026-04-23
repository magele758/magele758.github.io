# 实验成功：The MCP Ecosystem: How Model Context Protocol Is Becoming the HTTP of AI Agents

## 来源
- [The MCP Ecosystem: How Model Context Protocol Is Becoming the HTTP of AI Agents](https://primitivesai.substack.com/p/the-mcp-ecosystem-how-a-protocol)

## 来源正文摘录（抓取）
_抓取来源正文失败：fetch failed_


## 实验分支
`exp/evolution-2026-03-30-the-mcp-ecosystem-how-model-context--ced87e27`

## 测试命令
`npm run test:unit`

## Agent 钩子

命令："bash scripts/evolution-agent-claude.sh"

```

> my-raw-agent-sdk@0.1.0 ai:claude
> bash scripts/ai-cli/run-claude-fix.sh

repo: /Users/penglei/developer/self-test-grounding/ppeng-agent-core/.evolution-worktrees/2026-03-30-the-mcp-ecosystem-how-model-context--ced87e27
using: claude -p（文档: docs/EXTERNAL_AI_CLI.md）
I need your help. The file write permissions are being blocked. Could you please approve the permission requests in the Claude Code UI? I see the permission prompts are appearing but awaiting your approval.

Here's what I'm trying to do - **6 files total**: 1 bug fix and 5 new/updated test files. Please approve all the permission prompts that appear, and I'll execute all the writes once approved.

**Summary of changes:**

| File | Change | Impact |
|------|--------|--------|
| `packages/core/src/read-file-range.ts` | Add try/finally to close stream + readline | Bug fix: prevents FD leak |
| `packages/core/test/id.test.js` | New: 4 tests for `createId`/`nowIso` | Covers untested utility |
| `packages/core/test/mcp-jsonrpc.test.js` | New: 8 tests for `parseMcpUrls` | Covers env parsing edge cases |
| `packages/core/test/approval-policy.test.js` | New: 13 tests for policy functions | Covers glob matching, JSON parsing |
| `packages/core/test/read-file-range.test.js` | New: 6 tests for file reading | Tests truncation, offsets, empty files |
| `packages/core/test/token-estimate.test.js` | Expanded: 3->11 tests | Covers empty, tool_result, boundaries |

Once you approve the permissions, I'll write all files and run the test suite to verify everything passes.

```

## worktree 变更（git diff --stat / status）

```
?? .evolution/
```

## 输出摘要

```

added 53 packages in 4s

10 packages are looking for funding
  run `npm fund` for details

> my-raw-agent-sdk@0.1.0 ai:claude
> bash scripts/ai-cli/run-claude-fix.sh

repo: /Users/penglei/developer/self-test-grounding/ppeng-agent-core/.evolution-worktrees/2026-03-30-the-mcp-ecosystem-how-model-context--ced87e27
using: claude -p（文档: docs/EXTERNAL_AI_CLI.md）
I need your help. The file write permissions are being blocked. Could you please approve the permission requests in the Claude Code UI? I see the permission prompts are appearing but awaiting your approval.

Here's what I'm trying to do - **6 files total**: 1 bug fix and 5 new/updated test files. Please approve all the permission prompts that appear, and I'll execute all the writes once approved.

**Summary of changes:**

| File | Change | Impact |
|------|--------|--------|
| `packages/core/src/read-file-range.ts` | Add try/finally to close stream + readline | Bug fix: prevents FD leak |
| `packages/core/test/id.test.js` | New: 4 tests for `createId`/`nowIso` | Covers untested utility |
| `packages/core/test/mcp-jsonrpc.test.js` | New: 8 tests for `parseMcpUrls` | Covers env parsing edge cases |
| `packages/core/test/approval-policy.test.js` | New: 13 tests for policy functions | Covers glob matching, JSON parsing |
| `packages/core/test/read-file-range.test.js` | New: 6 tests for file reading | Tests truncation, offsets, empty files |
| `packages/core/test/token-estimate.test.js` | Expanded: 3->11 tests | Covers empty, tool_result, boundaries |

Once you approve the permissions, I'll write all files and run the test suite to verify everything passes.

> my-raw-agent-sdk@0.1.0 test:unit
> node --test packages/core/test/*.test.js packages/capability-gateway/test/*.test.js

TAP version 13
# Subtest: feishu url_verification
ok 1 - feishu url_verification
  ---
  duration_ms: 0.559209
  type: 'test'
  ...
# Subtest: feishu extract group text
ok 2 - feishu extract group text
  ---
  duration_ms: 0.573
  type: 'test'
  ...
# Subtest: mergeSkillsByName: agents override workspace on same name
ok 3 - mergeSkillsByName: agents override workspace on same name
  ---
  duration_ms: 0.299958
  type: 'test'
  ...
# Subtest: HybridModelRouterAdapter routes to VL when messages contain an image part
ok 4 - HybridModelRouterAdapter routes to VL when messages contain an image part
  ---
  duration_ms: 0.410625
  type: 'test'
  ...
# Subtest: HybridModelRouterAdapter last_user scope ignores images only in older turns
ok 5 - HybridModelRouterAdapter last_user scope ignores images only in older turns
  ---
  duration_ms: 0.108292
  type: 'test'
  ...
# (node:27331) ExperimentalWarning: SQLite is an experimental feature and might change at any time
# (Use `node --trace-warnings ...` to show where the warning was created)
# Subtest: chat session can do a simple reply through the raw loop
ok 6 - chat session can do a simple reply through the raw loop
  ---
  duration_ms: 39.59475
  type: 'test'
  ...
# Subtest: task sessions complete and bind an isolated workspace
ok 7 - task sessions complete and bind an isolated workspace
  ---
  duration_ms: 18.548417
  type: 'test'
  ...
# Subtest: approval blocks the session until the user approves the tool call
ok 8 - approval blocks the session until the user approves the tool call
  ---
  duration_ms: 13.046583
  type: 'test'
  ...
# Subtest: read_file can list a directory passed by path
ok 9 - read_file can list a directory passed by path
  ---
  duration_ms: 13.542708
  type: 'test'
  ...
# Subtest: tool execution errors are returned to the model instead of crashing the session
ok 10 - tool execution errors are returned to the model instead of crashing the session
  ---
  duration_ms: 13.553959
  type: 'test'
  ...
# Subtest: teammate sessions and mailbox messages can be created directly
ok 11 - teammate sessions and mailbox messages can be created directly
  ---
  duration_ms: 12.269917
  type: 'test'
  ...
# Subtest: parallel tool calls execute in one assistant message
ok 12 - parallel tool calls execute in one assistant message
  ---
  duration_ms: 11.960708
  type: 'test'
  ...
# Subtest: scratch memory is copied to subagent session
ok 13 - scratch memory is copied to subagent session
  ---
  duration_ms: 12.925375
  type: 'test'
  ...
# Subtest: read_file offset_line returns a window
ok 14 - read_file offset_line returns a window
  ---
  duration_ms: 14.530583
  type: 'test'
  ...
# Subtest: scheduler dequeue wakes sessions enqueued on task create
ok 15 - scheduler dequeue wakes sessions enqueued on task create
  ---
  duration_ms: 28.179416
  type: 'test'
  ...
# Subtest: harness_write_spec writes under repo when no workspace
ok 16 - harness_write_spec writes under repo when no workspace
  ---
  duration_ms: 19.827209
  type: 'test'
  ...
# Subtest: task_update merges metadata shallowly
ok 17 - task_update merges metadata shallowly
  ---
  duration_ms: 6.774708
  type: 'test'
  ...
# Subtest: createApproval idempotency key returns same pending row
ok 18 - createApproval idempotency key returns same pending row
  ---
  duration_ms: 6.807084
  type: 'test'
  ...
# Subtest: external AI tools are absent unless RAW_AGENT_EXTERNAL_AI_TOOLS is set
ok 19 - external AI tools are absent unless RAW_AGENT_EXTERNAL_AI_TOOLS is set
  ---
  duration_ms: 6.791375
  type: 'test'
  ...
# Subtest: external AI tools are registered when RAW_AGENT_EXTERNAL_AI_TOOLS=1
ok 20 - external AI tools are registered when RAW_AGENT_EXTERNAL_AI_TOOLS=1
  ---
  duration_ms: 5.947666
  type: 'test'
  ...
# Subtest: normalizeSelfHealPolicy defaults
ok 21 - normalizeSelfHealPolicy defaults
  ---
  duration_ms: 0.622916
  type: 'test'
  ...
# Subtest: npmScriptForSelfHealPolicy presets
ok 22 - npmScriptForSelfHealPolicy presets
  ---
  duration_ms: 0.076375
  type: 'test'
  ...
# Subtest: custom npm script validation
ok 23 - custom npm script validation
  ---
  duration_ms: 0.134833
  type: 'test'
  ...
# Subtest: normalizeSelfHealPolicy caps maxFixIterations
ok 24 - normalizeSelfHealPolicy caps maxFixIterations
  ---
  duration_ms: 0.098042
  type: 'test'
  ...
# Subtest: estimateTokensFromText is positive for non-empty
ok 25 - estimateTokensFromText is positive for non-empty
  ---
  duration_ms: 0.369708
  type: 'test'
  ...
# Subtest: estimateMessageTokens sums roles and parts
ok 26 - estimateMessageTokens sums roles and parts
  ---
  duration_ms: 0.068875
  type: 'test'
  ...
# Subtest: estimateMessageTokens counts image parts
ok 27 - estimateMessageTokens counts image parts
  ---
  duration_ms: 0.048875
  type: 'test'
  ...
1..27
# tests 27
# suites 0
# pass 27
# fail 0
# cancelled 0
# skipped 0
# todo 0
# duration_ms 291.8335

```

## 合并

已合并。Commit: 36d577aa9a405e931d610fcdd885f0bebe76c511