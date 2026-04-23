/**
 * Evolution showcase — 仅展示：来源 URL、标题、沉淀摘要；固定按时间新→旧。
 */
(function () {
  const els = {
    q: document.getElementById('q'),
    recordList: document.getElementById('recordList'),
    listCount: document.getElementById('listCount'),
    loadError: document.getElementById('loadError')
  };

  let rawItems = [];

  function filterItems() {
    let list = [...rawItems];
    const q = (els.q.value || '').trim().toLowerCase();
    if (q) {
      list = list.filter((i) => (i.title || '').toLowerCase().includes(q));
    }
    list.sort((a, b) => String(b.dateUtc || '').localeCompare(String(a.dateUtc || '')));
    return list;
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

      const h3 = document.createElement('h3');
      h3.className = 'record-title';
      h3.textContent = item.title || item.id || '（无标题）';

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

      const deposit = document.createElement('div');
      deposit.className = 'record-deposit';
      const depositLabel = document.createElement('span');
      depositLabel.className = 'deposit-label';
      depositLabel.textContent = '沉淀';
      const depositText = document.createElement('p');
      depositText.className = 'deposit-text';
      depositText.textContent = item.summary || '（暂无摘要）';
      deposit.appendChild(depositLabel);
      deposit.appendChild(depositText);

      article.appendChild(h3);
      article.appendChild(sourceP);
      article.appendChild(deposit);
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
