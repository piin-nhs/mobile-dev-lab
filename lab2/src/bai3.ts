export function error() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        reject("Something went wrong");
    }, 1000);
    })
}