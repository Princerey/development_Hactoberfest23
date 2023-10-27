$(function () {
  function playAnimation() {
    var bg = $("#bg"),
      bgNum = 0;
    document.getElementById("audio").play();
    const marvelInterval = setInterval(function () {
      bgNum = (bgNum % 20) + 1;
      bg.css(
        "background-image",
        `url(https://himalayasingh.github.io/marvel/img/img-${bgNum}.jpg)`
      );
    }, 100);

    setTimeout(function () {
      clearInterval(marvelInterval);
    }, 12000);
  }

  function initPlay() {
    $("#loader img").fadeOut(100);
    $("#a").html("▶<b>PLAY ANIMATION (turn ON sound)</b>").addClass("cursor");
    $("#a").on("click", function () {
      $("#loader").fadeOut(100);
      playAnimation();
    });
  }

  $("#hidden").imagesLoaded({ background: true }, function () {
    setTimeout(function () {
      var audio = document.getElementById("audio");
      audio.oncanplay = function () {
        initPlay();
      };

      if (audio.readyState > 3) {
        initPlay();
      }
    }, 1000);
  });
});
