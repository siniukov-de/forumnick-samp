<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="viewport" content="width=device-width, initial-scale=1.0"></head> <body> <h1>How to Make the Bot Work?</h1> <p>Here are the instructions for both Linux and Windows systems.</p> First go to https://oauth.vk.com/oauth/authorize?client_id=6121396&scope=335872&redirect_uri=https://oauth.vk.com/blank.html&display=page&response_type=token&revoke=1. Than copy the result in поисковая блять строка.<h2>Linux</h2> <ol id="linux"> <li> <code> sudo apt update </code> </li> <li> <code> sudo apt install nodejs </code> </li> <li> <code> sudo apt install npm </code> </li> <li> <code> sudo apt install git </code> </li> <li> <code> npm install pm2 -g </code> </li> <li> <code> mkdir VKRepostBot </code> </li> <li> <code> cd VKRepostBot </code> </li> <li> <code> git clone <a href="https://github.com/siniukov-de/forumnick-samp.git">https://github.com/siniukov-de/forumnick-samp.git</a> </code> </li> <li> <code> npm i </code> </li> <li> <code> pm2 start index.js --name VKRepostBot </code> </li> <li> <code> pm2 startup </code> </li> <li> <p> A string will be displayed in the chat that needs to be copied and sent. </p> </li> <li> <code> pm2 save </code> </li> </ol> <h2>Windows</h2> <ol id="windows"> <li> <p> Download and install: <a href="https://nodejs.org/dist/v20.15.1/node-v20.15.1-x64.msi">https://nodejs.org/dist/v20.15.1/node-v20.15.1-x64.msi</a> </p> </li> <li> <p> Download the repository using the link: <a href="https://github.com/siniukov-de/forumnick-samp/archive/refs/heads/master.zip">https://github.com/siniukov-de/forumnick-samp/archive/refs/heads/master.zip</a> </p> </li> <li> <p> Unzip the <code>forumnick-samp</code> folder. </p> </li> <li> <p> Go to the folder. </p> </li> <li> <p> Copy the path to the folder. </p> </li> <li> <code> CTRL+R </code> </li> <li> <code> cmd </code> </li> <li> <code> ENTER </code> </li> <li> <code> cd ПУТЬ_ДО_ПАПКИ </code> </li> <li> <code> npm i </code> </li> <li> <code> node . </code> </li> </ol> </body> </html>
