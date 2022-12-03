import axios from "axios";

const apiUrl = "https://dog.ceo/api/breeds/image/random";

const axiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

const getPictures = async (howMany, callback) => {
  axiosInstance
    .get(`/${howMany}`)
    .then((response) => callback(response.data.message))
    .catch((reason) => {
      console.log(reason);
    });
};

export { getPictures };
