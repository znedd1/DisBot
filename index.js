const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Ready!');

    setInterval(function () {
        var readTextFile = require('read-text-file');
        var time = readTextFile.readSync('final.txt');
        if (Date.now() > 1588359600000 && time === "") {
           // client.users.get('462276937524576266').send("I got kicked from a server")
          var channel = client.channels.get('462289055825133581');
            var everything = "ab";



            var contentsPromise = readTextFile.read('text.txt');
            everything = readTextFile.readSync('text.txt');

            var all = everything.split('$v$');
            do {
                var rnd = Math.floor(Math.random() * all.length);
            }
            while (all[rnd] === "");


            //client.emit('message', message);
            channel.send("@everyone, the modifier of this year's jam is " + all[rnd] + ". Good luck!");
            var fs = require('fs');

            fs.appendFile("final.txt", '1', function (err) {
                if (err) {
                    return console.log(err);
                }

                console.log("The file was saved!");
            });
        }
    }
        , 3000);
});


client.login('NDYyMjc2OTM3NTI0NTc2MjY2.DhfqoA.6ne4KLnTSY4McOaSsupF4LAdIE0');






client.on('message', message => {
    if (message.content === '!loop') {
        var interval = setInterval(function () {
            // use the message's channel (TextChannel) to send a new message
            message.channel.send("123")
                .catch(console.error); // add error handling here
        }, 1 * 1000);
    }
    else {


        console.log(message.content);
        var fs = require('fs');
        var thingy = message.content;
        var messagecont = thingy.substring(0, 5).toLowerCase();
        var rest = thingy.substr(6, thingy.length);
        console.log(messagecont);
        if (messagecont === "!vote" && rest !== "") {

            message.channel.send('Your vote has been counted.');
            process.env.TEXT = process.env.TEXT.concat('$v$' + rest);
           // fs.appendFile("text.txt", '$v$' + rest, function (err) {
            //    if (err) {
             //       return console.log(err);
           //     }

           //     console.log("The file was saved!");
           // });
        }
        else if (messagecont === "!show") {

            var everything = "ab";
            
            var readTextFile = require('read-text-file');

            var contentsPromise = readTextFile.read('text.txt');
            everything = readTextFile.readSync('text.txt');

            var all = process.env.TEXT.split('$v$');
            var amount = [];
            var i;
            for (i = 0; i < all.length; i++) {
                amount[i] = 1;
                var j;
                for (j = 0; j < i; j++) {
                    if (all[j].toLowerCase().trim() === all[i].toLowerCase().trim() && i !== j) {
                        all[i] = "";
                        amount[j] = amount[j] + 1;

                    }

                }

                // message.channel.send(all[i] );
            }
            for (i = 0; i < all.length; i++) {
                if (all[i] !== "") {
                    message.channel.send(all[i] + " = " + amount[i]);
                }
            }

        }

    }
    

    //.trim.toLowerCase
});


