import axios from "axios";
import "dotenv/config";

import { AddValidationSchemaType } from "@utils/CUDValidationSchema";

export default async function postData(data: AddValidationSchemaType) {
  try {
    const resData = await axios.post(process.env.URL as string, data);

    return resData.status === 200;
  } catch (err) {
    console.log(err);
  }
}
