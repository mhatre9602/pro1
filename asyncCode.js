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
  console.log("wife : I have the tickets");
  console.log("Husband : We should go in");
  console.log("Wife : No I'm hungry");

  let popCorn = await getPopcorn;
  console.log("Husband : I got the" + popCorn);
  console.log("Husband : We should go in");
  console.log("Wife : I need some butter on my popcorn");

  let butter = await getButter;
  console.log("Husband : I got the" + butter);
  console.log("Wife : I need some cold drinks as well");

  let colddrink = await coldDrinks;
  console.log("husband : I got the" + colddrink);
  console.log("Wife: let's go finally, we're getting late");
  console.log("Thanks for the reminder honey");
  return ticket;
};

movieStart().then((t) => console.log(`finally this wife shows the ${t}`));

console.log("Person 4 shows the ticket");
console.log("Person 5 shows the ticket");
