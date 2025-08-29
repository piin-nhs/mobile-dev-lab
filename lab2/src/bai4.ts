export function randomNumber() {
  return new Promise((resolve, reject) => {
    const number = Math.random(); 

    if (number >= 0) {
      resolve(number); 
    } else {
      reject("So am"); 
    }
  });
}