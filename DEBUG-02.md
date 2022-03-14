## 14:03:11 Monday, 14 March 2022

### Bug Name
string to variable bug

### input to terminal
node return-keys-7.js

### output from terminal
maths
english
studentObjPropValIsKeyValPair is : english
SetToString(studentObjPropValIsKeyValPair) is : undefined
cad
science
maths
english
studentObjPropValIsKeyValPair is : english
SetToString(studentObjPropValIsKeyValPair) is : undefined
art
science
maths
art

### Issue
when 
studentObjPropValIsKeyValPair
is 
english

SetToString(studentObjPropValIsKeyValPair) is : undefined

### Attempt to solve
Why is function returning this?

#### strToVar.js
- Copied function strToVar into its own file
- Modified by saving eval output to variable b
- output of b 
    - and function
  is undefined
  as is the case when tyring to use
  strToVar function
  in
  return-keys-7.js 