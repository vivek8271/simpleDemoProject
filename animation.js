////////////////         toggle the image    ----------------------

const images = [
  "image/falled_truck_agrigate.jpg",
  // "image/hand-sand.jpg",
  "image/cement.jpg",
  "image/son_river_sand.jpg",
  "image/sand-stone.jpg",
];

let current = 0;
const el = document.getElementById("storage-area-image");

setInterval(() => {
  current = (current + 1) % images.length;
  el.style.backgroundImage = `url(${images[current]})`;
  // el.style.opacity = ".5";
}, 5000);

 const text = "Aditi Enterprises is a trusted name in the construction materials industry, dedicated to providing high-quality cement, sand, steel, and other essential building supplies. Based in Shivsagar Station Road, Bamhour, we have been proudly serving both individual builders and large construction firms with a commitment to excellence and timely delivery.";

  const container = document.getElementById("typed-text");
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      container.innerHTML = text.substring(0, i + 1) + '<span class="cursor"></span>';
      i++;
      setTimeout(typeWriter, 50); // typing speed
    } else {
      // Remove cursor after typing finished
      container.innerHTML = text;
    }
  }
  typeWriter();
  