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