export const qrcodeService = {
    async getUserIdByEmail(email) {
        console.log(`Simulação: Buscando ID do utilizador para o email "${email}"`);

        // Simula um atraso e retorna um ID mockado
        return new Promise((resolve) => {
            setTimeout(() => {
                const mockUserId = 1; // ID mockado
                console.log(`Simulação: ID encontrado para "${email}" é ${mockUserId}`);
                resolve(mockUserId);
            }, 1000); // Simula um atraso de 1 segundo
        });

        /* Código real para quando o backend estiver ativo
        try {
            const response = await fetch(`http://localhost:50005/api/user?email=${email}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Erro ao buscar o ID do utilizador.");
            }

            const data = await response.json();
            return data.id; // Assume que a resposta contém { id: <userId> }
        } catch (error) {
            console.error("Erro ao obter o ID do utilizador:", error.message);
            throw error;
        }
        */
    },

    async generateQrCode(url) {
        console.log(`Simulação: Gerando QR Code para o URL "${url}"`);

        // Usa a API real para gerar o QR Code
        return `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(url)}&size=350x350`;
    },
};
