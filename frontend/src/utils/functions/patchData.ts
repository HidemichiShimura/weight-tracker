import axios from "axios";
import "dotenv/config";

import { ModValidationSchemaType } from "@utils/CUDValidationSchema";

export default async function patchData(data: ModValidationSchemaType) {
  try {
    const resData = await axios.patch(
      `${process.env.REACT_APP_URL}/${data.date}/${data.weight}`
    );

    return resData.status === 200;
  } catch (err) {
    console.log(err);
  }
}
