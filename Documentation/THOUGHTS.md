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
