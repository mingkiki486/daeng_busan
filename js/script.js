 
 AOS.init();
 
 
 // 지도 글자 클릭하면 뜨는 팝업창
$(document).ready(function() {
    // 각 구역별 팝업 이미지 경로 설정 (실제 경로에 맞게 수정)
    const districtImages = {
        'kijang': './images/main/popup_1.png',
        'geumjeong': './images/main/popup_4.png',
        'buk': './images/main/popup_11.png',
        'dongnae': './images/main/popup_5.png',
        'haeundae': './images/main/popup_3.png',
        'yeonje': './images/main/popup_8.png',
        'suyeong': './images/main/popup_9.png',
        'busanjin': './images/main/popup_2.png',
        'sasang': './images/main/popup_13.png',
        'gangseo': './images/main/popup_12.png',
        'seo': './images/main/popup_7.png',
        'jung': './images/main/popup_6.png',
        'dong': './images/main/popup_14.png',
        'nam': './images/main/popup_16.png',
        'saha': './images/main/popup_10.png',
        'yeongdo': './images/main/popup_15.png'
    };

     // 1. 호버(Hover) 동기화 이벤트
    $('[data-district]').on('mouseenter', function() {
        const id = $(this).attr('data-district');
        $(`[data-district="${id}"]`).addClass('active-hover');
    }).on('mouseleave', function() {
        const id = $(this).attr('data-district');
        $(`[data-district="${id}"]`).removeClass('active-hover');
    });

    // 2. 클릭(Click) 시 팝업 열기
    $('[data-district]').on('click', function() {
        const id = $(this).attr('data-district');
        const imgSrc = districtImages[id];

        if(!imgSrc) return;

        // 지도 구역 강조 활성화
        $('path').removeClass('active');
        $(`path[data-district="${id}"]`).addClass('active');

        // 이미지 로드 및 에러 처리 (에러 시 텍스트 플레이스홀더)
        $('#popup_img').attr('src', imgSrc).on('error', function() {
            $(this).attr('src', `https://placehold.co/450x600/B2D7EF/ffffff?text=${id}`);
        });

        // 팝업 표시
        $('#popup_layer').stop().fadeIn(300);
    });

    // 4. 초기 실행: 페이지가 로드되면 기장군을 기본으로 활성화
    $('[data-district="kijang"]').first().trigger('click');
});





// --- 하단 정보 배너 탭 기능 ---
    $('.tab_btn').on('click', function() {
        // 1. 버튼 스타일 활성화
        $('.tab_btn').removeClass('active'); // 모든 버튼 active 제거
        $(this).addClass('active'); // 클릭한 버튼만 active 추가

        // 2. 이미지 교체
        const targetId = $(this).attr('data-target'); // 클릭한 버튼의 타겟 ID 가져오기

        $('.ib_img').hide(); // 모든 이미지 숨김
        $('#' + targetId).fadeIn(300); // 타겟 이미지만 부드럽게 나타남
    });




    // --- 인스타 해시태그 탭 기능 ---
    $('.hash_btn').on('click', function() {
        // 1. 버튼 스타일 변경
        $('.hash_btn').removeClass('active');
        $(this).addClass('active');

        // 2. data-tag 값 가져오기
        const tagId = $(this).attr('data-tag');

        // 3. 이미지 그룹 변경 (부드럽게)
        $('.feed_group').hide();
        $('#' + tagId).css('display', 'flex').hide().fadeIn(300);
        // display: flex를 유지하면서 fadeIn 효과를 주기 위한 체이닝
    });


