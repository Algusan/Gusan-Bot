import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
  constructor(client: WAClient, handler: MessageHandler) {
    super(client, handler, {
      command: "support",
      aliases: ["support"],
      description: "Gets the support group links",
      category: "general",
      dm: true,
      usage: `${client.config.prefix}Support`,
      baseXp: 10,
    });
  }

  run = async (M: ISimplifiedMessage): Promise<void> => {
    await this.client.sendMessage(
      M.sender.jid,
      `*I'M FROM GUSAN*\n\n
        GUSAN SUPPORT:\n\nhttps://chat.whatsapp.com/KATAXc1RJca64skJkQMPqa\n\nGUSAN CASINO💰:\n\nhttps://chat.whatsapp.com/FkYFVuXZ8v7495n6033lgs\n\n GUSAN QUIZ📑:\n\nhttps://chat.whatsapp.com/G3nA5buCFfLLnU89lBvRLY`,

      MessageType.text
    );

    return void M.reply("Sent you the Group Link in personal message");
  };
}
