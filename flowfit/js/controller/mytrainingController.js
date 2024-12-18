import { mytrainingView } from "../view/mytrainingView.js";

export const init = () => {
    console.log("MyTraining Controller Loaded");

    // Dados de treino simulados (poderão vir da base de dados futuramente)
    const trainings = [
        {
            title: "Bicept",
            time: "20 minutos",
            weight: "15kg",
            rest: "2 minutos",
            image: "https://via.placeholder.com/150",
            description: [
                "1. Faça 3 séries de 10 repetições.",
                "2. Concentre-se na técnica de levantamento.",
                "3. Mantenha o peso firme durante o movimento.",
                "4. Descanse entre séries conforme indicado."
            ]
        },
        {
            title: "Agachamento",
            time: "25 minutos",
            weight: "20kg",
            rest: "1.5 minutos",
            image: "https://via.placeholder.com/150",
            description: [
                "1. Execute agachamentos profundos.",
                "2. Faça lunges alternados.",
                "3. Concentre-se em manter a postura.",
                "4. Use pesos leves no início."
            ]
        },
        {
            title: "Supino",
            time: "30 minutos",
            weight: "25kg",
            rest: "2 minutos",
            image: "https://via.placeholder.com/150",
            description: [
                "1. Faça supino reto com barra.",
                "2. Realize 4 séries de 12 repetições.",
                "3. Combine com aberturas inclinadas.",
                "4. Finalize com flexões ao falhar."
            ]
        },
        {
            title: "Costas",
            time: "35 minutos",
            weight: "20kg",
            rest: "1 minuto",
            image: "https://via.placeholder.com/150",
            description: [
                "1. Use barra fixa para pull-ups.",
                "2. Execute remada curvada com halteres.",
                "3. Faça 4 séries de 8-10 repetições.",
                "4. Combine com levantamento terra leve."
            ]
        }
    ];

    // Chama a view para renderizar os dados
    mytrainingView.render(trainings);
};
