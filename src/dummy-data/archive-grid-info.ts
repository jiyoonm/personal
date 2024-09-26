const archiveInfo = [
  {
    id: "recharge",
    imgUrl: "/static/recharge/index.jpg",
    tags: ["Backend", "UI/UX"],
    firstImage: "/static/recharge/documentation/3.jpg",
    grid: [
      "/static/recharge/documentation/4.jpg",
      "/static/recharge/documentation/tnet.jpeg",
    ],
    lastImage: "/static/recharge/documentation/t.jpeg",
    secondImage: "/static/recharge/documentation/1.jpg",
    thirdImage: "/static/recharge/documentation/main.jpg",
    finalImage: null,
    team: "Studio Elsewhere",
    role: ["Creative Technologist", "Software Engineer"],
    photoCount: 6,
    year: 2022,
    title: "Recharge Rooms",
    link: "https://www.redefiningcountry.com",
    blurb:
      "Immersive biophilic private spaces to support the well-being and recovery of care providers. ",
    concept:
      "Studio Elsewhere’s Recharge Rooms are immersive biophilic private spaces that include music, scent, lighting, and sound, designed with research support from the Abilities Research Center at the Icahn School of Medicine at Mount Sinai to support the well-being and recovery of care providers. ",
    process:
      "Studio Elsewhere’s Recharge Rooms are immersive biophilic private spaces that include music, scent, lighting, and sound, designed with research support from the Abilities Research Center at the Icahn School of Medicine at Mount Sinai to support the well-being and recovery of care providers. ",
    description:
      "Studio Elsewhere’s Recharge Rooms are immersive biophilic private spaces that include music, scent, lighting, and sound, designed with research support from the Abilities Research Center at the Icahn School of Medicine at Mount Sinai to support the well-being and recovery of care providers. ",
    additional: null,
  },
  {
    id: "flourish",
    imgUrl: "/static/flourish/wave.jpg",
    tags: ["Backend", "UI/UX"],
    firstImage: "/static/flourish/energy.jpeg",
    grid: [
      "/static/flourish/color.jpeg",
      "/static/flourish/r.jpeg",
      "/static/flourish/wave.jpg",
      "/static/flourish/room.jpeg",
    ],
    lastImage: null,
    secondImage: null,
    thirdImage: null,
    finalImage: null,
    team: "Studio Elsewhere",
    role: ["Creative Technologist", "Software Engineer"],
    photoCount: null,
    year: 2022,
    title: "Flourish",
    link: "https://www.redefiningcountry.com",
    blurb:
      "Mind body exercies through a large-scale installation and motion tracking.",
    concept:
      "The unique multi-sensory experience takes the nervous system from fight or flight mode to relax and digest mode.",
    process: null,
    description:
      "Five different scenes bring concepts from nature into the hospital wellness space, with music, interactive technology and generative visuals that respond to the movements of the individuals using the space.",
    additional: null,
  },
  {
    id: "country",
    imgUrl: "/static/country/bg1.jpg",
    tags: ["Frontend", "UI/UX"],
    year: 2022,
    firstImage: "/static/country/bg11.jpeg",
    grid: ["/static/country/about.jpg", "/static/country/flow.jpg"],
    lastImage: null,
    secondImage: "/static/country/bg0.jpeg",
    thirdImage: null,
    finalImage: null,
    team: "Studio Elsewhere",
    role: ["Creative Technologist", "Software Engineer"],
    photoCount: null,
    title: "Redefining Country Roads",
    link: "https://www.redefiningcountry.com",
    blurb: "Learn more about the history of the key sounds of the South.",
    concept:
      "In this space, users can listen to how iconic country instruments and playing techniques have progressed through history while reading about their background and inspirations. This history lesson takes place in the form of flowers growing in a desert, the desert representing the whitewashed narrative of the South, taking cues from old Western movies that have defined the imagery of the current age of country music. ",
    process:
      "To design this project, I wanted to reach out to my community of BIPOC Southerners and began conversations about what felt like home in the South and what didn’t.  We often ended up returning to the idea of being nature, and certain plants and what they represented to us. I used these conversations to inspire these new illustrations and way of respresenting this song before landing on my final iteration.",
    description:
      "The key idea of this project is to highlight BIPOC stories of the South and rewrite the narrative that country music is a white art form. This project includes 3D modeled flowers that are significant to the cultural groups being represented and music snippets gathered from the Spotify API to provide a brief overview of the modern and past sounds of country music.",
    additional: null,
  },
  {
    id: "beats",
    imgUrl: "/static/beats/beats.jpg",
    tags: ["Unity", "UI/UX"],
    year: 2021,
    firstImage: "/static/beats/d.jpeg",
    grid: [
      "/static/beats/garden.gif",
      "/static/beats/s.gif",
      // "/static/beats/tree.gif",
      // "/static/beats/lamp.gif",
    ],
    lastImage: null,
    secondImage: null,
    thirdImage: "/static/beats/image3.png",
    finalImage: null,
    team: null,
    technologies: ["Python", "Touchdesigner", "Unity", "Websockets", "Arduino"],
    role: ["Creative Technologist", "Software Engineer"],
    photoCount: null,
    title: "Distant Beats",
    link: null,
    blurb:
      "A virtual world that visualizes the presence and heartbeats of two strangers across the world.",
    concept:
      "Two users' inputs from a heartbeat and ultrasonic sensor are fed onto a Heroku server, which are then transmitted to a Unity scene both can view, subtly affecting its visuals and mood (with each player’s inputs controlling an aspect of the visuals--the clouds and grass). Inspired by the disconnectedness of life during this pandemic, we hoped to provide a passive, meditative, and peaceful means of connection. ",
    process: null,
    description:
      "Strangers in different places view a scene together remotely, with its visuals affected by their presence and heartbeats, allowing them to share emotions through the visuals.",
    additional: null,
  },
  // {
  //   id: "wifi",
  //   imgUrl: "/static/wifi/data.png",
  //   tags: ["Frontend", "Data Viz"],
  //   year: "2020",
  //   firstImage: "/static/wifi/title.png",
  //   grid: null,
  //   lastImage: null,
  //   secondImage: "/static/wifi/data.png",
  //   thirdImage: null,
  //   finalImage: "/static/wifi/about.png",
  //   team: null,
  //   technologies: ["HTML", "CSS3", "Mapbox"],

  //   role: ["Creative Technologist", "Software Engineer"],
  //   photoCount: null,
  //   title: "Wifi NYC",
  //   link: null,
  //   blurb:
  //     "A web-based interactive data viz about internet access in each council district of New York City.",
  //   concept:
  //     "Internet Access has become such a necessity in recent years and especially now due to COVID-19. A majority of schools and workplaces have made the switch to online learning and work from home, many have even announced the permanent switch or the option to do so. What happens when one does not have access to the Internet at their household? ",
  //   process: null,
  //   description:
  //     "We chose to analyze and look closely at Internet Access datasets in New York City. We felt that this was a relevant topic in the current climate. The data includes information about locations with free access to wifi, including their address, wifi provider, and wifi limitations. After analyzing the data, we decided that the best way to present the information in an effect and clean way would be to create a data visualization. We hope that the visualization will demonstrate a variety of trends that will provide a deeper understanding of why certain areas have lower numbers of Internet Access. The topic of inequality in Internet access across different neighborhoods and areas is one that we hope to shine more light on.",
  //   additional:
  //     "For the final iteration of the project, we focused on adding meaningful interactions. We wanted this website to be able to be used as a resource for those seeking free internet, which is why we made each data point clickable, so users could see each location in their area.",
  // },
  {
    id: "map",
    imgUrl: "/static/map/bgmap.jpg",
    tags: ["Frontend"],
    year: "2020",
    firstImage: "/static/map/bg1.jpg",
    grid: ["/static/map/title.png", "/static/map/wifi.gif"],
    lastImage: null,
    secondImage: null,
    thirdImage: null,
    finalImage: null,
    team: null,
    technologies: ["HTML", "CSS3", "Mapbox"],
    role: ["Creative Technologist", "Software Engineer"],
    photoCount: null,
    title: "Community Gardens in NYC",
    link: "https://jiyoonm.github.io/community-garden/",
    blurb:
      "A web-based interactive data viz about internet access in each council district of New York City.",
    concept:
      "The Lower East Side was historically a neighborhood that was committed to housing working-class communities of color, primarily Black, Chinese, and Puerto Rican residents. However, following the fiscal crisis of the 1970s, tax incentives created by city officials and policy makers encouraged new developments in the surrounding areas of the Greenwich Village and SoHo, raising land values in the area. These higher rent values and new developments seeped into the Lower East Side, displacing lower-income populations who could not afford an increased rent. This process of gentrification gave power to white bodies who could afford to live in the space at these higher rates, while dispossesing primarily Black and Latino communities of their homes.",
    process:
      "To effectively create a comphrensive tour of the gardens and history in Loisaida, I began by speaking with community garden leaders, including gardeners at La Plaza Cultural. I visited each garden in the area and took pictures of subleties and new developments like the Citi Bike Map.",
    description:
      "This website is an informative tour of New York’s history of gentrification in the Lower East Side and the importance of community gardens in fighting against this dispossession. Seemingly mundane elements within our spaces can actually tell stories of an ongoing protest.",
    additional: null,
  },
  // {
  //   id: "experiments",
  //   imgUrl: "/static/e.jpeg",
  //   tags: ["Python", "Quantum Computing"],
  //   year: "2020-Present",
  //   firstImage: null,
  //   grid: null,
  //   lastImage: null,
  //   secondImage: null,
  //   thirdImage: null,
  //   finalImage: null,
  //   team: "Studio Elsewhere",
  //   role: ["Creative Technologist", "Software Engineer"],
  //   photoCount: null,
  //   title: "Playground",
  //   link: null,
  //   blurb:
  //     "Experiments and works in progress that I create during my free time.",
  //   concept: null,
  //   process: null,
  //   description:
  //     "We chose to analyze and look closely at Internet Access datasets in New York City. We felt that this was a relevant topic in the current climate. The data includes information about locations with free access to wifi, including their address, wifi provider, and wifi limitations. After analyzing the data, we decided that the best way to present the information in an effect and clean way would be to create a data visualization. We hope that the visualization will demonstrate a variety of trends that will provide a deeper understanding of why certain areas have lower numbers of Internet Access. The topic of inequality in Internet access across different neighborhoods and areas is one that we hope to shine more light on.",
  //   additional: null,
  // },
];

export default archiveInfo;
