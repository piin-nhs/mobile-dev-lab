export function numberTen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(10);
    }, 1000);
    })
}