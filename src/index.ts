import fetchNews from "./fetchNews";
import write from "./write";

async function start() {
  const data = await fetchNews();
  await write(data);
}

start();
