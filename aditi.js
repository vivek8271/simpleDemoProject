let langoption = document.querySelectorAll(".option");
let mainlang = document.getElementById("main-lang");

let a = "red";
langoption.forEach((el) => {
  el.addEventListener("click", () => {
    mainlang.innerHTML = el.innerHTML;
    langoption.forEach((col) => {
      col.style.backgroundColor = "#2c3e50";
    });
    el.style.backgroundColor = "#696e74";
  });
});
document.getElementsByClassName("English")[0].style.backgroundColor = "#696e74";

const translations = {
  en: {
    welcome: "Welcome to Aditi Enterprises",
    description: "We deliver cement, sand, and steel to your doorstep.",
    pilicies:
      "check term and conditions before all trade to us and also check Privacy policy",
    rights: "© 2025 Aditi Enterprises. All rights reserved since 2015.",
    address: "Shivsagar-station-road Sasaram, Rohtas Bihar 821111",
    visitus: "visit us for more information",
    sendmessagebtn: "Send Message",
    contactus: "Contact Us",
    aboutus:
      "Aditi Enterprises has been serving builders and contractors with premium construction materials for over        10 years. Our commitment is to quality, reliability, and timely delivery.",
    aboutushead: "About Us",
  },
  hi: {
    welcome: "आदिति एंटरप्राइजेज में आपका स्वागत है",
    description: "हम सीमेंट, रेत और स्टील आपके दरवाजे तक पहुँचाते हैं।",
    pilicies:
      "हमारे साथ कोई भी व्यापार करने से पहले नियम व शर्तें जाँच लें तथा गोपनीयता नीति भी जाँच लें",
    rights: "© 2025 अदिति एंटरप्राइजेज। 2015 से सभी अधिकार सुरक्षित।",
    address: "शिवसागर-स्टेशन-रोड, सासाराम, रोहतास, बिहार 821111 ",
    visitus: "अधिक जानकारी के लिए हमसे संपर्क करें",
    sendmessagebtn: "मेसेज भेजें",
    contactus: "हमसे संपर्क करें",
    aboutus:
      "अदिति एंटरप्राइजेज 10 से अधिक वर्षों से बिल्डरों और ठेकेदारों को प्रीमियम निर्माण सामग्री प्रदान कर रहा है। हमारी प्रतिबद्धता गुणवत्ता, विश्वसनीयता और समय पर डिलीवरी के लिए है।",
    aboutushead: "हमारे बारे में",
  },
};

function setLanguage(lang) {
  const elements = document.querySelectorAll("[data-key]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-key");
    el.textContent = translations[lang][key];
  });
}

// Example: Bind to click on language option
langoption.forEach((option) => {
  option.addEventListener("click", () => {
    const language = option.textContent.trim().toLowerCase();
    if (language === "हिंदी") {
      setLanguage("hi");
    } else if (language === "english") {
      setLanguage("en");
    }
  });
});

const form = document.getElementById("contactForm");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = {
    name: form.name.value,
    mobile_no: form.mobile_no.value,
    email: form.email.value,
    message: form.message.value,
    
  };

  try {
    await fetch("http://localhost:8080/submit-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    // const result = await response.text();

    alert("form submit success");
  } catch (error) {
    console.error("Error sending form:", error);

    alert("form submition failed");
  }
});


document.getElementById("pro").addEventListener("click", async () => {
  const response = await fetch("http://localhost:8080/products", { method: "POST" });
  const text = await response.text();
  console.log(text);
});




const menuButton = document.getElementById("menu");
const mobileMenu = document.getElementById("mobileMenu");

menuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
});


