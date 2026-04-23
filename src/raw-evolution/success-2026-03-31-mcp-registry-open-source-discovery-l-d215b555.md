# 实验成功：MCP Registry – Open-source discovery layer for 20 Model Context Protocol servers

## 来源
- [MCP Registry – Open-source discovery layer for 20 Model Context Protocol servers](https://github.com/SirhanMacx/mcp-registry)

## 来源正文摘录（抓取）
```
GitHub - SirhanMacx/mcp-registry: Community registry for Model Context Protocol (MCP) servers — verified install commands, tool listings, structured metadata · GitHub Skip to content Navigation Menu Toggle navigation Sign in Appearance settings Platform AI CODE CREATION GitHub Copilot Write better code with AI GitHub Spark Build and deploy intelligent apps GitHub Models Manage and compare prompts MCP Registry New Integrate external tools DEVELOPER WORKFLOWS Actions Automate any workflow Codespaces Instant dev environments Issues Plan and track work Code Review Manage code changes APPLICATION SECURITY GitHub Advanced Security Find and fix vulnerabilities Code security Secure your code as you build Secret protection Stop leaks before they start EXPLORE Why GitHub Documentation Blog Changelog Marketplace View all features Solutions BY COMPANY SIZE Enterprises Small and medium teams Startups Nonprofits BY USE CASE App Modernization DevSecOps DevOps CI/CD View all use cases BY INDUSTRY Healthcare Financial services Manufacturing Government View all industries View all solutions Resources EXPLORE BY TOPIC AI Software Development DevOps Security View all topics EXPLORE BY TYPE Customer stories Events &amp; webinars Ebooks &amp; reports Business insights GitHub Skills SUPPORT &amp; SERVICES Documentation Customer support Community forum Trust center Partners View all resources Open Source COMMUNITY GitHub Sponsors Fund open source developers PROGRAMS Security Lab Maintainer Community Accelerator GitHub Stars Archive Program REPOSITORIES Topics Trending Collections Enterprise ENTERPRISE SOLUTIONS Enterprise platform AI-powered developer platform AVAILABLE ADD-ONS GitHub Advanced Security Enterprise-grade security features Copilot for Business Enterprise-grade AI features Premium Support Enterprise-grade 24/7 support Pricing Search or jump to... Search code, repositories, users, issues, pull requests... --> Search Clear Search syntax tips Provide feedback --> We read every piece of feedback, and take your input very seriously. Include my email address so I can be contacted Cancel Submit feedback Saved searches Use saved searches to filter your results more quickly --> Name Query To see all available qualifiers, see our documentation . Cancel Create saved search Sign in Sign up Appearance settings Resetting focus You signed in with another tab or window. Reload to refresh your session. You signed out in another tab or window. Reload to refresh your session. You switched accounts on another tab or window. Reload to refresh your session. Dismiss alert {{ message }} SirhanMacx / mcp-registry Public Notifications You must be signed in to change notification settings Fork 1 Star 4 Code Issues 0 Pull requests 0 Actions Projects Security 0 Insights Additional navigation options Code Issues Pull requests Actions Projects Security Insights SirhanMacx/mcp-registry main Branches Tags Go to file Code Open more actions menu Folders and files Name Name Last commit message Last commit date Latest commit History 2 Commits 2 Commits .github .github dist dist registry registry schema schema scripts scripts web web CONTRIBUTING.md CONTRIBUTING.md README.md README.md View all files Repository files navigation README Contributing MCP Registry 🔌 The missing discovery layer for Model Context Protocol servers. Problem: MCP is growing fast but finding servers is chaos. There's no canonical registry, no search, no compatibility metadata — just scattered GitHub repos and random awesome-lists. Solution: A community-maintained, searchable registry with structured metadata for every MCP server. What's here registry/ — Structured JSON entries for each MCP server schema/ — JSON schema for registry entries web/ — Static site for browsing/searching (no backend needed) scripts/ — Validation and build tools Entry format { "id" : " sqlite-mcp " , "name" : " SQLite MCP Server " , "description" : " Read/write SQLite databases from any MCP-compatible agent " , "author" : " someone " , "repo" : " https://github.com/someone/sqlite-mcp " , "install" : " npx sqlite-mcp " , "protocol_version" : " 2024-11-05 " , "tools" : [ " query " , " execute " , " list_tables " , " describe_table " ], "prompts" : [], "resources" : [ " sqlite:///{path} " ], "tags" : [ " database " , " sqlite " , " storage " ], "verified" : false , "submitted" : " 2026-03-22 " } Why this matters MCP is becoming the standard way for AI agents to access tools. But right now: Finding servers requires hours of GitHub searching No way to know if a server is maintained or abandoned No compatibility metadata (which clients work with it?) No usage stats or community validation This registry changes that. Contributing Submit a PR adding your server to registry/ . One JSON file per server. The schema validates automatically. Status 🟡 Early — seeding initial entries. PRs welcome. Related Machina Market — Premium MCP server packs (catalog.json for agent-native purchase) MCP Spec MCP SDK About Community registry for Model Context Protocol (MCP) servers — verified install commands, tool listings, structured metadata Topics open-source registry tools mcp ai-agents claude llm model-context-protocol Resources Readme Contributing Contributing Uh oh! There was an error while loading. Please reload this page . Activity Stars 4 stars Watchers 0 watching Forks 1 fork Report repository Releases No releases published Packages 0 &nbsp; &nbsp; &nbsp; Uh oh! There was an error while loading. Please reload this page . Contributors Uh oh! There was an error while loading. Please reload this page . Languages HTML 86.8% Python 13.2% Footer &copy; 2026 GitHub,&nbsp;Inc. Footer navigation Terms Privacy Security Status Community Docs Contact Manage cookies Do not share my personal information You can’t perform that action at this time.
```


## 实验分支
`exp/evolution-2026-03-31_01-45-mcp-registry-open-source-discovery-l-d215b555`

## 测试命令
`npm run test:unit`

## Agent 钩子

命令："bash scripts/evolution-agent-full.sh"

```
在 [runtime.ts](/Users/penglei/developer/self-test-grounding/ppeng-agent-core/.evolution-worktrees/2026-03-31_01-45-mcp-registry-open-source-discovery-l-d215b555/packages/core/src/runtime.ts) 和 [mcp-jsonrpc.ts](/Users/penglei/developer/self-test-grounding/ppeng-agent-core/.evolution-worktrees/2026-03-31_01-45-mcp-registry-open-source-discovery-l-d215b555/packages/core/src/mcp-jsonrpc.ts) 我补了一个真实可用的 MCP discovery 能力。现在只要配置了 `RAW_AGENT_MCP_URLS`，运行时除了 `mcp_invoke` 之外，还会暴露一个只读的 `mcp_discover` 工具，能返回每个 MCP server 的索引、URL、可用 tool 列表，以及单个 server 探测失败时的错误信息。这样模型不再需要盲猜 server 编号和 tool 名，更接近 excerpt 里提到的“registry/discovery layer”。

我也顺手把 MCP URL 解析统一复用了现有 helper，并补了覆盖 discovery 成功、失败、保留 server 索引、可选 schema 输出，以及 runtime 侧工具注册与调用行为的测试，见 [mcp-jsonrpc.test.js](/Users/penglei/developer/self-test-grounding/ppeng-agent-core/.evolution-worktrees/2026-03-31_01-45-mcp-registry-open-source-discovery-l-d215b555/packages/core/test/mcp-jsonrpc.test.js) 和 [runtime.test.js](/Users/penglei/developer/self-test-grounding/ppeng-agent-core/.evolution-worktrees/2026-03-31_01-45-mcp-registry-open-source-discovery-l-d215b555/packages/core/test/runtime.test.js)。

验证已完成：先编译了 `packages/core` 和 `packages/capability-gateway`，然后执行 `npm run test:unit`，86 个测试全部通过。
evolution-agent-full: [1/2] 研究阶段...
evolution-research: 使用 claude
evolution-research: 决策=PROCEED
evolution-agent-full: 研究结论=PROCEED → This article describes a public MCP server registry with structured JSON metadata including install commands, tool listings, and compatibility info. The repository currently has MCP client integration but no open-source discovery mechanism. A specific improvement would be adding MCP server discovery to `packages/capability-gateway/src/` - fetching the registry catalog (JSON entries with `tools`, `tags`, `install` fields) to allow the agent runtime to discover and search available MCP servers by capability. This is a small, safe feature (public JSON, no auth) that meaningfully improves MCP compatibility by enabling dynamic server discovery rather than manual configuration.
evolution-agent-full: [2/2] 实现阶段...
evolution-agent-multi: rotate 选中 codex (hash=3150593782, idx=2/4)
evolution-agent-multi: 使用 codex (strategy=rotate)
2026-03-31T01:46:10.886545Z ERROR codex_core_skills::loader: failed to stat skills entry /Users/penglei/.codex/skills/brainstorming (symlink): No such file or directory (os error 2)
2026-03-31T01:46:10.886896Z ERROR codex_core_skills::loader: failed to stat skills entry /Users/penglei/.codex/skills/ai-daily-digest (symlink): No such file or directory (os error 2)
2026-03-31T01:46:10.887163Z ERROR codex_core_skills::loader: failed to stat skills entry /Users/penglei/.codex/skills/vercel-react-best-practices (symlink): No such file or directory (os error 2)
2026-03-31T01:46:10.906348Z ERROR codex_core_skills::loader: failed to stat skills entry /Users/penglei/.agents/skills/ui-ux-pro-max/scripts (symlink): No such file or directory (os error 2)
2026-03-31T01:46:10.906824Z ERROR codex_core_skills::loader: failed to stat skills entry /Users/penglei/.agents/skills/ui-ux-pro-max/data (symlink): No such file or directory (os error 2)
OpenAI Codex v0.117.0 (research preview)
--------
workdir: /Users/penglei/developer/self-test-grounding/ppeng-agent-core/.evolution-worktrees/2026-03-31_01-45-mcp-registry-open-source-discovery-l-d215b555
model: gpt-5.4
provider: openai
approval: never
sandbox: workspace-write [workdir, /tmp, $TMPDIR, /Users/penglei/.codex/memories]
reasoning effort: high
reasoning summaries: none
session id: 019d4191-e573-7460-8383-1444777cedce
--------
user
You are working inside a git worktree of a TypeScript/Node.js project at: /Users/penglei/developer/self-test-grounding/ppeng-agent-core/.evolution-worktrees/2026-03-31_01-45-mcp-registry-open-source-discovery-l-d215b555

Your task: read the source excerpt below and implement a REAL, MEANINGFUL improvement to the repository
based on what you learn from the excerpt. This must be a functional code change — new capability,
improved behavior, better error handling, or a fixed edge case — in source files under packages/ or apps/.

Rules:
- You MUST modify at least one non-test source file under packages/ or apps/ (e.g. a .ts or .mjs file
  that is NOT *.test.* and NOT inside a test/ or __tests__/ directory).
- You MAY add tests as a companion to the feature change, but tests alone are NOT sufficient.
- Do NOT add unrelated features, do NOT change build configs, do NOT modify .env or secrets.
- The change must be small enough to be safe: prefer adding a useful helper, improving an existing
  function's robustness, or implementing a clearly useful missing feature suggested by the excerpt.
- After making changes, run: npm run test:unit to verify they pass.
- Do NOT commit — the pipeline will commit for you.

If you cannot find a meaningful, safe feature improvement inspired by the excerpt, output a single line:
SKIP: <reason>
and exit 0 without modifying any files.

## Project Constraints


## Source Excerpt (inspiration)
GitHub - SirhanMacx/mcp-registry: Community registry for Model Context Protocol (MCP) servers — verified install commands, tool listings, structured metadata · GitHub Skip to content Navigation Menu Toggle navigation Sign in Appearance settings Platform AI CODE CREATION GitHub Copilot Write better code with AI GitHub Spark Build and deploy intelligent apps GitHub Models Manage and compare prompts MCP Registry New Integrate external tools DEVELOPER WORKFLOWS Actions Automate any workflow Codespaces Instant dev environments Issues Plan and track work Code Review Manage code changes APPLICATION SECURITY GitHub Advanced Security Find and fix vulnerabilities Code security Secure your code as you build Secret protection Stop leaks before they start EXPLORE Why GitHub Documentation Blog Changelog Marketplace View all features Solutions BY COMPANY SIZE Enterprises Small and medium teams Startups Nonprofits BY USE CASE App Modernization DevSecOps DevOps CI/CD View all use cases BY INDUSTRY Healthcare Financial services Manufacturing Government View all industries View all solutions Resources EXPLORE BY TOPIC AI Software Development DevOps Security View all topics EXPLORE BY TYPE Customer stories Events &amp; webinars Ebooks &amp; reports Business insights GitHub Skills SUPPORT &amp; SERVICES Documentation Customer support Community forum Trust center Partners View all resources Open Source COMMUNITY GitHub Sponsors Fund open source developers PROGRAMS Security Lab Maintainer Community Accelerator GitHub Stars Archive Program REPOSITORIES Topics Trending Collections Enterprise ENTERPRISE SOLUTIONS Enterprise platform AI-powered developer platform AVAILABLE ADD-ONS GitHub Advanced Security Enterprise-grade security features Copilot for Business Enterprise-grade AI features Premium Support Enterprise-grade 24/7 support Pricing Search or jump to... Search code, repositories, users, issues, pull requests... --> Search Clear Search syntax tips Provide feedback --> We read every piece of feedback, and take your input very seriously. Include my email address so I can be contacted Cancel Submit feedback Saved searches Use saved searches to filter your results more quickly --> Name Query To see all available qualifiers, see our documentation . Cancel Create saved search Sign in Sign up Appearance settings Resetting focus You signed in with another tab or window. Reload to refresh your session. You signed out in another tab or window. Reload to refresh your session. You switched accounts on another tab or window. Reload to refresh your session. Dismiss alert {{ message }} SirhanMacx / mcp-registry Public Notifications You must be signed in to change notification settings Fork 1 Star 4 Code Issues 0 Pull requests 0 Actions Projects Security 0 Insights Additional navigation options Code Issues Pull requests Actions Projects Security Insights SirhanMacx/mcp-registry main Branches Tags Go to file Code Open more actions menu Folders an
```

## worktree 变更（git diff --stat / status）

```
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
```

## 变更分类
- 功能源码文件：**2 个**
  - `packages/core/src/mcp-jsonrpc.ts`
  - `packages/core/src/runtime.ts`
- 其他文件（测试/文档等）：**2 个**

## 输出摘要

```

added 53 packages in 6s

10 packages are looking for funding
  run `npm fund` for details
在 [runtime.ts](/Users/penglei/developer/self-test-grounding/ppeng-agent-core/.evolution-worktrees/2026-03-31_01-45-mcp-registry-open-source-discovery-l-d215b555/packages/core/src/runtime.ts) 和 [mcp-jsonrpc.ts](/Users/penglei/developer/self-test-grounding/ppeng-agent-core/.evolution-worktrees/2026-03-31_01-45-mcp-registry-open-source-discovery-l-d215b555/packages/core/src/mcp-jsonrpc.ts) 我补了一个真实可用的 MCP discovery 能力。现在只要配置了 `RAW_AGENT_MCP_URLS`，运行时除了 `mcp_invoke` 之外，还会暴露一个只读的 `mcp_discover` 工具，能返回每个 MCP server 的索引、URL、可用 tool 列表，以及单个 server 探测失败时的错误信息。这样模型不再需要盲猜 server 编号和 tool 名，更接近 excerpt 里提到的“registry/discovery layer”。

我也顺手把 MCP URL 解析统一复用了现有 helper，并补了覆盖 discovery 成功、失败、保留 server 索引、可选 schema 输出，以及 runtime 侧工具注册与调用行为的测试，见 [mcp-jsonrpc.test.js](/Users/penglei/developer/self-test-grounding/ppeng-agent-core/.evolution-worktrees/2026-03-31_01-45-mcp-registry-open-source-discovery-l-d215b555/packages/core/test/mcp-jsonrpc.test.js) 和 [runtime.test.js](/Users/penglei/developer/self-test-grounding/ppeng-agent-core/.evolution-worktrees/2026-03-31_01-45-mcp-registry-open-source-discovery-l-d215b555/packages/core/test/runtime.test.js)。

验证已完成：先编译了 `packages/core` 和 `packages/capability-gateway`，然后执行 `npm run test:unit`，86 个测试全部通过。
evolution-agent-full: [1/2] 研究阶段...
evolution-research: 使用 claude
evolution-research: 决策=PROCEED
evolution-agent-full: 研究结论=PROCEED → This article describes a public MCP server registry with structured JSON metadata including install commands, tool listings, and compatibility info. The repository currently has MCP client integration but no open-source discovery mechanism. A specific improvement would be adding MCP server discovery to `packages/capability-gateway/src/` - fetching the registry catalog (JSON entries with `tools`, `tags`, `install` fields) to allow the agent runtime to discover and search available MCP servers by capability. This is a small, safe feature (public JSON, no auth) that meaningfully improves MCP compatibility by enabling dynamic server discovery rather than manual configuration.
evolution-agent-full: [2/2] 实现阶段...
evolution-agent-multi: rotate 选中 codex (hash=3150593782, idx=2/4)
evolution-agent-multi: 使用 codex (strategy=rotate)
2026-03-31T01:46:10.886545Z ERROR codex_core_skills::loader: failed to stat skills entry /Users/penglei/.codex/skills/brainstorming (symlink): No such file or directory (os error 2)
2026-03-31T01:46:10.886896Z ERROR codex_core_skills::loader: failed to stat skills entry /Users/penglei/.codex/skills/ai-daily-digest (symlink): No such file or directory (os error 2)
2026-03-31T01:46:10.887163Z ERROR codex_core_skills::loader: failed to stat skills entry /Users/penglei/.codex/skills/vercel-react-best-practices (symlink): No such file or directory (os error 2)
2026-03-31T01:46:10.906348Z ERROR codex_core_skills::loader: failed to stat skills entry /Users/penglei/.agents/skills/ui-ux-pro-max/scripts (symlink): No such file or directory (os error 2)
2026-03-31T01:46:10.906824Z ERROR codex_core_skills::loader: failed to stat skills entry /Users/penglei/.agents/skills/ui-ux-pro-max/data (symlink): No such file or directory (os error 2)
OpenAI Codex v0.117.0 (research preview)
--------
workdir: /Users/penglei/developer/self-test-grounding/ppeng-agent-core/.evolution-worktrees/2026-03-31_01-45-mcp-registry-open-source-discovery-l-d215b555
model: gpt-5.4
provider: openai
approval: never
sandbox: workspace-write [workdir, /tmp, $TMPDIR, /Users/penglei/.codex/memories]
reasoning effort: high
reasoning summaries: none
session id: 019d4191-e573-7460-8383-1444777cedce
--------
user
You are working inside a git worktree of a TypeScript/Node.js project at: /Users/penglei/developer/self-test-grounding/ppeng-agent-core/.evolution-worktrees/2026-03-31_01-45-mcp-registry-open-source-discovery-l-d215b555

Your task: read the source excerpt below and implement a REAL, MEANINGFUL improvement to the repository
based on what you learn from the excerpt. This must be a functional code change — new capability,
improved behavior, better error handling, or a fixed edge case — in source files under packages/ or apps/.

Rules:
- You MUST modify at least one non-test source file under packages/ or apps/ (e.g. a .ts or .mjs file
  that is NOT *.test.* and NOT inside a test/ or __tests__/ directory).
- You MAY add tests as a companion to the feature change, but tests alone are NOT sufficient.
- Do NOT add unrelated features, do NOT change build configs, do NOT modify .env or secrets.
- The change must be small enough to be safe: prefer adding a useful helper, improving an existing
  function's robustness, or implementing a clearly useful missing feature suggested by the excerpt.
- After making changes, run: npm run test:unit to verify they pass.
- Do NOT commit — the pipeline will commit for you.

If you cannot find a meaningful, safe feature improvement inspired by the excerpt, output a single line:
SKIP: <reason>
and exit 0 without modifying any files.

## Project Constraints


## Source Excerpt (inspiration)
GitHub - SirhanMacx/mcp-registry: Community registry for Model Context Protocol (MCP) servers — verified install commands, tool listings, structured metadata · GitHub Skip to content Navigation Menu Toggle navigation Sign in Appearance settings Platform AI CODE CREATION GitHub Copilot Write better code with AI GitHub Spark Build and deploy intelligent apps GitHub Models Manage and compare prompts MCP Registry New Integrate external tools DEVELOPER WORKFLOWS Actions Automate any workflow Codespaces Instant dev environments Issues Plan and track work Code Review Manage code changes APPLICATION SECURITY GitHub Advanced Security Find and fix vulnerabilities Code security Secure your code as you build Secret protection Stop leaks before they start EXPLORE Why GitHub Documentation Blog Changelog Marketplace View all features Solutions BY COMPANY SIZE Enterprises Small and medium teams Startups Nonprofits BY USE CASE App Modernization DevSecOps DevOps CI/CD View all use cases BY INDUSTRY Healthcare Financial services Manufacturing Government View all industries View all solutions Resources EXPLORE BY TOPIC AI Software Development DevOps Security View all topics EXPLORE BY TYPE Customer stories Events &amp; webinars Ebooks &amp; reports Business insights GitHub Skills SUPPORT &amp; SERVICES Documentation Customer support Community forum Trust center Partners View all resources Open Source COMMUNITY GitHub Sponsors Fund open source developers PROGRAMS Security Lab Maintainer Community Accelerator GitHub Stars Archive Program REPOSITORIES Topics Trending Collections Enterprise ENTERPRISE SOLUTIONS Enterprise platform AI-powered developer platform AVAILABLE ADD-ONS GitHub Advanced Security Enterprise-grade security features Copilot for Business Enterprise-grade AI features Premium Support Enterprise-grade 24/7 support Pricing Search or jump to... Search code, repositories, users, issues, pull requests... --> Search Clear Search syntax tips Provide feedback --> We read every piece of feedback, and take your input very seriously. Include my email address so I can be contacted Cancel Submit feedback Saved searches Use saved searches to filter your results more quickly --> Name Query To see all available qualifiers, see our documentation . Cancel Create saved search Sign in Sign up Appearance settings Resetting focus You signed in with another tab or window. Reload to refresh your session. You signed out in another tab or window. Reload to refresh your session. You switched accounts on another tab or window. Reload to refresh your session. Dismiss alert {{ message }} SirhanMacx / mcp-registry Public Notifications You must be signed in to change notification settings Fork 1 Star 4 Code Issues 0 Pull requests 0 Actions Projects Security 0 Insights Additional navigation options Code Issues Pull requests Actions Projects Security Insights SirhanMacx/mcp-registry main Branches Tags Go to file Code Open more actions menu Folders and files Name Name Last commit message Last commit date Latest commit History 2 Commits 2 Commits .github .github dist dist registry registry schema schema scripts scripts web web CONTRIBUTING.md CONTRIBUTING.md README.md README.md View all files Repository files navigation README Contributing MCP Registry 🔌 The missing discovery layer for Model Context Protocol servers. Problem: MCP is growing fast but finding servers is chaos. There's no canonical registry, no search, no compatibility metadata — just scattered GitHub repos and random awesome-lists. Solution: A community-maintained, searchable registry with structured metadata for every MCP server. What's here registry/ — Structured JSON entries for each MCP server schema/ — JSON schema for registry entries web/ — Static site for browsing/searching (no backend needed) scripts/ — Validation and build tools Entry format { "id" : " sqlite-mcp " , "name" : " SQLite MCP Server " , "description" : " Read/write SQLite databases from any MCP-compatible agent " , "author" : " someone " , "repo" : " https://github.com/someone/sqlite-mcp " , "install" : " npx sqlite-mcp " , "protocol_version" : " 2024-11-05 " , "tools" : [ " query " , " execute " , " list_tables " , " describe_table " ], "prompts" : [], "resources" : [ " sqlite:///{path} " ], "tags" : [ " database " , " sqlite " , " storage " ], "verified" : false , "submitted" : " 2026-03-22 " } Why this matters MCP is becoming the standard way for AI agents to access tools. But right now: Finding servers requires hours of GitHub searching No way to know if a server is maintained or abandoned No compatibility metadata (which clients work with it?) No usage stats or community validation This registry changes that. Contributing Submit a PR adding your server to registry/ . One JSON file per server. The schema validates automatically. Status 🟡 Early — seeding initial entries. PRs welcome. Related Machina Market — Premium MCP server packs (catalog.json for agent-native purchase) MCP Spec MCP SDK About Community registry for Model Context Protocol (MCP) servers — verified install commands, tool listings, structured metadata Topics open-source registry tools mcp ai-agents claude llm model-context-protocol Resources Readme Contributing Contributing Uh oh! There was an error while loading. Please reload this page . Activity Stars 4 stars Watchers 0 watching Forks 1 fork Report repository Releases No releases published Packages 0 &nbsp; &nbsp; &nbsp; Uh oh! There was an error while loading. Please reload this page . Contributors Uh oh! There was an error while loading. Please reload this page . Languages HTML 86.8% Python 13.2% Footer &copy; 2026 GitHub,&nbsp;Inc. Footer navigation Terms Privacy Security Status Community Docs Contact Manage cookies Do not share my personal information You can’t perform that action at this time.
2026-03-31T01:46:15.681702Z ERROR codex_api::endpoint::responses_websocket: failed to connect to websocket: IO error: tls handshake eof, url: wss://chatgpt.com/backend-api/codex/responses
2026-03-31T01:46:17.678447Z ERROR codex_api::endpoint::responses_websocket: failed to connect to websocket: IO error: tls handshake eof, url: wss://chatgpt.com/backend-api/codex/responses
2026-03-31T01:46:19.278560Z ERROR codex_api::endpoint::responses_websocket: failed to connect to websocket: IO error: tls handshake eof, url: wss://chatgpt.com/backend-api/codex/responses
ERROR: Reconnecting... 2/5
2026-03-31T01:46:21.002142Z ERROR codex_api::endpoint::responses_websocket: failed to connect to websocket: IO error: tls handshake eof, url: wss://chatgpt.com/backend-api/codex/responses
ERROR: Reconnecting... 3/5
2026-03-31T01:46:23.079816Z ERROR codex_api::endpoint::responses_websocket: failed to connect to websocket: IO error: tls handshake eof, url: wss://chatgpt.com/backend-api/codex/responses
ERROR: Reconnecting... 4/5
2026-03-31T01:46:26.02643
```

## 合并

未自动合并（EVOLUTION_AUTO_MERGE=0）；请在主仓手动 `git merge exp/evolution-2026-03-31_01-45-mcp-registry-open-source-discovery-l-d215b555`