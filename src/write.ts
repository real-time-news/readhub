import fs from 'fs';
import path from 'path';

export default async function write(newFileData: any) {

    const filePath = path.resolve(__dirname, '../data/2023-01-16.json');

    fs.readFile(filePath, (err: any, fileData: any) => {

        const fileDataJson = JSON.parse(fileData.toString());
        const news = [...fileDataJson]

        

        // console.log(Array.isArray(newFileData))

        newFileData.map(item => {
            const isExist = fileDataJson.find((fileItem: any) => fileItem.id === item.id)
            if (!isExist) {
                news.unshift(item)
            }
        })

        fs.writeFile(filePath, JSON.stringify(news), (err: any) => {
            if (err) {
                console.log(err)
            }
        })
    })


}