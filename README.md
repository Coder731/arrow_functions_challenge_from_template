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


## Debug
### Issue 1
#### Title:
 Could not run js file on node server
#### How to generate problem: (code and result in terminal shown below)


```
gitpod /workspace/arrow_functions_challenge_from_template (main) $ node array-functions2.js
node:internal/modules/cjs/loader:936
  throw err;
  ^

Error: Cannot find module '/workspace/arrow_functions_challenge_from_template/array-functions2.js'
    at Function.Module._resolveFilename (node:internal/modules/cjs/loader:933:15)
    at Function.Module._load (node:internal/modules/cjs/loader:778:27)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:17:47 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}
gitpod /workspace/arrow_functions_challenge_from_template (main) $ node array-functions.js
node:internal/modules/cjs/loader:936
  throw err;
  ^

Error: Cannot find module '/workspace/arrow_functions_challenge_from_template/array-functions.js'
    at Function.Module._resolveFilename (node:internal/modules/cjs/loader:933:15)
    at Function.Module._load (node:internal/modules/cjs/loader:778:27)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:17:47 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}
```


#### Best Result when Googled problem

- [The error is usually caused by a non-existent file](https://github.com/nodejs/help/issues/3105)

#### Solution
Change file name call from array to arrow
i.e. 
arrow-functions2.js

#### Incidental learnings along the way
-[Search terms: "how insert code snippet in readme"](https://www.google.com/search?q=how+insert+code+snippet+in+readme&oq=how+insert+code+snippet+in+readme&aqs=chrome..69i57j0i22i30j0i390j69i64.5446j0j7&sourceid=chrome&ie=UTF-8)
- [Answer: You can create fenced code blocks by placing triple backticks ``` before and after the code block. We recommend placing a blank line before and after code ...](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks)

#### Correct code
node arrow-functions.js



### Issue 2:
#### Title
Prompt not defined

#### References

- [Reason: "nodeJS use Google’s V8 engine, although similar to the JS engine of the chrome browser, its not identical."](https://discuss.codecademy.com/t/prompt-is-not-defined/453608)
Prompt does not exist in node js.

####  Attempted Solution

##### Search
Equivalent of prompt in node js

##### Result

-[How do I prompt users for input from a command-line script?](https://nodejs.org/en/knowledge/command-line/how-to-prompt-for-command-line-input/)

#### Solution
The above solved the problem of taking user input without using prompt, in node js.

### Issue 3:

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
take user input, using previously done code
->  tidy it up
    so it takes
    english
->  and passes stuff along
->  and outputs 77.5

### Step 2:
manual way to do just
the addition, not the average yet.... is:

### Step 3: as an interim / prelude stepL: (declare variables) :
a = students.key  -> value[0]
b = students.key  -> value[1]
c = students.key  -> value[2]

### Step 4: 
take sum
divide by 3
= average (avg)

#### Aside

Pressing shift and . on keyboard while on this github page opens vscode in a browser in a new tab, and seems to allow editing directly in the browser without GitPod.

## Other References
- [how to: nested loops](https://stackoverflow.com/questions/23508381/calculate-average-across-nested-array-of-objects-javascript)
