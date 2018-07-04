import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`.myOnline{ color: #fff; font-size: 14px; padding: 15px;}`]
})
export class ServerComponent {
  serverName: string = 'MyServer'
  serverId: number = 200;
  serverStatus: string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
  }

  getMyServerStatus() {
    return this.serverStatus;
  }
  getServerId() {
    return this.serverId;
  }
  getColor() {
    return this.serverStatus === 'Online' ? 'green' : 'red';
  }
}
