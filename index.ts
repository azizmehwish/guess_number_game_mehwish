#! /usr/bin/env node
import inquirer from "inquirer"
let roundNumber:number=Math.floor((Math.random()*4)+1);
let userInput=await inquirer.prompt({
    type:"number",
    name:"guessNumber",
    message:"guess a number between 1-4"
})
if(userInput.guessNumber===roundNumber){
    console.log(`congratulation! you guess number correctly`)
}
else{
    console.log(`sorry! try again,correct number is:${roundNumber}`);
}