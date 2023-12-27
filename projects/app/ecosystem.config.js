module.exports = {
    apps: [{
        name: "next-app", // 你的应用名称
        script: "pnpm",
        args: "dev", // 或者 "start" 如果是生产环境
        interpreter: "none"
    }]
};