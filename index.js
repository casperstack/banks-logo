const fs = require('fs');
const path = require('path');

/** Load JSON File */
let raw = fs.readFileSync(path.resolve(__dirname, 'banks.json'));
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

module.exports = ThaiBank;