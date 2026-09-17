const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

function activateTab(tab) {
  tabs.forEach((t) => {
    const isActive = t === tab;
    t.classList.toggle('is-active', isActive);
    t.setAttribute('aria-selected', isActive ? 'true' : 'false');
    t.tabIndex = isActive ? 0 : -1;
  });

  panels.forEach((panel) => {
    const isActive = panel.id === tab.getAttribute('aria-controls');
    panel.classList.toggle('is-active', isActive);
    panel.hidden = !isActive;
  });
}

tabs.forEach((tab) => {
  tab.addEventListener('click', () => activateTab(tab));

  tab.addEventListener('keydown', (e) => {
    const tabList = Array.from(tabs);
    const index = tabList.indexOf(tab);

    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
      const nextIndex =
        e.key === 'ArrowRight'
          ? (index + 1) % tabList.length
          : (index - 1 + tabList.length) % tabList.length;
      tabList[nextIndex].focus();
      activateTab(tabList[nextIndex]);
    }
  });
});
