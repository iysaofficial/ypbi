// Import CSS
import "../css/Navigation.css";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const NavigationComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle("hidden-scrolling");
  };

  const collapseSubMenu = () => {
    const activeSubMenu = document.querySelector(
      ".menu-item-has-children.active .sub-menu"
    );
    activeSubMenu.removeAttribute("style");
    activeSubMenu.parentElement.classList.remove("active");
  };

  const resizeFix = () => {
    if (isOpen) {
      toggleNav();
    }
    if (document.querySelector(".menu-item-has-children.active")) {
      collapseSubMenu();
    }
  };

  useEffect(() => {
    const mediaSize = 991;

    const handleToggleNav = () => {
      const navMenu = document.querySelector(".nav-menu");
      const menuOverlay = document.querySelector(".menu-overlay");
      navMenu.classList.toggle("open");
      menuOverlay.classList.toggle("active");
      toggleNav();
    };

    const handleMenuClick = (event) => {
      if (
        event.target.hasAttribute("data-toggle") &&
        window.innerWidth <= mediaSize
      ) {
        event.preventDefault();
        const menuItemHasChildren = event.target.parentElement;
        if (menuItemHasChildren.classList.contains("active")) {
          collapseSubMenu();
        } else {
          if (document.querySelector(".menu-item-has-children.active")) {
            collapseSubMenu();
          }
          menuItemHasChildren.classList.add("active");
          const subMenu = menuItemHasChildren.querySelector(".sub-menu");
          subMenu.style.maxHeight = subMenu.scrollHeight + "px";
        }
      }
    };

    const handleResize = () => {
      if (window.innerWidth > mediaSize) {
        resizeFix();
      }
    };

    document
      .querySelector(".open-nav-menu")
      .addEventListener("click", handleToggleNav);
    document
      .querySelector(".close-nav-menu")
      .addEventListener("click", handleToggleNav);
    document
      .querySelector(".menu-overlay")
      .addEventListener("click", handleToggleNav);
    document
      .querySelector(".nav-menu")
      .addEventListener("click", handleMenuClick);
    window.addEventListener("resize", handleResize);

    return () => {
      document
        .querySelector(".open-nav-menu")
        .removeEventListener("click", handleToggleNav);
      document
        .querySelector(".close-nav-menu")
        .removeEventListener("click", handleToggleNav);
      document
        .querySelector(".menu-overlay")
        .removeEventListener("click", handleToggleNav);
      document
        .querySelector(".nav-menu")
        .removeEventListener("click", handleMenuClick);
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    <header className="header">
      <div className="header-main">
        <div className="logo">
          <img src="./assets/logo/logoYPBI.png" alt="" />
        </div>
        <div className="open-nav-menu">
          <span></span>
        </div>
        <div className="menu-overlay"></div>
        <nav className="nav-menu ">
          <div className="close-nav-menu">
            {/* <img
                src="./assets/images/logo/icons8-close.svg"
                alt="close"
              /> */}
            <FontAwesomeIcon icon={faXmark} />
          </div>
          <ul className="menu">
            <li className="menu-item mt-0">
              <a href="/">Utama</a>
            </li>
            {/* <li className="menu-item">
              <a href="/#About">Tentang</a>
            </li> */}
            <li className="menu-item menu-item-has-children">
              <a data-toggle="sub-menu" href="/Pengurus">
                Struktur Pengurus
              </a>
            </li>
            {/* <li className="menu-item menu-item-has-children">
              <a data-toggle="sub-menu" target='_blank' href="https://drive.google.com/file/d/18ZYy8UNkiJK2eNDx4medaiN29AjlMJR3/view?usp=sharing">
                Buku Panduan
              </a>
            </li> */}
            {/* <li className="menu-item menu-item-has-children">
              <a data-toggle="sub-menu">Program kami</a>
              <ul className="sub-menu text-center">
                <li className="menu-item">
                  <a
                    href="https://drive.google.com/file/d/1tDzL9ykai1vTqyPZkct1EaC0ZdqsBQA3/view?usp=sharings"
                    target="_blank"
                    rel="noreferrer"
                  >
                    &nbsp; &nbsp; &nbsp; Pesan Siaran 2024
                  </a>
                </li>
              </ul>
            </li> */}
            <li className="menu-item">
              <a href="/Program">Program Kami</a>
            </li>
            {/* <li className="menu-item menu-item-has-children">
              <a data-toggle="sub-menu">Kurasi</a>
              <ul className="sub-menu text-center">
                <li className="menu-item">
                  <a
                    href="https://drive.google.com/drive/folders/1LNyrr0LBNwsZeI_FuVEg0uCUBRVR7__L?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Kurasi 2025
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="https://drive.google.com/drive/folders/1t2OIucLyMyindORVKtKLrG_R4WKik20O?usp=drive_link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Kurasi 2024
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="https://drive.google.com/drive/folders/116iUwWOIHdVH1IgF6Z7ckDvc8CkYzoth"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Kurasi 2023
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="https://drive.google.com/drive/folders/1LUmfYpgQ8OUqW1_jBiOIHeBtVHejlJ4o"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Kurasi 2022
                  </a>
                </li>
              </ul>
            </li> */}
            {/* <li className="menu-item menu-item-has-children">
              <a data-toggle="sub-menu">Sertifikat</a>
              <ul className="sub-menu text-center">
                <li className="menu-item">
                  <a
                    href="https://drive.google.com/drive/folders/1WJpkcjNhwuGm4F4ofFL5i6dwjDlJRpdi?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Sertifikat Supervisor
                  </a>
                </li>
              </ul>
            </li> */}
            {/* <li className="menu-item">
              <a href="/Faq">FAQ</a>
            </li> */}
            <li className="menu-item">
              <a href="/Gallery">Gallery</a>
            </li>
            <li className="menu-item">
              <a href="/Contact">Kontak</a>
            </li>
            {/* <button type="button" class="btn btn-outline-primary">Registration</button> */}
            {/* <button type="button" class="btn btn-outline-secondary">
              <a
                href="https://drive.google.com/file/d/1sgjtRWjIthPls0cjQ4iKcYVoxY0l4alC/view?usp=sharing"
                rel="noreferrer noopener"
                target="_blank"
              >
                Buku Panduan
              </a>
            </button> */}
          </ul>
        </nav>
      </div>
      {/* </div> */}
    </header>
  );
};
export default NavigationComponent;
