A log of work towards solving challenge

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