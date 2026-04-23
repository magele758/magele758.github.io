/**
 * Evolution showcase — 纯静态，从 data/evolution.json 渲染列表。
 */
(function () {
  const STATUS_ORDER = ['success', 'failure', 'no-op', 'skip', 'superseded'];
  const STATUS_LABELS = {
    all: '全部',
    success: '成功',
    failure: '失败',
    'no-op': '未改动',
    skip: '跳过',
    superseded: '被取代'
  };

  const els = {
    statsStrip: document.getElementById('statsStrip'),
    statusFilters: document.getElementById('statusFilters'),
    q: document.getElementById('q'),
    sort: document.getElementById('sort'),
    recordList: document.getElementById('recordList'),
    listCount: document.getElementById('listCount'),
    loadError: document.getElementById('loadError'),
    buildMeta: document.getElementById('buildMeta')
  };

  let rawItems = [];
  let activeStatus = 'all';

  function badgeClass(status) {
    switch (status) {
      case 'success':
        return 'badge badge-success';
      case 'failure':
        return 'badge badge-failure';
      case 'no-op':
        return 'badge badge-no-op';
      case 'skip':
        return 'badge badge-skip';
      case 'superseded':
        return 'badge badge-superseded';
      default:
        return 'badge';
    }
  }

  function githubBlobUrl(agentRepo, relativePath) {
    if (!agentRepo || !relativePath) return '';
    const branch = 'main';
    return `https://github.com/${agentRepo}/blob/${branch}/${relativePath}`;
  }

  function githubCommitUrl(agentRepo, hash) {
    if (!agentRepo || !hash) return '';
    return `https://github.com/${agentRepo}/commit/${hash}`;
  }

  function renderStats(stats, total) {
    els.statsStrip.innerHTML = '';
    const totalChip = document.createElement('div');
    totalChip.className = 'stat-chip';
    totalChip.innerHTML = `<span class="label">条目</span><span class="value">${total}</span>`;
    els.statsStrip.appendChild(totalChip);

    for (const key of STATUS_ORDER) {
      const n = stats[key];
      if (n == null) continue;
      const chip = document.createElement('div');
      chip.className = 'stat-chip';
      chip.innerHTML = `<span class="label">${STATUS_LABELS[key] || key}</span><span class="value">${n}</span>`;
      els.statsStrip.appendChild(chip);
    }
  }

  function renderFilters() {
    els.statusFilters.innerHTML = '';
    const keys = ['all', ...STATUS_ORDER];
    for (const key of keys) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'filter-btn';
      btn.textContent = STATUS_LABELS[key] || key;
      btn.setAttribute('aria-pressed', key === activeStatus ? 'true' : 'false');
      btn.dataset.status = key;
      btn.addEventListener('click', () => {
        activeStatus = key;
        els.statusFilters.querySelectorAll('.filter-btn').forEach((b) => {
          b.setAttribute('aria-pressed', b.dataset.status === activeStatus ? 'true' : 'false');
        });
        renderList();
      });
      els.statusFilters.appendChild(btn);
    }
  }

  function filterItems() {
    let list = [...rawItems];
    if (activeStatus !== 'all') {
      list = list.filter((i) => (i.status || i.section) === activeStatus);
    }
    const q = (els.q.value || '').trim().toLowerCase();
    if (q) {
      list = list.filter((i) => (i.title || '').toLowerCase().includes(q));
    }
    const sort = els.sort.value;
    if (sort === 'date-desc') {
      list.sort((a, b) => String(b.dateUtc || '').localeCompare(String(a.dateUtc || '')));
    } else if (sort === 'date-asc') {
      list.sort((a, b) => String(a.dateUtc || '').localeCompare(String(b.dateUtc || '')));
    } else if (sort === 'status') {
      list.sort((a, b) => {
        const sa = a.status || a.section || '';
        const sb = b.status || b.section || '';
        const ia = STATUS_ORDER.indexOf(sa);
        const ib = STATUS_ORDER.indexOf(sb);
        const ca = ia === -1 ? 99 : ia;
        const cb = ib === -1 ? 99 : ib;
        if (ca !== cb) return ca - cb;
        return String(b.dateUtc || '').localeCompare(String(a.dateUtc || ''));
      });
    }
    return list;
  }

  function renderList() {
    const list = filterItems();
    els.listCount.textContent = `显示 ${list.length} 条记录`;
    els.recordList.innerHTML = '';

    for (const item of list) {
      const status = item.status || item.section || '';
      const li = document.createElement('li');
      const details = document.createElement('details');
      details.className = 'record-card';

      const summary = document.createElement('summary');
      const badge = document.createElement('span');
      badge.className = badgeClass(status);
      badge.textContent = status;

      const titleWrap = document.createElement('div');
      titleWrap.className = 'record-title-wrap';
      const h3 = document.createElement('h3');
      h3.className = 'record-title';
      h3.textContent = item.title || item.id;
      const meta = document.createElement('p');
      meta.className = 'record-meta';
      const dateStr = item.dateUtc ? new Date(item.dateUtc).toLocaleString('zh-CN') : '—';
      meta.textContent = `${dateStr} · ${item.section}`;

      titleWrap.appendChild(h3);
      titleWrap.appendChild(meta);
      summary.appendChild(badge);
      summary.appendChild(titleWrap);

      const body = document.createElement('div');
      body.className = 'record-body';
      const sumP = document.createElement('p');
      sumP.className = 'summary-text';
      sumP.textContent = item.summary || '（无摘要）';

      const links = document.createElement('div');
      links.className = 'link-row';

      if (item.sourceUrl) {
        const a = document.createElement('a');
        a.href = item.sourceUrl;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.textContent = '原始资料';
        links.appendChild(a);
      }

      const agentRepo = window.__EVOLUTION_AGENT_REPO__ || '';
      const blob = githubBlobUrl(agentRepo, item.relativePath);
      if (blob) {
        const a = document.createElement('a');
        a.href = blob;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.textContent = '仓库内 Markdown';
        links.appendChild(a);
      }

      if (item.mergeCommit && agentRepo) {
        const a = document.createElement('a');
        a.href = githubCommitUrl(agentRepo, item.mergeCommit);
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.textContent = `合并提交 ${item.mergeCommit.slice(0, 7)}`;
        links.appendChild(a);
      }

      body.appendChild(sumP);
      body.appendChild(links);

      if (item.experimentBranch) {
        const kv = document.createElement('p');
        kv.className = 'kv';
        kv.innerHTML = `分支 <code>${escapeHtml(item.experimentBranch)}</code>`;
        body.appendChild(kv);
      }
      if (item.featurePathsCount != null) {
        const kv = document.createElement('p');
        kv.className = 'kv';
        kv.textContent = `功能源码文件数：${item.featurePathsCount}`;
        body.appendChild(kv);
      }
      if (item.skipType) {
        const kv = document.createElement('p');
        kv.className = 'kv';
        kv.textContent = `跳过类型：${item.skipType}`;
        body.appendChild(kv);
      }

      details.appendChild(summary);
      details.appendChild(body);
      li.appendChild(details);
      els.recordList.appendChild(li);
    }
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  async function init() {
    try {
      const res = await fetch('data/evolution.json', { cache: 'no-store' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      rawItems = Array.isArray(data.items) ? data.items : [];
      window.__EVOLUTION_AGENT_REPO__ = data.agentRepo || '';

      if (data.generatedAt) {
        els.buildMeta.hidden = false;
        els.buildMeta.textContent = `数据生成：${new Date(data.generatedAt).toLocaleString('zh-CN')}${
          data.agentRepo ? ` · 仓库 ${data.agentRepo}` : ''
        }`;
      }

      const stats = data.stats || {};
      const total = rawItems.length;
      renderStats(stats, total);
      renderFilters();
      els.q.addEventListener('input', () => renderList());
      els.sort.addEventListener('change', () => renderList());
      renderList();
      els.loadError.hidden = true;
    } catch (e) {
      els.loadError.hidden = false;
      els.loadError.textContent = `无法加载 data/evolution.json：${e.message}。请先在本仓库运行 npm run evolution:showcase-build。`;
    }
  }

  init();
})();
