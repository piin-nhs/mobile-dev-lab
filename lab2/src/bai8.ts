export const chain = Promise.resolve(10)
    .then(n => n * n)
    .then(n => n * 2)
    .then(n => n + 5)