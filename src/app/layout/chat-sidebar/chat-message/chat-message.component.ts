import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({

  selector: 'app-chat-message',
  templateUrl: './chat-message.template.html'
})
export class ChatMessageComponent {
  @Input() conversation: any;
  @Input() open: boolean;
  @Input() searchMessage: string;
  @Output() chatMessageClosed = new EventEmitter();
  newMessage: string = '';

  closeChatArea(): void {
    this.open = false;
    this.chatMessageClosed.emit('');
  }

  addMessage(): void {
    if (this.newMessage) {
      (this.conversation.messages || (this.conversation.messages = [])).push({
        text: this.newMessage,
        fromMe: true
      });
    }
    this.newMessage = '';
  }

}
