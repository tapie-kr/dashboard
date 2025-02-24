import * as styles from './style.css';

import React from 'react';

interface SkeletonProps {
  width?:        string;
  height?:       string;
  borderRadius?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({
  width,
  height,
  borderRadius,
}) => {
  const customStyles = {
    width:        width || '100%',
    height:       height || '100%',
    borderRadius: borderRadius || '4px',
  };

  return (
    <div
      className={styles.skeleton}
      style={customStyles}
    />
  );
};

export default Skeleton;
