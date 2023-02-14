
// function job1 (callback) {
//   console.log("loading")
//   setTimeout(() => {
//     callback("test1")
//   }, 2000);
// }

// job1(function (data) {
//   console.log(data);
// })

// console.error("error")


const p = new Promise((resolve, reject) => {
  reject("error");
})

p.then((data) => {
  console.log(data)
})

.catch((data) => {
  console.log(data)
});