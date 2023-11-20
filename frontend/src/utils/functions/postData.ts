import axios from "axios";

import { AddValidationSchemaType } from "@utils/CUDValidationSchema";

export default async function postData(data: AddValidationSchemaType) {
  try {
    const resData = await axios.post(process.env.REACT_APP_URL as string, data);

    return resData.status === 200;
  } catch (err) {
    console.log(err);
  }
}
