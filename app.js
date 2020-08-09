
    var min = 0;
    var sec = 0;
    var msec = 0;
    var minutes = document.getElementById("min");
    var seconds = document.getElementById("sec");
    var interval;
    function timer(){
        sec++;
      seconds.innerHTML = sec;
        if(sec >=60){
            min++
            minutes.innerHTML = min;
            sec = 0
        } 
       if(minutes.innerHTML==2 && seconds.innerHTML==30 ){
           clearTimeout(interval);
           alert("Your time is Finish");
           paper.innerHTML = "<img src='medal.png'><br><h2>You give "+right+ " right answers out of "+questions.length+" questions </h2>"+"<br>"+"<h2>You got "+points+ " points</h2><br><h2>Time: "+minutes.innerHTML+" : "+seconds.innerHTML;
           paper.innerHTML += "<a href='index.html'><button>Try Again</button></a><br>";
            getId("paper_status").innerHTML = "<h1>Your Quiz has been Completed</h1>"+"<br>"; 
            document.getElementById("min").innerHTML = "";
            document.getElementById("sec").innerHTML = "";
            document.getElementById("colon").innerHTML = "";
            document.getElementById("time").innerHTML = "";
       }
    }
    interval = setInterval(timer,1000);
var count = 0;
var paper, paper_status,question,choices,choice,opt1,opt2,opt3,opt4;
var right = 0;
var points = 0;
var questions = [
    {
        question: "What does HTML stand for?",
       
          a: "Hyper Trade Making Language",
          b: "Hyperlink  Text Markup Language",
          c: "Hyper Text Markup Language",
          d:"Home Tool Markup Language",
          answer: "c"
      },
      {
        question: "What is the correct HTML element for inserting a line break? ",
       
          a: "&ltbreak&gt",
          b: "&ltbr&gt",
          c: "&ltbl&gt",
          d: "&ltb&gt",
          answer: "b"
      },
      {
        question: "Which character is used to indicate an end tag?",
       
          a: "$",
          b: ">",
          c: "*",
          d: "/",
          answer: "d"
      },
      {
        question: "How can you make a numbered list?",
       
          a: "&ltdt&gt",
          b: "&ltol&gt",
          c: "&ltdl&gt",
          d: "&ltul&gt",
          answer: "b"
      },
      {
        question: "Which HTML element defines the title of a document?",
        
          a: "&lthead&gt",
          b: "&ltmeta&gt",
          c: "&ltlink&gt",
          d: "&lttitle&gt",
          answer: "d"
      }
];

function getId(id){
    return document.getElementById(id);
}

function getQuestion(){
    paper = getId("paper");
   
    if(count >= questions.length){
        paper.innerHTML = "<img src='medal.png'><br><h2>You give "+right+ " right answers out of "+questions.length+" questions </h2>"+"<br>"+"<h2>You got "+points+ " points</h2><br><h2>Time: "+minutes.innerHTML+" : "+seconds.innerHTML;
       paper.innerHTML += "<a href='index.html'><button>Try Again</button></a><br>";
        getId("paper_status").innerHTML = "<h1>Your quiz has been completed</h1>"+"<br>";
        document.getElementById("min").innerHTML = "";
        document.getElementById("sec").innerHTML = "";
        document.getElementById("colon").innerHTML = "";
        document.getElementById("time").innerHTML = "";
       
        count = 0;
        right = 0;
      clearTimeout(interval);
        return false;
    }

    getId("paper_status").innerHTML = "Question "+ (count+1)+ " of "+ questions.length;
   
    question = questions[count].question;
    opt1 = questions[count].a;
    opt2 = questions[count].b;
    opt3 = questions[count].c;
    opt4 = questions[count].d;
    paper.innerHTML = "<h3>"+question+"</h3>";
    paper.innerHTML += "<label> <input type='radio' name='choices' value='a'>"+opt1+"</label><hr color='turquoise'>";
    paper.innerHTML += "<label> <input type='radio' name='choices' value='b'>"+opt2+"</label><hr color='turquoise'>";
    paper.innerHTML += "<label> <input type='radio' name='choices' value='c'>"+opt3+"</label><hr color='turquoise'>";
    paper.innerHTML += "<label> <input type='radio' name='choices' value='d'>"+opt4+"</label><hr color='turquoise'>"; 
    paper.innerHTML +="<button onclick='checkAns()'>Next</button>";
   
}
function checkAns(){
   
    choices = document.getElementsByName("choices");
    for(i=0; i<choices.length;i++){
        if(choices[i].checked){
            choice = choices[i].value
        }
    }
    if(choice == questions[count].answer){
        right++;
         points += 10;
    }
    count++;
    getQuestion();
}
 
window.addEventListener("load",getQuestion);