# 实验成功：Show HN: MCPSec – OWASP MCP Top Scanner for Model Context Protocol Configs

## 来源
- [Show HN: MCPSec – OWASP MCP Top Scanner for Model Context Protocol Configs](https://github.com/pfrederiksen/mcpsec)

## 来源正文摘录（抓取）
```
GitHub - pfrederiksen/mcpsec: OWASP MCP Top 10 security scanner for Model Context Protocol servers · GitHub Skip to content Navigation Menu Toggle navigation Sign in Appearance settings Platform AI CODE CREATION GitHub Copilot Write better code with AI GitHub Spark Build and deploy intelligent apps GitHub Models Manage and compare prompts MCP Registry New Integrate external tools DEVELOPER WORKFLOWS Actions Automate any workflow Codespaces Instant dev environments Issues Plan and track work Code Review Manage code changes APPLICATION SECURITY GitHub Advanced Security Find and fix vulnerabilities Code security Secure your code as you build Secret protection Stop leaks before they start EXPLORE Why GitHub Documentation Blog Changelog Marketplace View all features Solutions BY COMPANY SIZE Enterprises Small and medium teams Startups Nonprofits BY USE CASE App Modernization DevSecOps DevOps CI/CD View all use cases BY INDUSTRY Healthcare Financial services Manufacturing Government View all industries View all solutions Resources EXPLORE BY TOPIC AI Software Development DevOps Security View all topics EXPLORE BY TYPE Customer stories Events &amp; webinars Ebooks &amp; reports Business insights GitHub Skills SUPPORT &amp; SERVICES Documentation Customer support Community forum Trust center Partners View all resources Open Source COMMUNITY GitHub Sponsors Fund open source developers PROGRAMS Security Lab Maintainer Community Accelerator GitHub Stars Archive Program REPOSITORIES Topics Trending Collections Enterprise ENTERPRISE SOLUTIONS Enterprise platform AI-powered developer platform AVAILABLE ADD-ONS GitHub Advanced Security Enterprise-grade security features Copilot for Business Enterprise-grade AI features Premium Support Enterprise-grade 24/7 support Pricing Search or jump to... Search code, repositories, users, issues, pull requests... --> Search Clear Search syntax tips Provide feedback --> We read every piece of feedback, and take your input very seriously. Include my email address so I can be contacted Cancel Submit feedback Saved searches Use saved searches to filter your results more quickly --> Name Query To see all available qualifiers, see our documentation . Cancel Create saved search Sign in Sign up Appearance settings Resetting focus You signed in with another tab or window. Reload to refresh your session. You signed out in another tab or window. Reload to refresh your session. You switched accounts on another tab or window. Reload to refresh your session. Dismiss alert {{ message }} pfrederiksen / mcpsec Public Notifications You must be signed in to change notification settings Fork 0 Star 2 Code Issues 0 Pull requests 0 Actions Projects Security 0 Insights Additional navigation options Code Issues Pull requests Actions Projects Security Insights pfrederiksen/mcpsec Use this GitHub action with your project Add this Action to an existing workflow or create a new one View on Marketplace main Branches Tags Go to file Code Open more actions menu Folders and files Name Name Last commit message Last commit date Latest commit History 10 Commits 10 Commits .github .github cmd/ mcpsec cmd/ mcpsec docs docs internal internal rules rules splunk splunk testdata testdata .golangci.yml .golangci.yml .goreleaser.yaml .goreleaser.yaml CLAUDE.md CLAUDE.md CONTRIBUTING.md CONTRIBUTING.md LICENSE LICENSE Makefile Makefile README.md README.md SECURITY.md SECURITY.md action.yml action.yml go.mod go.mod go.sum go.sum View all files Repository files navigation README Contributing Apache-2.0 license Security MCPSec Audit OWASP MCP Top 10 security scanner for Model Context Protocol (MCP) server configurations. Think Prowler , but purpose-built for MCP. MCPSec audits MCP server definition files for security risks, outputs findings in OCSF JSON or human-readable tables, and supports a pluggable YAML rules engine for community-contributed detections. Use Cases Developer laptop audit -- Scan your Claude Desktop, Cursor, or VS Code MCP configs to find hardcoded API keys, missing auth, and overly broad permissions before they leak CI/CD gate -- Add mcpsec scan --fail-on high to your pipeline to block deploys with critical or high-severity MCP misconfigurations Security team posture assessment -- Scan all MCP configs across your org, output OCSF JSON to your SIEM, and track risk posture over time Claude Desktop Extension (DXT) review -- Audit DXT manifests or your entire Extensions directory for tool spoofing, missing schemas, and integrity violations Compliance evidence -- Generate machine-readable OCSF findings as audit artifacts for security reviews Quick Install Homebrew (macOS / Linux) brew install pfrederiksen/tap/mcpsec Go Install go install github.com/pfrederiksen/mcpsec@latest Download Binary Download pre-built binaries from the Releases page for Linux (amd64/arm64), macOS (amd64/arm64), and Windows (amd64). Build from Source git clone https://github.com/pfrederiksen/mcpsec.git cd mcpsec make build GitHub Action - uses : pfrederiksen/mcpsec@v1 with : config : path/to/mcp-config.json fail-on : high See GitHub Action usage below for full options. Quick Start # Scan an MCP server config file mcpsec scan mcp-config.json # Scan your Claude Desktop config mcpsec scan ~ /Library/Application \ Support/Claude/claude_desktop_config.json # Scan your Claude Desktop Extensions directory (auto-detected) mcpsec scan ~ /Library/Application \ Support/Claude/Claude \ Extensions/ # Scan a single DXT extension manifest mcpsec scan ~ /Library/Application \ Support/Claude/Claude \ Extensions/my-ext/manifest.json # Output as OCSF JSON mcpsec scan --format json mcp-config.json # Only show critical and high findings mcpsec scan --severity critical,high mcp-config.json # Fail CI if critical findings exist mcpsec scan --fail-on critical mcp-config.json Example Output Table (default) ---------------------------------------------------------------------------------------------------- RULE ID NAME SEVERITY RESOURCE ---------------------------------------------------------------------------------------------------- MCP01-001 Potential prompt injection in tool descrip... HIGH mcpserver:vulnerable-demo MCP02-002 Excessive tool permissions CRITICAL mcpserver:vulnerable-demo MCP03-001 Missing authentication configuration CRITICAL mcpserver:vulnerable-demo MCP04-001 Plain-text secret in server environment CRITICAL mcpserver:vulnerable-demo MCP04-002 Plain-text secret in tool environment CRITICAL mcpserver:vulnerable-demo MCP05-001 Dangerous URI scheme in tool configuration HIGH mcpserver:vulnerable-demo MCP05-002 Tool URI targets internal network HIGH mcpserver:vulnerable-demo MCP06-001 Duplicate tool name detected HIGH mcpserver:vulnerable-demo MCP06-002 Missing tool integrity hash MEDIUM mcpserver:vulnerable-demo MCP07-001 Insecure HTTP transport HIGH mcpserver:vulnerable-demo MCP07-003 Weak TLS version configured HIGH mcpserver:vulnerable-demo MCP08-001 Missing input schema for tool MEDIUM mcpserver:vulnerable-demo MCP08-002 Input schema validation not enabled MEDIUM mcpserver:vulnerable-demo MCP09-001 No logging configuration MEDIUM mcpserver:vulnerable-demo MCP10-001 No rate limiting configured MEDIUM mcpserver:vulnerable-demo ---------------------------------------------------------------------------------------------------- Total: 15 finding(s) OCSF JSON ( --format json ) Each finding maps to an OCSF Security Finding (class_uid 2001): { "class_uid" : 2001 , "category_uid" : 2 , "activity_id" : 1 , "severity_id" : 4 , "severity" : " high " , "time" : 1772757930 , "finding" : { "uid" : " MCP01-001 " , "title" : " Potential prompt injection in tool description " , "desc" : " Tool description contains instruction-like language that could be used to manipulate an LLM consuming tool output. " , "remediation" : { "desc" : " Sanitize tool descriptions to remove instruction-like language. " } }, "resources" : [ { "type" : " MCP Server " , "name" : " mcpserver:vulnerable-demo " } ], "metadata" : { "product" : { "name" : " MCPSec Audit " }, "version" : " dev " } } Supported Input Formats MCPSec auto-detects config formats. You can also specify explicitly with --input-format : Format Flag Description Example mcpServers JSON --input-format mcpservers Standard MCP config (Claude Desktop, Cursor) claude_desktop_config.json DXT manifest --input-format dxt Claude Desktop Extension manifest manifest.json DXT directory --input-format dxtdir Directory of DXT extensions Claude Extensions/ Auto (default) --input-format auto Detects format from file content/structure Any of the above OWASP MCP Top 10 Coverage All 10 categories are implemented with built-in Go checks and YAML rules: OWASP Risk Rule IDs Severity Description MCP01 Prompt Injection via Tool Output MCP01-001 High Detects instruction-like patterns in tool descriptions MCP02 Excessive Tool Permissions MCP02-001..003 Critical/High Flags wildcard perms, overprivileged tools, missing boundaries MCP03 Missing Authentication MCP03-001..002 Critical/High Detects missing or incomplete auth configuration MCP04 Sensitive Data Exposure MCP04-001..004 Critical Finds hardcoded API keys, tokens, passwords in env vars MCP05 Unsafe Resource Access MCP05-001..002 High Detects SSRF-prone URIs (file://, internal IPs, metadata endpoints) MCP06 Tool Definition Spoofing MCP06-001..002 High/Medium Flags duplicate tool names, missing integrity hashes MCP07 Insecure Transport MCP07-001..003 Critical/High Detects HTTP URLs, disabled TLS, weak TLS versions MCP08 Unvalidated Tool Input Schemas MCP08-001..002 Medium Flags tools without input schemas, disabled validation MCP09 Logging and Audit Deficiencies MCP09-001..003 Medium/High Detects missing or disabled logging and audit trails MCP10 Denial of Service MCP10-001..002 Medium Flags missing rate limiting and payload size limits CLI Reference mcpsec scan [config-file] Primary scan command. Accepts a config file path or directory. Flags: -f, --format string Output format: table, json, splunk (default "table") -o, --output string Output file path (default: stdout) --rules string Custom rules directory --severity string Filter by severity (comma-separated: critical,high,medium,low,info) --input-format string Input format: auto, mcpservers, dxt, dxtdir (default "auto") --fail-on string Exit with code 1 if findings at or above this severity --splunk-url string Splunk HEC endpoint URL --splunk-token string Splunk HEC token (also reads MCPSEC_SPLUNK_TOKEN env var) --splunk-index string Splunk index name -q, --quiet Suppress output except findings mcpsec rules list List all loaded YAML rules with descriptions and severity. mcpsec rules validate [rule.yaml] Validate a community-contributed rule file against the rule schema. mcpsec version Print version and build info. Examples Scan Claude Desktop config mcpsec scan ~ /Library/Application \ Support/Claude/claude_desktop_config.json Scan all Claude Desktop Extensions at once mcpsec scan ~ /Library/Application \ Support/Claude/Claude \ Extensions/ Scan a single DXT extension mcpsec scan path/to/extension/manifest.json Filter to critical findings only mcpsec scan --severity critical mcp-config.json Output OCSF JSON to a file mcpsec scan --format json -o findings.json mcp-config.json Fail CI on high-severity findings mcpsec scan --fail-on high mcp-config.json || exit 1 Use custom rules directory mcpsec scan --rules ./my-rules/ mcp-config.json Send results to Splunk HEC export MCPSEC_SPLUNK_TOKEN= " your-hec-token " mcpsec scan --format splunk --splunk-url https://splunk:8088 mcp-config.json List all available rules mcpsec rules list Validate a community rule mcpsec rules validate rules/mcp04-secret-exposure.yaml GitHub Action MCPSec is available as a GitHub Action on the GitHub Marketplace . Add it to any workflow to scan MCP configs on every push or pull request. Basic usage name : MCP Security Scan on : [push, pull_request] jobs : mcpsec : runs-on : ubuntu-latest steps : - uses : actions/checkout@v4 - uses : 
```


## 实验分支
`exp/evolution-2026-03-31_01-45-show-hn-mcpsec-owasp-mcp-top-scanner-04679c88`

## 测试命令
`npm run test:unit`

## Agent 钩子

命令："bash scripts/evolution-agent-full.sh"

```
Implemented a small MCP hardening improvement in [mcp-jsonrpc.ts](/Users/penglei/developer/self-test-grounding/ppeng-agent-core/.evolution-worktrees/2026-03-31_01-45-show-hn-mcpsec-owasp-mcp-top-scanner-04679c88/packages/core/src/mcp-jsonrpc.ts#L7) and [runtime.ts](/Users/penglei/developer/self-test-grounding/ppeng-agent-core/.evolution-worktrees/2026-03-31_01-45-show-hn-mcpsec-owasp-mcp-top-scanner-04679c88/packages/core/src/runtime.ts#L36). `RAW_AGENT_MCP_URLS` / `RAW_AGENT_MCP_URL` are now normalized through one shared parser, which drops malformed entries, rejects non-HTTP(S) schemes, rejects URLs with embedded credentials, strips fragments, and deduplicates equivalent endpoints before the runtime exposes `mcp_invoke`. I also tightened MCP RPC error handling so invalid JSON responses now fail with a clear message instead of an unhelpful raw `JSON.parse` exception.

Added unit coverage in [mcp-jsonrpc.test.js](/Users/penglei/developer/self-test-grounding/ppeng-agent-core/.evolution-worktrees/2026-03-31_01-45-show-hn-mcpsec-owasp-mcp-top-scanner-04679c88/packages/core/test/mcp-jsonrpc.test.js#L86) for invalid URL filtering, deduplication/fragment stripping, and the improved invalid-JSON error path.

Verification: `npx tsc -b packages/core packages/capability-gateway` then `npm run test:unit` passed.
evolution-agent-full: [1/2] 研究阶段...
evolution-research: 使用 claude
evolution-research: 决策=PROCEED
evolution-agent-full: 研究结论=PROCEED → 
The OWASP MCP Top 10 security rules described here could be implemented as a TypeScript validation module that scans MCP server configurations before the agent connects to them. Specifically, this would add security validation to the MCP client integration—detecting hardcoded secrets (MCP04), missing authentication (MCP03), insecure transports (MCP07), and missing input schemas (MCP08) in `packages/agent-core/src/mcp/` or a new `packages/mcp-security-validator/` package. These are well-defined detection patterns (regex for secrets, schema checks, URI validation) that would meaningfully improve security posture when connecting to MCP servers.
evolution-agent-full: [2/2] 实现阶段...
evolution-agent-multi: rotate 选中 codex (hash=4219397910, idx=2/4)
evolution-agent-multi: 使用 codex (strategy=rotate)
2026-03-31T01:47:42.067840Z ERROR codex_core_skills::loader: failed to stat skills entry /Users/penglei/.codex/skills/brainstorming (symlink): No such file or directory (os error 2)
2026-03-31T01:47:42.067899Z ERROR codex_core_skills::loader: failed to stat skills entry /Users/penglei/.codex/skills/ai-daily-digest (symlink): No such file or directory (os error 2)
2026-03-31T01:47:42.067903Z ERROR codex_core_skills::loader: failed to stat skills entry /Users/penglei/.codex/skills/vercel-react-best-practices (symlink): No such file or directory (os error 2)
2026-03-31T01:47:42.090762Z ERROR codex_core_skills::loader: failed to stat skills entry /Users/penglei/.agents/skills/ui-ux-pro-max/scripts (symlink): No such file or directory (os error 2)
2026-03-31T01:47:42.091095Z ERROR codex_core_skills::loader: failed to stat skills entry /Users/penglei/.agents/skills/ui-ux-pro-max/data (symlink): No such file or directory (os error 2)
OpenAI Codex v0.117.0 (research preview)
--------
workdir: /Users/penglei/developer/self-test-grounding/ppeng-agent-core/.evolution-worktrees/2026-03-31_01-45-show-hn-mcpsec-owasp-mcp-top-scanner-04679c88
model: gpt-5.4
provider: openai
approval: never
sandbox: workspace-write [workdir, /tmp, $TMPDIR, /Users/penglei/.codex/memories]
reasoning effort: high
reasoning summaries: none
session id: 019d4193-3e93-7f60-a8c9-d1d0c537cc28
--------
user
You are working inside a git worktree of a TypeScript/Node.js project at: /Users/penglei/developer/self-test-grounding/ppeng-agent-core/.evolution-worktrees/2026-03-31_01-45-show-hn-mcpsec-owasp-mcp-top-scanner-04679c88

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
GitHub - pfrederiksen/mcpsec: OWASP MCP Top 10 security scanner for Model Context Protocol servers · GitHub Skip to content Navigation Menu Toggle navigation Sign in Appearance settings Platform AI CODE CREATION GitHub Copilot Write better code with AI GitHub Spark Build and deploy intelligent apps GitHub Models Manage and compare prompts MCP Registry New Integrate external tools DEVELOPER WORKFLOWS Actions Automate any workflow Codespaces Instant dev environments Issues Plan and track work Code Review Manage code changes APPLICATION SECURITY GitHub Advanced Security Find and fix vulnerabilities Code security Secure your code as you build Secret protection Stop leaks before they start EXPLORE Why GitHub Documentation Blog Changelog Marketplace View all features Solutions BY COMPANY SIZE Enterprises Small and medium teams Startups Nonprofits BY USE CASE App Modernization DevSecOps DevOps CI/CD View all use cases BY INDUSTRY Healthcare Financial services Manufacturing Government View all industries View all solutions Resources EXPLORE BY TOPIC AI Software Development DevOps Security View all topics EXPLORE BY TYPE Customer stories Events &amp; webinars Ebooks &amp; reports Business insights GitHub Skills SUPPORT &amp; SERVICES Documentation Customer support Community forum Trust center Partners View all resources Open Source COMMUNITY GitHub Sponsors Fund open source developers PROGRAMS Security Lab Maintainer Community Accelerator GitHub Stars Archive Program REPOSITORIES Topics Trending Collections Enterprise ENTERPRISE SOLUTIONS Enterprise platform AI-powered developer platform AVAILABLE ADD-ONS GitHub Advanced Security Enterprise-grade security features Copilot for Business Enterprise-grade AI features Premium Support Enterprise-grade 24/7 support Pricing Search or jump to... Search code, repositories, users, issues, pull requests... --> Search Clear Search syntax tips Provide feedback --> We read every piece of feedback, and take your input very seriously. Include my email address so I can be contacted Cancel Submit feedback Saved searches Use saved searches to filter your results more quickly --> Name Query To see all available qualifiers, see our documentation . Cancel Create saved search Sign in Sign up Appearance settings Resetting focus You signed in with another tab or window. Reload to refresh your session. You signed out in another tab or window. Reload to refresh your session. You switched accounts on another tab or window. Reload to refresh your session. Dismiss alert {{ message }} pfrederiksen / mcpsec Public Notifications You must be signed in to change notification settings Fork 0 Star 2 Code Issues 0 Pull requests 0 Actions Projects Security 0 Insights Additional navigation options Code Issues Pull requests Actions Projects Security Insights pfrederiksen/mcpsec Use this GitHub action with your project Add this Action to an existing workflow or cr
```

## worktree 变更（git diff --stat / status）

```
packages/core/src/mcp-jsonrpc.ts       | 47 ++++++++++++++++++++++++++++++----
 packages/core/src/runtime.ts           |  6 ++---
 packages/core/test/mcp-jsonrpc.test.js | 47 +++++++++++++++++++++++++++++-----
 3 files changed, 84 insertions(+), 16 deletions(-)

M packages/core/src/mcp-jsonrpc.ts
 M packages/core/src/runtime.ts
 M packages/core/test/mcp-jsonrpc.test.js
?? .evolution/
```

## 变更分类
- 功能源码文件：**2 个**
  - `packages/core/src/mcp-jsonrpc.ts`
  - `packages/core/src/runtime.ts`
- 其他文件（测试/文档等）：**3 个**

## 输出摘要

```

added 53 packages in 4s

10 packages are looking for funding
  run `npm fund` for details
Implemented a small MCP hardening improvement in [mcp-jsonrpc.ts](/Users/penglei/developer/self-test-grounding/ppeng-agent-core/.evolution-worktrees/2026-03-31_01-45-show-hn-mcpsec-owasp-mcp-top-scanner-04679c88/packages/core/src/mcp-jsonrpc.ts#L7) and [runtime.ts](/Users/penglei/developer/self-test-grounding/ppeng-agent-core/.evolution-worktrees/2026-03-31_01-45-show-hn-mcpsec-owasp-mcp-top-scanner-04679c88/packages/core/src/runtime.ts#L36). `RAW_AGENT_MCP_URLS` / `RAW_AGENT_MCP_URL` are now normalized through one shared parser, which drops malformed entries, rejects non-HTTP(S) schemes, rejects URLs with embedded credentials, strips fragments, and deduplicates equivalent endpoints before the runtime exposes `mcp_invoke`. I also tightened MCP RPC error handling so invalid JSON responses now fail with a clear message instead of an unhelpful raw `JSON.parse` exception.

Added unit coverage in [mcp-jsonrpc.test.js](/Users/penglei/developer/self-test-grounding/ppeng-agent-core/.evolution-worktrees/2026-03-31_01-45-show-hn-mcpsec-owasp-mcp-top-scanner-04679c88/packages/core/test/mcp-jsonrpc.test.js#L86) for invalid URL filtering, deduplication/fragment stripping, and the improved invalid-JSON error path.

Verification: `npx tsc -b packages/core packages/capability-gateway` then `npm run test:unit` passed.
evolution-agent-full: [1/2] 研究阶段...
evolution-research: 使用 claude
evolution-research: 决策=PROCEED
evolution-agent-full: 研究结论=PROCEED → 
The OWASP MCP Top 10 security rules described here could be implemented as a TypeScript validation module that scans MCP server configurations before the agent connects to them. Specifically, this would add security validation to the MCP client integration—detecting hardcoded secrets (MCP04), missing authentication (MCP03), insecure transports (MCP07), and missing input schemas (MCP08) in `packages/agent-core/src/mcp/` or a new `packages/mcp-security-validator/` package. These are well-defined detection patterns (regex for secrets, schema checks, URI validation) that would meaningfully improve security posture when connecting to MCP servers.
evolution-agent-full: [2/2] 实现阶段...
evolution-agent-multi: rotate 选中 codex (hash=4219397910, idx=2/4)
evolution-agent-multi: 使用 codex (strategy=rotate)
2026-03-31T01:47:42.067840Z ERROR codex_core_skills::loader: failed to stat skills entry /Users/penglei/.codex/skills/brainstorming (symlink): No such file or directory (os error 2)
2026-03-31T01:47:42.067899Z ERROR codex_core_skills::loader: failed to stat skills entry /Users/penglei/.codex/skills/ai-daily-digest (symlink): No such file or directory (os error 2)
2026-03-31T01:47:42.067903Z ERROR codex_core_skills::loader: failed to stat skills entry /Users/penglei/.codex/skills/vercel-react-best-practices (symlink): No such file or directory (os error 2)
2026-03-31T01:47:42.090762Z ERROR codex_core_skills::loader: failed to stat skills entry /Users/penglei/.agents/skills/ui-ux-pro-max/scripts (symlink): No such file or directory (os error 2)
2026-03-31T01:47:42.091095Z ERROR codex_core_skills::loader: failed to stat skills entry /Users/penglei/.agents/skills/ui-ux-pro-max/data (symlink): No such file or directory (os error 2)
OpenAI Codex v0.117.0 (research preview)
--------
workdir: /Users/penglei/developer/self-test-grounding/ppeng-agent-core/.evolution-worktrees/2026-03-31_01-45-show-hn-mcpsec-owasp-mcp-top-scanner-04679c88
model: gpt-5.4
provider: openai
approval: never
sandbox: workspace-write [workdir, /tmp, $TMPDIR, /Users/penglei/.codex/memories]
reasoning effort: high
reasoning summaries: none
session id: 019d4193-3e93-7f60-a8c9-d1d0c537cc28
--------
user
You are working inside a git worktree of a TypeScript/Node.js project at: /Users/penglei/developer/self-test-grounding/ppeng-agent-core/.evolution-worktrees/2026-03-31_01-45-show-hn-mcpsec-owasp-mcp-top-scanner-04679c88

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
GitHub - pfrederiksen/mcpsec: OWASP MCP Top 10 security scanner for Model Context Protocol servers · GitHub Skip to content Navigation Menu Toggle navigation Sign in Appearance settings Platform AI CODE CREATION GitHub Copilot Write better code with AI GitHub Spark Build and deploy intelligent apps GitHub Models Manage and compare prompts MCP Registry New Integrate external tools DEVELOPER WORKFLOWS Actions Automate any workflow Codespaces Instant dev environments Issues Plan and track work Code Review Manage code changes APPLICATION SECURITY GitHub Advanced Security Find and fix vulnerabilities Code security Secure your code as you build Secret protection Stop leaks before they start EXPLORE Why GitHub Documentation Blog Changelog Marketplace View all features Solutions BY COMPANY SIZE Enterprises Small and medium teams Startups Nonprofits BY USE CASE App Modernization DevSecOps DevOps CI/CD View all use cases BY INDUSTRY Healthcare Financial services Manufacturing Government View all industries View all solutions Resources EXPLORE BY TOPIC AI Software Development DevOps Security View all topics EXPLORE BY TYPE Customer stories Events &amp; webinars Ebooks &amp; reports Business insights GitHub Skills SUPPORT &amp; SERVICES Documentation Customer support Community forum Trust center Partners View all resources Open Source COMMUNITY GitHub Sponsors Fund open source developers PROGRAMS Security Lab Maintainer Community Accelerator GitHub Stars Archive Program REPOSITORIES Topics Trending Collections Enterprise ENTERPRISE SOLUTIONS Enterprise platform AI-powered developer platform AVAILABLE ADD-ONS GitHub Advanced Security Enterprise-grade security features Copilot for Business Enterprise-grade AI features Premium Support Enterprise-grade 24/7 support Pricing Search or jump to... Search code, repositories, users, issues, pull requests... --> Search Clear Search syntax tips Provide feedback --> We read every piece of feedback, and take your input very seriously. Include my email address so I can be contacted Cancel Submit feedback Saved searches Use saved searches to filter your results more quickly --> Name Query To see all available qualifiers, see our documentation . Cancel Create saved search Sign in Sign up Appearance settings Resetting focus You signed in with another tab or window. Reload to refresh your session. You signed out in another tab or window. Reload to refresh your session. You switched accounts on another tab or window. Reload to refresh your session. Dismiss alert {{ message }} pfrederiksen / mcpsec Public Notifications You must be signed in to change notification settings Fork 0 Star 2 Code Issues 0 Pull requests 0 Actions Projects Security 0 Insights Additional navigation options Code Issues Pull requests Actions Projects Security Insights pfrederiksen/mcpsec Use this GitHub action with your project Add this Action to an existing workflow or create a new one View on Marketplace main Branches Tags Go to file Code Open more actions menu Folders and files Name Name Last commit message Last commit date Latest commit History 10 Commits 10 Commits .github .github cmd/ mcpsec cmd/ mcpsec docs docs internal internal rules rules splunk splunk testdata testdata .golangci.yml .golangci.yml .goreleaser.yaml .goreleaser.yaml CLAUDE.md CLAUDE.md CONTRIBUTING.md CONTRIBUTING.md LICENSE LICENSE Makefile Makefile README.md README.md SECURITY.md SECURITY.md action.yml action.yml go.mod go.mod go.sum go.sum View all files Repository files navigation README Contributing Apache-2.0 license Security MCPSec Audit OWASP MCP Top 10 security scanner for Model Context Protocol (MCP) server configurations. Think Prowler , but purpose-built for MCP. MCPSec audits MCP server definition files for security risks, outputs findings in OCSF JSON or human-readable tables, and supports a pluggable YAML rules engine for community-contributed detections. Use Cases Developer laptop audit -- Scan your Claude Desktop, Cursor, or VS Code MCP configs to find hardcoded API keys, missing auth, and overly broad permissions before they leak CI/CD gate -- Add mcpsec scan --fail-on high to your pipeline to block deploys with critical or high-severity MCP misconfigurations Security team posture assessment -- Scan all MCP configs across your org, output OCSF JSON to your SIEM, and track risk posture over time Claude Desktop Extension (DXT) review -- Audit DXT manifests or your entire Extensions directory for tool spoofing, missing schemas, and integrity violations Compliance evidence -- Generate machine-readable OCSF findings as audit artifacts for security reviews Quick Install Homebrew (macOS / Linux) brew install pfrederiksen/tap/mcpsec Go Install go install github.com/pfrederiksen/mcpsec@latest Download Binary Download pre-built binaries from the Releases page for Linux (amd64/arm64), macOS (amd64/arm64), and Windows (amd64). Build from Source git clone https://github.com/pfrederiksen/mcpsec.git cd mcpsec make build GitHub Action - uses : pfrederiksen/mcpsec@v1 with : config : path/to/mcp-config.json fail-on : high See GitHub Action usage below for full options. Quick Start # Scan an MCP server config file mcpsec scan mcp-config.json # Scan your Claude Desktop config mcpsec scan ~ /Library/Application \ Support/Claude/claude_desktop_config.json # Scan your Claude Desktop Extensions directory (auto-detected) mcpsec scan ~ /Library/Application \ Support/Claude/Claude \ Extensions/ # Scan a single DXT extension manifest mcpsec scan ~ /Library/Application \ Support/Claude/Claude \ Extensions/my-ext/manifest.json # Output as OCSF JSON mcpsec scan --format json mcp-config.json # Only show critical and high findings mcpsec scan --severity critical,high mcp-config.json # Fail CI if critical findings exist mcpsec scan --fail-on critical mcp-config.json Example Output Table (default) ---------------------------------------------------------------------------------------------------- RULE ID NAME SEVERITY RESOURCE ---------------------------------------------------------------------------------------------------- MCP01-001 Potential prompt injection in tool descrip... HIGH mcpserver:vulnerable-demo MCP02-002 Excessive tool permissions CRITICAL mcpserver:vulnerable-demo MCP03-001 Missing authentication configuration CRITICAL mcpserver:vulnerable-demo MCP04-001 Plain-text secret in server environment CRITICAL mcpserver:vulnerable-demo MCP04-002 Plain-text secret in tool environment CRITICAL mcpserver:vulnerable-demo MCP05-001 Dangerous URI scheme in tool configuration HIGH mcpserver:vulnerable-demo MCP05-002 Tool URI targets internal network HIGH mcpserver:vulnerable-demo MCP06-001 Duplicate tool name detected HIGH mcpserver:vulnerable-demo MCP06-002 Missing tool integrity hash MEDIUM mcpserver:vulnerable-demo MCP07-001 Insecure HTTP tr
```

## 合并

未自动合并（EVOLUTION_AUTO_MERGE=0）；请在主仓手动 `git merge exp/evolution-2026-03-31_01-45-show-hn-mcpsec-owasp-mcp-top-scanner-04679c88`