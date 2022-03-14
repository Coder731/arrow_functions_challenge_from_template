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

# Official Literature
## Object.entries()

### Code used

```
const object1 = {
  a: 'somestring',
  b: 42
};

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

// expected output:
// "a: somestring"
// "b: 42"

```

### Search terms
how to reference and return key js node

#### Citation

- [Object.entries()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)

#### Other sites of interest found with search terms
-[How to reference the key from json with node.js](https://stackoverflow.com/questions/53366200/how-to-reference-the-key-from-json-with-node-js)