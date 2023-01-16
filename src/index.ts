import fetchNews from "./fetchNews";
import writeFile from './writeFile'

async function start() {
  const data = await fetchNews();
  await writeFile(data);
  // console.log('data', data)

}

start();
