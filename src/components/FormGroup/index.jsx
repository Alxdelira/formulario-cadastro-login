import styles from './styles.module.scss';

export default function FormGroup({ margin, margin_top, margin_right, margin_left, margin_bottom, children, ...props }) {
  
  const style = {
    ...(margin && { margin }),
    ...(margin_top && { marginTop: margin_top }),
    ...(margin_bottom && { marginBottom: margin_bottom }),
    ...(margin_left && { marginLeft: margin_left }),
    ...(margin_right && { marginRight: margin_right }),
  };

  return (
    <div {...props} className={styles.formGroup} style={style}>
      {children}
    </div>)
  ;
}