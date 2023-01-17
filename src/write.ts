import fs from 'fs';
import path from 'path';
import dayjs from 'dayjs';

export default async function write(newFileData: any) {

    const date = dayjs().format('YYYY-MM-DD');
    const fileName = `${date}.json`;
    const filePath = path.resolve(__dirname, `../data/${fileName}`);

    fs.readFile(filePath, (err: any, fileData: any) => {
        // 如果文件存在，就读取文件内容
        if (fileData) {

            const fileDataJson = JSON.parse(fileData.toString());
            const news = [...fileDataJson]

            // 比较新旧数据，如果新数据中有旧数据中没有的，就添加到新数据中
            newFileData.map((item: any) => {
                const isExist = fileDataJson.find((fileItem: any) => fileItem.id === item.id)
                if (!isExist) {
                    news.unshift(item)
                }
            })

            // 写入新数据
            fs.writeFile(filePath, JSON.stringify(news), (err) => {
                if (err) {
                    console.log(err)
                }
            })

        } else {
            // 如果文件不存在，就创建一个新的文件
            fs.writeFile(filePath, JSON.stringify(newFileData), (err) => {
                if (err) {
                    console.log(err)
                }
            })
        }



    })


}