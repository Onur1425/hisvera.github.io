(function () {
    'use strict';

    var SUPPORTED_LANGS = ['tr', 'en'];
    var STORAGE_KEY = 'site_lang';

    function isSupported(lang) {
        return typeof lang === 'string' && SUPPORTED_LANGS.indexOf(lang) !== -1;
    }

    function resolveInitialLang() {
        try {
            var params = new URLSearchParams(window.location.search);
            var urlLang = (params.get('lang') || '').toLowerCase();
            if (isSupported(urlLang)) {
                try {
                    localStorage.setItem(STORAGE_KEY, urlLang);
                } catch (e) {}
                return urlLang;
            }
        } catch (e) {}

        try {
            var savedLang = (localStorage.getItem(STORAGE_KEY) || '').toLowerCase();
            if (isSupported(savedLang)) {
                return savedLang;
            }
        } catch (e) {}

        return 'tr';
    }

    var currentLang = resolveInitialLang();

    function resolvePath(obj, path) {
        if (!obj || !path) return undefined;
        var parts = String(path).split('.');
        var cur = obj;
        for (var i = 0; i < parts.length; i++) {
            if (cur === null || cur === undefined) return undefined;
            cur = cur[parts[i]];
        }
        return cur;
    }

    function t(key, fallback) {
        var dict = window.CHRONOVERA_I18N || {};
        var val = resolvePath(dict[currentLang], key);
        if (val === undefined || val === null || val === '') {
            val = resolvePath(dict.tr, key);
        }
        if (val !== undefined && val !== null && val !== '') {
            return val;
        }
        return fallback !== undefined ? fallback : '';
    }

    function updateButtons(root) {
        var scope = root || document;
        var buttons = scope.querySelectorAll('[data-cv-lang-switch]');
        buttons.forEach(function (btn) {
            var lang = btn.getAttribute('data-cv-lang-switch');
            var active = lang === currentLang;
            btn.classList.toggle('active', active);
            btn.setAttribute('aria-pressed', active ? 'true' : 'false');
        });
    }

    function recalculateOpenAccordions() {
        var openAnswers = document.querySelectorAll('.faq-item.active .faq-answer');
        openAnswers.forEach(function (ans) {
            ans.style.maxHeight = (ans.scrollHeight + 30) + 'px';
        });
    }

    function apply(root) {
        var scope = root || document;
        document.documentElement.lang = currentLang;

        scope.querySelectorAll('[data-cv-i18n]').forEach(function (el) {
            var key = el.getAttribute('data-cv-i18n');
            var val = t(key);
            if (val !== '') {
                if (el.tagName === 'TITLE') {
                    document.title = val;
                } else {
                    el.textContent = val;
                }
            }
        });

        scope.querySelectorAll('[data-cv-i18n-html]').forEach(function (el) {
            var key = el.getAttribute('data-cv-i18n-html');
            var val = t(key);
            if (val !== '') {
                el.innerHTML = val;
            }
        });

        scope.querySelectorAll('[data-cv-i18n-placeholder]').forEach(function (el) {
            var key = el.getAttribute('data-cv-i18n-placeholder');
            var val = t(key);
            if (val !== '') {
                el.placeholder = val;
            }
        });

        scope.querySelectorAll('[data-cv-i18n-title]').forEach(function (el) {
            var key = el.getAttribute('data-cv-i18n-title');
            var val = t(key);
            if (val !== '') {
                el.title = val;
            }
        });

        scope.querySelectorAll('[data-cv-i18n-content]').forEach(function (el) {
            var key = el.getAttribute('data-cv-i18n-content');
            var val = t(key);
            if (val !== '') {
                el.setAttribute('content', val);
            }
        });

        scope.querySelectorAll('[data-cv-i18n-aria]').forEach(function (el) {
            var key = el.getAttribute('data-cv-i18n-aria');
            var val = t(key);
            if (val !== '') {
                el.setAttribute('aria-label', val);
            }
        });

        updateButtons(scope);
        recalculateOpenAccordions();
    }

    function setLang(lang) {
        var normalized = typeof lang === 'string' ? lang.toLowerCase() : '';
        if (!isSupported(normalized)) return currentLang;

        var changed = normalized !== currentLang;
        currentLang = normalized;

        try {
            localStorage.setItem(STORAGE_KEY, currentLang);
        } catch (e) {}

        apply();

        if (changed) {
            document.dispatchEvent(new CustomEvent('chronovera:langchange', {
                detail: { lang: currentLang }
            }));
        }
        return currentLang;
    }

    function getLang() {
        return currentLang;
    }

    document.addEventListener('click', function (e) {
        var btn = e.target && e.target.closest ? e.target.closest('[data-cv-lang-switch]') : null;
        if (!btn) return;
        e.preventDefault();
        var lang = btn.getAttribute('data-cv-lang-switch');
        setLang(lang);
    });

    window.cvI18n = {
        t: t,
        apply: apply,
        setLang: setLang,
        getLang: getLang
    };

    apply();

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            apply();
        });
    }
})();
