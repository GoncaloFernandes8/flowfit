import { mynutritionView } from "../view/mynutritionView.js";

export const init = () => {
    console.log("MyNutrition Controller Loaded");

    // Dados simulados de sugestões de nutrição
    const meals = [
        {
            title: "Pequeno Almoço",
            time: "08:00 - 09:00",
            calories: "350 kcal",
            protein: "20g",
            image: "https://via.placeholder.com/150",
            description: [
                "1. Aveia com banana e mel.",
                "2. 2 ovos mexidos com espinafres.",
                "3. 1 fatia de pão integral com manteiga de amendoim.",
                "4. 1 chávena de chá verde."
            ]
        },
        {
            title: "Almoço",
            time: "12:00 - 13:30",
            calories: "600 kcal",
            protein: "35g",
            image: "https://via.placeholder.com/150",
            description: [
                "1. Peito de frango grelhado com batata-doce.",
                "2. Salada mista com azeite e vinagre.",
                "3. 1 peça de fruta (maçã ou pera).",
                "4. 1 copo de água ou chá gelado."
            ]
        },
        {
            title: "Lanche",
            time: "16:00 - 17:00",
            calories: "200 kcal",
            protein: "15g",
            image: "https://via.placeholder.com/150",
            description: [
                "1. Iogurte natural com granola.",
                "2. 1 punhado de amêndoas (30g).",
                "3. 1 banana pequena.",
                "4. 1 copo de água."
            ]
        },
        {
            title: "Jantar",
            time: "19:00 - 20:30",
            calories: "500 kcal",
            protein: "30g",
            image: "https://via.placeholder.com/150",
            description: [
                "1. Salmão grelhado com brócolos.",
                "2. 1 batata assada média.",
                "3. Salada verde com pepino e tomate.",
                "4. 1 chávena de chá de camomila."
            ]
        }
    ];

    // Chama a view para renderizar os dados
    mynutritionView.render(meals);
};
