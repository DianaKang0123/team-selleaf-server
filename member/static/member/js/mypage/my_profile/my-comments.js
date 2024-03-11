// 마이페이지/프로필/노하우 js 파일

// 사이드 바 내 공유 버튼 눌렀을 때 모달창 표시

// 필요한 객체 가져오기
const shareModal = document.querySelector(".share-modal-wrap");

// 모달창 내 클립보드 버튼도 가져옴 - alert 표시용
const clipboardButton = document.querySelector(".cilpboard-button");

// 클립보드 버튼 - click 이벤트
// 클릭하면 alert 창 표시
clipboardButton.addEventListener("click", () => {
  alert("클립보드에 복사되었습니다.");
});

// click 이벤트 - 모달창 닫기
// 모달창 이외 아무 곳이나 클릭하면 모달창 닫힘
document.addEventListener("click", (e) => {
  // 만약 클릭한 곳의 상위 요소가 모달이 아닐 경우 = 모달 이외의 장소를 클릭한 경우
  if (!e.target.closest(".share-modal-wrap")) {
    // 상위 요소가 공유 버튼인 요소를 클릭했다면
    if (e.target.closest(".share-drop-down-button")) {
      // 모달창을 enabled 상태로 만들어줌
      shareModal.classList.toggle("enabled");

      // 아래쪽 실행 안 하고 함수 종료
      return;
    }
    // 모달창, 버튼 이외의 장소를 클릭한 경우 모달창 enabled 해제
    shareModal.classList.remove("enabled");
  }
  // 상위 요소가 모달일 경우(모달 클릭한 경우) 아무 것도 실행 안함(상태 유지)
});

/*
  강사 여부에 따라 강의 현황 메뉴 표시/숨김
*/

// 강사 여부
let isTeacher = false;

// 강의 현황메뉴 객체
const myClassMenu = document.querySelector(".teacher");

// 강사면 강의 현황 메뉴 표시, 아니면 숨김
if (isTeacher) {
  myClassMenu.style.display = "inline-block";
} else {
  myClassMenu.style.display = "none";
}

/* 
  각 댓글에 마우스 올린 경우 제목, 본문, 이미지 투명도 조정
*/

// 각 댓글
const commentsItems = document.querySelectorAll(".comments-history-item-wrap");

// 각 댓글에 mouseover, mouseout 이벤트 추가
commentsItems.forEach((item) => {
  // 각 댓글의 이미지, 제목, 본문을 변수화
  const itemImage = item.children[1].children[0];
  const itemTitle = item.children[1].children[1];
  const itemArticle = item.children[1].children[2];

  item.addEventListener("mouseover", () => {
    itemImage.style.opacity = 0.6;
    itemTitle.style.opacity = 0.6;
    itemArticle.style.opacity = 0.6;
  });

  item.addEventListener("mouseout", () => {
    itemImage.style.opacity = 1;
    itemTitle.style.opacity = 1;
    itemArticle.style.opacity = 1;
  });
});
//
// /*
//   리뷰 내역의 유무에 따라 표시할 내용 변경
// */
//
// // 리뷰 내역이 없을 때 보이는 태그
// const noContents = document.querySelector(".no-content-wrap");
//
// // 각 리뷰 내역 사이의 구분선
// const itemsSeperator = document.querySelectorAll(".items-seperator");
//
// // 리뷰 내역 유무
// let isReviewExists = true;
//
// // 리뷰 내역이 있을 경우
// if (commentsItems.length >= 1) {
//   // 리뷰 내역 없을 때 뜨는 텍스트들 안 보이게 함
//   noContents.style.display = "none";
//
//   // 각 리뷰내역 표시
//   commentsItems.forEach((item) => {
//     item.style.display = "block";
//   });
//
//   // 구분선 표시
//   itemsSeperator.forEach((item) => {
//     item.style.display = "block";
//   });
// }
// // 리뷰 내역이 없을 경우
// else {
//   // 리뷰 내역 없을 때 뜨는 텍스트들을 보이게 함
//   noContents.style.display = "block";
//
//   // 각 리뷰내역 숨김
//   commentsItems.forEach((item) => {
//     item.style.display = "none";
//   });
//
//   // 구분선 숨김
//   itemsSeperator.forEach((item) => {
//     item.style.display = "none";
//   });
// }


const showReplyList = (replies) => {
  let text = ``;
  console.log('모든 리스트 보여주기3');

  replies.forEach((reply) => {
    let postPlantTags = ""; // postPlantTags 변수를 미리 정의하고 초기화
      const postLength = reply.post_plant.length;
      postPlantTags = reply.post_plant.map(plant => `
                  <li class="item-tags">
                    <div>
                      <button
                        class="item-tags-button"
                        type="button"
                      >
                        ${plant}
                      </button>
                    </div>
                  </li>`).join('');

      text += `
        <div class="comments-history-item-wrap">
          <a href="#" class="comments-history-link"></a>
          <div class="comments-history-item-container">
            <div class="comments-item-image-wrap" style="opacity: 1">
              <img alt=""
                class="comments-item-image"
                src="/upload/${reply.post_file}"
              />
            </div>
            <div class="comments-item-title-wrap" style="opacity: 1">
              <span>${reply.post_title}</span>
            </div>
            <div class="comments-item-article-wrap" style="opacity: 1">
              <span
                >${reply.post_reply_content}</span
              >
            </div>
            <!-- 작성자, 조회수, 지역, 태그까지 모두 감싸는 부분 -->
            <div class="comments-item-info-wrap">
              <div class="article-info-wrap">
                <!-- 작성자 -->
                <div class="user-info-wrap">
                  ${reply.post_writer}
                </div>
                <!-- 올린 시간, 조회수, 지역 -->
                <div class="item-info-wrap">
                  <div class="item-infos">${timeForToday(reply.updated_date)}</div>
                  <div class="item-infos">조회 ${reply.post_count}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
  });

  return text;
};

const target = document.querySelector('.here')
postService.getReplies(memberId,showReplyList).then((text)=>{
  target.innerHTML = text
})


function timeForToday(datetime) {
    const today = new Date();
    const date = new Date(datetime);

    let gap = Math.floor((today.getTime() - date.getTime()) / 1000 / 60);

    if (gap < 1) {
        return "방금 전";
    }

    if (gap < 60) {
        return `${gap}분 전`;
    }

    gap = Math.floor(gap / 60);

    if (gap < 24) {
        return `${gap}시간 전`;
    }

    gap = Math.floor(gap / 24);

    if (gap < 31) {
        return `${gap}일 전`;
    }

    gap = Math.floor(gap / 31);

    if (gap < 12) {
        return `${gap}개월 전`;
    }

    gap = Math.floor(gap / 12);

    return `${gap}년 전`;
}





