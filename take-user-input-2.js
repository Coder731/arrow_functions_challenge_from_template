// https://nodejs.dev/learn/accept-input-from-the-command-line-in-nodejs

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`What subject are you interested in?`, subject => {
    console.log(`The subject you have selected is: ${subject}!`)
    readline.close()
  })
  