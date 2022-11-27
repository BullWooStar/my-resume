import styles from "./PdfDownLoadButton.module.css";

function PdfDownLoadButton() {
  return (
    <button className={styles.button}>
      <a href="../public/static/resume.pdf" download>
        PDF
      </a>
    </button>
  );
}

export default PdfDownLoadButton;
