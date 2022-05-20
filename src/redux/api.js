import axios from "axios";
const API_URL = "http://www.omdbapi.com/?s=happy&&apikey=d7b52bbd";
export const fetchMovies = async () => await axios.get(API_URL);
