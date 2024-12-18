export const mypageView = {
    render(userName, monthlyGoalValue) {
        const main = document.querySelector("main");
        main.innerHTML = `
            <!-- Header -->
            <header class="mypage-header">
                <h1 class="app-logo">CORPO CULTO</h1>
                <div class="menu-icon" id="menu-toggle">&#9776;</div>
            </header>

            <!-- Main Content -->
            <section class="mypage-content">
                <h3 class="welcome-message">Bem-vindo, <span>${userName}</span></h3>

                <!-- Objetivo do Mês -->
                <div class="goal-container">
                    <p class="goal-text">Objetivo do mês</p>
                    <div class="goal-chart">
                        <svg viewBox="0 0 36 36" class="circular-chart orange">
                            <path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                            <path class="circle" stroke-dasharray="${(monthlyGoalValue / 20) * 100}, 100"
                                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                            <text x="18" y="20.35" class="percentage">${monthlyGoalValue} / 20</text>
                        </svg>
                    </div>
                </div>

                <!-- Linha de Separação -->
                <div class="section-divider"></div>

                <!-- Título da Seção -->
                <h2 class="section-title">Dicas de Treino</h2>

                <!-- Blocos de Treino -->
                <div class="training-tips">
                    <div class="training-card easy">
                        <div class="training-header">Braços</div>
                        <div class="training-content">
                            <div class="training-info">
                                <p>Tempo: 15 minutos</p>
                                <p>Intervalo: 1 minuto</p>
                                <p>Peso: 10kg</p>
                            </div>
                            <div class="training-icon">
                                <i class="fas fa-dumbbell"></i>
                            </div>
                        </div>
                    </div>

                    <div class="training-card medium">
                        <div class="training-header">Pernas</div>
                        <div class="training-content">
                            <div class="training-info">
                                <p>Tempo: 20 minutos</p>
                                <p>Intervalo: 1.5 minutos</p>
                                <p>Peso: 20kg</p>
                            </div>
                            <div class="training-icon">
                                <i class="fas fa-running"></i>
                            </div>
                        </div>
                    </div>

                    <div class="training-card hard">
                        <div class="training-header">Peito</div>
                        <div class="training-content">
                            <div class="training-info">
                                <p>Tempo: 25 minutos</p>
                                <p>Intervalo: 2 minutos</p>
                                <p>Peso: 30kg</p>
                            </div>
                            <div class="training-icon">
                                <i class="fas fa-weight-hanging"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Linha de Separação -->
                <div class="section-divider"></div>
            </section>

            <!-- Menu Overlay -->
            <div class="menu-overlay" id="menu-overlay">
                <nav class="menu-nav">
                    <a href="/qrcode" class="menu-item">CheckIn</a>
                    <a href="/mytraining" class="menu-item">Dicas de Treino</a>
                    <a href="/mynutrition" class="menu-item">Dicas de Nutrição</a>
                    <a href="/mytalk" class="menu-item">Dicas de AI</a>
                </nav>
                <div class="menu-footer">
                    <button id="logout-btn" class="menu-logout">Logout</button>
                </div>
            </div>

            <!-- Footer -->
            <footer class="mypage-footer">
                <nav>
                    <a href="/mypage" class="footer-icon" title="Home">
                        <i class="fas fa-home"></i>
                    </a>
                    <a href="/qrcode" class="footer-icon" title="QR Code">
                        <i class="fas fa-qrcode"></i>
                    </a>
                    <a href="/mytraining" class="footer-icon" title="Dicas de Treino">
                        <i class="fas fa-trophy"></i>
                    </a>
                    <a href="/mytalk" class="footer-icon" title="Chat Bot">
                        <i class="fas fa-comments"></i>
                    </a>
                </nav>
            </footer>
        `;

        // Define o ícone ativo com base na rota atual
        const currentPath = window.location.pathname;

        document.querySelectorAll(".footer-icon").forEach((icon) => {
            if (icon.getAttribute("href") === currentPath) {
                icon.classList.add("active");
            } else {
                icon.classList.remove("active");
            }
        });

        document.querySelector("header").style.display = 'none';
        document.querySelector(".btn-container").style.display = 'none';

        // Menu Toggle
        document.getElementById("menu-toggle").addEventListener("click", () => {
            document.getElementById("menu-overlay").classList.toggle("active");
        });

        // Logout
        document.getElementById("logout-btn").addEventListener("click", () => {
            localStorage.clear();
            window.location.href = "/";
        });
    }
};
