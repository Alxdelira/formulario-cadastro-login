import styles from './styles.module.scss';
import classNames from 'classnames';

export default function Button({ children, margin, margin_top, margin_right, margin_left, margin_bottom, ...props }) {
  
  const classes = classNames({
    [styles.button]: true,
    [styles.info]: props.info,
    [styles.danger]: props.danger,
    [styles.warning]: props.warning,
    [styles.success]: props.success,
    [styles.small]: props.small,
    [styles.big]: props.big,
    [styles.invert]: props.invert,
    [styles.invertInfo]: props.invertInfo,
    [styles.invertDanger]: props.invertDanger,
    [styles.invertWarning]: props.invertWarning,
    [styles.invertSuccess]: props.invertSuccess,
  });

  const style = {
    ...(margin && { margin }),
    ...(margin_top && { marginTop: margin_top }),
    ...(margin_bottom && { marginBottom: margin_bottom }),
    ...(margin_left && { marginLeft: margin_left }),
    ...(margin_right && { marginRight: margin_right }),
  };
  
  return <button {...props} className={classes} style={style}>{children}</button>;
}