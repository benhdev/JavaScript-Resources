## JavaScript Resources
A set of javascript functions created by me and other useful resources

### Created by me
- [FizzBuzz](FizzBuzz.js)
- [GetCookie](GetCookie.js)
- [MaxComponents](MaxComponents.js)
- [MaximumSubstring](MaximumSubstring.js)

### Useful resources
> [axios](https://www.npmjs.com/package/axios)  
> Promise based HTTP client for the browser and node.js  
> `npm install axios --save`  
```js
const axios = require('axios');

async function sendRequest() {
    let Result = await axios.get('http://api.open-notify.org/iss-now.json');

    if(!Result) {
        return console.log('No result');
    }

    let Data = Result.data;

    if(!Data) {
        return console.log('No data');
    }

    if(Data.message !== 'success') {
        return console.log('Error');
    }

    console.log('The International Space Station is currently at:');
    console.log(`${Data.iss_position.latitude}, ${Data.iss_position.longitude}`);
}

sendRequest();
```

> [discord.js](https://discord.js.org/)  
> Discord API framework  
> `npm install discord.js --save`  
```js
const Discord = require('discord.js');
const Client = new Discord.Client();

Client.on('ready', function() {
    console.log('The bot is ready');
});

Client.on('message', function(Message) {
    console.log('Someone sent a message');
});

Client.login('CLIENT_TOKEN');
```

> [express](http://expressjs.com/)  
> Node.js web application framework  
> `npm install express --save`
```js
const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.listen(80);
```

> [mysql](https://www.npmjs.com/package/mysql)  
> MySQL driver for node.js  
> `npm install mysql --save`  
```js
const mysql = require('mysql');
const key = require('./key.json');

const database = mysql.createConnection({
    host: key.host,
    user: key.user,
    password: key.password,
    database: key.database
});

database.connect();

database.query('SELECT 1 + 1 AS Solution', function(error, results, fields) {
    if(error) throw error;

    let Result = results[0];
    console.log(`The solution is: ${Result.Solution}`);
});

database.end();
```

> [nodemailer](https://nodemailer.com/about/)  
> Email sender - [Setting up with G Suite OAuth2](https://medium.com/@imre_7961/nodemailer-with-g-suite-oauth2-4c86049f778a)  
> `npm install nodemailer --save`  
```js
const nodemailer = require('nodemailer');
const key = require('./key.json');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        type: 'OAuth2',
        user: 'from@example.com',
        serviceClient: key.client_id,
        privateKey: key.private_key
    }
});

transporter.sendMail({
    from: 'from@example.com',
    to: 'to@example.com',
    subject: 'Test Email',
    html: '<h1>hello</h1>',
    text: 'hello'
});
```

> [pm2](https://pm2.keymetrics.io/)  
> Process manager for node.js  
> `npm install pm2 -g`  
> `pm2 start app.js --name main-process`  
> `pm2 logs main-process`  
> `pm2 restart main-process`  
> `pm2 stop main-process`  
