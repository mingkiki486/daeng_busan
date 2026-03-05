// 수직 Swiper 초기화
var swiper = new Swiper(".longstay_swiper", {
    direction: "vertical",     // 위아래 수직 스크롤
    slidesPerView: "auto",     // 컨테이너 높이에 맞춰 슬라이드 개수 자동 조절
    spaceBetween: 30,          // 이미지 사이 간격 40px (이전 gap 대체)
    freeMode: true,            // 일반 스크롤처럼 딱딱 끊기지 않고 부드럽게 넘어가게 함
    mousewheel: {
        releaseOnEdges: true,  // 매우 중요★: 스와이퍼가 끝(위/아래)에 도달하면 웹페이지 본문 스크롤로 자연스럽게 넘어가게 해줌
    },
    grabCursor: true,          // 마우스 포인터를 올리면 잡을 수 있는 손가락 모양 표시 (드래그 가능)
});

//brand 굿즈 슬라이드
const marqueeOptions = {
    direction: "vertical",
    loop: true,
    speed:3000,           // 슬라이드가 넘어가는 속도 (ms)
    allowTouchMove: false, // 마우스 드래그 시 멈춤 현상 방지
    slidesPerView: 2,      // 한 화면에 보일 개수
    spaceBetween: 15,
    autoplay: {
        delay: 0,                   // 지연 시간 없음
        disableOnInteraction: false, // 상호작용 후에도 계속 실행
    },
    freeMode: {
        enabled: true,               // 프리모드 활성화
        sticky: false,               // 위치에 딱딱 붙지 않게 함
        momentum: false,             // 관성 제거 (일정한 속도 유지의 핵심)
    }
};

// 아래로 흐르는 슬라이드
const swiperDown = new Swiper(".mySwiperDown", {
    ...marqueeOptions,
});

// 위로 흐르는 슬라이드
const swiperUp = new Swiper(".mySwiperUp", {
    ...marqueeOptions,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: true, // 역방향 설정
    },
});