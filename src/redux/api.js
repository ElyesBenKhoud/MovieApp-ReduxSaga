import axios from "axios";
const API_URL = "http://www.omdbapi.com/?s=action&&apikey=d7b52bbd";
const API_URL2 = "http://www.omdbapi.com/?s=love&&apikey=d7b52bbd";

export const fetchMovies = async () => await axios.get(API_URL);

export const fetchOtherMovies = async () => await axios.get(API_URL2);
