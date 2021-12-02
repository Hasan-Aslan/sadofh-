module.exports = {
    "name": "komutlar",
    execute(message) {
        const {MessageEmbed} = require('discord.js');
        const embed = new MessageEmbed()
        .setDescription("Bot İle İlgili Komutlar:  \n  \n =>Daha fazla bilgi için !yardım \n •**!en pop ülke ismi ** \n •**!ülke ismi sayı** (5-10-15...50)")
        .setAuthor(message.author.tag)
        message.channel.send({ embeds: [embed] });
    }



}