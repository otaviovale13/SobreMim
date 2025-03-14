import styles from "./Footer.module.css";

export function Footer() {
  return (
    <div className={styles.paiFooter}>
      <div className={styles.nomesFooter}>
        <h1 className={styles.desFooter}>Desenvolvido por Otávio Vale</h1>
        <h1 className={styles.otaFooter}>otaviovale13@gmail.com</h1>
      </div>
      <div className={styles.iconsFooter}>
        <i class="bi bi-linkedin"></i>
        <i class="bi bi-github"></i>
        <i class="bi bi-envelope"></i>
      </div>
    </div>
  );
}
