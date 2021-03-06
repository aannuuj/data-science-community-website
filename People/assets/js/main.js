// H1 Animation
let textWrapper = document.querySelector(".ml11 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /([^\x00-\x80]|\w)/g,
  "<span class='letter'>$&</span>"
);

//Team Members
const presidents = () => {
  let presidents = [
    {
      fname: "Avirup",
      lname: "Chattaraj",
      role: "PRESIDENT",
      img: "avirup",
      github: "severussnape123",
      linkedin: "avirupchattaraj",
    },
    {
      fname: "Hritik",
      lname: "Bhandari",
      role: "PRESIDENT",
      img: "hritik",
      github: "hritikbhandari",
      linkedin: "hritikbhandari",
    },
  ];
  $("#presidents").tmpl(presidents).appendTo("#presidents-container");
};
$(document).ready(() => {
  presidents();
});

const directors = () => {
  document.createElement("br");
  let directors = [
    {
      fname: "Anush",
      lname: "Bhatia",
      role: "TECHNICAL DIRECTOR",
      img: "anush",
      github: "anushbhatia",
      linkedin: "anush-bhatia-aa500a158",
    },
    {
      fname: "Hariom",
      lname: "Palkar",
      role: "CORPORATE DIRECTOR",
      img: "hariom",
      github: "aannuuj",
      linkedin: "hariompalkar",
    },
    {
      fname: "Takshil",
      lname: " Mittal",
      role: "EVENTS DIRECTOR",
      img: "takshil",
      github: "takshilmittal",
      linkedin: "takshil-mittal",
    },
    {
      fname: "Pratyaksh",
      lname: "Bhalla",
      role: "EXECUTIVE DIRECTOR",
      img: "pratyaksh",
      github: "pratyaksh64",
      linkedin: "pratyaksh-bhalla-96871b186",
    },
  ];
  $("#directors").tmpl(directors).appendTo("#directors-container");
};
$(document).ready(() => {
  directors();
});

const members = () => {
  document.createElement("br");
  let members = [
    {
      fname: "Abhinav",
      lname: "Verma",
      role: "WEB DEVELOPMENT",
      img: "abhinav",
      github: "abhinav565",
      linkedin: "abhinav-verma-3752701a2",
    },
    {
      fname: "Abhishek",
      lname: "Saxena",
      role: "ML",
      img: "abhishek",
      github: "saxenabhishek",
      linkedin: "abhibored",
    },
    {
      fname: "K.",
      lname: "Aditya",
      role: "ML",
      img: "aditya",
      github: "i-am-aditya",
      linkedin: "iamadityak",
    },
    {
      fname: "Akshat",
      lname: "Anand",
      role: "BLOCKCHAIN & ML",
      img: "akshat",
      github: "cipheraxat",
      linkedin: "akshatanand1999",
    },
    {
      fname: "Bhavya",
      lname: "Chhabra",
      role: "ML",
      img: "bhavya",
      github: "bhavya1600",
      linkedin: "bhavya-chhabra-1600",
    },
    {
      fname: "Devansh",
      lname: "Goswami",
      role: "MANAGER",
      img: "devansh",
      github: "",
      linkedin: "devansh-goswami-74590a187",
    },
    {
      fname: "Gayathri",
      lname: "Seetharaman",
      role: "BLOCKCHAIN & ML",
      img: "gayathri",
      github: "Gayathri621",
      linkedin: "gayathri-seetharaman-964986158",
    },
    {
      fname: "Himanshu",
      lname: "Tiwari",
      role: "CORPORATE",
      img: "himanshu",
      github: "",
      linkedin: "",
    },
    {
      fname: "Karan",
      lname: "Sharma",
      role: "CONTENT",
      img: "karan",
      github: "",
      linkedin: "",
    },
    {
      fname: "Kartik",
      lname: "Mohan",
      role: "ML",
      img: "kartik",
      github: "kartikmohan123",
      linkedin: "kartik-mohan",
    },
    {
      fname: "Rushil",
      lname: "Rai",
      role: "UI",
      img: "rushil",
      github: "rushilrai",
      linkedin: "rushil-rai-07363116a",
    },
    {
      fname: "Sampada",
      lname: "Bareja",
      role: "ANALYTICS",
      img: "sampada",
      github: "",
      linkedin: "sampada-bareja-43930818b",
    },
    {
      fname: "Shubhangi",
      lname: "Soni",
      role: "ML",
      img: "shubhangi",
      github: "ShubhangiSoni1603",
      linkedin: "shubhangi-soni",
    },
    {
      fname: "Sourjayon",
      lname: "Nath",
      role: "GRAPHIC DESIGNER",
      img: "sourjayon",
      github: "insistence-essenn",
      linkedin: "sourjayon-nath-557a43174",
    },
    {
      fname: "Tejas",
      lname: "Chintala",
      role: "ML",
      img: "tejas",
      github: "arcado10",
      linkedin: "tejas-chintala-752918188",
    },
    {
      fname: "Utkarsh",
      lname: "Chaurasia",
      role: "ML",
      img: "utkarsh",
      github: "UtkarshChaurasia",
      linkedin: "utkarsh-chaurasia-a4b76a17b",
    },
    {
      fname: "Yashvardhan",
      lname: "Jagnani",
      role: "WEB DEVELOPMENT",
      img: "yashvardhan",
      github: "jagnani73",
      linkedin: "yashvardhan-jagnani",
    },
  ];
  $("#members").tmpl(members).appendTo("#members-container");
};
$(document).ready(() => {
  members();
});

//H1 Animation
anime
  .timeline({
    loop: false,
  })
  .add({
    targets: ".ml11 .line",
    scaleY: [0, 1],
    opacity: [0.5, 1],
    easing: "easeOutExpo",
    duration: 700,
  })
  .add({
    targets: ".ml11 .line",
    translateX: [
      0,
      document.querySelector(".ml11 .letters").getBoundingClientRect().width +
        10,
    ],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100,
  })
  .add({
    targets: ".ml11 .letter",
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: "-=775",
    delay: (el, i) => 34 * (i + 1),
  })
  .add({
    targets: ".ml11",
    opacity: 1,
  });

//Navbar-Fixed
$(function () {
  "use strict";

  var navTopOffset = $("header").height() + 50;

  function navbarFixed() {
    if ($(".header-area").length) {
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= navTopOffset) {
          $(".header-area").addClass("navbar_fixed");
        } else {
          $(".header-area").removeClass("navbar_fixed");
        }
      });
    }
  }
  navbarFixed();
});
