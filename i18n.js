class I18nManager {
  constructor() {
    this.currentLang = localStorage.getItem('site_lang') || 'tr';
    this.translations = {};
    
    // UI elements
    this.langButtons = null;
    
    // Initialization
    this.init();
  }

  async init() {
    await this.loadTranslations(this.currentLang);
    this.applyTranslations();
    this.setupListeners();
    this.updateActiveButton();
  }

  async loadTranslations(lang) {
    try {
      const response = await fetch(`locales/${lang}.json`);
      this.translations = await response.json();
    } catch (error) {
      console.error(`Error loading ${lang} translations:`, error);
    }
  }

  applyTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      const text = key.split('.').reduce((obj, i) => (obj ? obj[i] : null), this.translations);
      
      if (text) {
        if (el.tagName === 'INPUT' && el.type === 'placeholder') {
          el.placeholder = text;
        } else {
          el.innerHTML = text;
        }
      }
    });

    // image source translations
    const imgElements = document.querySelectorAll('[data-i18n-src]');
    imgElements.forEach(el => {
      const key = el.getAttribute('data-i18n-src');
      const src = key.split('.').reduce((obj, i) => (obj ? obj[i] : null), this.translations);
      
      if (src) {
        el.src = src;
      }
    });
  }

  async setLanguage(lang) {
    if (this.currentLang === lang) return;
    
    this.currentLang = lang;
    localStorage.setItem('site_lang', lang);
    
    await this.loadTranslations(lang);
    this.applyTranslations();
    this.updateActiveButton();
  }

  setupListeners() {
    document.addEventListener('click', (e) => {
      if (e.target.hasAttribute('data-lang-switch')) {
        e.preventDefault();
        const lang = e.target.getAttribute('data-lang-switch');
        this.setLanguage(lang);
      }
    });
  }

  updateActiveButton() {
    const buttons = document.querySelectorAll('[data-lang-switch]');
    buttons.forEach(btn => {
      if (btn.getAttribute('data-lang-switch') === this.currentLang) {
        btn.classList.add('active-lang');
      } else {
        btn.classList.remove('active-lang');
      }
    });
  }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  window.i18n = new I18nManager();
});
