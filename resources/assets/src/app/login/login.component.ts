import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../services/http.services';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-dashboard',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[]
})
export class LoginComponent implements OnInit {

  constructor(private cookie:CookieService,  private router:Router, private route:ActivatedRoute, private http:HttpService) { }
  isLogin = false;
  forgotPwd = false;
  loginData = {
  	url:'/login',
  	urlHead:'Login',
  	head:'Register',
  	username:'',
  	email:'',
  	password:'',
  	confirmPassword:''
  }
  	errMsg = '';

	ngOnInit() {
		 var token = this.cookie.get('_token');
		 console.log(token)
		 if(token != undefined && token != '') {
		 	this.router.navigate(['/dashboard']);
		 }
		this.route.params.subscribe((params) =>  {
			if(params.id == 'register') {
				this.isLogin = false;
				this.forgotPwd = false;
				this.loginData.head ='Register';
				this.loginData.url = '/login';
  				this.loginData.urlHead = 'Login';
			} else if(params.id == 'login') {
				this.isLogin = true;
				this.forgotPwd = false;
				this.loginData.head ='Login';
				this.loginData.url = '/register';
  				this.loginData.urlHead = 'Register';
			} else {
				this.forgotPwd = true;
				this.isLogin = false;
				this.loginData.head ='Reset Password';
			}
		});
	}

	onSendData() {
		var url;
		if(this.isLogin) {
			url = '/api/login'; 
		} else if(this.forgotPwd) {

		} else {
			url = '/api/register';
		}
		this.errMsg = '';
		console.log(this.loginData);
		 this.http.postMethod(url,this.loginData).subscribe(
            data => {
                if(data.success) {
                	console.log(data.data.token);
                	this.cookie.put('_token', data.data.token);
                	this.router.navigate(['/dashboard']);
                } else {
                	var error = data.error; 
                	for(var val in error) {
                		this.errMsg += error[val][0] +'<br>';
                	}  
                }
            },
            error => {
                console.log(error);
            });
	}
}
