const content = [
    {
        image: "diwali.jpg",
        heading: "Diwali",
        info: "Diwali, the Festival of Lights, is celebrated with diyas, sweets, and fireworks, symbolizing the victory of light over darkness.                                          ",
        link: "https://en.wikipedia.org/wiki/Diwali"
    },
    {
        image: "holi.webp",
        heading: "Holi",
        info: "Holi, the Festival of Colors, is known for playful color fights, sweets like gujiya, and celebrating the arrival of spring.",
        link: "https://en.wikipedia.org/wiki/Holi"
    },
    {
        image: "9.jpg",
        heading: "Ganesh Chaturthi",
        info: "Ganesh Chaturthi honors Lord Ganesha with grand processions, prayers, and the immersion of idols.",
        link: "https://en.wikipedia.org/wiki/Ganesh_Chaturthi"
    },
    {
        image: "onam.jpg",
        heading: "Onam",
        info: "Onam is Kerala's harvest festival, celebrated with traditional feasts, boat races, and floral decorations.",
        link: "https://en.wikipedia.org/wiki/Onam"
    },
    {
        image: "4.webp",
        heading: "Dussehra",
        info: "Dussehra marks the victory of Lord Rama over Ravana with grand effigy burnings and theatrical performances.",
        link: "https://en.wikipedia.org/wiki/Vijayadashami"
    },
    {
        image: "5.webp",
        heading: "Baisakhi",
        info: "Baisakhi is a Punjabi harvest festival celebrated with dances, feasts, and fairs.",
        link: "https://en.wikipedia.org/wiki/Vaisakhi"
    },
    {
        image: "lohri.jpg",
        heading: "Lohri",
        info: "Lohri is a popular Punjabi festival marking the end of winter, celebrated with bonfires, singing, and dancing.",
        link: "https://en.wikipedia.org/wiki/Lohri"
    },
    {
        image: "nav.webp",
        heading: "Navratri",
        info: "Navratri is a nine-night festival dedicated to Goddess Durga, celebrated with fasting, garba dances, and prayers.",
        link: "https://en.wikipedia.org/wiki/Navratri"
    },
    {
        image:"8.webp",
        heading: "Chhath Puja",
        info: "Chhath Puja is dedicated to the Sun God, with devotees offering prayers at riverbanks during sunrise and sunset.",
        link: "https://en.wikipedia.org/wiki/Chhath"
    },
    {
        image:"8.webp",
        heading: "xyz",
        info: "Chhath Puja is dedicated to the Sun God, with devotees offering prayers at riverbanks during sunrise and sunset.",
        link: "https://en.wikipedia.org/wiki/Chhath"
    }
   
];

let total = '';
content.forEach(element => {
    total += `<div class="col">
        <div class="card h-100 shadow-sm">
          <img src="${element.image}" class="card-img-top" alt="Festival">
          <div class="card-body">
            <h5 class="card-title">${element.heading}</h5>
            <p class="card-text">${element.info}</p>
            <a href="${element.link}" target=_blank  class="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>`;
});

document.querySelector('.row').innerHTML = total;
