    $(function () {
        //ロード１秒後にロゴ表示
        $(document).ready(function () {
            $('svg').addClass('active');
        })

        

        // ステータスバーでも波を表示させる
        // let height = window.innerHeight;
        // document.documentElement.style.setProperty('--vh', height / 100 + 'px');

        $('.nav__bg').click(function () {
            $(this).addClass('nav__bg--active');
        })

        
        // ハンバーガーメニュー関連
        $('.hamburger').click(function() {
            if($("#check").prop("checked")==true) {
                $('.hamburger__ul').fadeIn()
                $(".body").css("overflow", "hidden");
            } else {
                $('.hamburger__ul').delay(300).fadeOut()
                $('.hamburger__ul').css('display','none')
                $(".body").css("overflow", "scroll");
            }

        })

        $('.hamburger').click(function() {

        })

        $('.hamburger__a').click(function() {
            $("#check").prop("checked", false);
        })

        $('.hamburger__a--skill').click(function() {
            $(".skill__card").css('opacity','0.9')
            $(".skill__card").css('transform','translateY(0)')
        })

                


        // スライダー
        $('.works__slider').slick({
            autoplay: false,
            autoplaySpeed: 4000,
            dots: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            // centerMode: true,
            arrows: true,
            prevArrow: '<img src="images/left.png" class="slide-arrow prev-arrow">',
            nextArrow: '<img src="images/right.png" class="slide-arrow next-arrow">',
        })

        $('.works__slider--sp').slick({
            autoplay: true,
            autoplaySpeed: 4000,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            arrows: true,
            prevArrow: '<img src="images/left.png" class="slide-arrow prev-arrow">',
            nextArrow: '<img src="images/right.png" class="slide-arrow next-arrow">',
        })



        // モーダルウィンドウ

        $('.modal__close , .modal__bg').click(function () {
            $('.modal').fadeOut();

        });

        $('.works__check--1').click(function () {
            $('.modal').fadeIn();
            $('.modal__img').attr('src', 'images/woman1.jpg')
        })

        $('.works__check--2').click(function () {
            $('.modal').fadeIn();
            $('.modal__img').attr('src', 'images/bridge.jpg')
        })

        $('.works__check--3').click(function () {
            $('.modal').fadeIn();
            $('.modal__img').attr('src', 'images/cat.jpg')
        })

        $('.works__check--4').click(function () {
            $('.modal').fadeIn();
            $('.modal__img').attr('src', 'images/woman2.jpg')
        })



        // フェードイン

        // 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime() {
    // ふわっ
    $(".fadeL").each(function () {
      //fadeUpTriggerというクラス名が
      var elemPos = $(this).offset().top + 100; //要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight) {
        $(this).addClass("fadeLeft"); // 画面内に入ったらfadeUpというクラス名を追記
      } else {
        $(this).removeClass("fadeLeft"); // 画面外に出たらfadeUpというクラス名を外す
      }
    });

    $(".fade").each(function () {
        //fadeUpTriggerというクラス名が
        var elemPos = $(this).offset().top + 100; //要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
          $(this).addClass("fadeUp"); 
        } else {
          $(this).removeClass("fadeUp"); // 画面外に出たらfadeUpというクラス名を外す
        }
      });
  
    $(".fade-ttl").each(function () {
      //fadeUpTriggerというクラス名が
      var elemPos = $(this).offset().top + 100; //要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight) {
        $(this).addClass("fadeUp-ttl"); 
      } else {
        $(this).removeClass("fadeUp-ttl"); // 画面外に出たらfadeUpというクラス名を外す
      }
    });
  }

  // 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
    fadeAnime(); /* アニメーション用の関数を呼ぶ*/
  }); // ここまで画面をスクロールをしたら動かしたい場合の記述


})
