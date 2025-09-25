$(document).ready(function () {

  $('#solo').click(function () {
    $(".solo1").html("<h4>SOLE OBJECT</h4><p>To provide assistance to the needy & deserving students to acquire better & higher education.</p>");
      // elements.addClass('active');
  });
  $('#vision').click(function () {
    $(".solo1").html("<h4>VISION</h4><p>To encourage and inspire the young Saraswat students to excel in good education and to make it the driving force to succeed in life. There by, to enhance quality of life and become responsible members of the Society.</p>");
      // elements.addClass('active');
  });
  $('#mission').click(function () {
    $(".solo1").html("<h4>MISSION STATEMENT</h4><p>To deliver DONOR’s trust where it is most needed in time , uninterruptedly at minimum cost. Where the mind is without fear and the head is held high; Where knowledge is free; Where the world has not been broken up into fragments by narrow domestic walls; Where words come out from the depth of truth; Where tireless striving stretches its arms towards perfection; Where the clear stream of reason has not lost its way into the dreary desert sand of dead habit; Where the mind is led forward by thee into ever-widening thought and action; Into that heaven of freedom, my Father, let my country awake.GITANJALI Rabindranath Tagore</p>");
      // elements.addClass('active');
  });

  var elements = $('#modalOverlay, #menuModal');
  $('.menu-icon').click(function () {
    // alert(123);
    elements.addClass('active');
  });

  $('#closeModal').click(function () {
    elements.removeClass('active');
  });

  // modal
  // var elements = $('#solo');

  // $('.solo1').click(function () {
  //   alert(5);
  //   elements.addClass('active');
  // });

  // $('#closeModal').click(function () {
  //   elements.removeClass('active');
  // });


  // counter start
  (function ($) {
    $.fn.countTo = function (options) {
      options = options || {};

      return $(this).each(function () {
        // set options for current element
        var settings = $.extend(
          {},
          $.fn.countTo.defaults,
          {
            from: $(this).data("from"),
            to: $(this).data("to"),
            speed: $(this).data("speed"),
            refreshInterval: $(this).data("refresh-interval"),
            decimals: $(this).data("decimals")
          },
          options
        );

        // how many times to update the value, and how much to increment the value on each update
        var loops = Math.ceil(settings.speed / settings.refreshInterval),
          increment = (settings.to - settings.from) / loops;

        // references & variables that will change with each update
        var self = this,
          $self = $(this),
          loopCount = 0,
          value = settings.from,
          data = $self.data("countTo") || {};

        $self.data("countTo", data);

        // if an existing interval can be found, clear it first
        if (data.interval) {
          clearInterval(data.interval);
        }
        data.interval = setInterval(updateTimer, settings.refreshInterval);

        // initialize the element with the starting value
        render(value);

        function updateTimer() {
          value += increment;
          loopCount++;

          render(value);

          if (typeof settings.onUpdate == "function") {
            settings.onUpdate.call(self, value);
          }

          if (loopCount >= loops) {
            // remove the interval
            $self.removeData("countTo");
            clearInterval(data.interval);
            value = settings.to;

            if (typeof settings.onComplete == "function") {
              settings.onComplete.call(self, value);
            }
          }
        }

        function render(value) {
          var formattedValue = settings.formatter.call(self, value, settings);
          $self.html(formattedValue);
        }
      });
    };

    $.fn.countTo.defaults = {
      from: 0, // the number the element should start at
      to: 0, // the number the element should end at
      speed: 1000, // how long it should take to count between the target numbers
      refreshInterval: 100, // how often the element should be updated
      decimals: 0, // the number of decimal places to show
      formatter: formatter, // handler for formatting the value before rendering
      onUpdate: null, // callback method for every time the element is updated
      onComplete: null // callback method for when the element finishes updating
    };

    function formatter(value, settings) {
      return value.toFixed(settings.decimals);
    }
  })(jQuery);

  jQuery(function ($) {
    // custom formatting example
    $(".count-number").data("countToOptions", {
      formatter: function (value, options) {
        return value
          .toFixed(options.decimals)
          .replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
      }
    });

    // start all the timers
    $(".timer").each(count);

    function count(options) {
      var $this = $(this);
      options = $.extend({}, options || {}, $this.data("countToOptions") || {});
      $this.countTo(options);
    }
  });
  // counter end

  // top-menu
  var btn = $('.scroll-top-arrow');

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '500');
  });

});