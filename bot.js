
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
  if ((s4dmessage.content) == '!YouTube') {
    s4dmessage.channel.send(String('https://www.youtube.com/channel/UC_lJmvYgeAwzcYaeYXlZ7vg'));
  }
  if ((s4dmessage.content) == '!sub') {
    s4dmessage.channel.send(String('https://www.youtube.com/channel/UC_lJmvYgeAwzcYaeYXlZ7vg?sub_confirmation=1'));
  }
  if ((s4dmessage.content) == 'dogdog') {
    s4dmessage.channel.send(String('vvorthy balls'));
  }
  if ((s4dmessage.content) == 'zmac') {
    s4dmessage.channel.send(String('vvorthy cock'));
  }
  if ((s4dmessage.content) == 'vvorthy') {
    s4dmessage.channel.send(String('dogdog balls'));
  }
  if ((s4dmessage.content) == 'what color is an orange') {
    s4dmessage.channel.send(String('dummie its the same color as its name like lemons'));
  }
  if ((s4dmessage.content) == 'dap me up') {
    s4dmessage.channel.send(String(' got you mate :handshake:'));
  }

});

s4d.client.login('').catch((e) => { s4d.tokenInvalid = true; s4d.tokenError = e; });

s4d.client.on('message', async (s4dmessage) => {
  if ((s4dmessage.content) == '!commands') {
    s4dmessage.channel.send(String('so i can do some stuff like:'));
    s4dmessage.channel.send(String('with !test i can test if the bot works'));
    s4dmessage.channel.send(String('if you type no u i will say that too'));
    s4dmessage.channel.send(String('if you want to rap battle someone you can type the command !fnf-battle and choose a roblox game to rap with your friends(if you have any)'));
    s4dmessage.channel.send(String('with the !YouTube command you can see trusts YouTube channel'));
    s4dmessage.channel.send(String('and with the !sub command you can sub to him'));
    s4dmessage.channel.send(String('|-----------**THIS IS A WIP BOT AND IT MAY HAVE SOME BUGS**-------|'));
  }

});

                s4d;
            