$(function () {
    //ページ内スクロール
    var $nav = $(".header");
    var navHeight = $nav.outerHeight();

    $('a[href^="#"]').on("click", function () {
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? "html" : href);
        var position = target.offset().top - navHeight;
        $("html, body").animate(
        {
            scrollTop: position,
        },
        300,
        "swing"
        );
        return false;
    });

    //スクロールに応じてヘッダーの背景色が変化
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.header').addClass('active');
        } 
        else {
            $('.header').removeClass('active');
        }
    });

    //ページトップ
    $("#js-page-top").on("click", function () {
        $("body,html").animate(
        {
            scrollTop: 0,
        },
        300
        );
        return false;
    });
});

let preventChildsActions = document.getElementsByClassName("stopPropagation");
    function displayModal(contentName) {
        const currentOpenModal = document.getElementById(contentName);
        const main = document.getElementsByTagName("html")[0];
        document.getElementById("modal-wrapper").classList.remove("hidden");
        currentOpenModal.classList.add('open');
        main.classList.add("scroll-fix");
    }

    function hideModal() {
        const modals = document.getElementsByClassName("modal-window");
        const main = document.getElementsByTagName("html")[0];
        document.getElementById("modal-wrapper").classList.add("hidden");
        for(let i = 0; i < modals.length;i++){
            modals[i].classList.remove('open')
        }
        main.classList.remove("scroll-fix");
    }
