import React from 'react';
import styles from './Button.module.css';

/**
 * A centralized button component that allows for all buttons to look
 * consistent; it is designed based on the wireframe.
 */
function Button({className, children, ...props}) {
  return (
    <button className={`${styles.button} ${className}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
