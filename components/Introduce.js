import styles from "../styles/Introduce.module.css";
import FadeInSection from "../UI&Layout/FadeInSection";

function Introduce() {
  return (
    <div className={styles.introduceBox}>
      <h1 className={styles.introcueTitle}>Introduce.</h1>
      <h2>
        저는 <span className={styles.blankBox}>_______</span> 하는 엔지니어
        입니다
      </h2>
      <ol className={styles.list}>
        <li>누구나 차별받지 않고 사용할 수 있는 서비스에 대해 고민하는</li>
        <li>쉽게 유지보수할 수 있는 코드에 대해 생각하는 </li>
        <li>언어의 기본 개념과 동작 원리를 공부하는</li>
      </ol>
    </div>
  );
}

export default Introduce;
