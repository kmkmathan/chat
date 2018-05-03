webpackJsonp(["main"],{

/***/ "./resources/assets/src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./resources/assets/src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./resources/assets/src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var dashboard_component_1 = __webpack_require__("./resources/assets/src/app/dashboard/dashboard.component.ts");
var login_component_1 = __webpack_require__("./resources/assets/src/app/login/login.component.ts");
var routes = [
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: ':id', component: login_component_1.LoginComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./resources/assets/src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "h1 {\r\n  font-size: 1.2em;\r\n  color: #999;\r\n  margin-bottom: 0;\r\n}\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n  color: #607D8B;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\n/*\r\nCopyright 2017 Google Inc. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at http://angular.io/license\r\n*/"

/***/ }),

/***/ "./resources/assets/src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./resources/assets/src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./resources/assets/src/app/app.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/app.component.css")],
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./resources/assets/src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var app_routing_module_1 = __webpack_require__("./resources/assets/src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__("./resources/assets/src/app/app.component.ts");
var dashboard_component_1 = __webpack_require__("./resources/assets/src/app/dashboard/dashboard.component.ts");
var header_component_1 = __webpack_require__("./resources/assets/src/app/header/header.component.ts");
var login_component_1 = __webpack_require__("./resources/assets/src/app/login/login.component.ts");
var http_services_1 = __webpack_require__("./resources/assets/src/app/services/http.services.ts");
var ngx_cookie_1 = __webpack_require__("./node_modules/ngx-cookie/bundles/ngx-cookie.umd.js");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpModule,
                ngx_cookie_1.CookieModule.forRoot()
            ],
            declarations: [
                app_component_1.AppComponent,
                dashboard_component_1.DashboardComponent,
                header_component_1.HeaderComponent,
                login_component_1.LoginComponent
            ],
            providers: [http_services_1.HttpService, ngx_cookie_1.CookieService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./resources/assets/src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ".logout {\r\n\tcursor: pointer;\r\n}"

/***/ }),

/***/ "./resources/assets/src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header>\r\n    <li><a class=\"logout\" (click)=\"onLogout()\">Logout</a></li>\r\n</app-header>\r\n<div class=\"container spark-screen\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-10 col-md-offset-1\">\r\n            <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">Chat Message Module</div>\r\n                <div class=\"panel-body\">\r\n \r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-8\" >\r\n                      <div id=\"messages\">\r\n                        <div *ngFor=\"let eachitem of item\"><strong>{{eachitem.user}}:</strong><p>{{eachitem.message}}</p></div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-8\" >\r\n                            <form action=\"sendmessage\" method=\"POST\" (ngSubmit)=\"onSendMsg()\" novalidate=\"\">\r\n                               <!-- <input type=\"hidden\" name=\"_token\" value=\"{{ csrf_token() }}\" >\r\n                                <input type=\"hidden\" name=\"user\" value=\"{{ Auth::user()->name }}\" >  -->\r\n                                <textarea class=\"form-control msg\" [(ngModel)]=\"sendData.message\" name=\"message\"></textarea>\r\n                                <br/>\r\n                                <input type=\"submit\" value=\"Send\" class=\"btn btn-success send-msg\" >\r\n                            </form>\r\n                    </div>\r\n                </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./resources/assets/src/app/dashboard/dashboard.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var io = __webpack_require__("./node_modules/socket.io-client/lib/index.js");
var ngx_cookie_1 = __webpack_require__("./node_modules/ngx-cookie/bundles/ngx-cookie.umd.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(cookie, router) {
        this.cookie = cookie;
        this.router = router;
        this.item = [];
        this.socket = io.connect('http://localhost:8890');
        this.sendData = {
            message: '',
            user: 'mathan'
        };
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        var token = this.cookie.get('_token');
        if (token == undefined || token == '') {
            this.router.navigate(['/login']);
        }
        // Socket on connection event
        this.socket.on('connect', function () {
            console.log('SocketIO connected on client side.');
        });
        /* Custom socket events */
        this.socket.on('chatMessage', function (data) {
            // data = JSON.parse(data);
            // console.log(data);
            console.log('chatMessage is:', data);
            console.log(_this.item);
            _this.item.push(data);
            //$( "#messages" ).append( "<strong>"+data.user+":</strong><p>"+data.message+"</p>" );
        });
    };
    /* On submit button click */
    DashboardComponent.prototype.onSendMsg = function () {
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
    };
    DashboardComponent.prototype.onLogout = function () {
        this.cookie.remove('_token');
        this.router.navigate(['/login']);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            template: __webpack_require__("./resources/assets/src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_cookie_1.CookieService, router_1.Router])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;


/***/ }),

/***/ "./resources/assets/src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./resources/assets/src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-static-top\">\n    <div class=\"container\">\n        <div class=\"navbar-header\">\n\n            <!-- Collapsed Hamburger -->\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#app-navbar-collapse\" aria-expanded=\"false\">\n                <span class=\"sr-only\">Toggle Navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n\n            <!-- Branding Image -->\n            <a class=\"navbar-brand\" href=\"/\">\n               App\n            </a>\n        </div>\n\n        <div class=\"collapse navbar-collapse\" id=\"app-navbar-collapse\">\n            <!-- Left Side Of Navbar -->\n            <ul class=\"nav navbar-nav\">\n                &nbsp;\n            </ul>\n\n            <!-- Right Side Of Navbar -->\n            <ul class=\"nav navbar-nav navbar-right\">\n                <!-- Authentication Links -->\n                <ng-content></ng-content>\n            </ul>\n        </div>\n    </div>\n</nav>\n"

/***/ }),

/***/ "./resources/assets/src/app/header/header.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            template: __webpack_require__("./resources/assets/src/app/header/header.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;


/***/ }),

/***/ "./resources/assets/src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./resources/assets/src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header>\r\n    <li><a [routerLink]=\"loginData.url\">{{loginData.urlHead}}</a></li>\r\n    <li *ngIf=\"forgotPwd\"><a [routerLink]=\"'/login'\">Login</a></li>\r\n    <!-- <li><a routerLink=\"/register\">Register</a></li> -->\r\n    <!-- <li class=\"dropdown\">\r\n        <a href=\"javascript:void(0);\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\" aria-haspopup=\"true\" v-pre>\r\n            Mathan <span class=\"caret\"></span>\r\n        </a>\r\n\r\n        <ul class=\"dropdown-menu\">\r\n            <li>\r\n                <a href=\"\">\r\n                    Logout\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </li> -->\r\n</app-header>\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-8 col-md-offset-2\">\r\n            <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">{{loginData.head}}</div>\r\n\r\n                <div class=\"panel-body\">\r\n                    <div [innerHTML]=\"errMsg\" class=\"error_msg tx_c\" ></div>\r\n                    <form class=\"form-horizontal\" (ngSubmit)=\"onSendData()\">\r\n\r\n                        <div class=\"form-group\" *ngIf=\"!isLogin && !forgotPwd\">\r\n                            <label for=\"name\" class=\"col-md-4 control-label\">Name</label>\r\n\r\n                            <div class=\"col-md-6\">\r\n                                <input id=\"name\" type=\"text\" class=\"form-control\" name=\"name\" required autofocus [(ngModel)]=\"loginData.username\">\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <label for=\"email\" class=\"col-md-4 control-label\">E-Mail Address</label>\r\n\r\n                            <div class=\"col-md-6\">\r\n                                <input id=\"email\" type=\"email\" class=\"form-control\" name=\"email\" required [(ngModel)]=\"loginData.email\">\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\" *ngIf=\"!forgotPwd\">\r\n                            <label for=\"password\" class=\"col-md-4 control-label\">Password</label>\r\n\r\n                            <div class=\"col-md-6\">\r\n                                <input id=\"password\" type=\"password\" class=\"form-control\" name=\"password\" required [(ngModel)]=\"loginData.password\">\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\" *ngIf=\"!isLogin && !forgotPwd\">\r\n                            <label for=\"password-confirm\" class=\"col-md-4 control-label\">Confirm Password</label>\r\n\r\n                            <div class=\"col-md-6\">\r\n                                <input id=\"password-confirm\" type=\"password\" class=\"form-control\" name=\"password_confirmation\" required [(ngModel)]=\"loginData.confirmPassword\">\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <div class=\"col-md-6 col-md-offset-4\">\r\n                                <button type=\"submit\" class=\"btn btn-primary\">\r\n                                    {{loginData.head}}\r\n                                </button>\r\n                                <!--  <a class=\"btn btn-link\" routerLink=\"/forgot\" *ngIf=\"!forgotPwd && isLogin\">\r\n                                    Forgot Your Password?\r\n                                </a> -->\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./resources/assets/src/app/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_services_1 = __webpack_require__("./resources/assets/src/app/services/http.services.ts");
var ngx_cookie_1 = __webpack_require__("./node_modules/ngx-cookie/bundles/ngx-cookie.umd.js");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(cookie, router, route, http) {
        this.cookie = cookie;
        this.router = router;
        this.route = route;
        this.http = http;
        this.isLogin = false;
        this.forgotPwd = false;
        this.loginData = {
            url: '/login',
            urlHead: 'Login',
            head: 'Register',
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
        this.errMsg = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        var token = this.cookie.get('_token');
        console.log(token);
        if (token != undefined && token != '') {
            this.router.navigate(['/dashboard']);
        }
        this.route.params.subscribe(function (params) {
            if (params.id == 'register') {
                _this.isLogin = false;
                _this.forgotPwd = false;
                _this.loginData.head = 'Register';
                _this.loginData.url = '/login';
                _this.loginData.urlHead = 'Login';
            }
            else if (params.id == 'login') {
                _this.isLogin = true;
                _this.forgotPwd = false;
                _this.loginData.head = 'Login';
                _this.loginData.url = '/register';
                _this.loginData.urlHead = 'Register';
            }
            else {
                _this.forgotPwd = true;
                _this.isLogin = false;
                _this.loginData.head = 'Reset Password';
            }
        });
    };
    LoginComponent.prototype.onSendData = function () {
        var _this = this;
        var url;
        if (this.isLogin) {
            url = '/api/login';
        }
        else if (this.forgotPwd) {
        }
        else {
            url = '/api/register';
        }
        this.errMsg = '';
        console.log(this.loginData);
        this.http.postMethod(url, this.loginData).subscribe(function (data) {
            if (data.success) {
                console.log(data.data.token);
                _this.cookie.put('_token', data.data.token);
                _this.router.navigate(['/dashboard']);
            }
            else {
                var error = data.error;
                for (var val in error) {
                    _this.errMsg += error[val][0] + '<br>';
                }
            }
        }, function (error) {
            console.log(error);
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            template: __webpack_require__("./resources/assets/src/app/login/login.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/login/login.component.css")],
            providers: []
        }),
        __metadata("design:paramtypes", [ngx_cookie_1.CookieService, router_1.Router, router_1.ActivatedRoute, http_services_1.HttpService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "./resources/assets/src/app/services/http.services.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var http_2 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/**
 * handle headers for request
 * @param {'application/json' } 'Content-Type'
 */
var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
var options = new http_2.RequestOptions({ headers: headers });
var fileHeaders = new http_2.Headers({ 'Content-Type': undefined });
var fileOptions = new http_2.RequestOptions({
    headers: headers
});
var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
    }
    /**
     * HTTP Get method
     * @param {string} url used to get data
     */
    HttpService.prototype.getMethod = function (url) {
        return this.http.get(url).map(function (res) {
            //console.log(res)
            return res.json();
        });
    };
    /**
     *
     * HTTP Get Method
     * @param {string} url  used to send a data
     * @param {object} data
     */
    HttpService.prototype.postMethod = function (url, data) {
        return this.http.post(url, data).map(function (res) {
            return res.json();
        });
    };
    /**
     *
     * HTTP Get Method
     * @param {string} url  used to send a data
     * @param {object} data
     */
    HttpService.prototype.filePostMethod = function (url, data) {
        return this.http.post(url, data).map(function (res) {
            //console.log(res)
            return res.json();
        });
    };
    HttpService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;


/***/ }),

/***/ "./resources/assets/src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./resources/assets/src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./resources/assets/src/app/app.module.ts");
var environment_1 = __webpack_require__("./resources/assets/src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./resources/assets/src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map