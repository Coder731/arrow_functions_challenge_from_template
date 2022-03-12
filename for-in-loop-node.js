// https://futurestud.io/tutorials/node-js-for-of-vs-for-in-loops#:~:text=for%E2%80%A6in-,Node.,access%20to%20keys%20or%20values.

const user = { name: 'Marcus', likes: 'Node.js' }

for (const key in user) {  
  console.log(`${key}: ${user[key]}`)
}
