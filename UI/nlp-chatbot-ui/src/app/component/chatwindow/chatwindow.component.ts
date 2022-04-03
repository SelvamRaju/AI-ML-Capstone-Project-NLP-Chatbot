import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-chatwindow',
  templateUrl: './chatwindow.component.html',
  styleUrls: ['./chatwindow.component.scss'],
})
export class ChatwindowComponent implements OnInit {
  messages: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    /*  this.apiService.getMessage().subscribe((data : any)=>{
      console.log(data);
      this.messages = data.data;
  }) */
  }

  async sendMessage(messageFromUser: string) {
    await this.messages.push(this.processMesssageFromSelf(messageFromUser));
    await this.messages.push(this.processMesssageFromModel(messageFromUser));
  }

  processMesssageFromSelf(messageFromUser: string) {
    return {
      message: messageFromUser,
      image:
        'https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png',
      alignment: 'left',
      timeAlignment: 'time-right',
    };
  }

  processMesssageFromModel(messageFromUser: string) {
    let apiServiceMessage = this.apiService.postMessage(messageFromUser)
    //console.log("TESTING ", apiServiceMessage);
    return {
      message: `NLP Model responded with ${messageFromUser} - Temporary response`,
      image:
        'https://cdn.technologyadvice.com/wp-content/uploads/2018/02/friendly-chatbot.jpg',
      alignment: 'right',
      timeAlignment: 'time-left',
    };
  }
}
