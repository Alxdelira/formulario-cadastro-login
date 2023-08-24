import styles from './styles.module.scss';
import classNames from 'classnames';

export default function Label({ children, margin, margin_top, margin_right, margin_left, margin_bottom, ...props }) {

  const classes = classNames({
    [styles.label]: true, 
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

  return <label {...props} className={classes} style={style}>{children}</label>;
}