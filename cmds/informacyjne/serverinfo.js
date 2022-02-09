module.exports = {
    name: 'serverinfo',
    aliases: ['serv-info'],
    description: 'help',
    execute(message, args, Discord) {
const { guild } = message

    const { name, region, memberCount, owner, afkTimeout } = guild
    const icon = guild.iconURL()

    const embed = new Discord.MessageEmbed()
      .setTitle(`Server info dla "${name}"`)
      .setThumbnail(icon)
      .addFields(
        {
          name: 'Region',
          value: region,
        },
        {
          name: 'Członkowie',
          value: memberCount,
        },
        {
          name: 'Właściciel',
          value: owner.user.tag,
        },
        {
          name: 'AFK',
          value: afkTimeout / 60,
        }
      )

    message.channel.send(embed)
  }
}
