import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';

function Input({ margin, margin_top, margin_right, margin_left, margin_bottom, ...props }, ref) {
  
  const classes = classNames({
    [styles.input]: true, 
    [styles.info]: props.info,
    [styles.danger]: props.danger,
    [styles.success]: props.success,
    [styles.warning]: props.warning
  });
  
  const style = {
    ...(margin && { margin }),
    ...(margin_top && { marginTop: margin_top }),
    ...(margin_bottom && { marginBottom: margin_bottom }),
    ...(margin_left && { marginLeft: margin_left }),
    ...(margin_right && { marginRight: margin_right }),
  };
  
  return <input {...props} ref={ref} className={classes} style={style} />;
}

export default React.forwardRef(Input);