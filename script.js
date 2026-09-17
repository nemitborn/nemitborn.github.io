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
 
