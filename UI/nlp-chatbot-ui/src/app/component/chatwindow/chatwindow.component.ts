import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-chatwindow',
  templateUrl: './chatwindow.component.html',
  styleUrls: ['./chatwindow.component.scss']
})
export class ChatwindowComponent implements OnInit {

  messages: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
   /*  this.apiService.getMessage().subscribe((data : any)=>{
      console.log(data);
      this.messages = data.data;
  }) */
  }

  sendMessage(messageFromUser: string) {
    this.messages.push(this.processMesssageFromSelf(messageFromUser));
    this.messages.push(this.processMesssageFromModel(messageFromUser));
  }

  processMesssageFromSelf(messageFromUser: string) {
    return {
      message :messageFromUser,
      image : "https://avatars.githubusercontent.com/u/18620225?s=96&v=4",
      alignment: "left",
      timeAlignment: "time-right",
      darker : ""
    };
  }

  processMesssageFromModel(messageFromUser: string) {
    return {
      message : `NLP Model responded with ${messageFromUser} - Temporary response`,
      image : "https://cdn.technologyadvice.com/wp-content/uploads/2018/02/friendly-chatbot.jpg",
      alignment: "right",
      timeAlignment: "time-left",
      darker : "darker"
    };
  }

}
