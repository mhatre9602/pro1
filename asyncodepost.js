const posts = [];
let postNo = 0;

async function userFunction() {
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

  const createPost = new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push({ title: "POST" + ++postNo });
      let message =
        "Before creating POST " +
        postNo +
        " activity time of USER :" +
        datetime +
        "\n";
      resolve(message);
      updateLastUserActivityTime;
    }, 1000);
  });

  const updateLastUserActivityTime = new Promise((resolve, reject) => {
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
        currentdate.getSeconds() +
        "\n";
      resolve(datetime);
    }, 1000);
  });

  const deletePost = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length > 0) {
        const poppedElement = posts.pop();
        resolve(poppedElement);
      } else {
        reject("ERROR: ARRAY IS EMPTY");
      }
    }, 1000);
  });
  function printPost() {
    console.log(posts);
  }
  let [create, timings] = await Promise.all([
    createPost,
    updateLastUserActivityTime,
  ]);
  console.log(create, timings);
  let deleting = await deletePost;
  printPost();
}

userFunction();
userFunction();
userFunction();
