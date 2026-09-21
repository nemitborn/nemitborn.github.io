const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');
 
function activateTab(tab) {
  tabs.forEach((t) => {
    const isActive = t === tab;
    t.classList.toggle('is-active', isActive);
    t.setAttribute('aria-selected', isActive ? 'true' : 'false');
  });
 
  panels.forEach((panel) => {
    const isActive = panel.id === tab.getAttribute('aria-controls');
    panel.classList.toggle('is-active', isActive);
    panel.hidden = !isActive;
  });
}
 
tabs.forEach((tab) => {
  tab.addEventListener('click', () => activateTab(tab));
});










const projects = [
  {
    title: 'Placeholder',
    year: '1989',
    desc: 'a song by nxp probably.',
  },
];
 
const experience = [
  {
    title: 'work',
    year: '2026',
    desc: 'man im hungry',
  },
];
 
function renderEntries(list, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
 
  if (list.length === 0) {
    const empty = document.createElement('li');
    empty.className = 'entry entry-empty';
    empty.innerHTML = '<p>Nothing here yet.</p>';
    container.appendChild(empty);
    return;
  }
 
  list.forEach((item) => {
    const li = document.createElement('li');
    li.className = 'entry';
    li.innerHTML = `
      <div class="entry-head">
        <span class="entry-title">${item.title}</span>
        <span class="entry-meta">${item.year}</span>
      </div>
      <p class="entry-desc">${item.desc}</p>
    `;
    container.appendChild(li);
  });
}
 
renderEntries(projects, 'projects-list');
renderEntries(experience, 'experience-list');
