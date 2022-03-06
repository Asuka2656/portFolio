$(function() {
    let scrollTarget = null; //スクロールする目標地点
    let margin = null; //ヘッダーと中身が被らないように裏に置いたdivの高さ
    let smallMargin = null; //縮小した後のヘッダーの高さ=b
    let scrollValue = null; //今どれくらいスクロールしているのかの値
    let KVWinHeight = null; //キービジュアルを表示する領域の高さ
    let WindowHeight = $(window).innerHeight(); //表示してるウィンドウのサイズ=f
    let topToKeyVisual = null; //画面のトップからキービジュアルまでの距離=a
    let KVImgHeight = null; //キービジュアルの元サイズ=d
    let imgTop = null; //=c

    //ここまで全体で使う変数の宣言

    //ここから最初に呼んどく関数
    headerSettings();

    //ここまで最初に呼んどく関数

    //ここから常に準備しとく関数

    $(window).on('scroll', function() {
        scrollValue = $(window).scrollTop(); //現在のスクロール量
        KVWinHeight = $(".keyVisual").innerHeight(); //=e
        topToKeyVisual = $(".keyVisual").offset().top - scrollValue; //=a
        KVImgHeight = $("#proN1Q").height(); //=d

        headerTransform(); //ヘッダーのサイズ変更
        KVScroll();
    }); //スクロールするにつれて動く関数の設定

    $("#toTop").on('click', scrollToTop); //トップに戻るボタン
    $("#toProN").on('click', scrollToProN); //プロNボタンが押されたらプロNまでスクロール
    $("#toMovie").on('click', scrollToMovie); //動画制作ボタンが押されたら動画制作までスクロール
    $("#toBlender").on('click', scrollToBlender); //3Dボタンが押されたら3Dまでスクロール
    $("#toWeb").on('click', scrollToWeb); //webサイトボタンが押されたらwebサイトまでスクロール

    //ここまで常に準備しとく関数

    //ここから呼ばれるまで出てこない関数

    function KVScroll() {
        if (topToKeyVisual < smallMargin) {
            imgTop = KVWinHeight - KVImgHeight;
            $("#proN1Q").css('top', imgTop);
        } else if (smallMargin <= topToKeyVisual && topToKeyVisual <= WindowHeight - KVWinHeight) {
            imgTop = (KVWinHeight - KVImgHeight) * (topToKeyVisual - WindowHeight + KVWinHeight) / (smallMargin - WindowHeight + KVWinHeight);
            $("#proN1Q").css('top', imgTop);
        } else if (WindowHeight - KVWinHeight < topToKeyVisual) {
            imgTop = 0;
            $("#proN1Q").css('top', imgTop);
        } else {
            console.log('キービジュアルの表示範囲おかしいよ');
        };
    }; //スクロールに合わせてキービジュアルがスクロールする関数

    function headerTransform() {
        if (margin * 0.3 <= scrollValue) {
            $("#header").removeClass('header-big');
            $("#header").addClass('header-small');
            smallMargin = $("#header").outerHeight();
        } else if (scrollValue < margin * 0.3) {
            $("#header").removeClass('header-small');
            $("#header").addClass('header-big');
        } else {
            console.log('ヘッダーのサイズ変更上手くいってないよ');
        };
    } //スクロールに合わせてヘッダーのサイズを変更する関数

    function scrollToTop() {
        scrollTarget = $("#direction").offset().top - smallMargin;
        $("html, body").animate({ scrollTop: scrollTarget }, 500, "swing");
        console.log('一番上まで飛んだお');
    }; //一番上までスクロールする関数

    function scrollToProN() {
        scrollTarget = $("#proN").offset().top - smallMargin;
        $("html, body").animate({ scrollTop: scrollTarget }, 500, "swing");
        console.log('プロNまで飛んだお');
    }; //プロNまでスクロールする関数

    function scrollToMovie() {
        scrollTarget = $("#movie").offset().top - smallMargin;
        $("html, body").animate({ scrollTop: scrollTarget }, 500, "swing");
        console.log('動画制作まで飛んだお');
    }; //動画制作までスクロールする関数

    function scrollToBlender() {
        scrollTarget = $("#blender").offset().top - smallMargin;
        $("html, body").animate({ scrollTop: scrollTarget }, 500, "swing");
        console.log('3Dまで飛んだお');
    }; //3Dまでスクロールする関数

    function scrollToWeb() {
        scrollTarget = $("#web").offset().top - smallMargin;
        $("html, body").animate({ scrollTop: scrollTarget }, 500, "swing");
        console.log('webまで飛んだお');
    }; //webサイトまでスクロールする関数

    function headerSettings() {
        margin = $("#header").innerHeight();
        $("#margin").css("height", margin);
    }; //ヘッダーの挙動管理と真下の要素の空白管理の関数

    console.log("準備できたお(｀・ω・´)ｷﾘｯ");
});
