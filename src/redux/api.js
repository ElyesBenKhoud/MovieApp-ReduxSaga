import axios from "axios";
const API_URL = "http://www.omdbapi.com/?s=happy&&apikey=d7b52bbd";
export const fetchMovies = async () => await axios.get(API_URL);

// const API_URL = "https://www.boredapi.com/api/activity";

// export function fetchMovies() {
//   return axios.request({
//     method: "GET",
//     url: API_URL,
//   });
// }
