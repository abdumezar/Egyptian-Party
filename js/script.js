$("nav i.fa-xmark").click(function () {
  closeNav();
});

$(".openMenu").click(function () {
  openNav();
});

function closeNav() {
  let winWidth = window.matchMedia("(max-width: 600px)")
  if (winWidth.matches) {
    $(".innerNav,nav").animate({ left: "-50%", right: "110%" }, 500);
    $(".openMenu").animate({ left: "0", right: "100%" }, 500);
  } else {
    $(".innerNav,nav").animate({ left: "-25%", right: "100%" }, 500);
    $(".openMenu").animate({ left: "0", right: "85%" }, 500);
  }
}

function openNav() {
  let winWidth = window.matchMedia("(max-width: 600px)")
  if (winWidth.matches) {
    $(".innerNav,nav").animate({ left: "0", right: "50%" }, 500);
    $(".openMenu").animate({ left: "-25%", right: "100%" }, 500);
  } else {
    $(".innerNav,nav").animate({ left: "0", right: "85%" }, 500);
    $(".openMenu").animate({ left: "-20%", right: "100%" }, 500);
  }
}

$(".singer").click(function () {
  $(".singer").next().not($(this).next()).slideUp(500);
  $(this).next().slideToggle(500);
});

function countChars(word) {
  if (word.value.length < 100) {
    $(".remainingChars").text(100 - word.value.length);
  } else {
    $(".remainingChars").text("your available character finished");
  }
}

// $(".activeSlide i").removeClass("fa-chevron-down");
// $(".activeSlide i").addClass("fa-chevron-up");

// $(document).click(function(e){
//   console.log(e.target);
// });

/****************************************************************************************************/

// Set the date we're counting down to
let countDownDate = new Date("Jan 20, 2023 21:17:00").getTime();
// Update the count down every 1 second
let x = setInterval(function() {
  // Get today's date and time
  let now = new Date().getTime();
  // Find the distance between now and the count down date
  let distance = countDownDate - now;
  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  $(".days").html(days);
  $(".hours").html(hours);
  $(".minutes").html(minutes);
  $(".seconds").html(seconds);

  // If the count down is finished
  if (distance < 0) {
    clearInterval(x);
    $("#duration .row").html(`
    <div class="col-12">
      <div>
        <div class="box">
          <h2 class="text-danger"> - Expired - </h2>
        </div>
      </div>
    </div>
    `);
  }
}, 1000);