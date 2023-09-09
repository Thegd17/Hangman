const words = ["Apple", "Dog", "Cat", "House", "Car", "Ball", "Tree", "Sun", "Book", "Water",
"Road", "Moon", "Fish", "Bird", "Chair", "Table", "Shoe", "Hat", "Smile", "Friend",
"Door", "Window", "Baby", "Bed", "Lamp", "Flower", "Grass", "Cloud", "Song", "Dance",
"Jump", "Run", "Eat", "Drink", "Sleep", "Laugh", "Cry", "Talk", "Listen", "Read",
"Write", "Watch", "Play", "Sing", "Think", "Happy", "Sad", "Angry", "Tired", "Funny",
"Quiet", "Loud", "Cold", "Hot", "Fast", "Slow", "Big", "Small", "Tall", "Short", "Old",
"Young", "Fat", "Thin", "Beautiful", "Ugly", "Good", "Bad", "Kind", "Mean", "Brave",
"Scared", "Strong", "Weak", "Smart", "Dumb", "Clean", "Dirty", "Happy", "Sad", "Funny",
"Serious", "Big", "Small", "Fast", "Slow", "Rich", "Poor", "Easy", "Difficult", "Bright",
"Dark", "Sweet", "Sour", "Safe", "Dangerous", "Soft", "Hard", "Open", "Closed", "New",
"Old", "Right", "Wrong", "True", "False", "True", "False", "Right", "Wrong", "Near",
"Far", "Here", "There", "Above", "Below", "In", "Out", "On", "Under", "Behind", "Front",
"First", "Last", "Next", "Previous", "One", "Two", "Three", "Four", "Five", "Six", "Seven",
"Eight", "Nine", "Ten", "Red", "Blue", "Green", "Yellow", "Orange", "Purple", "Pink",
"Brown", "Black", "White", "Gray", "Happy", "Sad", "Angry", "Hungry", "Thirsty", "Hot",
"Cold", "Wet", "Dry", "Noisy", "Quiet", "Busy", "Lazy", "Friendly", "Shy", "Famous",
"Unknown", "Useful", "Useless", "Bright", "Dark", "Strong", "Weak", "Empty", "Full",
"Clean", "Dirty", "Early", "Late", "Young", "Old", "Happy", "Sad", "Funny", "Serious",
"Fast", "Slow", "Big", "Small", "Light", "Heavy", "Simple", "Complex", "Safe", "Dangerous",
"Soft", "Hard", "Open", "Closed", "Short", "Long", "Near", "Far", "High", "Low", "Right",
"Wrong", "True", "False", "Clean", "Dirty", "Good", "Bad", "Kind", "Mean", "Brave",
"Scared", "Happy", "Sad", "Funny", "Serious", "Easy", "Difficult", "Bright", "Dark",
"Sweet", "Sour", "Safe", "Dangerous", "Soft", "Hard", "Open", "Closed", "New", "Old",
"Right", "Wrong", "True", "False", "True", "False", "Right", "Wrong", "Near", "Far",
"Here", "There", "Above", "Below", "In", "Out", "On", "Under"]

function random_index() {
    var n = Math.floor(Math.random()*250)
    return n
}

document.querySelectorAll('button')[0].addEventListener("click",()=>{
    var inputField = document.getElementById("inputField");
    inputField.focus();
    document.querySelectorAll("button")[0].innerHTML = "Start"
    document.querySelector(".word").classList.remove("guessed");
    document.querySelector(".word").classList.remove("dead");
    document.querySelectorAll("button")[0].classList.add("pressed");
    document.querySelectorAll("p")[0].classList.remove("big");

    setTimeout(() => {
        document.querySelectorAll("button")[0].classList.remove("pressed");
    },75)
    var word = (words[random_index()]).toUpperCase();
    console.log(word)
    var word_letters = [];
    var len = word.length;
    const word_list = [];
    const current_word = [];
    var lives = ["❤️","❤️","❤️","❤️","❤️","❤️"];

    for(var i=0;i<len;i++) {
        word_letters.push(word.charAt(i));
    }

    for (var i = 0;i<len;i++) {
        current_word.push("-")
    }
    console.log(current_word.join(""));

    guessed_word = current_word.join("");
    document.querySelector(".word").innerHTML = guessed_word;

    document.querySelectorAll("p")[0].innerHTML = lives.join("");

    document.addEventListener("keyup",(event)=>{
        letter = (event.key).toUpperCase();
        console.log(letter)
        console.log(lives)
        if (word_letters.includes(letter)) {
            position = word_letters.indexOf(letter);
            current_word[position] = letter;
            guessed_word = current_word.join("");
            document.querySelector(".word").innerHTML = guessed_word;
            word_letters[position] = '-';
            len--;
            if (len===0) {
                console.log("you Guess the word")
                document.querySelector("P").innerHTML = "YAY! You Guessed The Word";
                document.querySelector(".word").innerHTML = word;
                document.querySelector(".word").classList.add("guessed");
                document.querySelectorAll("p")[0].classList.add("big");
                document.querySelectorAll("button")[0].innerHTML = "Play again";s
            }
        } else {
            lives.pop(1);
            document.querySelectorAll("p")[0].innerHTML = lives.join("")
            if (lives.length===0) {
                
                document.querySelector(".word").innerHTML = "You Died!";
                document.querySelector(".word").classList.add("dead");
                document.querySelectorAll("button")[0].innerHTML = "Play again";
                console.log("exit")
                return 0; 
            }
        }
    })   
})