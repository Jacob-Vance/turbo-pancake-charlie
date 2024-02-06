$(document).ready(function(){
  
  console.log("Top: " + $("img").position().top + "Left: " + $("img").position().left);
  
  $("img").draggable({
    stop: function () {
      console.log("stopping???");

      let dogeLeft = $("img").position().left;

      if (dogeLeft > 100, dogeLeft <= 1500) {
        console.log(dogeLeft);

        $("p").text("Keep going, you're almost there.");

      }
        if (dogeLeft > 1500) {
        console.log(dogeLeft);

        $("p").text("Wow, you did it. You Win.");

      }
    },
    axis: "x"
  });
  $('#restartDoge').click(
    function(){

      window.location.reload();

    }
  )

});
