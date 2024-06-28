/*  *** Assignment: "Asynchronous and Promise"""  ***
 Q-3:
Write a function fetchData that returns a Promise which resolves with the string  "Data fetched successfully!" after a delay of 1 second.*/

function fetchData() {
  Promise<string>;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 1000);
  });
}
fetchData().then((result) => {
  console.log(result);
});
