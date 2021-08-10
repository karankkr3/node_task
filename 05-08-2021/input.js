var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var i = 0;
var a = [];
var show = function () {
    rl.question("Enter id : ", function (answer1) {
        a.push(answer1);
        rl.question("Enter name : ", function (answer2) {
            a.push(answer2);
            rl.question("Enter marks : ", function (answer3) {
                a.push(answer3);
                rl.question("Want to continue ? yes/no ", function (answer4) {
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
};
show();
