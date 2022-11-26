import styles from "../styles/Header.module.css";
import profile from "../public/profile.jpeg";
import Image from "next/image";
import PdfDownLoadButton from "../UI&Layout/PdfDownLoadButton";

function Header() {
  return (
    <header className={styles.headerBox}>
      <div className={styles.mainNameContainer}>
        <h1 className={styles.mainName}>
          탄탄한 개발 토양을 다지는 개발자, 최효근
        </h1>
        <PdfDownLoadButton />
      </div>

      <div className={styles.fadeInBox}>
        <p className={`${styles.specialist}`}>Front-end Developer</p>
        <div className={styles.headerContent}>
          <Image
            src={profile}
            alt="profileImage"
            className={styles.profileImage}
          />
          <div>
            <div>
              <h2 className={styles.headerContentTitle}>Contact.</h2>
              <p>
                Email.&nbsp;
                <a href="mailto: ccatal66@gmail.com">ccatal66@gmail.com</a>
              </p>
              <p className="themeColor">Phone. 010-8568-7793</p>
            </div>
            <div>
              <h2 className={styles.headerContentTitle}>Channel.</h2>
              <p>
                GitHub.&nbsp;
                <a
                  target="_blank"
                  href="https://github.com/BullWooStar"
                  rel="noreferrer"
                >
                  https://github.com/BullWooStar
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
