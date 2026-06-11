document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const statCards = document.querySelectorAll('.stat-card');

    // 1. Lógica do Modo Escuro / Modo Claro
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        
        if (currentTheme === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            themeToggleBtn.textContent = '🌓 Modo Escuro';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeToggleBtn.textContent = '☀️ Modo Claro';
        }
    });

    // 2. Animação de contagem para os blocos de estatística
    statCards.forEach(card => {
        const target = parseInt(card.getAttribute('data-target'), 10);
        const numberDisplay = card.querySelector('.stat-number');
        let count = 0;
        
        // Determina o sufixo (como o símbolo de % no segundo card)
        const suffix = target === 3 ? '%' : 'º';

        const counterInterval = setInterval(() => {
            if (count < target) {
                count++;
                numberDisplay.textContent = count + suffix;
            } else {
                clearInterval(counterInterval);
            }
        }, 150); // Velocidade do contador (em milissegundos)
    });
});