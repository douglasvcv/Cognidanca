import styles from "./Content.module.css";

function Content() {
  return (
    <div className={styles.content_container}>
    

      <div className={styles.typing_animation}>
        <span>Dançar é mais do que movimento;</span>
        <span>
          é uma sinfonia de saúde que fortalece o corpo, eleva a alma e
          transforma vidas.
        </span>
        <span>Venha fazer parte desse universo, transforme sua saúde através da Dança</span>
      </div>
    </div>
  );
}

export default Content;
