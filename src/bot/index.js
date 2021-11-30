
const { Client, Schema } = require('klasa');
const {server: {admin_user_ids}, discord_client: {prefix}} = require("@root/config.json");

Client.defaultPermissionLevels
    .add(8, ({ c, author }) => admin_user_ids.includes(author.id));

const client = new Client({
    commandEditing: true,
    prefix: prefix,
    production: true,
    consoleEvents: {
        log: false,
        error: false,
        warn: false
    },
    disabledCorePieces: ["commands"]
});

client.on("ready", () => {
let statuses = [
        `🧩  Bots are getting on my nerves...`,
        "🏓  Why hello there!",
        `🏀  Watching the botlist grow...`,
        `🥇  ${client.users.size} members!`
    ]

    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setActivity(status);

    }, 5000)
});


module.exports.init = async (token) => {
    client.userBaseDirectory = __dirname;
    await client.login(process.env.TOKEN);
    return client;
}
