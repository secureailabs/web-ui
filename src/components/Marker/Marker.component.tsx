import React from 'react';

import type TMarker from './Marker.types';

const Marker: React.FC<TMarker> = ({
  children,
  width = 'max-content',
  // var(--color-primary) with 0.1 opacity
  background_color = 'rgba(243, 115, 35, 0.1)',
  text_color = 'var(--color-primary)',
  font_size = '11px',
  font_weight = '700',
}) => {
  return (
    <div
      className="marker"
      style={{
        backgroundColor: background_color,
        width: width,
        color: text_color,
        fontWeight: font_weight,
        fontSize: font_size,
      }}
    >
      {children}
    </div>
  );
};

export default Marker;
