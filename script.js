/**
 * EyeTrack Analytics - Figma Style Prototype
 * Interactive prototype focused on visual design and user experience
 */

class EyeTrackPrototype {
  constructor() {
    this.currentPage = 'dashboard';
    this.sidebarCollapsed = false;
    this.isLoading = true;
    
    this.initializePrototype();
  }

  initializePrototype() {
    // Simulate loading
    setTimeout(() => {
      this.hideLoadingScreen();
      this.setupEventListeners();
      this.startDashboardAnimations();
    }, 2500);
  }

  hideLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
      loadingScreen.style.opacity = '0';
      loadingScreen.style.transform = 'scale(0.95)';
      setTimeout(() => {
        loadingScreen.remove();
        this.isLoading = false;
        this.showWelcomeToast();
      }, 500);
    }
  }

  setupEventListeners() {
    // Sidebar navigation
    document.querySelectorAll('.menu-item[data-page]').forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const page = item.dataset.page;
        this.navigateToPage(page);
      });
    });

    // Sidebar toggle
    const sidebarToggle = document.getElementById('sidebarToggle');
    if (sidebarToggle) {
      sidebarToggle.addEventListener('click', () => {
        this.toggleSidebar();
      });
    }

    // Interactive elements
    this.setupInteractiveElements();
    
    // Responsive behavior
    this.setupResponsiveBehavior();
    
    // Keyboard navigation
    this.setupKeyboardNavigation();

    // Mock interactions
    this.setupMockInteractions();
  }

  navigateToPage(pageId) {
    if (this.isLoading) return;

    // Update sidebar navigation
    document.querySelectorAll('.menu-item').forEach(item => {
      item.classList.remove('active');
    });
    
    const activeNavItem = document.querySelector(`[data-page="${pageId}"]`);
    if (activeNavItem) {
      activeNavItem.classList.add('active');
      
      // Add click animation
      activeNavItem.style.transform = 'scale(0.98)';
      setTimeout(() => {
        activeNavItem.style.transform = '';
      }, 150);
    }

    // Update pages with smooth transition
    this.switchPages(pageId);
    
    // Update page title and subtitle
    this.updatePageTitle(pageId);
    
    // Track current page
    this.currentPage = pageId;
    
    // Page-specific animations
    setTimeout(() => {
      this.animatePageContent(pageId);
    }, 200);
  }

  switchPages(pageId) {
    const currentActivePage = document.querySelector('.page.active');
    const targetPage = document.getElementById(pageId);
    
    if (currentActivePage && targetPage && currentActivePage !== targetPage) {
      // Fade out current page
      currentActivePage.style.opacity = '0';
      currentActivePage.style.transform = 'translateY(-10px)';
      
      setTimeout(() => {
        currentActivePage.classList.remove('active');
        currentActivePage.style.opacity = '';
        currentActivePage.style.transform = '';
        
        // Fade in new page
        targetPage.classList.add('active');
        targetPage.style.opacity = '0';
        targetPage.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
          targetPage.style.opacity = '1';
          targetPage.style.transform = 'translateY(0)';
        }, 50);
      }, 200);
    } else if (targetPage) {
      targetPage.classList.add('active');
    }
  }

  updatePageTitle(pageId) {
    const titles = {
      'dashboard': {
        title: 'Dashboard',
        subtitle: 'Visão geral dos testes e análises'
      },
      'configure': {
        title: 'Configurar Layout',
        subtitle: 'Definir como o teste será apresentado'
      },
      'images': {
        title: 'Registrar Imagens',
        subtitle: 'Gerenciar banco de imagens para testes'
      },
      'reports': {
        title: 'Gerar Relatórios',
        subtitle: 'Análises detalhadas dos resultados'
      },
      'history': {
        title: 'Testes Anteriores',
        subtitle: 'Histórico completo de experimentos'
      },
      'settings': {
        title: 'Configurações',
        subtitle: 'Preferências e configurações do sistema'
      }
    };

    const pageInfo = titles[pageId] || titles['dashboard'];
    
    const titleElement = document.getElementById('pageTitle');
    const subtitleElement = document.getElementById('pageSubtitle');
    
    if (titleElement && subtitleElement) {
      // Animate title change
      titleElement.style.opacity = '0';
      subtitleElement.style.opacity = '0';
      
      setTimeout(() => {
        titleElement.textContent = pageInfo.title;
        subtitleElement.textContent = pageInfo.subtitle;
        
        titleElement.style.opacity = '1';
        subtitleElement.style.opacity = '1';
      }, 150);
    }
  }

  animatePageContent(pageId) {
    if (pageId === 'dashboard') {
      this.animateDashboardContent();
    } else {
      this.animatePrototypePlaceholder();
    }
  }

  animateDashboardContent() {
    // Animate stats cards
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        card.style.transition = 'all 0.4s ease-out';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, index * 100 + 100);
    });

    // Animate chart bars
    setTimeout(() => {
      const chartBars = document.querySelectorAll('.chart-bar');
      chartBars.forEach((bar, index) => {
        bar.style.height = '0%';
        const targetHeight = bar.getAttribute('style').match(/height:\s*(\d+%)/)?.[1] || '50%';
        
        setTimeout(() => {
          bar.style.transition = 'height 0.8s ease-out';
          bar.style.height = targetHeight;
        }, index * 100);
      });
    }, 800);

    // Animate activity items
    setTimeout(() => {
      const activityItems = document.querySelectorAll('.activity-item');
      activityItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(20px)';
        
        setTimeout(() => {
          item.style.transition = 'all 0.3s ease-out';
          item.style.opacity = '1';
          item.style.transform = 'translateX(0)';
        }, index * 100);
      });
    }, 1000);

    // Animate table rows
    setTimeout(() => {
      const tableRows = document.querySelectorAll('.table-row');
      tableRows.forEach((row, index) => {
        row.style.opacity = '0';
        row.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
          row.style.transition = 'all 0.3s ease-out';
          row.style.opacity = '1';
          row.style.transform = 'translateY(0)';
        }, index * 80);
      });
    }, 1200);
  }

  animatePrototypePlaceholder() {
    const placeholder = document.querySelector('.prototype-placeholder');
    if (placeholder) {
      const content = placeholder.querySelector('.prototype-content');
      const icon = content.querySelector('.prototype-icon');
      const features = content.querySelectorAll('.feature-item');
      const button = content.querySelector('.btn-prototype');
      
      // Reset styles
      content.style.opacity = '0';
      content.style.transform = 'translateY(30px)';
      
      // Animate content
      setTimeout(() => {
        content.style.transition = 'all 0.5s ease-out';
        content.style.opacity = '1';
        content.style.transform = 'translateY(0)';
      }, 100);
      
      // Animate icon
      setTimeout(() => {
        if (icon) {
          icon.style.transform = 'scale(1.1) rotate(5deg)';
          setTimeout(() => {
            icon.style.transition = 'transform 0.3s ease-out';
            icon.style.transform = 'scale(1) rotate(0deg)';
          }, 200);
        }
      }, 400);
      
      // Animate features
      setTimeout(() => {
        features.forEach((feature, index) => {
          feature.style.opacity = '0';
          feature.style.transform = 'translateX(-10px)';
          
          setTimeout(() => {
            feature.style.transition = 'all 0.3s ease-out';
            feature.style.opacity = '1';
            feature.style.transform = 'translateX(0)';
          }, index * 100);
        });
      }, 600);
      
      // Animate button
      setTimeout(() => {
        if (button) {
          button.style.opacity = '0';
          button.style.transform = 'translateY(10px)';
          
          setTimeout(() => {
            button.style.transition = 'all 0.4s ease-out';
            button.style.opacity = '1';
            button.style.transform = 'translateY(0)';
          }, 50);
        }
      }, 900);
    }
  }

  toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
      this.sidebarCollapsed = !this.sidebarCollapsed;
      
      if (this.sidebarCollapsed) {
        sidebar.classList.add('collapsed');
        this.showToast('Menu recolhido', 'info');
      } else {
        sidebar.classList.remove('collapsed');
        this.showToast('Menu expandido', 'info');
      }
    }
  }

  setupInteractiveElements() {
    // Enhanced hover effects for stat cards
    document.querySelectorAll('.stat-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-4px) scale(1.02)';
        card.style.boxShadow = 'var(--shadow-xl)';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.boxShadow = '';
      });
    });

    // Interactive chart bars
    document.querySelectorAll('.chart-bar').forEach((bar, index) => {
      bar.addEventListener('mouseenter', () => {
        bar.style.opacity = '0.8';
        bar.style.transform = 'scaleY(1.05)';
        
        // Show tooltip simulation
        this.showTooltip(`Dia ${index + 1}: ${Math.floor(Math.random() * 50 + 20)} testes`, bar);
      });
      
      bar.addEventListener('mouseleave', () => {
        bar.style.opacity = '';
        bar.style.transform = '';
        this.hideTooltip();
      });
    });

    // Enhanced activity item interactions
    document.querySelectorAll('.activity-item').forEach(item => {
      item.addEventListener('click', () => {
        item.style.transform = 'scale(0.98)';
        setTimeout(() => {
          item.style.transform = '';
          this.showToast('Abrindo detalhes da atividade...', 'info');
        }, 150);
      });
    });

    // Table row interactions
    document.querySelectorAll('.table-row').forEach(row => {
      row.addEventListener('click', () => {
        row.style.transform = 'scale(0.995)';
        setTimeout(() => {
          row.style.transform = '';
          this.showToast('Carregando detalhes do teste...', 'info');
        }, 100);
      });
    });

    // Button interactions
    document.querySelectorAll('.btn-prototype').forEach(btn => {
      btn.addEventListener('click', () => {
        btn.style.transform = 'scale(0.95)';
        setTimeout(() => {
          btn.style.transform = '';
          this.showPrototypeModal();
        }, 150);
      });
    });

    // Action buttons
    document.querySelectorAll('.action-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const isNotification = btn.classList.contains('notification-btn');
        const isSearch = btn.classList.contains('search-btn');
        
        if (isNotification) {
          this.showNotificationsPanel();
        } else if (isSearch) {
          this.showSearchPanel();
        }
      });
    });

    // New test button
    document.querySelector('.btn-primary')?.addEventListener('click', () => {
      this.showNewTestModal();
    });
  }

  setupResponsiveBehavior() {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        document.querySelector('.sidebar')?.classList.add('collapsed');
        this.sidebarCollapsed = true;
      } else if (window.innerWidth > 768 && this.sidebarCollapsed) {
        document.querySelector('.sidebar')?.classList.remove('collapsed');
        this.sidebarCollapsed = false;
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
  }

  setupKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
      // ESC to close modals/panels
      if (e.key === 'Escape') {
        this.closeAllPanels();
      }
      
      // Number keys for quick navigation
      const pageKeys = {
        '1': 'dashboard',
        '2': 'configure', 
        '3': 'images',
        '4': 'reports',
        '5': 'history',
        '6': 'settings'
      };
      
      if (pageKeys[e.key] && !e.ctrlKey && !e.altKey) {
        this.navigateToPage(pageKeys[e.key]);
      }
      
      // Ctrl+K for search
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        this.showSearchPanel();
      }
    });
  }

  setupMockInteractions() {
    // Simulate real-time updates
    this.startLiveUpdates();
    
    // Add some random interactions
    this.addRandomAnimations();
  }

  startLiveUpdates() {
    // Update notification dot periodically
    setInterval(() => {
      const notificationDot = document.querySelector('.notification-dot');
      if (notificationDot && Math.random() > 0.7) {
        notificationDot.style.animation = 'pulse 1s ease-in-out';
        setTimeout(() => {
          notificationDot.style.animation = '';
        }, 1000);
      }
    }, 10000);

    // Update stats occasionally
    setInterval(() => {
      if (this.currentPage === 'dashboard') {
        this.updateRandomStat();
      }
    }, 15000);
  }

  updateRandomStat() {
    const statNumbers = document.querySelectorAll('.stat-number');
    if (statNumbers.length > 0) {
      const randomStat = statNumbers[Math.floor(Math.random() * statNumbers.length)];
      const currentValue = parseInt(randomStat.textContent);
      const newValue = currentValue + Math.floor(Math.random() * 5 + 1);
      
      randomStat.style.transform = 'scale(1.1)';
      randomStat.style.color = 'var(--success-600)';
      
      setTimeout(() => {
        randomStat.textContent = newValue;
        setTimeout(() => {
          randomStat.style.transform = '';
          randomStat.style.color = '';
        }, 200);
      }, 100);
    }
  }

  addRandomAnimations() {
    // Add subtle floating animation to icons
    document.querySelectorAll('.stat-icon, .prototype-icon').forEach(icon => {
      const delay = Math.random() * 2000;
      setTimeout(() => {
        icon.style.animation = 'float 3s ease-in-out infinite';
      }, delay);
    });
  }

  startDashboardAnimations() {
    if (this.currentPage === 'dashboard') {
      setTimeout(() => {
        this.animateDashboardContent();
      }, 300);
    }
  }

  // Modal and Panel Methods
  showPrototypeModal() {
    this.showToast('🎨 Abrindo protótipo interativo completo...', 'info');
    
    setTimeout(() => {
      this.showToast('Funcionalidade disponível na versão completa!', 'success');
    }, 1500);
  }

  showNewTestModal() {
    this.showToast('➕ Configurando novo teste...', 'info');
    
    setTimeout(() => {
      this.navigateToPage('configure');
    }, 1000);
  }

  showNotificationsPanel() {
    const notifications = [
      'Teste "McDonald\'s Banner" foi concluído',
      'Novo participante se cadastrou',
      'Relatório semanal está disponível'
    ];
    
    const randomNotification = notifications[Math.floor(Math.random() * notifications.length)];
    this.showToast(`🔔 ${randomNotification}`, 'info');
  }

  showSearchPanel() {
    this.showToast('🔍 Busca rápida: Digite para encontrar testes, imagens ou relatórios', 'info');
  }

  closeAllPanels() {
    // Close any open panels or modals
    this.showToast('Painéis fechados', 'info');
  }

  // Tooltip System
  showTooltip(text, element) {
    this.hideTooltip(); // Remove any existing tooltip
    
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = text;
    tooltip.style.cssText = `
      position: absolute;
      background: var(--secondary-800);
      color: white;
      padding: 8px 12px;
      border-radius: 8px;
      font-size: 12px;
      font-weight: 500;
      z-index: 1000;
      pointer-events: none;
      opacity: 0;
      transform: translateY(-5px);
      transition: all 0.2s ease-out;
      box-shadow: var(--shadow-lg);
    `;
    
    document.body.appendChild(tooltip);
    
    const rect = element.getBoundingClientRect();
    tooltip.style.left = `${rect.left + rect.width / 2 - tooltip.offsetWidth / 2}px`;
    tooltip.style.top = `${rect.top - tooltip.offsetHeight - 8}px`;
    
    setTimeout(() => {
      tooltip.style.opacity = '1';
      tooltip.style.transform = 'translateY(0)';
    }, 50);
  }

  hideTooltip() {
    const existingTooltip = document.querySelector('.tooltip');
    if (existingTooltip) {
      existingTooltip.remove();
    }
  }

  // Toast Notification System
  showWelcomeToast() {
    this.showToast('🎉 Bem-vindo ao EyeTrack Analytics!', 'success');
  }

  showToast(message, type = 'info') {
    const toastContainer = document.getElementById('toastContainer') || this.createToastContainer();
    
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    const icons = {
      success: '✅',
      error: '❌',
      warning: '⚠️',
      info: 'ℹ️'
    };
    
    toast.innerHTML = `
      <div class="toast-content">
        <div class="toast-icon">${icons[type] || icons.info}</div>
        <div class="toast-message">${message}</div>
        <button class="toast-close" onclick="this.parentElement.parentElement.remove()">×</button>
      </div>
    `;
    
    toastContainer.appendChild(toast);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
      if (toast.parentElement) {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => toast.remove(), 300);
      }
    }, 4000);
  }

  createToastContainer() {
    const container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
    return container;
  }
}

// Add floating animation keyframes
const floatingStyles = document.createElement('style');
floatingStyles.textContent = `
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-6px); }
  }
  
  .tooltip {
    font-family: 'Inter', sans-serif !important;
  }
`;
document.head.appendChild(floatingStyles);

// Initialize the prototype
document.addEventListener('DOMContentLoaded', () => {
  window.eyeTrackPrototype = new EyeTrackPrototype();
});

// Add some global interactions for demo purposes
window.addEventListener('load', () => {
  // Add subtle parallax effect on scroll
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.stat-card, .chart-card, .activity-card');
    
    parallaxElements.forEach((el, index) => {
      const speed = 0.5 + (index * 0.1);
      el.style.transform = `translateY(${scrolled * speed * 0.02}px)`;
    });
  });
  
  // Add cursor trail effect (subtle)
  let mouseTrail = [];
  document.addEventListener('mousemove', (e) => {
    mouseTrail.push({ x: e.clientX, y: e.clientY, time: Date.now() });
    
    // Keep only recent positions
    mouseTrail = mouseTrail.filter(point => Date.now() - point.time < 500);
  });
});

// Export for global access
window.EyeTrackPrototype = EyeTrackPrototype;