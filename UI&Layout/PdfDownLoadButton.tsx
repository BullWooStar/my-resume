import styles from "./PdfDownLoadButton.module.css";

function PdfDownLoadButton() {
  return (
    <button className={styles.button}>
      <a
        href="/static/resume.pdf"
        download
        target="_blank"
        rel="noopener noreferrer"
      >
        PDF
      </a>
    </button>
  );
}

export default PdfDownLoadButton;
