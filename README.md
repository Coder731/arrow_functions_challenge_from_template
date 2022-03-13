# Arrow Functions

To use this repository:
- Click the "Use this template" button in the upper right
- Choose a name for your repository and create it
- In your own repository, click the green "Gitpod" button


# Own
## Question:

In this challenge use both types, and unless stated, choose the type you are most comfortable with.
 
In particular, you will:
Work with arrow functions
Log values to the terminal

Your result should look like the image below when the string "english" is passed into the function

78.5

## "Pre-requisites"

### Code needed to run program in linux terminal
#### run old file
node arrow-functions2.js
#### run new file
node arrow-functions3.js



## Working through solution
### Attempt 1 Pseudo code
So it takes input from user

passes it into program

uses the key

to get the value

and console.log(value)

if (without if) 
if user gives english
gets 78.5

as this is average english score for all students

3 students

### Attempt 2
Where from here?
#### Step 1:
Tidy code by removing commented elements that definitely will not be used.

#### Step2:
Add new code into original thoughts / plan under relevant comment(s)

#### Step 3:
Tidy and order code into plan
##### Reference
- [Clean Code initiative: "once the code works, that's when you have to clean it"](https://youtu.be/7EmboKQH8lM?t=1858)

#### Step 4:
change the input to something meaningful
#### Step 4.1:
ai kite or emmet extension showed triple dot underline and when clicked
a light bulb,
and when the light bulb was clicked,
changed code automatically to be ES6 (I think) compliant: 
from this:

```
const readline = require('readline');

```

through this:

```
import * as readline from 'readline';
```

to this:

```
import { createInterface } from 'readline';
```

which  explains why / where createInterface comes from on the next line

## New approach: simple, non general, specific:
### Step 1:
take user input, using previously done code (from arrow-functions2.js)
->  tidy it up
    so it takes
    english
->  and passes stuff along
->  and outputs 77.5

### Step 2:
manual way to do just
the addition, not the average yet.... is:

### Step 3: as an interim / prelude stepL: (declare variables) :
a = students.key  -> value[0];

b = students.key  -> value[1];

c = students.key  -> value[2];

### Step 4: 
take sum
divide by 3
= average (avg)

## 11Mar2022 1215h
Ok so, 

arrow-functions2.js
and
arrow-functions3.js

don't run (fully?) have errors

but,
arrow-functions.js runs.

### arrow-functions.js output

```
8
10
Hello there!!
hello
<p>
        This is a multiline string!
    </p>
undefined
undefined
```

## 11Mar2022 1217h
Next step is to make a Slideshow with outputs and code aligned, or python tutor.

- [Link to aforementioned slides](https://docs.google.com/presentation/d/1U__F7Lu0I_njtEMKVuJJwXdS8TLNJN3H6EUeobM7UWg/edit?usp=sharing)

## Duplicate into new js file
remove comments

## 11Mar2022 1608h
### Debug
#### Steps to reproduce error
Run arrow-functions.js

#### Error in terminal

```
gitpod /workspace/arrow_functions_challenge_from_template (main) $ node arrow-functions4.js
/workspace/arrow_functions_challenge_from_template/arrow-functions4.js:33
        const rl = createInterface({
                   ^

ReferenceError: createInterface is not defined
    at Object.<anonymous> (/workspace/arrow_functions_challenge_from_template/arrow-functions4.js:33:20)
    at Module._compile (node:internal/modules/cjs/loader:1101:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:17:47
```

## 11Mar2022 2020h
Check reference to see if createInterface was declared earlier on the original site and that the declaration was not copied into this code base.  

Thesis question: Is createInterface used without being declared in this code base, and this is what is causing the error? 

## 11Mar2020 2028h
### Overview of Questions 1 to 4 taken from commit 57c8423

Q1/ What is reference that createInterface came from? 

A1/
- Reference to review: [node js prompt user input from cli](https://nodejs.org/en/knowledge/command-line/how-to-prompt-for-command-line-input/)
- In answer to thesis question above: No, createInterface is used for the first time on site and in this code base at the same point.

Q2/ Is the same code working in iterations 1 2 / 3 of js file, but not 4? 

A2/ Steps: Run: 
  - arrow-functions.js 
  - arrow-functions2.js 
  - arrow-functions3.js 
  - arrow-functions4.js

Q3/ If so, are there differences? 

Q4/ What are they?


### Questions 1 to 4 with answers in between

Q1/ What is reference that createInterface came from?
A1/ 
- Reference to review: [node js prompt user input from cli](https://nodejs.org/en/knowledge/command-line/how-to-prompt-for-command-line-input/)
- In answer to thesis question above: No, createInterface is used for the first time on site and in this code base at the same point.

### Next step 2054h
Q2/ Is the same code working in iterations 1 2 / 3 of js file, but not 4?

  A2/ Steps: 

    Run:

  #### arrow-functions.js

        - Complete

  #### Output:
            
            ```
            8
            10
            Hello there!!
            hello
            <p>
                    This is a multiline string!
                </p>
            undefined
            undefined
            ```
      
  #### arrow-functions2.js
        - Complete (error)
  #### Output:

            ```
            (node:3089) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
            (Use `node --trace-warnings ...` to show where the warning was created)
            /workspace/arrow_functions_challenge_from_template/arrow-functions2.js:54
                import { createInterface } from 'readline';
                ^^^^^^

            SyntaxError: Cannot use import statement outside a module
                at Object.compileFunction (node:vm:352:18)
                at wrapSafe (node:internal/modules/cjs/loader:1031:15)
                at Module._compile (node:internal/modules/cjs/loader:1065:27)
                at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
                at Module.load (node:internal/modules/cjs/loader:981:32)
                at Function.Module._load (node:internal/modules/cjs/loader:822:12)
                at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
                at node:internal/main/run_main_module:17:47
            ```

  #### arrow-functions3.js
            - Complete (error)
  #### Output:
  
            ```
            /workspace/arrow_functions_challenge_from_template/arrow-functions3.js:48
                    const rl = createInterface({
                              ^

            ReferenceError: createInterface is not defined
                at Object.<anonymous> (/workspace/arrow_functions_challenge_from_template/arrow-functions3.js:48:20)
                at Module._compile (node:internal/modules/cjs/loader:1101:14)
                at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
                at Module.load (node:internal/modules/cjs/loader:981:32)
                at Function.Module._load (node:internal/modules/cjs/loader:822:12)
                at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
                at node:internal/main/run_main_module:17:47
            ```

  #### arrow-functions4.js  
        - Complete (error)

  #### Output

        ```
        /workspace/arrow_functions_challenge_from_template/arrow-functions4.js:33
                const rl = createInterface({
                          ^

        ReferenceError: createInterface is not defined
            at Object.<anonymous> (/workspace/arrow_functions_challenge_from_template/arrow-functions4.js:33:20)
            at Module._compile (node:internal/modules/cjs/loader:1101:14)
            at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
            at Module.load (node:internal/modules/cjs/loader:981:32)
            at Function.Module._load (node:internal/modules/cjs/loader:822:12)
            at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
            at node:internal/main/run_main_module:17:47
        ```

#### Interim correction in js file 2:
change:

```
import { createInterface } from 'readline';
```

to

```
const readline = require('readline');
```

#### Output from jsfile 2 post correction:

```
undefined
undefined
/workspace/arrow_functions_challenge_from_template/arrow-functions2.js:60
    const rl = createInterface({
               ^

ReferenceError: createInterface is not defined
    at Object.<anonymous> (/workspace/arrow_functions_challenge_from_template/arrow-functions2.js:60:16)
    at Module._compile (node:internal/modules/cjs/loader:1101:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:17:47
```

#### post interim change

now the error has gone from:

```
                import { createInterface } from 'readline';
                ^^^^^^
```

i.e. :

                import line syntax bug


to :

createInterface error

in js file 2,

as in js file 4


#### Q3

Q3/ If so, are there differences?

Q4/ What are they? 


#### Review, plan next step

```
const readline = require('readline');
```

is the line of code in question

#### Post review of 4 js files from screenshots pasted into Google slides:
- Reference : [review slides](https://docs.google.com/presentation/d/1U__F7Lu0I_njtEMKVuJJwXdS8TLNJN3H6EUeobM7UWg/edit#slide=id.gf3ae6b0699_0_69)

same error in js file 2 (post correction) 3 and 4

Re: Q2-4:
indirect answer:
Same error being thrown
though not in Q1

#### cut comments from js file 1 

#### Next step 12Mar2022 1523h
take code from here:
[looping object in array](https://www.youtube.com/watch?v=RxjQgIhEPWE&ab_channel=CodifyAcademy)

copy to new file combo-2.js
remove reference comments duplicated from combo-1.js

#### 12Mar2022 1602h
- Add loop-js-test.js
- change object name from object1 to students
- add reference

## Active Layer Above

#### Aside

Pressing shift and . on keyboard while on this github page opens vscode in a browser in a new tab, and seems to allow editing directly in the browser without GitPod.

## Other References
- [how to: nested loops](https://stackoverflow.com/questions/23508381/calculate-average-across-nested-array-of-objects-javascript)
- [JSON](https://help.rapid7.com/insightidr/content/json/overview.html)
= [access arrays - square brackets - js](https://www.digitalocean.com/community/tutorials/understanding-arrays-in-javascript)