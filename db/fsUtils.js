const fs = require('fs');
const util = require('util');
// create json then read append in order.




const readFromFile = util.promisify(fs.readFile);
/**
   writing info in jsonfile
   @param {string} destination destination of file
   @param {object} content conent within file
   @returns {void} empty
  
 */


   

const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    
  err ? console.error(err) : console.info(`\nData written to ${destination}`)
  );



/**
   data read from file appended to page. 
   @param {object} content conet you want appended
   @param {string} file path to file
   @returns {void} empty
 */
const readAndAppend = (content, file) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      parsedData.push(content);
      writeToFile(file, parsedData);
    }
  });
};

module.exports = { readFromFile, writeToFile, readAndAppend };