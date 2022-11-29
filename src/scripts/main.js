'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const langContainer = document.querySelectorAll('.nav-header__lang-container');
const langSelect = document.querySelectorAll('.nav-header__lang-select');
const langOptions = document.querySelectorAll('.nav-header__lang-option');

for (let i = 0; i < langContainer.length; i++) {
  for (let j = 0; j < langSelect.length; j++) {
    langContainer[i].textContent
    = langSelect[j].options[langSelect[i].selectedIndex].textContent;

    langSelect[j].addEventListener('click', function() {
      for (let k = 0; k < langOptions.length; k++) {
        if (langOptions[k].selected === true) {
          langContainer[i].textContent
          = langSelect[j].options[langSelect[i].selectedIndex].textContent;
        }
      }
    });
  }
}

const onTablet = 767;
const onDesktop = 1279;

const tabletGridColumns = 6;
const desktopGridColumns = 12;

const exhibitionCards = document.querySelectorAll(
  '.actual-exhibitions__exhibition'
);

const tabletExhibitionCardColumn = 3;
const desktopExhibitionCardColumn = 6;

if (window.innerWidth > onTablet) {
  setGridColumnStart(
    tabletGridColumns,
    exhibitionCards,
    tabletExhibitionCardColumn
  );

  setGridRowStart(
    tabletGridColumns,
    exhibitionCards,
    tabletExhibitionCardColumn
  );

  setGridRowStart(
    tabletGridColumns,
    exhibitionCards,
    tabletExhibitionCardColumn,
    '30px'
  );
}

if (window.innerWidth > onDesktop) {
  setGridColumnStart(
    desktopGridColumns,
    exhibitionCards,
    desktopExhibitionCardColumn
  );

  setGridRowStart(
    desktopGridColumns,
    exhibitionCards,
    desktopExhibitionCardColumn
  );

  setGridItemsGap(
    desktopGridColumns,
    exhibitionCards,
    desktopExhibitionCardColumn,
    '30px'
  );
}

window.addEventListener('resize', function() {
  if (window.innerWidth > onTablet) {
    setGridColumnStart(
      tabletGridColumns,
      exhibitionCards,
      tabletExhibitionCardColumn
    );

    setGridRowStart(
      tabletGridColumns,
      exhibitionCards,
      tabletExhibitionCardColumn
    );

    setGridRowStart(
      tabletGridColumns,
      exhibitionCards,
      tabletExhibitionCardColumn,
      '30px'
    );
  }

  if (window.innerWidth > onDesktop) {
    setGridColumnStart(
      desktopGridColumns,
      exhibitionCards,
      desktopExhibitionCardColumn
    );

    setGridRowStart(
      desktopGridColumns,
      exhibitionCards,
      desktopExhibitionCardColumn
    );

    setGridItemsGap(
      desktopGridColumns,
      exhibitionCards,
      desktopExhibitionCardColumn,
      '30px'
    );
  }
});

const newsBlocks = document.querySelectorAll('.news__news-block');

const tabletNewsBlockColumn = 3;
const desktopNewsBlockColumn = 6;

if (window.innerWidth > onTablet) {
  setGridColumnStart(
    tabletGridColumns,
    newsBlocks,
    tabletNewsBlockColumn
  );

  setGridRowStart(
    tabletGridColumns,
    newsBlocks,
    tabletNewsBlockColumn
  );

  setGridRowStart(
    tabletGridColumns,
    newsBlocks,
    tabletNewsBlockColumn,
    '30px'
  );
}

if (window.innerWidth > onDesktop) {
  setGridColumnStart(
    desktopGridColumns,
    newsBlocks,
    desktopNewsBlockColumn
  );

  setGridRowStart(
    desktopGridColumns,
    newsBlocks,
    desktopNewsBlockColumn
  );

  setGridItemsGap(
    desktopGridColumns,
    newsBlocks,
    desktopNewsBlockColumn,
    '30px'
  );
}

window.addEventListener('resize', function() {
  if (window.innerWidth > onTablet) {
    setGridColumnStart(
      tabletGridColumns,
      newsBlocks,
      tabletNewsBlockColumn
    );

    setGridRowStart(
      tabletGridColumns,
      newsBlocks,
      tabletNewsBlockColumn
    );

    setGridRowStart(
      tabletGridColumns,
      newsBlocks,
      tabletNewsBlockColumn,
      '30px'
    );
  }

  if (window.innerWidth > onDesktop) {
    setGridColumnStart(
      desktopGridColumns,
      newsBlocks,
      desktopNewsBlockColumn
    );

    setGridRowStart(
      desktopGridColumns,
      newsBlocks,
      desktopNewsBlockColumn
    );

    setGridItemsGap(
      desktopGridColumns,
      newsBlocks,
      desktopNewsBlockColumn,
      '30px'
    );
  }
});

function setGridColumnStart(gridColumns, gridItems, gridItemColumns) {
  let itemNumber;
  let startPosition;

  for (let i = 0; i < gridItems.length; i++) {
    itemNumber = 1 + i * gridItemColumns;
    startPosition = setPosition(itemNumber, gridColumns);

    for (let j = 0; j < gridItems[i].children.length; j++) {
      gridItems[i].children[j].style.gridColumnStart = `${startPosition}`;
    }
  }

  function setPosition(position, max) {
    let positionValue = position;

    while (positionValue > max) {
      positionValue -= max;
    }

    return positionValue;
  }
}

function setGridRowStart(gridColumns, gridItems, gridItemColumns) {
  const gridItemsInRow = gridColumns / gridItemColumns;

  let multiplier;
  let rowStartPosition;

  for (let i = 0; i < gridItems.length; i++) {
    multiplier = getMultiplier(i, gridItemsInRow);

    for (let j = 0; j < gridItems[i].children.length; j++) {
      rowStartPosition = 1 + j + multiplier * gridItems[i].children.length;

      gridItems[i].children[j].style.gridRowStart = `${rowStartPosition}`;
    }
  }

  function getMultiplier(gridItemNumber, gridItemNumbersInRow) {
    const multiplierResult = Math.floor(gridItemNumber / gridItemNumbersInRow);

    return multiplierResult;
  }
}

function setGridItemsGap(gridColumns, gridItems, gridItemColumns, gridItemGap) {
  const gridItemsInRow = gridColumns / gridItemColumns;

  const gridItemsRows = Math.ceil(gridItems.length / gridItemsInRow);

  const countriesWithGaps = (gridItemsRows - 1) * gridItemsInRow;

  for (let i = 0; i < countriesWithGaps; i++) {
    const gridItemLastRow = (gridItems[i].children.length - 1);

    gridItems[i].children[gridItemLastRow].style.marginBottom = gridItemGap;
  }
}

const subscriptionForm = document.querySelector('.subscription-form');

subscriptionForm.addEventListener('submit', function(event) {
  event.preventDefault();
  subscriptionForm.reset();
});
