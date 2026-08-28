import './LanguageSwitcher.scss';
import React, { useState } from 'react';
import ExpandDown from '@assets/icons/expand-down.svg';
import ExpandUp from '@assets/icons/expand-up.svg';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'ua', label: 'UA' },
  { code: 'en', label: 'EN' },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage =
    languages.find((l) => l.code === i18n.language) || languages[0];

  const handleSelect = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="language-switcher">
      <button
        className="language-switcher__toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{currentLanguage.label}</span>
        {isOpen ? <img src={ExpandUp} /> : <img src={ExpandDown} />}
      </button>

      <ul
        className={`language-switcher__dropdown ${isOpen ? 'language-switcher__dropdown--open' : ''}`}
      >
        {languages.map((lang) => (
          <li key={lang.code} className="language-switcher__item">
            <button
              onClick={() => handleSelect(lang.code)}
              className="language-switcher__btn"
            >
              {lang.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageSwitcher;
