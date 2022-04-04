// What is the type of the invalid variable in the function below

function outputMessage(message: string) {
  if (typeof message === 'string') {
    console.log(message);
  } else {
    const invalid = message;
    console.error(invalid);
  }
}


const matrix = new Array(5).fill(0).map(() => new Array(4).fill(0));

console.log(matrix[0][0]);

const arr: [number, number] = [0][0];

let people = ["Paula", "Bob", "Sam"];