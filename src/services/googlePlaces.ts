import axios from "axios";

const googlePlacesAPI = axios.create({
  baseURL: "https://maps.googleapis.com/maps/api",
});

export default googlePlacesAPI;
