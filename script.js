/**
 * SCRIPT DE INTERAÇÕES E EFEITOS
 * Portfólio Vinícius Gabriel
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Atualizar ano no rodapé
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2. Menu mobile toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navMenu.classList.toggle('open');
      const isExpanded = navMenu.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Fechar menu mobile ao clicar em um link
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Fechar menu mobile ao clicar fora dele
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        navMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // 3. Atualizar link ativo na navbar ao clicar
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // 4. Modal de detalhes para os 3 cards da galeria
  const modal = document.getElementById('previewModal');
  const modalContent = document.getElementById('modalContent');
  const modalClose = document.getElementById('modalClose');
  const galleryItems = document.querySelectorAll('.gallery-item');

  // Dados dos projetos/miniaturas (fácil de editar e personalizar)
  const projectsData = [
    {
      title: 'Desenvolvimento e Código Limpo',
      category: 'Front-end & Back-end',
      description: 'Estruturação de aplicações modernas utilizando boas práticas de arquitetura de software, componentização e padrões de código eficientes.',
      techs: ['JavaScript', 'HTML5', 'CSS3', 'Git']
    },
    {
      title: 'Metodologia e Trabalho em Equipe',
      category: 'Planejamento Ágil',
      description: 'Participação em processos de ideação, design de requisitos, arquitetura de sistemas e trabalho colaborativo.',
      techs: ['Scrum', 'Kanban', 'UML', 'Code Review']
    },
    {
      title: 'Interfaces e Dashboards Modernos',
      category: 'UI/UX & Aplicações Web',
      description: 'Criação de dashboards intuitivos, com visualizações de dados claras, alta responsividade e foco total na experiência do usuário.',
      techs: ['Design System', 'Glassmorphism', 'Responsividade', 'Figma']
    }
  ];

  galleryItems.forEach((item, index) => {
    const data = projectsData[index] || projectsData[0];
    const imgEl = item.querySelector('.thumb-img');

    const openItemModal = () => {
      if (!modal || !modalContent) return;

      const imgSrc = imgEl ? imgEl.src : '';
      const tagsHtml = data.techs.map(t => `<span class="tech-pill">${t}</span>`).join(' ');

      modalContent.innerHTML = `
        <h3>${data.title}</h3>
        <p style="font-size: 0.85rem; font-weight: 700; color: #1565c0; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem;">
          ${data.category}
        </p>
        <img src="${imgSrc}" alt="${data.title}" class="modal-img-preview" />
        <p>${data.description}</p>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1rem;">
          ${tagsHtml}
        </div>
      `;

      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    };

    item.addEventListener('click', openItemModal);
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openItemModal();
      }
    });
  });

  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // 5. Efeito 3D sutil ao mover o mouse nos cards de vidro (desktop)
  if (window.matchMedia('(min-width: 1025px)').matches) {
    const cards = document.querySelectorAll('.glass-card');
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -3;
        const rotateY = ((x - centerX) / centerX) * 3;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  // 6. Alerta amigável no botão de currículo caso não haja PDF anexado
  const btnResume = document.getElementById('btnResume');
  if (btnResume) {
    btnResume.addEventListener('click', (e) => {
      const href = btnResume.getAttribute('href');
      if (href === '#curriculo' || !href) {
        e.preventDefault();
        alert('Para adicionar seu currículo, basta colocar o arquivo "curriculo.pdf" na pasta do site e alterar o href no index.html!');
      }
    });
  }
});
