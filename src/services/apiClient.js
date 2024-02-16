const API = {};

API.getHomePlans = async () => [
  {
    homePlanId: 1,
    name: "The Medita",
    numBeds: 4,
    numBaths: 4,
    sqft: 4300,
    tags: ["master on main", "patio"],
    description:
      "The Medita is a spacious model featuring an open floor plan and spacious foyer. You’ll feel like you blend in with your surroundings when you’re at home.\n\nThe plan comes with 3 different layout options on the first floor, and an optional patio addition.",
    image: "https://storage.googleapis.com/home_plan_images/70660mk_0.jpg",
  },
  {
    homePlanId: 2,
    name: "The Modesto",
    numBeds: 2,
    numBaths: 1,
    sqft: 1800,
    tags: ["cozy space", "patio"],
    description:
      "The Modesto is a cozy bungalow model guaranteed to be your happy place.\n\nThe plan comes with 2 different layout options on the first floor, and an optional patio addition.",
    image: "https://storage.googleapis.com/home_plan_images/28935jj_0.jpg",
  },
  {
    homePlanId: 3,
    name: "The Gallago",
    numBeds: 4,
    numBaths: 3,
    sqft: 2100,
    tags: ["low noise", "urban"],
    description:
      "The Gallago is a space crafted to blend perfectly into an urban setting, with noise-reduction walls and modern touches that make city life a joy.\n\nThe plan comes with 3 different layout options on the first floor.",
    image: "https://storage.googleapis.com/home_plan_images/90304pd_0.jpg",
  },
  {
    homePlanId: 4,
    name: "The Altastone",
    numBeds: 3,
    numBaths: 2,
    sqft: 2300,
    tags: [], // Intentionally left empty :)
    description:
      "The Altastone is an adobe-inspired home designed with the dry desert in mind. Its unique architecture will keep the home cool during the day while providing plenty of natural light.\n\nThe plan comes with a single layout with an optional patio.",
    image: "https://storage.googleapis.com/home_plan_images/0837w_0.jpg",
  },
];

// NOTE: All lot images are downloadable as PNGs (add .png at end of URL)
API.getLots = async () => [
  {
    lotId: 1,
    address: "123 Example Ln, Charlotte, NC",
    acres: 1.6,
    description:
      "This sprawling lot is located on the outskirts of Charlotte, with nearby boat access to Example Lake and a straight shot to downtown Charlotte via Example Highway.",
    image: "https://storage.googleapis.com/plot_images/1018314458",
  },
  {
    lotId: 2,
    address: "123 Sample Ln, Raleigh, NC",
    acres: 0.7,
    description:
      "This spacious lot is in the gorgeous Example Neighborhood, surrounded by historic landmarks such as The Cool Things Museum and The Very Old House.",
    image: "https://storage.googleapis.com/plot_images/1018937216",
  },
  {
    lotId: 3,
    address: "123 Test Ct, Charlotte, NC",
    acres: 0.28,
    description:
      "This cozy lot is directly next to downtown Charlotte - from your front yard you can walk to uptown. Be sure to check out The Average Bowling Alley or one of the plenty of restaurants nearby!",
    image: "https://storage.googleapis.com/plot_images/1043665691",
  },
  {
    lotId: 4,
    address: "123 Far Far Away St, Nowhere, NC",
    acres: 9.15,
    description:
      "This gigantic lot is far from any major population center - in fact, you’ll probably never meet a single person out here! If you’re looking for solitude at a bargain, this is the perfect place for you. There’s absolutely nothing around except nature.",
    image: "https://storage.googleapis.com/plot_images/1030870481",
  },
];

API.getCombinations = async () => [
  { homePlanId: 1, lotId: 1 },
  { homePlanId: 1, lotId: 2 },
  { homePlanId: 1, lotId: 3 },
  { homePlanId: 2, lotId: 1 },
  { homePlanId: 2, lotId: 4 },
  { homePlanId: 2, lotId: 3 },
  { homePlanId: 3, lotId: 3 },
  { homePlanId: 3, lotId: 2 },
  { homePlanId: 3, lotId: 1 },
  { homePlanId: 4, lotId: 3 },
  { homePlanId: 4, lotId: 2 },
  { homePlanId: 4, lotId: 4 },
];

export { API };
