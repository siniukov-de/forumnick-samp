# КАК ЗАСТАВИТЬ БОТА РАБОТАТЬ?

<procedure title="Linux" id="linux">
    <step>
        <shortcut>sudo apt update</shortcut>
    </step>
    <step>
        <shortcut>sudo apt install nodejs</shortcut>
    </step>
    <step>
        <shortcut>sudo apt install npm</shortcut>
    </step>
    <step>
        <shortcut>sudo apt install git</shortcut>
    </step>
    <step>
        <shortcut>npm install pm2 -g</shortcut>
    </step>
    <step>
        <shortcut>mkdir VKRepostBot</shortcut>
    </step>
    <step>
        <shortcut>cd VKRepostBot</shortcut>
    </step>
    <step>
        <shortcut>git clone https://github.com/siniukov-de/forumnick-samp.git</shortcut>
    </step>
    <step>
        <shortcut>npm i</shortcut>
    </step>
    <step>
        <shortcut>pm2 start index.js --name VKRepostBot</shortcut>
    </step>
    <step>
        <shortcut>pm2 startup</shortcut>
    </step>
    <step>
        <p>В чат выведется строка, которую необходимо скопировать и отправить.</p>
    </step>
    <step>
        <shortcut>pm2 save</shortcut>
    </step>
</procedure>

<procedure title="Windows" id="windows">
    <step>
        <p>Скачиваешь и устанавливаешь: https://nodejs.org/dist/v20.15.1/node-v20.15.1-x64.msi</p>
    </step>
    <step>
        <p>Скачиваешь репозиторий по ссылке: https://github.com/siniukov-de/forumnick-samp/archive/refs/heads/master.zip</p>
    </step>
    <step>
        <p>Разархивируешь папку</p> <code>forumnick-samp</code>.
    </step>
    <step>
        <p>Заходишь в папку.</p>
    </step>
    <step>
        <p>Копируешь путь до папки.</p>
    </step>
    <step>
        <shortcut>CTRL+R</shortcut>
    </step>
    <step>
         <p>Пишешь</p> <shortcut>cmd</shortcut>.
    </step>
    <step>
        <shortcut>ENTER</shortcut>
    </step>
    <step>
        <shortcut>cd ПУТЬ_ДО_ПАПКИ</shortcut>
    </step>
    <step>
        <shortcut>npm i</shortcut>
    </step>
    <step>
        <shortcut>node .</shortcut>
    </step>
</procedure>
