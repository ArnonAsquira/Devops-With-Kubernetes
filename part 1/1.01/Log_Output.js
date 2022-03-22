const crypto = require("crypto");

const wait = (seconds) =>
  new Promise((resolve) => setTimeout(resolve, 1000 * seconds));

const outputLog = async (seconds) => {
  const id = crypto.randomBytes(20).toString("hex");
  while (true) {
    await wait(seconds);
    console.log(id);
  }
};

outputLog(5);
