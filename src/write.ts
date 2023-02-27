import fs from "fs";
import path from "path";
import dayjs from "dayjs";
import parse from "./parse";

export default async function write(newFileData: any) {
  const date = dayjs().format("YYYY-MM-DD");
  const fileName = `${date}.json`;
  const filePath = path.resolve(__dirname, `../data/${fileName}`);

  fs.readFile(filePath, async (err: any, fileData: any) => {
    // If the file exists, read the file content
    if (fileData) {
      const fileDataJson = JSON.parse(fileData.toString());
      const news = [...fileDataJson];

      // compare the new and old data, if there is new data in the new data that is not in the old data, add it to the new data
      newFileData.map((item: any) => {
        const isExist = fileDataJson.find(
          (fileItem: any) => fileItem.id === item.id
        );
        if (!isExist) {
          news.unshift(item);
        }
      });

      const parseData = parse(news);

      //write new data
      fs.writeFile(filePath, JSON.stringify([...(await parseData)]), (err) => {
        if (err) {
          console.log(err);
        }
      });
    } else {
      // If the file does not exist, create a new file
      const parseData = parse(newFileData);
      fs.writeFile(filePath, JSON.stringify([...(await parseData)]), (err) => {
        if (err) {
          console.log(err);
        }
      });
    }
  });
}
