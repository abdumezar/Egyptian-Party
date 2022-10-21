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

$(".singer").click(function (e) {
  $(".activeSinger i").removeClass("fa-chevron-up");
  $(".activeSinger i").addClass("fa-chevron-down");
  $(".singer").next().not($(this).next()).slideUp(500);
  $(this).next().slideToggle(500);
  $(".singer").not(this).removeClass("activeSinger");
  $(this).toggleClass("activeSinger");
  $(".activeSinger i").removeClass("fa-chevron-down");
  $(".activeSinger i").addClass("fa-chevron-up");
  console.log($(this).first())
});

// Counter down
// Set the date we're counting down to
let countDownDate = new Date("Jan 20, 2023 21:17:00").getTime();
// Update the count down every 1 second
let x = setInterval(function () {
  // Get today's date and time
  let now = new Date().getTime();
  // Find the distance between now and the count down date
  let distance = countDownDate - now;
  // Time calculations for days, hours, minutes and seconds
  $(".days").html(Math.floor(distance / (1000 * 60 * 60 * 24)));
  $(".hours").html(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  $(".minutes").html(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
  $(".seconds").html(Math.floor((distance % (1000 * 60)) / 1000));
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

// Validations
$("#emailInput").focusout(CheckMail);
$("#nameInput").focusout(CheckName);
$("#messageInput").focusout(CheckMsg);
$("#messageInput").keyup(function () {
  countChars(this);
});

function CheckMsg() {
  if ($(this).val() == "") {
    $(".invalid-feedback.fillMsg").addClass("d-block");
    $(".invalid-feedback.shortMsg").removeClass("d-block");
  } else {
    $(".invalid-feedback.fillMsg").removeClass("d-block");
    if ($(this).val().length < 5) {
      $(".invalid-feedback.shortMsg").addClass("d-block");
    } else {
      $(".invalid-feedback.shortMsg").removeClass("d-block");
    }
  }
}

function CheckName() {
  if ($(this).val().length < 3) {
    $(".invalid-feedback.shortName").addClass("d-block");
  } else {
    $(".invalid-feedback.shortName").removeClass("d-block");
  }
  if ($(this).val() == "") {
    $(".invalid-feedback.nameFill").addClass("d-block");
    $(".invalid-feedback.shortName").removeClass("d-block");
  } else {
    $(".invalid-feedback.nameFill").removeClass("d-block");
  }
}

function CheckMail() {
  let emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailReg.test($(this).val())) {
    $(".invalid-feedback.emailInvalid").addClass("d-block");
  } else {
    $(".invalid-feedback.emailInvalid").removeClass("d-block");
  }
  if ($(this).val() == "") {
    $(".invalid-feedback.emailFill").addClass("d-block");
    $(".invalid-feedback.emailInvalid").removeClass("d-block");
  } else {
    $(".invalid-feedback.emailFill").removeClass("d-block");
  }
}

function countChars(word) {
  if (word.value.length < 100) {
    $(".remainingChars").text(100 - word.value.length);
  } else {
    $(".remainingChars").text("your available character finished");
  }
}
