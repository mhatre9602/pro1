// console.log("start");

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);

//   resolve(2);
// });

// promise1.then((res) => {
//   console.log(res);
// });

// console.log("end");
// console.log("start");

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
// });

// console.log("end");
// console.log("start");

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);

//   resolve(2);

//   console.log(3);
// });

// promise1.then((res) => {
//   console.log(res);
// });

// console.log("end");

// console.log("start");

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
// });

// promise1.then((res) => {
//   console.log(2);
// });

// console.log("end");
// console.log("start");

// const fn = () =>
//   new Promise((resolve, reject) => {
//     console.log(1);

//     resolve("success");
//   });

// console.log("middle");

// fn().then((res) => {
//   console.log(res);
// });

// console.log("end");
// console.log("start");

// Promise.resolve(1).then((res) => {
//   console.log(res);
// });

// Promise.resolve(2).then((res) => {
//   console.log(res);
// });

// console.log("end");
// console.log("start");

// setTimeout(() => {
//   console.log("setTimeout");
// });

// Promise.resolve().then(() => {
//   console.log("resolve");
// });

// console.log("end");
// const promise = new Promise((resolve, reject) => {
//   console.log(1);

//   setTimeout(() => {
//     console.log("timerStart");

//     resolve("success");

//     console.log("timerEnd");
//   }, 0);

//   console.log(2);
// });

// promise.then((res) => {
//   console.log(res);
// });

// console.log(4);
// const timer1 = setTimeout(() => {
//   console.log("timer1");

//   const promise1 = Promise.resolve().then(() => {
//     console.log("promise1");
//   });
// }, 0);

// const timer2 = setTimeout(() => {
//   console.log("timer2");
// }, 0);
// console.log("start");

// const promise1 = Promise.resolve().then(() => {
//   console.log("promise1");

//   const timer2 = setTimeout(() => {
//     console.log("timer2");
//   }, 0);
// });

// const timer1 = setTimeout(() => {
//   console.log("timer1");

//   const promise2 = Promise.resolve().then(() => {
//     console.log("promise2");
//   });
// }, 0);

// console.log("end");

const posts = [];
let postNo = 0;
//Do not touch this function
function createPost() {
  let currentdate = new Date();
  let datetime =
    currentdate.getDate() +
    "/" +
    (currentdate.getMonth() + 1) +
    "/" +
    currentdate.getFullYear() +
    " @ " +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes() +
    ":" +
    currentdate.getSeconds();
  console.log(
    "Before creating post" + ++postNo + " : USER active time - ",
    datetime
  );
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push({ title: "POST" + postNo });
      resolve();
      updateLastUserActivityTime();
    }, 1000);
  });
}

function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      var currentdate = new Date();
      var datetime =
        "After creating Post" +
        postNo +
        " Updated Activity timing: " +
        currentdate.getDate() +
        "/" +
        (currentdate.getMonth() + 1) +
        "/" +
        currentdate.getFullYear() +
        " @ " +
        currentdate.getHours() +
        ":" +
        currentdate.getMinutes() +
        ":" +
        currentdate.getSeconds();
      resolve(datetime);
    }, 1000);
  });
}

function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length > 0) {
        const poppedElement = posts.pop();
        resolve(poppedElement);
      } else {
        reject("ERROR: ARRAY IS EMPTY");
      }
    }, 1000);
  });
}

function printPost() {
  //   posts.forEach((post) => {
  console.log(posts);
  //   });
}

createPost();

updateLastUserActivityTime().then((time) => {
  console.log(time);
});
createPost();
createPost();
deletePost().then(printPost);
