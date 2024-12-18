import { registerView } from "../view/registerView.js";
import { registerService } from "../service/registerService.js";
import router from "../router.js";

export const init = () => {
    console.log("Register Controller Loaded");

    registerView.render();

    document.addEventListener("submit-register", async (e) => {
        const data = e.detail;

        try {
            const response = await registerService.sendRegistrationData(data);

            // Armazenar o token e tempo de sessão
            if (response.success && response.token) {
                localStorage.setItem("token", response.token);
                localStorage.setItem("tokenExpiration", Date.now() + 5 * 24 * 60 * 60 * 1000); // 5 dias
                router.navigate("/mypage");
            }

            registerView.showMessage("Registo efetuado com sucesso!", false);
        } catch (error) {
            console.error("Erro no registo:", error.message);
            registerView.showMessage("Erro no registo, por favor tente mais tarde.", true);
        }
    });
};
