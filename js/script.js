$(document).ready(function () {
  for (let i = 1; i < 47; i++) {
    let element = `
<div class="col">
  <div class="card shadow-sm">
    <img src="./img/examples/${i}.jpg" loading="lazy" alt="">
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
        scrollTop: $("#contact_form").offset().top - 60,
      },
      0
    );
  });

  $("#navigation-links .nav-item a").on("click", function (e) {
    e.preventDefault();
    let target = $(this).attr("href");

    let additional_padding = 0;
    if (target == "#booking") {
      additional_padding = 130;
    } else if (target == "#contact_form") {
      additional_padding = 60;
    }

    if (window.innerWidth < 768) {
      additional_padding += 150;
      if (target == "#addresses") {
        additional_padding += 60;
      } else if (target == "#contact_form") {
        additional_padding += 100;
      }
    }

    $("html, body").animate(
      {
        scrollTop: $(target).offset().top - additional_padding,
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

    // Email.send({
    //   SecureToken: "1bd4ec59-a493-466f-931a-39ea36c9b5cb",
    //   To: "oemservice2023@gmail.com",
    //   From: "iljakononenko3@gmail.com",
    //   Subject: "New Order!",
    //   Body: `Name: ${name}<br>Phone: ${phone}<br>Zip: ${zip}<br>Notes: ${notes}`,
    // }).then((message) => console.log(message));

    let message_text = `<b>Name</b>: ${name} %0A<b>Phone</b>: ${phone} %0A<b>Zip</b>: ${zip} %0A<b>Notes</b>: ${notes}`;

    let bot_token = "1347013159:AAGLdwspQRZo7zo2KFJEyCZLW1Wnl0jQixA";
    let group_chat_id = "-803573574";
    let chat_id = "647214244";
    let url = `https://api.telegram.org/bot${bot_token}/sendMessage?chat_id=${chat_id}&text=${message_text}&parse_mode=html`;

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    // whatsapp post

    // let whatsAppMessageBody = {
    //   messaging_product: "whatsapp",
    //   to: "48692891846",
    //   type: "template",
    //   template: {
    //     name: "hello_world",
    //     language: {
    //       code: "en_US",
    //     },
    //   },
    // };

    // let url = "https://graph.facebook.com/v16.0/101027519659635/messages";
    // let header = "Content-Type: application/json";
    // let authorization =
    //   "Bearer EAAJVKX0HAuMBALlRvXjwqgDf9qkHxSOdDtCPEw1n9KPqoUZARHuesFM4BQjaMFoJEXFTwpNUDB36Y3IZCygfjz22mtw8OZAbGIhpjwcQ4IwvmFQuzhE9VIRCIasOrq63Tf4whpR0XImDAozxFU6iCqiimQ4oX7X1fJgGBZB6RfqFJevbjlnMHxZBdKXRfXyPdDidr56drPgZDZD";

    // let version = "16.0";
    // let phone_number_from = "101027519659635";
    // let phone_number_to = "48692891846";

    // fetch(url, {
    //   method: "POST",
    //   body: JSON.stringify(whatsAppMessageBody),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //     Authorization: authorization,
    //   },
    // });

    // end of sending request
  });

  $("#header-fixer").css("paddingTop", $("nav.fixed-top").outerHeight());

  $(window).resize(function () {
    $("#header-fixer").css("paddingTop", $("nav.fixed-top").outerHeight());
  });
});

// data-bs-target="#modal" data-bs-toggle="modal"

/*
New order - Appliance repair
Name: {{1}}
Phone: {{2}}
Zip: {{3}}
Notes: {{4}}

*/
