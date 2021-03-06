import { MessageType } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import request from '../../lib/request'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
                        command: "happybirthday",
                        aliases: ["hbd", "hhp"],
			description: "use for birthday wish",
			category: "dev",
			modsOnly: true,
			usage: `${client.config.prefix}happybirthday`,
			baseXp: 10,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
        if (M.quoted?.sender) M.mentioned.push(M.quoted.sender)
        const user = M.mentioned[0] ? M.mentioned[0] : M.sender.jid
        let username = user === M.sender.jid ? M.sender.username : ''
        if (!username) {
            const contact = this.client.getContact(user)
            username = contact.notify || contact.vname || contact.name || user.split('@')[0]
        }
        let pfp: string
        try {
            pfp = await this.client.getProfilePicture(user)
        } catch (err) {
            M.reply(`Profile Picture not Accessible of ${username}`)
            pfp =
                'https://wallpaperaccess.com/full/5304840.png'
        }
        await M.reply(
            await request.buffer(
                pfp ||
                    'https://wallpaperaccess.com/full/5304840.png'
            ),
            MessageType.image,
            undefined,
            undefined,
            `Heyâ¨\nâ¢We as *${M.groupMetadata?.subject}* group & I as Gusan-Bot we cheer you for another trip around the sun, the day is all yours pal.ð¤May you receive the greatest of all joys & everlasting bliss.â¨You are a wonderful gift yourself & you deserve the best.ð Happy Birthday.ð¥°\n\n ðððð®ð½ð½ð ðð¶ð¿ððµð±ð®ððð\n â¢Enjoy this special day as you turn an year older *@${user.split('@')[0]}*, TMLðâ¤\n\n`
        )
    }
}
