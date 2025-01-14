import { I18n } from "i18n-js";
import en from "./en";
import ua from "./ua";

const translations = { en, ua }
const i18n = new I18n(translations);
i18n.locale = 'ua'
i18n.defaultLocale = 'ua'

const changeButton = document.querySelector('.top-bar__lang')
const langUa = changeButton.querySelectorAll('span')[0];
const langEn = changeButton.querySelectorAll('span')[1];

langUa.addEventListener('click', (e) => {
  changeLanguage('ua')
  console.log(e.target);

})
langEn.addEventListener('click', (e) => {
  changeLanguage('en')
  console.log(e.target);
})

function updateTranslations() {
  document.querySelector('[data-header-top-data-start]').textContent = i18n.t('data-header-top-data-start')

}

function changeLanguage(lang) {
  I18n.locale = lang;
  updateTranslations();
}
updateTranslations();
