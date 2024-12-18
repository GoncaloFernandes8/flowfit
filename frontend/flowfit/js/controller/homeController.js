import { homeView } from "../view/homeView.js";
import { homeService } from "../service/homeService.js";

export const init = () => {
    console.log("Home Controller Loaded");

    const frases = homeService.getCarouselData();
    homeView.renderCarousel(frases);
    homeView.renderButtons(); // Renderizar botões condicionalmente
};
