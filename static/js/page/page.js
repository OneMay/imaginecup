function go() {
  if (document.getElementById('list')) {
    var list_style = document.getElementById('list').style;
    list_style.cssText = 'left:-1380px;';
    $(function() {
      var container = $('#Community,#next,#prev');
      var list = $('#list');
      var prev = $('#prev');
      var next = $('#next');
      var index = 1;
      var len = 2;
      var interval = 3000;
      var timer;

      function animate(offset) {
        var left = parseInt(list.css('left')) + offset;
        if (offset > 0) {
          offset = '+=' + offset;
        } else {
          offset = '-=' + Math.abs(offset);
        }
        list.animate({
          'left': offset
        }, 500, function() {
          if (left > -1380) {
            list.css('left', -1380 * len);
          }
          if (left < (-1380 * len)) {
            list.css('left', -1380);
          }
        });
      }

      function play() {
        timer = setTimeout(function() {
          next.trigger('click');
          play();
        }, interval);
      }

      function stop() {
        clearTimeout(timer);
      }

      next.bind('click', function() {
        if (list.is(':animated')) {
          return;
        }
        animate(-1380);
      });

      prev.bind('click', function() {
        if (list.is(':animated')) {
          return;
        }
        animate(1380);
      });

      container.hover(stop, play);

      play();

    });
  }
}
go();