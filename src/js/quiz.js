var answers = [];
var data;
var mm = parseInt(document.getElementById("mm").innerHTML);
var ss = parseInt(document.getElementById("ss").innerHTML);

async function getData() {
  var resp = await fetch("src/data/test.json");

  data = await resp.json();

  q = document.getElementsByClassName("questions");

  for (let i = 0; i < data.length; i++) {
    q[i].innerHTML = `<p> ${i + 1} . ${
      data[i].question
    } </p> <input type="radio" name="${i + 1}" value="a">a. ${data[i].a} <br>
<input type="radio" name="${i + 1}" value="b">b. ${
      data[i].b
    } <br> <input type="radio" name="${i + 1}" value="c">c. ${data[i].c} <br>
<input type="radio" name="${i + 1}" value="d">d. ${data[i].d} 
<br> <div class="answer-section">Correct Answer: ${data[i].correctAns}</div>`;
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
  let ansVisible = document.getElementsByClassName("answer-section");
  for(let j=0;j<ansVisible.length;j++)
    ansVisible[j].style.visibility = "visible";
  document.getElementById("timer").style.visibility = "hidden";
}

function startTimer(){

    console.log(ss);
    
    var timer = setInterval(decrease,1000);
}
function decrease(){
    console.log("called "+ss);
    ss--;
    if(ss<10)
        document.getElementById("ss").innerHTML = "0"+ss;
    else
        document.getElementById("ss").innerHTML = ss;
    if(ss < 1)
    {
       if(mm<1)
       {
        checkAnswers();
        stopTimer();
       }
        mm--;
        ss = 59;
        document.getElementById("ss").innerHTML = ss;
        document.getElementById("mm").innerHTML = mm;
    }
    if(mm == 1)
        document.getElementsByTagName("main")[0].style.border = "1px solid orange";
    else if(mm == 0)
    document.getElementsByTagName("main")[0].style.border = "1px solid red";
}
function stopTimer(){
    clearInterval(timer);
}
getData();
startTimer();
