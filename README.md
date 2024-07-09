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
        <p>Скачиваешь репозиторий по ссылке: https://github.com/siniukov-de/forumnick-samp/archive/refs/heads/master.zip</p>
    </step>
    <step>
        <p>Press <shortcut>Tab</shortcut> or <shortcut>Enter</shortcut> to insert the markup.</p>
    </step>
</procedure>
