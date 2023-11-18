import axios from "axios";

import { DelValidationSchemaType } from "@utils/CUDValidationSchema";

export default async function deleteData(data: DelValidationSchemaType) {
  try {
    const resData = await axios.delete(`http://localhost:80/${data.date}`);

    return resData.status === 200;
  } catch (err) {
    console.log(err);
  }
}
