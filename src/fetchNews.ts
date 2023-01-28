import fetch from "node-fetch";

export default async function fetchNews() {
  const url = "https://api.readhub.cn/mina_v2/topic/list?&size=10&type=day";
  const res = await fetch(url);
  const { links = {}, data = [] } = await res.json();
  return data;
}
