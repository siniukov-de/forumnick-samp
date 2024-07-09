/* IMPORTING LIBRARIES: */
require('dotenv').config(); /* FOR USING .env AS CONFIG */
const {writeFileSync, readFileSync} = require('fs'); /* FOR UPDATING last.txt */
const {API, Upload, Updates} = require("vk-io"); /* FOR USING VK API */

/* CREATING CONSTANTS: */
let chats = require('./chats.json'); /* LIST OF CHATS: */

/* VK FUNCTIONS: */
const api = new API({
    token: process.env.TOKEN
});

const upload = new Upload({
    api
});

const updates = new Updates({
    api,
    upload
});

updates.start().then(() => console.log('VKMe | Запущен'));

updates.on('message', (message) => {
    if ((message.senderId === Number(process.env.ID)) && message.text === '!removeChat' && message.senderType === 'user' && message.peerType === 'chat') {
        if (!chats.includes(message.peerId)) return message.reply('Чат не найден!');
        chats.splice(chats.indexOf(message.peerId), 1);
        writeFileSync('chats.json', JSON.stringify(chats));
        return message.reply('Чат удалён!');
    } else if ((message.senderId === Number(process.env.ID)) && message.text === '!addChat' && message.senderType === 'user' && message.peerType === 'chat') {
        if (chats.includes(message.peerId)) return message.reply('Чат уже добавлен!');
        chats.push(message.peerId);
        writeFileSync('chats.json', JSON.stringify(chats));
        return message.reply('Чат добавлен!');
    }
});

getNewPosts(Number(process.env.ID_GROUP), chats, api).then(r => console.log('getNewPosts: +'));
setInterval(() => getNewPosts(Number(process.env.ID_GROUP), chats, api).then(r => console.log('getNewPosts: +')), 300000);

/* VK GET POSTS: */
async function getNewPosts(groupId, chatIds, vk) {
    let lastId = readFileSync('last.txt', "utf-8");
    const response = await vk.wall.get({
        owner_id: groupId,
        count: 10,
    });

    const items = response.items.sort((a, b) => a.id - b.id);
    let result = Number(lastId);
    for (const item of items) {
        if (Number(item.id) > result) {
            result = Number(item.id);
            if (chatIds.length > 0) {
            await vk.messages.send({
                peer_ids: chatIds,
                attachment: `wall${Number(process.env.ID_GROUP)}_${item.id}`,
                random_id: 0
            }).catch(() => null);
            }
        }
    }
    if (Number(lastId) !== result) await writeFileSync('last.txt', String(result));
}