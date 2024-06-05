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
    } else {
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

// for (let i = 0; i < preventChildsActions.length; i++) {
//     preventChildsActions[i].addEventListener('click', function (e) {
//         e.stopPropagation(); // 自身の親要素へクリックイベントを伝えない
//     });
// }

function displayModal(contentName) {
    const currentOpenModal = document.getElementById(contentName);
    document.getElementById("modal-wrapper").classList.remove("hidden");
    // currentOpenModal.classList.remove('hidden');
    // console.log(contentName);
    currentOpenModal.classList.add('open');
}

function hideModal() {
    const modals = document.getElementsByClassName("modal-window");
    document.getElementById("modal-wrapper").classList.add("hidden");
    for(let i = 0; i < modals.length;i++){
      modals[i].classList.remove('open')
    }
    // modalWrapper.classList.add('hidden');
    // modalWrapper.classList.remove('works_game');
    // modalWrapper.classList.remove('works_paper');
    // modalWrapper.classList.remove('works_hackathon');
    // modalWrapper.classList.remove('works_qiita');
    // modalWrapper.classList.remove('works_ippon');
    // modalWrapper.classList.remove('works_system');
    // modalWrapper.classList.remove('works_company');
    // modalWrapper.classList.remove('works_security2');
    
}

