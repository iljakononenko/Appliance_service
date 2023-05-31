let opinions = [
  {
    positive: "Professionalism, Punctuality, Quality, Responsiveness, Value",
    text: "This young man was early for the appointment, very knowledgeable and proficient. I highly recommend this service!",
    service: "Dishwasher repair",
    author: "Phyllis Owen",
  },
  {
    positive: "",
    text: "Great customer service!! David was so friendly and professional!! Definitely recommend this company and will be using them in the future!!!",
    service: "",
    author: "Amanda Hinkle",
  },
  {
    positive: "Professionalism, Punctuality, Quality, Responsiveness, Value",
    text: "David was awesome repairing my washer!! When I called they were so responsive got in right away and he showed up exactly on time was very Professional and did a great job! Would definitely use them for any services in the future!",
    service: "",
    author: "Maitee Miles Artist/Owner",
  },
  {
    positive: "Professionalism, Punctuality, Quality, Responsiveness",
    text: "David was prompt, very professional and extremely knowledgeable and nice. Thank you for your service. ",
    service: "Washer/dryer repair",
    author: "Richard Reid",
  },
  {
    positive: "Professionalism, Punctuality, Quality, Responsiveness, Value",
    text: "David, was professional and very knowledgeable he repair our freezer. Refrigerator  and dishwasher. In a timely manner. We would recommend and use SmartWay again! Thank you David!",
    service: "Refrigerator repair, Dishwasher repair, Freezer repair",
    author: "Eugenia Abohasira",
  },
  {
    positive: "Professionalism, Punctuality, Quality",
    text: "Very professional company.  David was on time, courteous, and explained what he was doing and why.  He quickly assessed the problem.  This is the 3rd time I've used this company and would definitely use them again.",
    service: "Stove, cooktop & oven repair",
    author: "Bobbie Williams",
  },
  {
    positive: "Professionalism, Punctuality, Quality, Responsiveness, Value",
    text: "David the Technician was very professional and knowledgeable about what he was doing. He also explained the issue that I was having as he worked on my dishwasher. I will definitely use this company again . Great job David my husband and I appreciate the service you provided us today.☺️",
    service: "Washing machine repair",
    author: "Lisa Caruth",
  },
  {
    positive: "",
    text: "On time polite and did a great job. David was very personal and professional we'll definitely use this company again. ",
    service: "Dishwasher repair",
    author: "Kathy Saffell",
  },
  {
    positive: "",
    text: "David is the man! Very honest and on time! Took his time and answered all my questions! Very very happy with their services! Very reasonable and trustworthy! I would choose them again every time! Thank you!",
    service: "",
    author: "Mark S",
  },
  {
    positive: "Professionalism, Punctuality",
    text: "David figured out the issue in about 15 minutes and returned the next day with parts and had it done in about 20 minutes. Quick and easy.",
    service: "Washer/dryer repair",
    author: "Kevin Terry",
  },
  {
    positive: "Professionalism, Punctuality, Quality, Responsiveness, Value",
    text: "David did an excellent job replacing our ice maker. Very professional, knowledgeable and courteous. I would highly recommend David and Smartway for your appliance repair needs. JA. ",
    service: "Refrigerator/freezer repair",
    author: "James Alexander",
  },
  {
    positive: "Professionalism, Punctuality, Responsiveness",
    text: "David was very thorough in finding the issue with my machine. He answered any questions I had about the repair and explained the process to me. He is an asset to your company.",
    service: "Washing machine repair",
    author: "Pennie Grayson",
  },
  {
    positive: "Professionalism, Punctuality, Quality, Responsiveness, Value",
    text: "David went directly to the problem, ordered the correct parts and installed them when they arrived. He kept me informed through the whole process. We will use them again on all our broken appliances.",
    service: "Refrigerator/freezer repair",
    author: "Gary Turley",
  },
  {
    positive: "",
    text: "Thank you  David",
    service: "",
    author: "Pinar Temiz",
  },
  {
    positive: "",
    text: "DAvid did an excellent job fixing our refrigerator. He was neat, professional, and quick.",
    service: "Refrigerator/freezer repair",
    author: "Barry Hickey",
  },
  {
    positive: "Professionalism, Punctuality, Quality, Responsiveness, Value",
    text: "David was punctual, thorough and honest. Nice to know there are still good workmen out there!",
    service: "Washing machine repair",
    author: "Laura P",
  },
  {
    positive: "",
    text: "David came out promptly and diagnosed the problem. He gave me a quote and the approximate time he would return with the necessary parts to fix the problem. He returned on time texting me on his on his way back. He fixed the problem plus another issue he saw. He was very knowledgeable and professional. I am very satisfied with the work and service.",
    service: "",
    author: "Donte Jones",
  },
  {
    positive: "Professionalism, Punctuality, Quality, Responsiveness, Value",
    text: "Great experience! Very quick response and David, the tech was on time. Our washer was fixed  for a reasonable fee on the day I called. I would use SmartWay again and recommend them to others.",
    service: "Washer/dryer repair",
    author: "Neal Beaty",
  },
];

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

  for (let { positive, text, service, author } of opinions) {
    let opinion_element = `
  <div class="opinion-box text-center">
          <div class="opinion-stars d-flex justify-content-center" style="height: 22px; margin-bottom: 16px;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.44 19"><polygon fill="#fdd663" points="10,15.27 16.18,19 14.54,11.97 20,7.24 12.81,6.63 10,0 7.19,6.63 0,7.24 5.46,11.97 3.82,19"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.44 19"><polygon fill="#fdd663" points="10,15.27 16.18,19 14.54,11.97 20,7.24 12.81,6.63 10,0 7.19,6.63 0,7.24 5.46,11.97 3.82,19"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.44 19"><polygon fill="#fdd663" points="10,15.27 16.18,19 14.54,11.97 20,7.24 12.81,6.63 10,0 7.19,6.63 0,7.24 5.46,11.97 3.82,19"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.44 19"><polygon fill="#fdd663" points="10,15.27 16.18,19 14.54,11.97 20,7.24 12.81,6.63 10,0 7.19,6.63 0,7.24 5.46,11.97 3.82,19"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.44 19"><polygon fill="#fdd663" points="10,15.27 16.18,19 14.54,11.97 20,7.24 12.81,6.63 10,0 7.19,6.63 0,7.24 5.46,11.97 3.82,19"/></svg>
          </div>
          ${
            positive
              ? "<p><span class='fw-bold'>Positive: </span>" + positive + "</p>"
              : ""
          }
          <p>${text}</p>
          ${
            service
              ? "<p><span class='fw-bold'>Service: </span>" + service + "</p>"
              : ""
          }
          <p class="fw-bold">${author}</p>
        </div>
        `;
    $("#opinions").append(opinion_element);
  }

  $("#opinions").owlCarousel({
    loop: true,
    stagePadding: 60,
    dots: true,
    dotsEach: 2,
    responsive: {
      0: {
        items: 1,
        stagePadding: 0,
      },
      768: {
        items: 1,
        stagePadding: 0,
      },
      1024: {
        items: 1,
        stagePadding: 0,
      },
      1200: {
        items: 4,
        stagePadding: 0,
      },
    },
  });

  $("#gallery").owlCarousel({
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

  $(".book_online_button").on("click", function (e) {
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
    let url = `https://api.telegram.org/bot${bot_token}/sendMessage?chat_id=${group_chat_id}&text=${message_text}&parse_mode=html`;

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
