import { useEffect } from "react";
import "./Mouse.css";

function Mouse() {
  useEffect(() => {
    const cursorLight = document.querySelector(".cursor-light");

    let mouseX = 0;
    let mouseY = 0;
    let lightX = 0;
    let lightY = 0;
    const offset = 100;

    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX - offset;
      mouseY = e.clientY - offset;
    });

    function animateLight() {
      lightX += (mouseX - lightX) * 0.2;
      lightY += (mouseY - lightY) * 0.2;

      if (cursorLight) {
        cursorLight.style.left = lightX + "px";
        cursorLight.style.top = lightY + "px";
      }

      requestAnimationFrame(animateLight);
    }

    animateLight();
  }, []);

  return <div className="cursor-light"></div>;
}

export default Mouse;
