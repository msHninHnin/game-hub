import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "139f334684924072bc96995c4b28d998",
  },
});
