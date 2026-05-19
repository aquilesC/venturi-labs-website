// On page load or when changing themes, best to add inline in `head` to avoid FOUC
// But for now, we also run it here just in case.
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');

    if(themeToggleBtn) {
        themeToggleBtn.addEventListener('click', function() {
            // if set via local storage previously
            if (localStorage.getItem('color-theme')) {
                if (localStorage.getItem('color-theme') === 'light') {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('color-theme', 'dark');
                } else {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('color-theme', 'light');
                }
            } else {
                if (document.documentElement.classList.contains('dark')) {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('color-theme', 'light');
                } else {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('color-theme', 'dark');
                }
            }
        });
    }

    const mobileMenuBtn = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Article filtering based on CTA_Target
    const filterBtns = document.querySelectorAll('.filter-btn');
    const articles = document.querySelectorAll('article[data-cta-target]');
    const noArticlesMsg = document.getElementById('no-articles-msg');

    if (filterBtns.length > 0 && articles.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Reset all buttons
                filterBtns.forEach(b => {
                    const activeClasses = b.getAttribute('data-active-class');
                    if (activeClasses) {
                        b.classList.remove(...activeClasses.split(' '));
                    } else if (b.getAttribute('data-filter') === 'all') {
                        // Reset for the "All" button
                        b.classList.remove('border-venturi-cyan', 'text-venturi-cyan', 'bg-venturi-cyan/10', 'dark:border-cyan-400', 'dark:text-cyan-400', 'dark:bg-cyan-400/10');
                    }
                    b.classList.remove('active');
                });

                // Set clicked button to active
                const activeClasses = btn.getAttribute('data-active-class');
                if (activeClasses) {
                    btn.classList.add(...activeClasses.split(' '));
                } else if (btn.getAttribute('data-filter') === 'all') {
                    btn.classList.add('border-venturi-cyan', 'text-venturi-cyan', 'bg-venturi-cyan/10', 'dark:border-cyan-400', 'dark:text-cyan-400', 'dark:bg-cyan-400/10');
                }
                btn.classList.add('active');

                const target = btn.getAttribute('data-filter');
                let visibleCount = 0;

                articles.forEach(article => {
                    if (target === 'all' || article.getAttribute('data-cta-target') === target) {
                        article.style.display = 'flex';
                        visibleCount++;
                    } else {
                        article.style.display = 'none';
                    }
                });

                if (noArticlesMsg) {
                    if (visibleCount === 0) {
                        noArticlesMsg.classList.remove('hidden');
                    } else {
                        noArticlesMsg.classList.add('hidden');
                    }
                }
            });
        });
    }
});
