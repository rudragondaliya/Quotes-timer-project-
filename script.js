// S L I D E R 

let slidecontainer = document.querySelector(".slider-container");
let slides = document.querySelectorAll(".slider-item ");
let indicators = document.querySelectorAll('.indicator')

let currentSlide = 0;

function showSlides(index){

    if(index >= slides.length){
        currentSlide = 0;

    }else if(index < 0){
        currentSlide = slides.length - 1;

    }else {
        currentSlide = index;

    }

     slides.forEach((slide, i) => {

       slide.classList.remove("active");
       if (i === currentSlide) {
         slide.classList.add("active");

       }
     });

     indicators.forEach((indicator,index) => {
        indicator.classList.remove('active');
        if(index === currentSlide){
            indicator.classList.add('active');
        }
     });

}

function changeSlide(direction){
    showSlides(currentSlide + direction);
}

setInterval(() => {
    changeSlide(1);
}, 5000);

showSlides(currentSlide);


// Q U O T E S

        const data = document.querySelector('.blockquote p');
        const authorName = document.querySelector('.blockquote-footer');

        const quotes = [
        { quote: "The only way to do great work is to love what you do.", 
        name: "Steve Jobs" },

        { quote: "In the middle of difficulty lies opportunity.", 
        name: "Albert Einstein" },

        { quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
         name: "Winston Churchill" },

        { quote: "Believe you can and you're halfway there.", 
        name: "Theodore Roosevelt" },

        { quote: "Do what you can, with what you have, where you are.", 
        name: "Theodore Roosevelt" },

        { quote: "It always seems impossible until it is done.", 
        name: "Nelson Mandela" },

        { quote: "Happiness depends upon ourselves.", 
        name: "Aristotle" },

        { quote: "Opportunities don't happen, you create them.", 
        name: "Chris Grosser" },

        { quote: "If you want to lift yourself up, lift up someone else.", 
        name: "Booker T. Washington" },

        { quote: "Act as if what you do makes a difference. It does.", 
        name: "William James" }
];

    function changeQuates(){
        const index = Math.floor(Math.random() * quotes.length);
        data.textContent = quotes[index].quote;
        authorName.textContent = quotes[index].name;
    }

    changeQuates();

// T I M E R 
let time = document.getElementById('time').textContent;

let id;

const startTimer = ()=>{
    id = setInterval(()=>{

        if(time==0){
            changeQuates();
            
            time = 10
            document.getElementById('time').textContent = time
        
        }
        time--;
        document.getElementById('time').textContent =  time>9 ? time : '0'+time;
    },1000)
}  

startTimer()

const stopTimer = ()=>{
    clearInterval(id);
} 
