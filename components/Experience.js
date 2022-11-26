import styles from "../styles/Experience.module.css";
import FadeInSection from "../UI&Layout/FadeInSection";

function Experience() {
  return (
    <div className={styles.experienceBox}>
      <FadeInSection>
        <h1 className={styles.experienceTitle}>Experience.</h1>
        <div>
          <h2>
            <a target="_blank" href="https://lenssis.jp/" rel="noreferrer">
              IKO LENSSIS JAPAN 페이지&nbsp;
            </a>
            리뉴얼
          </h2>
          <p>2022.09 ~ 2022.10 (FE: 4명, BE:2명, UI/UX: 3명)</p>
          <p>
            GitHub :&nbsp;
            <a
              target="_blank"
              href="https://github.com/IKO-FinalProject/FE-Admin.git"
              rel="noreferrer"
            >
              https://github.com/IKO-FinalProject/FE-Admin.git
            </a>
          </p>
          <p>
            회고 :&nbsp;
            <a
              target="_blank"
              href="https://youngpinetree.tistory.com/48"
              rel="noreferrer"
            >
              https://youngpinetree.tistory.com/48
            </a>
          </p>
          <div className={styles.contentBox}>
            <h3>Description.</h3>
            <p>
              KDT 패스트캠퍼스 부트캠프 파이널프로젝트로 기업의 과제를 수행하는
              프로젝트입니다. 기존의 카페24로 되있던 기업의 쇼핑몰 사이트를 자사
              쇼핑몰사이트로 리뉴얼하는 프로젝트이며 기초 UI/UX와 API 설계참여,
              관리자페이지를 구현하였습니다.
            </p>
          </div>
          <div className={styles.contentBox}>
            <h3>What did i do.</h3>
            <p>[프로젝트 경험]</p>
            <ul>
              <li>
                관리자페이지의 모든 프론트엔드 파트를 담당했으며 상품, 주문,
                이벤트, 공지사항을 관리하는 페이지를 만들었습니다.
              </li>
              <li>
                기획,디자이너(UI/UX)와 백엔드 엔지니어와 협업 프로젝트를 경험해
                보았습니다. 협업을 통해 어떠한 것들을 말해야할지, 서로 어떠한
                문제가 생길수 있을지를 배웠습니다.
              </li>
              <li>
                UI/UX, 백엔드 엔지니어와 협업을 통해 관리자페이지의 전체적인
                화면구성 및 API 설계에 참여하였습니다.
              </li>
              <li>
                기업에서준 대형프로젝트를 진행함으로써 사용자의 입장에 대해 더
                생각하게 되고 그에 맞는 기능등에 대해 많은 것들을 고려하게
                되었습니다.
              </li>
              <li>
                이러한 경험으로 지금껏 작은 어플리케이션만을 만들던 저의 시야를
                한층 더 넓혀주었습니다.
              </li>
            </ul>
            <p>[기술적 경험]</p>
            <ul>
              <li>
                Vite를 사용해서 번들링을 함으로써 더 빠른 빌드속도를
                만들었습니다.
              </li>
              <li>
                서버데이터를 많이 사용하는 관리자 페이지의 특성상 React Query를
                사용함으로써 비동기코드를 간소화 시키고 비동기데이터를
                효율적으로 관리하였습니다.
              </li>
              <li>
                처음으로 파일 업로드 방식에 대하여 생각해보았습니다. formdata를
                multipart 형식으로 api요청하는 방식을 도입했다가 최종적으로는
                AWS-S3로 직접 업로드 하는 방식을 사용하였습니다.
              </li>
            </ul>
          </div>
          <div className={styles.contentBox}>
            <h3>Tech Stack.</h3>
            <p>Vite, React, TypeScript, React Query, Tailwind CSS, Vercel</p>
          </div>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className={styles.experienceContent}>
          <h2>대출상품 추천 어플리케이션</h2>
          <p>2022.08.23 ~ 2022.09.06 (FE: 5명, BE:3명)</p>
          <p>
            GitHub :&nbsp;
            <a
              target="_blank"
              href="https://github.com/BullWooStar/team5-mini-project.git"
              rel="noreferrer"
            >
              https://github.com/BullWooStar/team5-mini-project.git
            </a>
          </p>

          <div className={styles.contentBox}>
            <h3>Description.</h3>
            <p>
              KDT 패스트캠퍼스 부트캠프에서 조별과제로 진행한 프로젝트입니다.
              프론트엔드에서 UI/UX를 구성하였고 백엔드 엔지니어와의 API설계를
              통해 회원정보에 맞는 대출상품을 추천받을 수 있고 이를 장바구니에
              담아 구매할 수 있는 웹 어플리케이션을 만들었습니다.
            </p>
          </div>
          <div className={styles.contentBox}>
            <h3>What did i do.</h3>
            <p>[프로젝트 경험]</p>
            <ul>
              <li>
                조장으로써 전체적인 프로젝트 진행을 이끌어나갔습니다. 프로젝트의
                방향성을 잡고 실력이 부족한 팀원이 있으면 도와주고 북돋아가며
                팀의 균형을 유지해나가려고 노력했습니다.
              </li>
              <li>
                팀으로 협업을 할때의 컨벤션에 대해 많은 생각을 했습니다.
                Conventional Commit 메시지 규칙을 사용하였고 pull request
                template을 만들어 request 요청을 하게 하였으며 팀원 전원의
                리뷰를 받아야 팀장이 최종 머지를 하는 방식을 사용하였습니다.
              </li>
              <li>
                버튼이나 카드 같이 공통적으로 사용되는 UI 컴포넌트를 만들어
                팀원들에게 사용하게 함으로써 코드의 재사용성을 높였습니다.
              </li>
              <li>
                백엔드 엔지니어와 처음으로 협업을 하는 프로젝트였습니다. 어떠한
                API가 필요한지, 어떠한 데이터를 받아야할지 API요청서도 미리
                만들어보며 백엔드 엔지니어와 협업을 한다는 것이 어떠한 것인지
                경험해 볼 수 있었습니다.
              </li>
            </ul>
            <p>[기술적 경험]</p>
            <ul>
              <li>
                Redux Toolkit을 사용해서 상태관리를 쉽게 할 수 있었습니다.
              </li>
              <li>
                Redux Toolkit thunk로 비동기처리를 해서 비동기코드를 더 간결하게
                만들었습니다.
              </li>
            </ul>
          </div>
          <div className={styles.contentBox}>
            <h3>Tech Stack.</h3>
            <p>React, Redux Toolkit, styled-component</p>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}

export default Experience;
