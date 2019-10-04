let A=[
    [2,7,1,9,5,4,6,8,3],
    [5,9,3,6,2,8,1,4,7],
    [4,6,8,1,3,7,2,5,9],
    [7,3,6,4,1,5,8,9,2],
    [1,5,9,8,6,2,3,7,4],
    [8,4,2,3,7,9,5,6,1],
    [9,8,5,2,4,1,7,3,6],
    [6,1,7,5,9,3,4,2,8],
    [3,2,4,7,8,6,9,1,5]
];
let B=[
    [8,2,5,4,7,1,3,9,6],
    [1,9,4,3,2,6,5,7,8],
    [3,7,6,9,8,5,2,4,1],
    [5,1,9,7,4,3,8,6,2],
    [6,3,2,5,9,8,4,1,7],
    [4,8,7,6,1,2,9,3,5],
    [2,6,3,1,5,9,7,8,4],
    [9,4,8,2,6,7,1,5,3],
    [7,5,1,8,3,4,6,2,9]
];
let C=[
    [3,9,4,1,7,2,5,8,6],
    [1,5,7,3,8,6,2,4,9],
    [2,8,6,9,4,5,7,1,3],
    [5,3,8,7,9,4,6,2,1],
    [9,4,1,2,6,3,8,7,5],
    [7,6,2,8,5,1,3,9,4],
    [4,1,3,5,2,8,9,6,7],
    [6,2,9,4,3,7,1,5,8],
    [8,7,5,6,1,9,4,3,2]
];
let level;
let wrongCount;
let correctCount;
function easy(){
    wrongCount=0;
    correctCount=0;
    level="easy";
    document.getElementById('header').innerHTML="SUDUKU Game - Easy Level";
    document.getElementById('selection').style.display="none";
    document.getElementById('content').style.display="block";
    
   for(let i=0;i<9;i++){
    for(let k=0;k<3;k++){  
     let j=Math.round(Math.random()*10);
     if(j>8){
         j=8;
     }
               document.getElementById('c'+i+''+j).value=A[i][j];
            document.getElementById('c'+i+''+j).readOnly = true;
            document.getElementById('c'+i+''+j).style.backgroundColor = "yellow";
   }
   }
}
function medium(){
    wrongCount=0;
    correctCount=0;
    document.getElementById('header').innerHTML="SUDUKU Game - Medium Level";
    document.getElementById('selection').style.display="none";
    document.getElementById('content').style.display="block";
    //document.getElementById('content').style.width= (document.body.clientWidth-100)*0.9;
    level="medium";
   for(let i=0;i<9;i++){
    for(let k=0;k<2;k++){  
     let j=Math.round(Math.random()*10);
     if(j>8){
         j=8;
     }
               document.getElementById('c'+i+''+j).value=B[i][j];
            document.getElementById('c'+i+''+j).readOnly = true;
            document.getElementById('c'+i+''+j).style.backgroundColor = "yellow";
   }
   }
}
function hard(){
    wrongCount=0;
    correctCount=0;
    level="hard";
    document.getElementById('header').innerHTML="SUDUKU Game - Hard Level";
    document.getElementById('selection').style.display="none";
    document.getElementById('content').style.display="block";
    document.getElementById('marks').style.display="block";
   
   for(let i=0;i<9;i++){
   // for(let k=0;k<1;k++){  
     let j=Math.round(Math.random()*10);
     if(j>8){
         j=8;
     }
               document.getElementById('c'+i+''+j).value=C[i][j];
            document.getElementById('c'+i+''+j).readOnly = true;
            document.getElementById('c'+i+''+j).style.backgroundColor = "yellow";
  // }
   }
}
function check(col,i,j){
    let array;
    if(level=="easy") 
    array =A;
    else if(level=="medium")
    array = B;
    else
    array = C;
    let userValue = parseInt(col);
    if(userValue != array[i][j]) {
        document.getElementById('c'+i+''+j).style.backgroundColor = "red";
        wrongCount += 1;    
        document.getElementById('marksWrong').value=wrongCount;
    }
    else{
        document.getElementById('c'+i+''+j).style.backgroundColor = "green";
        correctCount += 1;
        document.getElementById('marksCorrect').value=correctCount;
    }
}

function score(){
    let colo;
    let array;
    if(level=="easy") 
    array =A;
    else if(level=="medium")
    array = B;
    else
    array = C;
    let marks=((correctCount-wrongCount)/(correctCount-wrongCount))*100;
    marks=isNaN(marks)?0:marks;
    document.getElementById('marks').innerHTML="Your score accuracy percentage is :  "+marks+"%";
    if(marks>=75)
    colo="green";
    else if(marks>=50 && marks<75)
    colo="yellow";
    else
    colo="red";
    document.getElementById('marks').style.color=colo;
    for(let i=0;i<9;i++){
     for(let k=0;k<9;k++){  
                document.getElementById('c'+i+''+k).value=array[i][k];
        }
        }
}
function resizeTab(){
    document.getElementById('tab').style.width= (document.body.clientWidth-100)*0.9;
}