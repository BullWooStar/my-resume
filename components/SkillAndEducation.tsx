import styles from "../styles/SkillAndEducation.module.css";
import FadeInSection from "../UI&Layout/FadeInSection";

function SkillAndEducation() {
  return (
    <>
      <FadeInSection>
        <div className={styles.contentBox}>
          <h1 className={styles.title}>Skill.</h1>
          <p>
            Frontend: JavaScript, TypeScript, React.js, Vue.js, HTML/CSS,
            Next.js
          </p>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className={styles.contentBoxLast}>
          <h1 className={styles.title}>Education.</h1>
          <div>
            <h2>KDT 패스트캠퍼스 프론트엔드 개발자 양성 과정</h2>
            <p>2022.03.28~2022.10.28 7개월</p>
            <p>- 패스트캠퍼스에서 진행하는 프론트엔드 개발자 부트캠프</p>
          </div>
          <div className={styles.educationContent}>
            <h2>경기대학교 졸업</h2>
            <p>2012.03~2018.06</p>
            <p>- 경기대학교 서울캠퍼스 영어영문학과/국어국문학과 학사</p>
            <p>- TOEIC : 850</p>
          </div>
        </div>
      </FadeInSection>
    </>
  );
}

export default SkillAndEducation;
