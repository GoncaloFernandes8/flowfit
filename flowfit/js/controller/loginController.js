import { loginView } from "../view/loginView.js";
import { loginService } from "../service/loginService.js";
import router from "../router.js";

export const init = () => {
    console.log("Login Controller Loaded");

    loginView.render();

    document.addEventListener("submit-login", async (e) => {
        const data = e.detail;

        try {
            const response = await loginService.sendLoginData(data);

            // Armazenar o token, email e tempo de sessão
            if (response.success && response.token) {
                localStorage.setItem("token", response.token);
                localStorage.setItem("userEmail", data.email); // Armazena o email do utilizador
                localStorage.setItem("tokenExpiration", Date.now() + 5 * 24 * 60 * 60 * 1000); // 5 dias
                router.navigate("/mypage");
            }

            loginView.showMessage("Login efetuado com sucesso!", false);
        } catch (error) {
            console.error("Erro no login:", error.message);
            loginView.showMessage("Erro no login, por favor tente mais tarde.", true);
        }
    });
};
