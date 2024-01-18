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
    const modalWrapper = document.getElementById("modal-wrapper");
    modalWrapper.classList.remove('hidden');
    modalWrapper.classList.add(contentName);
}

function hideModal() {
    const modalWrapper = document.getElementById("modal-wrapper");
    modalWrapper.classList.add('hidden');
    modalWrapper.classList.remove('works_system');
    modalWrapper.classList.remove('works_company');
    modalWrapper.classList.remove('works_security2');
    
}

