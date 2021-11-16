let x = 0;
// print 10 random numbers between 1 and 10
while (x < 10) {
  console.log(Math.floor(Math.random()*9) + 1);
  x++;
}



let currentQuestion = 0;
let score = 0;
let questions = [
   {
	"question": "In what century does the series take place?",
	"a": "24th century",
	"b": "22th century",
	"c": "26th century",
	"d": "28th century",
	"image":"quizimages/q1.jpg",
	"answer": "a"
	"Hint": "captain picard was born in 2305.";
   },
   {
	"question": "Which frightening antagonists are cyborgs that often attack the Enterprise?",
	"a": "The Ferengi",
	"b": "The Cardassians",
	"c": "The Borg",
	"d": "The Romulans",
	"image":"quizimages/q2.jpg",
	"answer": "c"
	"hint":""
   },
   {
	"question": "When was the Titanic released?",
	"a": "1998",
	"b": "1996",
	"c": "2000",
	"d": "1997",
	"image":"quizimages/q3.jpg",
	"answer": "d"
   },
   {
	"question": "What type of game is League of Legends?",
	"a": "Advanture game",
	"b": "Shooting game",
	"c": "MOBA game",
	"d": "Simulation RPG",
	"image":"quizimages/KDA.png",
	"answer": "c"   
   },
   {
	"question": "What are the two most important parts of the Computer main box?",
	"a": "CPU Motherboard",
	"b": " CPU RAM",
	"c": "Motherboard HDD",
	"d": "Motherboard Case",
	"image":"quizimages/q4.jpg",
	"answer": "a"   
   },
   {
	"question": "Who is the author of Harry Potter?",
	"a": "J. E. Rowling",
	"b": "J. K. Rowling",
	"c": "G. K. Rowling",
	"d": "J. I. Rowling",
	"image":"quizimages/q5.jpg",
	"answer": "b"   
   },
   {
	"question": "What kind of video is the animal world?",
	"a": "Documentaries",
	"b": "action films",
	"c": "horror films,",
	"d": "Suspense film",
	"image":"quizimages/q6.jpg",
	"answer": "a"  
   },
   {
	"question": "When did the French Revolution happen",
	"a": "May 9, 1799",
	"b": "May 3, 1788",
	"c": "May 16, 1787",
	"d": "May 5, 1789",
	"image":"quizimages/q7.jpg",
	"answer": "d"   
   },
   {
	"question": "How many degrees of the eye is considered high myopia?",
	"a": "550",
	"b": "700",
	"c": "600",
	"d": "650",
	"image":"quizimages/q8.jpg",
	"answer": "c"   
   },
   {
	"question": "Einstein was born in a few years?",
	"a": "1878",
	"b": "1889",
	"c": "1879",
	"d": "1898",
	"image":"",
	"answer": "c" 
   },
 ];
 
 
 
 function loadQuestion() {
	 if(timeLeft >= 0){
		 clearInterval(timer)
	 }
     
    // close light box for first question
    if (currentQuestion == 0) {
       closeLightBox();
    }
     
    // load the image
    let img = document.getElementById("image");
    img.src = questions[currentQuestion].image;
    img.style.maxWidth = "70vh";
	img.style.maxHeight = "80vh";
    
    // load the question and answers
    document.getElementById("question").innerHTML = questions[currentQuestion].question;
    document.getElementById("a").innerHTML = "A. " + questions[currentQuestion].a;
    document.getElementById("b").innerHTML = "B. " + questions[currentQuestion].b;
    document.getElementById("c").innerHTML = "C. " + questions[currentQuestion].c;
    document.getElementById("d").innerHTML = "D. " + questions[currentQuestion].d;
 } // loadQuestion
 
 
 function markIt(ans) {
     
    let message = "";
    
    if (ans == questions[currentQuestion].answer) {
        
       // add 1 to score
       score++;
       
       // display score 
       document.getElementById("score").innerHTML = score + " / " + questions.length;
       
       message = "Correct!!!! Your score is " + score + " / " + questions.length;
    } else {
       message = "Incorrect :< Your score is " + score + " / " + questions.length; 
    } // else
        
   
    
    // move to the next question
    currentQuestion++;
    if (currentQuestion >= questions.length) {
       // create a special message
       message = "You are awesome or not ,or whatever, part of your mark is to give a good message based what the user's score is";
    } else {
       loadQuestion();
    }
    
    // show the lightbox
    document.getElementById("lightbox").style.display = "block";
    document.getElementById("message").innerHTML = message;
  
 }  // markIt
 
 function closeLightBox() {
    document.getElementById("lightbox").style.display = "";
	if (currentQuestion < questions.lengh - 1){
		consol,log("just, closed lightBox an about to start timer");
		starTimer();
		
	}
 } // closeLightbox
 
 function starTimer(){
	 timeLeft = 10;
	 timer = setInterval( function(){
		document.getElementById("lightbox")timeLeft;
		 timeLeft--;
		 if(timeLeft <= 0){
			 clearInterval(timer);
			 document.getElementById("lightbox").style.display = "none";
			 let messaga = "Time over, moving to next question";
			 
			 document.getElementById("message").innerHTML = message;
		 }
	 }, 1000);
 }
 
 function showHint (){
	 let message = "";
	 if(numHintsLeft > 0){
		 message = questions[currentQuestion].hint;
		 numHintsLeft--;
	 }
	 
	 document.getElementById("lightbox").style.display = "block";
     document.getElementById("message").innerHTML = message;
	 
 }
 
 
 
 
 
 
 
 
 
 
 
 
   
