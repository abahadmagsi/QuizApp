
var questionArr = [
    {
        Question: "What is capital of Pakistan?",
        rightAns: "Islamabad",
        options: ['Karachi', 'Dadu', 'Hyberadad', 'Islamabad']
    },
    {
        Question: "How many provices are there in Pakistan?",
        rightAns: 4,
        options: [3, 4, 5, 6]
    },
    {
        Question: "What is your country name?",
        rightAns: "Pakistan",
        options: ['Pakistan', 'India', 'Hyberadad', 'Islamabad']
    },
    {
        Question: "How many countires are there in world?",
        rightAns: 192,
        options: [192, 200, 150, 220]
    },
    {
        Question: "Which is the bigest city of Pakistan",
        rightAns: "Islamabad",
        options: ['Karachi', 'Dadu', 'Hyberadad', 'Islamabad']
    }
];
var count = 0;
function counting() {
    questions(count)
    count++
}
function questions(e) {
    var ques = document.getElementById('ques').innerHTML = questionArr[e].Question;
    answers(e);
}
var score = 0;
function answers(i) {
    var ans = document.getElementById('ansDiv');
    ans.innerHTML = `<ul>
    <li><input id="ans1" type="radio" value=${questionArr[i].options[0]} name="ans" requried>${questionArr[i].options[0]}</li>
    <li><input id="ans1" type="radio" value=${questionArr[i].options[1]} name="ans" requried>${questionArr[i].options[1]}</li>
    <li><input id="ans1" type="radio" value=${questionArr[i].options[2]} name="ans" requried>${questionArr[i].options[2]}</li>
    <li><input id="ans1" type="radio" value=${questionArr[i].options[3]} name="ans" requried>${questionArr[i].options[3]}</li>
    </ul>
    `;
    
    var li = document.getElementsByTagName('input');
    for (var b = 1; b <= li.length; b++) {
        if (li[b].checked == true) {
            console.log(li[b].value);
        }
    }
}


function goToQuiz() {
    var name = document.getElementById('inp');
    document.getElementById('header').innerHTML = `<h1> Welcome ${name.value} </h1>`;
    var btn = document.getElementById('btn');
    btn.innerText = "Next";
    btn.removeAttribute('onclick');
    btn.setAttribute('onclick', 'counting()');
    name.remove();
    counting();
}