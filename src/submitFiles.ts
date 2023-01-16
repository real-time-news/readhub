import git from "simple-git";

export default async function submitFiles() {
    try {
        const simpleGit = git();
        await simpleGit.add("./*");
        await simpleGit.commit("update");
        await simpleGit.push("origin", "main");
        console.log("submit ok");
    } catch (e) {
        console.log(e);
    }
};

