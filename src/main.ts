import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Wait for DOM to be ready
document.addEventListener("DOMContentLoaded", () => {
  // Define image configuration - just add new entries here to add more images
  const images = [
    { src: "/img_chair-1.png", alt: "Chair 1" },
    { src: "/img_chair-2.png", alt: "Chair 2" },
    { src: "/img_chair-3.png", alt: "Chair 3" },
    { src: "/img_chair-4.png", alt: "Chair 4" },
    { src: "/img_chair-5.png", alt: "Chair 5" },
    { src: "/img_chair-6.png", alt: "Chair 6" },
    { src: "/img_chair-7.png", alt: "Chair 7" },
    { src: "/img_chair-8.png", alt: "Chair 8" },
    { src: "/img_chair-9.png", alt: "Chair 9" },
    { src: "/img_chair-10.png", alt: "Chair 10" },
    { src: "/img_chair-11.png", alt: "Chair 11" },
    { src: "/img_chair-12.png", alt: "Chair 12" },
    { src: "/img_chair-13.png", alt: "Chair 13" },
  ];

  const app = document.getElementById("app");
  const imageContainer = document.getElementById("image-container");

  if (!app || !imageContainer) {
    console.error("Required elements not found");
    return;
  }

  // Build scroll elements HTML
  const scrollElementsHTML = images
    .map(
      (_, index) => `
    <div
      id="scroll-element-${index + 1}"
      class="${index === 0 ? "h-[2000px]" : "h-[2000px] -mt-[1500px]"}">
    </div>
  `
    )
    .join("");

  // Build images HTML
  const imagesHTML = images
    .map(
      (imgConfig, index) => `
    <img
      id="chair-image-${index + 1}"
      src="${imgConfig.src}"
      alt="${imgConfig.alt}"
      class="w-full h-full object-cover rounded-md absolute left-0 top-0"
    />
  `
    )
    .join("");

  // Insert scroll elements before image container's parent
  const imageContainerParent = imageContainer.parentElement;
  if (imageContainerParent) {
    imageContainerParent.insertAdjacentHTML("beforebegin", scrollElementsHTML);
  }

  // Insert images into container
  imageContainer.innerHTML = imagesHTML;

  // Set up GSAP animations for each image
  images.forEach((_, index) => {
    const scrollElement = document.getElementById(
      `scroll-element-${index + 1}`
    );
    const imgElement = document.getElementById(
      `chair-image-${index + 1}`
    ) as HTMLImageElement;

    if (!scrollElement || !imgElement) {
      console.error(`Elements not found for index ${index}`);
      return;
    }

    // Set initial scale to 0
    gsap.set(imgElement, { scale: index <= 0 ? 0.1 : 0 });

    // Animate scale on scroll
    gsap.to(imgElement, {
      scale: 1.1,
      ease: "sine.inOut",
      scrollTrigger: {
        trigger: scrollElement,
        start: "top top",
        end: "bottom bottom",
        scrub: true, // Smoothly animates as you scroll
      },
    });
  });
});
