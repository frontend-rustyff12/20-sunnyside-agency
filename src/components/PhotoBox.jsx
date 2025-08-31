import { useState, useEffect } from "react";
export default function PhotoBox() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1440);
  const [directory, setDirectory] = useState(
    window.innerWidth >= 1440 ? "/desktop" : "/mobile"
  );

  const boxImages = [
    "/image-gallery-milkbottles.jpg",
    "/image-gallery-orange.jpg",
    "/image-gallery-cone.jpg",
    "/image-gallery-sugar-cubes.jpg",
  ];

  function cleanWord(str) {
    return str
      .replace("/image-gallery-", "")
      .replace(".jpg", "")
      .replace(/-/g, " ");
  }

  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth >= 1440);
    }
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setDirectory(isDesktop ? "/desktop" : "/mobile");
  }, [isDesktop]);

  return (
    <section className="photo-box-wrapper">
      {boxImages.map((item, index) => (
        <div className="image-wrapper" key={index}>
          <img
            src={`${directory}${item}`}
            alt={`Image of ${index === 1 || index === 2 ? "a " : ""}${cleanWord(
              item
            )}`}
          />
        </div>
      ))}
    </section>
  );
}
