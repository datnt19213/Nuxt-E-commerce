// import {WooApi} from "./common/proxy";

import instance from "./common/proxy";

// export const getAllProducts = async () => {
//   try {
//     console.log(await WooApi.get("products"));
//   } catch (error) {
//     console.error(error);
//   }
// };

export const getAllProducts = async () => {
  try {
    const response = await instance.get("products?per_page=10");
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
