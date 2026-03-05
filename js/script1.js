 AOS.init();

 $(document).ready(function() {
    let currentIndex = 0;
    const cardWidth = 280; 

    // 다음 버튼 클릭
    $('.next_btn').click(function() {
        // 현재 보여지고 있는 슬라이더의 요소들만 찾아서 작동하도록 설정 (버그 방지)
        let $wrap = $(this).closest('.slider_wrap');
        let $track = $wrap.find('.slide_track');
        let maxIndex = $track.find('.card').length - 4; 

        if (currentIndex < maxIndex) {
            currentIndex++;
            $track.css('transform', `translateX(-${currentIndex * cardWidth}px)`);
        }
    });

    // 이전 버튼 클릭
    $('.prev_btn').click(function() {
        let $wrap = $(this).closest('.slider_wrap');
        let $track = $wrap.find('.slide_track');

        if (currentIndex > 0) {
            currentIndex--;
            $track.css('transform', `translateX(-${currentIndex * cardWidth}px)`);
        }
    });

    // 카테고리 탭 버튼 클릭 기능
    $('.category_btns li a').click(function(e) {
        e.preventDefault(); 
        
        // 1. 버튼 스타일(배경색) 제어
        $('.category_btns li').removeClass('active');
        $(this).parent().addClass('active');

        // 2. 누른 버튼의 data-target 값 가져오기
        let targetId = $(this).attr('data-target');

        // 3. 기존 슬라이더 숨기고 해당 슬라이더만 나타내기 (메인페이지 인스타랑 동일한 원리!)
        $('.slider_wrap').hide(); 
        $('#' + targetId).css('display', 'flex').hide().fadeIn(300);

        // 4. 슬라이드 위치를 다시 처음으로 초기화
        currentIndex = 0;
        $('.slide_track').css('transform', 'translateX(0)');
    });
});