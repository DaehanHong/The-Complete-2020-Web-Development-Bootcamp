
$("button").on("click", function() {
  $("h1").slideUp().slideDown().animate({opacity: 0.5});
});

// // margin: "20%" etc.
// $("button").on("click", function() {
//   $("h1").animate({opacity: 0.5});
// });

// // slideUp, slideDown
// $("button").on("click", function() {
//   $("h1").slideToggle();
// });

// //fadeOut, fadeIn
// $("button").on("click", function() {
//   $("h1").fadeToggle();
// });

// //if user want to hide only, change toggle to hide (show only, show)
// $("button").on("click", function() {
//   $("h1").toggle();
// });

// //instead of mouseover, we can use click etc.
// $("h1").on("mouseover", function() {
//   $("h1").css("color", "purple");
// });

// //intead of keypress, it has on, and click too
// $(document).keypress(function(event) {
//   $("h1").text(event.key);
// });

// $("button").click(function() {
//   $("h1").css("color", "purple");
// });

// for (var i = 0; i < 5; i++ ) {
//   document.querySelectorAll("button")[i].addEventListener("click", function() {
//     document.querySelector("h1").style.color = "purple";
//   });
// }

// $("h1").click(function () {
//   $("h1").css("color", "purple");
// });

// $("a").attr("href", "https://www.yahoo.com");

// console.log($("img").attr("src"));

// $("h1").addClass("big-title margin-50");

// $("h1").text("Bye");
//
// $("button").html("<em>Hey</em>");

// $("button").text("Don't Click Me");
