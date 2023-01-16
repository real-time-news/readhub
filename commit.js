const git = require("simple-git");

async function commit() {
  const simpleGit = git();
  await simpleGit.add("./*");
  await simpleGit.commit("update");
  await simpleGit.push("origin");
}

commit();
