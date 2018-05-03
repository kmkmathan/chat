import { Component, OnInit } from '@angular/core';
import * as io from "socket.io-client";
import { CookieService } from 'ngx-cookie';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  	item = [];
	socket = io.connect('http://localhost:8890');
	sendData = {
		message :'',
		user:'mathan'
	}
	constructor(private cookie:CookieService, private router:Router) {}

	ngOnInit() {
        var token = this.cookie.get('_token');
        if(token == undefined || token == '') {
             this.router.navigate(['/login']);
         }
        // Socket on connection event
        this.socket.on('connect',  ()=> {
            console.log('SocketIO connected on client side.');
        });

        /* Custom socket events */
        this.socket.on('chatMessage',  (data)=> {
            // data = JSON.parse(data);
            // console.log(data);
            console.log('chatMessage is:', data);
            console.log(this.item);
            this.item.push(data);
            //$( "#messages" ).append( "<strong>"+data.user+":</strong><p>"+data.message+"</p>" );
        });

    }
        /* On submit button click */
	onSendMsg() {
        // var token = $("input[name='_token']").val();
        // var user = $("input[name='user']").val();
        // var msg = $(".msg").val();

        // sendData.user = user;
        // sendData.message = msg;

        //send data to server
        this.socket.emit('chatMessage', this.sendData);

        //reset enter input data
        //$(".msg").val('');
        this.sendData.message = '';
    }

    onLogout() {
        this.cookie.remove('_token');
        this.router.navigate(['/login']);
    }
}
