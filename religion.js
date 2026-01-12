const content = [
    {
        image: "hindu.jpg",
        heading: "Hinduism",
        info: "Hinduism is the largest religion in India, known for its diverse practices, scriptures, and festivals.",
        link: "https://en.wikipedia.org/wiki/Hinduism"
    },
    {
        image: "islam.jpg",
        heading: "Islam",
        info: "Islam is India's second-largest religion, with rich cultural traditions and historical significance.",
        link: "https://en.wikipedia.org/wiki/Islam_in_India"
    },
    {
        image: "christ.webp",
        heading: "Christianity",
        info: "Christianity arrived in India with Saint Thomas the Apostle and has a significant presence in various regions.",
        link: "https://en.wikipedia.org/wiki/Christianity_in_India"
    },
    {
        image: "sikh.jpeg",
        heading: "Sikhism",
        info: "Sikhism was founded in Punjab and emphasizes devotion, equality, and community service.",
        link: "https://en.wikipedia.org/wiki/Sikhism"
    },
    {
        image: "budh.jpg",
        heading: "Buddhism",
        info: "Buddhism originated in India with the teachings of Gautama Buddha and spread across Asia.",
        link: "https://en.wikipedia.org/wiki/Buddhism"
    },
    {
        image: "jain.jpeg",
        heading: "Jainism",
        info: "Jainism is one of the world's oldest religions, focusing on non-violence and self-discipline.",
        link: "https://en.wikipedia.org/wiki/Jainism"
    },
    
    {
        image: "jud.jpeg",
        heading: "Judaism",
        info: "Judaism in India dates back to ancient times, with communities like the Bene Israel and Cochin Jews.",
        link: "https://en.wikipedia.org/wiki/Judaism_in_India"
    }
];

let total = '';
content.forEach(element => {
    total += `<div class="col">
        <div class="card  h-100 shadow-sm">
          <img src="${element.image}" class="card-img-top" alt="Religion">
          <div class="card-body">
            <h5 class="card-title">${element.heading}</h5>
            <p class="card-text">${element.info}</p>
            <a href="${element.link}" target="_blank" class="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>`;
});

document.querySelector('.row').innerHTML = total;
