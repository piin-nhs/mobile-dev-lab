export const evenNumber = Promise.resolve([10,20,35])
    .then(n => n.filter((item) => item % 2 == 0))