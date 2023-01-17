import fetchNews from "./fetchNews";
import write from './write'
import submit from './submit'

async function start() {
  const data = await fetchNews();
  await write(data);
  submit()
}

start();
