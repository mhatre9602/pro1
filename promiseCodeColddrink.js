console.log("Person 1 shows the ticket");
console.log("Person 2 shows the ticket");

const wifeBringingTickets = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(" tickets");
  }, 3000);
});

const getPopcorn = wifeBringingTickets.then((t) => {
  console.log("wife : I have the tickets");
  console.log("Husband : We should go in");
  console.log("Wife : No I'm hungry");
  return new Promise((resolve, reject) => {
    resolve(t + " popcorn");
  });
});

const getButter = getPopcorn.then((t) => {
  console.log("Husband : I got the popcorn");
  console.log("Husband : We should go in");
  console.log("Wife : I need some butter on my popcorn");
  return new Promise((resolve, reject) => {
    resolve(t + " butter");
  });
});

const coldDrinks = getButter.then((t) => {
  console.log("Husband : I got the butter");
  console.log("Husband : I got the coldrinks as well, lets go");
  return new Promise((resolve, reject) => {
    resolve(t + " cold-drinks done lets go");
  });
});

coldDrinks.then((t) => console.log(t));

console.log("Person 4 shows the ticket");
console.log("Person 5 shows the ticket");
