import { Subject } from "rxjs";
import { ChatMessage } from "./chat.model";

export class ChatService {
  chatChanged = new Subject<ChatMessage[]>();
  private chatMessages: ChatMessage[] =
                  [new ChatMessage(1, "biz", "What can I do for you?"),
                   new ChatMessage(1, 'cus', "i am fine."),
                   new ChatMessage(1, 'cus', 'how to enrol to the course?')];

  getMessages() {
    return this.chatMessages;
  }

  addMessage(msg: ChatMessage) {
    this.chatMessages.push(msg);
    this.chatChanged.next(this.chatMessages.slice());
  }
}
