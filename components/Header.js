import styles from "../styles/Header.module.css";
import profile from "../public/profile.jpeg";
import Image from "next/image";

function Header() {
  return (
    <div className={styles.headerBox}>
      <header>
        <h1 className={styles.mainName}>
          최효근 | 탄탄한 개발 토양을 다지는 개발자
        </h1>
        <p className={`${styles.specialist}`}>Front-end Developer</p>
      </header>
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
              Email. <a href="mailto: ccatal66@gmail.com">ccatal66@gmail.com</a>
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
  );
}

export default Header;
