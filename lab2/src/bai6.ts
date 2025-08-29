export function promise1() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Result 1"), 1000);
  });
}

export function promise2() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Result 2"), 2000);
  });
}

export function promise3() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Result 3"), 1500);
  });
}
