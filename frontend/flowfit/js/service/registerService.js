/*export const registerService = {
    async sendRegistrationData(data) {
        try {
            const response = await fetch("http://localhost:50005/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error("Não foi possível completar o registo. Tente novamente mais tarde.");
            }

            const result = await response.json();
            return result; // Retorna os dados de sucesso
        } catch (error) {
            console.error("Erro no Registo:", error.message);
            throw new Error("Erro no registo, por favor tente mais tarde."); // Mensagem amigável
        }
    }
};*/

export const registerService = {
    async sendRegistrationData(data) {
        console.log("Dados enviados para registo (simulados):", data);

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const mockResponse = {
                    success: true,
                    token: "mocked-register-token"
                };

                console.log("Resposta simulada do servidor:", mockResponse);
                resolve(mockResponse); // Simula sucesso
            }, 1000); // Simula atraso de 1 segundo
        });
    }
};

