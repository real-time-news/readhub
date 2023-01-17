import fetchNews from "./fetchNews";
import write from './write'
import submit from './submit'
import parse from "./parse";


async function start() {
  const data = await fetchNews();
  const parseData = parse(data)
  await write([...await parseData]);
  // submit()
}

start();
