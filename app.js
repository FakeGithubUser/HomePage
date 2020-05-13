const startedDate = new Date('2020-05-12');
const todayDate =new Date();
const endDate= new Date('2020-08-11');


//How Many Days Have gone

const milliToDays=(difference)=> Math.floor(difference/1000/60/60/24);

const goneDays=milliToDays(todayDate-startedDate);
const daysLeft=milliToDays(endDate-todayDate);

const progressBar = document.getElementById('tox-progress');
const message=document.querySelector('.tox-progress-content');

const percentage =Math.floor((goneDays/90)*100);


progressBar.dataset.progress=percentage;
message.innerHTML=`${daysLeft} Days More <br> ${percentage}%`;
ToxProgress.create();
ToxProgress.animate();

let [randomTextOne,randomTextTwo]=[Math.floor(Math.random()*21),Math.floor(Math.random()*21)];

const [textOne,textTwo]=document.querySelectorAll('.card > p')
if(randomTextOne===randomTextTwo){
    randomTextTwo=randomTextTwo<21? randomTextTwo+1:randomTextTwo-1;
}

console.log(textOne)
$.getJSON('https://fakegithubuser.github.io/HomePage/quotes.json',(data)=>{
    textOne.innerHTML=data.Quotes[randomTextOne].quote;
    textTwo.innerHTML=data.Quotes[randomTextTwo].quote;

})

function getGoogle(e){
   if(e.keyCode===13){
    e.preventDefault();
       const url=`https://www.google.com/search?q=${e.target.value}`;
      window.location.href=url;
   }
}

console.log(goneDays,daysLeft);
