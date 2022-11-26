import { useState, useEffect, useRef } from "react";
import styles from "./FadeInSection.module.css";

function FadeInSection(props) {
  const [isVisible, setVisible] = useState(false);
  const documentRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((enteries) => {
      enteries.forEach((entery) => {
        entery.isIntersecting && setVisible(true);
      });
    });
    observer.observe(documentRef.current);
  }, []);

  return (
    <div
      ref={documentRef}
      className={`${styles.fadeInSection} ${isVisible ? styles.isVisible : ""}`}
    >
      {props.children}
    </div>
  );
}

export default FadeInSection;
