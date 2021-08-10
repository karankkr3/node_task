var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var i = 0;
var a = [];
var show = () => {
    rl.question("Enter id : ", (answer1) => {
        a.push(answer1);
        rl.question("Enter name : ", (answer2) => {
            a.push(answer2);
            rl.question("Enter marks : ", (answer3) => {
                a.push(answer3);
                rl.question("Want to continue ? yes/no ", (answer4) => {
                    if (answer4 == "yes") {
                        console.log(a);
                        show();
                    }
                    else {
                        for (var i = 0; i < a.length; i++) {
                            console.log(a[i]);
                        }
                        console.log(JSON.stringify(a));
                        rl.close();
                    }
                });
            });
        });
    });
}

show();