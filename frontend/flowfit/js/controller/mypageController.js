import { mypageView } from "../view/mypageView.js";
import router from "../router.js";

export const init = () => {
    console.log("Mypage Controller Loaded");

    // Verificar sessão ativa
    const token = localStorage.getItem("token");
    const tokenExpiration = localStorage.getItem("tokenExpiration");

    // Simula dados recebidos da sessão ou API
    const userName = "Hugo Alves";
    const monthlyGoalValue = 12; // Pode vir da base de dados

    if (!token || Date.now() > tokenExpiration) {
        localStorage.clear();
        router.navigate("/login");
    } else {
        mypageView.render(userName, monthlyGoalValue);
    }
};
