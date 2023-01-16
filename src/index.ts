import fetchNews from "./fetchNews";
import writeFile from './writeFile'

async function start() {
  const data = await fetchNews();
  writeFile(data);
}

start();
