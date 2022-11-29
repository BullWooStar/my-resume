import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Introduce from "../components/Introduce";
import Experience from "../components/Experience";
import PersonalExperience from "../components/PersonalExperience";
import SkillAndEducation from "../components/SkillAndEducation";
import ToTheTopButton from "../UI&Layout/ToTheTopButton";
import PdfDownLoadButton from "../UI&Layout/PdfDownLoadButton";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>HyoKeunsResume</title>
        <meta property="og:title" content="최효근 이력서" key="title" />
        <meta
          property="og:description"
          content="프론트엔드엔지니어 최효근의 이력서 사이트입니다"
          key="description"
        />
      </Head>

      <main className={styles.main}>
        <div className={styles.buttonWrapper}>
          <PdfDownLoadButton />
          <ToTheTopButton />
        </div>

        <div className={styles.mainWrapper}>
          <Header />
          <Introduce />
          <Experience />
          <PersonalExperience />
          <SkillAndEducation />
        </div>
      </main>
    </div>
  );
}
