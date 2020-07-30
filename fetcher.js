const request = require('request');
const fs = require('fs');
const args = process.argv.slice(2);
const url = args[0];
const path = args[1];
const file = 'index.html';

request(url,(error,response,body) => {
  console.log('Error: ', error);
  console.log('Status Code: ', response && response.statusCode);


  // The fs.statSync() method is used to asynchronously return information about the given file path
  //The fs.Stat object returned has several fields and methods to get more details about the file.
  //path: It holds the path of the file that has to be checked. It can be a String, Buffer or UR
  const getSize = (fileName) => {
    let stats = fs.statSync(fileName);
    let fileSize = stats['size'];
    return fileSize;
  }

  //The fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created:
  //fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
  //   if (err) throw err;
  //   console.log('Saved!');
  // });
  // first parameter ---> we give the file name 
  // second parameter ---> we get the body from the response we receive for our request as body
  // third parameter ----> if error
  fs.writeFile(file,body, (err) => {
    if (err) return console.log(err);
    let size = getSize(file);
    console.log(`Downloaded and saved ${size} bytes to ./${file}`)
  });

});

