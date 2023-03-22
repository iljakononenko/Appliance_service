$(document).ready(function () {
  for (let i = 1; i < 47; i++) {
    let element = `
<div class="col">
  <div class="card shadow-sm">
    <img src="./img/examples/${i}.jpg" alt="">
  </div>
</div>
`;
    $("#gallery").append(element);
  }

  $(".owl-carousel").owlCarousel({
    loop: true,
    stagePadding: 60,
    dots: true,
    dotsEach: 2,
    responsive: {
      0: {
        items: 1,
        stagePadding: 10,
        dots: false,
      },
      768: {
        items: 1,
        stagePadding: 60,
      },
      1024: {
        items: 1,
        stagePadding: 100,
      },
      1200: {
        items: 4,
        stagePadding: 40,
      },
    },
  });

  const myModalAlternative = new bootstrap.Modal("#modal", {});

  $(".service-svg-wrapper").on("click", function () {
    // console.log($(this).attr("data-service-type"));
    $("#notes").val(
      "Hi, I need help with my " + $(this).attr("data-service-type")
    );
    $("html, body").animate(
      {
        scrollTop: $("#contact_form").offset().top,
      },
      0
    );
  });

  $("#free_estimate").on("submit", function (e) {
    e.preventDefault();
    myModalAlternative.show();

    let name = $("#name").val();
    let phone = $("#phone").val();
    let zip = $("#zip").val();
    let notes = $("#notes").val();

    $("#name").val("");
    $("#phone").val("");
    $("#zip").val("");
    $("#notes").val("");

    Email.send({
      SecureToken: "1bd4ec59-a493-466f-931a-39ea36c9b5cb",
      To: "oemservice2023@gmail.com",
      From: "iljakononenko3@gmail.com",
      Subject: "New Order!",
      Body: `Name: ${name}<br>Phone: ${phone}<br>Zip: ${zip}<br>Notes: ${notes}`,
    }).then((message) => console.log(message));
  });

  $("#header-fixer").css("paddingTop", $("nav.fixed-top").outerHeight());

  $(window).resize(function () {
    $("#header-fixer").css("paddingTop", $("nav.fixed-top").outerHeight());
  });
});

// data-bs-target="#modal" data-bs-toggle="modal"
