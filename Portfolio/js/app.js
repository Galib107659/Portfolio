// Elements
const header = document.querySelector("header");
const nav = document.querySelector(".navbar");
const linksContainer = document.querySelector(".links");
const links = document.querySelectorAll(".link");
const toggleBtn = document.querySelector(".toggle");
const app = document.getElementById("app");
const projectsContainer = document.querySelector(".projects");
const leftSectionsAll = document.querySelectorAll(".left");
const downSectionsAll = document.querySelectorAll(".down");
const rightSectionsAll = document.querySelectorAll(".right");

//Projects Data
const projects = [
  // {
  //   title: "Graphics Works",
  //   description:
  //     "Click the link below to see all my graphics works",
  //   image: "./images/graphics.jpg",
  //   tools: "Photoshop, Illustrator",
  //   liveLink: "https://go.shakibbinkabir.me/portfolio",
  // },
  // {
  //   title: "Today Fresh Fish",
  //   description:
  //     "E-Commerce Website for Today Fresh Fish",
  //   image: "./images/fish.jpg",
  //   tools: "html, css, php, laravel",
  //   liveLink: "https://todayfreshfish.com/",
  // },
  // {
  //   title: "Karigori Shop",
  //   description:
  //     "E-Commerce website for Karigori Shop",
  //   image: "./images/karigori-shop.jpg",
  //   tools: "html, css, php, laravel",
  //   liveLink: "https://karigori.shop",
  // },
  // {
  //   title: "Laura Ashley BD",
  //   description:
  //     "E-Commerce website for Laura Ashley BD",
  //   image: "./images/laura-ashley.jpg",
  //   tools: "html, css, php, laravel",
  //   liveLink: "https://lauraashleybd.com",
  // },
  // {
  //   title: "Clienteno",
  //   description:
  //     "Company website for Clienteno",
  //   image: "./images/clienteno.jpg",
  //   tools: "html, css, php, laravel",
  //   liveLink: "https://clienteno.org",
  // },
  // {
  //   title: "Management Panel",
  //   description:
  //     "Management Panel for Clienteno",
  //   image: "./images/panel.jpg",
  //   tools: "html, css, php, laravel",
  //   liveLink: "https://panel.clienteno.org",
  // },
  // {
  //   title: "Investment Platform",
  //   description:
  //     "(Unused)Investment Platform Website",
  //   image: "./images/investment.jpg",
  //   tools: "html, css, php, laravel",
  //   liveLink: "https://client1.shakibbinkabir.me",
  // },
  // {
  //   title: "Clienteno Chats",
  //   description:
  //     "Social Chatting Website for Clienteno",
  //   image: "./images/chat.jpg",
  //   tools: "html, css, php, laravel",
  //   liveLink: "https://dreamdiscount.xyz/chat",
  // },
];

// Application architechture
class App {
  constructor() {
    this._revealSection();
    this._stickyNavbar();
    this._activeLinks();
    this._toggleMobileNav();
    this._tagCloud();
    this._typeWriter();
    this._nameBounce();
    this._renderProjects();
  }

  //  Reveal Section
  _revealSection() {
    // Reveal Down
    function revealSectionDown(entries, observer) {
      const [entry] = entries;
      if (!entry.isIntersecting) return;
      entry.target.classList.add("animDown");
      observer.unobserve(entry.target);
    }

    const downSectionObserver = new IntersectionObserver(revealSectionDown, {
      root: null,
      threshold: 0,
      rootMargin: "0px",
    });

    downSectionsAll.forEach((section) => {
      downSectionObserver.observe(section);
      section.classList.remove("animDown");
    });

    // Reveal Left
    function revealSectionLeft(entries, observer) {
      const [entry] = entries;
      if (!entry.isIntersecting) return;
      entry.target.classList.add("animLeft");
      observer.unobserve(entry.target);
    }

    const sectionObserver = new IntersectionObserver(revealSectionLeft, {
      root: null,
      threshold: 0,
      rootMargin: "250px",
    });

    leftSectionsAll.forEach((section) => {
      sectionObserver.observe(section);
      section.classList.remove("animLeft");
    });

    //Reveal Right
    function revealSectionRight(entries, observer) {
      const [entry] = entries;
      if (!entry.isIntersecting) return;
      entry.target.classList.add("animRight");
      observer.unobserve(entry.target);
    }

    const rightSectionObserver = new IntersectionObserver(revealSectionRight, {
      root: null,
      threshold: 0,
      rootMargin: "250px",
    });

    rightSectionsAll.forEach((section) => {
      rightSectionObserver.observe(section);
      section.classList.remove("animRight");
    });
  }

  // Sticky navbar
  _stickyNavbar() {
    const navHight = nav.getBoundingClientRect().height;

    const navObs = new IntersectionObserver(this._stickyOparation, {
      root: null,
      threshold: 0,
      rootMargin: `${-navHight}px`,
    });

    navObs.observe(header);
  }

  _stickyOparation(entries) {
    const entry = entries[0];
    if (!entry.isIntersecting) header.classList.add("sticky");
    else header.classList.remove("sticky");
  }

  // Link activate
  _activeLinks() {
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        const link = e.target;
        const siblings = link.closest(".links").querySelectorAll(".link");
        siblings.forEach((sibling) => {
          if (sibling === link) sibling.style.color = "rgb(20, 184, 166)";
          else sibling.style.color = "rgb(209, 213, 219)";
        });
      });
    });
  }

  // Toggle mobile navbar
  _toggleMobileNav() {
    toggleBtn.addEventListener("click", () => {
      toggleBtn.classList.contains("toggle-close")
        ? this._disappearMobileNav()
        : this._appearMobileNav();
    });
  }

  _disappearMobileNav() {
    toggleBtn.classList.remove("toggle-close");
    linksContainer.style.animation = "mobileNavDisappear 0.55s 1";
    setTimeout(() => {
      linksContainer.classList.remove("links-open");
    }, 500);
    document.querySelector("html").style.overflow = "visible";
  }

  _appearMobileNav() {
    toggleBtn.classList.add("toggle-close");
    linksContainer.classList.add("links-open");
    linksContainer.style.animation = "mobileNavAppear 0.5s 1";
    document.querySelector("html").style.overflow = "hidden";
  }

  //Skils Globe tagCloud
  _tagCloud() {
    const tags = [
      "Postman",
      "JMeter",
      "API Testing",
      "MySQL",
      "Graphics Design",
      "Analytical and problem-solving",
      "Attention to detail",
      "Communication skills",
      "Testing skills",
      "Test Documentation skills",
      "Coding",
      "Version control",
      "Collaboration",

    ];
    TagCloud(".content", tags, {
      radius: 380,
      maxSpeed: "fast",
      initSpeed: "normal",
      direction: 135,
      keep: true,
    });
  }

  //Type Writer
  _typeWriter() {
    const typeWriter = new Typewriter(app, {
      loop: true,
    });
    typeWriter
      .typeString("Software Quality Assurance Engineer")
      .pauseFor(1500)
      // .deleteChars(18)
      // .typeString("Web Developer")
      // .pauseFor(1500)
      .start();
  }

  //Name bouncing effect
  _nameBounce() {
    const nameContainer = document.querySelector(".full-name");
    const fullName = "Abdullah Al Galib";
    for (const letter of fullName) {
      const html = `<span class="ch">${letter}</span>`;
      nameContainer.insertAdjacentHTML("beforeend", html);
    }
    const allCh = document.querySelectorAll(".ch");
    allCh.forEach((ch) => {
      ch.addEventListener("mouseover", function (e) {
        if (!e.target.classList.contains("bounce"))
          e.target.classList.add("bounce");
        else e.target.classList.remove("bounce");
      });
    });
  }

  // Projects rendering
  _renderProjects() {
    projects.forEach((project) => {
      const html = `<div class="project">
          <div class="project-img">
            <img src="${project.image}" alt="${project.title}">
          </div>
          <h3 class="project-title">
          ${project.title}
          </h3>
          <p class="project-details">
            ${project.description}
          </p>
          <p class="project-tools">
            Tools: <span>${project.tools}</span>
          </p>
          <div class="project-btns">
            <a href="${project.liveLink}" target="_blank">Live Site →</a>
          <!---  <a href="${project.githubLink}" target="_blank">GitHub →</a> ---!>
          </div>
        </div>`;
      projectsContainer.insertAdjacentHTML("afterbegin", html);
    });
  }
}

const myApp = new App();
