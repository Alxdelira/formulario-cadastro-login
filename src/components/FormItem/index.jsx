import styles from './styles.module.scss';
import classNames from 'classnames';

export default function FormItem({ margin, margin_top, margin_right, margin_left, margin_bottom, children, ...props }) {
  
  const classes = classNames({
    [styles.formItem]: true,
    [styles.row]: props.row,
    [styles.grow1]: props.grow1,
    [styles.grow2]: props.grow2,
    [styles.grow3]: props.grow3,
    [styles.grow4]: props.grow4,
    [styles.justify_end]: props.justify_end,
  });

  const style = {
    ...(margin && { margin }),
    ...(margin_top && { marginTop: margin_top }),
    ...(margin_bottom && { marginBottom: margin_bottom }),
    ...(margin_left && { marginLeft: margin_left }),
    ...(margin_right && { marginRight: margin_right }),
  };
  
  return (
    <div {...props} className={classes} style={style}>
      {children}
    </div>
  );
}