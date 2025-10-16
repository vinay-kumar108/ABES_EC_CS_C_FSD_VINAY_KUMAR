const waitFun = (time, message) => {
  return new Promise(() => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, time);
  });
};
const orderCoffee = async () => {
  await waitFun(4000, "Make some order.");
  await waitFun(2000, "Brew the coffee.");
  await waitFun(3000, "Serving the coffee.");
  await waitFun(1000, "Thankoyou for visiting.");
};


/*
const orderCoffee = () => {
  waitFun(4000, "Make some order.")
    .then(() => {
      return waitFun(2000, "Brew the coffee.");
    })
    .then(() => {
      return waitFun(3000, "Serving the coffee.");
    })
    .then(() => {
      return waitFun(1000, "Thankoyou for visiting.");
    });
};*/
