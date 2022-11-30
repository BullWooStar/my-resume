import styles from "../styles/Header.module.css";
import profile from "../public/profile.jpeg";
import Image from "next/image";

function Header() {
  return (
    <header className={styles.headerBox}>
      <h1 className={styles.mainName}>
        <span>탄탄</span>
        <span>한</span>
        &nbsp;
        <span>개발</span>
        &nbsp;
        <span>토양</span>
        <span>을</span>
        &nbsp;
        <span>다지</span>
        <span>는</span>
        &nbsp;
        <span>개발</span>
        <span>자</span>
        <span>,</span>
        &nbsp;
        <span>최효</span>
        <span>근</span>
      </h1>

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
