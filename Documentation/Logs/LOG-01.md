A log of work towards solving challenge

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



#### 12Mar2022 1635h
##### Step 1
Add loop-object-in-array-v3.js
to work on
so as not to disturb code in v2 version of file if need references later on.

###### Step 2
Revert to working in combo files.
work on combo-2.js
Bring in relevant code from 
loop-object-in-array-v3.js

##### 12Mar2022 1821h combo-2.js
Add loop with 3 leves
- outer student array
- results
- loop through results key value pairs

has bug as second loop is throwing error related to semi-colon

#### 12Mar2022 1824h combo-3.js
Duplicate combo-2.js
to
combo-3.js
so that,
can work on loop
without losing original idea

#### 12Mar2022 1832h combo-3.js
Fix semicolon bug
Also uncomment and use code line with a = students on both v2 and v3 of file
so that lines in loop using a abbreviation will work

Also fix semicolon bug in combo-2.js

#### 12Mar2022 1838h combo-3.js
Current output:

```
toyota, camry
ford, mustang
0: [object Object]
1: [object Object]
2: [object Object]
```

#### 12Mar2022 1839h combo-3.js
Issue with output: 
is that it is
returning:
[object Object]

Note: a count is being returned with each dual Object array

#### 12Mar2022 1844h combo-3.js
Note: 

This line in combo-3.js
is causing the interesting output of
number: [Object Object]

```
console.log(`${key}: ${value}`);

```

#### 12Mar2022 1859h combo-3.js
Just to further drill down to what exactly is causing the interesting output of the two objects:

This fragment of code from the above line:

```
 ${value}
 ```

is giving the output of 

```
[object Object]
```

Note capitalisation of second O only, not necessarily captured earlier 


#### 12Mar2022 1903h combo-3.js
To further refine definition and relationship
between code and output:

although the expected output
for
value
of results
was a single entity, not necessarily an object,
this was possibly due to looking at the cars array
where 
in say the first object in the array,
the fourth element is a
key value pair,
where
for a given key,
say the fourth key, (index 3)
one would expect
a given value.


However,
looking at the students array,
for a given key,
specifically:
the fourth key, (index 3),
results is the key,
however,
fascinatingly:
the value for this key...

is in fact

not a value but an object 
with key value pairs.

So, essentially, to sum up:
it would seem
that a fourth layer of for loop is needed.

(
Perhaps this is where it would be necessary to expand the array or object (s)
recursively,
so to speak.
)

#### 12Mar2022 1918h combo-3.js
Is it possible that
the last entry here in LOG md
is incorrect slightly,
in that,
the for loop was not actually 3 for loops nested within each other
but that one was iterating over the same thing as an outer one?

As in, 
was it the case that 

this for loop:

```
            for (const [key, value] of Object.entries(students)) {
                console.log(`${key}: ${value}`);
            }
```

was actually going through the outer array...
as was

this for loop:

```
for(i = 0; i < students.length; i++) { // loops through students outer array with i

}
```

and two more things:

1. possible repitition / summary / refinement of above question:
    - does this:

    ```
    i < students.length
    ```

    and does this:

    ```
    const [key, value] of Object.entries(students)
    ```

    refer to the same thing? (in combo-v3.js)

2. what is the intermediate for loop doing?

    this one:

    ```
        for(j=0; j < a[i].length; j++) {// loops through results // goes to results
        
        }
    ```

#### 12Mar2022 1931h
Plan
Add new file:
combo-v4.js
with only 
    - students array
        and
    - this line of code (to check what the output is / if it is working in original combo-v3.js file) :

    ```
    Object.entries(students.results)
    ```

#### 12Mar2022 1939h
Creaete combo 4 js file
by duplicating combo3 js file
and removing 
extraneous code and comments,
leaving only: 
    
    1. the students array
    
    2. the aabbreviation:

    ```
    a = students;
    ```
    
    3. The commented original nested for loop (tidied), from which our code of interest comes
    
    and
    
    4. the for loop with the code:

    
    ```
    Object.entries(students.results)
    ```


#### 12Mar2022 1944h combo-v4.js

(Aside: TODO: Google how to input time stamp in README or LOG markdown files. Found this: [js code for date stamp, is it for markdown files? Says to save file as markdown](https://github.com/gsantner/markor/issues/374))

Run combo-v4.js


#### 13Mar2022 0149h

- [Objects: Nested Arrays & Objects--The Modern JavaScript Bootcamp](https://www.youtube.com/watch?v=D77ANP60DaU&t=72s&ab_channel=CodeWithSahib)

Error from running combo-4.js

```
for (const [key, value] of Object.entries(students.results)) {
                                  ^

TypeError: Cannot convert undefined or null to object
```

#### combo-5.js
Add new combo js file that returns object parts

#### combo-6.js

- return keys

- Add reference 
- [return keys](https://stackoverflow.com/questions/8430336/get-keys-of-json-object-in-javascript)


#### add wd 5 folder

add return-keys.js

remove excess


#### return-keys.js 13Mar2022 1954h

##### Latest commit has explanation of how range that we want is range[i][j][k]

Edit range in 3rd loop from val2 to sub_val

Also change 
students[i]
which is val

so second for loop range is
students i

and third range is
sub val which is 
students[i][j]

and sub val2 is 
students[i][j[[k]
which is at 
third level of depth
in the data structure
students
made up of an array
with nested objects
including key value pair
results
which has a value
of another object
which is itself
a set of 
key value pairs
where
key is subject
and 
value is 
result

#### input and output to terminal 21:11:29 Sunday, 13 March 2022



##### input
node return-keys.js

##### output
75
0
1
2
3
0
1
2
maths
english
cad
maths
english
cad
0
1
2
3
4
0
1
2
3
science
maths
english
art
science
maths
english
art
0
1
2
3
0
1
2
science
maths
art
science
maths
art

#### Explanation of above output in this coming commit message

Add output of return keys js file to LOG md

Aside 
First gives a grade
75
the result 
for the subject english

Main Point 
Gives subjects
interspersed with numbers
for each of the three students
in array
students

Note seemingly 
the output apart from 
english result of 75
is coming from loging
sub key 2
which is
students i j k