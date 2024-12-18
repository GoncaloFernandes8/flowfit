import { qrcodeView } from "../view/qrcodeView.js";
import { qrcodeService } from "../service/qrcodeService.js";

export const init = async () => {
    console.log("QR Code Controller Loaded");

    try {
        // Obtém o email do cliente (armazenado após login)
        const email = localStorage.getItem("userEmail");

        if (!email) {
            throw new Error("Utilizador não autenticado.");
        }

        // Busca o ID do cliente pela API
        const userId = await qrcodeService.getUserIdByEmail(email);

        // Gera o URL dinâmico
        const dynamicUrl = `http://localhost:8080/admins/${userId}/verify`;

        // Gera o QR Code pela API
        const qrCodeUrl = await qrcodeService.generateQrCode(dynamicUrl);

        // Renderiza a view com o QR Code
        qrcodeView.render(qrCodeUrl, dynamicUrl);
    } catch (error) {
        console.error("Erro na geração do QR Code:", error.message);

        if (error.message === "Utilizador não autenticado.") {
            qrcodeView.showMessage("Por favor, faça login para acessar esta página.", true);
        } else {
            qrcodeView.showMessage("Erro ao gerar o QR Code. Tente novamente mais tarde.", true);
        }
    }
};
