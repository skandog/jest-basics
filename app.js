import crypto from "crypto";

async function getData() {
  return crypto.randomBytes(20);
}

getData();

export default getData;
