const keepAlive = require('./server');
                let Discord;
                let Database;
                if(typeof window !== "undefined"){
                    Discord = DiscordJS;
                    Database = EasyDatabase;
                } else {
                    Discord = require("discord.js");
                    Database = require("easy-json-database");
                }
                const delay = (ms) => new Promise((resolve) => setTimeout(() => resolve(), ms));
                const s4d = {
                    Discord,
                    client: null,
                    tokenInvalid: false,
                    reply: null,
                    joiningMember: null,
                    database: new Database("./db.json"),
                    checkMessageExists() {
                        if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
                        if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
                    }
                };
                s4d.client = new s4d.Discord.Client({
                    fetchAllMembers: true
                });
                s4d.client.on('raw', async (packet) => {
                    if(['MESSAGE_REACTION_ADD', 'MESSAGE_REACTION_REMOVE'].includes(packet.t)){
                        const guild = s4d.client.guilds.cache.get(packet.d.guild_id);
                        if(!guild) return;
                        const member = guild.members.cache.get(packet.d.user_id) || guild.members.fetch(d.user_id).catch(() => {});
                        if(!member) return;
                        const channel = s4d.client.channels.cache.get(packet.d.channel_id);
                        if(!channel) return;
                        const message = channel.messages.cache.get(packet.d.message_id) || await channel.messages.fetch(packet.d.message_id).catch(() => {});
                        if(!message) return;
                        s4d.client.emit(packet.t, guild, channel, message, member, packet.d.emoji.name);
                    }
                });
                s4d.client.on('message', async (s4dmessage) => {
  if ((s4dmessage.content) == '!test') {
    s4dmessage.channel.send(String('pong!'));
  }
  if ((s4dmessage.content) == '!fnf-battle') {
    s4dmessage.channel.send(String('Choose your roblox game by pressing one of the links bellow'));
    s4dmessage.channel.send(String('<https://www.roblox.com/games/refer?IsLargeGameTile=false&PageId=9d268ac7-467e-445c-a4f5-3f6c0131e9f0&PageType=Home&PlaceId=6447798030&Position=1&SortName=MyRecent&SortPosition=1&LocalTimestamp=2021-07-24T10:50:00.475Z>'));
    s4dmessage.channel.send(String('<https://www.roblox.com/games/refer?IsLargeGameTile=false&PageId=9d268ac7-467e-445c-a4f5-3f6c0131e9f0&PageType=Home&PlaceId=6683334868&Position=2&SortName=MyRecent&SortPosition=1&LocalTimestamp=2021-07-24T10:50:00.477Z>'));
    s4dmessage.channel.send(String('<https://www.roblox.com/games/refer?IsLargeGameTile=false&PageId=9d268ac7-467e-445c-a4f5-3f6c0131e9f0&PageType=Home&PlaceId=6520999642&Position=6&SortName=MyRecent&SortPosition=1&LocalTimestamp=2021-07-24T10:50:00.481Z>'));
  }
  if ((s4dmessage.content) == 'no u') {
    s4dmessage.channel.send(String('no u.'));
  }
  if ((s4dmessage.content) == 'did you know') {
    s4dmessage.channel.send(String('Hey guys, did you know that in terms of male human and female Pokémon breeding, Vaporeon is the most compatible Pokémon for humans? Not only are they in the field egg group, which is mostly comprised of mammals, Vaporeon are an average of 3"03 tall and 63.9 pounds. this means theyre large enough to be able to handle human dicks, and with their impressive Base stats for HP and access to Acid Armor, you can be rough with one. Due to their mostly water based biology, theres no doubt in my mind that an aroused Vaporeon would be incredibly wet, so wet that you could easily have sex with one for hours without getting sore. They can also learn the moves Attract, Baby-Doll eyes, Captivate, Charm and Tail Whip along with not having fur to hide nipples, so itd be incredibly easy for one to get you in the mood. With their abilities Water Absorb and Hydration, they can easily recover from fatigue with enough water. No other Pokémon comes close with this level of compatibility. Also, fun fact, if you pull out enough, you can make your Vaporeon turn white. Vaporeon is literally built for human dick. Ungodly defense stat + high HP pool + Acid Armor means it can take cock all day, all shapes and sizes and still come for more.'));
  }
  if ((s4dmessage.content) == 'sex') {
    s4dmessage.channel.send(String('https://media.discordapp.net/attachments/982304973511606323/1091613153789480991/attachment-103.gif'));
  }
  if ((s4dmessage.content) == 'version') {
    s4dmessage.channel.send(String('Bot Version is on: **1.0.2 BETA**'));
  }
  if ((s4dmessage.content) == 'i need water') {
    s4dmessage.channel.send(String('https://media.discordapp.net/attachments/1012786982331617302/1095785957833330778/SPOILER_unknown-244_1.jpg'));
  }
  if ((s4dmessage.content) == 'nate') {
    s4dmessage.channel.send(String('https://media.discordapp.net/attachments/1022498862503571486/1094043967659704350/IMG_4428.png'));
  }
  if ((s4dmessage.content) == 'pog') {
    s4dmessage.channel.send(String('https://media.discordapp.net/attachments/1022498862503571486/1078196771345399808/FpN9zYHWcAEXFDe.jpg'));
  }
  if ((s4dmessage.content) == '!YouTube') {
    s4dmessage.channel.send(String('https://www.youtube.com/channel/UC_lJmvYgeAwzcYaeYXlZ7vg'));
  }
  if ((s4dmessage.content) == '!sub') {
    s4dmessage.channel.send(String('https://www.youtube.com/channel/UC_lJmvYgeAwzcYaeYXlZ7vg?sub_confirmation=1'));
  }
  if ((s4dmessage.content) == 'dogdog') {
    s4dmessage.channel.send(String('vvorthy balls'));
  }
  if ((s4dmessage.content) == 'zest fest') {
    s4dmessage.channel.send(String('https://media.discordapp.net/attachments/1012786982331617302/1095744889800642630/Snaptik.app_7218310983251414314.mp4'));
  }
  if ((s4dmessage.content) == 'cum') {
    s4dmessage.channel.send(String('https://media.discordapp.net/attachments/1012786982331617302/1095745486671061173/20230412_062323.jpg'));
  }
  if ((s4dmessage.content) == 'kys') {
    s4dmessage.channel.send(String('https://media.discordapp.net/attachments/1012786982331617302/1095745592883425470/IMG_4843.png'));
  }
  if ((s4dmessage.content) == 'axel in harlem') {
    s4dmessage.channel.send(String('https://cdn.discordapp.com/attachments/717594375915438171/1095738099226652784/rapidsave.com_axel_in_harlem_full_vid-orqkhksavsia1-220.mp4'));
  }
  if ((s4dmessage.content) == 'zmac') {
    s4dmessage.channel.send(String('vvorthy cock'));
  }
  if ((s4dmessage.content) == 'vvorthy') {
    s4dmessage.channel.send(String('https://media.discordapp.net/attachments/870474850538487848/1095738232676818944/image.jpg'));
  }
  if ((s4dmessage.content) == 'what color is an orange') {
    s4dmessage.channel.send(String('dummie its the same color as its name like lemons'));
  }
  if ((s4dmessage.content) == 'dap me up') {
    s4dmessage.channel.send(String(' got you mate :handshake:'));
  }
  if ((s4dmessage.content) == 'who is deez') {
    s4dmessage.channel.send(String('DEEZ NUTS. GOT EM'));
  }

});

keepAlive()

s4d.client.login('YOUR TOKEN').catch((e) => { s4d.tokenInvalid = true; s4d.tokenError = e; });

s4d.client.on('message', async (s4dmessage) => {
  if ((s4dmessage.content) == '!commands') {
    s4dmessage.channel.send(String('so i can do some stuff like:'));
    s4dmessage.channel.send(String('with !test i can test if the bot works'));
    s4dmessage.channel.send(String('if you type no u i will say that too'));
    s4dmessage.channel.send(String('if you want to rap battle someone you can type the command !fnf-battle and choose a roblox game to rap with your friends(if you have any)'));
    s4dmessage.channel.send(String('with the !YouTube command you can see trusts YouTube channel'));
    s4dmessage.channel.send(String('and with the !sub command you can sub to him'));
    s4dmessage.channel.send(String('|-----------**THIS IS A BETA BOT AND IT MAY HAVE SOME BUGS**-------|'));
  }

});

s4d.client.on('message', async (s4dmessage) => {
  if ((s4dmessage.content) == 'lets do a little bit of trolling') {
    s4dmessage.channel.send(String('got you mate starting program trolling...'));
    await delay(Number(2)*1000);
    s4dmessage.channel.send(String('https://cdn.discordapp.com/attachments/861657600126353408/868914535589904404/doinyoma.mp4'));
    await delay(Number(2)*1000);
    s4dmessage.channel.send(String('https://tenor.com/view/troll-gif-22102624'));
  }

});

s4d.client.on('message', async (s4dmessage) => {
  if ((s4dmessage.content) == 'LANGUAGE') {
    s4dmessage.channel.send(String('starting BBH program...'));
    await delay(Number(2)*1000);
    s4dmessage.channel.send(String('https://kapwi.ng/c/iOvfFxCu'));
    await delay(Number(2)*1000);
    s4dmessage.channel.send(String('BBH helped now stop swearing'));
  }

});

                s4d;
            