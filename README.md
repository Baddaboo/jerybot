# Jerybot
An IRC potatobot

## Fun Features
- Sarcasm
- Useless responses
- Insider jokes that no one understands

## How to run:
So you want to run your own Wafflebot? Good decision!

Create a `config.json` file with the following sample content
```JSON
{
	"mail_transport_string": "smtps://example%40gmail.com:passwordhere@smtp.gmail.com",
	"irc_server": "irc.example.com",
	"irc_server_password": "serverpassword"
}
```

You can then run jerybot by running
```bash
node wafflebot.js
```

## TODO
- Refactor to have a 'message' class rather than pass around room, to, message arguments etc
- Add more delicious british foods
- Maybe make rooms.json a hash table? Not a big deal really

## Contributing
Go for it! Submit a pull request :)

## License
![](http://i.imgur.com/UOkGhYi.gif)
