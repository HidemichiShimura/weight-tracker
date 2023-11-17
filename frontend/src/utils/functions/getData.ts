import axios from "axios";
import "dotenv/config";

export default async function getData() {
  let data;

  try {
    data = await axios.get(process.env.URI as string);
  } catch (err) {
    console.log(err);
  }

  return data;
}
