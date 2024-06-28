/*  *** Assignment: "Asynchronous and Promise"""  ***
Q-1:
Write a simple asynchronous TypeScript function fetchGreeting that returns a  greeting message after a 2-second delay using setTimeout.*/
async function fetchingGreeting() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("You Are Welcome!!!🙂");
        }, 2000);
    });
}
fetchingGreeting()
    .then((result) => {
    console.log(result);
})
    .catch((error) => {
    console.log(error);
});
export {};
