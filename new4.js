
const min=1;
const max=100;
const answer=(Math.floor(Math.random()*(max-min+1))+min)


let guess;
let attempt=0;
let running=true;

while(running){
guess=window.prompt(`Enter the number bewtween ${min}- ${max}`);
guess=Number(guess);

if(isNaN(guess)){
    window.alert("Enter a valid number");
}
else if (guess>max || guess<min){
    window.alert(`Enter a number between ${min}-${max} `);
}

else {
attempt++;
if(guess>answer){
    window.alert("Number is TOO high");
}
else if(guess<answer){
    window.alert("Number is Too low");
}
else {
   window.alert(`yey, correct ${attempt} attempt`);
running = false;
}



}
}

