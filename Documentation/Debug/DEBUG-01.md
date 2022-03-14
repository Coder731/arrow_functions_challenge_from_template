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
#### Title
Throws error when try to run arrow-functions3.js
#### Error thrown in terminal:


```
gitpod /workspace/arrow_functions_challenge_from_template (main) $ node arrow-functions3.js
(node:3851) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
(Use `node --trace-warnings ...` to show where the warning was created)
/workspace/arrow_functions_challenge_from_template/arrow-functions3.js:38
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

#### Thoughts on error thrown
This error seems to be generated from using import
Note: this use of import may have been advised by ai or taken from an online solution

#### Solution attempt
revert to old code from site referenced previously:
line in question reverted to:

```
const readline = require('readline');
```

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
## 14Mar2022 0533h results variable scope bug [Unresolved]

### Steps to reproduce
Add console log for subject variable outside block scope
to test if available

### file affected:

return-keys-3.js

### Error in terminal:

```
What subject are you interested in?/workspace/arrow_functions_challenge_from_template/return-keys-3.js:37
  console.log(`subject outside block scope: ${subject}`)
                                              ^

ReferenceError: subject is not defined
    at Object.<anonymous> (/workspace/arrow_functions_challenge_from_template/return-keys-3.js:37:47)
    at Module._compile (node:internal/modules/cjs/loader:1101:14)
```

### Attempted Solution
Declare subject outside and before block.

### Result
subject logged as undefined
also logged before input raken
from user