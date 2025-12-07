// Ticker
const tickerSlides = [
  "📞 0702782850",
  "📧 jeffdesignshub@gmail.com",
  "💻 Web Design & Development",
  "🎨 Graphic Design & Branding",
  "🛒 E-commerce Websites",
  "🎬 Video Editing & Animation",
  "📱 Instagram: @jeffdesignshub",
  "👍 Facebook: Jeff Hub",
  "✨ Your Brand, Our Design!"
];

let tickerIndex = 0;
const tickerEl = document.getElementById('tickerSlide');

function updateTicker(){
  tickerEl.textContent = tickerSlides[tickerIndex];
  tickerIndex = (tickerIndex+1)%tickerSlides.length;
}
setInterval(updateTicker,5000);

// Hero slides
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
function showSlide(){
  if(slides.length===0) return;
  slides.forEach((s,i)=>s.classList.remove('active'));
  slides[currentSlide].classList.add('active');
  currentSlide=(currentSlide+1)%slides.length;
}
showSlide();
setInterval(showSlide,5000);

// Date & Time
const dateTimeEl = document.getElementById('dateTime');
function updateDateTime(){
  if(!dateTimeEl) return;
  const now = new Date();
  dateTimeEl.textContent = now.toLocaleString();
}
updateDateTime();
setInterval(updateDateTime,1000);
