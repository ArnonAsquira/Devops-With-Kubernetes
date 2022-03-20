import crypto from "crypto";
const id = crypto.randomBytes(20).toString("hex");

const wait = (seconds: number) =>
  new Promise((resolve) => setTimeout(resolve, 1000 * seconds));

const outputLog = async (seconds: number, log: string): Promise<void> => {
  while (true) {
    await wait(seconds);
    console.log(log);
  }
};

outputLog(5, id);
