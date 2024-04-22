// import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
// export const WooApi = new WooCommerceRestApi({
//   url: process.env.API_HOST || "https://nvu.teknix.dev",
//   consumerKey:
//     process.env.USERNAME || "ck_bbe75f7591f435b5aabf735dcf8c6177d4178669",
//   consumerSecret:
//     process.env.PASSWORD || "cs_7dcc2259ecdb652e1eb157640c99ba7428998b4e",
//   version: "wc/v3",
//   queryStringAuth: true,
// });

import axios from "axios";

const baseURL = process.env.API_HOST || "https://nvu.teknix.dev/wp-json/wc/v3";

const instance = axios.create({
  baseURL: baseURL,
});

instance.interceptors.request.use((config) => {
  const authString = btoa(
    "ck_bbe75f7591f435b5aabf735dcf8c6177d4178669:cs_7dcc2259ecdb652e1eb157640c99ba7428998b4e"
  );
  config.headers.Authorization = `Basic ${authString}`;
  return config;
});

export default instance;
