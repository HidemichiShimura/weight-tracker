import axios from "axios";

import { DelValidationSchemaType } from "@utils/CUDValidationSchema";

export default async function deleteData(data: DelValidationSchemaType) {
  let msg;

  try {
    msg = await axios.delete(process.env.URI as string, { data: data });
  } catch (err) {
    console.log(err);
  }

  return msg;
}
