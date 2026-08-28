import React from 'react';
import './ResponsiveImage.scss';

const ResponsiveImage = ({
  mobile,
  tablet,
  desktop,
  alt,
  className = '',
  lazy = true,
  ...props
}) => {
  if (!tablet && !desktop) {
    return (
      <img
        src={mobile}
        alt={alt}
        className={`responsive-image ${className}`}
        loading={lazy ? 'lazy' : 'eager'}
        decoding="async"
        {...props}
      />
    );
  }

  return (
    <picture className={`responsive-image ${className}`}>
      {desktop && <source media="(min-width: 1280px)" srcSet={desktop} />}

      {tablet && <source media="(min-width: 640px)" srcSet={tablet} />}

      <img
        src={mobile}
        alt={alt}
        className="responsive-image__img"
        loading={lazy ? 'lazy' : 'eager'}
        decoding="async"
        {...props}
      />
    </picture>
  );
};

export default ResponsiveImage;
