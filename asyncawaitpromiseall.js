console.log("Person 1 shows the ticket");
console.log("Person 2 shows the ticket");

const movieStart = async () => {
  const wifeBringingTickets = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("tickets");
    }, 3000);
  });

  const getPopcorn = new Promise((resolve, reject) => resolve(" popcorn"));

  const getButter = new Promise((resolve, reject) => resolve(" butter"));

  const coldDrinks = new Promise((resolve, reject) => resolve(" cold-drinks"));

  let ticket = await wifeBringingTickets;

  let [popCorn, butter, colddrink] = await Promise.all([
    getPopcorn,
    getButter,
    coldDrinks,
  ]);

  console.log(popCorn, butter, colddrink);
  return ticket;
};

movieStart().then((t) => console.log(`finally they enter with the ${t}`));

console.log("Person 4 shows the ticket");
console.log("Person 5 shows the ticket");
