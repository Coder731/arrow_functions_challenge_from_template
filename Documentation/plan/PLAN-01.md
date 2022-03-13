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
