// import "./style.css";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// // Wait for DOM to be ready
// document.addEventListener("DOMContentLoaded", () => {
//   // Define image and trigger pairs
//   const imageConfigs = [
//     { imageId: "#chair-image-1", triggerId: "#scroll-element-1" },
//     { imageId: "#chair-image-2", triggerId: "#scroll-element-2" },
//     { imageId: "#chair-image-3", triggerId: "#scroll-element-3" },
//   ];

//   imageConfigs.forEach(({ imageId, triggerId }) => {
//     const image = document.querySelector(imageId);
//     const trigger = document.querySelector(triggerId);

//     if (image && trigger) {
//       // Set initial scale to 0
//       gsap.set(image, { scale: 0 });

//       // Animate scale on scroll
//       gsap.to(image, {
//         scale: 1.1,
//         ease: "sine.inOut",
//         scrollTrigger: {
//           markers: true,
//           trigger: trigger,
//           start: "top top",
//           end: "bottom bottom",
//           scrub: true, // Smoothly animates as you scroll
//         },
//       });
//     }
//   });
// });

// import "./style.css";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// // Wait for DOM to be ready
// document.addEventListener("DOMContentLoaded", () => {
//   const chairImage = document.querySelector("#chair-image");
//   const scrollElement = document.querySelector("#scroll-element");

//   if (chairImage && scrollElement) {
//     // Set initial opacity to 0
//     gsap.set(chairImage, { scale: 0 });

//     // Animate fade in on scroll
//     gsap.to(chairImage, {
//       scale: 1.1,
//       ease: "sine.inOut",
//       scrollTrigger: {
//         markers: true,
//         trigger: scrollElement,
//         start: "top top",
//         end: "bottom bottom",
//         scrub: true, // Smoothly animates as you scroll
//       },
//     });
//   }
// });
