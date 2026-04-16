let quizData = [
    ["What does HTML stand for?", ["Hyper Text Markup Language","High Text Machine Language","Hyper Transfer Markup Language","None"], 0],
    ["Which tag is used for largest heading?", ["<h6>","<heading>","<h1>","<head>"], 2],
    ["Which tag creates hyperlink?", ["<link>","<a>","<href>","<hyper>"], 1]
  ];
  
  let current = 0;
  let answers = new Array(quizData.length).fill(null);
  
  function render() {
    const q = quizData[current];
  
    document.getElementById("quiz").innerHTML =
      `<h2>${q[0]}</h2>` +
      q[1].map((opt, i) =>
        `<div class="option ${answers[current] === i ? 'selected' : ''}"
        onclick="select(${i})">${opt}</div>`
      ).join("");
  }
  
  function select(i) {
    answers[current] = i;
    render();
  }
  
  function next() {
    if (current < quizData.length - 1) {
      current++;
      render();
    }
  }
  
  function prev() {
    if (current > 0) {
      current--;
      render();
    }
  }
  
  function submitQuiz() {
    let score = 0;
  
    let result = quizData.map((q, i) => {
      if (answers[i] === q[2]) score++;
      return {
        question: q[0],
        correct: q[1][q[2]],
        selected: answers[i] != null ? q[1][answers[i]] : "Not Answered"
      };
    });
  
    localStorage.setItem("score", score);
    localStorage.setItem("answers", JSON.stringify(result));
  
    window.location.href = "answers.html";
  }
  
  render();