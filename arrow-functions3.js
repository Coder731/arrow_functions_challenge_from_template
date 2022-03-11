// ## New approach: simple, non general, specific:
// ### Step 1:
// take user input, using previously done code:

    // So it takes input from user

        //define input function:
        // Reference:
        // https://www.mikedane.com/web-development/javascript/getting-user-input/#:~:text=In%20JavaScript%2C%20we%20can%20get%20user%20input%20like%20this%3A&text=var%20name%20%3D%20window.,out%20what%20they%20entered%20in.

        // prompt 2.0 (see Debug Issue 2 in README)
        // https://nodejs.org/en/knowledge/command-line/how-to-prompt-for-command-line-input/
        import { createInterface } from 'readline';
        const rl = createInterface({
        input: process.stdin,
        output: process.stdout
        });

        rl.question('What subject ? ', function (name) {
        rl.question('grade here not from user ? ', function (country) {
            console.log(`${name}, grade was ${country}`);
            rl.close();
        });
        });

        rl.on('close', function () {
        console.log('\nBYE BYE !!!');
        process.exit(0);
        });


// ->  tidy it up
//     so it takes
//     english
// ->  and passes stuff along
// ->  and outputs 77.5

// ### Step 2:
// manual way to do just
// the addition, not the average yet.... is:

// ### Step 3: as an interim / prelude stepL: (declare variables) :
// a = students.key  -> value[0]
// b = students.key  -> value[1]
// c = students.key  -> value[2]

// ### Step 4: 
// take sum
// divide by 3
// = average (avg)
