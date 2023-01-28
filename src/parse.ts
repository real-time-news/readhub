import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";

export default async function parse(data: any) {
  // Add a date field to the data & Add a unique id to the data
  data = data.map((item: any) => {
    item.date = dayjs(item.createdAt).format("YYYY-MM-DD HH:mm:ss");
    if (!item.uuid) {
      item.uuid = uuidv4();
    }
    return item;
  });

  // Sort the data by date
  data.sort((a: any, b: any) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  // filter the data by date
  data = data.filter((item: any) => {
    return (
      dayjs(item.date).format("YYYY-MM-DD") === dayjs().format("YYYY-MM-DD")
    );
  });

  return data;
}
