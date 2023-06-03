var answers = [];
var data;
async function getData() {
  var resp = await fetch("src/data/test.json");

  data = await resp.json();

  q = document.getElementsByClassName("questions");

  for (let i = 0; i < data.length; i++) {
    q[i].innerHTML = `<p> ${i + 1} . ${
      data[i].question
    } </p> <input type="radio" name="${i + 1}" value="a">${data[i].a} <br>
<input type="radio" name="${i + 1}" value="b">${
      data[i].b
    } <br> <input type="radio" name="${i + 1}" value="c">${data[i].c} <br>
<input type="radio" name="${i + 1}" value="d">${data[i].d}`;
  }
}

function checkAnswers() {
  var a;
  for (let i = 0; i < data.length; i++) {
    a = document.getElementsByName(`${i + 1}`);
    for (let j = 0; j < 4; j++) {
      if (a[j].checked) {
        answers[i] = a[j].value;
      }
    }
  }
  result(answers);
}

function result(answers) {
  let count = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].correctAns == answers[i]) count++;
  }
  alert("correct answers: " + count);
}

getData();
