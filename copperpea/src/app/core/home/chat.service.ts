import { Subject } from "rxjs";
import { ChatMessage } from "./chat.model";

export class ChatService {
  chatChanged = new Subject<ChatMessage[]>();
  private chatMessages: ChatMessage[] =
                  [new ChatMessage(1, "biz", "欢迎来到长风万里的软件编程世界！请问有什么可以帮到你的吗？"),
                  ];

  getMessages() {
    return this.chatMessages;
  }

  addMessage(msg: ChatMessage) {
    this.chatMessages.push(msg);
    this.chatChanged.next(this.chatMessages.slice());
  }
}
