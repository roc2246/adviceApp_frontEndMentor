const adviceNo = document.getElementById("heading_no");
const adviceTxt = document.getElementById("advice_innerText");

const newAdvice = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      const { id, advice } = data.slip;

      adviceNo.innerText = id;
      adviceTxt.innerText = advice;
    });
};
