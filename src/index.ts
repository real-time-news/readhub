import fetchNews from "./fetchNews";
import writeFile from './writeFiles'
import submitFiles from './submitFiles'

async function start() {
  const data = await fetchNews();
  await writeFile(data);
  submitFiles()
}

start();
