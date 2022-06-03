/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
  constructor(client: WAClient, handler: MessageHandler) {
    super(client, handler, {
      command: "rules",
      description: "shows the rules for beyond",
      category: "general",
      usage: `${client.config.prefix}rules`,
      baseXp: 0,
    });
  }

  run = async (M: ISimplifiedMessage): Promise<void> => {
    const buttons = [
      {
        buttonId: "faq",
        buttonText: { displayText: `${this.client.config.prefix}faq` },
        type: 1,
      },
    ];

    const buttonMessage: any = {
      contentText: `🎃𝗕𝗼𝘁 𝗥𝘂𝗹𝗲𝘀\n\n 1.Don't call or spam the bot.\n\n 2.Don't text the mods asking to be added as a mod.\n\n 3.Don't chat the bot as the bot doesn't chat back.\n\n 4.Use ${this.client.config.prefix}support command to get support link.\n\n 5.Send group link to the bot's DM or to bot owner.\n\n 6.The bot must be an admin of your group.\n\n 7.The bot will join a group with 30+ members.\n\n 8.The bot won't join back in a group where it was removed.\n\n 9.The bot will leave inactive groups.\n\n 10.Don't abuse the bot or the owner in any way.`,
      footerText: "Gusan Bot©",
      buttons: buttons,
      headerType: 1,
    };
    await M.reply(buttonMessage, MessageType.buttonsMessage);
  };
}
