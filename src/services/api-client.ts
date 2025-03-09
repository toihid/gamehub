import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0f43e55b7f03457fab3b06039b0f3bc6",
  },
});
