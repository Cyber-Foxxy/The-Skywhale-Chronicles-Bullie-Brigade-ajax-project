$.fn.steamGlow = function () {
  return this.each(function (i) {

    $(this)
      .hide()
      .delay(i * 200)
      .fadeIn(600)
      .css({
        "box-shadow": "0 0 10px rgba(255, 170, 0, 0.2)",
        "transition": "0.3s"
      })
      .hover(
        function () {
          $(this).css({
            "box-shadow": "0 0 25px rgba(255, 170, 0, 0.8)",
            "transform": "scale(1.03)"
          });
        },
        function () {
          $(this).css({
            "box-shadow": "0 0 10px rgba(255, 170, 0, 0.2)",
            "transform": "scale(1)"
          });
        }
      );

  });
};
