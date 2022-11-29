import { useEffect, useState } from "react";
import styles from "./ToTheTopButton.module.css";
import { AiOutlineArrowUp } from "react-icons/ai";

function ToTheTopButton() {
  const [toggleBtn, setToggleBtn] = useState(false);

  const handleScroll = () => {
    const { scrollY } = window;

    scrollY > 400 ? setToggleBtn(true) : setToggleBtn(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return toggleBtn ? (
    <button className={styles.button} onClick={goToTop}>
      <p>
        <AiOutlineArrowUp />
        Top
      </p>
    </button>
  ) : null;
}

export default ToTheTopButton;
