$(document).ready(function () {
  for (let i = 1; i < 48; i++) {
    let element = `
<div class="col">
  <div class="card shadow-sm">
    <img src="./img/examples/${i}.jpg" alt="">
  </div>
</div>
`;
    $("#gallery").append(element);
  }

  $("#free_estimate").on("submit", function (e) {
    e.preventDefault();
  });

  $("#header-fixer").css("paddingTop", $("nav.position-fixed").outerHeight());

  $(window).resize(function () {
    $("#header-fixer").css("paddingTop", $("nav.position-fixed").outerHeight());
  });
});
