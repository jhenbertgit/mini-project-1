/**this script is from stackoverflow.com. One of the best website
 * for the developer. :) */
$(document).ready(function () {
  //url of video in data-src attribute
  var $videoSrc;
  $(".video-btn").click(function () {
    $videoSrc = $(this).data("src");
  });
  //fetching the video source
  //   console.log($videoSrc);

  //the video will auto-play upon opening of the modal
  $("#modalLink").on("shown.bs.modal", function () {
    $("#video").attr(
      "src",
      $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
    );
    //stop the video when close
    $("#modalLink").on("hide.bs.modal", function () {
      $("#video").attr("src", $videoSrc); //you stop the video
    });
  });
});
