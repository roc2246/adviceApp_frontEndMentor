//Source : https://api.adviceslip.com/
const adviceNo = document.getElementById("heading_no");
const advice = document.getElementById("advice_innerText");
const url = "https://api.adviceslip.com/advice";

const newAdvice = () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let no = data.slip.id;
      let mssg = data.slip.advice;

      adviceNo.innerText = no;
      advice.innerText = mssg;
    });
};
