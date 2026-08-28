import React from 'react';
import './P.scss';
import { colors } from '@styles/colors';

const P = ({
  fsize = '16px',
  lineHeight = 'normal',
  children,
  color = colors.white,
  textAlign = 'center',
  fontWeight = '400',
  className = '',
}) => {
  return (
    <div className={`p-container ${className}`}>
      <p
        style={{
          fontSize: fsize,
          color: color,
          textAlign: textAlign,
          lineHeight: lineHeight,
          fontWeight: fontWeight,
        }}
      >
        {children}
      </p>
    </div>
  );
};

export default P;
