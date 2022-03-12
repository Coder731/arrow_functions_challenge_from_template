json_object = json.loads('{"first_key":"first_value", "second_key":"second_value"}')
pairs = json_object.items()

for key, value in pairs:
    print(value)


for i in range(4):
    print("i =", i)


for(var i=0; i<4; i++) {
    console.log("i =", i);
}



# https://stackoverflow.com/questions/14696261/declaring-two-variables-in-a-for-loop
var i,c;
for(i = 0,c=aString.charAt(0); i < aString.length; ++i, c = aString.charAt(i)){
    alert("c: "+c)
    func1[typeOfChar(c)]++
}

# https://stackoverflow.com/questions/7241878/for-in-loops-in-javascript-key-value-pairs
#  https://attacomsian.com/blog/javascript-iterate-objects#:~:text=keys()%20Method-,The%20Object.,the%20value%20of%20each%20property.
for (var k in target){
    if (typeof target[k] !== 'function') {
         alert("Key is " + k + ", value is" + target[k]);
    }
}
