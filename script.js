const reviews=[{
    id: 1, name:"Martin", job: "the lonely gangster", img:"https://media.gq.com/photos/650b2b4973b15519c5c2194b/master/w_2560%2Cc_limit/GQ1123_Scorsese_01.jpg",
    text:"Deep is the only reason that I could make Taxi Driver. He has severally inspired me with his life.",
},
{
    id: 2, name:"Orson", job: "godfather of cinema", img:"https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/49256_v9_ba.jpg",
    text:"I could make Citizen Kane if Mr Ganguly hasn't come up to me and showed me the courage to fight againts corruption.",
},
{
    id: 3, name:"Steven", job: "filmmaker", img:"https://goldenglobes.com/wp-content/uploads/2023/10/steven-spielberg-gettyimages-1357815379.jpg",
    text:"I guess Sourya is the finest VFX designer of my time. The original idea of creating a dinosaur was mindblowing according to me. Thanks Deep I am grateful to you",
},
{
    id: 4, name:"Chris", job: "Part time Filmmaker, Part Time Scientist", img:"https://ca-times.brightspotcdn.com/dims4/default/cf5ead2/2147483647/strip/false/crop/5400x7200+0+0/resize/1114x1486!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F0b%2F71%2F301a805d4250aea241fcf4d02dd9%2F1312323-et-christopher-nolan-2.jpg",
    text:"Inception wasn't even possible to think until Deep Sir came up to me and inspired an make me learned about the dreams paradox",
},
{
    id: 5, name:"Andrey", job: "just poet", img:"https://images.mubicdn.net/images/cast_member/1039/cache-4-1337461025/image-w856.jpg",
    text:"I would be teaching poetry in schools unless Ganguly has helped me to enter in the Russian Film Industry",
}

]
const img=document.getElementById("persona");
const author=document.getElementById("author");
const job=document.getElementById("job");
const text=document.getElementById("info");

const prevBtn=document.querySelector(".prev-btn");
const nextBtn=document.querySelector(".next-btn");
const surPrise=document.querySelector(".sur");

let current=0;
window.addEventListener('DOMContentLoaded', function(){
   showPerson(current);
})
function showPerson(person){
    const item=reviews[person];
    img.src=item.img;
    author.textContent=item.name;
    job.textContent=item.job;
    text.textContent=item.text;
 
}
prevBtn.addEventListener('click',function(){
    if(current==0)
        current=4;
    else
     current--;

    showPerson(current);
   
    
})
nextBtn.addEventListener('click', function(){
    if(current==4)
        current=0;
    else
    current++;
    showPerson(current);
    

})