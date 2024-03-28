// show menu
const toggle = document.getElementById("nav_toggle");
const menu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll('.nav_link');
const dropDownContainer = document.querySelectorAll('.nav_item')[2];
const dropMenu = document.querySelector(".nav_drop_menu");
const showMenu = (toggleId, menuId) => {
    const closeImg = document.querySelector(".nav_toggle img")
    if (toggleId && menuId) {
        toggleId.addEventListener("click", () => {
            menuId.classList.toggle("show")
            closeMenu(closeImg, toggleId)
        })
    }
};
showMenu(toggle, menu);
function closeMenu(closeClassImg, toggleId) {
    toggleId.classList.toggle('close')
    if (toggleId.classList.contains('close')) {
        closeClassImg.setAttribute('src', '/assets/icon/bx-x.svg');
    } else {
        closeClassImg.setAttribute('src', '/assets/icon/bx-menu.svg');
    }
}

const showDrop = (dropContainerClass, dropMenuClass) => {
    const navDropDown = document.querySelector('.nav_drop_down');
    const dropDownImg = document.querySelector('.nav_drop_down img');
    dropContainerClass.addEventListener("click", () => {
        dropMenuClass.classList.toggle("drop")
        upDownIconList(navDropDown, dropDownImg)
    })
};
showDrop(dropDownContainer, dropMenu);
function upDownIconList(navDropDownDiv, iconImage) {
    navDropDownDiv.classList.toggle('up')
    if (navDropDownDiv.classList.contains('up')) {
        iconImage.setAttribute('src', '/assets/icon/bx-chevron-up.svg');
    } else {
        iconImage.setAttribute('src', '/assets/icon/bx-chevron-down.svg');
    }
}