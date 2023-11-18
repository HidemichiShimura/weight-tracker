import axios from "axios";
import "dotenv/config";

export default async function getData() {
  try {
    const resData = await axios.get("http://localhost:80");

    return resData.data;
  } catch (err) {
    console.log(err);
    return;
  }
}
