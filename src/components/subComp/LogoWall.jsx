import { useState } from "react";
import "../../App.css";

function LogoWall({
  items = [],
  direction = "horizontal",
  pauseOnHover = false,
  size = "clamp(8rem, 1rem + 30vmin, 25rem)",
  duration = "60s",
  textColor = "#ffffff",
  bgColor = "#060606",
  bgAccentColor = "#111111",
  Color = "#4050FF",
  New ="100px",
  inputH = ''
}) {
  const [isPaused, setIsPaused] = useState(false);

  const wrapperClass = [
    "logoWall-wrapper",
    direction === "vertical" && "wrapper--vertical"
  ]
    .filter(Boolean)
    .join(" ");

  const marqueeClass = [
    "marquee",
    direction === "vertical" && "marquee--vertical",
    isPaused && "paused"
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article
      className={wrapperClass}
      style={{
        "--size": size,
        "--duration": duration,
        "--color-text": textColor,
        "--color-bg": bgColor,
        "--color-bg-accent": bgAccentColor
      }}
    >
      <div
        className={marqueeClass}
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      >
        <div style={{color:`${Color}`, height:`${inputH}`}} className="marquee__group text-gray-600  text-3xl font-medium ">
          {items.map((item, idx) => (
            <h1 style={{fontSize:`${New}`}} key={`dup1-${idx}`} >{item.altText}</h1>
          ))}
        </div>
        <div style={{color:`${Color}`, height:`${inputH}`}} className="marquee__group text-gray-600  text-3xl font-medium" aria-hidden="true">
          {items.map((item, idx) => (
            <h1 style={{fontSize:`${New}`}} key={`dup1-${idx}`} >{item.altText}</h1>
          ))}
        </div>
      </div>
    </article>
  );
}

export default LogoWall;
