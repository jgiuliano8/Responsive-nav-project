"use strict";

document.querySelector(".hamburger").addEventListener("click", function () {
  const nav = document.querySelector("nav");
  nav.classList.add("nav-open");
});

document.querySelector(".close-nav").addEventListener("click", function () {
  const nav = document.querySelector("nav");
  nav.classList.remove("nav-open");
});

let mediaQueryList = window.matchMedia("(min-width: 675px)");

function clearNav(mql) {
  if (mql.matches) {
    // If media query matches
    const navigation = document.querySelector("nav");
    navigation.classList.remove("nav-open");
  }
}

function openMenu(subMenu) {
  const subMenuElement = document.querySelector(subMenu);
  subMenuElement.classList.add("nav-open");
}

function closeMenu(subMenu) {
  const subMenuElement = document.querySelector(subMenu);
  subMenuElement.classList.remove("nav-open");
}

function toggleListeners(mql) {
  const announcementMenu = document.getElementById("announcements");
  const educationMenu = document.getElementById("education");
  const servicesMenu = document.getElementById("services");
  const supportMenu = document.getElementById("support");
  if (mql.matches) {
    announcementMenu.addEventListener("click", function () {
      openMenu(".sub-menu-1");
    });
    educationMenu.addEventListener("click", function () {
      openMenu(".sub-menu-2");
    });
    servicesMenu.addEventListener("click", function () {
      openMenu(".sub-menu-3");
    });
    supportMenu.addEventListener("click", function () {
      openMenu(".sub-menu-4");
    });
  } else {
    announcementMenu.removeEventListener("click", function () {
      openMenu(".sub-menu-1");
    });
    educationMenu.removeEventListener("click", function () {
      openMenu(".sub-menu-1");
    });
    servicesMenu.removeEventListener("click", function () {
      openMenu(".sub-menu-1");
    });
    supportMenu.removeEventListener("click", function () {
      openMenu(".sub-menu-1");
    });
    closeMenu(".sub-menu-1");
    closeMenu(".sub-menu-2");
    closeMenu(".sub-menu-3");
    closeMenu(".sub-menu-4");
  }
}

clearNav(mediaQueryList); // Call listener function at run time

mediaQueryList.addEventListener("change", clearNav); // Attach listener function on state changes

let deviceIsSmall = window.matchMedia("(max-width: 675px)");

toggleListeners(deviceIsSmall);

deviceIsSmall.addEventListener("change", toggleListeners); // Attach listener function on state changes
