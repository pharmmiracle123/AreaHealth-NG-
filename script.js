
const hospitals = [
  {
    name: "Niger Delta University Teaching Hospital (NDUTH)",
    description: "Located in Okolobiri, NDUTH is the leading teaching hospital in Bayelsa. It provides specialist services, training, and research. It is affiliated with Niger Delta University.",
    link: "https://nduth.org.ng"
  },
   {
   name: " Tobis Hospital",
   description: "Located after Agudama bridge, Akenfa Bayelsa State. It provides specialist services, training, and research. It is affiliated with Niger Delta University.",
   link: "https://nduth.org.ng"
 },
  {
    name: "Federal Medical Centre (FMC), Yenagoa",
    description: "FMC Yenagoa is a federal tertiary healthcare institution offering a wide range of services, including surgery, maternity, paediatrics, and internal medicine.",
    link: "https://fmcyenagoa.org.ng"
  },
  {
    name: "Diette-Koki Memorial Hospital",
    description: "This hospital is known for its well-equipped surgical services, private specialist care, and a serene environment for in-patient and out-patient services.",
    link: "https://dietekokimemorialhospital.org/"
  },
  {
    name: "General Hospital, Ogbia",
    description: "Serving the Ogbia area, this hospital provides general and emergency healthcare, with improved infrastructure and increasing patient intake.",
    link: "#"
  },
  {
    name: "Gloryland Hospital, Yenagoa",
    description: "A reputable private hospital with modern medical equipment, Gloryland is known for maternal and child health services, diagnostics, and fast emergency response.",
    link: "#"
  }
  ,
  {
    name: "Website development/management",
    description: "Pharmt Miracle Tech World is one of the best web development company in Nigeria, you can contact us now to get a Website for your hospital, school, organizations.",
    link: "https://wa.link/s0e7eh"

  }
  
];

const container = document.getElementById('hospital-list');
hospitals.forEach(hospital => {
  const card = document.createElement('div');
  card.className = 'hospital-card';
  card.innerHTML = `
    <h2>${hospital.name}</h2>
    <p>${hospital.description}</p>
    <a href="${hospital.link}" target="_blank">Visit Website</a>
  `;
  container.appendChild(card);
});
