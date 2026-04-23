# 实验成功：Show HN: ClamBot – AI agent that runs all LLM-generated code in a WASM sandbox

## 来源
- [Show HN: ClamBot – AI agent that runs all LLM-generated code in a WASM sandbox](https://github.com/clamguy/clambot)

## 来源正文摘录（抓取）
```
GitHub - clamguy/clambot: A security-focused personal AI assistant that runs all LLM-generated code inside a WASM sandbox (QuickJS inside Wasmtime) · GitHub Skip to content Navigation Menu Toggle navigation Sign in Appearance settings Platform AI CODE CREATION GitHub Copilot Write better code with AI GitHub Spark Build and deploy intelligent apps GitHub Models Manage and compare prompts MCP Registry New Integrate external tools DEVELOPER WORKFLOWS Actions Automate any workflow Codespaces Instant dev environments Issues Plan and track work Code Review Manage code changes APPLICATION SECURITY GitHub Advanced Security Find and fix vulnerabilities Code security Secure your code as you build Secret protection Stop leaks before they start EXPLORE Why GitHub Documentation Blog Changelog Marketplace View all features Solutions BY COMPANY SIZE Enterprises Small and medium teams Startups Nonprofits BY USE CASE App Modernization DevSecOps DevOps CI/CD View all use cases BY INDUSTRY Healthcare Financial services Manufacturing Government View all industries View all solutions Resources EXPLORE BY TOPIC AI Software Development DevOps Security View all topics EXPLORE BY TYPE Customer stories Events &amp; webinars Ebooks &amp; reports Business insights GitHub Skills SUPPORT &amp; SERVICES Documentation Customer support Community forum Trust center Partners View all resources Open Source COMMUNITY GitHub Sponsors Fund open source developers PROGRAMS Security Lab Maintainer Community Accelerator GitHub Stars Archive Program REPOSITORIES Topics Trending Collections Enterprise ENTERPRISE SOLUTIONS Enterprise platform AI-powered developer platform AVAILABLE ADD-ONS GitHub Advanced Security Enterprise-grade security features Copilot for Business Enterprise-grade AI features Premium Support Enterprise-grade 24/7 support Pricing Search or jump to... Search code, repositories, users, issues, pull requests... --> Search Clear Search syntax tips Provide feedback --> We read every piece of feedback, and take your input very seriously. Include my email address so I can be contacted Cancel Submit feedback Saved searches Use saved searches to filter your results more quickly --> Name Query To see all available qualifiers, see our documentation . Cancel Create saved search Sign in Sign up Appearance settings Resetting focus You signed in with another tab or window. Reload to refresh your session. You signed out in another tab or window. Reload to refresh your session. You switched accounts on another tab or window. Reload to refresh your session. Dismiss alert {{ message }} clamguy / clambot Public Notifications You must be signed in to change notification settings Fork 0 Star 5 Code Issues 0 Pull requests 0 Actions Projects Security 0 Insights Additional navigation options Code Issues Pull requests Actions Projects Security Insights clamguy/clambot main Branches Tags Go to file Code Open more actions menu Folders and files Name Name Last commit message Last commit date Latest commit History 6 Commits 6 Commits clambot clambot docs docs tests tests .env.example .env.example .env.test .env.test .gitignore .gitignore CHANGELOG.md CHANGELOG.md CONTRIBUTING.md CONTRIBUTING.md LICENSE LICENSE README.md README.md config.example.json config.example.json pyproject.toml pyproject.toml uv.lock uv.lock View all files Repository files navigation README Contributing MIT license 🐚 ClamBot: Secure AI Agent with WASM Sandbox Execution 🐚 ClamBot is a security-focused personal AI assistant that runs all LLM-generated code inside a WASM sandbox (QuickJS inside Wasmtime) — eliminating the arbitrary code execution risks of exec() / subprocess.run() patterns common in other agent frameworks. ✨ Inspired by OpenClaw and nanobot . 🔒 Every other agent framework runs LLM-generated code directly on your machine. ClamBot isolates it: 🤖 LLM generates a JavaScript "clam" (named, versioned, reusable script) 📦 The clam runs inside amla-sandbox (WASM/QuickJS) with memory isolation ✅ Tool calls yield back to Python for capability-checked, approval-gated dispatch ♻️ Successful clams are persisted and reused for identical future requests — zero latency, zero cost ✨ Key Features 🔒 WASM Sandbox Execution — all generated code runs in QuickJS/Wasmtime with memory isolation and no ambient network access 🛡️ Interactive Approval Gate — SHA-256 fingerprinted tool approvals with always-grants, turn-scoped grants, and per-tool scope options ♻️ Clam Reuse — successful scripts are promoted and reused for identical requests without any LLM call 🔧 Self-Fix Loop — up to 3 automatic retries with LLM-guided fix instructions on runtime failures 🤖 Multi-Provider LLM — OpenRouter, Anthropic, OpenAI, Gemini, DeepSeek, Ollama, OpenAI Codex (OAuth), and custom endpoints 💬 Telegram Integration — typing indicators, phase status messages, MarkdownV2 rendering, inline approval keyboards, file uploads 🧠 Long-Term Memory — MEMORY.md (durable facts auto-injected into prompts) + HISTORY.md (searchable interaction summaries) ⏰ Cron Scheduling — persistent timezone-aware jobs with cron , every , and at schedule types 💓 Heartbeat Service — proactive agent wakeup with task-driven execution from HEARTBEAT.md 🔑 Host-Managed Secrets — atomic-write store with 0600 permissions; secrets never appear in tool args, logs, or traces 🌐 SSRF Protection — private IP blocking on all outbound HTTP tools 📝 Session Compaction — automatic LLM-summarized compaction to prevent context window overflow 🏗️ Architecture ┌────────────────────────────────────────────────────────────────┐ │ Inbound Sources │ │ ┌───────────┐ ┌─────────────┐ ┌───────────┐ ┌──────────┐ │ │ │ 💬 Telegram│ │ ⏰ Cron │ │ 💓 Heartbeat│ │ 🖥️ CLI │ │ │ └─────┬─────┘ └──────┬──────┘ └─────┬─────┘ └────┬─────┘ │ └────────┼───────────────┼──────────────┼────────────┼──────────┘ ▼ ▼ ▼ ▼ ┌────────────────────────────────────────────────────────────────┐ │ 🎛️ Gateway Orchestrator │ │ /approve · /secret · /new command routing │ └────────────────────────┬───────────────────────────────────────┘ ▼ ┌────────────────────────────────────────────────────────────────┐ │ 🧠 Agent Pipeline │ │ │ │ 1. 📂 Session load + auto-compaction │ │ 2. 🔀 Clam Selector (pre-selection → LLM routing) │ │ 3. ⚡ Clam Generator (LLM → JavaScript) │ │ 4. 📦 WASM Runtime (QuickJS sandbox + approval-gated tools) │ │ 5. 🔍 Post-Runtime Analyzer (ACCEPT / SELF_FIX / REJECT) │ │ 6. 🧠 Background memory extraction (fire-and-forget) │ └────────────────────────┬───────────────────────────────────────┘ ▼ ┌────────────────────────────────────────────────────────────────┐ │ 📤 Outbound → Telegram / CLI │ └────────────────────────────────────────────────────────────────┘ 📦 Install git clone https://github.com/clamguy/clambot.git cd clambot uv venv &amp;&amp; uv pip install -e . 🚀 Quick Start Tip Get API keys: OpenRouter (recommended, access to all models) · Anthropic · OpenAI 1. 🎬 Initialize — auto-discovers API keys from environment and sets up workspace: # Set your API key (provider auto-detected by onboard) export OPENROUTER_API_KEY= " sk-or-v1-xxx " # Initialize workspace + config uv run clambot onboard uv run clambot onboard scans your environment variables, probes local Ollama, and generates ~/.clambot/config.json with everything it finds. No manual editing needed. 2. ✅ Verify uv run clambot status 3. 💬 Chat uv run clambot agent That's it! You have a working sandboxed AI assistant in under a minute. 🎉 Note If you need to tweak settings later, edit ~/.clambot/config.json — see ⚙️ Configuration below. 💬 Telegram Connect ClamBot to Telegram for a full mobile experience with inline approval buttons, typing indicators, and phase status messages. 1. 🤖 Create a bot — Open Telegram, search @BotFather , send /newbot , follow prompts, copy the token. 2. 🔗 Connect — the interactive command handles everything: uv run clambot channels connect telegram # Enter bot token → press "Connect" in bot → user ID auto-added → done! 3. 🚀 Run the gateway uv run clambot gateway That's it — message your bot on Telegram and ClamBot responds! 🎉 📝 Manual configuration (advanced) If you prefer to configure manually, add the following to ~/.clambot/config.json : { "channels" : { "telegram" : { "enabled" : true , "token" : " YOUR_BOT_TOKEN " , "allowFrom" : [ " YOUR_USER_ID " ] } } } allowFrom : Leave empty to allow all users, or add user IDs/usernames to restrict access. 🤖 Providers ClamBot supports multiple LLM backends through a registry-driven provider layer. Set an API key via environment and run uv run clambot onboard — the provider is auto-detected. Provider Purpose Setup openrouter 🌐 LLM (recommended, access to all models) export OPENROUTER_API_KEY=sk-or-... anthropic 🧠 LLM (Claude direct) export ANTHROPIC_API_KEY=sk-ant-... openai 💡 LLM (GPT direct) export OPENAI_API_KEY=sk-... deepseek 🔬 LLM (DeepSeek direct) export DEEPSEEK_API_KEY=... gemini 💎 LLM (Gemini direct) export GEMINI_API_KEY=... groq 🎙️ LLM + voice transcription (Whisper) export GROQ_API_KEY=... ollama 🏠 LLM (local, any model) ollama serve (auto-probed) openai_codex ⚡ LLM (Codex, OAuth) uv run clambot provider login openai-codex custom 🔌 Any OpenAI-compatible endpoint Config only — see below # Example: set up with OpenRouter export OPENROUTER_API_KEY= " sk-or-v1-xxx " uv run clambot onboard # auto-detects provider + model uv run clambot status # verify provider is ready ✅ uv run clambot agent # start chatting 💬 ⚡ OpenAI Codex (OAuth) Codex uses OAuth instead of API keys. Requires a ChatGPT Plus or Pro account. # 1. Login (opens browser) uv run clambot provider login openai-codex # 2. Chat — model auto-configured uv run clambot agent -m " Hello! " 🔌 Custom Provider (Any OpenAI-compatible API) Connects directly to any OpenAI-compatible endpoint — LM Studio, llama.cpp, Together AI, Fireworks, Azure OpenAI, or any self-hosted server. Add to ~/.clambot/config.json : { "providers" : { "custom" : { "apiKey" : " your-api-key " , "apiBase" : " https://api.your-provider.com/v1 " } }, "agents" : { "defaults" : { "model" : " your-model-name " } } } For local servers that don't require a key, set apiKey to any non-empty string (e.g. "no-key" ). 🏠 Ollama (local) Start Ollama and let onboard auto-detect it: # 1. Start Ollama ollama serve # 2. Onboard auto-probes Ollama and discovers available models uv run clambot onboard # 3. Chat uv run clambot agent ⚙️ Configuration Config file: ~/.clambot/config.json (auto-generated by uv run clambot onboard ) 📖 See docs/configuration.md for the full schema reference. 🔒 Security Tip For production deployments, set "restrictToWorkspace": true in your tools config to sandbox file access. Option Default Description tools.filesystem.restrictToWorkspace true 📁 Restricts filesystem tool to the workspace directory. Prevents path traversal. security.sslFallbackInsecure false 🔓 When true , HTTP tools retry with verify=False on SSL errors. Only for sandboxed environments. channels.telegram.allowFrom [] (allow all) 👤 Whitelist of user IDs. Empty = allow everyone. SSRF protection Always on 🌐 Blocks requests to 127.0.0.0/8 , 10.0.0.0/8 , 172.16.0.0/12 , 192.168.0.0/16 , 169.254.0.0/16 , ::1 , fc00::/7 Secret redaction Always on 🔑 Secret values never appear in tool args, events, approval records, or logs 🛡️ Tool Approvals Every tool call from generated code goes through an approval gate: 🔍 Tool call arrives ├─ ✅ Check always_grants → ALLOW immediately ├─ 🔄 Check turn-scoped grants → ALLOW if same resource └─ 🙋 Interactive prompt → Allow Once / Allow Always (scoped) / Reject Configure pre-approved patterns in ~/.clambot/config.json : { "agents" : { "approvals" : { "enabled" : true , "interactive" : true , "alwaysGrants" : [ { "tool" : " web_fetch " , "scope" : " host:api.coinbase.com " }, { "tool" : " fs " , "scope" : " workspace " } ] } } } 🔌 MCP (Model Context Protocol) ClamBot supports MCP — connect external tool servers and use them as native agent tools. Add to
```


## 实验分支
`exp/evolution-2026-03-30-show-hn-clambot-ai-agent-that-runs-a-85987e11`

## 测试命令
`npm run test:unit`

## Agent 钩子

命令："bash scripts/evolution-agent-claude.sh"

```

> my-raw-agent-sdk@0.1.0 ai:claude
> bash scripts/ai-cli/run-claude-fix.sh

repo: /Users/penglei/developer/self-test-grounding/ppeng-agent-core/.evolution-worktrees/2026-03-30-show-hn-clambot-ai-agent-that-runs-a-85987e11
using: claude -p（文档: docs/EXTERNAL_AI_CLI.md）
I'm unable to create or edit files in this session due to permission restrictions. All write operations (Write tool, Edit tool, bash redirection) are being blocked. This appears to be a session permission issue — the user needs to approve file write access.

Here are the three changes I've prepared but cannot apply:

**1. New file: `packages/core/src/ssrf-guard.ts`**

```typescript
import { lookup } from 'node:dns/promises';

/** IPv4 ranges that must be blocked to prevent SSRF. */
const BLOCKED_V4: Array<{ prefix: number; mask: number }> = [
  { prefix: 0x7f000000, mask: 0xff000000 }, // 127.0.0.0/8  (loopback)
  { prefix: 0x0a000000, mask: 0xff000000 }, // 10.0.0.0/8   (private)
  { prefix: 0xac100000, mask: 0xfff00000 }, // 172.16.0.0/12 (private)
  { prefix: 0xc0a80000, mask: 0xffff0000 }, // 192.168.0.0/16 (private)
  { prefix: 0xa9fe0000, mask: 0xffff0000 }, // 169.254.0.0/16 (link-local)
  { prefix: 0x00000000, mask: 0xff000000 }, // 0.0.0.0/8    (current network)
];

function ipv4ToNumber(ip: string): number | null {
  const parts = ip.split('.');
  if (parts.length !== 4) return null;
  let n = 0;
  for (const p of parts) {
    const octet = Number(p);
    if (!Number.isInteger(octet) || octet < 0 || octet > 255) return null;
    n = (n << 8) | octet;
  }
  return n >>> 0;
}

export function isBlockedIPv4(ip: string): boolean {
  const n = ipv4ToNumber(ip);
  if (n === null) return false;
  return BLOCKED_V4.some(({ prefix, mask }) => (n & mask) === prefix);
}

function isBlockedIPv6(ip: string): boolean {
  const lower = ip.toLowerCase();
  if (lower === '::1' || lower === '::ffff:127.0.0.1') return true;
  if (lower.startsWith('fc') || lower.startsWith('fd')) return true;
  return false;
}

export async function isPrivateHost(hostname: string): Promise<boolean> {
  if (isBlockedIPv4(hostname) || isBlockedIPv6(hostname)) return true;
  try {
    const { address } = await lookup(hostname, { all: false });
    if (isBlockedIPv4(address) || isBlockedIPv6(address)) return true;
  } catch {
    return false;
  }
  return false;
}

export async function assertPublicUrl(rawUrl: string): Promise<void> {
  let hostname: string;
  try {
    hostname = new URL(rawUrl).hostname;
  } catch {
    throw new Error('Invalid URL: ' + rawUrl);
  }
  if (await isPrivateHost(hostname)) {
    throw new Error('SSRF blocked: URL host "' + hostname + '" resolves to a private address');
  }
}
```

**2. Edit to `packages/core/src/image-assets.ts`** — Add import and call `assertPublicUrl` before `fetch()`:
- Line 4 area: add `import { assertPublicUrl } from './ssrf-guard.js';`
- Before line 124 (`const res = await fetch(...)`): add `await assertPublicUrl(url);`

**3. Edit to `packages/core/src/tools.ts`** — Expand the bash tool's risky tokens (around line 492-495):
```typescript
const riskyTokens = [
  'rm ', 'rm\t', 'rm -',
  'git reset', 'git checkout', 'git clean',
  'npm publish', 'sudo ',
  'chmod ', 'chown ', 'dd ', 'mkfs', 'mount ',
  'systemctl', 'kill ', 'killall', 'pkill',
  'shutdown', 'reboot',
  'eval ', 'exec ',
];
```

`★ Insight ─────────────────────────────────────`
- The SSRF guard uses bitmask arithmetic for O(1) IPv4 range checks — much faster than parsing CIDR strings at runtime
- The `assertPublicUrl` function resolves DNS before fetching, which catches DNS-rebinding attacks where a hostname initially resolves to a public IP but later resolves to a private one (though a true defense would re-check at fetch time)
- The risky tokens expansion adds common destructive commands that the existing list missed (`dd`, `eval`, `kill`, `chmod`, `chown`)
`─────────────────────────────────────────────────`

Please grant file write permissions to this session so I can apply these changes.

```

## worktree 变更（git diff --stat / status）

```
?? .evolution/
```

## 输出摘要

```

added 53 packages in 5s

10 packages are looking for funding
  run `npm fund` for details

> my-raw-agent-sdk@0.1.0 ai:claude
> bash scripts/ai-cli/run-claude-fix.sh

repo: /Users/penglei/developer/self-test-grounding/ppeng-agent-core/.evolution-worktrees/2026-03-30-show-hn-clambot-ai-agent-that-runs-a-85987e11
using: claude -p（文档: docs/EXTERNAL_AI_CLI.md）
I'm unable to create or edit files in this session due to permission restrictions. All write operations (Write tool, Edit tool, bash redirection) are being blocked. This appears to be a session permission issue — the user needs to approve file write access.

Here are the three changes I've prepared but cannot apply:

**1. New file: `packages/core/src/ssrf-guard.ts`**

```typescript
import { lookup } from 'node:dns/promises';

/** IPv4 ranges that must be blocked to prevent SSRF. */
const BLOCKED_V4: Array<{ prefix: number; mask: number }> = [
  { prefix: 0x7f000000, mask: 0xff000000 }, // 127.0.0.0/8  (loopback)
  { prefix: 0x0a000000, mask: 0xff000000 }, // 10.0.0.0/8   (private)
  { prefix: 0xac100000, mask: 0xfff00000 }, // 172.16.0.0/12 (private)
  { prefix: 0xc0a80000, mask: 0xffff0000 }, // 192.168.0.0/16 (private)
  { prefix: 0xa9fe0000, mask: 0xffff0000 }, // 169.254.0.0/16 (link-local)
  { prefix: 0x00000000, mask: 0xff000000 }, // 0.0.0.0/8    (current network)
];

function ipv4ToNumber(ip: string): number | null {
  const parts = ip.split('.');
  if (parts.length !== 4) return null;
  let n = 0;
  for (const p of parts) {
    const octet = Number(p);
    if (!Number.isInteger(octet) || octet < 0 || octet > 255) return null;
    n = (n << 8) | octet;
  }
  return n >>> 0;
}

export function isBlockedIPv4(ip: string): boolean {
  const n = ipv4ToNumber(ip);
  if (n === null) return false;
  return BLOCKED_V4.some(({ prefix, mask }) => (n & mask) === prefix);
}

function isBlockedIPv6(ip: string): boolean {
  const lower = ip.toLowerCase();
  if (lower === '::1' || lower === '::ffff:127.0.0.1') return true;
  if (lower.startsWith('fc') || lower.startsWith('fd')) return true;
  return false;
}

export async function isPrivateHost(hostname: string): Promise<boolean> {
  if (isBlockedIPv4(hostname) || isBlockedIPv6(hostname)) return true;
  try {
    const { address } = await lookup(hostname, { all: false });
    if (isBlockedIPv4(address) || isBlockedIPv6(address)) return true;
  } catch {
    return false;
  }
  return false;
}

export async function assertPublicUrl(rawUrl: string): Promise<void> {
  let hostname: string;
  try {
    hostname = new URL(rawUrl).hostname;
  } catch {
    throw new Error('Invalid URL: ' + rawUrl);
  }
  if (await isPrivateHost(hostname)) {
    throw new Error('SSRF blocked: URL host "' + hostname + '" resolves to a private address');
  }
}
```

**2. Edit to `packages/core/src/image-assets.ts`** — Add import and call `assertPublicUrl` before `fetch()`:
- Line 4 area: add `import { assertPublicUrl } from './ssrf-guard.js';`
- Before line 124 (`const res = await fetch(...)`): add `await assertPublicUrl(url);`

**3. Edit to `packages/core/src/tools.ts`** — Expand the bash tool's risky tokens (around line 492-495):
```typescript
const riskyTokens = [
  'rm ', 'rm\t', 'rm -',
  'git reset', 'git checkout', 'git clean',
  'npm publish', 'sudo ',
  'chmod ', 'chown ', 'dd ', 'mkfs', 'mount ',
  'systemctl', 'kill ', 'killall', 'pkill',
  'shutdown', 'reboot',
  'eval ', 'exec ',
];
```

`★ Insight ─────────────────────────────────────`
- The SSRF guard uses bitmask arithmetic for O(1) IPv4 range checks — much faster than parsing CIDR strings at runtime
- The `assertPublicUrl` function resolves DNS before fetching, which catches DNS-rebinding attacks where a hostname initially resolves to a public IP but later resolves to a private one (though a true defense would re-check at fetch time)
- The risky tokens expansion adds common destructive commands that the existing list missed (`dd`, `eval`, `kill`, `chmod`, `chown`)
`─────────────────────────────────────────────────`

Please grant file write permissions to this session so I can apply these changes.

> my-raw-agent-sdk@0.1.0 test:unit
> node --test packages/core/test/*.test.js packages/capability-gateway/test/*.test.js

TAP version 13
# Subtest: feishu url_verification
ok 1 - feishu url_verification
  ---
  duration_ms: 0.712166
  type: 'test'
  ...
# Subtest: feishu extract group text
ok 2 - feishu extract group text
  ---
  duration_ms: 0.182417
  type: 'test'
  ...
# Subtest: mergeSkillsByName: agents override workspace on same name
ok 3 - mergeSkillsByName: agents override workspace on same name
  ---
  duration_ms: 0.403167
  type: 'test'
  ...
# Subtest: HybridModelRouterAdapter routes to VL when messages contain an image part
ok 4 - HybridModelRouterAdapter routes to VL when messages contain an image part
  ---
  duration_ms: 0.564167
  type: 'test'
  ...
# Subtest: HybridModelRouterAdapter last_user scope ignores images only in older turns
ok 5 - HybridModelRouterAdapter last_user scope ignores images only in older turns
  ---
  duration_ms: 0.122792
  type: 'test'
  ...
# (node:51046) ExperimentalWarning: SQLite is an experimental feature and might change at any time
# (Use `node --trace-warnings ...` to show where the warning was created)
# Subtest: chat session can do a simple reply through the raw loop
ok 6 - chat session can do a simple reply through the raw loop
  ---
  duration_ms: 40.354417
  type: 'test'
  ...
# Subtest: task sessions complete and bind an isolated workspace
ok 7 - task sessions complete and bind an isolated workspace
  ---
  duration_ms: 16.821375
  type: 'test'
  ...
# Subtest: approval blocks the session until the user approves the tool call
ok 8 - approval blocks the session until the user approves the tool call
  ---
  duration_ms: 12.85375
  type: 'test'
  ...
# Subtest: read_file can list a directory passed by path
ok 9 - read_file can list a directory passed by path
  ---
  duration_ms: 11.925834
  type: 'test'
  ...
# Subtest: tool execution errors are returned to the model instead of crashing the session
ok 10 - tool execution errors are returned to the model instead of crashing the session
  ---
  duration_ms: 15.877208
  type: 'test'
  ...
# Subtest: teammate sessions and mailbox messages can be created directly
ok 11 - teammate sessions and mailbox messages can be created directly
  ---
  duration_ms: 11.016292
  type: 'test'
  ...
# Subtest: parallel tool calls execute in one assistant message
ok 12 - parallel tool calls execute in one assistant message
  ---
  duration_ms: 12.970208
  type: 'test'
  ...
# Subtest: scratch memory is copied to subagent session
ok 13 - scratch memory is copied to subagent session
  ---
  duration_ms: 12.102542
  type: 'test'
  ...
# Subtest: read_file offset_line returns a window
ok 14 - read_file offset_line returns a window
  ---
  duration_ms: 12.595625
  type: 'test'
  ...
# Subtest: scheduler dequeue wakes sessions enqueued on task create
ok 15 - scheduler dequeue wakes sessions enqueued on task create
  ---
  duration_ms: 23.890209
  type: 'test'
  ...
# Subtest: harness_write_spec writes under repo when no workspace
ok 16 - harness_write_spec writes under repo when no workspace
  ---
  duration_ms: 11.608916
  type: 'test'
  ...
# Subtest: task_update merges metadata shallowly
ok 17 - task_update merges metadata shallowly
  ---
  duration_ms: 5.447833
  type: 'test'
  ...
# Subtest: createApproval idempotency key returns same pending row
ok 18 - createApproval idempotency key returns same pending row
  ---
  duration_ms: 5.302791
  type: 'test'
  ...
# Subtest: external AI tools are absent unless RAW_AGENT_EXTERNAL_AI_TOOLS is set
ok 19 - external AI tools are absent unless RAW_AGENT_EXTERNAL_AI_TOOLS is set
  ---
  duration_ms: 5.377875
  type: 'test'
  ...
# Subtest: external AI tools are registered when RAW_AGENT_EXTERNAL_AI_TOOLS=1
ok 20 - external AI tools are registered when RAW_AGENT_EXTERNAL_AI_TOOLS=1
  ---
  duration_ms: 4.18325
  type: 'test'
  ...
# Subtest: normalizeSelfHealPolicy defaults
ok 21 - normalizeSelfHealPolicy defaults
  ---
  duration_ms: 0.807041
  type: 'test'
  ...
# Subtest: npmScriptForSelfHealPolicy presets
ok 22 - npmScriptForSelfHealPolicy presets
  ---
  duration_ms: 0.082375
  type: 'test'
  ...
# Subtest: custom npm script validation
ok 23 - custom npm script validation
  ---
  duration_ms: 0.147875
  type: 'test'
  ...
# Subtest: normalizeSelfHealPolicy caps maxFixIterations
ok 24 - normalizeSelfHealPolicy caps maxFixIterations
  ---
  duration_ms: 0.058084
  type: 'test'
  ...
# Subtest: estimateTokensFromText is positive for non-empty
ok 25 - estimateTokensFromText is positive for non-empty
  ---
  duration_ms: 0.537125
  type: 'test'
  ...
# Subtest: estimateMessageTokens sums roles and parts
ok 26 - estimateMessageTokens sums roles and parts
  ---
  duration_ms: 0.07625
  type: 'test'
  ...
# Subtest: estimateMessageTokens counts image parts
ok 27 - estimateMessageTokens counts image parts
  ---
  duration_ms: 0.050792
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
# duration_ms 269.976542

```

## 合并

已合并。Commit: 36d577aa9a405e931d610fcdd885f0bebe76c511