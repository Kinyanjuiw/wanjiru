const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle");
navClose = document.getElementById("nav-close");
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*======================= ACCORD SKILLS ======================*/

const skillsContent = document.getElementsByClassName("skills__content"),
  skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }
  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

/*============== Qualification Skills ===============*/

/*const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')
tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)
        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')
        tab.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})      
*/

/*======================= Services Modal ===================*/
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

/*======================= Portfolio Swiper ===================*/
var swiper = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL up ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme,
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme,
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
var video = document.getElementById("my.Video");
document.getElementById("playBtn").addEventListener("click", function() {
    
    if (video.style.display === "none") {
        video.style.display = "block";
        video.play();
    }
});
window.addEventListener("unload", function() {
    video.pause();
    video.style.display = "none";

});

window.addEventListener("beforeunload", function() {
    video.pause();
    video.style.display = "none";
});

document.querySelectorAll('.playBtn').forEach(button => {
    button.addEventListener('click', function() {
        const videoId = button.dataset.videoId;
        const video = document.getElementById(videoId);

        // Pause all videos and hide them
        document.querySelectorAll('video').forEach(video => {
            video.pause();
            video.style.display = 'none';
        });

        // Show and play the selected video
        if (video) {
            video.style.display = 'block';
            video.play();
        }
    });
const video = document.getElementById("myVideo");
const playButton = document.getElementById("playButton");
playButton.addEventListener("click", () => {
  video.play();
});
  });
    function playVideo() {
        // Replace 'YOUR_GOOGLE_DRIVE_VIDEO_LINK' with the actual shareable link of your Google Drive video
        var videoLink = 'https://drive.google.com/file/d/1pbV7NKgL9hyllCwmzOs876Fd8kHhySgX/view?usp=drive_link';
        
        // Generate the embed URL
        var embedUrl = 'https://drive.google.com/file/d/' + getDriveFileId(videoLink) + '/preview';
        
        // Create an iframe element
        var iframe = document.createElement('iframe');
        iframe.setAttribute('src', embedUrl);
        iframe.setAttribute('width', '560');
        iframe.setAttribute('height', '315');
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allowfullscreen', '');
        
        // Append the iframe to the video container
        document.getElementById('videoContainer').appendChild(iframe);
    }

    // Function to extract the file ID from the Google Drive shareable link
    function getDriveFileId(url) {
        var fileId = '';
        if (url.indexOf('drive.google.com') !== -1) {
            fileId = url.match(/[-\w]{25,}/);
        }
        return fileId;
    }
    function openVideo() {
        // Replace 'YOUR_GOOGLE_DRIVE_VIDEO_LINK' with the actual shareable link of your Google Drive video
        var videoLink = 'https://drive.google.com/file/d/1pbV7NKgL9hyllCwmzOs876Fd8kHhySgX/view?usp=drive_link';
        
        // Open the video link in a new tab
        window.open(videoLink, '_blank');
    }

    function openVideo() {
        // Replace 'YOUR_GOOGLE_DRIVE_VIDEO_LINK' with the actual shareable link of your Google Drive video
        var videoLink = 'https://drive.google.com/file/d/1VLPiReirjHJGNS-N9rPz-_4DXiBP0AXm/view?usp=drive_link';
        
        // Open the video link in a new tab
        window.open(videoLink, '_blank');
    }

    function openVideo() {
        // Replace 'YOUR_GOOGLE_DRIVE_VIDEO_LINK' with the actual shareable link of your Google Drive video
        var videoLink = 'https://drive.google.com/file/d/1iqy0LsqIsDjVPJWq0lNbwy6cmHCuHFav/view?usp=drive_link';
        
        // Open the video link in a new tab
        window.open(videoLink, '_blank');
    }