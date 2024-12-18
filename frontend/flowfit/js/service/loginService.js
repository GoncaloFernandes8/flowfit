/*export const loginService = {
    async sendLoginData(data) {
        try {
            const response = await fetch("http://localhost:50005/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error("Não foi possível efetuar o login. Verifique suas credenciais e tente novamente.");
            }

            const result = await response.json();
            return result; // Retorna os dados de sucesso (ex: token)
        } catch (error) {
            console.error("Erro no Login:", error.message);
            throw new Error("Erro no login, por favor tente mais tarde."); // Mensagem amigável
        }
    }
};*/

export const loginService = {
    async sendLoginData(data) {
        console.log("Dados enviados para login (simulados):", data);

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const mockResponse = {
                    success: true,
                    token: "mocked-login-token"
                };

                console.log("Resposta simulada do servidor:", mockResponse);
                resolve(mockResponse); // Simula sucesso
            }, 1000); // Simula atraso de 1 segundo
        });
    }
};

