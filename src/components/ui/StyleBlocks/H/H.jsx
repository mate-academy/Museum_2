import React from 'react';
import './H.scss';

const H = ({
  size = 'm',
  children,
  textAlign = 'center',
  as = 'h2',
  className = '',
}) => {
  // let fontSize, lineHeight;

  // switch (size) {
  //   case 'h1':
  //   case 'xxl':
  //     fontSize = isMobile ? '3rem' : isTablet ? '4.5rem' : '6rem';
  //     lineHeight = '100%';
  //     break;
  //   case 'h2':
  //   case 'xl':
  //     fontSize = isMobile ? '2.375rem' : isTablet ? '3.875rem' : '5rem';
  //     lineHeight = '100%';
  //     break;
  //   case 'h3':
  //   case 'l':
  //     fontSize = isMobile ? '1.75rem' : isTablet ? '2.5rem' : '3.625rem';
  //     lineHeight = isMobile ? '125%' : isTablet ? '125%' : '120%';
  //     break;
  //   case 'h4':
  //   case 'm':
  //     fontSize = isMobile ? '1.25rem' : '1.5rem';
  //     lineHeight = '125%';
  //     break;
  //   case 'h5':
  //   case 's':
  //     fontSize = '1.25rem';
  //     lineHeight = '150%';
  //     break;
  //   case 'h6':
  //   case 'xs':
  //     fontSize = '0.875rem';
  //     lineHeight = '125%';
  //     break;
  // }

  const Tag = as;

  const classes = [
    'heading',
    `heading--${size}`,
    textAlign !== 'center' && `heading--align-${textAlign}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag className={`heading heading--${size} ${className}`}>{children}</Tag>
  );
};

export default H;
