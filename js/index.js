// let a = 30;
// let b=40;
// if(a>b)
// {
//     console.log(`${a} is greater than ${b}`);
// }
// else
// {
//     console.log(b + "is greater" + a);
// }
// let i=0;
// while( i<10){
// console.log(i);
// i++;
// }
// let r=2;
// if(r%2==0)
// {
//     console.log(`r is even `);
// }
// else
// {
//     console.log(`r is not odd`);

// }
// for(let i=0; i<=10; i++)
// {
//     if(i%2==0)
//     {
//         console.log(`number is even`);
//     }
//     else {
//         console.log(`number is odd`);
//     }
// }
// const obj1={
//     id:1, name:"ram",
//     address:"chitwan",isbetter:true,

// };
// console.log(obj1.address);
// console.log(obj1.name);
// console.log(`${obj1.name} ${obj1.id}`);


let hide=document.getElementById('hide');
let button=document.getElementById('butt');
button.addEventListener('click',myfunction);
function myfunction()
{
    if(hide.style.display=="block"){
        hide.style.display="none";
    }
    else{
        hide.style.display="block";
    }
}

