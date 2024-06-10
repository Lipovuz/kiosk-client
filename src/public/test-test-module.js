(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["test-test-module"],{

/***/ "FScs":
/*!*************************************!*\
  !*** ./src/app/test/test.module.ts ***!
  \*************************************/
/*! exports provided: TestModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestModule", function() { return TestModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _test_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test-routing.module */ "NBQd");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/main.component */ "R1+g");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class TestModule {
}
TestModule.ɵfac = function TestModule_Factory(t) { return new (t || TestModule)(); };
TestModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: TestModule });
TestModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _test_routing_module__WEBPACK_IMPORTED_MODULE_1__["TestRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](TestModule, { declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _test_routing_module__WEBPACK_IMPORTED_MODULE_1__["TestRoutingModule"]] }); })();


/***/ }),

/***/ "NBQd":
/*!*********************************************!*\
  !*** ./src/app/test/test-routing.module.ts ***!
  \*********************************************/
/*! exports provided: TestRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestRoutingModule", function() { return TestRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/main.component */ "R1+g");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', component: _main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"] }
];
class TestRoutingModule {
}
TestRoutingModule.ɵfac = function TestRoutingModule_Factory(t) { return new (t || TestRoutingModule)(); };
TestRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: TestRoutingModule });
TestRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TestRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "R1+g":
/*!*********************************************!*\
  !*** ./src/app/test/main/main.component.ts ***!
  \*********************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var rxjs_webSocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/webSocket */ "3uOa");
/* harmony import */ var src_app_modules_outer_config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/outer-config/config */ "myVS");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function MainComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 9);
} if (rf & 2) {
    const message_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHtml", message_r1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
} }
class MainComponent {
    constructor() {
        this.subject = Object(rxjs_webSocket__WEBPACK_IMPORTED_MODULE_0__["webSocket"])(src_app_modules_outer_config_config__WEBPACK_IMPORTED_MODULE_1__["Configuration"].tradeService);
        this.fiatSubject = Object(rxjs_webSocket__WEBPACK_IMPORTED_MODULE_0__["webSocket"])(src_app_modules_outer_config_config__WEBPACK_IMPORTED_MODULE_1__["Configuration"].fiatService);
        this.isPayMesage = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].testModeOfDevice ? 'Купюроприемник' : 'Карта';
        this.messages = [];
    }
    ngOnInit() {
    }
    /* CASHMACHINE */
    /**
     * Блокировка/разблокировка приема
     *
     * @param flag
     */
    setCashmachineEnabled(flag) {
        this.sendCommand({ "object": "cashmachine", "cmd": "enable", "enable": flag });
        return false;
    }
    /*
    * Запрос инфо о купюрнике
    */
    cashmachineGetInfo() {
        this.sendCommand({ "object": "cashmachine", "cmd": "getInfo" });
        return false;
    }
    clearMessage() {
        this.messages = [];
        return false;
    }
    /* COINMACHINE */
    /**
     * Блокировка/разблокировка приема на монетнике
     *
     * @param flag
     */
    setCoinmachineEnabled(flag) {
        this.sendCommand({ "object": "coinmachine", "cmd": "enable", "enable": flag });
        return false;
    }
    /**
     * Запрос инфо о монетнике
     */
    coinmachineGetInfo() {
        this.sendCommand({ "object": "coinmachine", "cmd": "getInfo" });
        return false;
    }
    /**
    *
    * Отправка произвольной команды
    * В качестве параметра передается строка объект на отправку
    */
    sendCommand(command) {
        let observer = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].testModeOfDevice ? this.fiatSubject : this.subject;
        let sendMessage = `Send commant to socket: ${JSON.stringify(command)}`;
        console.log('Send commant to socket', command);
        observer.next(command);
        observer.subscribe(command => {
            console.log('Responce from socket', command);
            observer.complete();
            this.messages.push(`${sendMessage}<br><b>Responce from socket</b>: ${JSON.stringify(command)}<br><br>`);
        }, (error) => {
            console.log('Error from socket', error);
            this.messages.push(`${sendMessage}<br><br><b>Error from socket</b>: ${JSON.stringify(error)}<br><br>`);
            observer.complete();
        });
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 31, vars: 2, consts: [[1, "main"], [1, "main-container"], [1, "slot-cell"], [1, "search-wrap"], [1, "flex"], ["type", "button", 1, "slot-btn", "search-btn", 3, "click"], [1, "slot-btn", "search-btn", 3, "click"], ["id", "cm_log", 2, "background-color", "#DDDDDD"], ["class", "message", 3, "innerHtml", 4, "ngFor", "ngForOf"], [1, "message", 3, "innerHtml"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\u0422\u0435\u0441\u0442\u043E\u0432\u044B\u0439 \u043C\u043E\u0434\u0443\u043B\u044C \u0434\u043B\u044F \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "\u041A\u0443\u043F\u044E\u0440\u043E\u043F\u0440\u0438\u0435\u043C\u043D\u0438\u043A");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MainComponent_Template_button_click_11_listener() { return ctx.cashmachineGetInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " \u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u043A\u0443\u043F\u044E\u0440\u043D\u0438\u043A\u0435 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MainComponent_Template_button_click_13_listener() { return ctx.setCashmachineEnabled(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " \u041D\u0430\u0447\u0430\u0442\u044C \u043F\u0440\u0438\u0435\u043C \u0431\u0430\u043D\u043A\u043D\u043E\u0442 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MainComponent_Template_button_click_15_listener() { return ctx.setCashmachineEnabled(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, " \u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u043F\u0440\u0438\u0435\u043C \u0431\u0430\u043D\u043A\u043D\u043E\u0442 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "\u041C\u043E\u043D\u0435\u0442\u043E\u043F\u0440\u0438\u0435\u043C\u043D\u0438\u043A");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MainComponent_Template_button_click_20_listener() { return ctx.coinmachineGetInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " \u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u041C\u043E\u043D\u0435\u0442\u043D\u0438\u043A\u0435 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MainComponent_Template_button_click_22_listener() { return ctx.setCoinmachineEnabled(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " \u041D\u0430\u0447\u0430\u0442\u044C \u043F\u0440\u0438\u0435\u043C \u043C\u043E\u043D\u0435\u0442 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MainComponent_Template_button_click_24_listener() { return ctx.setCoinmachineEnabled(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, " \u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u043F\u0440\u0438\u0435\u043C \u043C\u043E\u043D\u0435\u0442 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MainComponent_Template_button_click_27_listener() { return ctx.clearMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, " \u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, MainComponent_div_30_Template, 1, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u0421\u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0438\u0440\u043E\u0432\u0430\u043D \u0434\u043B\u044F: ", ctx.isPayMesage, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.messages);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".slot-cell[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n\n.search-wrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 22px;\n  margin: 5px;\n  padding: 5px;\n}\n\n.message[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 25px;\n  width: 100%;\n  padding: 10px;\n}\n\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.flex-collumn[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFFSjs7QUFDQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFFSjs7QUFBQTtFQUNJLGFBQUE7QUFHSjs7QUFEQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQUlKIiwiZmlsZSI6Im1haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2xvdC1jZWxse1xuICAgIHBhZGRpbmc6IDE1cHg7XG59XG4uc2VhcmNoLXdyYXAgYnV0dG9ue1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBtYXJnaW46IDVweDtcbiAgICBwYWRkaW5nOiA1cHg7XG59XG5cbi5tZXNzYWdle1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuLmZsZXh7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi5mbGV4LWNvbGx1bW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn0iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=test-test-module.js.map