const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(question) {
    let answer;

    return new Promise((resolve, reject) => {
        rl.question(question, (ans) => {
            resolve(ans);
        })
    });
}


async function Program() {
    // Your Code Here...
    let input = await askQuestion("Select your option : ");
    input= parseInt(input);
    while (input!= 10) {
        switch (input) {
            case 1:{
                console.log("you selected 1");
                break;
            }
            case 2:{
                console.log("you selected 2");
                break;
            }
            default: console.log("Other");
        }
        input = await askQuestion("Select your option : ");
        input = parseInt(input);
    }
}




Program().then(() => {
    process.exit(0);
});