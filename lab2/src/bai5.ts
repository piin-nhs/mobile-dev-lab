export function taskDone(time: number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve("Task done");
    }, time);
    })
}