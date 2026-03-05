// Swiper 기본 옵션 설정
var merchSwiperOptions = {
    direction: 'vertical',  // 세로 방향 스크롤
    loop: true,             // 무한 반복
    slidesPerView: 'auto',  // 높이에 맞춰 자동 배치
    spaceBetween: 0,        // 이미지 사이 간격 없음
    allowTouchMove: false,  // 마우스로 드래그해서 멈추는 기능 끄기 (자연스럽게 흐르도록)
    autoplay: {
        delay: 0,           // 멈추는 시간 없이
        disableOnInteraction: false,
    },
};

// 3개의 열을 각각 초기화 (속도를 다르게 주면 훨씬 역동적이고 자연스럽습니다)
var merchSwiper1 = new Swiper('.merch_col1', Object.assign({}, merchSwiperOptions, { speed: 3000 }));
var merchSwiper2 = new Swiper('.merch_col2', Object.assign({}, merchSwiperOptions, { speed: 4000 }));
var merchSwiper3 = new Swiper('.merch_col3', Object.assign({}, merchSwiperOptions, { speed: 3500 }));