/**
 * This program displays frequently asked questions about a watch
 * with drop down menus that manipulate the dom images
 * @author Violet French - https://github.com/Pirategirl9000
 * @author Sarah Fenton - https://github.com/sarahfenton204
 * @link https://github.com/Pirategirl9000/Smartwatch-FAQ
 */

/**
 * The image DOM element that corresponds with each collapsible question
 * @type {Element}
 */
const faqImage = document.querySelector("#faq_image");

/**
 * The original source image for the faq image
 */
const faqImageOrigSrc = faqImage.src;

/**
 * The original alt text for the faq image
 */
const faqImageOrigAlt = faqImage.alt;

/**
 * All the header 2 elements that are used for displaying the answers to questions
 * @type {NodeListOf<Element>}
 */
const h2s = document.querySelectorAll("#faqs h2");

const toggleVisibility = evt => {
    const ct = evt.currentTarget;

    // Stores if all the collapsible are closed
    let allClosed = false;

    for (let heading of h2s) {
        if (heading === ct) {
            allClosed = true;

            // Toggles the minus background image for the side of this question
            heading.classList.toggle("minus");

            // Displays the answer to the question clicked
            heading.nextElementSibling.classList.toggle("open");

            // Check if the header has the necessary attributes for updating the image
            if (!heading.hasAttribute("data-img") || !heading.hasAttribute("data-alt")) return;

            // Update the image
            faqImage.src = heading.getAttribute("data-img");
            faqImage.alt = heading.getAttribute("data-alt");

        }
    }
}



document.addEventListener("DOMContentLoaded", () => {
    for (let heading of h2s) {
        heading.addEventListener("click", toggleVisibility);
    }
})