
let card = [...document.querySelectorAll('.card')]
let progressItems = [...document.querySelectorAll('.item')]
console.log(progressItems)
// let card = document.querySelectorAll('.card')
// let curr=0;
// for(let i=0; i<card.length;i++){
//     let x = card[i].classList.contains('active');
//     if(x){
//         curr=i;
//     }
// }
// console.log(curr)


let curr = card.findIndex(element=>{
return element.classList.contains('active')
})

if(curr<0){
curr=0
card[curr].classList.add('active')
}

document.querySelector("form").addEventListener('click',event=>{

if(event.target.matches('.btn-next')){
curr+=1;
showNext(curr-1,curr);
showProgress(curr);
}
else if(event.target.matches('.btn-prev')){
removeProgress(curr);
curr-=1;
showNext(curr+1,curr);
}
// console.log(curr)

})
function removeProgress(curr){
progressItems[curr].classList.remove('active')

}
function showProgress(curr){
progressItems[curr].classList.add('active')
}

function showNext(prev,curr){
card[curr].classList.add('active')
card[prev].classList.remove('active')

// console.log(number)
// if(number<0){
//     number=0
// }
// else{

//     number = number%card.length;
// }
// if(number>0){

//     card[number-1].classList.remove("active")
// }

// card[number].classList.add('active');
// if(number<card.length){
// card[number+1].classList.remove('active')
// }


}

