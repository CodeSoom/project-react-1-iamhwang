const axios = require("axios");

export async function crawlingUrl() {
  const url = "http://localhost:4000/";
  return await axios.get(url);
}