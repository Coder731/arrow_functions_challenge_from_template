## how to pause execution in JavaScript
How to pause execution in JavaScript to wait for user input

- [JavaScript pausing execution of function to wait for user input](https://stackoverflow.com/questions/5551378/javascript-pausing-execution-of-function-to-wait-for-user-input)

### Relevant text from above reference:
"How do I make my main loop "pause" until an answer has been given by the player using the crane, and then proceed?

By breaking it up. The only "yield" in JavaScript on browsers is to let your function end and then arrange to get called back later (via setTimeout, setInterval, an ajax callback, etc.). In your case, I'd tend to think the trigger to call you back should be the user's action answering the previous question, e.g., a click handler on the answer boxes or some such (rather than setTimeout and such, which are automated)."

