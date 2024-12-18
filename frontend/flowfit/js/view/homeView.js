export const homeView = {
    renderCarousel(frases) {
        const container = document.querySelector(".carousel-container");

        // Verifica se o elemento existe
        if (!container) {
            console.error("Elemento '.carousel-container' não encontrado no DOM.");
            return;
        }

        container.innerHTML = frases
            .map(frase => `<div class="carousel-item">${frase}</div>`)
            .join("");
    },

    renderButtons() {
        const footer = document.querySelector(".btn-container");

        // Verificar se existe sessão ativa
        const token = localStorage.getItem("token");
        if (!token) {
            footer.innerHTML = `
                <a href="/register" class="btn">Registo</a>
                <a href="/login" class="btn">Login</a>
            `;
        } else {
            footer.innerHTML = ""; // Remove os botões caso o token exista
        }
    }
};
