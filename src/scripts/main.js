'use strict';

let field = document.querySelector('.digest__field');

field.addEventListener('click', () => {
  field.placeholder = '';
  field = '';
});
