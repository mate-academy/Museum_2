"use strict";

window.addEventListener('hashchange', () => {
    if (window.location.hash === '#menu') {
      document.body.style.overflowY = "hidden";
    } else {
        document.body.style.overflowY = "auto";
    }
});
