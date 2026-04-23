/**
 * Evolution showcase — 来源、结果、原因字段、沉淀。
 */
(function () {
  const OUTCOME_ORDER = ['all', 'success', 'failure', 'no-op', 'skip', 'superseded'];
  const OUTCOME_LABELS = {
    all: '全部',
    success: '成功',
    failure: '失败',
    'no-op': '未采纳',
    skip: '无改动跳过',
    superseded: '已取代'
  };

  const els = {
    outcomeFilters: document.getElementById('outcomeFilters'),
    q: document.getElementById('q'),
    recordList: document.getElementById('recordList'),
    listCount: document.getElementById('listCount'),
    loadError: document.getElementById('loadError')
  };

  let rawItems = [];
  let activeOutcome = 'all';

  function renderOutcomeFilters() {
    els.outcomeFilters.innerHTML = '';
    for (const key of OUTCOME_ORDER) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'filter-btn';
      btn.textContent = OUTCOME_LABELS[key] || key;
      btn.setAttribute('aria-pressed', key === activeOutcome ? 'true' : 'false');
      btn.dataset.outcome = key;
      btn.addEventListener('click', () => {
        activeOutcome = key;
        els.outcomeFilters.querySelectorAll('.filter-btn').forEach((b) => {
          b.setAttribute('aria-pressed', b.dataset.outcome === activeOutcome ? 'true' : 'false');
        });
        renderList();
      });
      els.outcomeFilters.appendChild(btn);
    }
  }

  function filterItems() {
    let list = [...rawItems];
    if (activeOutcome !== 'all') {
      list = list.filter((i) => i.outcome === activeOutcome);
    }
    const q = (els.q.value || '').trim().toLowerCase();
    if (q) {
      list = list.filter((i) => (i.title || '').toLowerCase().includes(q));
    }
    list.sort((a, b) => String(b.dateUtc || '').localeCompare(String(a.dateUtc || '')));
    return list;
  }

  function addReasonBlock(container, label, text) {
    if (!text || !String(text).trim()) return;
    const wrap = document.createElement('div');
    wrap.className = 'reason-block';
    const lb = document.createElement('span');
    lb.className = 'reason-label';
    lb.textContent = label;
    const p = document.createElement('p');
    p.className = 'reason-text';
    p.textContent = text;
    wrap.appendChild(lb);
    wrap.appendChild(p);
    container.appendChild(wrap);
  }

  function renderList() {
    const list = filterItems();
    els.listCount.textContent = list.length ? `共 ${list.length} 条` : '无匹配';
    els.recordList.innerHTML = '';

    for (const item of list) {
      const li = document.createElement('li');
      li.className = 'record-item';

      const article = document.createElement('article');
      article.className = 'record-article';

      const row = document.createElement('div');
      row.className = 'record-head';
      const badge = document.createElement('span');
      badge.className = 'outcome-badge';
      badge.textContent = item.outcomeLabel || item.outcome || '—';
      if (item.skipTag) {
        badge.title = `研究标签：${item.skipTag}`;
        const tag = document.createElement('span');
        tag.className = 'skip-tag';
        tag.textContent = item.skipTag;
        row.appendChild(badge);
        row.appendChild(tag);
      } else {
        row.appendChild(badge);
      }
      const h3 = document.createElement('h3');
      h3.className = 'record-title';
      h3.textContent = item.title || item.id || '（无标题）';
      row.appendChild(h3);

      const sourceP = document.createElement('p');
      sourceP.className = 'record-source';
      if (item.sourceUrl) {
        const a = document.createElement('a');
        a.href = item.sourceUrl;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.textContent = item.sourceUrl;
        sourceP.appendChild(document.createTextNode('来源 · '));
        sourceP.appendChild(a);
      } else {
        sourceP.textContent = '来源 · （无外链）';
      }

      const reasons = document.createElement('div');
      reasons.className = 'record-reasons';
      addReasonBlock(reasons, '为何继续演进（研究）', item.reasonChosen);
      addReasonBlock(reasons, '为何未采纳 / 跳过', item.reasonSkipped);
      addReasonBlock(reasons, '失败原因', item.reasonFailed);

      article.appendChild(row);
      article.appendChild(sourceP);
      article.appendChild(reasons);

      if (item.summary && String(item.summary).trim()) {
        const dep = document.createElement('div');
        dep.className = 'record-deposit';
        const depositLabel = document.createElement('span');
        depositLabel.className = 'deposit-label';
        depositLabel.textContent = '沉淀 / 落地摘要';
        const depositText = document.createElement('p');
        depositText.className = 'deposit-text';
        depositText.textContent = item.summary;
        dep.appendChild(depositLabel);
        dep.appendChild(depositText);
        article.appendChild(dep);
      }

      li.appendChild(article);
      els.recordList.appendChild(li);
    }
  }

  async function init() {
    try {
      const res = await fetch('data/evolution.json', { cache: 'no-store' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      rawItems = Array.isArray(data.items) ? data.items : [];

      renderOutcomeFilters();
      els.q.addEventListener('input', () => renderList());
      renderList();
      els.loadError.hidden = true;
    } catch (e) {
      els.loadError.hidden = false;
      els.loadError.textContent = `无法加载 data/evolution.json：${e.message}`;
    }
  }

  init();
})();
