import axios from "axios";
import "dotenv/config";

import { ModValidationSchemaType } from "@utils/CUDValidationSchema";

export default async function patchData(data: ModValidationSchemaType) {
  let msg;

  try {
    msg = await axios.patch(process.env.URI as string, data);
  } catch (err) {
    console.log(err);
  }

  return msg;
}
