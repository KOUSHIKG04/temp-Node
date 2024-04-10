//MODULE FS-Async

const { readFile, writeFile } = require("fs");

console.log('Start')
//Reading a file
  readFile("./content/one.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const one = result;
  readFile("./content/two.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const two = result;

    //Creating file within
    writeFile("./content/resultAsync.txt",`Here is the result : ${one}, ${two}`,(err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        // console.log(result);
        console.log('Done with this task!!')
      }
    );
  });
});
console.log('Starting the next task')

