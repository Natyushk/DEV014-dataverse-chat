/*export function createSidebar() {
  const viewEl = document.createElement('div');
  viewEl.setAttribute('id', 'sidebar');
  viewEl.innerHTML = `
  <div class="sidebar">
        <div class="menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul class="menu">
          <li><a href="#">home</a></li>
          <li><a href="#">Chat-personas-millonarias</a></li>
        </ul>
      </div>
    `;
  
  const menuToggle = viewEl.querySelector('.menu-toggle');
  const sidebar = viewEl.querySelector('.sidebar');
  
  menuToggle.addEventListener('click', toggleMenu);

  function toggleMenu() {
    sidebar.classList.toggle('open');
  }

  return viewEl;
}*/