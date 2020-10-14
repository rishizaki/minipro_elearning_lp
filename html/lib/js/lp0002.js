var img_name = '#main5_img_'; //写真のid名
var img_max = 4; //写真4種類
var img_now = 1;
var img_none;
var img_top;
var img_hidden;
var img_visible;

$(document).ready( function(){
  //写真2枚目以降のcss設定
  for(var i = 2; i < img_max + 1; i++){
    img_none = img_name + i;
    img_top = (((i - 1) * -380) + 380) + 'px';
    $(img_none).css({
      position: 'relative',
      top: img_top,
      visibility: 'hidden'
    });
  }
  //スライドアニメーション呼び出し
  setTimeout("imgTimer()", 2000);

  //プルダウン
  $('.dropdown').on('click', function () {
    /*クリックでコンテンツを開閉*/
    $(this).next().slideToggle(200);
    /*矢印の向きを変更*/
    $(this).toggleClass('open', 200);
  });
});

function imgTimer(){
  //非表示対象を設定
  img_hidden = img_name + img_now;

  img_top = (((img_now - 1) * -380) + 380) + 'px';
  //非表示アニメーション
  $(img_hidden).animate({
    top: img_top
  },300,function(){
    $(img_hidden).css('visibility','hidden');

    //カウント
    if(img_now < img_max){
      img_now ++;
    }else{
      img_now = 1;
    }

    //表示対象を設定
    img_visible = img_name + img_now;

    img_top = ((img_now - 1) * -380) + 'px';
    //非表示アニメーション
    $(img_visible).css('visibility','visible');
    $(img_visible).animate({
      top: img_top
    },300);
  });
  // タイマー
  setTimeout("imgTimer()", 2000);
}
