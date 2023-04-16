const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Get info about a user or a server!')
        .addSubcommand(subcommand =>
            subcommand
                .setName('user')
                .setDescription('Info about a user')
                .addUserOption(option => option.setName('target').setDescription('The user')))
        .addSubcommand(subcommand =>
            subcommand
                .setName('server')
                .setDescription('Info about the server')),
	async execute(interaction) {
        const target = interaction.options.getUser('target');

        const embed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('Info de l\'utilisateur')
            .addFields(
                { name: 'User ping', value: `<@${target.id}>` },
                { name: 'User ID', value: `${target.id}` },
            )
            .setTimestamp()
            .setFooter({ text: 'TheBot'});

		await interaction.reply({ embeds: [embed] });
	},
};