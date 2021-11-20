export function createSlider(sliderEl) {
  const items = sliderEl.querySelectorAll(".slider__item");
  const next = sliderEl.querySelector(".js-slider-next");
  const prev = sliderEl.querySelector(".js-slider-prev");

  const count = items.length;

  sliderEl.style.setProperty("--count", count);

  function moveTo(position) {
    const normalizedPosition = normalizePosition(position);

    sliderEl.style.setProperty("--position", normalizedPosition);
  }

  function normalizePosition(position) {
    if (position < 0) {
      return count - 1;
    }

    if (position >= count) {
      return 0;
    }

    return position;
  }

  function getPosition() {
    return Number(sliderEl.style.getPropertyValue("--position") || 0);
  }

  function moveNext() {
    moveTo(getPosition() + 1);
  }

  function movePrev() {
    moveTo(getPosition() - 1);
  }

  next.addEventListener("click", moveNext);
  prev.addEventListener("click", movePrev);

  return {
    moveTo,
    moveNext,
    movePrev
  };
}
