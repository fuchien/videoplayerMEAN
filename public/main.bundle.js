webpackJsonp([1,4],{

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__(524),
            styles: [__webpack_require__(517)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__video_service__ = __webpack_require__(305);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoCenterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VideoCenterComponent = (function () {
    function VideoCenterComponent(_videoService) {
        this._videoService = _videoService;
        this.hidenewVideo = true;
    }
    VideoCenterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._videoService.getVideos()
            .subscribe(function (resVideoData) { return _this.videos = resVideoData; }, function (resError) {
            console.log(resError);
            _this.mostrarMensagem({
                tipo: 'danger',
                mensagem: 'Error occurred for get videos!'
            });
        });
    };
    VideoCenterComponent.prototype.onSelectVideo = function (video) {
        this.selectedVideo = video;
        this.hidenewVideo = true;
        console.log(this.selectedVideo);
    };
    VideoCenterComponent.prototype.onSubmitAddVideo = function (video) {
        var _this = this;
        this._videoService.addVideo(video)
            .subscribe(function (resNewVideo) {
            _this.videos.push(resNewVideo);
            _this.hidenewVideo = true;
            _this.selectedVideo = resNewVideo;
            _this.mostrarMensagem({
                tipo: 'success',
                mensagem: 'Video created!!'
            });
        }, function (resError) {
            console.log(resError);
            _this.mostrarMensagem({
                tipo: 'danger',
                mensagem: 'Error occurred for create!'
            });
        });
    };
    VideoCenterComponent.prototype.newVideo = function () {
        this.hidenewVideo = false;
    };
    VideoCenterComponent.prototype.onUpdateVideoEvent = function (video) {
        var _this = this;
        this._videoService.updateVideo(video)
            .subscribe(function (resUpdatedVideo) {
            video = resUpdatedVideo;
            _this.mostrarMensagem({
                tipo: 'success',
                mensagem: 'Video updated!!'
            });
        }, function (resError) {
            console.log(resError);
            _this.mostrarMensagem({
                tipo: 'danger',
                mensagem: 'Error occurred for update!'
            });
        });
        this.selectedVideo = null;
    };
    VideoCenterComponent.prototype.onDeleteVideoEvent = function (video) {
        var _this = this;
        var videoArray = this.videos;
        this._videoService.deleteVideo(video)
            .subscribe(function (resDeletedVideo) {
            for (var i = 0; i < videoArray.length; i++) {
                if (videoArray[i]._id === video._id) {
                    videoArray.splice(i, 1);
                }
            }
            _this.mostrarMensagem({
                tipo: 'success',
                mensagem: 'Video deleted!!'
            });
        }, function (resError) {
            console.log(resError);
            _this.mostrarMensagem({
                tipo: 'danger',
                mensagem: 'Error occurred for delete!'
            });
        });
        this.selectedVideo = null;
    };
    VideoCenterComponent.prototype.mostrarMensagem = function (mensagem) {
        var _this = this;
        this.mensagem = mensagem;
        this.montarClasses(mensagem.tipo);
        if (mensagem.tipo != 'danger') {
            if (this.currentTimeout) {
                clearTimeout(this.currentTimeout);
            }
            this.currentTimeout = setTimeout(function () {
                _this.mensagem = undefined;
            }, 3000);
        }
    };
    VideoCenterComponent.prototype.montarClasses = function (tipo) {
        this.classesCss = {
            'alert': true
        };
        this.classesCss['alert-' + tipo] = true;
    };
    VideoCenterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-video-center',
            template: __webpack_require__(525),
            styles: [__webpack_require__(518)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__video_service__["a" /* VideoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__video_service__["a" /* VideoService */]) === 'function' && _a) || Object])
    ], VideoCenterComponent);
    return VideoCenterComponent;
    var _a;
}());
//# sourceMappingURL=video-center.component.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VideoService = (function () {
    function VideoService(_http) {
        this._http = _http;
        this._getUrl = '/api/videos';
        this._postUrl = '/api/video';
        this._putUrl = '/api/video/';
        this._deleteUrl = '/api/video/';
    }
    VideoService.prototype.getVideos = function () {
        return this._http.get(this._getUrl)
            .map(function (res) { return res.json(); })
            .catch(this._errorHandler);
    };
    VideoService.prototype.addVideo = function (video) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Headers */]({ "Content-Type": "application/json" });
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var body = JSON.stringify(video);
        return this._http.post(this._postUrl, body, options)
            .map(function (res) { return res.json(); })
            .catch(this._errorHandler);
    };
    VideoService.prototype.updateVideo = function (video) {
        var putUrl = this._putUrl + video._id;
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Headers */]({ "Content-Type": "application/json" });
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var body = JSON.stringify(video);
        return this._http.put(putUrl, body, options)
            .map(function (res) { return res.json(); })
            .catch(this._errorHandler);
    };
    VideoService.prototype.deleteVideo = function (video) {
        var deleteUrl = this._deleteUrl + video._id;
        return this._http.delete(deleteUrl)
            .map(function (res) { return res.json(); })
            .catch(this._errorHandler);
    };
    VideoService.prototype._errorHandler = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
    };
    VideoService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], VideoService);
    return VideoService;
    var _a;
}());
//# sourceMappingURL=video.service.js.map

/***/ }),

/***/ 335:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 335;


/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(461);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__video_center_video_center_component__ = __webpack_require__(304);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }, {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
    }, {
        path: 'videos',
        component: __WEBPACK_IMPORTED_MODULE_3__video_center_video_center_component__["a" /* VideoCenterComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(523),
            styles: [__webpack_require__(516)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__video_center_video_center_component__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__video_detail_video_detail_component__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__video_list_video_list_component__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__video_service__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__safe_pipe__ = __webpack_require__(458);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__video_center_video_center_component__["a" /* VideoCenterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__video_detail_video_detail_component__["a" /* VideoDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_9__video_list_video_list_component__["a" /* VideoListComponent */],
                __WEBPACK_IMPORTED_MODULE_11__safe_pipe__["a" /* SafePipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__video_service__["a" /* VideoService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(82);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Pipe */])({
            name: 'safe'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === 'function' && _a) || Object])
    ], SafePipe);
    return SafePipe;
    var _a;
}());
//# sourceMappingURL=safe.pipe.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VideoDetailComponent = (function () {
    function VideoDetailComponent() {
        this.updateVideoEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
        this.deleteVideoEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
        this.editTitle = false;
    }
    VideoDetailComponent.prototype.ngOnInit = function () {
    };
    VideoDetailComponent.prototype.ngOnChanges = function () {
        this.editTitle = false;
    };
    VideoDetailComponent.prototype.onTitleClick = function () {
        this.editTitle = true;
    };
    VideoDetailComponent.prototype.updateVideo = function () {
        this.updateVideoEvent.emit(this.video);
    };
    VideoDetailComponent.prototype.deleteVideo = function () {
        this.deleteVideoEvent.emit(this.video);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], VideoDetailComponent.prototype, "video", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(), 
        __metadata('design:type', Object)
    ], VideoDetailComponent.prototype, "updateVideoEvent", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(), 
        __metadata('design:type', Object)
    ], VideoDetailComponent.prototype, "deleteVideoEvent", void 0);
    VideoDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'video-detail',
            template: __webpack_require__(526),
            styles: [__webpack_require__(519)]
        }), 
        __metadata('design:paramtypes', [])
    ], VideoDetailComponent);
    return VideoDetailComponent;
}());
//# sourceMappingURL=video-detail.component.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VideoListComponent = (function () {
    function VideoListComponent() {
        this.SelectVideo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
    }
    VideoListComponent.prototype.ngOnInit = function () {
    };
    VideoListComponent.prototype.onSelect = function (vid) {
        this.SelectVideo.emit(vid);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], VideoListComponent.prototype, "videos", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(), 
        __metadata('design:type', Object)
    ], VideoListComponent.prototype, "SelectVideo", void 0);
    VideoListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'video-list',
            template: __webpack_require__(527),
            styles: [__webpack_require__(520)]
        }), 
        __metadata('design:paramtypes', [])
    ], VideoListComponent);
    return VideoListComponent;
}());
//# sourceMappingURL=video-list.component.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(42)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 517:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(42)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 518:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(42)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(42)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(42)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 523:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a href=\"#\" class=\"navbar-brand\">VideoPlayer</a>\n    </div>\n    <ul class=\"nav navbar-nav\">\n      <li><a routerLink=\"/home\" routerLinkActive=\"active\">Home</a></li>\n      <li><a routerLink=\"/videos\" routerLinkActive=\"active\">Playlist</a></li>\n    </ul>\n  </div>\n</nav>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 524:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h1>Video Player</h1>\n</div>"

/***/ }),

/***/ 525:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-9\">\n    <div [ngClass]=\"classesCss\" role=\"alert\" *ngIf=\"mensagem\">\n        <span [ngSwitch]=\"mensagem.tipo\">\n            <strong *ngSwitchCase=\"'danger'\">Error!</strong>\n            <strong *ngSwitchCase=\"'warning'\">Alert!</strong>\n            <strong *ngSwitchCase=\"'success'\">Success!</strong>\n            <strong *ngSwitchDefault>Information!</strong>\n        </span>\n        {{ mensagem.mensagem }}\n    </div>\n    <div *ngIf=\"!hidenewVideo\">\n      <h2>New Video</h2>\n      <form #form=\"ngForm\" (ngSubmit)=\"onSubmitAddVideo(form.value)\" class=\"well\">\n        <div class=\"form-group\">\n          <label for=\"title\">Title</label>\n          <input type=\"text\" name=\"title\" class=\"form-control\"\n            required ngModel>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"url\">Url</label>\n          <input type=\"text\" name=\"url\" class=\"form-control\"\n            required ngModel>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"description\">Description</label>\n          <input type=\"text\" name=\"description\" class=\"form-control\"\n            ngModel>\n        </div>\n        <button class=\"btn btn-success\" type=\"submit\">Save</button>\n      </form>\n    </div>\n    <video-detail (updateVideoEvent)=\"onUpdateVideoEvent($event)\"\n                  (deleteVideoEvent)=\"onDeleteVideoEvent($event)\"\n      *ngIf=\"selectedVideo && hidenewVideo\"\n      [video]=\"selectedVideo\"></video-detail>\n  </div>\n  <div class=\"col-sm-3\">\n    <button (click)=\"newVideo()\" class=\"btn btn-success btn-block\" style=\"margin-bottom:2px;\" type=\"button\">+ New Video</button>\n    <video-list (SelectVideo)=\"onSelectVideo($event)\" [videos]=\"videos\"></video-list>\n  </div>\n</div>"

/***/ }),

/***/ 526:
/***/ (function(module, exports) {

module.exports = "<div>\n  <div>\n    <iframe width=\"100%\" height=\"300\" [src]=\"video.url | safe\">\n\n    </iframe>\n  </div>\n  <form>\n    <div *ngIf=\"editTitle\" class=\"form-group\">\n      <input type=\"input\" name=\"title\" class=\"form-control\"\n        [(ngModel)]=\"video.title\"\n        required placeholder=\"title\">\n    </div>\n    <h3 *ngIf=\"!editTitle\" (click)=\"onTitleClick()\">{{ video.title }}</h3>\n    <div class=\"form-group\">\n      <input type=\"input\" name=\"url\" class=\"form-control\"\n        [(ngModel)]=\"video.url\"\n        required placeholder=\"url\">\n    </div>\n    <div class=\"form-group\">\n      <textarea rows=\"5\" class=\"form-control\"\n        name=\"desc\" [(ngModel)]=\"video.description\"></textarea>\n    </div>\n    <button type=\"button\" (click)=\"updateVideo()\" class=\"btn btn-primary\">Update</button>\n    <button type=\"button\" (click)=\"deleteVideo()\" class=\"btn btn-danger\">Delete</button>\n  </form>\n</div>"

/***/ }),

/***/ 527:
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-pills nav-stacked\">\n  <li (click)=\"onSelect(video)\" *ngFor=\"let video of videos\"><a>{{ video.title }}</a></li>\n</ul>"

/***/ }),

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(336);


/***/ })

},[552]);
//# sourceMappingURL=main.bundle.js.map