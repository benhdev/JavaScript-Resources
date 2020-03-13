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

> [nodemailer](https://nodemailer.com/about/)  
> Email sender - [Setting up with G Suite OAuth2](https://medium.com/@imre_7961/nodemailer-with-g-suite-oauth2-4c86049f778a)  
> `npm install nodemailer --save`

> [pm2](https://pm2.keymetrics.io/)  
> Process manager for node.js  
> `npm install pm2 -g`  
> `pm2 start app.js --name main-process`  
> `pm2 logs main-process`  
> `pm2 restart main-process`  
> `pm2 stop main-process`  
