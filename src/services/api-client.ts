import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "51a986b2551047078f8271e0e02b58b5",
  },
});
