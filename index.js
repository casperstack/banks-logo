const fs = require('fs');

/** Load JSON File */
let raw = fs.readFileSync('./data.json');
const data = JSON.parse(raw);

const Get = (key) => {
  return data[key]
}

/** List all key in the objects and return in array*/
const listKey = () => {
  return Object.keys(data)
}

const ThaiBank = {
    data,
    listKey,
    Get
}

module.exports = ThaiBank