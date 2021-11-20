import { createSlider } from "./slider.js";

const sliderEl1 = document.querySelector(".js-slider-1");
const sliderEl2 = document.querySelector(".js-slider-2");

createSlider(sliderEl2);

const slider1 = createSlider(sliderEl1);

setInterval(function () {
  slider1.moveNext();
}, 3000);
