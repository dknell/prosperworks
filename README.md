# ProsperWorks Node.js client

This ProsperWorks library provides convenient access to ProsperWorks API from Node.js. Original API https://developer.prosperworks.com

## Installation

```bash
npm install prosperworks --save
```

## Usage

```js
// configuring client
const prosperworks = require('prosperworks')({
  email: process.env.EMAIL,
  token: process.env.TOKEN
});

// using async / await (native in Node.js v8.x)
var result = await prosperworks.companies.list();
console.log(JSON.stringify(result, null, 2));

// or using with promises
prosperworks.companies.list()
.then(result => {
  console.log(JSON.stringify(result, null, 2));
})
```

## Todo

- add simple api documentation and more examples
- ensure it's handling errors and edge cases properly
