import axios from "axios";
import "dotenv/config";

import { AddValidationSchemaType } from "@utils/CUDValidationSchema";

export default async function postData(data: AddValidationSchemaType) {
  let msg;

  try {
    msg = await axios.post(process.env.URI as string, data);
  } catch (err) {
    console.log(err);
  }

  return msg;
}
