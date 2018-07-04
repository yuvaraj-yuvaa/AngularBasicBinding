import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowMyServer = false;
  serverCreateStatus = 'No server was created';
  serverName = 'myTesstServer';
  serverCreated = false;
  testName = ''
  testCreted = false;
  enableBtn: boolean = true;
  disableBtn:boolean = false;

  constructor() {
    setTimeout(() => {
      this.allowMyServer = true;
    }, 3000)
  }

   ngOnInit() {
  }

  createServer() {
    this.serverCreateStatus = 'Server was  created';
    this.serverCreated = true;
  }

  updateServerName(myEvent: Event) {
    this.serverName = (<HTMLInputElement>myEvent.target).value;
  }
  
  myTestFunc() {
    this.testCreted = true;
  }

  funBtn(val){
    if(val="disableBtn" && this.disableBtn){
      this.disableBtn = false;
      this.enableBtn = true;
    }else if(val="disableBtn" && !this.disableBtn){
      this.disableBtn = true;
      this.enableBtn = false;
    }
  }
}
