import fs from 'fs';
import path from 'path';

export default function writeFile(data: any) {
    const filePath = path.resolve(__dirname, '../data/2023-01-16.json');
    fs.writeFile(filePath, JSON.stringify(data), (err: any) => {
        if (err) {
            
        }
    })
}