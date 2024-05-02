#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 5000;
let choices = [chalk.blueBright("Stone Axe: 3000"), chalk.blueBright("Sword: 2000"), chalk.blueBright("Dagger: 1500")];
export async function market(name) {
    console.log(chalk.red.underline(`\n${chalk.blue(name)} you are welcome to my shop\n`));
    const weapons = await inquirer.prompt([
        {
            name: "buy",
            type: "list",
            message: chalk.green(`What do you want to purchase...?.\n  Make sure that your remaining balance is ${chalk.yellow.underline(myBalance)}`),
            choices: choices,
        },
    ]);
    let { buy } = weapons;
    switch (buy) {
        case choices[1]: {
            if (myBalance >= 2000) {
                myBalance -= 2000;
                console.log(chalk.yellow.bold("Sword successfully purchased"));
                console.log(chalk.red("▬▬ι═══════ﺤ"));
            }
            else {
                console.log(chalk.yellow.bold("insufficient balance."));
            }
            break;
        }
        case choices[0]: {
            if (myBalance >= 3000) {
                myBalance -= 3000;
                console.log(chalk.yellow.bold("Stone Axe successfully purchased"));
            }
            else {
                console.log(chalk.yellow.bold("insufficient balance."));
            }
            break;
        }
        case choices[2]: {
            if (myBalance >= 1500) {
                myBalance -= 1500;
                console.log(chalk.yellow.bold("Dagger successfully purchased"));
            }
            else {
                console.log(chalk.yellow.bold("insufficient balance."));
            }
            break;
        }
    }
}
