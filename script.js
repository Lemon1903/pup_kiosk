const map = document.querySelector("image");
const svgGroups = document.querySelectorAll("g");
const popup = document.querySelector(".popup");

const AREAS = [
  {
    image: "images/areas/pup_amphi.jpg",
    name: "PUP Amphitheater",
    description:
      "This is where students come to eat their lunch that they bought or brought with them. Beware of birds pooping on your head.",
    isLoading: false,
  },
  {
    image: "images/areas/pup_waterpump.jpg",
    name: "Water Pump Facility",
    description: "This water pump facility is used by PUP to sustain the water resources needs by the campus.",
    isLoading: false,
  },
  {
    image: null,
    name: "Campus Development and Maintenance Building",
    description:
      "This is where all infrastracture planning, campus development, and the maintenance of all facilities are being checked.",
    isLoading: false,
  },
  {
    image: "images/areas/pup_catwalk.jpg",
    name: "Catwalk",
    description:
      "A very known street near the campus. Lots of gimmicks are held in this street by our fellow isko and iska especially busking! Also, this street is known for having isko and iska getting tripped over the unevent pavements of the said catwalk.",
    isLoading: false,
  },
  {
    image: "images/areas/pup_centennial_monument.jpg",
    name: "Centennial Monument",
    description: "The Centennial Monument symbolizes the commemoration of its 100th foundation.",
    isLoading: false,
  },
  {
    image: "images/areas/pup_charlie_bldg.jpg",
    name: "Charlie del Rosario Building",
    description:
      "A building built for the name itself, Charlei Del Rosario, an activist and desaparacido, and one of the first victim of the Marcos Regime.",
    isLoading: false,
  },
  {
    image: null,
    name: "East Gate",
    description: "Upon entering this gate, the nearest PUP landmark is the PUP Track and Football Oval.",
    isLoading: false,
  },
  {
    image: "images/areas/pup_flagpole.jpg",
    name: "Flag Pole",
    description: "The PUP Flag Pole, located between the PUP Northwing and the PUP Freedom Park",
    isLoading: false,
  },
  {
    image: "images/areas/pup_grandstand.jpg",
    name: "Grandstand",
    description: "The PUP Grandstand, located in front of the PUP Track and Field Oval",
    isLoading: false,
  },
  {
    image: "images/areas/pup_gym.jpg",
    name: "Gymnasium and Sports Center",
    description:
      "PUP Gymnasium and Sports Center, where the PUP Mighty Maroons train to compete for various atheletic competitions. A home and events place to any PUP related events too.",
    isLoading: false,
  },
  {
    image: "images/areas/pup_chapel.jpg",
    name: "PUP Interfaith Chapel",
    description:
      "This is where students, professors and other people come to pray. This is also used as a practice area by dancers and athletes.",
    isLoading: false,
  },
  {
    image: "images/areas/pup_lhs.jpg",
    name: "PUP Laboratory High School",
    description:
      "This building was establish in 1954. Known to be one of the top performing high schools in the country.",
    isLoading: false,
  },
  {
    image: "images/areas/pup_lagoon.jpg",
    name: "PUP Lagoon",
    description: "The landmark of PUP, people usually admire the view of the lagoon.",
    isLoading: false,
  },
  {
    image: "images/areas/pup_dome.jpg",
    name: "PUP Dome",
    description: "Located in the middle of the main building of PUP",
    isLoading: false,
  },
  {
    image: "images/areas/pup_east.jpg",
    name: "PUP East Wing",
    description:
      "Within the PUP East Wing is the PUP Admission Services, located at the ground floor of the main building.",
    isLoading: false,
  },
  {
    image: "images/areas/pup_north.jpg",
    name: "PUP North Wing",
    description: "This is where CCiS Students wait for the approval of the Dean",
    isLoading: false,
  },
  {
    image: "images/areas/pup_south.jpg",
    name: "PUP South Wing",
    description:
      "Within the PUP South Wing are the Office of the Vice President for Branches and Campuses and the Office of the University Registrar",
    isLoading: false,
  },
  {
    image: "images/areas/pup_west.jpg",
    name: "PUP West Wing",
    description: "This is where CCIS students interview PolSci students for their research.",
    isLoading: false,
  },
  {
    image: "images/areas/pup_gate.jpg",
    name: "PUP Main Gate",
    description: "This is the entrance gate to the PUP Sta. Mesa Campus.",
    isLoading: false,
  },
  {
    image: "images/areas/pup_freedom_park.jpg",
    name: "PUP Freedom Park",
    description:
      "PUP Freedom Park is an open space, where some university events are held, also a place where students can hang-out or rest.",
    isLoading: false,
  },
  {
    image: "images/areas/pup_aquino.jpg",
    name: "Ninoy Aquino Building",
    description:
      "This is where students go to get some reading materials and resources for their courses. It is also a place of rest for some students.",
    isLoading: false,
  },
  {
    image: "images/areas/pup_basketball.jpg",
    name: "PUP Basketball and Volleyball Court",
    description:
      "This is where students can play Volleyball and Basketball, and where PE Professors host their activities related to sports.",
    isLoading: false,
  },
  {
    image: "images/areas/pup_nutrition_bldg.jpg",
    name: "Nutrition and Food Science Building",
    description: "This is where the College of Nutrition and Food Science holds their classes and various activities.",
    isLoading: false,
  },
  {
    image: "images/areas/pup_oval.jpg",
    name: "Track and Footbal Oval",
    description:
      "Nearest location when entering through the East Gate, aside from the Gymnasium, this is also the training grounds of our PUP Mighty Maroons and our fellow isko and iska during practices for events",
    isLoading: false,
  },
  {
    image: null,
    name: "Physical Education Building",
    description:
      "This is where most physical education subject activites take place. Located beside the PUP Swimming Pool",
    isLoading: false,
  },
  {
    image: "images/areas/pup_pasig_river.jpg",
    name: "Pasig River",
    description: "The Pasig River also extends to PUP Sta Mesa. A scenery that can be seen beside the PUP Linear Park.",
    isLoading: false,
  },
  {
    image: "images/areas/pup_ferry.jpg",
    name: "PUP Sta. Mesa Ferry Station",
    description:
      "The PUP Sta. Mesa Ferry Station extends to all Pasig River Ferry Stations, serves as a convenient way for isko and iska to commute on their way to the campus.",
    isLoading: false,
  },
  {
    image: null,
    name: "Access Road",
    description: "The long road extending from the PUP Interfaith Chapel up to the PUP Grandstand and PUP Gazebo.",
    isLoading: false,
  },
  {
    image: "images/areas/pup_sampaguita_canteen_bldg.jpg",
    name: "Student Canteen",
    description: "A small canteen located beside the official PUP School Canteen (Sampaguita Building).",
    isLoading: false,
  },
  {
    image: "images/areas/pup_linear_park.jpg",
    name: "Linear Park",
    description: "Known as tambayan of our fellow isko and iska. Located near the University Canteen.",
    isLoading: false,
  },
  {
    image: "images/areas/pup_mural.jpg",
    name: "Mural Brass Sculpture",
    description:
      "Located beside the Main Gate. It depicts the purposeful growth of the Filipino Youth. It also signifies the role and responsibility of the youth in progress and development of the nation.",
    isLoading: false,
  },
  {
    image: "images/areas/pup_center.jpg",
    name: "PUP Obelisk and Mabini Monument",
    description:
      "This is where graduates, freshmen and people outside PUP usually take pictures for their remembrance.",
    isLoading: false,
  },
  {
    image: null,
    name: "Property Building",
    description: "The PUP Property Building is located beside the PUP Laboratory Highschool.",
    isLoading: false,
  },
  {
    image: "images/areas/pup_threepillar.jpg",
    name: "PUP Pylon",
    description:
      "This is the first thing you will see at the main gate of the PUP, three pylons. These three pylons stood for the true, the good and the beautiful.",
    isLoading: false,
  },
  {
    image: "images/areas/pup_sampaguita_canteen_bldg.jpg",
    name: "Sampaguita Building - University Canteen",
    description: "This is the official Canteen of the University.",
    isLoading: false,
  },
  {
    image: null,
    name: "PUP Gazebo",
    description: "A small gazebo located along the catwalk and access road.",
    isLoading: false,
  },
  {
    image: "images/areas/pup_pool.jpg",
    name: "PUP Swimming Pool",
    description:
      "This is where students can practice swimming and where athletes in the swimming category perfect their performance.",
    isLoading: false,
  },
  {
    image: "images/areas/pup_tennis.jpg",
    name: "PUP Tennis Court",
    description:
      "This is where students can practice playing tennis and where athletes in tennis practice for their games.",
    isLoading: false,
  },
  {
    image: "images/areas/pup_ufo.jpg",
    name: "PUP RCC Overhead Water Tank",
    description:
      "The PUP RCC Overhead Water Tank is located beside the water pump facility and the Ninoy Aquino Building.",
    isLoading: false,
  },
  {
    image: "images/areas/pup_walkway.png",
    name: "Covered Walkway",
    description: "Located at the north side of PUP beside the PUP Pylon and Main Gate.",
    isLoading: false,
  },
];

window.addEventListener("load", () => {
  document.querySelector(":root").style.setProperty("--vh", window.innerHeight / 100 + "px");
});

window.addEventListener("resize", () => {
  document.querySelector(":root").style.setProperty("--vh", window.innerHeight / 100 + "px");
});

const navContainer = document.querySelector(".nav__container");
AREAS.forEach(({ name }) => {
  const navItem = document.createElement("li");
  navItem.classList.add("nav__item");
  navItem.innerHTML = `<button>${name}</button>`;
  navContainer.appendChild(navItem);
});

const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");
menu.addEventListener("touchstart", (e) => {
  e.preventDefault();
  toggleNav();
});

nav.addEventListener("blur", hideNav);

let activeElement = null;
let activeItem = null;

const navItems = document.querySelectorAll(".nav__item");
navItems.forEach((item, index) => {
  const navButton = item.querySelector("button");
  navButton.addEventListener("click", () => {
    setActiveItem(item, false);

    activeElement = svgGroups[index].firstElementChild;
    activeElement.classList.add("active");

    const rect = activeElement.getBoundingClientRect();
    const centroid = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    };
    showPopup(centroid.x, centroid.y, index);
  });
});

svgGroups.forEach((group, index) => {
  group.addEventListener("click", (e) => {
    setActiveItem(navItems[index]);
    showPopup(e.clientX, e.clientY, index);
  });

  group.addEventListener("mousemove", (e) => {
    setActiveItem(navItems[index]);
    showPopup(e.clientX, e.clientY, index);
  });

  group.addEventListener("mouseout", () => {
    activeItem?.classList.remove("active");
    popup.style.display = "none";
  });
});

popup.addEventListener("blur", () => {
  popup.style.display = "none";
  activeItem?.classList.remove("active");
  activeElement?.classList.remove("active");
});

function hideNav() {
  nav.classList.remove("show");
  menu.classList.remove("active");
  menu.classList.replace("bx-x", "bx-menu");
}

function toggleNav() {
  if (!menu.classList.contains("active")) {
    nav.focus();
    menu.classList.replace("bx-menu", "bx-x");
  } else {
    menu.classList.replace("bx-x", "bx-menu");
  }
  menu.classList.toggle("active");
  nav.classList.toggle("show");
}

function setActiveItem(item, scrolltoView = true) {
  activeItem?.classList.remove("active");
  activeItem = item;
  activeItem.classList.add("active");

  if (scrolltoView) {
    activeItem.scrollIntoView({ block: "center" });
  }
}

const cache = new Map();
function showPopup(x, y, index) {
  const { image } = AREAS[index];

  // if no image, show the popup immediately
  if (!image) return setPopup(x, y, AREAS[index]);

  // if the image is already cached, show the popup immediately
  if (cache.has(index)) {
    return setPopup(x, y, { ...AREAS[index], image: cache.get(index) });
  }

  // show a loading spiner while the image is being loaded
  setPopup(x, y, { ...AREAS[index], image: "loading" });

  if (AREAS[index].isLoading) return;
  AREAS[index].isLoading = true;

  // fetch the image and cache it
  fetch(image)
    .then((response) => response.blob())
    .then((blob) => {
      // preload the image to prevent layout change in the popup
      const objectURL = URL.createObjectURL(blob);
      const img = new Image();
      img.src = objectURL;
      img.onload = () => {
        AREAS[index].isLoading = false;
        cache.set(index, objectURL);

        const activeItemIndex = Array.from(navItems).indexOf(activeItem);
        if (popup.style.display !== "none" && activeItemIndex === index) {
          setPopup(x, y, { ...AREAS[index], image: objectURL });
        }
      };
    });
}

function setPopup(x, y, { name, description, image }) {
  // prettier-ignore
  popup.innerHTML = `
    ${image === "loading" ? (`
      <div class="popup__spinner">
        <i class="bx bx-loader bx-md"></i>
      </div>
    `) : (
      `<img class="popup__image" src="${image ?? ""}"/>`
    )}
    <h2 class="popup__title">${name}</h2>
    <p class="popup__description">${description}</p>
  `;
  popup.style.display = "block";
  popup.focus();

  // get the width and height of the popup
  const popupWidth = popup.offsetWidth;
  const popupHeight = popup.offsetHeight;

  // calculate the x position of the popup
  const popupX = x + 20;
  if (popupX + popupWidth > window.innerWidth) {
    popup.style.left = `${popupX - popupWidth}px`;
  } else {
    popup.style.left = `${popupX}px`;
  }

  // calculate the y position of the popup
  const overallY = y + popupHeight / 2 + 1;
  const popupY = y - popupHeight / 2;
  if (popupY < 0) {
    popup.style.top = 0;
  } else if (overallY > window.innerHeight) {
    const offset = overallY - window.innerHeight;
    popup.style.top = `${popupY - offset}px`;
  } else {
    popup.style.top = `${popupY}px`;
  }
}
