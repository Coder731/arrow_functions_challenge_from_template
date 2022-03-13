const students = {
    a: 'somestring',
    b: 42
  };
  
  for (const [key, value] of Object.entries(students)) {
    console.log(`${key}: ${value}`);
  }
  
  // expected output:
  // "a: somestring"
  // "b: 42"
  

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries