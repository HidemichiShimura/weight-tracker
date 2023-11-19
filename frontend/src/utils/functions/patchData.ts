import axios from "axios";

import { ModValidationSchemaType } from "@utils/CUDValidationSchema";

export default async function patchData(data: ModValidationSchemaType) {
  try {
    const resData = await axios.patch(
      `http://localhost:80/${data.date}/${data.weight}`
    );

    return resData.status === 200;
  } catch (err) {
    console.log(err);
  }
}
