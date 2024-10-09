document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const sidebar = document.createElement('div');
  sidebar.classList.add('sidebar');
  sidebar.innerHTML = `
      <div class="sidebar-content">
          <a href="#" class="closebtn">&times;</a>
          <ul class="menu-items">
              <!--<li><a href="#topo">Home</a></li>-->
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#habilidade">Habilidades</a></li>
              <li><a href="#projetos">Projetos</a></li>
              <li><a href="#contact">Contato</a></li>
          </ul>
          <a href="https://wa.me/11950645173" class="botaoTopo">Entre em contato <img width="20" height="20" src="img/icons/icons-whatsapp.svg" alt="WhatsApp"></a>
      </div>
  `;
  document.body.appendChild(sidebar);

  const closeBtn = sidebar.querySelector('.closebtn');

  menuToggle.addEventListener('click', function() {
      sidebar.style.width = "100%";
  });

  closeBtn.addEventListener('click', function() {
      sidebar.style.width = "0";
  });

  sidebar.querySelectorAll('.menu-items a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault(); 

          const targetId = this.getAttribute('href');
          const targetSection = document.querySelector(targetId);

          targetSection.scrollIntoView({
              behavior: 'smooth'
          });

          sidebar.style.width = "0";
      });
  });

  window.addEventListener('resize', function() {
      if (window.innerWidth >= 769) {
          sidebar.style.width = "0";
      }
  });
});
