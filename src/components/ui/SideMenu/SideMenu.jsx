import Header from '@components/layout/Header/Header';
import './SideMenu.scss';
import { useTranslation } from 'react-i18next';
import P from '../StyleBlocks/P/P';
import H from '../StyleBlocks/H/H';

const SideMenu = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const linkList = [
    { href: '#exhibitions', translation: 'menu.exhibitions' },
    { href: '#events', translation: 'menu.events' },
    { href: '#news', translation: 'menu.news' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    onClose();
    window.location.hash = href;
  };

  return (
    <aside className={`side-menu ${isOpen ? 'side-menu--open' : ''}`}>
      <Header variant="sidemenu" onClose={onClose} />

      <div className="side-menu__content container">
        <div className="side-menu__info">
          <div className="side-menu__schedule">
            <P textAlign="left" fsize="14px">
              {t('menu.schedule')}
            </P>
            <P textAlign="left" fontWeight="700" lineHeight="140%">
              {t('menu.scheduleTime')}
            </P>
          </div>

          <div className="side-menu__address">
            <P textAlign="left" fsize="14px">
              {t('menu.address')}
            </P>
            <P textAlign="left" fontWeight="700" lineHeight="140%">
              {t('menu.addressValue')}
            </P>
          </div>
        </div>

        <nav className="side-menu__navigation">
          <ul className="side-menu__navigation-list">
            {linkList.map((link) => {
              const { href, translation } = link;
              return (
                <li key={link.href} className="side-menu__navigation-item">
                  <a
                    href={link.href}
                    className="side-menu__navigation-link"
                    onClick={(e) => handleLinkClick(e)}
                  >
                    <H as="h5" size="h5">
                      {t(translation)}
                    </H>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default SideMenu;
