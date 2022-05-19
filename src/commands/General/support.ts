import { MessageType, Mimetype } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'support',
            aliases: ['support'],
            description: 'Gets the support group links',
            category: 'general',
            usage: `${client.config.prefix}Support`,
            baseXp: 10
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        (await this.client.sendMessage(
        M.sender.jid,
                `         
*📮𝗦𝘂𝗽𝗽𝗼𝗿𝘁 𝗚𝗿𝗼𝘂𝗽 𝗟𝗶𝗻𝗸*
GUSAN SUPPORT:\n\nhttps://chat.whatsapp.com/KATAXc1RJca64skJkQMPqa\n\nGUSAN CASINO💰:\n\nhttps://chat.whatsapp.com/FkYFVuXZ8v7495n6033lgs\n\n GUSAN QUIZ📑:\n\nhttps://chat.whatsapp.com/G3nA5buCFfLLnU89lBvRLY,
           MessageType.text
        ))
        const n = [
            './assets/images/anime-gal.jpg'
        ]
        let rin = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: rin }, MessageType.image, {quoted:M.WAMessage,
            mimetype: Mimetype.jpeg,
            caption: `Regarding this, I have sent you a personal message in your DM📪\n` }
        )

        }
}
