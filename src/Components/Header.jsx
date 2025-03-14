import styles from "./Header.module.css";

export function Header() {
  return (
    <div className={styles.paiSupremo}>
      <div className={styles.paiHeader}>
        <h1 className={styles.nome}>Otávio Vale</h1>
        <div className={styles.filhoHeader}>
          <h1 className={styles.sobreHeader}>Sobre Mim</h1>
          <h1 className={styles.habHeader}>Habilidades</h1>
          <h1 className={styles.proHeader}>Projetos</h1>
          <h1 className={styles.expHeader}>Experiência</h1>
        </div>
      </div>
    </div>
  );
}
