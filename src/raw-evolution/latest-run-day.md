# evolution-run-day 最近一次

[2026-03-31T01:45:38.305Z] 启动
[2026-03-31T01:45:38.307Z] inbox: /Users/penglei/developer/self-test-grounding/ppeng-agent-core/doc/evolution/inbox/2026-03-30.md
[2026-03-31T01:45:38.307Z] 解析: inbox 内共 148 条链接，本跑取前 10 条（EVOLUTION_MAX_ITEMS=10）
[2026-03-31T01:45:38.307Z] 策略: 目标分支=main, 测试=npm run test:unit, npm ci=执行, 构建=npx tsc -b packages/core packages/capability-gateway, 自动合并=否
[2026-03-31T01:45:38.307Z] 说明：每条会先抓取来源 URL 的正文摘录（供对照）；验证阶段在本仓库独立 worktree 跑白名单测试，不克隆外链仓库。
[2026-03-31T01:45:38.307Z] Agent 钩子: 已启用 "bash scripts/evolution-agent-full.sh"（见 EVOLUTION_AGENT_CMD）
[2026-03-31T01:45:38.307Z] 并发: 3（EVOLUTION_CONCURRENCY，上限 3）
[2026-03-31T01:45:38.308Z] [1/10] ━━ 开始 ━━
[2026-03-31T01:45:38.308Z] [1/10] 标题: Show HN: ClamBot – AI agent that runs all LLM-generated code in a WASM sandbox
[2026-03-31T01:45:38.308Z] [1/10] 链接: https://github.com/clamguy/clambot
[2026-03-31T01:45:38.328Z] [2/10] ━━ 开始 ━━
[2026-03-31T01:45:38.328Z] [2/10] 标题: MCP Registry – Open-source discovery layer for 20 Model Context Protocol servers
[2026-03-31T01:45:38.328Z] [2/10] 链接: https://github.com/SirhanMacx/mcp-registry
[2026-03-31T01:45:38.328Z] [3/10] ━━ 开始 ━━
[2026-03-31T01:45:38.328Z] [3/10] 标题: The MCP Ecosystem: How Model Context Protocol Is Becoming the HTTP of AI Agents
[2026-03-31T01:45:38.328Z] [3/10] 链接: https://primitivesai.substack.com/p/the-mcp-ecosystem-how-a-protocol
[2026-03-31T01:45:39.846Z] [1/10] 来源正文已抓取 14000 字（1538ms）
[2026-03-31T01:45:39.846Z] [1/10] slug=show-hn-clambot-ai-agent-that-runs-a-85987e11 → 分支 exp/evolution-2026-03-31_01-45-show-hn-clambot-ai-agent-that-runs-a-85987e11，worktree /Users/penglei/developer/self-test-grounding/ppeng-agent-core/.evolution-worktrees/2026-03-31_01-45-show-hn-clambot-ai-agent-that-runs-a-85987e11
[2026-03-31T01:45:39.884Z] [2/10] 来源正文已抓取 5826 字（1556ms）
[2026-03-31T01:45:39.884Z] [2/10] slug=mcp-registry-open-source-discovery-l-d215b555 → 分支 exp/evolution-2026-03-31_01-45-mcp-registry-open-source-discovery-l-d215b555，worktree /Users/penglei/developer/self-test-grounding/ppeng-agent-core/.evolution-worktrees/2026-03-31_01-45-mcp-registry-open-source-discovery-l-d215b555
[2026-03-31T01:45:39.928Z] [1/10] 清理旧 worktree/分支 (82ms)
[2026-03-31T01:45:39.943Z] [2/10] 清理旧 worktree/分支 (59ms)
[2026-03-31T01:45:40.005Z] [2/10] git worktree add → exit=0 (62ms)
[2026-03-31T01:45:40.005Z] [1/10] git worktree add → exit=0 (77ms)
[2026-03-31T01:45:40.005Z] [2/10] 已拷贝主仓 .env → worktree
[2026-03-31T01:45:40.005Z] [1/10] 已拷贝主仓 .env → worktree
[2026-03-31T01:45:40.006Z] [2/10] 已拷贝 gateway.config.json → worktree/gateway.config.json
[2026-03-31T01:45:40.008Z] [1/10] 已拷贝 gateway.config.json → worktree/gateway.config.json
[2026-03-31T01:45:45.793Z] [1/10] npm ci → exit=0 (5785ms)
[2026-03-31T01:45:45.794Z] [1/10] 已写入 .evolution/source-excerpt.txt 与 .evolution/constraints.txt
[2026-03-31T01:45:45.797Z] [2/10] npm ci → exit=0 (5791ms)
[2026-03-31T01:45:45.797Z] [2/10] 已写入 .evolution/source-excerpt.txt 与 .evolution/constraints.txt
[2026-03-31T01:45:48.829Z] [3/10] 来源正文抓取失败或为空: fetch failed（10501ms）
[2026-03-31T01:45:48.829Z] [3/10] slug=the-mcp-ecosystem-how-model-context--ced87e27 → 分支 exp/evolution-2026-03-31_01-45-the-mcp-ecosystem-how-model-context--ced87e27，worktree /Users/penglei/developer/self-test-grounding/ppeng-agent-core/.evolution-worktrees/2026-03-31_01-45-the-mcp-ecosystem-how-model-context--ced87e27
[2026-03-31T01:45:48.892Z] [3/10] 清理旧 worktree/分支 (63ms)
[2026-03-31T01:45:48.943Z] [3/10] git worktree add → exit=0 (50ms)
[2026-03-31T01:45:48.943Z] [3/10] 已拷贝主仓 .env → worktree
[2026-03-31T01:45:48.944Z] [3/10] 已拷贝 gateway.config.json → worktree/gateway.config.json
[2026-03-31T01:45:53.203Z] [3/10] npm ci → exit=0 (4259ms)
[2026-03-31T01:45:53.204Z] [3/10] 已写入 .evolution/source-excerpt.txt 与 .evolution/constraints.txt
[2026-03-31T01:46:17.963Z] [3/10] Agent 钩子 → exit=0 (24759ms)
[2026-03-31T01:46:17.963Z] [3/10] Agent 主动跳过: The source excerpt section is empty - no content was provided to evaluate. I cannot identify any specific technique, pattern, or API behavior to implement without the actual article or documentation c → 已写 doc/evolution/no-op/
[2026-03-31T01:46:18.528Z] [3/10] worktree 已移除
[2026-03-31T01:46:18.575Z] [4/10] ━━ 开始 ━━
[2026-03-31T01:46:18.575Z] [4/10] 标题: Show HN: MCPSec – OWASP MCP Top Scanner for Model Context Protocol Configs
[2026-03-31T01:46:18.575Z] [4/10] 链接: https://github.com/pfrederiksen/mcpsec
[2026-03-31T01:46:20.146Z] [4/10] 来源正文已抓取 14000 字（1571ms）
[2026-03-31T01:46:20.146Z] [4/10] slug=show-hn-mcpsec-owasp-mcp-top-scanner-04679c88 → 分支 exp/evolution-2026-03-31_01-45-show-hn-mcpsec-owasp-mcp-top-scanner-04679c88，worktree /Users/penglei/developer/self-test-grounding/ppeng-agent-core/.evolution-worktrees/2026-03-31_01-45-show-hn-mcpsec-owasp-mcp-top-scanner-04679c88
[2026-03-31T01:46:20.215Z] [4/10] 清理旧 worktree/分支 (69ms)
[2026-03-31T01:46:20.278Z] [4/10] git worktree add → exit=0 (63ms)
[2026-03-31T01:46:20.278Z] [4/10] 已拷贝主仓 .env → worktree
[2026-03-31T01:46:20.279Z] [4/10] 已拷贝 gateway.config.json → worktree/gateway.config.json
[2026-03-31T01:46:24.646Z] [4/10] npm ci → exit=0 (4367ms)
[2026-03-31T01:46:24.647Z] [4/10] 已写入 .evolution/source-excerpt.txt 与 .evolution/constraints.txt
[2026-03-31T01:49:45.952Z] [1/10] Agent 钩子 → exit=0 (240158ms)
[2026-03-31T01:49:46.021Z] [1/10] worktree 变更:
packages/core/src/image-assets.ts | 81 +++++++++++++++++++++++++++++++++++++--
 1 file changed, 78 insertions(+), 3 deletions(-)

M packages/core/src/image-assets.ts
?? .evolution/
?? packages/core/test/image-assets.test.js
[2026-03-31T01:49:46.125Z] [1/10] git commit (agent changes) → exit=0
[2026-03-31T01:49:46.525Z] [1/10] 构建「npx tsc -b packages/core packages/capability-gateway」→ exit=0 (400ms)
[2026-03-31T01:49:48.260Z] [1/10] 测试命令「npm run test:unit」→ exit=0 (1735ms)
[2026-03-31T01:49:48.295Z] [1/10] 变更分类: 功能源码=1 个, 测试/文档=1 个 (packages/core/src/image-assets.ts)
[2026-03-31T01:49:49.211Z] [1/10] worktree 已移除
[2026-03-31T01:49:49.211Z] [1/10] 未自动合并：分支 exp/evolution-2026-03-31_01-45-show-hn-clambot-ai-agent-that-runs-a-85987e11 保留，可手动 git merge
[2026-03-31T01:49:49.212Z] [1/10] 结果: 成功 → 已写 doc/evolution/success/
[2026-03-31T01:49:49.213Z] [5/10] ━━ 开始 ━━
[2026-03-31T01:49:49.213Z] [5/10] 标题: Understanding Model Context Protocol: Connecting Your Software to AI
[2026-03-31T01:49:49.213Z] [5/10] 链接: https://fusionauth.io/articles/ai/mcp-connecting-software-ai
[2026-03-31T01:49:52.118Z] [5/10] 来源正文已抓取 14000 字（2905ms）
[2026-03-31T01:49:52.118Z] [5/10] slug=understanding-model-context-protocol-b6245e9d → 分支 exp/evolution-2026-03-31_01-45-understanding-model-context-protocol-b6245e9d，worktree /Users/penglei/developer/self-test-grounding/ppeng-agent-core/.evolution-worktrees/2026-03-31_01-45-understanding-model-context-protocol-b6245e9d
[2026-03-31T01:49:52.181Z] [5/10] 清理旧 worktree/分支 (63ms)
[2026-03-31T01:49:52.247Z] [5/10] git worktree add → exit=0 (66ms)
[2026-03-31T01:49:52.248Z] [5/10] 已拷贝主仓 .env → worktree
[2026-03-31T01:49:52.248Z] [5/10] 已拷贝 gateway.config.json → worktree/gateway.config.json
[2026-03-31T01:49:56.658Z] [5/10] npm ci → exit=0 (4410ms)
[2026-03-31T01:49:56.659Z] [5/10] 已写入 .evolution/source-excerpt.txt 与 .evolution/constraints.txt
[2026-03-31T01:50:02.229Z] [2/10] Agent 钩子 → exit=0 (256432ms)
[2026-03-31T01:50:02.302Z] [2/10] worktree 变更:
packages/core/src/mcp-jsonrpc.ts       | 62 ++++++++++++++++++++++++++-
 packages/core/src/runtime.ts           | 57 ++++++++++++++++++++++---
 packages/core/test/mcp-jsonrpc.test.js | 78 +++++++++++++++++++++++++++++++++-
 packages/core/test/runtime.test.js     | 57 +++++++++++++++++++++++++
 4 files changed, 245 insertions(+), 9 deletions(-)

M packages/core/src/mcp-jsonrpc.ts
 M packages/core/src/runtime.ts
 M packages/core/test/mcp-jsonrpc.test.js
 M packages/core/test/runtime.test.js
?? .evolution/
[2026-03-31T01:50:02.402Z] [2/10] git commit (agent changes) → exit=0
[2026-03-31T01:50:02.829Z] [2/10] 构建「npx tsc -b packages/core packages/capability-gateway」→ exit=0 (426ms)
[2026-03-31T01:50:04.400Z] [2/10] 测试命令「npm run test:unit」→ exit=0 (1571ms)
[2026-03-31T01:50:04.422Z] [2/10] 变更分类: 功能源码=2 个, 测试/文档=2 个 (packages/core/src/mcp-jsonrpc.ts, packages/core/src/runtime.ts)
[2026-03-31T01:50:05.003Z] [2/10] worktree 已移除
[2026-03-31T01:50:05.003Z] [2/10] 未自动合并：分支 exp/evolution-2026-03-31_01-45-mcp-registry-open-source-discovery-l-d215b555 保留，可手动 git merge
[2026-03-31T01:50:05.003Z] [2/10] 结果: 成功 → 已写 doc/evolution/success/
[2026-03-31T01:50:05.004Z] [6/10] ━━ 开始 ━━
[2026-03-31T01:50:05.004Z] [6/10] 标题: Model Context Protocol works for tools. It breaks for agents
[2026-03-31T01:50:05.004Z] [6/10] 链接: https://blog.vtemian.com/post/mcp-is-great-for-tools-terrible-for-agents/
[2026-03-31T01:50:05.692Z] [6/10] 来源正文已抓取 14000 字（688ms）
[2026-03-31T01:50:05.693Z] [6/10] slug=model-context-protocol-works-for-too-dbcb075f → 分支 exp/evolution-2026-03-31_01-45-model-context-protocol-works-for-too-dbcb075f，worktree /Users/penglei/developer/self-test-grounding/ppeng-agent-core/.evolution-worktrees/2026-03-31_01-45-model-context-protocol-works-for-too-dbcb075f
[2026-03-31T01:50:05.765Z] [6/10] 清理旧 worktree/分支 (72ms)
[2026-03-31T01:50:05.826Z] [6/10] git worktree add → exit=0 (61ms)
[2026-03-31T01:50:05.826Z] [6/10] 已拷贝主仓 .env → worktree
[2026-03-31T01:50:05.827Z] [6/10] 已拷贝 gateway.config.json → worktree/gateway.config.json
[2026-03-31T01:50:10.157Z] [6/10] npm ci → exit=0 (4330ms)
[2026-03-31T01:50:10.158Z] [6/10] 已写入 .evolution/source-excerpt.txt 与 .evolution/constraints.txt
[2026-03-31T01:50:30.152Z] [5/10] Agent 钩子 → exit=0 (33493ms)
[2026-03-31T01:50:30.152Z] [5/10] Agent 主动跳过: This article is primarily an educational overview of MCP concepts—transport layers, JSON-RPC format, and OAuth-based authentication flow—without providing concrete implementation details or code patte → 已写 doc/evolution/no-op/
[2026-03-31T01:50:30.829Z] [5/10] worktree 已移除
[2026-03-31T01:50:30.884Z] [7/10] ━━ 开始 ━━
[2026-03-31T01:50:30.884Z] [7/10] 标题: Show HN: The MCP Blueprint – First Comprehensive Book on Model Context Protocol
[2026-03-31T01:50:30.884Z] [7/10] 链接: https://www.amazon.com/dp/B0GPNSPK3Y
[2026-03-31T01:50:33.147Z] [7/10] 来源正文已抓取 14000 字（2263ms）
[2026-03-31T01:50:33.147Z] [7/10] slug=show-hn-the-mcp-blueprint-first-comp-86876032 → 分支 exp/evolution-2026-03-31_01-45-show-hn-the-mcp-blueprint-first-comp-86876032，worktree /Users/penglei/developer/self-test-grounding/ppeng-agent-core/.evolution-worktrees/2026-03-31_01-45-show-hn-the-mcp-blueprint-first-comp-86876032
[2026-03-31T01:50:33.213Z] [7/10] 清理旧 worktree/分支 (66ms)
[2026-03-31T01:50:33.275Z] [7/10] git worktree add → exit=0 (62ms)
[2026-03-31T01:50:33.276Z] [7/10] 已拷贝主仓 .env → worktree
[2026-03-31T01:50:33.276Z] [7/10] 已拷贝 gateway.config.json → worktree/gateway.config.json
[2026-03-31T01:50:37.932Z] [7/10] npm ci → exit=0 (4656ms)
[2026-03-31T01:50:37.933Z] [7/10] 已写入 .evolution/source-excerpt.txt 与 .evolution/constraints.txt
[2026-03-31T01:51:27.463Z] [7/10] Agent 钩子 → exit=0 (49530ms)
[2026-03-31T01:51:27.463Z] [7/10] Agent 主动跳过: This is an Amazon Kindle product listing page for a book about MCP, not technical content with implementable details. The page contains only marketing copy describing what the book covers (architectur → 已写 doc/evolution/no-op/
[2026-03-31T01:51:28.009Z] [7/10] worktree 已移除
[2026-03-31T01:51:28.042Z] [8/10] ━━ 开始 ━━
[2026-03-31T01:51:28.042Z] [8/10] 标题: Show HN: MCP4H – A human-centric extension for the Model Context Protocol
[2026-03-31T01:51:28.042Z] [8/10] 链接: https://mcp4h.github.io/
[2026-03-31T01:51:28.671Z] [8/10] 来源正文已抓取 10415 字（629ms）
[2026-03-31T01:51:28.671Z] [8/10] slug=show-hn-mcp4h-a-human-centric-extens-0fa8c378 → 分支 exp/evolution-2026-03-31_01-45-show-hn-mcp4h-a-human-centric-extens-0fa8c378，worktree /Users/penglei/developer/self-test-grounding/ppeng-agent-core/.evolution-worktrees/2026-03-31_01-45-show-hn-mcp4h-a-human-centric-extens-0fa8c378
[2026-03-31T01:51:28.736Z] [8/10] 清理旧 worktree/分支 (65ms)
[2026-03-31T01:51:28.789Z] [8/10] git worktree add → exit=0 (53ms)
[2026-03-31T01:51:28.789Z] [8/10] 已拷贝主仓 .env → worktree
[2026-03-31T01:51:28.789Z] [8/10] 已拷贝 gateway.config.json → worktree/gateway.config.json
[2026-03-31T01:51:33.421Z] [8/10] npm ci → exit=0 (4632ms)
[2026-03-31T01:51:33.422Z] [8/10] 已写入 .evolution/source-excerpt.txt 与 .evolution/constraints.txt
[2026-03-31T01:51:42.451Z] [4/10] Agent 钩子 → exit=0 (317804ms)
[2026-03-31T01:51:42.531Z] [4/10] worktree 变更:
packages/core/src/mcp-jsonrpc.ts       | 47 ++++++++++++++++++++++++++++++----
 packages/core/src/runtime.ts           |  6 ++---
 packages/core/test/mcp-jsonrpc.test.js | 47 +++++++++++++++++++++++++++++-----
 3 files changed, 84 insertions(+), 16 deletions(-)

M packages/core/src/mcp-jsonrpc.ts
 M packages/core/src/runtime.ts
 M packages/core/test/mcp-jsonrpc.test.js
?? .evolution/
[2026-03-31T01:51:42.646Z] [4/10] git commit (agent changes) → exit=0
[2026-03-31T01:51:43.036Z] [4/10] 构建「npx tsc -b packages/core packages/capability-gateway」→ exit=0 (390ms)
[2026-03-31T01:51:44.630Z] [4/10] 测试命令「npm run test:unit」→ exit=0 (1594ms)
[2026-03-31T01:51:44.652Z] [4/10] 变更分类: 功能源码=2 个, 测试/文档=3 个 (packages/core/src/mcp-jsonrpc.ts, packages/core/src/runtime.ts)
[2026-03-31T01:51:45.346Z] [4/10] worktree 已移除
[2026-03-31T01:51:45.346Z] [4/10] 未自动合并：分支 exp/evolution-2026-03-31_01-45-show-hn-mcpsec-owasp-mcp-top-scanner-04679c88 保留，可手动 git merge
[2026-03-31T01:51:45.346Z] [4/10] 结果: 成功 → 已写 doc/evolution/success/
[2026-03-31T01:51:45.347Z] [9/10] ━━ 开始 ━━
[2026-03-31T01:51:45.347Z] [9/10] 标题: Show HN: Open-source security scanner for MCP (Model Context Protocol) servers
[2026-03-31T01:51:45.347Z] [9/10] 链接: https://www.npmjs.com/package/mcp-security-auditor
[2026-03-31T01:51:45.801Z] [9/10] 来源正文抓取失败或为空: HTTP 403（454ms）
[2026-03-31T01:51:45.801Z] [9/10] slug=show-hn-open-source-security-scanner-311e8e5a → 分支 exp/evolution-2026-03-31_01-45-show-hn-open-source-security-scanner-311e8e5a，worktree /Users/penglei/developer/self-test-grounding/ppeng-agent-core/.evolution-worktrees/2026-03-31_01-45-show-hn-open-source-security-scanner-311e8e5a
[2026-03-31T01:51:45.864Z] [9/10] 清理旧 worktree/分支 (63ms)
[2026-03-31T01:51:45.924Z] [9/10] git worktree add → exit=0 (60ms)
[2026-03-31T01:51:45.925Z] [9/10] 已拷贝主仓 .env → worktree
[2026-03-31T01:51:45.925Z] [9/10] 已拷贝 gateway.config.json → worktree/gateway.config.json
[2026-03-31T01:51:50.379Z] [9/10] npm ci → exit=0 (4454ms)
[2026-03-31T01:51:50.380Z] [9/10] 已写入 .evolution/source-excerpt.txt 与 .evolution/constraints.txt
[2026-03-31T01:52:39.942Z] [9/10] Agent 钩子 → exit=0 (49562ms)
[2026-03-31T01:52:39.943Z] [9/10] Agent 主动跳过: No source excerpt was provided for evaluation. The "## Source Excerpt" section is empty, so there is no article content to analyze for potential improvements to the agent runtime repository. → 已写 doc/evolution/no-op/
[2026-03-31T01:52:40.486Z] [9/10] worktree 已移除
[2026-03-31T01:52:40.519Z] [10/10] ━━ 开始 ━━
[2026-03-31T01:52:40.519Z] [10/10] 标题: The Model Context Protocol Book
[2026-03-31T01:52:40.519Z] [10/10] 链接: https://cloudstreet-dev.github.io/MCP-Model-Context-Protocol/
[2026-03-31T01:52:41.111Z] [10/10] 来源正文已抓取 4504 字（592ms）
[2026-03-31T01:52:41.111Z] [10/10] slug=the-model-context-protocol-book-cc9a65da → 分支 exp/evolution-2026-03-31_01-45-the-model-context-protocol-book-cc9a65da，worktree /Users/penglei/developer/self-test-grounding/ppeng-agent-core/.evolution-worktrees/2026-03-31_01-45-the-model-context-protocol-book-cc9a65da
[2026-03-31T01:52:41.180Z] [10/10] 清理旧 worktree/分支 (69ms)
[2026-03-31T01:52:41.240Z] [10/10] git worktree add → exit=0 (60ms)
[2026-03-31T01:52:41.240Z] [10/10] 已拷贝主仓 .env → worktree
[2026-03-31T01:52:41.241Z] [10/10] 已拷贝 gateway.config.json → worktree/gateway.config.json
[2026-03-31T01:52:45.674Z] [10/10] npm ci → exit=0 (4433ms)
[2026-03-31T01:52:45.675Z] [10/10] 已写入 .evolution/source-excerpt.txt 与 .evolution/constraints.txt
[2026-03-31T01:53:10.960Z] [10/10] Agent 钩子 → exit=0 (25285ms)
[2026-03-31T01:53:10.960Z] [10/10] Agent 主动跳过: This is a table of contents for a book about MCP - it lists chapter topics (architecture, wire protocol, tools/resources/prompts, transports, security, production patterns) but contains no actual tech → 已写 doc/evolution/no-op/
[2026-03-31T01:53:11.487Z] [10/10] worktree 已移除
[2026-03-31T01:55:21.821Z] [6/10] Agent 钩子 → exit=1 (311663ms)
[2026-03-31T01:55:21.822Z] [6/10] Agent 钩子失败摘录:
…(截断)…
rn `${base}${code}: ${detail}`;
+}
+
+export function mcpProxyToolName(serverIndex: number, toolName: string): string {
+  const normalized = toolName
+    .trim()
+    .toLowerCase()
+    .replace(/[^a-z0-9]+/g, '_')
+    .replace(/^_+|_+$/g, '');
+  return `mcp_${serverIndex}_${normalized || 'tool'}`;
+}
+
+export function normalizeMcpInputSchema(inputSchema?: Record<string, unknown>): Record<string, unknown> {
+  if (!inputSchema || typeof inputSchema !== 'object' || Array.isArray(inputSchema) || Object.keys(inputSchema).length === 0) {
+    return {
+      type: 'object',
+      additionalProperties: true
+    };
+  }
+  return inputSchema;
+}
+
 async function rpc(url: string, method: string, params: Record<string, unknown>): Promise<unknown> {
   const body = {
     jsonrpc: '2.0',
@@ -18,18 +68,18 @@
   });
   const text = await response.text();
   if (!response.ok) {
-    throw new Error(`MCP HTTP ${response.status}: ${text.slice(0, 200)}`);
+    throw new Error(`MCP HTTP ${response.status}: ${summarizeBody(text)}`);
   }
-  const parsed = JSON.parse(text) as { result?: unknown; error?: { message?: string } };
+  const parsed = parseJsonRpcEnvelope(text);
   if (parsed.error) {
-    throw new Error(parsed.error.message ?? 'MCP error');
+    throw new Error(formatRpcError(parsed.error));
   }
   return parsed.result;
 }
 
 /** Best-effort tools/list for HTTP JSON-RPC MCP servers. */
 export async function mcpListTools(baseUrl: string): Promise<McpToolInfo[]> {
-  const result = (await rpc(baseUrl.replace(/\/$/, ''), 'tools/list', {})) as {
+  const result = (await rpc(normalizeBaseUrl(baseUrl), 'tools/list', {})) as {
     tools?: Array<{ name: string; description?: string; inputSchema?: Record<string, unknown> }>;
   };
   return (result.tools ?? []).map((t) => ({
@@ -44,7 +94,7 @@
   name: string,
   args: Record<string, unknown>
 ): Promise<{ content: string; isError?: boolean }> {
-  const result = (await rpc(baseUrl.replace(/\/$/, ''), 'tools/call', {
+  const result = (await rpc(normalizeBaseUrl(baseUrl), 'tools/call', {
     name,
     arguments: args
   })) as {

ERROR: You've hit your usage limit. Upgrade to Pro (https://chatgpt.com/explore/pro), visit https://chatgpt.com/codex/settings/usage to purchase more credits or try again at 1:35 PM.
ERROR: You've hit your usage limit. Upgrade to Pro (https://chatgpt.com/explore/pro), visit https://chatgpt.com/codex/settings/usage to purchase more credits or try again at 1:35 PM.
tokens used
51,819

[2026-03-31T01:55:22.502Z] [6/10] worktree 已移除
[2026-03-31T01:55:22.502Z] [6/10] 结果: 失败（Agent 钩子非零）→ 已写 doc/evolution/failure/
[2026-03-31T01:56:31.009Z] [8/10] Agent 钩子 → exit=1 (297587ms)
[2026-03-31T01:56:31.009Z] [8/10] Agent 钩子失败摘录:
…(截断)…
is explicit: servers advertise policy support via capabilities.experimental.policy = true . Tool invocation without a policy. Tool invocation with a policy applied. Policy validation error. Policy enforcing immutability. Permissions I wanted to use a set of permissions that is easy for the user to manage at a high level while also allowing the user to dig deeper and configure it in detail when needed. Scopes that scale across tools The goal is to let users tune permissions per session or per agent without drowning them in hundreds of tool-specific toggles. A flat permission list does not scale when you have dozens of MCP tools. A hierarchical scope layout solves this. Across all tools, the root capabilities should collapse into a small, clear set like read , write and execute . That lets users quickly tune an agent at a broad level before deciding whether they need finer control. For example you might easily set up an agent that has read:* but disallowed write:* for a high level distinction. Granularity when you actually need it Scopes can carry detail, e.g. write:file:/path/to . This keeps the base policy simple while still allowing fine-grained control when a specific tool needs it. It also lets you express cases like write:file allowed but write:database denied, or vice-versa. Dynamic permission requests Example: a file server starts with configured roots. If the LLM tries to write outside those roots, the server returns an error by default, but also includes requested_scopes in _meta such as write:file:/new/path . The agent UI can ask the user to allow or deny the request. If the user approves, the call is replayed with granted_scopes . The grant can be stored for the session or only for that request. Permission flow lives in the agent layer Permission checks and prompts are not handled by the MCP server and do not pass through the LLM. The agent framework mediates approval and decides when to persist grants per session or per agent, based on what the workflow needs. mcp4h MCP Proposals
ERROR: Reconnecting... 2/5
ERROR: Reconnecting... 3/5
ERROR: Reconnecting... 4/5
ERROR: Reconnecting... 5/5
ERROR: You've hit your usage limit. Upgrade to Pro (https://chatgpt.com/explore/pro), visit https://chatgpt.com/codex/settings/usage to purchase more credits or try again at 1:35 PM.
ERROR: You've hit your usage limit. Upgrade to Pro (https://chatgpt.com/explore/pro), visit https://chatgpt.com/codex/settings/usage to purchase more credits or try again at 1:35 PM.

[2026-03-31T01:56:31.678Z] [8/10] worktree 已移除
[2026-03-31T01:56:31.678Z] [8/10] 结果: 失败（Agent 钩子非零）→ 已写 doc/evolution/failure/
[2026-03-31T01:56:31.717Z] 全部条目处理完毕
[2026-03-31T01:56:31.717Z] 可读摘要 → doc/evolution/runs/latest-run-day.md

（终端亦有相同时间戳行；设 `EVOLUTION_NO_RUN_LOG=1` 可禁用本文件）