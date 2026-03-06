 AOS.init();

//  $(document).ready(function() {
//     let currentIndex = 0;
//     const cardWidth = 280; 

//     // 다음 버튼 클릭
//     $('.next_btn').click(function() {
//         // 현재 보여지고 있는 슬라이더의 요소들만 찾아서 작동하도록 설정 (버그 방지)
//         let $wrap = $(this).closest('.slider_wrap');
//         let $track = $wrap.find('.slide_track');
//         let maxIndex = $track.find('.card').length - 4; 

//         if (currentIndex < maxIndex) {
//             currentIndex++;
//             $track.css('transform', `translateX(-${currentIndex * cardWidth}px)`);
//         }
//     });

//     // 이전 버튼 클릭
//     $('.prev_btn').click(function() {
//         let $wrap = $(this).closest('.slider_wrap');
//         let $track = $wrap.find('.slide_track');

//         if (currentIndex > 0) {
//             currentIndex--;
//             $track.css('transform', `translateX(-${currentIndex * cardWidth}px)`);
//         }
//     });

//     // 카테고리 탭 버튼 클릭 기능
//     $('.category_btns li a').click(function(e) {
//         e.preventDefault(); 
        
//         // 1. 버튼 스타일(배경색) 제어
//         $('.category_btns li').removeClass('active');
//         $(this).parent().addClass('active');

//         // 2. 누른 버튼의 data-target 값 가져오기
//         let targetId = $(this).attr('data-target');

//         // 3. 기존 슬라이더 숨기고 해당 슬라이더만 나타내기 (메인페이지 인스타랑 동일한 원리!)
//         $('.slider_wrap').hide(); 
//         $('#' + targetId).css('display', 'flex').hide().fadeIn(300);

//         // 4. 슬라이드 위치를 다시 처음으로 초기화
//         currentIndex = 0;
//         $('.slide_track').css('transform', 'translateX(0)');
//     });
// });




$(document).ready(function() {
    let currentIndex = 0;
    const cardWidth = 280; 
    const autoTime = 1000; // 자동 슬라이드 간격 (3초)
    let slideTimer; // 타이머 변수

    // 슬라이드 이동 처리 함수
    function moveSlide($track) {
        $track.css('transition', 'transform 0.5s ease');
        $track.css('transform', `translateX(-${currentIndex * cardWidth}px)`);
    }

    // 다음 슬라이드 실행 함수 (루프 제거: 끝에 도달하면 정지)
    function nextSlide() {
        let $wrap = $('.slider_wrap:visible'); 
        let $track = $wrap.find('.slide_track');
        let maxIndex = $track.find('.card').length - 4; 

        if (currentIndex < maxIndex) {
            currentIndex++;
            moveSlide($track);
        } else {
            // 마지막 슬라이드라면 자동 재생 중지
            stopAutoSlide();
        }
    }

    // 자동 슬라이드 시작
    function startAutoSlide() {
        stopAutoSlide(); 
        
        let $wrap = $('.slider_wrap:visible');
        let $track = $wrap.find('.slide_track');
        let maxIndex = $track.find('.card').length - 4;

        // 이미 마지막이라면 타이머를 시작하지 않음
        if (currentIndex < maxIndex) {
            slideTimer = setInterval(nextSlide, autoTime);
        }
    }

    // 자동 슬라이드 중지
    function stopAutoSlide() {
        clearInterval(slideTimer);
    }

    // --- 클릭 이벤트 ---

    // 다음 버튼 클릭
    $('.next_btn').click(function() {
        let $wrap = $(this).closest('.slider_wrap');
        let $track = $wrap.find('.slide_track');
        let maxIndex = $track.find('.card').length - 4;

        if (currentIndex < maxIndex) {
            stopAutoSlide();
            currentIndex++;
            moveSlide($track);
            startAutoSlide(); 
        }
    });

    // 이전 버튼 클릭 (역재생/루프 제거: 0에서 멈춤)
    $('.prev_btn').click(function() {
        if (currentIndex > 0) {
            stopAutoSlide();
            let $wrap = $(this).closest('.slider_wrap');
            let $track = $wrap.find('.slide_track');
            
            currentIndex--;
            moveSlide($track);
            startAutoSlide(); 
        }
    });

    // 카테고리 탭 버튼 클릭 기능
    $('.category_btns li a').click(function(e) {
        e.preventDefault(); 
        
        // 1. 버튼 스타일 제어
        $('.category_btns li').removeClass('active');
        $(this).parent().addClass('active');

        // 2. 타겟 ID 가져오기
        let targetId = $(this).attr('data-target');

        // 3. 슬라이더 전환
        $('.slider_wrap').hide(); 
        $('#' + targetId).css('display', 'flex').hide().fadeIn(300);

        // 4. 인덱스 초기화 및 새로운 탭에서 다시 시작
        stopAutoSlide();
        currentIndex = 0;
        $('.slide_track').css('transform', 'translateX(0)');
        startAutoSlide();
    });

    // 마우스 호버 시 일시 정지
    $('.slider_wrap').on('mouseenter', stopAutoSlide).on('mouseleave', startAutoSlide);

    // 페이지 로드 시 최초 실행
    startAutoSlide();
});