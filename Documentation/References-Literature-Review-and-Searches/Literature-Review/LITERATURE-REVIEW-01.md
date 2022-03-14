## Naming Conventions

### Use dashes as delimiters

Never use spaces or underscores. Spaces are converted to %20 in URLs or can break an URL when shared. Underscores are difficult to see when the file name is displayed as an underlined link.

#### Citation

- [Use dashes as delimiters](https://github.com/bartvandebiezen/file-name-conventions#:~:text=Use%20dashes%20as%20delimiters,-You%20should%20use&text=Never%20use%20spaces%20or%20underscores,displayed%20as%20an%20underlined%20link.)

### Underscores in python function and variable names

Use the function naming rules: lowercase with words separated by underscores as necessary to improve readability. Use one leading underscore only for non-public methods and instance variables. To avoid name clashes with subclasses, use two leading underscores to invoke Python's name mangling rules.

#### Citation

- [Method Names and Instance Variables](https://peps.python.org/pep-0008/#:~:text=Use%20the%20function%20naming%20rules,invoke%20Python's%20name%20mangling%20rules.)

### Open Tab: get keys of json-object in JavaScript [duplicate]

```
var jsonData = [{"person":"me","age":"30"},{"person":"you","age":"25"}];

for(var i in jsonData){
    var key = i;
    var val = jsonData[i];
    for(var j in val){
        var sub_key = j;
        var sub_val = val[j];
        console.log(sub_key);
    }
}

```

#### Search terms to find
how to return key in json

#### Citation
-[get keys of json-object in JavaScript [duplicate]](https://stackoverflow.com/questions/8430336/get-keys-of-json-object-in-javascript)




### key value pairs are properties

#### Search terms
key value pairs are properties in js object

#### Result
- [JavaScript Object Keys Tutorial – How to Use a JS Key-Value ...](https://www.freecodecamp.org/news/javascript-object-keys-tutorial-how-to-use-a-js-key-value-pair/#:~:text=An%20object%20contains%20properties%2C%20or,the%20value%20%224%20feet%22%20.)

#### Text
"
An object contains properties, or key-value pairs.
"


# POST key value pairs are properties HOLDER (for when other headings are collapsed)

## variable to String conversion

### Search string
how to pass a string in order to specify the name of a variable in JavaScript

### Result
- [Variable name as a string in Javascript](https://stackoverflow.com/questions/4602141/variable-name-as-a-string-in-javascript)

### Code

```
const varToString = varObj => Object.keys(varObj)[0]

const someVar = 42
const displayName = varToString({ someVar })
console.log(displayName)

```

### Evaluation
Converts the wrong way:
goes from:
variable to String
want:
string to Variable

## string to variable conversion

### Search string
string to var js

### Lesson for future searches
search for the abbreviated name of the variable you would store the thing you want as
- This results in a fast, specific search; because using precise, concise search term.

### Result
- [Convert string to variable name in JavaScript](https://stackoverflow.com/questions/5613834/convert-string-to-variable-name-in-javascript)

### Code

```
function SetToString(varString) {
  var newValue = "string";
  eval(varString + " = " + "'" + newValue + "'");
}

```
