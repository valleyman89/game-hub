import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "0b0b34df79a946ad9ff110f5fbb572c8" },
});
