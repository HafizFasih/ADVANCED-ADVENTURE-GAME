#! /usr/bin/env node
import inquirer from "inquirer";
import { market } from "./function.js";
import chalk from "chalk";
console.log(chalk.red("\t\t\t\t\t<======="), chalk.bgWhite.red.italic.bold("CODE WITH MUHAMMAD FASIH"), chalk.red("=======>"));
console.log(chalk.green("\t\t           <---------------"), chalk.blue.italic.bold("AN ADVENTURE GAME USING TYPESCRIPT"), chalk.green("--------------->\n"));
console.log(chalk.red.bold("\t\t\t\t\t\t  ( -_•)╦==╤─   - (◣_◢)"));
let healing = 7;
let turn = 0;
let purchase = 0;
let userHP = 100;
let enemyHP = 100;
var name = await inquirer.prompt([
    {
        name: "userName",
        type: "input",
        message: chalk.green("Mention your name, soldier."),
        validate: (val) => {
            if (val.length > 1) {
                return true;
            }
            else {
                return chalk.red("Please enter your name.");
            }
        },
    },
]);
console.log(chalk.yellow(`\n( -_･) ︻デ═一 ▸ `), chalk.yellow.underline(`HELLO ${chalk.italic.blue(name.userName.toUpperCase())}, WELCOME TO MY ARENA\n`));
const enemy = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: chalk.green("Enter your enemy's name..."),
        validate: (val) => {
            if (val.length > 1) {
                return true;
            }
            else {
                return chalk.red("Please enter your name.");
            }
        },
    },
]);
console.log("\n");
class game {
    constructor() {
        this.userName = name.userName;
        this.userHealth = userHP;
        this.enemyName = enemy.name;
        this.enemyHealth = enemyHP;
    }
    punch() {
        let luck = Math.floor(Math.random() * 2);
        let randomNum = Math.floor(Math.random() * 3);
        let msg = "Dummy";
        switch (randomNum) {
            case 0: {
                luck == 0
                    ? ((enemyHP -= 20), (msg = "Not bad, at least it weakened him."))
                    : ((userHP -= 20),
                        (msg = "Well played! That move only made them stronger!"));
                break;
            }
            case 1: {
                luck == 0
                    ? ((enemyHP -= 50),
                        (msg =
                            "Pow! That punch was pure perfection, leaving them seeing stars!"))
                    : ((userHP -= 50),
                        (msg =
                            "Oh dear! That punch was terribly off, leaving them unscathed!"));
                break;
            }
            case 2: {
                luck == 0
                    ? ((enemyHP -= 90),
                        (msg =
                            "How legendary! With that punch, he's about to meet his end"))
                    : ((userHP -= 90),
                        (msg =
                            "Unbelievable fortitude! That punch has only made him more indomitable!"));
                break;
            }
        }
        if (userHP < 0) {
            userHP = 0;
        }
        if (enemyHP < 0) {
            enemyHP = 0;
        }
        console.log(chalk.blue.underline(`\nRemaining health of ${name.userName}: ${chalk.red(userHP)}`));
        console.log(chalk.blue.underline(`Remaining health of ${enemy.name}: ${chalk.red(enemyHP)}\n`));
        console.log(chalk.magenta.italic.underline(msg), "\n");
    }
    kick() {
        let luck = Math.floor(Math.random() * 2);
        let randomNum = Math.floor(Math.random() * 3);
        let msg = "Dummy";
        if (randomNum === 0) {
            randomNum = 1;
        }
        switch (randomNum) {
            case 1: {
                luck == 0
                    ? ((enemyHP -= 30),
                        (msg =
                            "Wow! That kick sent shockwaves through the arena, leaving everyone in awe!"))
                    : ((userHP -= 30),
                        (msg =
                            "Alas, that kick turns out to be unfavorable for your situation."));
                break;
            }
            case 2: {
                luck == 0
                    ? ((enemyHP -= 40),
                        (msg =
                            "Wow! That kick was impressive, even your opponent couldn't help but be amazed!"))
                    : ((userHP -= 40),
                        (msg =
                            "Oops! That kick backfired, even impressing your opponent!"));
                break;
            }
        }
        if (userHP < 0) {
            userHP = 0;
        }
        if (enemyHP < 0) {
            enemyHP = 0;
        }
        console.log(chalk.blue.underline(`\nRemaining health of ${name.userName}: ${chalk.red(userHP)}`));
        console.log(chalk.blue.underline(`Remaining health of ${enemy.name}: ${chalk.red(enemyHP)}\n`));
        console.log(chalk.magenta.italic.underline(msg), "\n");
    }
    async shop() {
        console.log(`${this.userName} you are welcome to my shop`);
    }
    weaponFight() {
        let luck = Math.floor(Math.random() * 2);
        let randomNum = Math.floor(Math.random() * 3);
        let msg = "Dummy";
        switch (randomNum) {
            case 0: {
                luck === 0
                    ? ((enemyHP -= 60), (msg = "That was an amazing shot."))
                    : ((userHP -= 60), (msg = "Opps.. maybe he is stronger than me."));
                break;
            }
            case 1: {
                luck === 0
                    ? ((enemyHP -= 10), (msg = "Perhaps that attack slipped by you."))
                    : ((userHP -= 10), (msg = "Thank god, it doesn't hurt that much."));
                break;
            }
            case 2: {
                luck === 0
                    ? (msg = "Nothing happened to him...how??")
                    : (msg = "Hahaha, Not today Mister..");
            }
        }
        if (userHP < 0) {
            userHP = 0;
        }
        if (enemyHP < 0) {
            enemyHP = 0;
        }
        console.log(chalk.blue.underline(`\nRemaining health of ${name.userName}: ${chalk.red(userHP)}`));
        console.log(chalk.blue.underline(`Remaining health of ${enemy.name}: ${chalk.red(enemyHP)}\n`));
        console.log(chalk.magenta.italic.underline(msg), "\n");
    }
    magic() {
        enemyHP = 0;
        console.log(chalk.magenta.italic.underline("Hahaha.... You can't bro."));
        console.log(chalk.red("\nଘ(∩^o^)⊃━☆゜"));
    }
    defence() {
        let luck = Math.floor(Math.random() * 2);
        let randomNum = Math.floor(Math.random() * 3);
        let msg = "Dummy";
        switch (randomNum) {
            case 0: {
                luck === 0
                    ? ((enemyHP -= 10), (msg = "It was so close."))
                    : ((userHP -= 10), (msg = "Opps.. maybe he is stronger than me."));
                break;
            }
            case 1: {
                luck === 0
                    ? ((enemyHP -= 15), (msg = "Perhaps that attack slipped by you."))
                    : ((userHP -= 15), (msg = "Thank god, it doesn't hurt that much."));
                break;
            }
            case 2: {
                luck === 0
                    ? (msg = "Nothing happened to him...how??")
                    : (msg = "Hahaha, Not today Mister..");
            }
        }
        if (userHP < 0) {
            userHP = 0;
        }
        if (enemyHP < 0) {
            enemyHP = 0;
        }
        console.log(chalk.blue.underline(`\nRemaining health of ${name.userName}: ${chalk.red(userHP)}`));
        console.log(chalk.blue.underline(`Remaining health of ${enemy.name}: ${chalk.red(enemyHP)}\n`));
        console.log(chalk.magenta.italic.underline(msg), "\n");
    }
}
let mainFunction = async () => {
    let userWins = 0;
    let enemyWins = 0;
    for (let i = 1; i <= 3; i++) {
        enemyHP = 100;
        userHP = 100;
        if (i == 1) {
            console.log(chalk.magentaBright.underline("\t\t\t<==First Round==>".toUpperCase()));
        }
        if (i == 2) {
            console.log(chalk.magentaBright.underline("\t\t\t<==Second Round==>".toUpperCase()));
        }
        if (i == 3) {
            console.log(chalk.magentaBright.underline("\t\t\t<==Third Round==>".toUpperCase()));
        }
        console.log(chalk.red("\t\t    (ง •̀_•́)ง    ୧(•̀_•́ ୧)"));
        console.log("\n");
        let condition = true;
        while (condition) {
            let str = [
                chalk.blueBright("Attack"),
                chalk.blueBright("Defence"),
                chalk.blueBright("Heal Yourself"),
                chalk.blueBright("Magic"),
            ];
            let step = await inquirer.prompt([
                {
                    name: "fristQuestion",
                    type: "list",
                    message: chalk.green("What are you looking for...?"),
                    choices: str,
                },
            ]);
            let { fristQuestion } = step;
            if (fristQuestion === str[0]) {
                let choose = [
                    chalk.blueBright("Punch"),
                    chalk.blueBright("Kick"),
                    chalk.blueBright("Use Weapon"),
                ];
                let choice = await inquirer.prompt([
                    {
                        name: "select",
                        type: "list",
                        message: chalk.green("What do you want to do..?"),
                        choices: choose,
                    },
                ]);
                switch (choice.select) {
                    case choose[0]:
                        new game().punch();
                        break;
                    case choose[1]:
                        new game().kick();
                        break;
                    case choose[2]:
                        {
                            let weapon = await inquirer.prompt([
                                {
                                    name: "select",
                                    type: "list",
                                    message: chalk.green("Select one of these..."),
                                    choices: [
                                        chalk.blueBright("Purchase a weapon"),
                                        chalk.blueBright("Attack with weapon"),
                                    ],
                                },
                            ]);
                            if (weapon.select == chalk.blueBright("Attack with weapon")) {
                                if (purchase == 0) {
                                    console.log(chalk.yellow.bold("First you have to purchase the weapon."));
                                }
                                if (purchase > 0) {
                                    new game().weaponFight();
                                }
                            }
                            if (weapon.select == chalk.blueBright("Purchase a weapon")) {
                                await market(name.userName);
                                purchase = 10;
                            }
                        }
                        break;
                }
            }
            else if (fristQuestion === str[2]) {
                if (healing > 0) {
                    healing -= 1;
                    console.log(chalk.yellow.bold(`Total ${healing} potions are left...`));
                    let randomNum = Math.floor(Math.random() * 3);
                    switch (randomNum) {
                        case 0:
                            userHP += 20;
                            break;
                        case 1:
                            userHP += 30;
                            break;
                        case 2:
                            userHP += 50;
                            break;
                    }
                    if (userHP > 100) {
                        userHP = 100;
                    }
                    console.log(chalk.red("\n◝(ᵔᵕᵔ)◜"));
                    console.log(chalk.magenta.italic.underline("\nNow feeling much better..."));
                    console.log(chalk.blue.underline(`${name.userName}'s health status: ${chalk.red(userHP)}\n`));
                }
                else {
                    console.log(chalk.yellow.bold("Potion is out of stack, can't be able to heal now."));
                }
            }
            else if (fristQuestion === str[3]) {
                if (turn == 0) {
                    console.log(chalk.yellow.bold("\nYou can use it only once...\n"));
                    new game().magic();
                    console.log(chalk.blue.underline(`\n${enemy.name}'s health status: ${chalk.red(enemyHP)}`));
                    turn += 1;
                }
                else {
                    console.log(chalk.yellow.bold("You have already used it."));
                }
            }
            else if (fristQuestion === str[1]) {
                new game().defence();
            }
            if (userHP == 0) {
                console.log(chalk.red("(  •̀ - •́  )"));
                console.log(chalk.yellow.italic.underline(`\n${enemy.name.toUpperCase()} Wins!`));
                condition = false;
                enemyWins++;
            }
            else if (enemyHP == 0) {
                console.log(chalk.red("(⑅˘͈ ᵕ ˘͈ )"));
                console.log(chalk.yellow.italic.underline(`\n${name.userName.toUpperCase()} Wins!`));
                condition = false;
                userWins++;
            }
        }
    }
    if (userWins >= 2) {
        console.log(chalk.blue.underline(`\nTHE FINAL WINNER IS ${chalk.red(name.userName.toUpperCase())}`));
        console.log(chalk.red("\\( ﾟヮﾟ)/"));
    }
    else if (enemyWins >= 2) {
        console.log(chalk.blue.underline(`\nTHE FINAL WINNER IS ${chalk.red(enemy.name.toUpperCase())}`));
        console.log(chalk.red("ദ്ദി ༎ຶ‿༎ຶ )"));
    }
};
mainFunction();
