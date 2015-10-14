jQuery(function ($) {
  'use strict';

  $('a[href^=#]').click(function () {
    var speed = 500;
    var href = $(this).attr('href');
    var target = $(href == '#' || href == '' ? 'html' : href);
    var position = target.offset().top;
    $('html, body').animate({
      scrollTop: position
    }, speed, 'swing');
    return false;
  });
});


(function () {
  'use strict';

  var LATITUDE = 35.710307;   // 緯度
  var LONGITUDE = 139.777044; // 経度

  var $map = document.getElementById('google-map');
  var latlng = new google.maps.LatLng(LATITUDE, LONGITUDE);

  var mapOptions = {
    zoom: 17,
    center: latlng,
    scrollwheel: false
  };

  // Googleマップの表示
  var map = new google.maps.Map($map, mapOptions);

  // Googleマップにマーカーを設置
  var marker = new google.maps.Marker({
    position: latlng,
    map: map
  });

  // 情報ウィンドウ
  var infoWindows = new google.maps.InfoWindow({
    content: 'いいオフィス',
    position: latlng
  });
  infoWindows.open(map, marker);

})();


jQuery(function ($) {
  'use strict';

  var ua = navigator.userAgent;
  if (ua.match(/chrome/i)) {
    $('html').addClass('chrome');
  }
});

jQuery(function ($) {
  'use strict';

  var header = $('.site-header');
  header.fadeTo(0, 0);
  setTimeout(function () {
    $('.loading').hide();
    header.fadeTo(400, 1);
  }, 1300);
});
