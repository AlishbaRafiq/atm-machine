#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 25000; // dollars
let myPin = 91006;

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "Please enter your pin",
    type: "number",
  },
]);

if (pinAnswer.pin === myPin) {
  console.log("correct pin code!!!!");

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "Please select option",
      type: "list",
      choices: ["withDraw", "fastCash", "check balance"],
    },
  ]);

  if (operationAns.operation === "withDraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "Please enter amount",
        type: "number",
      },
    ]);

    if (amountAns.amount <= myBalance) {
      myBalance = myBalance - amountAns.amount;
      console.log(`Your remaining balance is: ${myBalance}`);
    } else {
      console.log("Insufficient Balance");
    }
  } else if (operationAns.operation === "fastCash") {
    let cashAns = await inquirer.prompt([
      {
        name: "cash",
        message: "please select your amount",
        type: "list",
        choices: ["500", "1000", "5000", "10000", "20000"],
      },
    ]);

    if (cashAns.cash <= myBalance) {
      myBalance = myBalance - cashAns.cash;
      console.log(`Your remaining balance is: ${myBalance}`);
    } else {
      console.log("Insufficient Balance");
    }
  } else if (operationAns.operation === "check balance") {
    console.log(`Your remaining balance is: ${myBalance}`);
  }
} else {
  console.log("Invalid pin code!!!!");
}



