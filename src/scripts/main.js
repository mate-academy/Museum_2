'use strict';

const dropdowns = document.querySelectorAll('.language__dropdown'); // Весь блок переключателя

if (dropdowns.length) { // Проверяем, что элементы дропдауна были найдены на странице
  dropdowns.forEach(dropdown => activateSingleDropdown(dropdown)); // Вызываем функцию для каждого дропдауна
}

function activateSingleDropdown(dropdown) {
  // Находим нужные элементы внутри текущего дропдауна
  const trigger = dropdown.querySelector('.language__dropdown-trigger'); // Кнопка-триггер
  const content = dropdown.querySelector('.language__dropdown-content'); // Выпадающий список
  const listItems = content.querySelectorAll('.language__options'); // Все элементы списка (UA, EN)
  const selectedValueSpan = trigger.querySelector('.language__dropdown-selected-value'); // Элемент SPAN на кнопке, где отображается выбранное значение

  // Устанавливаем начальное значение из первого элемента списка
  if (listItems.length > 0) { // Проверяем, есть ли элементы в списке
      selectedValueSpan.textContent = listItems[0].textContent; // Устанавливаем текст первого элемента списка (UA) как начальное значение на кнопке
      // textContent получает или устанавливает текстовое содержимое элемента.
  }

  // Добавляем слушатель события "click" для триггера
  trigger.addEventListener('click', () => { // Добавляем функцию, которая будет выполняться при клике на кнопку-триггер
      dropdown.classList.toggle('dropdown--active'); // Переключает (добавляет/удаляет) класс 'dropdown--active' на главном контейнере дропдауна.
      // Это меняет стили CSS для открытия/закрытия меню и поворота иконки.
  });

  // Добавляем слушатели кликов для каждого элемента списка
  listItems.forEach(item => { // Перебираем каждый элемент списка (UA, EN)
      item.addEventListener('click', () => { // Добавляем функцию, которая будет выполняться при клике на этот элемент списка
          selectedValueSpan.textContent = item.textContent; // Обновляем текст на кнопке-триггере выбранным значением
          dropdown.classList.remove('dropdown--active'); // Закрываем дропдаун, удаляя класс 'dropdown--active'
      });
  });

  // Добавляем слушатель кликов вне дропдауна для его закрытия
  document.addEventListener('click', (event) => { // Добавляем слушатель кликов на весь документ
      // event.target - это элемент, на который был произведен клик.
      // dropdown.contains(event.target) проверяет, был ли клик внутри дропдауна.
      // dropdown.classList.contains('dropdown--active') проверяет, открыт ли дропдаун.
      if (!dropdown.contains(event.target) && dropdown.classList.contains('dropdown--active')) {
          dropdown.classList.remove('dropdown--active'); // Если клик был вне дропдауна и он открыт, закрываем его
      }
  });
}