/**
 * This program displays frequently asked questions about a watch
 * with drop down menus that manipulate the dom images
 * @author Violet French - https://github.com/Pirategirl9000
 * @author Sarah Fenton - https://github.com/sarahfenton204
 * @link https://github.com/Pirategirl9000/Smartwatch-FAQ
 */

const faqImage = document.querySelector("#faq_image");
const faqImageOrigSrc = faqImage.src;
const faqImageOrigAlt = faqImage.alt;
const h2s = document.querySelectorAll("#faqs h2");



document.addEventListener("DOMContentLoaded", () => {
    for (let heading of h2s) {
        heading.addEventListener("click", toggleVisibility);
    }
})