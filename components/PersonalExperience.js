import styles from "../styles/PersonalExperience.module.css";

function PersonalExperience() {
  return (
    <div className={styles.personalExperienceBox}>
      <h1 className={styles.personalExperienceTitle}>Personal Experience.</h1>
      <div>
        <h2>프론트엔드 개발을 위한 자바스크립트 스터디 (Programmers school)</h2>
        <p>2022.09 ~ 2022.10 </p>
        <p>
          GitHub :&nbsp;
          <a
            target="_blank"
            href="https://github.com/BullWooStar/programmers-javascript-study.git"
            rel="noreferrer"
          >
            https://github.com/BullWooStar/programmers-javascript-study.git
          </a>
        </p>
        <ul>
          <li>
            바닐라 자바스크립트로 TO-DO LIST 만들기, 공연검색기 만들기 등의
            미션을 받고 이를 수행하였습니다.
          </li>
          <li>
            React에서만 사용하는 줄 알았던 component, state의 개념들을 모두
            바닐라 자바스크립트로 구현해보면서 많은 공부가 되었습니다. 이에 더해
            event bubbling/delegation, debounce 같은 개념들도 배우고 미션에
            적용시켜보았습니다.
          </li>
          <li>
            하루가 다르게 바뀌는 프론트엔드 생태계에서 그 모든것의 뿌리가 되는
            자바스크립트를 튼튼하게 다지면 어떠한 변화속에서도 좋은 코드를
            짤수있을거라고 생각이 되었습니다.
          </li>
        </ul>
      </div>
      <div className={styles.experienceContent}>
        <h2>현업개발자 개인멘토링</h2>
        <p>2022.03 ~ 진행중</p>
        <p>
          정리링크 :&nbsp;
          <a
            target="_blank"
            href="https://youngpinetree.tistory.com/49"
            rel="noreferrer"
          >
            https://youngpinetree.tistory.com/49
          </a>
        </p>
        <ul>
          <li>
            매주 현업개발자와의 개인 멘토링 시간을 통해 제가 모르는 것, 어려웠던
            것들에 대한 질의응답시간을 가지고 따로 미션을 받았습니다.
          </li>
          <li>
            부트캠프 교육코스에 더해 추가로 공부할거리를 받아서 공부를 하고
            멘토님이 주신 미션에 대한 코드리뷰도 받으며 제 코드에 부족한
            부분들을 채워나갈 수 있었습니다.
          </li>
          <li>
            부트캠프를 진행하는것에 더해 따로 1:1 코칭을 받는 것이라 쉽지않은
            스케줄이었지만 힘들었던만큼 부트캠프만을 진행하는것 보다 훨씬 더
            많이 성장할 수 있었습니다.
          </li>
        </ul>
      </div>
      <div className={styles.experienceContent}>
        <h2>도서출판 승산 출판편집자</h2>
        <p>2020 ~ 2021</p>
        <ul>
          <li>
            교양 과학서 전문 출판업무로 양자역학, 수학, 입자물리학등 다양한
            과학분야의 책 교정교열 및 편집업무를 진행하였습니다.
          </li>
          <li>
            하나의 원고를 한권의 책으로 완성하기까지 저자,디자이너, 독자들과
            소통을 통한 협업경험을 했습니다.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PersonalExperience;
