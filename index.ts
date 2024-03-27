#! /usr/bin/env node

import inquirer from "inquirer";

console.log ("\n\tWELLCOME TO CLI NUMBER GUESSING GAME BY ARBAZ\n")

const randomNumber = Math.floor(Math.random() * 5 + 1);

const answer = await inquirer.prompt([
    {
    name: "userGuessedNumber",
    type: "number",
    message: "enter your guess number(number limit from 1 to 5 ):",
    },
]);


if (answer.userGuessedNumber === randomNumber){
    console.log("CONGRATULATIONS! You Guessed A Correct Number.");
}
else{
    console.log("SORRY! You Guessed A Wrong Number.");
}