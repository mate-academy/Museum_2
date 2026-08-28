import React from 'react';
import { useTranslation } from 'react-i18next';
import CloseIcon from '@assets/icons/close.svg';
import './BurgerMenu.scss';

const BurgerMenu = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  return (
    <>
      <div
        className={`burger-menu__overlay ${isOpen ? 'burger-menu__overlay--open' : ''}`}
        onClick={onClose}
      />

      <aside className={`burger-menu ${isOpen ? 'burger-menu--open' : ''}`}>
        <div className="burger-menu__header">
          <button onClick={onClose} className="burger-menu__close-btn">
            <img
              src={CloseIcon}
              alt="Close menu"
              className="burger-menu__close-icon"
            />
          </button>
        </div>
      </aside>
    </>
  );
};

export default BurgerMenu;
