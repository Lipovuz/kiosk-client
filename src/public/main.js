(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+DAo":
/*!*******************************************!*\
  !*** ./src/app/core/handlers/activity.ts ***!
  \*******************************************/
/*! exports provided: ActivityMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityMode", function() { return ActivityMode; });
/* harmony import */ var src_app_modules_outer_config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/modules/outer-config/config */ "myVS");

class ActivityMode {
}
ActivityMode.routePath = '';
ActivityMode.statusTimer = false;
ActivityMode.setRoute = (route) => ActivityMode.route = route;
ActivityMode.setRoutePath = (routePath) => ActivityMode.routePath = routePath || '';
ActivityMode.startTimer = (timer) => {
    ActivityMode.timer = timer || src_app_modules_outer_config_config__WEBPACK_IMPORTED_MODULE_0__["Configuration"].activityTimer * 1000;
    //console.log('startTimer with time:', ActivityMode.timer);
    ActivityMode.runned = ActivityMode.runned || [];
    let time = setTimeout(() => {
        ActivityMode.runned.pop();
        //console.log('All runned timer', ActivityMode.runned);
        if (ActivityMode.runned.length) {
            return;
        }
        ActivityMode.route.navigate([ActivityMode.routePath]);
        ActivityMode.routePath = '';
    }, ActivityMode.timer);
    ActivityMode.runned.push(time);
};
ActivityMode.stopTimer = () => {
    //console.log('stopTimer');
    if (ActivityMode.runned) {
        ActivityMode.runned.pop();
    }
    clearTimeout(ActivityMode.timeOut);
};
/* Перезагрузити таймер якщо він запущений */
ActivityMode.resetTimer = () => {
    //console.log('resetTimer');
    ActivityMode.startTimer();
};


/***/ }),

/***/ "+JQM":
/*!*********************************************************************!*\
  !*** ./src/app/components/receipt-popup/receipt-popup.component.ts ***!
  \*********************************************************************/
/*! exports provided: ReceiptPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiptPopupComponent", function() { return ReceiptPopupComponent; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core */ "ey9i");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/navigation.service */ "LFK6");
/* harmony import */ var src_app_shared_services_broker_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/broker.service */ "VsY3");
/* harmony import */ var src_app_shared_services_date_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/date.service */ "BIm4");
/* harmony import */ var src_app_shared_services_mocks_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/mocks.service */ "kj9m");
/* harmony import */ var src_app_shared_services_client_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/client.service */ "oR8h");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");











const _c0 = ["serviceCheckIsNotWork"];
const _c1 = ["modalData"];
function ReceiptPopupComponent_ng_template_8_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u042D\u043B. \u0430\u0434\u0440. \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r5.email);
} }
function ReceiptPopupComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u041A\u0430\u0441\u0441\u043E\u0432\u044B\u0439 \u0447\u0435\u043A / \u041F\u0440\u0438\u0445\u043E\u0434");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u0424\u0438\u0441\u043A\u0430\u043B\u044C\u043D\u044B\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "\u0414\u0430\u0442\u0430 \u0432\u044B\u0434\u0430\u0447\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "\u0410\u0434\u0440\u0435\u0441 \u0440\u0430\u0441\u0447\u0435\u0442\u043E\u0432");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "\u041C\u0435\u0441\u0442\u043E \u0440\u0430\u0441\u0447\u0435\u0442\u043E\u0432");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, ReceiptPopupComponent_ng_template_8_div_26_Template, 5, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "\u0410\u0434\u0440\u0435\u0441 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u0435\u043B\u044F \u0447\u0435\u043A\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "\u0420\u0435\u043A\u0432\u0438\u0437\u0438\u0442\u044B \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "\u0418\u041D\u041D \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "\u041E\u0424\u0414");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "\u0410\u0434\u0440\u0435\u0441 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u0447\u0435\u043A\u0430 \u0432 \u041E\u0424\u0414");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "check.ofd.ru");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "\u041F\u0440\u0438\u0437\u043D\u0430\u043A \u0441\u043F\u043E\u0441\u043E\u0431\u0430 \u0440\u0430\u0441\u0447\u0435\u0442\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "\u041F\u043E\u043B\u043D\u044B\u0439 \u0440\u0430\u0441\u0447\u0435\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "\u041F\u0440\u0438\u0437\u043D\u0430\u043A \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u0430 \u0440\u0430\u0441\u0447\u0435\u0442\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "\u0422\u043E\u0432\u0430\u0440");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "\u041D\u0414\u0421");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0444\u043E\u0442\u043E \u0432 \u0437\u0430\u043A\u0430\u0437\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "\u0418\u0422\u041E\u0413");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "\u0411\u0435\u0437\u043D\u0430\u043B\u0438\u0447\u043D\u044B\u043C\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "\u0412 \u0442.\u0447. \u043D\u0430\u043B\u043E\u0433\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "\u041D\u0414\u0421 \u043D\u0435 \u043E\u0431\u043B\u0430\u0433\u0430\u0435\u0442\u0441\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, "\u0421\u0438\u0441\u0442\u0435\u043C\u0430 \u043D\u0430\u043B\u043E\u0433\u043E\u043E\u0431\u043B\u0430\u0436\u0435\u043D\u0438\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, "\u0423\u0421\u041D \u0434\u043E\u0445\u043E\u0434");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](97, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReceiptPopupComponent_ng_template_8_Template_button_click_98_listener() { const modal_r4 = ctx.$implicit; return modal_r4.close("Save click"); })("click", function ReceiptPopupComponent_ng_template_8_Template_button_click_98_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.goNext(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99, "\u041E\u041A");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.fullNameOFD);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("#", ctx_r1.fiscalNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.currentDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.adress);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.place);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.emailSender);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.companyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.companyINN);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.numberOFD);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.NDS);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.photoCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.sumPay.toFixed(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.sumPay.toFixed(2));
} }
function ReceiptPopupComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0421\u0435\u0440\u0432\u0438\u0441 \u0447\u0435\u043A\u043E\u0432 \u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E \u043D\u0435 \u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u041F\u0440\u0438\u043D\u043E\u0441\u0438\u043C \u0438\u0437\u0432\u0438\u043D\u0435\u043D\u0438\u044F \u0437\u0430 \u043D\u0435\u0443\u0434\u043E\u0431\u0441\u0442\u0432\u043E!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReceiptPopupComponent_ng_template_10_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); ctx_r9.modalService.dismissAll(); return ctx_r9.goHome(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u041E\u041A");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class ReceiptPopupComponent {
    constructor(modalService, router, navigateService, brokerService, dateService, mocksService, clientService) {
        this.modalService = modalService;
        this.router = router;
        this.navigateService = navigateService;
        this.brokerService = brokerService;
        this.dateService = dateService;
        this.mocksService = mocksService;
        this.clientService = clientService;
        this.NDS = 0;
    }
    triggerModal(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((res) => {
            this.closeModal = `Closed with: ${res}`;
        }, (res) => {
            this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
        });
    }
    triggerServiceCheckIsNotWorkModal() {
        this.modalService.open(this.serviceCheckIsNotWork, { ariaLabelledBy: 'modal-basic-title' });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    //@ViewChild('cassaIsNotWork') cassaIsNotWork;  
    openModal() {
        // this.mocksService.getMockCheckJSON().subscribe(
        //     response=>{console.log(response)
        //     this.fullNameOFD = response.registrationInfo.ofdName 
        //     this.fiscalNumber = response.registrationInfo.fiscalDocNumber
        //     this.adress = response.registrationInfo.address
        //     this.place = response.registrationInfo.place
        //     this.emailSender = "hardcode@.com"
        //     this.NDS = response.registrationInfo.taxSystemName
        //     this.photoCount  = this.clientService.photoCountInOrder
        //     this.companyName = response.registrationInfo.companyName
        //     this.companyINN = response.registrationInfo.companyINN
        //     this.numberOFD = response.registrationInfo.ofdINN
        //     if(this.clientService.email != " "){
        //       this.email = this.clientService.email
        //       console.log(this.email)
        //     }
        //   });
        if (!this.dateService.isPrintCheck) {
            this.triggerServiceCheckIsNotWorkModal();
            setTimeout(() => {
                this.goNext();
            }, 4000);
            this.dateService.isPrintCheck = true;
            return;
        }
        if (!this.clientService.ordID) {
            this.router.navigate(['error']);
            return;
        }
        this.clientService.getCheck(this.clientService.ordID)
            /*.pipe(
              catchError((error)=> {
                return of(null);
              })
            )*/
            .subscribe((response) => {
            if (!response) {
                return;
            }
            if (!response.registrationInfo) {
                return;
            }
            //this.modalService.open(this.content, { centered: true });
            //this.modalService.open(this.cassaIsNotWork, { centered: true });
            setTimeout(() => this.modalService.dismissAll(), 10000);
            this.fullNameOFD = response.registrationInfo.ofdName;
            this.fiscalNumber = response.registrationInfo.fiscalDocNumber;
            this.adress = response.registrationInfo.address;
            this.place = response.registrationInfo.place;
            this.emailSender = "hardcode@.com";
            this.NDS = response.registrationInfo.taxSystemName;
            this.photoCount = this.clientService.photoCountInOrder;
            this.companyName = response.registrationInfo.companyName;
            this.companyINN = response.registrationInfo.companyINN;
            this.numberOFD = response.registrationInfo.ofdINN;
            if (this.clientService.email != " ") {
                this.email = this.clientService.email;
            }
        });
    }
    ngOnInit() {
        src_app_core__WEBPACK_IMPORTED_MODULE_1__["ActivityMode"].startTimer();
        this.navigateService.clearURL();
    }
    ngAfterViewInit() {
        this.currentDate = this.dateService.getDate();
        this.sumPay = this.brokerService.sumForPay;
        this.openModal();
    }
    goBack() {
        this.router.navigate(['cart']);
    }
    goHome() {
        this.router.navigate(['']);
    }
    goNext() {
        this.router.navigate(['print-done']);
    }
}
ReceiptPopupComponent.ɵfac = function ReceiptPopupComponent_Factory(t) { return new (t || ReceiptPopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_4__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_broker_service__WEBPACK_IMPORTED_MODULE_5__["BrokerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_date_service__WEBPACK_IMPORTED_MODULE_6__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_mocks_service__WEBPACK_IMPORTED_MODULE_7__["MocksService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_client_service__WEBPACK_IMPORTED_MODULE_8__["ClientService"])); };
ReceiptPopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ReceiptPopupComponent, selectors: [["app-receipt-popup"]], viewQuery: function ReceiptPopupComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.serviceCheckIsNotWork = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    } }, decls: 12, vars: 0, consts: [[1, "receipt", 2, "height", "1180px"], [1, "header"], [1, "icon-wrap", 3, "click"], [1, "icon", "icon-back"], [1, "icon", "icon-home"], [1, "next-btn", 3, "click"], ["modalData", ""], ["serviceCheckIsNotWork", ""], [1, "receipt-title"], [1, "receipt-main"], [1, "receipt-main__title"], [1, "receipt-main__grid"], [1, "receipt-main__grid-content"], [1, "receipt-main__grid-part"], ["class", "receipt-main__grid-content", 4, "ngIf"], [1, "receipt-main__grid-1"], [1, "receipt-main__grid-content", "receipt-main__grid-title"], [1, "receipt-main__grid-content", "receipt-main__grid-content-1"], [1, "receipt-main__grid-part-1"], [1, "receipt-qr"], ["src", "././assets/static/img/qrcode.png", "alt", ""], ["type", "button", 1, "receipt-btn", 3, "click"], [1, "error-title", "text-center", "fs36"], [1, "error-description"], ["type", "button", 1, "error-btn", 3, "click"]], template: function ReceiptPopupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReceiptPopupComponent_Template_div_click_2_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReceiptPopupComponent_Template_div_click_4_listener() { return ctx.goHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReceiptPopupComponent_Template_button_click_6_listener() { return ctx.goNext(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\u0414\u0430\u043B\u0435\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ReceiptPopupComponent_ng_template_8_Template, 100, 14, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ReceiptPopupComponent_ng_template_10_Template, 6, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]], styles: [".receipt[_ngcontent-%COMP%] {\n  padding-top: 32px;\n  padding-left: 64px;\n  background: rgba(255, 255, 255, 0.7);\n  -webkit-backdrop-filter: blur(94px);\n          backdrop-filter: blur(94px);\n  border-radius: 60px;\n}\n.receipt-main[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.receipt-main__title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.receipt-main__grid[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\n.receipt-main__grid-title[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-weight: bold;\n  font-size: 38px;\n  line-height: 40px;\n}\n.receipt-main__grid-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.receipt-main__grid-content-1[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n.receipt-main__grid-part[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.receipt-main__grid-part[_ngcontent-%COMP%]:nth-child(2n) {\n  text-align: right;\n}\n.receipt-main__grid-part-1[_ngcontent-%COMP%] {\n  padding-left: 8px;\n}\n.receipt-qr[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.receipt-title[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  font-weight: 600;\n  font-size: 38px;\n  line-height: 40px;\n  text-align: center;\n}\n.receipt-description[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 26px;\n  text-align: center;\n}\n.receipt-btn[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  box-shadow: 0px 20px 40px rgba(3, 74, 104, 0.2);\n  border-radius: 44px;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 38px;\n  text-decoration: none;\n  color: black;\n  padding: 16px 64px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  width: 100%;\n}\n.icon-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  width: 64px;\n  height: 64px;\n  background: #ffffff;\n  box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.2);\n  border-radius: 100px;\n  align-items: center;\n  justify-content: center;\n}\n.icon-wrap[_ngcontent-%COMP%]:first-child {\n  margin-right: 12px;\n}\n.next-btn[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.2);\n  border-radius: 100px;\n  width: 144px;\n  height: 64px;\n  font-weight: 600;\n  line-height: 30px;\n  border: none;\n  font-size: 28px;\n  color: #000000;\n  margin-left: 62%;\n}\n.btn[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  box-shadow: 0px 20px 40px rgba(3, 74, 104, 0.2);\n  border-radius: 44px;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 38px;\n  text-decoration: none;\n  color: black;\n  padding: 16px 64px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  margin: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JlY2VpcHQtcG9wdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUVRO0VBQ0kscUJBQUE7QUFBWjtBQUVRO0VBQ0ksa0JBQUE7QUFBWjtBQUdRO0VBQ0ksMkNBQUE7QUFEWjtBQU9ZO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBTGhCO0FBUVk7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUFOaEI7QUFPZ0I7RUFDSSxzQkFBQTtBQUxwQjtBQVNZO0VBQ0ksVUFBQTtBQVBoQjtBQVFnQjtFQUNJLGlCQUFBO0FBTnBCO0FBU2dCO0VBQ0ksaUJBQUE7QUFQcEI7QUFhSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQVhSO0FBY0k7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFaUjtBQWVJO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQWJSO0FBZ0JJO0VBQ0ksbUJBQUE7RUFDQSwrQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQWRSO0FBa0JBO0VBQ0ksYUFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQWZKO0FBa0JBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQWZKO0FBa0JBO0VBQ0ksa0JBQUE7QUFmSjtBQWtCQTtFQUNJLG1CQUFBO0VBQ0EsNENBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBZko7QUFrQkU7RUFDRSxtQkFBQTtFQUNBLCtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQWZKIiwiZmlsZSI6InJlY2VpcHQtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVjZWlwdCB7XG4gICAgcGFkZGluZy10b3A6IDMycHg7XG4gICAgcGFkZGluZy1sZWZ0OiA2NHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOTRweCk7XG4gICAgYm9yZGVyLXJhZGl1czogNjBweDtcblxuICAgICYtbWFpbiB7XG4gICAgICAgIHAge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgICAgICB9XG4gICAgICAgICZfX3RpdGxlIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgICZfX2dyaWQge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcblxuICAgICAgICAgICAgJi0xIHtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLXRpdGxle1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDM4cHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYtY29udGVudCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgJi0xIHtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYtcGFydCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgICAmOm50aC1jaGlsZCgybikge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmLTEge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLXFyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG4gICAgJi10aXRsZSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAmLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAmLWJ0biB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAyMHB4IDQwcHggcmdiYSgzLCA3NCwgMTA0LCAwLjIpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0NHB4OyAgICBcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDM4cHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICBwYWRkaW5nOiAxNnB4IDY0cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgfVxufVxuXG4uaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmljb24td3JhcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogNjRweDtcbiAgICBoZWlnaHQ6IDY0cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBib3gtc2hhZG93OiAwcHggMTJweCAyMHB4IHJnYigwIDAgMCAvIDIwJSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmljb24td3JhcDpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuXG4ubmV4dC1idG57XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBib3gtc2hhZG93OiAwcHggMTJweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICB3aWR0aDogMTQ0cHg7XG4gICAgaGVpZ2h0OiA2NHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBtYXJnaW4tbGVmdDogNjIlO1xuICB9XG5cbiAgLmJ0biB7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBib3gtc2hhZG93OiAwcHggMjBweCA0MHB4IHJnYmEoMywgNzQsIDEwNCwgMC4yKTtcbiAgICBib3JkZXItcmFkaXVzOiA0NHB4OyAgICBcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDM4cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBwYWRkaW5nOiAxNnB4IDY0cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW46IDE2cHg7XG4gIH0iXX0= */"] });


/***/ }),

/***/ "+RjQ":
/*!******************************************************************!*\
  !*** ./src/app/components/v1/list-photo/list-photo.component.ts ***!
  \******************************************************************/
/*! exports provided: ListPhotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPhotoComponent", function() { return ListPhotoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function ListPhotoComponent_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 3);
} if (rf & 2) {
    const image_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", image_r4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ListPhotoComponent_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 3);
} if (rf & 2) {
    const image_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", image_r5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ListPhotoComponent_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 3);
} if (rf & 2) {
    const image_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", image_r6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ListPhotoComponent_img_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 3);
} if (rf & 2) {
    const image_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", image_r7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class ListPhotoComponent {
    constructor() {
        this.columnList1 = [
            'assets/img/background/1.jpg',
            'assets/img/background/2.jpg',
            'assets/img/background/3.jpg',
            'assets/img/background/3.jpg',
            'assets/img/background/2.jpg',
            'assets/img/background/2.jpg',
            'assets/img/background/3.jpg',
            'assets/img/background/2.jpg',
            'assets/img/background/3.jpg',
            'assets/img/background/2.jpg',
            'assets/img/background/3.jpg',
            'assets/img/background/2.jpg',
            'assets/img/background/3.jpg'
        ];
        this.columnList2 = [
            'assets/img/background/3.jpg',
            'assets/img/background/2.jpg',
            'assets/img/background/1.jpg',
            'assets/img/background/3.jpg',
            'assets/img/background/2.jpg',
            'assets/img/background/1.jpg',
            'assets/img/background/3.jpg',
            'assets/img/background/2.jpg',
            'assets/img/background/1.jpg',
            'assets/img/background/2.jpg',
            'assets/img/background/3.jpg',
            'assets/img/background/2.jpg',
            'assets/img/background/3.jpg'
        ];
    }
    ngOnInit() {
    }
}
ListPhotoComponent.ɵfac = function ListPhotoComponent_Factory(t) { return new (t || ListPhotoComponent)(); };
ListPhotoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListPhotoComponent, selectors: [["app-list-photo"]], decls: 9, vars: 4, consts: [[1, "list-photo"], [1, "column"], ["class", "list-photo__image", 3, "src", 4, "ngFor", "ngForOf"], [1, "list-photo__image", 3, "src"]], template: function ListPhotoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListPhotoComponent_img_2_Template, 1, 1, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ListPhotoComponent_img_4_Template, 1, 1, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ListPhotoComponent_img_6_Template, 1, 1, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ListPhotoComponent_img_8_Template, 1, 1, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.columnList1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.columnList2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.columnList1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.columnList2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".list-photo[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  pointer-events: none;\n}\n.list-photo[_ngcontent-%COMP%]:before {\n  position: absolute;\n  display: block;\n  content: \"\";\n  \n  background: rgba(0, 0, 0, 0.1);\n  -webkit-backdrop-filter: blur(20px);\n          backdrop-filter: blur(20px);\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n.list-photo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid #000;\n  width: 25%;\n  height: 100vh;\n  flex-direction: column;\n  padding: 0 5px;\n}\n.list-photo__image[_ngcontent-%COMP%] {\n  padding: 5px 0;\n  border-radius: 10px;\n  width: 100%;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpc3QtcGhvdG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7QUFDSjtBQUFJO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBOytCQUFBO0VBRUEsOEJBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUVSO0FBQUk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQUVSO0FBQ0k7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNSIiwiZmlsZSI6Imxpc3QtcGhvdG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdC1waG90b3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgICAgXG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICY6YmVmb3Jle1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgLypiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig5NHB4KTsqL1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgICBkaXYge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBwYWRkaW5nOiAwIDVweDtcbiAgICB9XG5cbiAgICAmX19pbWFnZXtcbiAgICAgICAgcGFkZGluZzogNXB4IDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ "/Htz":
/*!**********************************************************************!*\
  !*** ./src/app/modules/download-module/download/download.service.ts ***!
  \**********************************************************************/
/*! exports provided: DownloadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadService", function() { return DownloadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class DownloadService {
    constructor() { }
}
DownloadService.ɵfac = function DownloadService_Factory(t) { return new (t || DownloadService)(); };
DownloadService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DownloadService, factory: DownloadService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/lomobilePlatform/front/src/main.ts */"zUnb");


/***/ }),

/***/ "0sSX":
/*!****************************************************!*\
  !*** ./src/app/interceptors/expiry.interceptor.ts ***!
  \****************************************************/
/*! exports provided: ExpiryInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpiryInterceptor", function() { return ExpiryInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _modules_outer_config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/outer-config/config */ "myVS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class ExpiryInterceptor {
    constructor() { }
    intercept(request, next) {
        if (request.url.includes((`${_modules_outer_config_config__WEBPACK_IMPORTED_MODULE_2__["Configuration"].host}api/client`))) {
            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((event) => {
                if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]) {
                    event = event.clone({ body: this.modifyBody(event.body) });
                }
                return event;
            }));
        }
        else
            return next.handle(request);
    }
    modifyBody(body) {
        // if(body.setting?.time_to_advertise){
        //     let time = body.setting.time_to_advertise + "000";
        //     Configuration.session.expiryDate = time;
        //     console.log("adv " + time)
        // }
    }
}
ExpiryInterceptor.ɵfac = function ExpiryInterceptor_Factory(t) { return new (t || ExpiryInterceptor)(); };
ExpiryInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ExpiryInterceptor, factory: ExpiryInterceptor.ɵfac });


/***/ }),

/***/ "2uRY":
/*!*******************************************************!*\
  !*** ./src/app/components/selfie/selfie.component.ts ***!
  \*******************************************************/
/*! exports provided: fadeInOut, SelfieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInOut", function() { return fadeInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelfieComponent", function() { return SelfieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var src_app_modules_outer_config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/outer-config/config */ "myVS");
/* harmony import */ var src_app_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core */ "ey9i");
/* harmony import */ var src_app_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/navigation.service */ "LFK6");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_services_client_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/client.service */ "oR8h");
/* harmony import */ var src_app_shared_services_camera_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/camera.service */ "p341");
/* harmony import */ var src_app_shared_services_session_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/session.service */ "mZtN");
/* harmony import */ var src_app_shared_services_broker_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/broker.service */ "VsY3");
/* harmony import */ var src_app_shared_services_photo_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/photo.service */ "ny42");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _photos_camera_camera_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../photos/camera/camera.component */ "Vu4P");
/* harmony import */ var _pre_load_pre_load_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../pre-load/pre-load.component */ "ycqb");

















function SelfieComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u0421\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u0432 \u043A\u0430\u043C\u0435\u0440\u0443! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("readiness", ctx_r3.timeLeft < 3)("timeout", ctx_r3.timeLeft <= 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.timeLeft);
} }
function SelfieComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-camera", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pictureTaken", function SelfieComponent_div_0_Template_app_camera_pictureTaken_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.handleImage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SelfieComponent_div_0_div_2_Template, 6, 5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isMask", true)("takePhoto", ctx_r0.takePhoto);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.timeLeft);
} }
function SelfieComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-pre-load");
} }
const fadeInOut = (name = 'fadeInOut', duration = 0.1) => Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])(name, [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])(`${duration}s ease-in-out`)
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])(`${duration}s ease-in-out`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0 }))])
]);
class SelfieComponent {
    constructor(navigate, router, clientService, cameraService, renderer2, sessionService, brokerService, photoService) {
        this.navigate = navigate;
        this.router = router;
        this.clientService = clientService;
        this.cameraService = cameraService;
        this.renderer2 = renderer2;
        this.sessionService = sessionService;
        this.brokerService = brokerService;
        this.photoService = photoService;
        this.photoForSearch = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selfie = [];
        this.webcamImage = null;
        this.takePhoto = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isStopTimer$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.isStopCameraTimer$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.timeLeft = src_app_modules_outer_config_config__WEBPACK_IMPORTED_MODULE_4__["Configuration"].pauseCamera;
    }
    handleImage(webcamImage) {
        this.webcamImage = webcamImage;
    }
    ngOnInit() {
        src_app_core__WEBPACK_IMPORTED_MODULE_5__["ActivityMode"].startTimer();
        this.webcamImage = null;
        this.navigate.clearURL();
        this.clientService.getClient().subscribe((item) => {
            this.cameraService.setRotateCamera(item.devices.webCamera.rotate);
            this.brokerService.priceForPaper = (item.products[0].costPenny / 100);
            this.brokerService.priceForEmail = (item.products[1].costPenny / 100);
        });
        this.clientService.standBy().subscribe((item) => {
            this.cameraService.setRotateCamera(item.body.devices.webCamera.rotate);
        });
        this.photoService.selfiBase64 = [];
        this.photoService.selfieMas = [];
        this.preparationForPhoto();
    }
    getPhotoForSearch(event) {
        this.photoForSearch = event;
    }
    fullScreenMode(status) {
        const element = document.getElementsByTagName('body')[0];
        if (status) {
            this.renderer2.addClass(element, 'overflow-hidden');
            return;
        }
        this.renderer2.removeClass(element, 'overflow-hidden');
    }
    runFlashMoment() {
        var _a;
        this.timeFlash--;
        this.renderer2.addClass(this.flashElement, 'flash');
        this.flash = !this.flash;
        this.takePhoto.emit(true);
        this.photoForSearch.emit({
            sampleImage: (_a = this.webcamImage) === null || _a === void 0 ? void 0 : _a.imageAsDataUrl
        });
        this.photoService.selfiBase64.push(this.webcamImage.imageAsDataUrl);
        let img = this.webcamImage.imageAsDataUrl.replace('data:image/jpeg;base64,', '');
        this.photoService.selfieMas.push(img);
        this.blur = true;
        setTimeout(() => this.renderer2.removeClass(this.flashElement, 'flash'), 100);
        if (!this.timeFlash) {
            this.isStopCameraTimer$.next(true);
            this.flash = false;
            this.fullScreenMode(false);
            this.router.navigate(['gallery']);
        }
    }
    startMakePhotoCamera() {
        this.timeFlash = this.cameraService.timeFlash;
        this.flashElement = document.querySelector('.flash-container');
        this.runFlashMoment();
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(1000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.isStopCameraTimer$))
            .subscribe(this.runFlashMoment.bind(this));
    }
    preparationForPhoto() {
        this.fullScreenMode(true);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(1000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.isStopTimer$))
            .subscribe(() => {
            this.timeLeft--;
            if (this.timeLeft == 0) {
                this.isStopTimer$.next(true);
                this.startMakePhotoCamera();
                return;
            }
        });
    }
    navigateTo(rout) {
        this.blur = true;
        this.takePhoto.emit(true);
        this.preparationForPhoto();
    }
}
SelfieComponent.ɵfac = function SelfieComponent_Factory(t) { return new (t || SelfieComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_client_service__WEBPACK_IMPORTED_MODULE_8__["ClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_camera_service__WEBPACK_IMPORTED_MODULE_9__["CameraService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_session_service__WEBPACK_IMPORTED_MODULE_10__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_broker_service__WEBPACK_IMPORTED_MODULE_11__["BrokerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_photo_service__WEBPACK_IMPORTED_MODULE_12__["PhotoService"])); };
SelfieComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelfieComponent, selectors: [["app-selfie"]], outputs: { photoForSearch: "photoForSearch" }, decls: 5, vars: 2, consts: [["class", "camera_wrapper", 4, "ngIf", "ngIfElse"], [1, "flash-container"], [1, "icon", "icon-flash"], ["preloader", ""], [1, "camera_wrapper"], [1, "camera", 3, "isMask", "takePhoto", "pictureTaken"], ["class", "time-left", 3, "readiness", "timeout", 4, "ngIf"], [1, "time-left"], [1, "number"], [1, "message", "w-100"], [1, "icon", "icon-arrow-left", "mr-40"]], template: function SelfieComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SelfieComponent_div_0_Template, 3, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SelfieComponent_ng_template_3_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.load)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _photos_camera_camera_component__WEBPACK_IMPORTED_MODULE_14__["CameraComponent"], _pre_load_pre_load_component__WEBPACK_IMPORTED_MODULE_15__["PreLoadComponent"]], styles: [".flash-container {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 100;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.flash-container .icon-flash {\n  display: none;\n}\n.flash-container.flash {\n  background-color: white;\n  z-index: 200;\n  width: 100%;\n  height: 1920px;\n  top: 0px;\n  left: 0px;\n}\n.flash-container.flash .icon-flash {\n  position: absolute;\n  display: block !important;\n  left: 45px;\n  top: 50%;\n  margin-top: -194px;\n}\n.time-left {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  left: 16px;\n  top: 45%;\n  margin-top: -100px;\n  width: 153px;\n  height: 200px;\n  z-index: 100;\n  color: white;\n  font-weight: 800;\n  font-size: 100px;\n  line-height: 200px;\n  background: linear-gradient(152.09deg, #FAAC80 10.63%, #E84E68 86.4%);\n  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.12);\n  border-radius: 16px;\n}\n.time-left .message {\n  display: none;\n  font-size: 80px;\n  color: white;\n  align-items: center;\n  justify-content: flex-start;\n}\n.time-left.readiness {\n  width: 940px;\n  padding: 0 40px;\n  transition: width 0.5s ease-in-out;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.time-left.readiness .number {\n  display: none;\n}\n.time-left.readiness .message {\n  display: flex;\n}\n.time-left.timeout {\n  width: 0;\n  padding: 0;\n  transition: width 0.4s ease-in-out;\n}\n:host ::ng-deep .camera_wrapper .webcam-wrapper {\n  width: 1080px;\n  height: 1920px;\n  overflow: visible;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 50;\n}\n:host ::ng-deep .webcam-wrapper video {\n  height: 1080px !important;\n  width: 1920px !important;\n  position: absolute;\n  left: -419px;\n  top: 420px;\n  z-index: 50;\n}\n:host ::ng-deep webcam.rotate-top div video {\n  object-fit: cover;\n  width: 100%;\n  aspect-ratio: 1/1;\n  min-height: 100vh;\n  min-width: 0;\n}\n:host ::ng-deep .rotate-top video {\n  top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlbGZpZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUFFO0VBQ0UsYUFBQTtBQUVKO0FBQUU7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBRUo7QUFESTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0FBR047QUFFQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFFQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQUU7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FBRUo7QUFDRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFDSTtFQUNFLGFBQUE7QUFDTjtBQUNJO0VBQ0UsYUFBQTtBQUNOO0FBR0U7RUFDRSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGtDQUFBO0FBREo7QUFNQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtBQUhBO0FBTUE7RUFDRSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFIRjtBQUtBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFGRjtBQUlBO0VBQ0ksTUFBQTtBQURKIiwiZmlsZSI6InNlbGZpZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGFzaC1jb250YWluZXJ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiAxMDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAuaWNvbi1mbGFzaHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gICYuZmxhc2h7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgei1pbmRleDogMjAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTkyMHB4O1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICAuaWNvbi1mbGFzaHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrIWltcG9ydGFudDtcbiAgICAgIGxlZnQ6IDQ1cHg7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIG1hcmdpbi10b3A6IC0xOTRweDtcbiAgICB9XG4gIH1cbn1cblxuLnRpbWUtbGVmdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgbGVmdDogMTZweDtcbiAgdG9wOiA0NSU7XG4gIG1hcmdpbi10b3A6IC0xMDBweDtcbiAgd2lkdGg6IDE1M3B4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICB6LWluZGV4OiAxMDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zaXplOiAxMDBweDtcbiAgbGluZS1oZWlnaHQ6IDIwMHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTUyLjA5ZGVnLCAjRkFBQzgwIDEwLjYzJSwgI0U4NEU2OCA4Ni40JSk7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAubWVzc2FnZXtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGZvbnQtc2l6ZTogODBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIH1cblxuICAmLnJlYWRpbmVzc3tcbiAgICB3aWR0aDogOTQwcHg7XG4gICAgcGFkZGluZzogMCA0MHB4O1xuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgLm51bWJlcntcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5tZXNzYWdle1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG4gIH1cblxuICAmLnRpbWVvdXR7XG4gICAgd2lkdGg6IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjRzIGVhc2UtaW4tb3V0OyAgICAgIFxuICB9XG59XG5cblxuOmhvc3QgOjpuZy1kZWVwIC5jYW1lcmFfd3JhcHBlciAud2ViY2FtLXdyYXBwZXIge1xud2lkdGg6IDEwODBweCA7XG5oZWlnaHQ6IDE5MjBweCA7XG5vdmVyZmxvdzogdmlzaWJsZTtcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcbnRvcDogMDtcbmxlZnQ6IDA7XG56LWluZGV4OiA1MDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC53ZWJjYW0td3JhcHBlciB2aWRlb3tcbiAgaGVpZ2h0OiAxMDgwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDE5MjBweCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC00MTlweDtcbiAgdG9wOiA0MjBweDtcbiAgei1pbmRleDogNTA7ICBcbn1cbjpob3N0IDo6bmctZGVlcCB3ZWJjYW0ucm90YXRlLXRvcCBkaXYgdmlkZW8ge1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGFzcGVjdC1yYXRpbzogMS8xO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgbWluLXdpZHRoOiAwO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5yb3RhdGUtdG9wIHZpZGVve1xuICAgIHRvcDogMDtcbn0iXX0= */"], encapsulation: 2 });


/***/ }),

/***/ "320Y":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/navigation.service */ "LFK6");


class HeaderComponent {
    constructor(navigate) {
        this.navigate = navigate;
    }
    ngOnInit() {
    }
    navigateTo(rout) {
        this.prevPage = this.navigate.prevPage;
        if (this.prevPage == 'downLoad') {
            this.navigate.prevPage = '';
            this.navigate.navigate('download');
        }
        else
            this.navigate.navigate('');
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 6, vars: 0, consts: [[1, "wrapper"], [1, "navigate_wrap"], [1, "icon-wrap", 3, "click"], [1, "icon", "icon-back"], [1, "icon", "icon-home"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_2_listener() { return ctx.navigateTo("back"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_4_listener() { return ctx.navigateTo("main"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  width: 824px;\n  height: 64px;\n  margin-bottom: 24px;\n}\n\n.navigate_wrap[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.navigate_wrap[_ngcontent-%COMP%]   .icon-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  width: 64px;\n  height: 64px;\n  background: #ffffff;\n  box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.2);\n  border-radius: 100px;\n  align-items: center;\n  justify-content: center;\n}\n\n.navigate_wrap[_ngcontent-%COMP%]   .icon-wrap[_ngcontent-%COMP%]:first-child {\n  margin-right: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDRDQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUU7RUFDRSxrQkFBQTtBQUFKIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDgyNHB4O1xuICBoZWlnaHQ6IDY0cHg7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG5cbi5uYXZpZ2F0ZV93cmFwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgXG4gIC5pY29uLXdyYXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDY0cHg7XG4gICAgaGVpZ2h0OiA2NHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgYm94LXNoYWRvdzogMHB4IDEycHggMjBweCByZ2IoMCAwIDAgLyAyMCUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAuaWNvbi13cmFwOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "38kq":
/*!******************************!*\
  !*** ./src/app/animation.ts ***!
  \******************************/
/*! exports provided: transAnimation, blinkAnimation, slideInAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transAnimation", function() { return transAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blinkAnimation", function() { return blinkAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInAnimation", function() { return slideInAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

const transAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        height: '{{ height }}',
        opacity: '{{ opacity }}',
        backgroundColor: '{{ backgroundColor }}'
    }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{ time }}')
]);
const blinkAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('blinkAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('initial', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0,
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1,
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('initial=>final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1000ms')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('final=>initial', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0ms'))
]);
// Routable animations
const slideInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('SelfiPage <=> GalleryPage', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-150%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '200%' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('GalleryPage <=> HowPrintPage', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-150%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '200%' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('HowPrintPage <=> Cart', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-150%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '200%' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('Cart <=> PaymentFormat', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-150%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '200%' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('PaymentFormat <=> Pay', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-150%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '200%' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('Pay <=> Check', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-150%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '200%' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('Check <=> Print', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-150%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '200%' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ]),
]);


/***/ }),

/***/ "5Nio":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/download-module/smartphone/smartphone/smartphone.component.ts ***!
  \***************************************************************************************/
/*! exports provided: SmartphoneComponent, ResourseEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartphoneComponent", function() { return SmartphoneComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourseEnum", function() { return ResourseEnum; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _smartphone_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../smartphone.service */ "faAt");
/* harmony import */ var _shared_services_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/client.service */ "oR8h");
/* harmony import */ var src_app_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/navigation.service */ "LFK6");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/header/header.component */ "320Y");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function SmartphoneComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043F\u043E Wi-Fi");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u0441\u044C \u043A \u0441\u0435\u0442\u0438 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Lomobil");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u043E\u0442\u043A\u0440\u043E\u0435\u0442\u0441\u044F \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u0415\u0441\u043B\u0438 \u044D\u0442\u043E\u0433\u043E \u043D\u0435 \u043F\u0440\u043E\u0438\u0437\u043E\u0439\u0434\u0435\u0442 \u2014 \u043E\u0442\u043A\u0440\u043E\u0439\u0442\u0435 \u043B\u044E\u0431\u043E\u0439 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u0438 \u043F\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043F\u043E \u043B\u044E\u0431\u043E\u043C\u0443 \u0430\u0434\u0440\u0435\u0441\u0443, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 lomobil.ru");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438 \u0438 \u043E\u043D\u0438 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u043F\u043E\u044F\u0432\u044F\u0442\u0441\u044F \u043D\u0430 \u044D\u043A\u0440\u0430\u043D\u0435 \u043A\u0438\u043E\u0441\u043A\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SmartphoneComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0447\u0435\u0440\u0435\u0437 \u0441\u0430\u0439\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0417\u0430\u0439\u0434\u0438\u0442\u0435 \u0441 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 \u043D\u0430 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u0438\u043B\u0438 \u043E\u0442\u0441\u043A\u0430\u043D\u0438\u0440\u0443\u0439\u0442\u0435 QR-\u043A\u043E\u0434");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438 \u0438 \u043E\u043D\u0438 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u043F\u043E\u044F\u0432\u044F\u0442\u0441\u044F \u043D\u0430 \u044D\u043A\u0440\u0430\u043D\u0435 \u043A\u0438\u043E\u0441\u043A\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.websiteForDownload);
} }
function SmartphoneComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043F\u043E e-mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u041E\u0442\u043F\u0440\u0430\u0432\u044C\u0442\u0435 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438 \u043D\u0430 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "k299@lomobil.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043A\u043D\u043E\u043F\u043A\u0443 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u041D\u0430\u0439\u0442\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " \u043F\u043E\u0441\u043B\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438 \u043F\u0438\u0441\u044C\u043C\u0430 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u041D\u0430\u0439\u0442\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SmartphoneComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043F\u043E Telegram");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u041E\u0442\u043A\u0440\u043E\u0439\u0442\u0435 \u043D\u0430 \u0441\u0432\u043E\u0435\u043C \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Telegram");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u041D\u0430\u0439\u0434\u0438\u0442\u0435 \u0432 \u043F\u043E\u0438\u0441\u043A\u0435 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "LomobilBot");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u041E\u0442\u043F\u0440\u0430\u0432\u044C\u0442\u0435 \u0431\u043E\u0442\u0443 \u043B\u044E\u0431\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0438 \u0434\u0430\u043B\u0435\u0435 \u0441\u043B\u0435\u0434\u0443\u0439\u0442\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F\u043C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u041D\u043E\u043C\u0435\u0440 \u043A\u0438\u043E\u0441\u043A\u0430: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "299");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043A\u043D\u043E\u043F\u043A\u0443 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u041D\u0430\u0439\u0442\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " \u043F\u043E\u0441\u043B\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0439");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\u041D\u0430\u0439\u0442\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SmartphoneComponent {
    constructor(smartphoneService, clientService, navigate) {
        this.smartphoneService = smartphoneService;
        this.clientService = clientService;
        this.navigate = navigate;
        this.header = true;
        this.websiteForDownload = '';
    }
    ngOnInit() {
        switch (this.smartphoneService.uploadMethod) {
            case 'wifi':
                this.resourse = ResourseEnum.WiFi;
                break;
            case 'site':
                this.resourse = ResourseEnum.Site;
                this.websiteForDownload = this.clientService.currentDevice.downloadViaTheSite
                    .replace('http://', '')
                    .replace('https://', '');
                break;
            case 'email':
                this.resourse = ResourseEnum.Email;
                break;
            case 'telegram':
                this.resourse = ResourseEnum.Telegram;
                break;
        }
        this.navigate.clearURL();
    }
}
SmartphoneComponent.ɵfac = function SmartphoneComponent_Factory(t) { return new (t || SmartphoneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_smartphone_service__WEBPACK_IMPORTED_MODULE_1__["SmartphoneService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_client_service__WEBPACK_IMPORTED_MODULE_2__["ClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_3__["NavigationService"])); };
SmartphoneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SmartphoneComponent, selectors: [["app-smartphone"]], decls: 7, vars: 5, consts: [[1, "slot-cell"], [1, "content", 3, "ngSwitch"], ["class", "resourse_wrap", 4, "ngSwitchCase"], [1, "resourse_wrap"], [1, "item"], [1, "number"], [1, "main-content"], [1, "green"], [1, "note"], [1, "qr_wrap"], ["src", "../../../../../assets/static/img/qr-down.svg"], [1, "search-btn"], [2, "margin-top", "24px"]], template: function SmartphoneComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SmartphoneComponent_div_3_Template, 28, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SmartphoneComponent_div_4_Template, 22, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SmartphoneComponent_div_5_Template, 25, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SmartphoneComponent_div_6_Template, 45, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.resourse);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "wifi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "site");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "telegram");
    } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitchCase"]], styles: [".resourse_wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  font-weight: 600;\n  margin-bottom: 48px;\n}\n.resourse_wrap[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  word-break: break-word;\n}\n.resourse_wrap[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  width: 760px;\n  display: flex;\n  background: #ffffff;\n  box-shadow: 0px 20px 40px rgba(3, 74, 104, 0.2);\n  border-radius: 16px;\n  font-size: 38px;\n  font-style: normal;\n  line-height: 40px;\n  letter-spacing: 0em;\n  text-align: left;\n  padding: 32px 32px 32px 32px;\n  margin-bottom: 32px;\n}\n.resourse_wrap[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  margin-right: 32px;\n  color: black;\n}\n.resourse_wrap[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.resourse_wrap[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  color: rgba(0, 0, 0, 0.5);\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 22px;\n}\n.resourse_wrap[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   .green[_ngcontent-%COMP%] {\n  background-color: #2aa5a0;\n  background-image: linear-gradient(90deg, #65e17b, #2aa5a0);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  font-weight: 700;\n}\n.resourse_wrap[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .qr_wrap[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.resourse_wrap[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .qr_wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  background: #ffffff;\n  box-shadow: 0px 20px 40px rgba(3, 74, 104, 0.2);\n}\n.search-btn[_ngcontent-%COMP%] {\n  width: 760px;\n  height: 160px;\n  background: #ffffff;\n  box-shadow: 0px 20px 40px rgba(3, 74, 104, 0.2);\n  border-radius: 44px;\n  border: none;\n}\n.search-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 38px;\n  line-height: 40px;\n  color: #000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NtYXJ0cGhvbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQVI7QUFHSTtFQUNJLHNCQUFBO0FBRFI7QUFJSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBRUEsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBQUhSO0FBS1E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUFIWjtBQU1RO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FBSlo7QUFNWTtFQUNJLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUpoQjtBQU9ZO0VBQ0kseUJBQUE7RUFDQSwwREFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQUxoQjtBQVNRO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQVBaO0FBUVk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7QUFOaEI7QUFpQkE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFkSjtBQWVJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBYlIiLCJmaWxlIjoic21hcnRwaG9uZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXNvdXJzZV93cmFwIHtcbiAgICBoMSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0OHB4O1xuICAgIH1cblxuICAgIC5tYWluLWNvbnRlbnQgc3BhbiB7XG4gICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgfVxuXG4gICAgLml0ZW0ge1xuICAgICAgICB3aWR0aDogNzYwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAyMHB4IDQwcHggcmdiYSgzLCA3NCwgMTA0LCAwLjIpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgICAgICBmb250LXNpemU6IDM4cHg7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgLy8gZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwZW07XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHBhZGRpbmc6IDMycHggMzJweCAzMnB4IDMycHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMycHg7XG4gICAgXG4gICAgICAgIC5udW1iZXIge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLm1haW4tY29udGVudCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAgICAgLm5vdGUge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmdyZWVuIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmFhNWEwO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzY1ZTE3YiwgIzJhYTVhMCk7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucXJfd3JhcCB7XG4gICAgICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEyMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMjBweCA0MHB4IHJnYmEoMywgNzQsIDEwNCwgMC4yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgIH1cbn1cblxuXG5cblxuXG4uc2VhcmNoLWJ0biB7XG4gICAgd2lkdGg6IDc2MHB4O1xuICAgIGhlaWdodDogMTYwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBib3gtc2hhZG93OiAwcHggMjBweCA0MHB4IHJnYmEoMywgNzQsIDEwNCwgMC4yKTtcbiAgICBib3JkZXItcmFkaXVzOiA0NHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBzcGFuIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAzOHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgfVxufVxuIl19 */"] });
var ResourseEnum;
(function (ResourseEnum) {
    ResourseEnum["WiFi"] = "wifi";
    ResourseEnum["Site"] = "site";
    ResourseEnum["Email"] = "email";
    ResourseEnum["Telegram"] = "telegram";
})(ResourseEnum || (ResourseEnum = {}));


/***/ }),

/***/ "8spx":
/*!******************************************************!*\
  !*** ./src/app/core/interfaces/image-status.enum.ts ***!
  \******************************************************/
/*! exports provided: ImageStatusEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageStatusEnum", function() { return ImageStatusEnum; });
var ImageStatusEnum;
(function (ImageStatusEnum) {
    ImageStatusEnum["Fail"] = "fail";
    ImageStatusEnum["NoFace"] = "no_face";
    ImageStatusEnum["NotFound"] = "NotFound";
    ImageStatusEnum["Empty"] = "";
    ImageStatusEnum["InProgress"] = "InProgress";
    ImageStatusEnum["Done"] = "Done";
})(ImageStatusEnum || (ImageStatusEnum = {}));


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// Включение режима продакшина
const environment = {
    production: true,
    testModeOfDevice: false,
    printCheck: false,
    endingPayment: false // ТЕСТ. Принудительное завершение оплаты; PROD - false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "B57o":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/wireless-download/components/slider/slider.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_file_upload_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/file-upload.service */ "YGyT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function SliderComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SliderComponent_div_2_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const photo_r1 = ctx.$implicit; const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.deleteEl(photo_r1, i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const photo_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", photo_r1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class SliderComponent {
    constructor(uploadService) {
        this.uploadService = uploadService;
        this.gallery = [];
    }
    ngOnInit() {
        this.uploadService.gallery.length ? this.gallery = this.uploadService.gallery : null;
    }
    deleteEl(slide, i) {
        this.gallery.splice(i, 1);
        this.uploadService.gallery = this.gallery;
    }
    onFileChanged(event) {
        const endpoint = '././assets/img/';
        let file;
        let obj;
        let pathImage;
        const fileList = event.target.files || [];
        let number = fileList.length;
        for (let i = 0; i < number; i++) {
            file = event.target.files[i];
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                pathImage = reader.result;
                obj = {
                    pathImage
                };
                this.gallery.push(pathImage);
                this.uploadService.gallery = this.gallery;
            };
        }
    }
}
SliderComponent.ɵfac = function SliderComponent_Factory(t) { return new (t || SliderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_file_upload_service__WEBPACK_IMPORTED_MODULE_1__["FileUploadService"])); };
SliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SliderComponent, selectors: [["app-slider"]], decls: 10, vars: 1, consts: [[1, "photo_wrap"], [1, "gallery"], ["class", "photo", 4, "ngFor", "ngForOf"], [1, "btn_add"], ["for", "upload-photo"], [1, "icon", "icon-photo"], ["type", "file", "multiple", "", "id", "upload-photo", 3, "change"], [1, "photo"], [3, "src"], ["src", "../../../assets/img/svg/close.svg", 1, "img_delete", 3, "click"]], template: function SliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SliderComponent_div_2_Template, 3, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SliderComponent_Template_input_change_9_listener($event) { return ctx.onFileChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.gallery);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".gallery[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-column-gap: 3em;\n  grid-row-gap: 2em;\n  padding-left: 18px;\n  padding-right: 18px;\n}\n.gallery[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 151px;\n  height: 100%;\n  max-height: 151px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.gallery[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 151px;\n  border-radius: 8px;\n  object-fit: cover;\n}\n.img_delete[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -22px;\n  top: 0px;\n  width: 32px !important;\n  height: 32px;\n  background: #ffffff;\n  box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.2);\n  border-radius: 100px !important;\n  cursor: pointer;\n}\n.btn_add[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 16px;\n  margin-bottom: 40px;\n}\n.btn_add[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: relative;\n  background: #ffffff;\n  box-shadow: 0px 12px 24px rgba(3, 74, 104, 0.12);\n  border-radius: 24px;\n  border: none;\n  height: 88px;\n  width: 100%;\n  max-width: 319px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.btn_add[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: Panton;\n  font-weight: 600;\n  font-size: 22px;\n  line-height: 24px;\n}\n.btn_add[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}\n.photo_wrap[_ngcontent-%COMP%] {\n  height: 100%;\n  padding-top: 20px;\n  overflow: scroll;\n  overflow-x: hidden;\n}\n.photo_wrap[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n  background-color: #f9f9fd;\n}\n.photo_wrap[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 0px;\n  background-color: #18aaaa;\n}\n.photo_wrap[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);\n  background-color: #f9f9fd;\n}\nlabel[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 88px;\n}\n#upload-photo[_ngcontent-%COMP%] {\n  opacity: 0;\n  position: absolute;\n  z-index: -1;\n  top: 0;\n}\nbutton[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n@media (max-width: 900px) {\n  .btn_add[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .gallery[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n\n  .btn_add[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin-left: 16px;\n    margin-right: 16px;\n  }\n}\n@media (max-width: 475px) {\n  .gallery[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NsaWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQUk7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBRU47QUFHQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDRDQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0FBQUY7QUFHQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUFGO0FBQ0U7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0RBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUNJO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUNOO0FBQ0k7RUFDRSxrQkFBQTtBQUNOO0FBTUE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBSEY7QUFNQTtFQUNFLFVBQUE7RUFDQSx5QkFBQTtBQUhGO0FBTUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0FBSEY7QUFNQTtFQUNFLG9EQUFBO0VBQ0EseUJBQUE7QUFIRjtBQU1BO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUhGO0FBTUE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtBQUhGO0FBTUE7RUFDRSxlQUFBO0FBSEY7QUFNQTtFQUNFO0lBQ0UsZUFBQTtFQUhGOztFQUtBO0lBRUUscUNBQUE7RUFIRjs7RUFNQTtJQUNFLGlCQUFBO0lBQ0Esa0JBQUE7RUFIRjtBQUNGO0FBTUE7RUFDRTtJQUNFLHFDQUFBO0VBSkY7QUFDRiIsImZpbGUiOiJzbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2FsbGVyeSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG4gIGdyaWQtY29sdW1uLWdhcDogM2VtO1xuICBncmlkLXJvdy1nYXA6IDJlbTtcbiAgcGFkZGluZy1sZWZ0OiAxOHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxOHB4O1xuXG4gIC5waG90byB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1heC13aWR0aDogMTUxcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDE1MXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXgtaGVpZ2h0OiAxNTFweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIH1cbiAgfVxufVxuXG4uaW1nX2RlbGV0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC0yMnB4O1xuICB0b3A6IDBweDtcbiAgd2lkdGg6IDMycHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwcHggMTJweCAyMHB4IHJnYigwIDAgMCAvIDIwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ0bl9hZGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBib3gtc2hhZG93OiAwcHggMTJweCAyNHB4IHJnYmEoMywgNzQsIDEwNCwgMC4xMik7XG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgaGVpZ2h0OiA4OHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMzE5cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgc3BhbiB7XG4gICAgICBmb250LWZhbWlseTogUGFudG9uO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIH1cbiAgICBpIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi5waG90b193cmFwe1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBvdmVyZmxvdy14OmhpZGRlbjtcbn1cblxuLnBob3RvX3dyYXA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmZDtcbn1cblxuLnBob3RvX3dyYXA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMThhYWFhO1xufVxuXG4ucGhvdG9fd3JhcDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWZkO1xufVxuXG5sYWJlbHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4OHB4O1xufVxuXG4jdXBsb2FkLXBob3RvIHtcbiAgb3BhY2l0eTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAtMTtcbiAgdG9wOiAwO1xufVxuXG5idXR0b257XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIC5idG5fYWRkIGJ1dHRvbiBzcGFue1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICAuZ2FsbGVyeXtcbiAgICAvLyBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpXG4gIH1cblxuICAuYnRuX2FkZCBidXR0b257XG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0NzVweCl7XG4gIC5nYWxsZXJ5e1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcilcbiAgfVxufVxuXG4iXX0= */"] });


/***/ }),

/***/ "BIm4":
/*!*************************************************!*\
  !*** ./src/app/shared/services/date.service.ts ***!
  \*************************************************/
/*! exports provided: DateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateService", function() { return DateService; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DateService {
    constructor() {
        this.today = new Date();
        this.jstoday = '';
        this.isPrintCheck = true;
    }
    getDate() {
        return this.jstoday = Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(this.today, 'dd-MM-yyyy hh:mm:ss a', 'ru-RU');
    }
}
DateService.ɵfac = function DateService_Factory(t) { return new (t || DateService)(); };
DateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DateService, factory: DateService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "EgB/":
/*!*********************************************************!*\
  !*** ./src/app/components/gallery/gallery.component.ts ***!
  \*********************************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core */ "ey9i");
/* harmony import */ var src_app_core_interfaces_image_status_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/interfaces/image-status.enum */ "8spx");
/* harmony import */ var src_app_shared_mappers_photo_mapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/mappers/photo.mapper */ "Fk/T");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_services_client_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/client.service */ "oR8h");
/* harmony import */ var src_app_shared_services_mocks_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/mocks.service */ "kj9m");
/* harmony import */ var src_app_shared_services_camera_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/camera.service */ "p341");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var src_app_shared_services_session_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/services/session.service */ "mZtN");
/* harmony import */ var src_app_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/services/navigation.service */ "LFK6");
/* harmony import */ var src_app_shared_services_broker_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/services/broker.service */ "VsY3");
/* harmony import */ var src_app_shared_services_photo_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/services/photo.service */ "ny42");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-slick-carousel */ "eSVu");
/* harmony import */ var _pre_load_pre_load_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../pre-load/pre-load.component */ "ycqb");





















function GalleryComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GalleryComponent_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function GalleryComponent_div_9_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u0418\u0434\u0435\u0442 \u043F\u043E\u0438\u0441\u043A \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0439, \u043E\u0436\u0438\u0434\u0430\u0439\u0442\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function GalleryComponent_div_9_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0439 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0441\u0435\u043B\u0444\u0438 \u0435\u0449\u0435 \u0440\u0430\u0437 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function GalleryComponent_div_9_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GalleryComponent_div_9_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r14.goHome(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u0435\u0449\u0435 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0444\u043E\u0442\u043E");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function GalleryComponent_div_9_h2_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u043E\u0442\u043E");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function GalleryComponent_div_9_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GalleryComponent_div_9_div_10_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const image_r16 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r18.onSelectItem(image_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active-slide", image_r16.isChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", image_r16.thumbUri, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function GalleryComponent_div_9_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GalleryComponent_div_9_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r20.goHome(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u041F\u043B\u043E\u0445\u043E \u0432\u0438\u0434\u043D\u043E \u043B\u0438\u0446\u0430, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function GalleryComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, GalleryComponent_div_9_span_2_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, GalleryComponent_div_9_span_5_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, GalleryComponent_div_9_button_6_Template, 4, 0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, GalleryComponent_div_9_h2_7_Template, 2, 0, "h2", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ngx-slick-carousel", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, GalleryComponent_div_9_div_10_Template, 3, 3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, GalleryComponent_div_9_button_11_Template, 4, 0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.isStatusDone);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.isStatusDone && ctx_r1.gallerylist.images.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.isStatusDone && ctx_r1.gallerylist.images.length === 0 && !ctx_r1.gallerylist.statusIsNoFace);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.isStatusDone && ctx_r1.gallerylist.images.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("config", ctx_r1.slideConfig);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.gallerylist.images);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.gallerylist.statusIsNoFace);
} }
function GalleryComponent_div_10_div_1_h2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u043E\u0442\u043E ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function GalleryComponent_div_10_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GalleryComponent_div_10_div_1_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29); const photo_r26 = ctx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r28.onSelectItem(photo_r26); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const photo_r26 = ctx.$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", photo_r26.isChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r25.cameraService.cssClass)("src", photo_r26.path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function GalleryComponent_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, GalleryComponent_div_10_div_1_h2_1_Template, 2, 0, "h2", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, GalleryComponent_div_10_div_1_div_3_Template, 2, 4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r22.selfiFromGallery.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r22.selfiFromGallery);
} }
function GalleryComponent_div_10_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GalleryComponent_div_10_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r30.goSelfie(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u0435\u0449\u0435 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0444\u043E\u0442\u043E");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function GalleryComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, GalleryComponent_div_10_div_1_Template, 4, 2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, GalleryComponent_div_10_button_2_Template, 4, 0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.selfiFromGallery);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.isLoaded);
} }
function GalleryComponent_ng_template_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r32.sanatizeUrl(ctx_r32.generatedImage), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function GalleryComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, GalleryComponent_ng_template_11_div_1_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-pre-load");
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.seen_search_photo);
} }
class GalleryComponent {
    constructor(router, clientService, mocks, cameraService, sanitizer, sessionService, navigate, brokerService, photoService) {
        this.router = router;
        this.clientService = clientService;
        this.mocks = mocks;
        this.cameraService = cameraService;
        this.sanitizer = sanitizer;
        this.sessionService = sessionService;
        this.navigate = navigate;
        this.brokerService = brokerService;
        this.photoService = photoService;
        this.changeGallery = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.load = true;
        this.loadTitle = true;
        this.branch = '';
        this.seen_search_photo = true;
        this.maxCountRequest = 20;
        this.gallerylist = {
            images: []
        };
        this.slideConfig = {
            autoplay: false,
            vertical: true,
            infinite: false,
            arrows: false,
            verticalSwiping: true,
            centerMode: false,
            slidesToShow: 4,
            slidesToScroll: 3,
            centerPadding: '0px',
            cssEase: 'ease',
            edgeFriction: 0.15,
        };
        this.isVertical = true;
        this.gallery = [];
        this.temporaryItemSliderHeight = 1176;
        this.activePhotoCount = 0;
        this.photoForSearch = {
            location: this.clientService.locationID,
            limit: 15,
            offset: 0,
            date: moment__WEBPACK_IMPORTED_MODULE_2__().format('YYYY-MM-DD'),
        };
        this.selfiFromGallery = [];
        this.selfiMas = [];
        this.selfi = {
            images: this.selfiMas
        };
        this.name = "Angular";
        this.windowOPen = false;
        this.clientService.photoToCart = [];
    }
    ngOnInit() {
        src_app_core__WEBPACK_IMPORTED_MODULE_5__["ActivityMode"].startTimer();
        this.photoForSearch.sampleImage = this.cameraService.photo_search;
        this.branch = this.sessionService.branch;
        switch (this.branch) {
            case 'Selfie': {
                this.cameraService.setRotateCamera(270);
                this.isLoaded = false;
                this.selfiMas = this.photoService.selfieMas;
                this.selfi.images = this.photoService.selfieMas;
                let key = moment__WEBPACK_IMPORTED_MODULE_2__().unix();
                this.photoService.selfiBase64.forEach((image, index) => {
                    if (index > 3) {
                        return;
                    }
                    this.selfiFromGallery.push({
                        path: image,
                        brandId: 1,
                        timeStamp: key + index,
                        originalUri: '',
                        sumOfEmail: 0,
                        sumOfPaper: 0,
                        isChecked: false,
                    });
                });
                this.getImageWithoutWindowOpen(this.photoService.selfiBase64[0]);
                this.getImageWithoutWindowOpen(this.photoService.selfiBase64[1]);
                setTimeout(() => {
                    this.isLoaded = true;
                }, 0);
                break;
            }
            case 'Neural': {
                this.clientService.getClient().subscribe((item) => {
                    this.cameraService.setRotateCamera(item.devices.webCamera.rotate);
                    this.brokerService.priceForPaper = (item.products[0].costPenny / 100);
                    // this.brokerService.priceForPaper = 1
                    this.brokerService.priceForEmail = (item.products[1].costPenny / 100);
                });
                this.clientService.standBy().subscribe((item) => {
                });
                if (this.navigate.photoForSearch == 'photoBot') {
                    this.photoForSearch = null;
                }
                this.cameraService.setRotateCamera(270);
                this.updateImages();
                let requestImages = setInterval(() => {
                    if (this.isStatusDone || this.maxCountRequest <= 0) {
                        clearInterval(requestImages);
                        return;
                    }
                    this.updateImages();
                }, 1000);
                this.getImageWithoutWindowOpen(this.photoForSearch.sampleImage);
                break;
            }
        }
        this.navigate.clearURL();
    }
    updateImages() {
        if (this.isGalleryLoading) {
            return;
        }
        this.isGalleryLoading = true;
        if (this.queryNumber) {
            this.photoForSearch.queryNumber = this.queryNumber;
        }
        this.maxCountRequest--;
        this.photoForSearch.location = 'ED';
        this.clientService.certainFacesSearch(this.photoForSearch)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.errorHandler(err);
            this.loadTitle = false;
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((items) => {
            if (items === null || items === void 0 ? void 0 : items.queryNumber) {
                this.clientService.queryNumber = items.queryNumber;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.isGalleryLoading = false), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((data) => {
            if (data) {
                data = src_app_shared_mappers_photo_mapper__WEBPACK_IMPORTED_MODULE_7__["PhotoMapper"].formatImageToLocal(data);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
            if (!data) {
                return {};
            }
            this.isStatusDone = [
                src_app_core_interfaces_image_status_enum__WEBPACK_IMPORTED_MODULE_6__["ImageStatusEnum"].Done,
                src_app_core_interfaces_image_status_enum__WEBPACK_IMPORTED_MODULE_6__["ImageStatusEnum"].Fail,
                src_app_core_interfaces_image_status_enum__WEBPACK_IMPORTED_MODULE_6__["ImageStatusEnum"].NotFound
            ].includes(data.status);
            data.images
                .filter(item => {
                if (!this.gallerylist.images.length) {
                    return true;
                }
                return this.gallerylist.images.find(image => image.path === item.path) ? false : item;
            })
                .map((item) => {
                item.thumbUri = this.sanitizer.bypassSecurityTrustUrl(item.thumbUri);
                this.gallerylist.images.push(item);
            });
            this.queryNumber = data.queryNumber;
            this.deactivateActivateButtons = data.images.length <= 10 ? 'full' : 'prev';
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.loadTitle = false))
            .subscribe();
    }
    errorHandler(err) {
        //throw new Error('Method not implemented.');
    }
    onSelectItem(slide) {
        this.activePhotoCount = !slide.isChecked ? this.activePhotoCount + 1 : this.activePhotoCount - 1;
        slide.isChecked = !slide.isChecked;
        if (slide.isChecked) {
            this.gallery.push(slide);
        }
        else {
            this.gallery = this.gallery.filter((item) => item.timeStamp !== slide.timeStamp);
        }
        this.clientService.photoToCart = this.gallery;
    }
    goBack() {
        if (this.branch == 'Selfie') {
            this.router.navigate(['selfie']);
        }
        else
            this.router.navigate(['']);
    }
    goHome() {
        this.router.navigate(['']);
    }
    goSelfie() {
        this.router.navigate(['selfie']);
    }
    goNext() {
        this.router.navigate(['howPrint']);
    }
    sanatizeUrl(generatedImageUrl) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(generatedImageUrl);
    }
    /* Method to fetch image from Url */
    getBase64ImageFromURL(url) {
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create((observer) => {
            // create an image object
            let img = new Image();
            img.crossOrigin = "Anonymous";
            img.src = url;
            if (!img.complete) {
                // This will call another method that will create image from url
                img.onload = () => {
                    observer.next(this.getBase64Image(img));
                    observer.complete();
                };
                img.onerror = err => {
                    observer.error(err);
                };
            }
            else {
                observer.next(this.getBase64Image(img));
                observer.complete();
            }
        });
    }
    /* Method to create base64Data Url from fetched image */
    getBase64Image(img) {
        // We create a HTML canvas object that will create a 2d image
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        let ctx = canvas.getContext("2d");
        // This will draw image
        ctx.drawImage(img, 0, 0);
        // Convert the drawn image to Data URL
        let dataURL = canvas.toDataURL("image/png");
        this.base64DefaultURL = dataURL;
        return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    }
    getImage(imageUrl) {
        this.windowOPen = true;
        this.getBase64ImageFromURL(imageUrl).subscribe((base64Data) => {
            this.base64TrimmedURL = base64Data;
            this.createBlobImageFileAndShow();
        });
    }
    getImageWithoutWindowOpen(imageUrl) {
        if (this.branch == 'Neural') {
            this.seen_search_photo = true;
        }
        else {
            this.seen_search_photo = false;
        }
        this.windowOPen = false;
        this.getBase64ImageFromURL(imageUrl).subscribe((base64Data) => {
            this.base64TrimmedURL = base64Data;
            this.createBlobImageFileAndShow();
        });
    }
    /**Method that will create Blob and show in new window */
    createBlobImageFileAndShow() {
        this.dataURItoBlob(this.base64TrimmedURL).subscribe((blob) => {
            const imageBlob = blob;
            const imageName = this.generateName();
            const imageFile = new File([imageBlob], imageName, {
                type: "image/jpeg"
            });
            this.generatedImage = window.URL.createObjectURL(imageFile);
            // on demo image not open window
            if (this.windowOPen) {
                window.open(this.generatedImage);
            }
        });
    }
    /**Method to Generate a Name for the Image */
    generateName() {
        const date = new Date().valueOf();
        let text = "";
        const possibleText = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < 5; i++) {
            text += possibleText.charAt(Math.floor(Math.random() * possibleText.length));
        }
        // Replace extension according to your media type like this
        return date + "." + text + ".jpeg";
    }
    /* Method to convert Base64Data Url as Image Blob */
    dataURItoBlob(dataURI) {
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create((observer) => {
            const byteString = window.atob(dataURI);
            const arrayBuffer = new ArrayBuffer(byteString.length);
            const int8Array = new Uint8Array(arrayBuffer);
            for (let i = 0; i < byteString.length; i++) {
                int8Array[i] = byteString.charCodeAt(i);
            }
            const blob = new Blob([int8Array], { type: "image/jpeg" });
            observer.next(blob);
            observer.complete();
        });
    }
}
GalleryComponent.ɵfac = function GalleryComponent_Factory(t) { return new (t || GalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_client_service__WEBPACK_IMPORTED_MODULE_9__["ClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_mocks_service__WEBPACK_IMPORTED_MODULE_10__["MocksService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_camera_service__WEBPACK_IMPORTED_MODULE_11__["CameraService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_session_service__WEBPACK_IMPORTED_MODULE_13__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_14__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_broker_service__WEBPACK_IMPORTED_MODULE_15__["BrokerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_photo_service__WEBPACK_IMPORTED_MODULE_16__["PhotoService"])); };
GalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GalleryComponent, selectors: [["app-gallery"]], inputs: { products: "products" }, outputs: { changeGallery: "changeGallery" }, decls: 13, vars: 6, consts: [[1, "gallery", 2, "height", "1180px"], [1, "header"], [1, "header-icons"], ["class", "icon-wrap", 3, "click", 4, "ngIf"], [1, "icon-wrap", 3, "click"], [1, "icon", "icon-home"], [1, "next-btn", 3, "click"], [1, "gallery_content", 3, "ngSwitch"], ["class", "neural-gallery gallery_wrap", 4, "ngSwitchCase"], ["class", "gallery-selfie gallery_wrap selfi_branch", 4, "ngSwitchCase"], ["preloader", ""], [1, "icon", "icon-back"], [1, "neural-gallery", "gallery_wrap"], [1, "gallery-main__title"], [4, "ngIf"], [1, "gallery-main"], ["class", "add_photo", 3, "click", 4, "ngIf"], ["class", "gallery-main__title", 4, "ngIf"], [1, "carousel", 3, "config"], ["slickModal", "slick-carousel"], ["ngxSlickItem", "", "class", "slide", 4, "ngFor", "ngForOf"], [1, "add_photo", 3, "click"], ["src", "../../../assets/img/add-photo.svg"], ["ngxSlickItem", "", 1, "slide"], [1, "img-box", 3, "click"], ["alt", "", "width", "232px", "height", "165px", 3, "src"], [1, "gallery-selfie", "gallery_wrap", "selfi_branch"], ["class", "gallery-main", 4, "ngIf"], ["class", "slot-btn search-btn", 3, "click", 4, "ngIf"], [1, "list-images"], ["class", "image img-box snapshot", 3, "click", 4, "ngFor", "ngForOf"], [1, "image", "img-box", "snapshot", 3, "click"], ["alt", "", 3, "ngClass", "src"], [1, "slot-btn", "search-btn", 3, "click"], [1, "icon", "icon-camera"], [1, "card-body"], [3, "src"]], template: function GalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, GalleryComponent_div_3_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GalleryComponent_Template_div_click_4_listener() { return ctx.goHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GalleryComponent_Template_button_click_6_listener() { return ctx.goNext(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u0414\u0430\u043B\u0435\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, GalleryComponent_div_9_Template, 12, 7, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, GalleryComponent_div_10_Template, 3, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, GalleryComponent_ng_template_11_Template, 3, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.branch == "Neural");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active-btn", ctx.gallery.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.branch);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "Neural");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "Selfie");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgSwitchCase"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_18__["SlickCarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgForOf"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_18__["SlickItemDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgClass"], _pre_load_pre_load_component__WEBPACK_IMPORTED_MODULE_19__["PreLoadComponent"]], styles: ["[_nghost-%COMP%] {\n  width: 940px;\n  display: block;\n}\n\nbody[_ngcontent-%COMP%]   .slick-prev[_ngcontent-%COMP%], body[_ngcontent-%COMP%]   .slick-next[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.gallery[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.7);\n  -webkit-backdrop-filter: blur(94px);\n          backdrop-filter: blur(94px);\n  border-radius: 60px;\n}\n\n.gallery[_ngcontent-%COMP%]   .slick-list[_ngcontent-%COMP%] {\n  overflow: auto !important;\n  max-height: 740px;\n}\n\n.gallery-selfie[_ngcontent-%COMP%]   .list-images[_ngcontent-%COMP%] {\n  margin: 96px 0 0 -90px;\n  width: 456px;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.gallery-selfie[_ngcontent-%COMP%]   .list-images[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  width: 212px !important;\n  height: 320px !important;\n  margin-bottom: 32px;\n  position: relative;\n}\n\n.gallery-selfie[_ngcontent-%COMP%]   .list-images[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 320px;\n  height: 212px;\n}\n\n.gallery-selfie[_ngcontent-%COMP%]   .list-images[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img.active[_ngcontent-%COMP%] {\n  border: 10px solid #36b049;\n}\n\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  padding: 32px 32px 0 32px;\n}\n\n.header-icons[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-size: 48px;\n  line-height: 52px;\n  font-weight: 600;\n  color: black;\n  text-align: center;\n}\n\n.search-btn[_ngcontent-%COMP%] {\n  width: 760px;\n  height: 160px;\n}\n\n.icon-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  width: 64px;\n  height: 64px;\n  background: #ffffff;\n  box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.2);\n  border-radius: 100px;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.icon-wrap[_ngcontent-%COMP%]:first-child {\n  margin-right: 12px;\n}\n\n.next-btn[_ngcontent-%COMP%] {\n  background: #ffffff;\n  box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.2);\n  border-radius: 100px;\n  width: 144px;\n  height: 64px;\n  font-weight: 600;\n  line-height: 30px;\n  border: none;\n  font-size: 28px;\n  color: #000000;\n  margin-left: 62%;\n  display: none;\n}\n\n.active-btn[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.slick-list[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n\nbody[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 1em;\n}\n\nbody[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n}\n\nbody[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: darkgrey;\n  outline: 1px solid slategrey;\n}\n\n.carousel[_ngcontent-%COMP%] {\n  height: 774px;\n}\n\n.slick-slider[_ngcontent-%COMP%] {\n  width: auto;\n}\n\n.slick-list[_ngcontent-%COMP%] {\n  height: 90% !important;\n}\n\n.slick-slide[_ngcontent-%COMP%] {\n  display: flex;\n  color: white;\n  font-size: 30px;\n  font-family: \"Arial\", \"Helvetica\";\n  text-align: center;\n  width: 28% !important;\n  margin: 16px;\n}\n\n.slick-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.slick-track[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-items: stretch;\n}\n\n.gallery-header[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 32px 32px 0 32px;\n}\n\n.gallery-header__btn[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #ffffff;\n  background-size: cover;\n  padding: 8px;\n  box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.2);\n  border-radius: 100px;\n  margin: 0px 12px;\n}\n\n.gallery-main[_ngcontent-%COMP%] {\n  padding: 0px 64px;\n  \n}\n\n.gallery-main__title[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  font-weight: 600;\n  font-size: 48px;\n  text-align: center;\n}\n\n.gallery-main__title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 48px;\n  text-align: center;\n}\n\n.img-box[_ngcontent-%COMP%] {\n  width: 320px;\n  height: 180px;\n  border-radius: 16px;\n}\n\n.img-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 16px;\n  outline: none;\n}\n\n.active-slide[_ngcontent-%COMP%] {\n  border: 10px solid #36b049;\n  border-radius: 22px;\n  position: relative;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 999;\n  top: 832px;\n  left: 266px;\n}\n\n.card-body[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 520px;\n  height: 300px;\n  border-radius: 44px;\n  object-fit: cover;\n}\n\n.img-box.active-slide[_ngcontent-%COMP%] {\n  border: 10px solid #36b049;\n}\n\n.add_photo[_ngcontent-%COMP%] {\n  width: 760px;\n  height: 160px;\n  background: #ffffff;\n  box-shadow: 0px 20px 40px rgba(3, 74, 104, 0.2);\n  border-radius: 44px;\n  border: none;\n  margin: 0 auto;\n  margin-top: 130px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.add_photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 96px;\n  height: 96px;\n  margin-right: 30px;\n}\n\n.add_photo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: Panton;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 38px;\n  line-height: 40px;\n  color: #000000;\n}\n\n.gallery_wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.search-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 38px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 40px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: black;\n  font-family: Panton;\n}\n\n.icon-camera[_ngcontent-%COMP%] {\n  margin-right: 24px;\n}\n\n.selfi_branch[_ngcontent-%COMP%]   .slick-slide[_ngcontent-%COMP%] {\n  width: 36% !important;\n}\n\n.selfi_branch[_ngcontent-%COMP%]   .slick-slide[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%] {\n  width: 320px;\n  height: 220px;\n  margin-bottom: 75px;\n}\n\n.selfi_branch[_ngcontent-%COMP%]   .slick-slider[_ngcontent-%COMP%] {\n  height: 748px !important;\n  padding-left: 9% !important;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2dhbGxlcnkuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFlDSFk7RURJWixjQUFBO0FBREo7O0FBSUE7O0VBRUUsWUFBQTtBQURGOztBQUlBO0VBQ0Usb0NBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFFRTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHSTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUFETjs7QUFFTTtFQUNFLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQVI7O0FBQ1E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBQ1Y7O0FBQVU7RUFDRSwwQkFBQTtBQUVaOztBQU1BO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBSEY7O0FBS0U7RUFDRSxhQUFBO0FBSEo7O0FBT0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUpGOztBQU9BO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUVBLFlBQUE7RUFDQSxrQkFBQTtBQUxGOztBQVFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUFMRjs7QUFRQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsNENBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBTEY7O0FBUUE7RUFDRSxrQkFBQTtBQUxGOztBQVFBO0VBQ0UsbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBTEY7O0FBUUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUxGOztBQVFBO0VBQ0UsYUFBQTtBQUxGOztBQVFBO0VBQ0UsVUFBQTtBQUxGOztBQVFBO0VBQ0UsNENBQUE7QUFMRjs7QUFRQTtFQUNFLDBCQUFBO0VBQ0EsNEJBQUE7QUFMRjs7QUFRQTtFQUNFLGFBQUE7QUFMRjs7QUFTRTtFQUNFLFdBQUE7QUFOSjs7QUFTRTtFQUNFLHNCQUFBO0FBUEo7O0FBVUU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBUko7O0FBU0k7RUFDRSxXQUFBO0FBUE47O0FBV0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBVEo7O0FBY0U7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUFYSjs7QUFZSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLDRDQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQVZOOztBQWNFO0VBQ0UsaUJBQUE7RUFFQTs7Ozs7O0lBQUE7QUFQSjs7QUFlSTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFiTjs7QUFnQkk7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQWROOztBQW1CQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFoQkY7O0FBaUJFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQWZKOztBQW1CQTtFQUNFLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQWhCRjs7QUFtQkE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQWhCRjs7QUFpQkU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFmSjs7QUFvQkE7RUFDRSwwQkFBQTtBQWpCRjs7QUFxQkE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQWxCRjs7QUFtQkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBakJKOztBQW1CRTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFqQko7O0FBcUJBO0VBQ0UsYUFBQTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7QUFsQko7O0FBcUJBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFsQkY7O0FBcUJBO0VBQ0Usa0JBQUE7QUFsQkY7O0FBcUJBO0VBQ0UscUJBQUE7QUFsQkY7O0FBbUJFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQWpCSjs7QUFxQkE7RUFDRSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7QUFsQkYiLCJmaWxlIjoiZ2FsbGVyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy92YXJpYWJsZXMnO1xuXG46aG9zdHtcbiAgICB3aWR0aDogJHdpZHRoLWNvbnRlbnQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbmJvZHkgLnNsaWNrLXByZXYsXG5ib2R5IC5zbGljay1uZXh0IHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uZ2FsbGVyeSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDk0cHgpO1xuICBib3JkZXItcmFkaXVzOiA2MHB4O1xuICAuc2xpY2stbGlzdHtcbiAgICBvdmVyZmxvdzogYXV0byFpbXBvcnRhbnQ7XG4gICAgbWF4LWhlaWdodDogNzQwcHg7ICAgIFxuICB9XG4gICYtc2VsZmllIHtcbiAgICAubGlzdC1pbWFnZXMge1xuICAgICAgbWFyZ2luOiA5NnB4IDAgMCAtOTBweDtcbiAgICAgIHdpZHRoOiA0NTZweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAuaW1hZ2V7XG4gICAgICAgIHdpZHRoOiAyMTJweCAhaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6IDMyMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMycHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgICAgIFxuICAgICAgICBpbWd7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIHdpZHRoOiAzMjBweDtcbiAgICAgICAgICBoZWlnaHQ6IDIxMnB4O1xuICAgICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgIGJvcmRlcjogMTBweCBzb2xpZCAjMzZiMDQ5OyAgIFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMzJweCAzMnB4IDAgMzJweDtcblxuICAmLWljb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG59XG5cbi5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvbnRlbnQgLnRpdGxlIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDQ4cHg7XG4gIGxpbmUtaGVpZ2h0OiA1MnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICAvLyBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAxKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2VhcmNoLWJ0bntcbiAgd2lkdGg6IDc2MHB4O1xuICBoZWlnaHQ6IDE2MHB4O1xufVxuXG4uaWNvbi13cmFwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDY0cHg7XG4gIGhlaWdodDogNjRweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMHB4IDEycHggMjBweCByZ2IoMCAwIDAgLyAyMCUpO1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmljb24td3JhcDpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbn1cblxuLm5leHQtYnRuIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMHB4IDEycHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICB3aWR0aDogMTQ0cHg7XG4gIGhlaWdodDogNjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbWFyZ2luLWxlZnQ6IDYyJTtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmFjdGl2ZS1idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNsaWNrLWxpc3Qge1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG5ib2R5Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAxZW07XG59XG5cbmJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbmJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZXk7XG4gIG91dGxpbmU6IDFweCBzb2xpZCBzbGF0ZWdyZXk7XG59XG5cbi5jYXJvdXNlbCB7XG4gIGhlaWdodDogNzc0cHg7XG59XG5cbi5zbGljayB7XG4gICYtc2xpZGVyIHtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuXG4gICYtbGlzdCB7XG4gICAgaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcbiAgfVxuXG4gICYtc2xpZGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LWZhbWlseTogXCJBcmlhbFwiLCBcIkhlbHZldGljYVwiO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMjglICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAxNnB4O1xuICAgIGltZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cblxuICAmLXRyYWNrIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIH1cbn1cblxuLmdhbGxlcnkge1xuICAmLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAzMnB4IDMycHggMCAzMnB4O1xuICAgICZfX2J0biB7XG4gICAgICB3aWR0aDogNjRweDtcbiAgICAgIGhlaWdodDogNjRweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgIGJveC1zaGFkb3c6IDBweCAxMnB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgICBtYXJnaW46IDBweCAxMnB4O1xuICAgIH1cbiAgfVxuXG4gICYtbWFpbiB7XG4gICAgcGFkZGluZzogMHB4IDY0cHg7XG5cbiAgICAvKi5saXN0LW5ldXJhbHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICBoZWlnaHQ6IDkwMHB4O1xuICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgIG92ZXJmbG93LXk6IG5vbmVcbiAgICB9Ki9cblxuICAgICZfX3RpdGxlIHtcbiAgICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC1zaXplOiA0OHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgICZfX3RpdGxlIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICB9XG59XG5cbi5pbWctYm94IHtcbiAgd2lkdGg6IDMyMHB4O1xuICBoZWlnaHQ6IDE4MHB4O1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIG91dGxpbmU6IG5vbmU7IFxuICB9XG59XG5cbi5hY3RpdmUtc2xpZGUge1xuICBib3JkZXI6IDEwcHggc29saWQgIzM2YjA0OTtcbiAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk7XG4gIHRvcDogODMycHg7XG4gIGxlZnQ6IDI2NnB4O1xuICBpbWcge1xuICAgIHdpZHRoOiA1MjBweDtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDQ0cHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgLy90cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpIHNjYWxlWCgtMSk7XG4gIH1cbn1cblxuLmltZy1ib3guYWN0aXZlLXNsaWRlIHtcbiAgYm9yZGVyOiAxMHB4IHNvbGlkICMzNmIwNDk7XG4gIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmFkZF9waG90byB7XG4gIHdpZHRoOiA3NjBweDtcbiAgaGVpZ2h0OiAxNjBweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMHB4IDIwcHggNDBweCByZ2JhKDMsIDc0LCAxMDQsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDQ0cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDEzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaW1ne1xuICAgIHdpZHRoOiA5NnB4O1xuICAgIGhlaWdodDogOTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gIH1cbiAgc3BhbiB7XG4gICAgZm9udC1mYW1pbHk6IFBhbnRvbjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDM4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gIH1cbn1cblxuLmdhbGxlcnlfd3JhcHtcbiAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zZWFyY2gtYnRuIHNwYW57XG4gIGZvbnQtc2l6ZTogMzhweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XG4gIGZvbnQtZmFtaWx5OiBQYW50b247XG59XG5cbi5pY29uLWNhbWVyYXtcbiAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xufVxuXG4uc2VsZmlfYnJhbmNoIC5zbGljay1zbGlkZXtcbiAgd2lkdGg6IDM2JSAhaW1wb3J0YW50O1xuICAuaW1nLWJveHtcbiAgICB3aWR0aDogMzIwcHg7XG4gICAgaGVpZ2h0OiAyMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA3NXB4O1xuICB9XG59XG5cbi5zZWxmaV9icmFuY2ggLnNsaWNrLXNsaWRlcntcbiAgaGVpZ2h0OiA3NDhweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDklICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4iLCIkd2lkdGgtY29udGVudDogOTQwcHg7XG4kcmFkaXVzLWNhbWVyYTogNjBweDsiXX0= */"] });


/***/ }),

/***/ "Fk/T":
/*!************************************************!*\
  !*** ./src/app/shared/mappers/photo.mapper.ts ***!
  \************************************************/
/*! exports provided: PhotoMapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoMapper", function() { return PhotoMapper; });
/* harmony import */ var src_app_core_interfaces_image_status_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/interfaces/image-status.enum */ "8spx");

class PhotoMapper {
    static formatToLocal(data) {
        let total = 0;
        data.map((item) => {
            total += Number(item.count || 0);
        });
        return {
            data,
            total
        };
    }
    static formatImageToLocal(data) {
        data.statusIsNoFace = data.status === src_app_core_interfaces_image_status_enum__WEBPACK_IMPORTED_MODULE_0__["ImageStatusEnum"].NoFace || !data.status;
        data.images.map((item) => {
            item.sumOfEmail = 0;
            item.sumOfPaper = 0;
            item.isChecked = false;
        });
        return data;
    }
}


/***/ }),

/***/ "J0yI":
/*!*********************************************!*\
  !*** ./src/app/core/mappers/date.mapper.ts ***!
  \*********************************************/
/*! exports provided: DateMapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateMapper", function() { return DateMapper; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);


class DateMapper {
    static formatNgbDateStruct(date) {
        const momentDate = moment__WEBPACK_IMPORTED_MODULE_1__(date);
        return {
            year: Number(momentDate.format('YYYY')),
            month: Number(momentDate.format('MM')),
            day: Number(momentDate.format('DD'))
        };
    }
    static getOutDates(array, from, to) {
        let outDates = [];
        let isWork = true;
        const momentFrom = moment__WEBPACK_IMPORTED_MODULE_1__(from);
        let start = new _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbDate"](Number(momentFrom.format('YYYY')), Number(momentFrom.format('MM')), Number(momentFrom.format('DD')));
        let toMoment = moment__WEBPACK_IMPORTED_MODULE_1__(to);
        let end = new _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbDate"](Number(toMoment.format('YYYY')), Number(toMoment.format('MM')), Number(toMoment.format('DD')));
        let currentDataM = momentFrom;
        let counter = 40;
        while (isWork) {
            counter--;
            currentDataM = moment__WEBPACK_IMPORTED_MODULE_1__(currentDataM).add(1, 'days');
            let currentDate = new _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbDate"](Number(currentDataM.format('YYYY')), Number(currentDataM.format('MM')), Number(currentDataM.format('DD')));
            if (currentDate.equals(end) || !counter) {
                isWork = false;
                continue;
            }
            if (array.includes(currentDataM.format('YYYY-MM-DD'))) {
                continue;
            }
            outDates.push(currentDate);
        }
        return outDates;
    }
}


/***/ }),

/***/ "JEeY":
/*!******************************************************!*\
  !*** ./src/app/interceptors/response.interceptor.ts ***!
  \******************************************************/
/*! exports provided: ResponseInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseInterceptor", function() { return ResponseInterceptor; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _modules_outer_config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/outer-config/config */ "myVS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/navigation.service */ "LFK6");





class ResponseInterceptor {
    constructor(navigationService) {
        this.navigationService = navigationService;
    }
    intercept(request, next) {
        if (request.url.includes((`${_modules_outer_config_config__WEBPACK_IMPORTED_MODULE_2__["Configuration"].host}api/client`))) {
            return next.handle(request);
        }
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((event) => {
            return event;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error) => {
            if (error && !this.navigationService.errorPage) {
                this.navigationService.errorPage = true;
            }
            ;
            // if (error.status === 401 || error.status === 624) {
            //   window.location.href = AppConfig.settings.authProviderUrl + btoa(window.location.href);
            // }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(error);
        }));
    }
}
ResponseInterceptor.ɵfac = function ResponseInterceptor_Factory(t) { return new (t || ResponseInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_4__["NavigationService"])); };
ResponseInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ResponseInterceptor, factory: ResponseInterceptor.ɵfac });


/***/ }),

/***/ "JEiN":
/*!***************************************************!*\
  !*** ./src/app/core/services/location.service.ts ***!
  \***************************************************/
/*! exports provided: LocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationService", function() { return LocationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class LocationService {
    constructor(http) {
        this.http = http;
    }
    getLocations() {
        return this.http.get(`assets/mocks/getLocations.json`);
    }
}
LocationService.ɵfac = function LocationService_Factory(t) { return new (t || LocationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
LocationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocationService, factory: LocationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "LFK6":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/navigation.service.ts ***!
  \*******************************************************/
/*! exports provided: NavigationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationService", function() { return NavigationService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class NavigationService {
    constructor(router) {
        this.router = router;
        this._next$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"]();
        this._back$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"]();
        this._error$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
    }
    get prev$() {
        return this._back$.asObservable();
    }
    get back() {
        return this._back$;
    }
    get back$() {
        return this._back$.asObservable();
    }
    set back(value) {
        this._back$.next(value);
    }
    get next$() {
        return this._next$.asObservable();
    }
    get errorPage$() {
        return this._error$.asObservable();
    }
    get errorPage() {
        return this._error$.getValue();
    }
    set errorPage(value) {
        this._error$.next(value);
    }
    navigate(rout) {
        this.router.navigate([rout]);
    }
    clearURL() {
        let url = this.router.url.substring(0, this.router.url.indexOf("?"));
        if (window.history.replaceState) {
            window.history.replaceState('statedata', 'title', url);
        }
    }
}
NavigationService.ɵfac = function NavigationService_Factory(t) { return new (t || NavigationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
NavigationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NavigationService, factory: NavigationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "OIb2":
/*!******************************************************************!*\
  !*** ./src/app/modules/download-module/social/social.service.ts ***!
  \******************************************************************/
/*! exports provided: SocialService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialService", function() { return SocialService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SocialService {
    constructor() { }
}
SocialService.ɵfac = function SocialService_Factory(t) { return new (t || SocialService)(); };
SocialService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SocialService, factory: SocialService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "PC4I":
/*!***************************************!*\
  !*** ./src/app/interceptors/index.ts ***!
  \***************************************/
/*! exports provided: HttpInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpInterceptorProviders", function() { return HttpInterceptorProviders; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _expiry_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expiry.interceptor */ "0sSX");
/* harmony import */ var _host_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./host.interceptor */ "wMwq");
/* harmony import */ var _response_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./response.interceptor */ "JEeY");




const HttpInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _host_interceptor__WEBPACK_IMPORTED_MODULE_2__["HostInterceptor"], multi: true },
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _response_interceptor__WEBPACK_IMPORTED_MODULE_3__["ResponseInterceptor"], multi: true },
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _expiry_interceptor__WEBPACK_IMPORTED_MODULE_1__["ExpiryInterceptor"], multi: true }
];


/***/ }),

/***/ "QWKc":
/*!***************************************************!*\
  !*** ./src/app/components/cart/cart.component.ts ***!
  \***************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core */ "ey9i");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_services_howPrint_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/howPrint.service */ "krGR");
/* harmony import */ var src_app_shared_services_broker_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/broker.service */ "VsY3");
/* harmony import */ var src_app_shared_services_client_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/client.service */ "oR8h");
/* harmony import */ var src_app_shared_services_session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/session.service */ "mZtN");
/* harmony import */ var src_app_shared_services_photo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/photo.service */ "ny42");
/* harmony import */ var src_app_shared_services_mocks_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/mocks.service */ "kj9m");
/* harmony import */ var src_app_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/navigation.service */ "LFK6");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-slick-carousel */ "eSVu");














const _c0 = ["modalDataAdd"];
function CartComponent_div_7_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CartComponent_div_7_div_7_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](11); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.triggerModal(_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CartComponent_div_7_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0444\u043E\u0442\u043E");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CartComponent_div_7_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CartComponent_div_7_ng_template_10_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r12.onMakePhoto(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u0444\u043E\u0442\u043E");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CartComponent_div_7_ng_template_10_Template_div_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r14.onFindPhoto(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\u041D\u0430\u0439\u0442\u0438 \u0444\u043E\u0442\u043E");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CartComponent_div_7_ng_template_10_Template_div_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r15.onDuplicatePhoto(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\u0414\u0443\u0431\u043B\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0444\u043E\u0442\u043E");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CartComponent_div_7_ng_template_10_Template_div_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r16.onLoadPhonePhoto(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0438\u0437 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CartComponent_div_7_ng_template_10_Template_div_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r17.onLoadNetworkPhoto(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0438\u0437 \u0441\u043E\u0446. \u0441\u0435\u0442\u0435\u0439 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CartComponent_div_7_div_30_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CartComponent_div_7_div_30_div_16_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](9); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r21.triggerModal(_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0444\u043E\u0442\u043E");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CartComponent_div_7_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CartComponent_div_7_div_30_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24); const slide_r18 = ctx.$implicit; const i_r19 = ctx.index; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r23.onSelectItem(slide_r18, i_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CartComponent_div_7_div_30_Template_img_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24); const slide_r18 = ctx.$implicit; const i_r19 = ctx.index; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r25.onRemoveItem(slide_r18, i_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\u0411\u0443\u043C\u0430\u0433\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\u0448\u0442.\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\u20BD");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, CartComponent_div_7_div_30_div_16_Template, 4, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r18 = ctx.$implicit;
    const i_r19 = ctx.index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active-slide", i_r19 == ctx_r7.elementActiveIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", slide_r18.originalUri, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("img_delete_visib", slide_r18.isCheckedOnCart);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](slide_r18.totalCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](slide_r18.totalPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r19 == ctx_r7.l);
} }
function CartComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0412\u0430\u0448 \u0437\u0430\u043A\u0430\u0437");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, CartComponent_div_7_div_7_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, CartComponent_div_7_ng_template_8_Template, 4, 0, "ng-template", 14, 15, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, CartComponent_div_7_ng_template_10_Template, 20, 0, "ng-template", 16, 17, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CartComponent_div_7_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r26.counterFunc(ctx_r26.activeSlide, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CartComponent_div_7_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r28.counterFunc(ctx_r28.activeSlide); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "ngx-slick-carousel", 28, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, CartComponent_div_7_div_30_Template, 17, 8, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CartComponent_div_7_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r29.goNext(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "\u041E\u043F\u043B\u0430\u0442\u0438\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r0.activePhoto, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("ngClass", ctx_r0.sessionService.branch == "Selfie" ? "vertical" : "horizontal");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.printMaterial);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.terminalLocation);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r0.activeSlide.totalCount == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.activeSlide.totalCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r0.activeSlide.totalCount == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r0.activeSlide.totalPrice, " \u20BD");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("config", ctx_r0.slideConfig);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.slides);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r0.sumCount == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r0.sumCount, " \u20BD");
} }
class CartComponent {
    constructor(modalService, router, printService, brokerService, clientService, sessionService, photoService, mocks, navigate) {
        this.modalService = modalService;
        this.router = router;
        this.printService = printService;
        this.brokerService = brokerService;
        this.clientService = clientService;
        this.sessionService = sessionService;
        this.photoService = photoService;
        this.mocks = mocks;
        this.navigate = navigate;
        this.slides = [];
        this.sumCount = 0;
        this.elementActiveIndex = 0;
        this.count = 0;
        this.l = -1;
        // public disabledCountBtn:boolean = false;
        this.slideConfig = {
            autoplay: false,
            vertical: false,
            verticalSwiping: false,
            slidesToShow: 3,
            slidesToScroll: 3,
            centerMode: false,
            arrows: true,
            infinite: false,
        };
    }
    ngOnInit() {
        src_app_core__WEBPACK_IMPORTED_MODULE_1__["ActivityMode"].startTimer();
        this.terminalLocation = this.clientService.location;
        this.navigate.clearURL();
        /*FOR TEST*/
        // this.slides = this.mocks.getMockMassive();
        /*FOR PROD*/
        this.slides = this.clientService.photoToCart;
        this.slides.map((item) => {
            item.isCheckedOnCart = false;
            item.totalPrice = this.brokerService.priceForPaper;
            item.totalCount = 1;
            item.sumOfPaper = 1;
            item.sumOfEmail = 0;
            return item;
        });
        this.photoService.photo = this.slides;
        this.sumCount = this.slides.length * this.brokerService.priceForPaper;
        this.brokerService.sumForPay = this.sumCount;
        this.clientService.photoCountInOrder = this.slides.length;
        this.activePhoto = this.getImageUrl(this.slides[0]);
        this.slides[0].isCheckedOnCart = true;
        this.activeSlide = this.slides[0];
        if (this.printService.material == 'Paper') {
            this.printMaterial = "На бумаге";
            this.price = this.brokerService.priceForPaper;
        }
        if (this.printService.material == 'Magnite') {
            this.printMaterial = "На магните";
            this.price = 200;
        }
    }
    getImageUrl(image) {
        if (this.sessionService.branch == 'Neural') {
            return image.thumbUri;
        }
        return image.originalUri;
    }
    triggerModal(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((res) => {
            this.closeModal = `Closed with: ${res}`;
        }, (res) => {
            this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    openModal() {
        this.modalService.open(this.content, { centered: true });
    }
    onSelectItem(slide, index) {
        if (this.activeSlide) {
            this.activeSlide.isCheckedOnCart = false;
        }
        this.activeSlide = slide;
        this.activePhoto = this.getImageUrl(this.activeSlide);
        this.activeSlide.isCheckedOnCart = !(this.activeSlide.isCheckedOnCart == true);
        this.elementActiveIndex = index;
    }
    onRemoveItem(slide, index) {
        this.sumCount -= this.activeSlide.totalPrice;
        this.brokerService.sumForPay = this.sumCount;
        this.slides.splice(index, 1);
        this.clientService.photoCountInOrder = this.slides.length;
        this.count = 0;
        this.activeSlide.totalPrice = 0;
        this.activeSlide.totalCount = 0;
        this.activePhoto = "././assets/static/img/add.png";
        index = index ? index - 1 : 0;
        this.onSelectItem(this.slides[index], index);
    }
    getSelectedPhoto(event) {
        this.photoService.photo = event;
    }
    counterFunc(slide, increase) {
        if (increase == true) {
            this.count--;
            this.sumCount -= this.brokerService.priceForPaper;
            this.activeSlide.totalPrice -= this.brokerService.priceForPaper;
            this.activeSlide.totalCount -= 1;
            this.brokerService.sumForPay = this.sumCount;
            return;
        }
        this.count++;
        this.sumCount += this.brokerService.priceForPaper;
        this.activeSlide.totalPrice += this.brokerService.priceForPaper;
        this.activeSlide.totalCount += 1;
        this.brokerService.sumForPay = this.sumCount;
    }
    goBack() {
        this.router.navigate(['howPrint']);
    }
    goHome() {
        this.router.navigate(['']);
    }
    goNext() {
        this.router.navigate(['paymentFormat']);
    }
    onMakePhoto() {
        this.modalService.dismissAll('close');
        this.router.navigate(['selfie']);
    }
    onFindPhoto() {
        this.modalService.dismissAll('close');
        this.router.navigate(['neural']);
    }
    onDuplicatePhoto() {
    }
    onLoadPhonePhoto() {
    }
    onLoadNetworkPhoto() {
    }
}
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_howPrint_service__WEBPACK_IMPORTED_MODULE_4__["HowPrintService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_broker_service__WEBPACK_IMPORTED_MODULE_5__["BrokerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_client_service__WEBPACK_IMPORTED_MODULE_6__["ClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_photo_service__WEBPACK_IMPORTED_MODULE_8__["PhotoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_mocks_service__WEBPACK_IMPORTED_MODULE_9__["MocksService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_10__["NavigationService"])); };
CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["app-cart"]], viewQuery: function CartComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    } }, decls: 8, vars: 1, consts: [[1, "slot", 2, "height", "1180px"], [1, "header"], [1, "header-icons"], [1, "icon-wrap", 3, "click"], [1, "icon", "icon-back"], [1, "icon", "icon-home"], ["class", "content cart-content", 4, "ngIf"], [1, "content", "cart-content"], [1, "title"], [1, "func_wrap"], [1, "photo-block"], [1, "block"], ["alt", "", 3, "src", "ngClass"], ["class", "icon-wrap", 3, "click", 4, "ngIf"], ["class", "cart-popup", "style", "margin: 33% auto !important;"], ["modalData", ""], ["class", "cart-popup"], ["modalDataAdd", ""], [1, "price-block"], [1, "price-title"], [1, "counter-block"], [1, "icon-wrap", "counter-btn", "btn-minus", 3, "disabled", "click"], [1, "icon", "icon-minus"], [1, "item-count", "count"], [1, "icon-wrap", "counter-btn", "btn-plus", 3, "disabled", "click"], [1, "icon", "icon-plus"], [1, "price-count", "count"], [1, "slider-main"], [1, "carousel", 3, "config"], ["slickModal", "slick-carousel"], ["ngxSlickItem", "", "class", "slide", 4, "ngFor", "ngForOf"], [1, "payment-btn", 3, "disabled", "click"], [1, "icon", "icon-pay-card"], [1, "icon", "icon-edit"], [1, "cart-popup__content"], ["src", "././assets/static/img/add.png"], [1, "cart-popup__content", 3, "click"], ["src", "././assets/static/img/photo-cart.png"], [1, "add"], ["src", "././assets/static/img/search-cart.png"], ["src", "././assets/static/img/copy-card.png"], ["src", "././assets/static/img/download-cart.png"], ["src", "././assets/static/img/vk-cart.png"], ["ngxSlickItem", "", 1, "slide"], [1, "wrap"], [1, "img-box", 3, "click"], ["alt", "", 1, "img-box__preview", 3, "src"], ["src", "../../../assets/img/close.svg", 1, "img_delete", 3, "click"], [1, "how-print"], [1, "slider-counter"], ["class", "img-box__add", 3, "click", 4, "ngIf"], [1, "img-box__add", 3, "click"], [1, "img_add"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CartComponent_Template_div_click_3_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CartComponent_Template_div_click_5_listener() { return ctx.goHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, CartComponent_div_7_Template, 37, 13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.slides);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_12__["SlickCarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_12__["SlickItemDirective"]], styles: [".slot[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border-radius: 60px;\n  display: flex;\n  flex-direction: column;\n  background: rgba(255, 255, 255, 0.7);\n  -webkit-backdrop-filter: blur(94px);\n          backdrop-filter: blur(94px);\n  border-radius: 60px;\n}\n\n.cart-popup__content[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.icon-wrap[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  padding: 32px 32px 0 32px;\n}\n\n.header-icons[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-size: 48px;\n  line-height: 52px;\n  font-weight: 600;\n  margin-top: 12px;\n  color: black;\n  text-align: center;\n}\n\n.icon-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  width: 64px;\n  height: 64px;\n  background: #ffffff;\n  box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.2);\n  border-radius: 100px;\n  align-items: center;\n  justify-content: center;\n}\n\n.icon-wrap[_ngcontent-%COMP%]:first-child {\n  margin-right: 12px;\n}\n\n.func_wrap[_ngcontent-%COMP%] {\n  display: flex;\n  width: 724px;\n  justify-content: space-between;\n  margin-top: 54px;\n}\n\n.photo-block[_ngcontent-%COMP%] {\n  width: 254px;\n  height: 316px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.photo-block[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%] {\n  width: 316px;\n  height: 208px;\n  position: relative;\n  background: rgba(255, 255, 255, 0.5);\n  box-shadow: 0px 15px 30px rgba(3, 74, 104, 0.1);\n  border-radius: 16px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.photo-block[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 316px;\n  max-height: 208px;\n  border-radius: 16px;\n}\n\n.photo-block[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .icon-wrap[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  left: 10px;\n  bottom: 10px;\n}\n\n.price-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.price-block[_ngcontent-%COMP%]   .price-title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.price-block[_ngcontent-%COMP%]   .price-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  font-size: 38px;\n  font-style: normal;\n  line-height: 40px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: #000000;\n  font-weight: 600;\n  margin-bottom: 8px;\n}\n\n.price-block[_ngcontent-%COMP%]   .price-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  font-style: normal;\n  font-size: 20px;\n  line-height: 22px;\n  color: rgba(0, 0, 0, 0.4);\n  font-weight: 600;\n  margin-bottom: 32px;\n}\n\n.price-block[_ngcontent-%COMP%]   .counter-block[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.price-block[_ngcontent-%COMP%]   .counter-block[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 48px;\n  line-height: 52px;\n  font-style: normal;\n  margin-right: 22px;\n  margin-left: 22px;\n}\n\n.price-block[_ngcontent-%COMP%]   .counter-block[_ngcontent-%COMP%]   .icon-wrap[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  margin-right: 0px;\n}\n\n.slider-main[_ngcontent-%COMP%] {\n  width: 888px;\n  height: 286px;\n  margin-bottom: 60px;\n}\n\n.slider-main[_ngcontent-%COMP%]   .img-box__preview[_ngcontent-%COMP%] {\n  max-width: 148px;\n  max-height: 106px;\n  object-fit: fill;\n  width: 100%;\n  height: 100%;\n}\n\n.slider-main[_ngcontent-%COMP%]   .img-box__preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: auto;\n  width: auto;\n}\n\n.slick-slider[_ngcontent-%COMP%] {\n  width: auto;\n}\n\n.slick-list[_ngcontent-%COMP%] {\n  height: 90% !important;\n}\n\n.slick-slide[_ngcontent-%COMP%] {\n  display: flex;\n  color: white;\n  font-size: 30px;\n  text-align: center;\n  width: 212px !important;\n  margin-left: 6px;\n  margin-right: 6px;\n}\n\n.slick-slide[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\n  width: 212px;\n  height: 286px;\n  display: flex;\n  flex-direction: column;\n  margin-left: 12px;\n  margin-right: 12px;\n}\n\n.slick-slide[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%] {\n  width: 212px;\n  height: 150px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.5);\n  box-shadow: 0px 15px 30px rgba(3, 74, 104, 0.1);\n  border-radius: 44px;\n  cursor: pointer;\n  position: relative;\n}\n\n.slick-slide[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  object-fit: contain;\n}\n\n.slick-slide[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]   .icon-wrap[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  position: absolute;\n  bottom: -17px;\n  right: -17px;\n}\n\n.slick-slide[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .how-print[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 28px;\n  line-height: 30px;\n  font-style: normal;\n  color: #000000;\n  margin-top: 12px;\n  margin-bottom: 8px;\n}\n\n.slick-slide[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .slider-counter[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-size: 20px;\n  line-height: 22px;\n  font-weight: bold;\n  color: rgba(0, 0, 0, 0.4);\n}\n\n.slick-track[_ngcontent-%COMP%] {\n  display: flex;\n  margin-left: 0px !important;\n  margin-right: 0px !important;\n}\n\n\n\n.img-box.active-slide[_ngcontent-%COMP%] {\n  border: 10px solid #36b049;\n  position: relative;\n}\n\n.img_delete[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -16px;\n  bottom: -16px;\n  display: none;\n  width: 44px;\n  height: 44px;\n  background: #ffffff;\n  box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.2);\n  border-radius: 100px;\n  cursor: pointer;\n}\n\n.img_delete_visib[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.payment-btn[_ngcontent-%COMP%] {\n  width: 760px;\n  height: 160px;\n  background: #ffffff;\n  box-shadow: 0px 20px 40px rgba(3, 74, 104, 0.2);\n  border-radius: 44px;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.payment-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 32px;\n}\n\n.payment-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Raleway\", sans-serif;\n  color: #000000;\n  font-weight: 600;\n  font-size: 38px;\n  line-height: 40px;\n  margin-right: 20px;\n}\n\n.payment-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  margin-right: 0px;\n}\n\n.payment-btn[disabled][_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n.btn-minus[disabled][_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n.btn-plus[disabled][_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n.counter-btn[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.cart-popup[_ngcontent-%COMP%] {\n  margin: 33% auto !important;\n}\n\n.cart-popup__content[_ngcontent-%COMP%] {\n  display: flex;\n  font-weight: 600;\n  font-size: 28px;\n  align-items: center;\n  margin: 8px 0;\n}\n\n.cart-popup__content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-left: 24px;\n  margin-top: 12px;\n}\n\n.cart-popup__content[_ngcontent-%COMP%]   .add[_ngcontent-%COMP%] {\n  width: 180px;\n}\n\n.img-box__add[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.5);\n  box-shadow: rgba(3, 74, 104, 0.1) 0px 15px 30px;\n  border-radius: 44px;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  padding: 32px 38px;\n  margin: 0px 0px;\n  height: 191px;\n  width: 212px;\n  text-align: center;\n}\n\n.img-box__add[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: initial !important;\n}\n\n.img_add[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 20px;\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  margin: 33% auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUdBLG9DQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBSUk7RUFDSSxlQUFBO0FBRFI7O0FBSUE7RUFDSSxlQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFESjs7QUFHSTtFQUNJLGFBQUE7QUFEUjs7QUFLQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBRko7O0FBS0E7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxZQUFBO0VBQ0Esa0JBQUE7QUFISjs7QUFNQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsNENBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFISjs7QUFNQTtFQUNJLGtCQUFBO0FBSEo7O0FBTUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBRUEsZ0JBQUE7QUFKSjs7QUFPQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFKSjs7QUFNSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLCtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBSlI7O0FBTVE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFKWjs7QUFPUTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBTFo7O0FBVUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUFQSjs7QUFVSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQVJSOztBQVNRO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBRUEsa0JBQUE7QUFSWjs7QUFVUTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBRUEseUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBVFo7O0FBYUk7RUFDSSxhQUFBO0FBWFI7O0FBWVE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxpQkFBQTtBQVhaOztBQWNRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQVpaOztBQWlCQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFkSjs7QUFnQlE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQWRaOztBQWVZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFiaEI7O0FBb0JJO0VBQ0ksV0FBQTtBQWpCUjs7QUFvQkk7RUFDSSxzQkFBQTtBQWxCUjs7QUFxQkk7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFFQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQXBCUjs7QUFxQlE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFuQlo7O0FBb0JZO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0NBQUE7RUFDQSwrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBbEJoQjs7QUFtQmdCO0VBQ0ksbUJBQUE7QUFqQnBCOztBQW1CZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFqQnBCOztBQW9CWTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQW5CaEI7O0FBc0JZO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUVBLHlCQUFBO0FBckJoQjs7QUEwQkk7RUFDSSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQXhCUjs7QUE0QkE7Ozs7Ozs7OztFQUFBOztBQVdBO0VBQ0ksMEJBQUE7RUFDQSxrQkFBQTtBQTFCSjs7QUE2QkE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQTFCSjs7QUE2QkU7RUFDRSxjQUFBO0FBMUJKOztBQTZCQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBMUJKOztBQTRCSTtFQUNJLGtCQUFBO0FBMUJSOztBQTZCSTtFQUNJLGtDQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUEzQlI7O0FBaUNJO0VBQ0ksaUJBQUE7QUEvQlI7O0FBbUNBO0VBQ0ksWUFBQTtBQWhDSjs7QUFtQ0E7RUFDSSxZQUFBO0FBaENKOztBQW1DQTtFQUNJLFlBQUE7QUFoQ0o7O0FBbUNBO0VBQ0ksWUFBQTtBQWhDSjs7QUFvQ0k7RUFDSSwyQkFBQTtBQWpDUjs7QUF1Q1E7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBckNaOztBQXVDWTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUFyQ2hCOztBQXVDWTtFQUNJLFlBQUE7QUFyQ2hCOztBQTJDQTtFQUNJLG9DQUFBO0VBQ0EsK0NBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUF4Q0o7O0FBeUNJO0VBQ0ksMkJBQUE7QUF2Q1I7O0FBMkNBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUF4Q0o7O0FBMkNBO0VBQ0ksZ0JBQUE7QUF4Q0oiLCJmaWxlIjoiY2FydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbG90IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLy8gZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcblxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOTRweCk7XG4gICAgYm9yZGVyLXJhZGl1czogNjBweDtcbn1cbi5jYXJ0LXBvcHVwe1xuICAgICZfX2NvbnRlbnQge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufVxuLmljb24td3JhcCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAzMnB4IDMycHggMCAzMnB4O1xuXG4gICAgJi1pY29ucyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxufVxuXG4uY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb250ZW50IC50aXRsZSB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICBsaW5lLWhlaWdodDogNTJweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgLy8gZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAxKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pY29uLXdyYXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDY0cHg7XG4gICAgaGVpZ2h0OiA2NHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgYm94LXNoYWRvdzogMHB4IDEycHggMjBweCByZ2IoMCAwIDAgLyAyMCUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pY29uLXdyYXA6Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi1yaWdodDogMTJweDtcbn1cblxuLmZ1bmNfd3JhcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogNzI0cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIC8vIG1hcmdpbi1ib3R0b206IDU4cHg7XG4gICAgbWFyZ2luLXRvcDogNTRweDtcbn1cblxuLnBob3RvLWJsb2NrIHtcbiAgICB3aWR0aDogMjU0cHg7XG4gICAgaGVpZ2h0OiAzMTZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgLmJsb2NrIHtcbiAgICAgICAgd2lkdGg6IDMxNnB4O1xuICAgICAgICBoZWlnaHQ6IDIwOHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDE1cHggMzBweCByZ2IoMyA3NCAxMDQgLyAxMCUpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICBpbWcge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAzMTZweDtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDIwOHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDsgICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIC5pY29uLXdyYXAge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICAgICAgICBib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5wcmljZS1ibG9jayB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgLnByaWNlLXRpdGxlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgc3BhbjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDM4cHg7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwZW07XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgLy8gZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgfVxuICAgICAgICBzcGFuOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgICAgICAvLyBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmNvdW50ZXItYmxvY2sge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAuY291bnQge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MnB4O1xuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgLy8gZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjJweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmljb24td3JhcCB7XG4gICAgICAgICAgICB3aWR0aDogNTZweDtcbiAgICAgICAgICAgIGhlaWdodDogNTZweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uc2xpZGVyLW1haW4ge1xuICAgIHdpZHRoOiA4ODhweDtcbiAgICBoZWlnaHQ6IDI4NnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XG4gICAgLmltZy1ib3h7XG4gICAgICAgICZfX3ByZXZpZXcge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxNDhweDtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwNnB4O1xuICAgICAgICAgICAgb2JqZWN0LWZpdDogZmlsbDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5zbGljayB7XG4gICAgJi1zbGlkZXIge1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICB9XG5cbiAgICAmLWxpc3Qge1xuICAgICAgICBoZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgICYtc2xpZGUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgLy8gICBmb250LWZhbWlseTogXCJBcmlhbFwiLCBcIkhlbHZldGljYVwiO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAyMTJweCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tbGVmdDogNnB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgICAgICAgLndyYXAge1xuICAgICAgICAgICAgd2lkdGg6IDIxMnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyODZweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgICAgICAgICAuaW1nLWJveCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDIxMnB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDMwcHggcmdiYSgzLCA3NCwgMTA0LCAwLjEpO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDQ0cHg7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuaWNvbi13cmFwIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ4cHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IC0xN3B4O1xuICAgICAgICAgICAgICAgICAgICByaWdodDogLTE3cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmhvdy1wcmludCB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgICAgIC8vIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zbGlkZXItY291bnRlciBzcGFuIHtcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIC8vIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtdHJhY2sge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG4vKmltZ3tcbiAgICAmLnZlcnRpY2FsIHtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICB9XG4gICAgJi5ob3Jpem9udGFsIHtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICB9XG59Ki9cblxuLmltZy1ib3guYWN0aXZlLXNsaWRlIHtcbiAgICBib3JkZXI6IDEwcHggc29saWQgIzM2YjA0OTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pbWdfZGVsZXRlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IC0xNnB4O1xuICAgIGJvdHRvbTogLTE2cHg7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB3aWR0aDogNDRweDtcbiAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBib3gtc2hhZG93OiAwcHggMTJweCAyMHB4IHJnYigwIDAgMCAvIDIwJSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICAuaW1nX2RlbGV0ZV92aXNpYntcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4ucGF5bWVudC1idG4ge1xuICAgIHdpZHRoOiA3NjBweDtcbiAgICBoZWlnaHQ6IDE2MHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgYm94LXNoYWRvdzogMHB4IDIwcHggNDBweCByZ2JhKDMsIDc0LCAxMDQsIDAuMik7XG4gICAgYm9yZGVyLXJhZGl1czogNDRweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgaSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMzJweDtcbiAgICB9XG5cbiAgICBzcGFuIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBzYW5zLXNlcmlmO1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAzOHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIH1cbiAgICBzcGFuOm50aC1jaGlsZCgzKSB7XG4gICAgICAgIC8vIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgICAgIC8vIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgIH1cbiAgICBzcGFuOmxhc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICB9XG59XG5cbi5wYXltZW50LWJ0bltkaXNhYmxlZF0ge1xuICAgIG9wYWNpdHk6IDAuNTtcbn1cblxuLmJ0bi1taW51c1tkaXNhYmxlZF0ge1xuICAgIG9wYWNpdHk6IDAuNTtcbn1cblxuLmJ0bi1wbHVzW2Rpc2FibGVkXSB7XG4gICAgb3BhY2l0eTogMC41O1xufVxuXG4uY291bnRlci1idG4ge1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLmNhcnQge1xuICAgICYtcG9wdXAge1xuICAgICAgICBtYXJnaW46IDMzJSBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgIC5tb2RhbCB7XG4gICAgICAgICAgICAmLWNvbnRlbnQge1xuICAgICAgICAgICAgICAgIC8vICAgd2lkdGg6IDM2NXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJl9fY29udGVudCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW46IDhweCAwO1xuXG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjRweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFkZCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE4MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uaW1nLWJveF9fYWRkIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gICAgYm94LXNoYWRvdzogcmdiKDMgNzQgMTA0IC8gMTAlKSAwcHggMTVweCAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDQ0cHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIHBhZGRpbmc6IDMycHggMzhweDtcbiAgICBtYXJnaW46IDBweCAwcHg7XG4gICAgaGVpZ2h0OiAxOTFweDtcbiAgICB3aWR0aDogMjEycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGltZ3tcbiAgICAgICAgZGlzcGxheTogaW5pdGlhbCAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuLmltZ19hZGQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4ubW9kYWwtY29udGVudCB7XG4gICAgbWFyZ2luOiAzMyUgYXV0bztcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "S90J":
/*!*****************************************************************!*\
  !*** ./src/app/components/error-popup/error-popup.component.ts ***!
  \*****************************************************************/
/*! exports provided: ErrorPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPopupComponent", function() { return ErrorPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core */ "ey9i");
/* harmony import */ var src_app_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/navigation.service */ "LFK6");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");







const _c0 = ["modalData"];
function ErrorPopupComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041E\u0448\u0438\u0431\u043A\u0430 \u043E\u043F\u043B\u0430\u0442\u044B");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u041E\u043F\u043B\u0430\u0442\u0430 \u043D\u0435 \u043F\u0440\u043E\u0448\u043B\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ErrorPopupComponent_ng_template_1_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const modal_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); modal_r2.close("Save click"); return ctx_r3.onRouter(""); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041E\u041A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ErrorPopupComponent_ng_template_1_Template_div_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const modal_r2 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); modal_r2.close("Save click"); return ctx_r5.onRouter("gallery"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ErrorPopupComponent_ng_template_1_Template_div_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const modal_r2 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); modal_r2.close("Save click"); return ctx_r6.onRouter(""); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ErrorPopupComponent {
    constructor(modalService, navigateService, router) {
        this.modalService = modalService;
        this.navigateService = navigateService;
        this.router = router;
        this.redirect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    triggerModal(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((res) => {
            this.closeModal = `Closed with: ${res}`;
        }, (res) => {
            this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    ngAfterViewInit() {
        this.triggerModal(this.content);
        if (!this.isChild) {
            src_app_core__WEBPACK_IMPORTED_MODULE_2__["ActivityMode"].startTimer();
        }
    }
    ngOnInit() {
        this.navigateService.clearURL();
    }
    onRouter(router) {
        if (this.isChild) {
            this.redirect.emit(router);
            return;
        }
        this.router.navigate([router]);
    }
}
ErrorPopupComponent.ɵfac = function ErrorPopupComponent_Factory(t) { return new (t || ErrorPopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_3__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
ErrorPopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorPopupComponent, selectors: [["app-error-popup"]], viewQuery: function ErrorPopupComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    } }, inputs: { isChild: "isChild" }, outputs: { redirect: "redirect" }, decls: 3, vars: 2, consts: [[1, "error"], ["modalData", ""], [1, "error-title"], [1, "error-description"], ["type", "button", 1, "error-btn", 3, "click"], [1, "header-icons"], [1, "icon-wrap", 3, "click"], [1, "icon", "icon-back"], [1, "icon", "icon-home"]], template: function ErrorPopupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ErrorPopupComponent_ng_template_1_Template, 11, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-child", ctx.isChild);
    } }, styles: [".icon-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  width: 64px;\n  height: 64px;\n  background: #ffffff;\n  box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.2);\n  border-radius: 100px;\n  align-items: center;\n  justify-content: center;\n}\n\n.icon-wrap[_ngcontent-%COMP%]:first-child {\n  margin-right: 12px;\n}\n\n.header-icons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding-top: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Vycm9yLXBvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBQUoiLCJmaWxlIjoiZXJyb3ItcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5pY29uLXdyYXB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogNjRweDtcbiAgICBoZWlnaHQ6IDY0cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBib3gtc2hhZG93OiAwcHggMTJweCAyMHB4IHJnYigwIDAgMCAvIDIwJSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmljb24td3JhcDpmaXJzdC1jaGlsZHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG59XG5cbi5oZWFkZXItaWNvbnN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogMjRweDtcbn0iXX0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent, StepEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepEnum", function() { return StepEnum; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animation */ "38kq");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core */ "ey9i");
/* harmony import */ var _modules_outer_config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/outer-config/config */ "myVS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/services/session.service */ "mZtN");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/services/date.service */ "BIm4");
/* harmony import */ var _shared_services_client_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/services/client.service */ "oR8h");
/* harmony import */ var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/services/navigation.service */ "LFK6");
/* harmony import */ var _core_directives_activity_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/directives/activity.directive */ "vRWC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");














const _c0 = ["serviceNotWorking"];
function AppComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "router-outlet", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("cancel", function AppComponent_ng_container_3_Template_router_outlet_cancel_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r4.cancel($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@routeAnimations", ctx_r0.prepareRoute(_r3));
} }
function AppComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " \u0421\u0435\u0440\u0432\u0438\u0441 \u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E \u043D\u0435 \u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(sessionService, router, modalService, dateService, clientService, navigateService) {
        this.sessionService = sessionService;
        this.router = router;
        this.modalService = modalService;
        this.dateService = dateService;
        this.clientService = clientService;
        this.navigateService = navigateService;
        this.title = 'lomobile-front';
        this.steps = StepEnum.User;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"]();
        this.loading = false;
        this.animationsDisabled = false;
        this.fotobot = false;
        _core__WEBPACK_IMPORTED_MODULE_3__["ActivityMode"].setRoute(this.router);
        this.navigateService.errorPage$.subscribe(item => {
            if (!item) {
                return;
            }
            this.modalService.open(this.serviceNotWorking, { ariaLabelledBy: 'modal-basic-title' });
            setTimeout(() => {
                this.modalService.dismissAll();
            }, 15000);
        });
    }
    prepareRoute(outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
    }
    toggleAnimations() {
        this.animationsDisabled = !this.animationsDisabled;
    }
    ngOnInit() {
        this.clientService.getClient().subscribe((item) => {
            this.clientService.currentDevice = item;
            let typePage = item.setting.main_page;
            switch (typePage) {
                case 'neural_network_or_photo_bot':
                    this.navigateService.navigate('neural');
                    if (item.locationTypeId == 1) {
                        this.navigateService.navigate('gallery');
                        this.navigateService.photoForSearch = 'photoBot';
                        this.sessionService.branch = 'Neural';
                    }
                    else {
                        this.navigateService.navigate('neural');
                    }
                    break;
                case 'home':
                    this.navigateService.navigate('main-new');
                    break;
                case 'test':
                    this.navigateService.navigate('test');
                    break;
                case 'facebook':
                    console.log('fb');
                    break;
                case 'instagram':
                    console.log('inst');
                    break;
                case 'vk':
                    console.log('vk');
                    break;
                default:
                    this.navigateService.navigate('main');
                    break;
            }
        });
        this.sessionService.activity$
            .subscribe((item) => {
            switch (this.steps) {
                case StepEnum.Guest: {
                    this.loading = true;
                    setTimeout(() => {
                        this.loading = false;
                        this.steps = item ? StepEnum.User : StepEnum.Guest;
                    }, 1000);
                    break;
                }
                case StepEnum.Exit: {
                    this.steps = StepEnum.Guest;
                    break;
                }
            }
            this.subscription.unsubscribe();
            if (item) {
                this.subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["interval"])(Number(_modules_outer_config_config__WEBPACK_IMPORTED_MODULE_4__["Configuration"].session.expiryDate)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(val => {
                    this.steps = StepEnum.Guest;
                    this.sessionService.session = null;
                    // location.reload();
                });
            }
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    cancel($event) {
        this.sessionService.session = null;
        this.steps = StepEnum.Exit;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_date_service__WEBPACK_IMPORTED_MODULE_9__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_client_service__WEBPACK_IMPORTED_MODULE_10__["ClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_11__["NavigationService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.serviceNotWorking = _t.first);
    } }, hostVars: 1, hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsyntheticHostProperty"]("@.disabled", ctx.animationsDisabled);
    } }, decls: 8, vars: 2, consts: [["app-activity", "", 1, "main"], [1, "main-container"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["app-activity", ""], ["name", "wifi"], ["class", "cart-popup", "style", "margin: 33% auto !important;"], ["serviceNotWorking", ""], [3, "cancel"], ["outlet", "outlet"], [1, "message"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AppComponent_ng_container_3_Template, 4, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "router-outlet", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, AppComponent_ng_template_6_Template, 2, 0, "ng-template", 6, 7, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitch", ctx.steps);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", "User");
    } }, directives: [_core_directives_activity_directive__WEBPACK_IMPORTED_MODULE_12__["ActivityDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgSwitchCase"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"]], styles: [".main[_ngcontent-%COMP%] {\n  height: 100vh;\n  background-image: url(/./assets/static/img/bg.jpg);\n  background-size: cover;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.main-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  border-radius: 60px;\n}\nbody.flash[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%] {\n  background-image: none !important;\n}\n.background-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%] {\n  width: 1080px;\n  background-image: url(/./assets/static/img/bg.jpg);\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.slick-list.draggable[_ngcontent-%COMP%] {\n  height: 880px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGFBQUE7RUFDQSxrREFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUVJO0VBRUksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFEUjtBQUdJO0VBQ0ksaUNBQUE7QUFEUjtBQU9JO0VBQ0ksYUFBQTtFQUNBLGtEQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBSlI7QUFRQTtFQUNJLGFBQUE7QUFMSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5tYWluIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKC8uL2Fzc2V0cy9zdGF0aWMvaW1nL2JnLmpwZyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAmLWNvbnRhaW5lciB7XG4gICAgICAgIC8vd2lkdGg6IDEwMTZweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNjBweDsgICAgICAgIFxuICAgIH1cbiAgICBib2R5LmZsYXNoICZ7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmUhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuXG4uYmFja2dyb3VuZC1jb250YWluZXJ7XG4gICAgLm1haW57XG4gICAgICAgIHdpZHRoOiAxMDgwcHg7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvLi9hc3NldHMvc3RhdGljL2ltZy9iZy5qcGcpO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG59XG5cbi5zbGljay1saXN0LmRyYWdnYWJsZSB7XG4gICAgaGVpZ2h0OiA4ODBweDtcbn1cblxuXG5cbiJdfQ== */"], data: { animation: [
            _animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]
            // animation triggers go here
        ] } });
var StepEnum;
(function (StepEnum) {
    StepEnum["User"] = "User";
    StepEnum["Guest"] = "Guest";
    StepEnum["Exit"] = "Exit";
})(StepEnum || (StepEnum = {}));


/***/ }),

/***/ "UW08":
/*!****************************************************************!*\
  !*** ./src/app/components/v1/main-page/main-page.component.ts ***!
  \****************************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_services_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/client.service */ "oR8h");
/* harmony import */ var src_app_shared_services_camera_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/camera.service */ "p341");
/* harmony import */ var src_app_shared_services_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/session.service */ "mZtN");
/* harmony import */ var src_app_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/navigation.service */ "LFK6");
/* harmony import */ var _photos_camera_camera_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../photos/camera/camera.component */ "Vu4P");









class MainPageComponent {
    constructor(router, clientService, cameraService, sessionService, navigate) {
        this.router = router;
        this.clientService = clientService;
        this.cameraService = cameraService;
        this.sessionService = sessionService;
        this.navigate = navigate;
        this.photoForSearch = {
            location: this.clientService.locationID,
            limit: 15,
            offset: 0,
            date: moment__WEBPACK_IMPORTED_MODULE_1__().format('YYYY-MM-DD'),
        };
        this.webcamImage = null;
        this.takePhoto = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isMakePhotoProcess = false;
        this.flash = false;
    }
    ngOnInit() {
        this.navigate.clearURL();
        this.isMakePhotoProcess = false;
        this.cameraService.setRotateCamera(270);
        this.clientService.standBy().subscribe((item) => {
            this.cameraService.setRotateCamera(item.body.devices.webCamera.rotate);
        });
    }
    /*ngAfterViewInit() {
      this.cameraService.setRotateCamera(270)
    }*/
    onPictureTaken(webcamImage) {
        var _a;
        this.webcamImage = webcamImage;
        if (this.isMakePhotoProcess) {
            this.cameraService.photo_search = (_a = this.webcamImage) === null || _a === void 0 ? void 0 : _a.imageAsDataUrl;
            this.sessionService.branch = 'Neural';
            this.clientService.neiron.next(true);
            this.router.navigate(['gallery']);
        }
    }
    onMakeSelfie() {
        this.sessionService.branch = 'Selfie';
        this.cameraService.timeFlash = 5;
        this.router.navigate(['selfie']);
    }
    onFindPhotos() {
        this.sessionService.branch = 'Neural';
        this.cameraService.timeFlash = 2;
        this.router.navigate(['selfie']);
    }
}
MainPageComponent.ɵfac = function MainPageComponent_Factory(t) { return new (t || MainPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_camera_service__WEBPACK_IMPORTED_MODULE_4__["CameraService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"])); };
MainPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainPageComponent, selectors: [["app-main-page"]], decls: 32, vars: 3, consts: [[1, "main-page__camera", 3, "height", "width", "takePhoto", "pictureTaken"], [1, "relative", "full-height", "main-page"], [1, "main-page__common"], [1, "main-page__wrapper", "full-height", "relative"], [1, "title"], [1, "main-page__button-group", "search-wrap"], [1, "slot-btn", "search-btn", 3, "click"], [1, "icon", "icon-selfie"], [1, "text-center"], [1, "icon", "icon-search"], [1, "main-page__bottom-side"], [1, "print-photo", "w-100", "background-gray", "b-12", 3, "click"], [1, "sub-info", "pt-32"], [1, "info-btn", "background-gray", "b-12", "mr-8"], [1, "icon", "icon-info-main"]], template: function MainPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-camera", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pictureTaken", function MainPageComponent_Template_app_camera_pictureTaken_1_listener($event) { return ctx.onPictureTaken($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u041D\u0430\u0439\u0434\u0438\u0442\u0435 \u0441\u0432\u043E\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u0444\u043E\u0442\u043E \u043D\u0430 \u043A\u0443\u0440\u043E\u0440\u0442\u0435!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_Template_button_click_10_listener() { return ctx.onMakeSelfie(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0421\u0434\u0435\u043B\u0430\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u0441\u0435\u043B\u0444\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_Template_button_click_16_listener() { return ctx.onFindPhotos(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u041D\u0430\u0439\u0442\u0438 \u0441\u0435\u0431\u044F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u043D\u0430 \u043A\u0443\u0440\u043E\u0440\u0442\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_Template_button_click_23_listener() { return ctx.onFindPhotos(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u041F\u0435\u0447\u0430\u0442\u044C 200\u20BD, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " \u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430 \u043D\u0430 \u043C\u044D\u0439\u043B 100\u20BD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " \u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("height", 1080)("width", 1920)("takePhoto", ctx.takePhoto);
    } }, directives: [_photos_camera_camera_component__WEBPACK_IMPORTED_MODULE_7__["CameraComponent"]], styles: [".main-page[_ngcontent-%COMP%] {\n  z-index: 100;\n  padding-bottom: 45px;\n  padding: 0 32px;\n  width: 952px;\n}\n.main-page__common[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  padding-bottom: 45px;\n}\n.main-page__wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  min-height: 1080px;\n  overflow: hidden;\n  border-bottom-left-radius: 60px;\n  border-bottom-right-radius: 60px;\n  margin-bottom: 32px;\n}\n.main-page[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 30px;\n  margin-bottom: 32px;\n  height: 170px;\n  font-family: Panton;\n  font-style: normal;\n  font-size: 80px;\n  padding-bottom: 10px;\n  font-weight: 800;\n  line-height: 80px;\n  letter-spacing: 0em;\n  background: linear-gradient(152deg, #EDC04E 10.63%, #F19409 86.4%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.main-page[_ngcontent-%COMP%]   .background-gray[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.3);\n  -webkit-backdrop-filter: blur(94px);\n          backdrop-filter: blur(94px);\n  border: none;\n}\n.main-page[_ngcontent-%COMP%]   .sub-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  font-size: 28px;\n}\n.main-page[_ngcontent-%COMP%]   .sub-info[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.main-page[_ngcontent-%COMP%]   .sub-info[_ngcontent-%COMP%]   button.info-btn[_ngcontent-%COMP%] {\n  color: white;\n}\n.main-page[_ngcontent-%COMP%]   .sub-info[_ngcontent-%COMP%]   button.info-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}\n.main-page[_ngcontent-%COMP%]   .print-photo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  height: 240px;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 54px;\n  color: white;\n  border-radius: 60px !important;\n  line-height: 65px;\n}\n.main-page[_ngcontent-%COMP%]   .b-12[_ngcontent-%COMP%] {\n  border-radius: 12px;\n}\n.main-page__button-group[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 2;\n  display: flex;\n  padding: 0;\n  justify-content: space-between;\n}\n.main-page__button-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 380px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 0 16px;\n}\n.main-page__button-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 160px;\n  height: 160px;\n}\n.main-page__button-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 0;\n  display: block;\n  font-size: 38px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 40px;\n}\n.main-page__camera[_ngcontent-%COMP%] {\n  border-radius: 60px;\n  height: 100vh;\n  width: auto;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.main-page__camera[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: auto;\n}\n[_nghost-%COMP%]     .main-page__camera .rotate-top video {\n  top: 0;\n}\n[_nghost-%COMP%]     .main-page__camera webcam.rotate-top div video {\n  object-fit: cover;\n  width: 100%;\n  aspect-ratio: 1/1;\n  min-height: 100vh;\n  min-width: 0;\n}\n[_nghost-%COMP%]     .main-page__camera .webcam-wrapper {\n  width: 1080px;\n  height: 1920px;\n  overflow: visible;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 50;\n}\n[_nghost-%COMP%]     .webcam-wrapper video {\n  height: 1080px !important;\n  width: 1920px !important;\n  position: absolute;\n  left: -419px;\n  top: 420px;\n  z-index: 50;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL21haW4tcGFnZS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFESjtBQUdJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FBRFI7QUFJSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQ3BCUTtFRHFCUixnQ0NyQlE7RURzQlIsbUJBQUE7QUFGUjtBQUtJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrRUFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7QUFIUjtBQU1JO0VBQ0ksb0NBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsWUFBQTtBQUpSO0FBT0k7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBTFI7QUFPUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBTFo7QUFNWTtFQUNJLFlBQUE7QUFKaEI7QUFLZ0I7RUFDSSxrQkFBQTtBQUhwQjtBQVVJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtBQVJSO0FBV0k7RUFDSSxtQkFBQTtBQVRSO0FBWUk7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLDhCQUFBO0FBVlI7QUFXUTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUFUWjtBQVdZO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUFUaEI7QUFZWTtFQUNJLFNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVZoQjtBQWVJO0VBQ0ksbUJDekhRO0VEMEhSLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtBQWJSO0FBY1E7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQVpaO0FBa0JJO0VBQ0ksTUFBQTtBQWZSO0FBaUJJO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFmUjtBQWtCSTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtBQWhCUjtBQW9CQTtFQUNJLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQWpCSiIsImZpbGUiOiJtYWluLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGVzJztcblxuLm1haW4tcGFnZSB7XG4gICAgei1pbmRleDogMTAwO1xuICAgIHBhZGRpbmctYm90dG9tOiA0NXB4O1xuICAgIHBhZGRpbmc6IDAgMzJweDtcbiAgICB3aWR0aDogOTUycHg7XG5cbiAgICAmX19jb21tb24ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDVweDtcbiAgICB9XG5cbiAgICAmX193cmFwcGVye1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwODBweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cy1jYW1lcmE7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkcmFkaXVzLWNhbWVyYTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDsgIFxuICAgIH1cblxuICAgIC50aXRsZSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgICAgICAgaGVpZ2h0OiAxNzBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IFBhbnRvbjtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXNpemU6IDgwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICBsaW5lLWhlaWdodDogODBweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE1MmRlZywgI0VEQzA0RSAxMC42MyUsICNGMTk0MDkgODYuNCUpO1xuICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgIC5iYWNrZ3JvdW5kLWdyYXkge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig5NHB4KTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cblxuICAgIC5zdWItaW5mb3tcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcblxuICAgICAgICBidXR0b257XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgJi5pbmZvLWJ0bntcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7ICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaXtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLnByaW50LXBob3Rve1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgaGVpZ2h0OiAyNDBweDsgICAgICAgIFxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogNTRweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2MHB4IWltcG9ydGFudDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDY1cHg7XG4gICAgfVxuXG4gICAgLmItMTJ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgfVxuXG4gICAgJl9fYnV0dG9uLWdyb3Vwe1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYnV0dG9ue1xuICAgICAgICAgICAgaGVpZ2h0OiAzODBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICAgICAgICBcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTZweDtcblxuICAgICAgICAgICAgaXtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTYwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNjBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2NhbWVyYXtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogJHJhZGl1cy1jYW1lcmE7XG4gICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHRvcDogMDsgICAgXG4gICAgICAgIHZpZGVvIHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgfSAgICBcbiAgICB9XG59XG5cbjpob3N0IDo6bmctZGVlcCAubWFpbi1wYWdlX19jYW1lcmEge1xuICAgIC5yb3RhdGUtdG9wIHZpZGVve1xuICAgICAgICB0b3A6IDA7XG4gICAgfVxuICAgIHdlYmNhbS5yb3RhdGUtdG9wIGRpdiB2aWRlbyB7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYXNwZWN0LXJhdGlvOiAxLzE7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICBtaW4td2lkdGg6IDA7XG4gICAgfVxuICAgIFxuICAgIC53ZWJjYW0td3JhcHBlciB7XG4gICAgICAgIHdpZHRoOiAxMDgwcHggO1xuICAgICAgICBoZWlnaHQ6IDE5MjBweCA7XG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgei1pbmRleDogNTA7XG4gICAgfVxufVxuICAgIFxuOmhvc3QgOjpuZy1kZWVwIC53ZWJjYW0td3JhcHBlciB2aWRlb3tcbiAgICBoZWlnaHQ6IDEwODBweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxOTIwcHggIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogLTQxOXB4O1xuICAgIHRvcDogNDIwcHg7XG4gICAgei1pbmRleDogNTA7ICBcbn0iLCIkd2lkdGgtY29udGVudDogOTQwcHg7XG4kcmFkaXVzLWNhbWVyYTogNjBweDsiXX0= */"] });


/***/ }),

/***/ "VsY3":
/*!***************************************************!*\
  !*** ./src/app/shared/services/broker.service.ts ***!
  \***************************************************/
/*! exports provided: BrokerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrokerService", function() { return BrokerService; });
/* harmony import */ var src_app_modules_outer_config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/modules/outer-config/config */ "myVS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class BrokerService {
    constructor(http) {
        this.http = http;
    }
    acquiring(item) {
        return this.http.post(`${src_app_modules_outer_config_config__WEBPACK_IMPORTED_MODULE_0__["Configuration"].host}api/broker/acquiring`, JSON.stringify(item), {
            headers: {
                'Content-Type': 'application/json'
            },
            observe: "response"
        });
    }
}
BrokerService.ɵfac = function BrokerService_Factory(t) { return new (t || BrokerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
BrokerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BrokerService, factory: BrokerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Vu4P":
/*!**************************************************************!*\
  !*** ./src/app/components/photos/camera/camera.component.ts ***!
  \**************************************************************/
/*! exports provided: CameraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraComponent", function() { return CameraComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-webcam */ "QKVY");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_shared_services_camera_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/camera.service */ "p341");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







const _c0 = function () { return { min: 1280, ideal: 1920 }; };
const _c1 = function () { return { min: 720, ideal: 1080 }; };
const _c2 = function (a0, a1) { return { width: a0, height: a1 }; };
function CameraComponent_webcam_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "webcam", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("imageCapture", function CameraComponent_webcam_0_Template_webcam_imageCapture_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.handleImage($event); })("cameraSwitched", function CameraComponent_webcam_0_Template_webcam_cameraSwitched_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.cameraWasSwitched($event); })("initError", function CameraComponent_webcam_0_Template_webcam_initError_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.handleInitError($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mask", ctx_r0.isMask);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("height", 1080)("width", 1920)("trigger", ctx_r0.triggerObservable)("allowCameraSwitch", ctx_r0.allowCameraSwitch)("switchCamera", ctx_r0.nextWebcamObservable)("videoOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](11, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1)))("ngClass", ctx_r0.cameraService.cssClass);
} }
function CameraComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CameraComponent {
    constructor(cameraService) {
        this.cameraService = cameraService;
        this.pictureTaken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isMask = false;
        this.showWebcam = true;
        this.allowCameraSwitch = false;
        this.multipleWebcamsAvailable = false;
        this.width = 1080;
        this.height = 1920;
        this.videoOptions = {
            // width: {ideal: 1024},
            // height: {ideal: 576}
            width: { min: 1280, ideal: 1080 },
            height: { min: 720, ideal: 1920 }
        };
        this.errors = [];
        // webcam snapshot trigger
        this.trigger = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
        this.nextWebcam = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ngOnInit() {
        ngx_webcam__WEBPACK_IMPORTED_MODULE_1__["WebcamUtil"].getAvailableVideoInputs()
            .then((mediaDevices) => {
            this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
        });
        if (this.takePhoto) {
            this.takePhoto.subscribe(() => {
                this.trigger.next();
            });
        }
    }
    triggerSnapshot() {
        this.trigger.next();
    }
    handleInitError(error) {
        this.errors.push(error);
    }
    showNextWebcam(directionOrDeviceId) {
        this.nextWebcam.next(directionOrDeviceId);
    }
    handleImage(webcamImage) {
        this.cameraService.photo_search = webcamImage.imageAsDataUrl;
        this.pictureTaken.emit(webcamImage);
    }
    cameraWasSwitched(deviceId) {
        this.deviceId = deviceId;
    }
    get triggerObservable() {
        return this.trigger.asObservable();
    }
    get nextWebcamObservable() {
        return this.nextWebcam.asObservable();
    }
}
CameraComponent.ɵfac = function CameraComponent_Factory(t) { return new (t || CameraComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_camera_service__WEBPACK_IMPORTED_MODULE_3__["CameraService"])); };
CameraComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CameraComponent, selectors: [["app-camera"]], inputs: { isMask: "isMask", takePhoto: "takePhoto", width: "width", height: "height", videoOptions: "videoOptions" }, outputs: { pictureTaken: "pictureTaken" }, decls: 3, vars: 2, consts: [[3, "height", "width", "trigger", "allowCameraSwitch", "switchCamera", "videoOptions", "ngClass", "mask", "imageCapture", "cameraSwitched", "initError", 4, "ngIf"], ["class", "blurred-zone", 4, "ngIf"], [3, "height", "width", "trigger", "allowCameraSwitch", "switchCamera", "videoOptions", "ngClass", "imageCapture", "cameraSwitched", "initError"], [1, "blurred-zone"], [1, "vertical"], [1, "horizontal"]], template: function CameraComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CameraComponent_webcam_0_Template, 1, 14, "webcam", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CameraComponent_div_2_Template, 3, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showWebcam);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMask);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ngx_webcam__WEBPACK_IMPORTED_MODULE_1__["WebcamComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], styles: [".actionBtn {\n  font-size: 4em;\n  cursor: pointer;\n}\n\n.snapshot {\n  text-align: center;\n}\n\n.snapshot img {\n  /*transform: rotate(90deg);\n  max-width: 900px;\n  //height: 100%;\n  object-fit: cover*/\n}\n\nul.links {\n  padding-bottom: 20px;\n}\n\n.webcam-wrapper {\n  overflow: hidden;\n  border-radius: 0;\n}\n\n.webcam-wrapper video {\n  height: 100% !important;\n  width: 100% !important;\n  object-fit: cover;\n}\n\n.snapshot .rotate-top,\nwebcam.rotate-top div video {\n  transform: rotate(0) scaleX(-1);\n}\n\n.snapshot .rotate-right,\nwebcam.rotate-right div video {\n  transform: rotate(90deg) scaleX(-1);\n}\n\n.snapshot .rotate-bottom,\nwebcam.rotate-bottom div video {\n  transform: rotate(180deg) scaleX(-1);\n}\n\n.snapshot .rotate-left,\nwebcam.rotate-left div video {\n  transform: rotate(270deg) scaleX(-1);\n}\n\nwebcam.mask .webcam-wrapper::before {\n  position: fixed;\n  content: \"\";\n  display: block;\n  z-index: 200;\n  left: calc(50% - 500px);\n  top: calc(50% - 750px);\n  right: 0;\n  bottom: 0;\n  border-radius: 10px;\n  border: 20px solid rgba(98, 151, 226, 0.7);\n  outline: 1000px solid rgba(98, 151, 226, 0.6);\n  filter: blur(10px);\n  width: 1000px !important;\n  height: 1500px !important;\n}\n\n.blurred-zone {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100vh;\n  height: 100vh;\n  -moz-filter: blur(5px);\n  -o-filter: blur(5px);\n  -ms-filter: blur(5px);\n  filter: blur(5px);\n}\n\n.blurred-zone .vertical {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100vh;\n  height: 100vh;\n}\n\n.blurred-zone .vertical::before {\n  position: fixed;\n  content: \"\";\n  left: 0;\n  top: calc(50% - 750px);\n  width: calc((100% - 1000/2)/2);\n  height: 100%;\n}\n\n.blurred-zone .vertical::after {\n  position: fixed;\n  content: \"\";\n  right: 0;\n  top: calc(50% - 750px);\n  width: calc((100% - 1000/2)/2);\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NhbWVyYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxrQkFBQTtBQUVGOztBQURFO0VBQ0U7OztvQkFBQTtBQU1KOztBQUFBO0VBQ0Usb0JBQUE7QUFHRjs7QUFBQTtFQUdFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0VBQ0Esc0JBQUE7RUFJQSxpQkFBQTtBQUZGOztBQUtBOztFQUVFLCtCQUFBO0FBRkY7O0FBS0E7O0VBRUUsbUNBQUE7QUFGRjs7QUFLQTs7RUFFRSxvQ0FBQTtBQUZGOztBQUtBOztFQUVFLG9DQUFBO0FBRkY7O0FBS0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLDZDQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0FBRkY7O0FBS0E7RUFDRSxlQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUVBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FBRkY7O0FBR0U7RUFDRSxlQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQURKOztBQUVJO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7QUFBTjs7QUFFSTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FBQU4iLCJmaWxlIjoiY2FtZXJhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGlvbkJ0biB7XG4gIGZvbnQtc2l6ZTogNGVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc25hcHNob3R7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaW1ne1xuICAgIC8qdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgIG1heC13aWR0aDogOTAwcHg7XG4gICAgLy9oZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXIqL1xuICB9XG59XG51bC5saW5rc3tcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbi53ZWJjYW0td3JhcHBlcntcbiAgLy8gd2lkdGg6IDMwMHB4O1xuICAvLyBoZWlnaHQ6IDUyMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4ud2ViY2FtLXdyYXBwZXIgdmlkZW97XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8vIGxlZnQ6IC0xMTBweDtcbiAgLy8gdG9wOiAxMTBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5zbmFwc2hvdCAucm90YXRlLXRvcCxcbndlYmNhbS5yb3RhdGUtdG9wIGRpdiB2aWRlbyB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDApIHNjYWxlWCgtMSk7XG59XG5cbi5zbmFwc2hvdCAucm90YXRlLXJpZ2h0LFxud2ViY2FtLnJvdGF0ZS1yaWdodCBkaXYgdmlkZW8ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgc2NhbGVYKC0xKTtcbn1cblxuLnNuYXBzaG90IC5yb3RhdGUtYm90dG9tLFxud2ViY2FtLnJvdGF0ZS1ib3R0b20gZGl2IHZpZGVvIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKSBzY2FsZVgoLTEpO1xufVxuXG4uc25hcHNob3QgLnJvdGF0ZS1sZWZ0LFxud2ViY2FtLnJvdGF0ZS1sZWZ0IGRpdiB2aWRlbyB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZykgc2NhbGVYKC0xKTtcbn1cblxud2ViY2FtLm1hc2sgLndlYmNhbS13cmFwcGVyOjpiZWZvcmV7XG4gIHBvc2l0aW9uOiBmaXhlZDsgIFxuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgei1pbmRleDogMjAwO1xuICBsZWZ0OiBjYWxjKDUwJSAtIDUwMHB4KTtcbiAgdG9wOiBjYWxjKDUwJSAtIDc1MHB4KTtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiAyMHB4IHNvbGlkIHJnYmEoOTgsIDE1MSwgMjI2LCAwLjcpO1xuICBvdXRsaW5lOiAxMDAwcHggc29saWQgcmdiYSg5OCwgMTUxLCAyMjYsIDAuNik7XG4gIGZpbHRlcjogYmx1cigxMHB4KTtcbiAgd2lkdGg6IDEwMDBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDE1MDBweCAhaW1wb3J0YW50O1xufVxuXG4uYmx1cnJlZC16b25le1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMHZoO1xuICBoZWlnaHQ6IDEwMHZoO1xuICAtd2Via2l0LWZpbHRlcjogYmx1cig1cHgpO1xuICAtbW96LWZpbHRlcjogYmx1cig1cHgpO1xuICAtby1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgLW1zLWZpbHRlcjogYmx1cig1cHgpO1xuICBmaWx0ZXI6IGJsdXIoNXB4KTtcbiAgLnZlcnRpY2Fse1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwdmg7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAmOjpiZWZvcmV7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7ICBcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHRvcDogY2FsYyg1MCUgLSA3NTBweCk7XG4gICAgICB3aWR0aDogY2FsYygoMTAwJSAtIDEwMDAvMikvMik7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICAgICY6OmFmdGVye1xuICAgICAgcG9zaXRpb246IGZpeGVkOyAgXG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgdG9wOiBjYWxjKDUwJSAtIDc1MHB4KTtcbiAgICAgIHdpZHRoOiBjYWxjKCgxMDAlIC0gMTAwMC8yKS8yKTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gIH1cbn0iXX0= */"], encapsulation: 2 });


/***/ }),

/***/ "WtDJ":
/*!*************************************************************!*\
  !*** ./src/app/components/how-print/how-print.component.ts ***!
  \*************************************************************/
/*! exports provided: HowPrintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowPrintComponent", function() { return HowPrintComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core */ "ey9i");
/* harmony import */ var src_app_modules_outer_config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/outer-config/config */ "myVS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_services_howPrint_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/howPrint.service */ "krGR");
/* harmony import */ var src_app_shared_services_broker_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/broker.service */ "VsY3");
/* harmony import */ var src_app_shared_services_client_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/client.service */ "oR8h");
/* harmony import */ var src_app_shared_services_photo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/photo.service */ "ny42");
/* harmony import */ var src_app_shared_services_session_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/session.service */ "mZtN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");











const _c0 = function (a0) { return { "disableDiv": a0 }; };
class HowPrintComponent {
    constructor(router, printService, brokerService, clientService, photoService, sessionService) {
        this.router = router;
        this.printService = printService;
        this.brokerService = brokerService;
        this.clientService = clientService;
        this.photoService = photoService;
        this.sessionService = sessionService;
        this.isDisabled = true;
        this.magnitePrice = 200;
    }
    ngOnInit() {
        src_app_core__WEBPACK_IMPORTED_MODULE_1__["ActivityMode"].startTimer();
        this.paperPrice = this.brokerService.priceForPaper;
        this.emailPrice = this.brokerService.priceForEmail;
        this.branch = this.sessionService.branch;
        switch (this.branch) {
            case 'Selfie': {
                const images = [];
                let toCard = this.clientService.photoToCart.map((item) => {
                    images.push(item.path);
                    return item;
                });
                this.clientService.sourceSelfi({
                    images: images
                })
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])((item) => {
                    item.images.map((values, key) => {
                        values.originalUri = `${src_app_modules_outer_config_config__WEBPACK_IMPORTED_MODULE_2__["Configuration"].host}${values.originalUri}`;
                        toCard[key] = Object.assign(Object.assign({}, toCard[key]), values);
                    });
                    this.clientService.photoToCart = toCard;
                }))
                    .subscribe();
                break;
            }
            case 'Neural': {
                /*let toCard = this.clientService.photoToCart.map((item: any) => {
                  item.originalUri = item.thumbUri;
                  return item;
                });
                this.clientService.photoToCart = toCard;*/
            }
        }
    }
    goBack() {
        this.router.navigate(['gallery']);
    }
    goHome() {
        this.router.navigate(['']);
    }
    goCart(material) {
        this.printService.material = material;
        this.router.navigate(['cart']);
    }
    goEmail() {
        this.router.navigate(['email']);
    }
}
HowPrintComponent.ɵfac = function HowPrintComponent_Factory(t) { return new (t || HowPrintComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_howPrint_service__WEBPACK_IMPORTED_MODULE_5__["HowPrintService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_broker_service__WEBPACK_IMPORTED_MODULE_6__["BrokerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_client_service__WEBPACK_IMPORTED_MODULE_7__["ClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_photo_service__WEBPACK_IMPORTED_MODULE_8__["PhotoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_session_service__WEBPACK_IMPORTED_MODULE_9__["SessionService"])); };
HowPrintComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: HowPrintComponent, selectors: [["app-how-print"]], decls: 29, vars: 6, consts: [[1, "print", 2, "height", "1180px"], [1, "header"], [1, "header-icons"], [1, "icon-wrap", 3, "click"], [1, "icon", "icon-back"], [1, "icon", "icon-home"], [1, "print-main"], [1, "print-main__title"], [1, "print-main__grids"], [1, "print-main__grid", 3, "ngClass", "click"], ["src", "././assets/static/img/card.png", "alt", "", 1, "print-main__grid-img"], [1, "print-main__grid-title"], [1, "print-main__grid-price"], [1, "print-main__grid", 3, "click"], [1, "print-main__grid", "print-main__grid-full", 3, "click"], ["src", "././assets/static/img/email.png", "alt", "", 1, "print-main__grid-img"]], template: function HowPrintComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HowPrintComponent_Template_div_click_3_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HowPrintComponent_Template_div_click_5_listener() { return ctx.goHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "\u041D\u0430 \u0447\u0435\u043C \u043F\u0435\u0447\u0430\u0442\u0430\u0435\u043C?");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HowPrintComponent_Template_div_click_11_listener() { return ctx.goCart("Magnite"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "\u041D\u0430 \u043C\u0430\u0433\u043D\u0438\u0442\u0430\u0445");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HowPrintComponent_Template_div_click_17_listener() { return ctx.goCart("Paper"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "\u041D\u0430 \u0431\u0443\u043C\u0430\u0433\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HowPrintComponent_Template_div_click_23_listener() { return ctx.goEmail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043D\u0430 email");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c0, ctx.isDisabled));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u043E\u0442 ", ctx.magnitePrice, " \u20BD");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u043E\u0442 ", ctx.paperPrice, " \u20BD");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.emailPrice, " \u20BD");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"]], styles: [".print[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.7);\n  -webkit-backdrop-filter: blur(94px);\n          backdrop-filter: blur(94px);\n  border-radius: 60px;\n}\n.print-header[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 32px 32px 0 32px;\n}\n.print-header__btn[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #ffffff;\n  background-size: cover;\n  padding: 8px;\n  box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.2);\n  border-radius: 100px;\n  margin: 0px 12px;\n}\n.print-main[_ngcontent-%COMP%] {\n  padding: 0px 64px;\n}\n.print-main__title[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  font-weight: 600;\n  font-size: 48px;\n  text-align: center;\n}\n.print-main__grids[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n.print-main__grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: #ffffff;\n  padding: 68px;\n  box-shadow: 0px 20px 40px rgba(3, 74, 104, 0.2);\n  border-radius: 44px;\n  width: 46%;\n  margin: 32px 0;\n}\n.print-main__grid[_ngcontent-%COMP%]:first-child {\n  margin-right: 24px;\n}\n.print-main__grid-full[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.print-main__grid-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 38px;\n  margin: 0;\n}\n.print-main__grid-price[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 24px;\n  color: rgba(0, 0, 0, 0.4);\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  padding: 32px 32px 0 32px;\n}\n.header-icons[_ngcontent-%COMP%] {\n  display: flex;\n}\n.disableDiv[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.5;\n}\n.icon-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  width: 64px;\n  height: 64px;\n  background: #ffffff;\n  box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.2);\n  border-radius: 100px;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.icon-wrap[_ngcontent-%COMP%]:first-child {\n  margin-right: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hvdy1wcmludC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFBSTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtBQUVSO0FBRFE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSw0Q0FBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUFHWjtBQUNJO0VBQ0ksaUJBQUE7QUFDUjtBQUNRO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUNaO0FBRVE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0FBQVo7QUFHUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSwrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUFEWjtBQUdZO0VBQ0ksa0JBQUE7QUFEaEI7QUFJWTtFQUNJLFdBQUE7QUFGaEI7QUFLWTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUFIaEI7QUFNWTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBSmhCO0FBY0E7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFaSjtBQWNJO0VBQ0ksYUFBQTtBQVpSO0FBZ0JBO0VBQ0ksb0JBQUE7RUFDQSxZQUFBO0FBYko7QUFnQkE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDRDQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQWJKO0FBZ0JBO0VBQ0ksa0JBQUE7QUFiSiIsImZpbGUiOiJob3ctcHJpbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpbnQge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOTRweCk7XG4gICAgYm9yZGVyLXJhZGl1czogNjBweDtcbiAgICAmLWhlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHBhZGRpbmc6IDMycHggMzJweCAwIDMycHg7XG4gICAgICAgICZfX2J0biB7XG4gICAgICAgICAgICB3aWR0aDogNjRweDtcbiAgICAgICAgICAgIGhlaWdodDogNjRweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxMnB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDBweCAxMnB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi1tYWluIHtcbiAgICAgICAgcGFkZGluZzogMHB4IDY0cHg7XG5cbiAgICAgICAgJl9fdGl0bGUge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAmX19ncmlkcyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICB9XG5cbiAgICAgICAgJl9fZ3JpZCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAgICAgICBwYWRkaW5nOiA2OHB4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDIwcHggNDBweCByZ2JhKDMsIDc0LCAxMDQsIDAuMik7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0NHB4O1xuICAgICAgICAgICAgd2lkdGg6IDQ2JTtcbiAgICAgICAgICAgIG1hcmdpbjogMzJweCAwO1xuXG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYtZnVsbCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYtdGl0bGUge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzOHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi1wcmljZSB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYtaW1nIHtcbiAgICAgICAgICAgICAgICAvLyB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDMycHggMzJweCAwIDMycHg7XG5cbiAgICAmLWljb25zIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG59XG5cbi5kaXNhYmxlRGl2e1xuICAgIHBvaW50ZXItZXZlbnRzOm5vbmU7XG4gICAgb3BhY2l0eTogMC41O1xufVxuXG4uaWNvbi13cmFwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiA2NHB4O1xuICAgIGhlaWdodDogNjRweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGJveC1zaGFkb3c6IDBweCAxMnB4IDIwcHggcmdiKDAgMCAwIC8gMjAlKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmljb24td3JhcDpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuIl19 */"] });


/***/ }),

/***/ "Wz3H":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/wireless-download/components/wireless/wireless.component.ts ***!
  \*************************************************************************************/
/*! exports provided: WirelessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WirelessComponent", function() { return WirelessComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_file_upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/file-upload.service */ "YGyT");
/* harmony import */ var _shared_services_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/client.service */ "oR8h");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../slider/slider.component */ "B57o");
/* harmony import */ var _preloader_preloader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../preloader/preloader.component */ "Yx83");








function WirelessComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-slider");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WirelessComponent_div_5_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.changeView("status"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r0.uploadService.gallery.length);
} }
function WirelessComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u044E\u0442\u0441\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "app-preloader");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function WirelessComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438 \u0434\u043B\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0432 Lomobil");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WirelessComponent_div_7_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.changeView("gallery"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function WirelessComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WirelessComponent_div_8_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.changeView("gallery"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Ok");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function WirelessComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u044B!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class WirelessComponent {
    constructor(uploadService, clintService) {
        this.uploadService = uploadService;
        this.clintService = clintService;
        this.title = 'lomobsite';
        this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"]();
        this.viewTemplate = 'main';
        this.idKiosk = '';
    }
    ngOnInit() {
        this.getIdKiosk();
    }
    changeView(route) {
        this.viewTemplate = route;
        if (route === 'status') {
            this.upload();
        }
    }
    getIdKiosk() {
        this.idKiosk = this.clintService.currentDevice.identity;
    }
    upload() {
        const uploadImage = this.uploadService.uploadPhoto(this.uploadService.gallery, this.idKiosk)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(() => this.viewTemplate = 'loading'))
            .subscribe(() => {
            this.viewTemplate = 'success';
            this.uploadService.gallery = [];
        }, () => {
            this.viewTemplate = 'error';
        });
        this.sub.add(uploadImage);
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
WirelessComponent.ɵfac = function WirelessComponent_Factory(t) { return new (t || WirelessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_file_upload_service__WEBPACK_IMPORTED_MODULE_3__["FileUploadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_client_service__WEBPACK_IMPORTED_MODULE_4__["ClientService"])); };
WirelessComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: WirelessComponent, selectors: [["app-wireless"]], decls: 10, vars: 7, consts: [[1, "container"], [1, "lomobil_wrapper"], [1, "header"], [1, "icon", "icon-l"], [1, "content"], [4, "ngIf"], [1, "download"], [1, "btn_wrap"], [3, "disabled", "click"], [1, "icon", "icon-download"], [1, "content_wrap"], [1, "title"], [1, "btn", "btn_wrap"], [3, "click"], [1, "icon", "icon-photo"], [1, "btn", "btn_wrap", "btn_ok"], [1, "icon", "icon-success"]], template: function WirelessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, WirelessComponent_div_5_Template, 8, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, WirelessComponent_div_6_Template, 6, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, WirelessComponent_div_7_Template, 10, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, WirelessComponent_div_8_Template, 9, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, WirelessComponent_div_9_Template, 6, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("padding_content", ctx.viewTemplate === "gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.viewTemplate === "gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.viewTemplate === "loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.viewTemplate === "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.viewTemplate === "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.viewTemplate === "success");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _slider_slider_component__WEBPACK_IMPORTED_MODULE_6__["SliderComponent"], _preloader_preloader_component__WEBPACK_IMPORTED_MODULE_7__["PreloaderComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background-image: url('/assets/fon.png');\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-size: cover;\n}\n\n.lomobil_wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  max-width: 851px;\n  max-height: 788px;\n  width: 100%;\n  height: 88vh;\n  background: rgba(255, 255, 255, 0.7);\n  -webkit-backdrop-filter: blur(94px);\n          backdrop-filter: blur(94px);\n  border-radius: 12px;\n  font-family: \"panton\";\n}\n\n.lomobil_wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 54px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #ffffff;\n  border-top-left-radius: 12px;\n  border-top-right-radius: 12px;\n  filter: drop-shadow(0px 8px 12px rgba(0, 0, 0, 0.08));\n}\n\n.lomobil_wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow-x: hidden;\n  overflow-y: hidden;\n}\n\napp-slider[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.btn[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 16px;\n  width: 100%;\n}\n\n.btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #ffffff;\n  box-shadow: 0px 12px 24px rgba(3, 74, 104, 0.12);\n  border-radius: 24px;\n  border: none;\n  height: 88px;\n  width: 100%;\n  max-width: 319px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: Panton;\n  font-weight: 600;\n  font-size: 22px;\n  line-height: 24px;\n}\n\n.btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-family: Panton;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 28px;\n  line-height: 30px;\n  text-align: center;\n  color: #000000;\n}\n\n.content_wrap[_ngcontent-%COMP%] {\n  max-width: 314px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.btn_ok[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 38px !important;\n}\n\n.icon-success[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n\n.download[_ngcontent-%COMP%] {\n  width: 100%;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  background: #ffffff;\n  border-bottom-left-radius: 12px;\n  border-bottom-right-radius: 12px;\n}\n\n.download[_ngcontent-%COMP%]   .btn_wrap[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 12px;\n  border-bottom-right-radius: 12px;\n  padding: 16px;\n  background: #ffffff;\n  box-shadow: 0px 12px 24px rgba(3, 74, 104, 0.12);\n}\n\n.download[_ngcontent-%COMP%]   .btn_wrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 88px;\n  height: 88px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  background: #ffffff;\n  box-shadow: 0px 12px 24px rgba(3, 74, 104, 0.12);\n  border-radius: 24px;\n}\n\n.download[_ngcontent-%COMP%]   .btn_wrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: Panton;\n  font-weight: 600;\n  font-size: 22px;\n  line-height: 24px;\n}\n\n.download[_ngcontent-%COMP%]   .btn_wrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}\n\n.gallery_wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\nbutton[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.padding_content[_ngcontent-%COMP%] {\n  padding-bottom: 120px;\n}\n\n@media (max-width: 900px) {\n  .lomobil_wrapper[_ngcontent-%COMP%] {\n    margin-left: 12px;\n    margin-right: 12px;\n  }\n\n  .title[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .content_wrap[_ngcontent-%COMP%] {\n    margin-left: 16px;\n    margin-right: 16px;\n  }\n\n  .download[_ngcontent-%COMP%]   .btn_wrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3dpcmVsZXNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSx3Q0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFBRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxxREFBQTtBQUVKOztBQUNFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBS0Esa0JBQUE7RUFDQSxrQkFBQTtBQUhKOztBQVFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFMRjs7QUFRQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBTEY7O0FBTUU7RUFDRSxtQkFBQTtFQUNBLGdEQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBSko7O0FBS0k7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBSE47O0FBS0k7RUFDRSxrQkFBQTtBQUhOOztBQVFBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBTEY7O0FBUUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFMRjs7QUFZQTtFQUNFLHVCQUFBO0FBVEY7O0FBWUE7RUFDRSxtQkFBQTtBQVRGOztBQVlBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7QUFURjs7QUFVRTtFQUNFLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnREFBQTtBQVJKOztBQVNJO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0RBQUE7RUFDQSxtQkFBQTtBQVBOOztBQVFNO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQU5SOztBQVFNO0VBQ0Usa0JBQUE7QUFOUjs7QUFZQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQVRGOztBQVlBO0VBQ0UsZUFBQTtBQVRGOztBQVlBO0VBQ0UscUJBQUE7QUFURjs7QUFZQTtFQUNFO0lBQ0UsaUJBQUE7SUFDQSxrQkFBQTtFQVRGOztFQVlBO0lBQ0UsZUFBQTtFQVRGOztFQWNJO0lBQ0UsZUFBQTtFQVhOOztFQWdCQTtJQUNFLGlCQUFBO0lBQ0Esa0JBQUE7RUFiRjs7RUFxQkE7SUFDRSxlQUFBO0VBbEJGO0FBQ0YiLCJmaWxlIjoid2lyZWxlc3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvZm9uLnBuZ1wiKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5sb21vYmlsX3dyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXgtd2lkdGg6IDg1MXB4O1xuICBtYXgtaGVpZ2h0OiA3ODhweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODh2aDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOTRweCk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBcInBhbnRvblwiO1xuICAuaGVhZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDU0cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTJweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTJweDtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCA4cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMDgpKTtcbiAgfVxuXG4gIC5jb250ZW50IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8vIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgLy8gbWFyZ2luLWJvdHRvbTogMzE0cHg7XG4gICAgLy8gbWFyZ2luLWJvdHRvbTogMzR2aDtcbiAgICAvLyBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgLy8gcGFkZGluZy1ib3R0b206IDEyMHB4O1xuICB9XG59XG5cbmFwcC1zbGlkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBidXR0b24ge1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgYm94LXNoYWRvdzogMHB4IDEycHggMjRweCByZ2JhKDMsIDc0LCAxMDQsIDAuMTIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGhlaWdodDogODhweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDMxOXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBzcGFuIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBQYW50b247XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgfVxuICAgIGkge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgIH1cbiAgfVxufVxuXG4udGl0bGUge1xuICBmb250LWZhbWlseTogUGFudG9uO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5jb250ZW50X3dyYXB7XG4gIG1heC13aWR0aDogMzE0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4vLyAuYnRuX3dyYXB7XG4vLyAgICAgbWFyZ2luLXRvcDogMjRweDtcbi8vIH1cblxuLmJ0bl9vayBidXR0b257XG4gIGhlaWdodDogMzhweCAhaW1wb3J0YW50O1xufVxuXG4uaWNvbi1zdWNjZXNze1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG4uZG93bmxvYWQge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEycHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMnB4O1xuICAuYnRuX3dyYXAge1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEycHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEycHg7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGJveC1zaGFkb3c6IDBweCAxMnB4IDI0cHggcmdiYSgzLCA3NCwgMTA0LCAwLjEyKTtcbiAgICBidXR0b24ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXgtaGVpZ2h0OiA4OHB4O1xuICAgICAgaGVpZ2h0OiA4OHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICBib3gtc2hhZG93OiAwcHggMTJweCAyNHB4IHJnYigzIDc0IDEwNCAvIDEyJSk7XG4gICAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICAgICAgc3BhbiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBQYW50b247XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICB9XG4gICAgICBpIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uZ2FsbGVyeV93cmFwe1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5idXR0b257XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnBhZGRpbmdfY29udGVudHtcbiAgcGFkZGluZy1ib3R0b206IDEyMHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgLmxvbW9iaWxfd3JhcHBlcntcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIH1cblxuICAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuXG4gIC5idG4ge1xuICAgIGJ1dHRvbiB7XG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jb250ZW50X3dyYXB7XG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4IDtcbiAgfVxuXG4gIC5sb21vYmlsX3dyYXBwZXIgLmNvbnRlbnR7XG4gICAgLy8gcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIC8vIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIH1cblxuICAuZG93bmxvYWQgLmJ0bl93cmFwIGJ1dHRvbiBzcGFue1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuXG4iXX0= */"] });


/***/ }),

/***/ "YGyT":
/*!***************************************************************************!*\
  !*** ./src/app/modules/wireless-download/services/file-upload.service.ts ***!
  \***************************************************************************/
/*! exports provided: FileUploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadService", function() { return FileUploadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class FileUploadService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.gallery = [];
    }
    uploadPhoto(photoBase64mas, identity) {
        return this.httpClient.post(`/download/images/${identity}`, (photoBase64mas), {
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }
}
FileUploadService.ɵfac = function FileUploadService_Factory(t) { return new (t || FileUploadService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
FileUploadService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FileUploadService, factory: FileUploadService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Yx83":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/wireless-download/components/preloader/preloader.component.ts ***!
  \***************************************************************************************/
/*! exports provided: PreloaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreloaderComponent", function() { return PreloaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class PreloaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
PreloaderComponent.ɵfac = function PreloaderComponent_Factory(t) { return new (t || PreloaderComponent)(); };
PreloaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PreloaderComponent, selectors: [["app-preloader"]], decls: 2, vars: 0, consts: [[1, "loader"]], template: function PreloaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".loader[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 12px;\n  margin: 100px auto;\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  position: relative;\n  text-indent: -9999em;\n  animation: load4 1.3s infinite linear;\n  transform: translateZ(0);\n}\n\n@keyframes load4 {\n  0%, 100% {\n    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;\n  }\n  12.5% {\n    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n  }\n  25% {\n    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n  }\n  37.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;\n  }\n  50% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;\n  }\n  62.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;\n  }\n  75% {\n    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;\n  }\n  87.5% {\n    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3ByZWxvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUVBLHFDQUFBO0VBR0Esd0JBQUE7QUFDRjs7QUE0QkE7RUFDRTtJQUVFLHFJQUFBO0VBQUY7RUFFQTtJQUNFLG1JQUFBO0VBQUY7RUFFQTtJQUNFLHFJQUFBO0VBQUY7RUFFQTtJQUNFLHlJQUFBO0VBQUY7RUFFQTtJQUNFLHVJQUFBO0VBQUY7RUFFQTtJQUNFLG1JQUFBO0VBQUY7RUFFQTtJQUNFLHlJQUFBO0VBQUY7RUFFQTtJQUNFLG9JQUFBO0VBQUY7QUFDRiIsImZpbGUiOiJwcmVsb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGVyIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luOiAxMDBweCBhdXRvO1xuICB3aWR0aDogMWVtO1xuICBoZWlnaHQ6IDFlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtaW5kZW50OiAtOTk5OWVtO1xuICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZDQgMS4zcyBpbmZpbml0ZSBsaW5lYXI7XG4gIGFuaW1hdGlvbjogbG9hZDQgMS4zcyBpbmZpbml0ZSBsaW5lYXI7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgbG9hZDQge1xuICAwJSxcbiAgMTAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAtM2VtIDAgMC4yZW0sIDJlbSAtMmVtIDAgMGVtLCAzZW0gMCAwIC0xZW0sIDJlbSAyZW0gMCAtMWVtLCAwIDNlbSAwIC0xZW0sIC0yZW0gMmVtIDAgLTFlbSwgLTNlbSAwIDAgLTFlbSwgLTJlbSAtMmVtIDAgMDtcbiAgfVxuICAxMi41JSB7XG4gICAgYm94LXNoYWRvdzogMCAtM2VtIDAgMCwgMmVtIC0yZW0gMCAwLjJlbSwgM2VtIDAgMCAwLCAyZW0gMmVtIDAgLTFlbSwgMCAzZW0gMCAtMWVtLCAtMmVtIDJlbSAwIC0xZW0sIC0zZW0gMCAwIC0xZW0sIC0yZW0gLTJlbSAwIC0xZW07XG4gIH1cbiAgMjUlIHtcbiAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAtMC41ZW0sIDJlbSAtMmVtIDAgMCwgM2VtIDAgMCAwLjJlbSwgMmVtIDJlbSAwIDAsIDAgM2VtIDAgLTFlbSwgLTJlbSAyZW0gMCAtMWVtLCAtM2VtIDAgMCAtMWVtLCAtMmVtIC0yZW0gMCAtMWVtO1xuICB9XG4gIDM3LjUlIHtcbiAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAtMWVtLCAyZW0gLTJlbSAwIC0xZW0sIDNlbSAwZW0gMCAwLCAyZW0gMmVtIDAgMC4yZW0sIDAgM2VtIDAgMGVtLCAtMmVtIDJlbSAwIC0xZW0sIC0zZW0gMGVtIDAgLTFlbSwgLTJlbSAtMmVtIDAgLTFlbTtcbiAgfVxuICA1MCUge1xuICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIC0xZW0sIDJlbSAtMmVtIDAgLTFlbSwgM2VtIDAgMCAtMWVtLCAyZW0gMmVtIDAgMGVtLCAwIDNlbSAwIDAuMmVtLCAtMmVtIDJlbSAwIDAsIC0zZW0gMGVtIDAgLTFlbSwgLTJlbSAtMmVtIDAgLTFlbTtcbiAgfVxuICA2Mi41JSB7XG4gICAgYm94LXNoYWRvdzogMCAtM2VtIDAgLTFlbSwgMmVtIC0yZW0gMCAtMWVtLCAzZW0gMCAwIC0xZW0sIDJlbSAyZW0gMCAtMWVtLCAwIDNlbSAwIDAsIC0yZW0gMmVtIDAgMC4yZW0sIC0zZW0gMCAwIDAsIC0yZW0gLTJlbSAwIC0xZW07XG4gIH1cbiAgNzUlIHtcbiAgICBib3gtc2hhZG93OiAwZW0gLTNlbSAwIC0xZW0sIDJlbSAtMmVtIDAgLTFlbSwgM2VtIDBlbSAwIC0xZW0sIDJlbSAyZW0gMCAtMWVtLCAwIDNlbSAwIC0xZW0sIC0yZW0gMmVtIDAgMCwgLTNlbSAwZW0gMCAwLjJlbSwgLTJlbSAtMmVtIDAgMDtcbiAgfVxuICA4Ny41JSB7XG4gICAgYm94LXNoYWRvdzogMGVtIC0zZW0gMCAwLCAyZW0gLTJlbSAwIC0xZW0sIDNlbSAwIDAgLTFlbSwgMmVtIDJlbSAwIC0xZW0sIDAgM2VtIDAgLTFlbSwgLTJlbSAyZW0gMCAwLCAtM2VtIDBlbSAwIDAsIC0yZW0gLTJlbSAwIDAuMmVtO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGxvYWQ0IHtcbiAgMCUsXG4gIDEwMCUge1xuICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIDAuMmVtLCAyZW0gLTJlbSAwIDBlbSwgM2VtIDAgMCAtMWVtLCAyZW0gMmVtIDAgLTFlbSwgMCAzZW0gMCAtMWVtLCAtMmVtIDJlbSAwIC0xZW0sIC0zZW0gMCAwIC0xZW0sIC0yZW0gLTJlbSAwIDA7XG4gIH1cbiAgMTIuNSUge1xuICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIDAsIDJlbSAtMmVtIDAgMC4yZW0sIDNlbSAwIDAgMCwgMmVtIDJlbSAwIC0xZW0sIDAgM2VtIDAgLTFlbSwgLTJlbSAyZW0gMCAtMWVtLCAtM2VtIDAgMCAtMWVtLCAtMmVtIC0yZW0gMCAtMWVtO1xuICB9XG4gIDI1JSB7XG4gICAgYm94LXNoYWRvdzogMCAtM2VtIDAgLTAuNWVtLCAyZW0gLTJlbSAwIDAsIDNlbSAwIDAgMC4yZW0sIDJlbSAyZW0gMCAwLCAwIDNlbSAwIC0xZW0sIC0yZW0gMmVtIDAgLTFlbSwgLTNlbSAwIDAgLTFlbSwgLTJlbSAtMmVtIDAgLTFlbTtcbiAgfVxuICAzNy41JSB7XG4gICAgYm94LXNoYWRvdzogMCAtM2VtIDAgLTFlbSwgMmVtIC0yZW0gMCAtMWVtLCAzZW0gMGVtIDAgMCwgMmVtIDJlbSAwIDAuMmVtLCAwIDNlbSAwIDBlbSwgLTJlbSAyZW0gMCAtMWVtLCAtM2VtIDBlbSAwIC0xZW0sIC0yZW0gLTJlbSAwIC0xZW07XG4gIH1cbiAgNTAlIHtcbiAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAtMWVtLCAyZW0gLTJlbSAwIC0xZW0sIDNlbSAwIDAgLTFlbSwgMmVtIDJlbSAwIDBlbSwgMCAzZW0gMCAwLjJlbSwgLTJlbSAyZW0gMCAwLCAtM2VtIDBlbSAwIC0xZW0sIC0yZW0gLTJlbSAwIC0xZW07XG4gIH1cbiAgNjIuNSUge1xuICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIC0xZW0sIDJlbSAtMmVtIDAgLTFlbSwgM2VtIDAgMCAtMWVtLCAyZW0gMmVtIDAgLTFlbSwgMCAzZW0gMCAwLCAtMmVtIDJlbSAwIDAuMmVtLCAtM2VtIDAgMCAwLCAtMmVtIC0yZW0gMCAtMWVtO1xuICB9XG4gIDc1JSB7XG4gICAgYm94LXNoYWRvdzogMGVtIC0zZW0gMCAtMWVtLCAyZW0gLTJlbSAwIC0xZW0sIDNlbSAwZW0gMCAtMWVtLCAyZW0gMmVtIDAgLTFlbSwgMCAzZW0gMCAtMWVtLCAtMmVtIDJlbSAwIDAsIC0zZW0gMGVtIDAgMC4yZW0sIC0yZW0gLTJlbSAwIDA7XG4gIH1cbiAgODcuNSUge1xuICAgIGJveC1zaGFkb3c6IDBlbSAtM2VtIDAgMCwgMmVtIC0yZW0gMCAtMWVtLCAzZW0gMCAwIC0xZW0sIDJlbSAyZW0gMCAtMWVtLCAwIDNlbSAwIC0xZW0sIC0yZW0gMmVtIDAgMCwgLTNlbSAwZW0gMCAwLCAtMmVtIC0yZW0gMCAwLjJlbTtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_neural_neural_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/neural/neural.component */ "kyqW");
/* harmony import */ var _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/main-page/main-page.component */ "oaKM");
/* harmony import */ var _components_v1_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/v1/main-page/main-page.component */ "UW08");
/* harmony import */ var _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/gallery/gallery.component */ "EgB/");
/* harmony import */ var _components_how_print_how_print_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/how-print/how-print.component */ "WtDJ");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-slick-carousel */ "eSVu");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _components_pre_load_pre_load_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/pre-load/pre-load.component */ "ycqb");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _components_photo_not_found_photo_not_found_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/photo-not-found/photo-not-found.component */ "p35z");
/* harmony import */ var _components_payment_format_payment_format_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/payment-format/payment-format.component */ "g++4");
/* harmony import */ var _components_print_print_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/print/print.component */ "fh24");
/* harmony import */ var _components_print_done_print_done_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/print-done/print-done.component */ "n7hL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _components_error_popup_error_popup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/error-popup/error-popup.component */ "S90J");
/* harmony import */ var _components_receipt_popup_receipt_popup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/receipt-popup/receipt-popup.component */ "+JQM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/cart/cart.component */ "QWKc");
/* harmony import */ var _components_pay_pay_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/pay/pay.component */ "rPE0");
/* harmony import */ var _components_send_email_send_email_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/send-email/send-email.component */ "cHCB");
/* harmony import */ var _shared_keyboard_virtual_keyboard_virtual_keyboard_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./shared/keyboard/virtual-keyboard/virtual-keyboard.component */ "eMjM");
/* harmony import */ var _components_print_format_print_format_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/print-format/print-format.component */ "zG83");
/* harmony import */ var _modules_outer_config_outer_config_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./modules/outer-config/outer-config.module */ "ftYp");
/* harmony import */ var _components_photos_camera_camera_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/photos/camera/camera.component */ "Vu4P");
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-webcam */ "QKVY");
/* harmony import */ var _angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/common/locales/ru */ "wq8c");
/* harmony import */ var _angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_datepicker_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./shared/datepicker/datepicker/datepicker.component */ "vnOL");
/* harmony import */ var _shared_locations_location_location_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./shared/locations/location/location.component */ "r8hZ");
/* harmony import */ var _components_selfie_selfie_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/selfie/selfie.component */ "2uRY");
/* harmony import */ var _modules_download_module_smartphone_smartphone_smartphone_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./modules/download-module/smartphone/smartphone/smartphone.component */ "5Nio");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./shared/header/header.component */ "320Y");
/* harmony import */ var _modules_download_module_download_download_download_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./modules/download-module/download/download/download.component */ "oNY9");
/* harmony import */ var _modules_download_module_social_social_social_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./modules/download-module/social/social/social.component */ "b/8j");
/* harmony import */ var _modules_wireless_download_components_wireless_wireless_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./modules/wireless-download/components/wireless/wireless.component */ "Wz3H");
/* harmony import */ var _modules_wireless_download_components_preloader_preloader_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./modules/wireless-download/components/preloader/preloader.component */ "Yx83");
/* harmony import */ var _modules_wireless_download_components_slider_slider_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./modules/wireless-download/components/slider/slider.component */ "B57o");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./core/core.module */ "pKmL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _components_v1_list_photo_list_photo_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/v1/list-photo/list-photo.component */ "+RjQ");










// Import library module



































Object(_angular_common__WEBPACK_IMPORTED_MODULE_30__["registerLocaleData"])(_angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_29___default.a);
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], useValue: 'ru-RU' },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_30__["CommonModule"],
            ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_8__["SlickCarouselModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_41__["CoreModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"],
            ngx_webcam__WEBPACK_IMPORTED_MODULE_28__["WebcamModule"],
            _modules_outer_config_outer_config_module__WEBPACK_IMPORTED_MODULE_26__["OuterConfigModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_42__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_neural_neural_component__WEBPACK_IMPORTED_MODULE_3__["NeuralComponent"],
        _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__["MainPageComponent"],
        _components_v1_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_5__["MainPageComponent"],
        _shared_header_header_component__WEBPACK_IMPORTED_MODULE_35__["HeaderComponent"],
        _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_6__["GalleryComponent"],
        _components_how_print_how_print_component__WEBPACK_IMPORTED_MODULE_7__["HowPrintComponent"],
        _components_pre_load_pre_load_component__WEBPACK_IMPORTED_MODULE_11__["PreLoadComponent"],
        _components_photo_not_found_photo_not_found_component__WEBPACK_IMPORTED_MODULE_13__["PhotoNotFoundComponent"],
        _components_payment_format_payment_format_component__WEBPACK_IMPORTED_MODULE_14__["PaymentFormatComponent"],
        _components_print_print_component__WEBPACK_IMPORTED_MODULE_15__["PrintComponent"],
        _components_print_done_print_done_component__WEBPACK_IMPORTED_MODULE_16__["PrintDoneComponent"],
        _components_error_popup_error_popup_component__WEBPACK_IMPORTED_MODULE_18__["ErrorPopupComponent"],
        _components_receipt_popup_receipt_popup_component__WEBPACK_IMPORTED_MODULE_19__["ReceiptPopupComponent"],
        _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_21__["CartComponent"],
        _components_pay_pay_component__WEBPACK_IMPORTED_MODULE_22__["PayComponent"],
        _components_send_email_send_email_component__WEBPACK_IMPORTED_MODULE_23__["SendEmailComponent"],
        _shared_keyboard_virtual_keyboard_virtual_keyboard_component__WEBPACK_IMPORTED_MODULE_24__["VirtualKeyboardComponent"],
        _components_print_format_print_format_component__WEBPACK_IMPORTED_MODULE_25__["PrintFormatComponent"],
        _components_photos_camera_camera_component__WEBPACK_IMPORTED_MODULE_27__["CameraComponent"],
        _shared_datepicker_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_31__["DatepickerComponent"],
        _shared_locations_location_location_component__WEBPACK_IMPORTED_MODULE_32__["LocationComponent"],
        _components_selfie_selfie_component__WEBPACK_IMPORTED_MODULE_33__["SelfieComponent"],
        _modules_download_module_smartphone_smartphone_smartphone_component__WEBPACK_IMPORTED_MODULE_34__["SmartphoneComponent"],
        _modules_download_module_download_download_download_component__WEBPACK_IMPORTED_MODULE_36__["DownloadComponent"],
        _modules_download_module_social_social_social_component__WEBPACK_IMPORTED_MODULE_37__["SocialComponent"],
        _modules_wireless_download_components_preloader_preloader_component__WEBPACK_IMPORTED_MODULE_39__["PreloaderComponent"],
        _modules_wireless_download_components_slider_slider_component__WEBPACK_IMPORTED_MODULE_40__["SliderComponent"],
        _modules_wireless_download_components_wireless_wireless_component__WEBPACK_IMPORTED_MODULE_38__["WirelessComponent"],
        _components_v1_list_photo_list_photo_component__WEBPACK_IMPORTED_MODULE_43__["ListPhotoComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_30__["CommonModule"],
        ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_8__["SlickCarouselModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_41__["CoreModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"],
        ngx_webcam__WEBPACK_IMPORTED_MODULE_28__["WebcamModule"],
        _modules_outer_config_outer_config_module__WEBPACK_IMPORTED_MODULE_26__["OuterConfigModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_42__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "b/8j":
/*!***************************************************************************!*\
  !*** ./src/app/modules/download-module/social/social/social.component.ts ***!
  \***************************************************************************/
/*! exports provided: SocialComponent, SocialEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialComponent", function() { return SocialComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialEnum", function() { return SocialEnum; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _smartphone_smartphone_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../smartphone/smartphone.service */ "faAt");
/* harmony import */ var src_app_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/navigation.service */ "LFK6");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/header/header.component */ "320Y");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_keyboard_virtual_keyboard_virtual_keyboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/keyboard/virtual-keyboard/virtual-keyboard.component */ "eMjM");






function SocialComponent_div_3_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", user_r5.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r5.nickname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r5.name);
} }
function SocialComponent_div_3_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const teg_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](teg_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](teg_r7.amount);
} }
function SocialComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0441 Instagram");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SocialComponent_div_3_Template_i_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.clearInput(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-virtual-keyboard", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closeKeyboard", function SocialComponent_div_3_Template_app_virtual_keyboard_closeKeyboard_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.showKeyboard = $event; })("changeCurrentValue", function SocialComponent_div_3_Template_app_virtual_keyboard_changeCurrentValue_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.getInputValue($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SocialComponent_div_3_div_14_Template, 7, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "#\u0422\u0435\u0433\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SocialComponent_div_3_div_20_Template, 6, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.currentValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.users);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.tegs);
} }
function SocialComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043F\u043E e-mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u041E\u0442\u043F\u0440\u0430\u0432\u044C\u0442\u0435 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438 \u043D\u0430 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "k299@lomobil.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043A\u043D\u043E\u043F\u043A\u0443 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u041D\u0430\u0439\u0442\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " \u043F\u043E\u0441\u043B\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438 \u043F\u0438\u0441\u044C\u043C\u0430 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u041D\u0430\u0439\u0442\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SocialComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043F\u043E Facebook");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0417\u0430\u0439\u0434\u0438\u0442\u0435 \u0441 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 \u043D\u0430 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "facebook.com/device");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u0438\u043B\u0438 \u043E\u0442\u0441\u043A\u0430\u043D\u0438\u0440\u0443\u0439\u0442\u0435 QR-\u043A\u043E\u0434");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0434:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "375M349Y");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u0435 \u0434\u043E\u0441\u0442\u0443\u043F \u043A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Lomobil Kiosk App");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u0412\u044B\u0445\u043E\u0434 \u0438\u0437 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430 \u0431\u0443\u0434\u0435\u0442 \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438, \u043A\u0430\u043A \u0442\u043E\u043B\u044C\u043A\u043E \u0432\u044B \u0432\u0435\u0440\u043D\u0435\u0442\u0435\u0441\u044C \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u044B\u0439 \u044D\u043A\u0440\u0430\u043D.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\u041D\u0430\u0439\u0442\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SocialComponent {
    constructor(smartphoneService, navigate) {
        this.smartphoneService = smartphoneService;
        this.navigate = navigate;
        this.showKeyboard = false;
        this.currentValue = '';
        this.deactivateActivateButtons = 'prev';
        this.users = [
            {
                avatar: './avtar.svg',
                nickname: 'Barack Obama',
                name: 'Barack Obama'
            },
            {
                avatar: 'img/avtar.svg',
                nickname: 'Barack Obama',
                name: 'Barack Obama'
            },
            {
                avatar: 'img/avtar.svg',
                nickname: 'Barack Obama',
                name: 'Barack Obama'
            },
            {
                avatar: './avtar.svg',
                nickname: 'Barack Obama',
                name: 'Barack Obama'
            },
            {
                avatar: 'img/avtar.svg',
                nickname: 'Barack Obama',
                name: 'Barack Obama'
            },
            {
                avatar: 'img/avtar.svg',
                nickname: 'Barack Obama',
                name: 'Barack Obama'
            },
            {
                avatar: './avtar.svg',
                nickname: 'Barack Obama',
                name: 'Barack Obama'
            },
            {
                avatar: 'img/avtar.svg',
                nickname: 'Barack Obama',
                name: 'Barack Obama'
            },
            {
                avatar: 'img/avtar.svg',
                nickname: 'Barack Obama',
                name: 'Barack Obama'
            },
        ];
        this.tegs = [
            {
                name: '#obama',
                amount: '1 436 публикаций',
            },
            {
                name: '#obama',
                amount: '4 836 4324 публикаций',
            },
            {
                name: '#obama',
                amount: '3 436 11 публикаций',
            },
            {
                name: '#obama',
                amount: '1 436 публикаций',
            },
            {
                name: '#obama',
                amount: '4 836 4324 публикаций',
            },
            {
                name: '#obama',
                amount: '3 436 11 публикаций',
            },
            {
                name: '#obama',
                amount: '1 436 публикаций',
            },
            {
                name: '#obama',
                amount: '4 836 4324 публикаций',
            },
            {
                name: '#obama',
                amount: '3 436 11 публикаций',
            },
        ];
    }
    ngOnInit() {
        switch (this.smartphoneService.uploadMethod) {
            case 'instagram':
                this.social = SocialEnum.Instagram;
                break;
            case 'vk':
                this.social = SocialEnum.VK;
                break;
            case 'facebook':
                this.social = SocialEnum.Facebook;
                break;
        }
        this.navigate.clearURL();
    }
    getInputValue(event) {
        this.currentValue = event;
        this.form.patchValue({ email: this.currentValue });
        // this.checkValidationForm();
    }
    clearInput() {
        this.currentValue = '';
    }
}
SocialComponent.ɵfac = function SocialComponent_Factory(t) { return new (t || SocialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_smartphone_smartphone_service__WEBPACK_IMPORTED_MODULE_1__["SmartphoneService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"])); };
SocialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SocialComponent, selectors: [["app-social"]], decls: 6, vars: 4, consts: [[1, "slot-cell"], [1, "content", 3, "ngSwitch"], ["class", "social_wrap", 4, "ngSwitchCase"], [1, "social_wrap"], [1, "input_wrap"], [1, "icon", "icon-search-inst", "icon-s"], [1, "icon", "icon-close-inst", "icon-s", 3, "click"], ["type", "text", 1, "key_input", 3, "value"], [3, "closeKeyboard", "changeCurrentValue"], [1, "search_result_wrap"], [1, "block"], [1, "head_block"], [1, "result_block"], ["class", "user ", 4, "ngFor", "ngForOf"], ["class", "tegs ", 4, "ngFor", "ngForOf"], [1, "user"], [3, "src"], [1, "username"], [1, "nickname"], [1, "name"], [1, "tegs"], [1, "amount"], [1, "item"], [1, "number"], [1, "main-content"], [1, "green"], [1, "search-btn"], [1, "qr_wrap"], ["src", "../../../../../assets/static/img/qr-down.svg"], [1, "note"]], template: function SocialComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SocialComponent_div_3_Template, 21, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SocialComponent_div_4_Template, 25, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SocialComponent_div_5_Template, 38, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.social);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "instagram");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "vk");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "facebook");
    } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitchCase"], _shared_keyboard_virtual_keyboard_virtual_keyboard_component__WEBPACK_IMPORTED_MODULE_5__["VirtualKeyboardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".social_wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  font-weight: 600;\n  margin-bottom: 48px;\n}\n.social_wrap[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  width: 760px;\n  display: flex;\n  background: #ffffff;\n  box-shadow: 0px 20px 40px rgba(3, 74, 104, 0.2);\n  border-radius: 16px;\n  font-size: 38px;\n  font-style: normal;\n  line-height: 40px;\n  letter-spacing: 0em;\n  text-align: left;\n  padding: 32px 32px 32px 32px;\n  margin-bottom: 32px;\n}\n.social_wrap[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  margin-right: 32px;\n  color: black;\n}\n.social_wrap[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.social_wrap[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  color: rgba(0, 0, 0, 0.5);\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 22px;\n}\n.social_wrap[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   .green[_ngcontent-%COMP%] {\n  background-color: #2aa5a0;\n  background-image: linear-gradient(90deg, #65e17b, #2aa5a0);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  font-weight: 700;\n}\n.social_wrap[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .qr_wrap[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.social_wrap[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .qr_wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  background: #ffffff;\n  box-shadow: 0px 20px 40px rgba(3, 74, 104, 0.2);\n}\n.search-btn[_ngcontent-%COMP%] {\n  width: 760px;\n  height: 160px;\n  background: #ffffff;\n  box-shadow: 0px 20px 40px rgba(3, 74, 104, 0.2);\n  border-radius: 44px;\n  border: none;\n}\n.search-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 38px;\n  line-height: 40px;\n  color: #000000;\n}\n.content[_ngcontent-%COMP%] {\n  width: 768px;\n}\n.key_input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 88px;\n  background: #ffffff;\n  box-shadow: 0px 20px 40px rgba(3, 74, 104, 0.2);\n  border-radius: 16px;\n  border: none;\n  margin-bottom: 8px;\n  outline: none;\n  font-size: 38px;\n  padding: 0 84px;\n  color: #000000;\n}\n.input_wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.icon-s[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.icon-search-inst[_ngcontent-%COMP%] {\n  top: 20px;\n  left: 32px;\n}\n.icon-close-inst[_ngcontent-%COMP%] {\n  top: 24px;\n  right: 32px;\n}\n.nickname[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 16px;\n  color: black;\n}\n.name[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  color: rgba(0, 0, 0, 0.5);\n}\n.user[_ngcontent-%COMP%] {\n  display: flex;\n}\n.username[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.username[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  line-height: 20px;\n}\n.search_result_wrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 56px;\n  max-height: 394px;\n}\n.search_result_wrap[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .head_block[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 368px;\n  height: 74px;\n  background: #ffffff;\n  box-shadow: 0px 20px 40px rgba(3, 74, 104, 0.2);\n  padding: 0 24px;\n  border-top-left-radius: 16px;\n  border-top-right-radius: 16px;\n}\n.search_result_wrap[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .head_block[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 26px;\n  color: #000000;\n}\n.search_result_wrap[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .result_block[_ngcontent-%COMP%] {\n  height: 328px;\n  overflow: scroll;\n  border-bottom-right-radius: 16px;\n  border-bottom-left-radius: 16px;\n}\n.search_result_wrap[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .result_block[_ngcontent-%COMP%]   .tegs[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  width: 368px;\n  background: #ffffff;\n  border: none;\n}\n.search_result_wrap[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .result_block[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  width: 368px;\n  background: #ffffff;\n  border: none;\n}\n.search_result_wrap[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .result_block[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\n  border-bottom-left-radius: 16px;\n  border-bottom-right-radius: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NvY2lhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFBUjtBQUdJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLCtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFFQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FBRlI7QUFJUTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQUZaO0FBS1E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUFIWjtBQUtZO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBSGhCO0FBTVk7RUFDSSx5QkFBQTtFQUNBLDBEQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0FBSmhCO0FBUVE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBTlo7QUFPWTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtBQUxoQjtBQVdBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLCtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBUko7QUFTSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQVBSO0FBV0E7RUFDSSxZQUFBO0FBUko7QUFXQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQVJKO0FBV0E7RUFDSSxrQkFBQTtBQVJKO0FBV0E7RUFDSSxrQkFBQTtBQVJKO0FBV0E7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQVJKO0FBV0E7RUFDSSxTQUFBO0VBQ0EsV0FBQTtBQVJKO0FBV0E7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBUko7QUFXQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFSSjtBQVdBO0VBQ0ksYUFBQTtBQVJKO0FBWUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUFUSjtBQVVJO0VBQ0ksaUJBQUE7QUFSUjtBQVlBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVRKO0FBZVE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQWJaO0FBZVk7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFiaEI7QUFpQlE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0FBZlo7QUFpQlk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFmaEI7QUFrQlk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFoQmhCO0FBb0JRO0VBQ0ksK0JBQUE7RUFDQSxnQ0FBQTtBQWxCWiIsImZpbGUiOiJzb2NpYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc29jaWFsX3dyYXAge1xuICAgIGgxIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQ4cHg7XG4gICAgfVxuXG4gICAgLml0ZW0ge1xuICAgICAgICB3aWR0aDogNzYwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAyMHB4IDQwcHggcmdiYSgzLCA3NCwgMTA0LCAwLjIpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgICAgICBmb250LXNpemU6IDM4cHg7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgLy8gZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwZW07XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHBhZGRpbmc6IDMycHggMzJweCAzMnB4IDMycHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMycHg7XG5cbiAgICAgICAgLm51bWJlciB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMycHg7XG4gICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYWluLWNvbnRlbnQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgICAgIC5ub3RlIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5ncmVlbiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJhYTVhMDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM2NWUxN2IsICMyYWE1YTApO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgICAgICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnFyX3dyYXAge1xuICAgICAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMjBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDIwcHggNDBweCByZ2JhKDMsIDc0LCAxMDQsIDAuMik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5zZWFyY2gtYnRuIHtcbiAgICB3aWR0aDogNzYwcHg7XG4gICAgaGVpZ2h0OiAxNjBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGJveC1zaGFkb3c6IDBweCAyMHB4IDQwcHggcmdiYSgzLCA3NCwgMTA0LCAwLjIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDQ0cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHNwYW4ge1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDM4cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICB9XG59XG5cbi5jb250ZW50IHtcbiAgICB3aWR0aDogNzY4cHg7XG59XG5cbi5rZXlfaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogODhweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGJveC1zaGFkb3c6IDBweCAyMHB4IDQwcHggcmdiYSgzLCA3NCwgMTA0LCAwLjIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICBwYWRkaW5nOiAwIDg0cHg7XG4gICAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5pbnB1dF93cmFwIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pY29uLXMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmljb24tc2VhcmNoLWluc3Qge1xuICAgIHRvcDogMjBweDtcbiAgICBsZWZ0OiAzMnB4O1xufVxuXG4uaWNvbi1jbG9zZS1pbnN0IHtcbiAgICB0b3A6IDI0cHg7XG4gICAgcmlnaHQ6IDMycHg7XG59XG5cbi5uaWNrbmFtZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xufVxuXG4ubmFtZSB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi51c2VyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIFxufVxuXG4udXNlcm5hbWUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBzcGFuIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgfVxufVxuXG4uc2VhcmNoX3Jlc3VsdF93cmFwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW4tdG9wOiA1NnB4O1xuICAgIG1heC1oZWlnaHQ6IDM5NHB4O1xuICAgIFxuICAgIC5ibG9jayB7XG4gICAgICAgIC8vIGhlaWdodDogNTE2cHg7XG4gICAgICAgIFxuXG4gICAgICAgIC5oZWFkX2Jsb2NrIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDM2OHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA3NHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAyMHB4IDQwcHggcmdiYSgzLCA3NCwgMTA0LCAwLjIpO1xuICAgICAgICAgICAgcGFkZGluZzogMCAyNHB4O1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTZweDtcbiAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNnB4O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucmVzdWx0X2Jsb2Nre1xuICAgICAgICAgICAgaGVpZ2h0OiAzMjhweDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTZweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE2cHg7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC50ZWdzIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDI0cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDM2OHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgLnVzZXIge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMjRweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzY4cHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucmVzdWx0X2Jsb2NrIGRpdjpsYXN0LWNoaWxke1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTZweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgfVxufVxuIl19 */"] });
var SocialEnum;
(function (SocialEnum) {
    SocialEnum["Instagram"] = "instagram";
    SocialEnum["VK"] = "vk";
    SocialEnum["Facebook"] = "facebook";
})(SocialEnum || (SocialEnum = {}));


/***/ }),

/***/ "cHCB":
/*!***************************************************************!*\
  !*** ./src/app/components/send-email/send-email.component.ts ***!
  \***************************************************************/
/*! exports provided: SendEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendEmailComponent", function() { return SendEmailComponent; });
/* harmony import */ var src_app_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core */ "ey9i");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_services_broker_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/broker.service */ "VsY3");
/* harmony import */ var src_app_shared_services_client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/client.service */ "oR8h");
/* harmony import */ var src_app_shared_services_photo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/photo.service */ "ny42");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-slick-carousel */ "eSVu");
/* harmony import */ var _shared_keyboard_virtual_keyboard_virtual_keyboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/keyboard/virtual-keyboard/virtual-keyboard.component */ "eMjM");










function SendEmailComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u0432\u044B \u0432\u0432\u0435\u043B\u0438 \u043D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 e-mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SendEmailComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SendEmailComponent_div_16_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const slide_r4 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.onSelectItem(slide_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SendEmailComponent_div_16_Template_img_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const slide_r4 = ctx.$implicit; const i_r5 = ctx.index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.deleteEl(slide_r4, i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active-slide", slide_r4.isCheckedOnEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", slide_r4.thumbUri, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("img_delete_visib", slide_r4.isChecked);
} }
function SendEmailComponent_app_virtual_keyboard_27_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-virtual-keyboard", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("closeKeyboard", function SendEmailComponent_app_virtual_keyboard_27_Template_app_virtual_keyboard_closeKeyboard_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.onCloseKeyboard($event); })("changeCurrentValue", function SendEmailComponent_app_virtual_keyboard_27_Template_app_virtual_keyboard_changeCurrentValue_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.onChangeEmail($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r3.email);
} }
class SendEmailComponent {
    constructor(fb, router, brokerService, clientService, photoService) {
        this.fb = fb;
        this.router = router;
        this.brokerService = brokerService;
        this.clientService = clientService;
        this.photoService = photoService;
        this.slides = [];
        this.sumCount = 0;
        this.slideConfig = {
            autoplay: false,
            vertical: false,
            verticalSwiping: false,
            slidesToShow: 3,
            slidesToScroll: 3,
            // centerMode: true,
            arrows: true,
            infinite: false,
        };
        this.showKeyboard = true;
        this.email = '';
        this.deactivateActivateButtons = 'prev';
        this.activeClose = false;
        this.isValid = false;
        this.isChecking = false;
        this.validationStatus = '';
    }
    ngOnInit() {
        src_app_core__WEBPACK_IMPORTED_MODULE_0__["ActivityMode"].startTimer();
        this.slides = this.clientService.photoToCart.map((item) => {
            item.isCheckedOnEmail = false;
            item.sumOfPaper = 0;
            item.totalPrice = this.brokerService.priceForEmail;
            item.totalCount = 1;
            item.sumOfEmail = 1;
            item.thumbUri = typeof item.thumbUri == 'object' ? item.thumbUri.changingThisBreaksApplicationSecurity : item.originalUri;
            return item;
        });
        this.photoService.photo = this.slides;
        this.sumCount = this.slides.length * this.brokerService.priceForEmail;
        this.brokerService.sumForPay = this.sumCount;
    }
    onSelectItem(slide) {
        if (!this.activeSlide) {
            this.activeSlide = slide;
            if (this.activeSlide.isCheckedOnEmail == true) {
                this.activeSlide.isCheckedOnEmail = false;
            }
            else {
                this.activeSlide.isCheckedOnEmail = true;
            }
        }
        else {
            this.activeSlide.isCheckedOnEmail = false;
            this.activeSlide = slide;
            if (this.activeSlide.isCheckedOnEmail == true) {
                this.activeSlide.isCheckedOnEmail = false;
            }
            else {
                this.activeSlide.isCheckedOnEmail = true;
            }
        }
    }
    isEmail(email) {
        return /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(email);
    }
    checkValidationForm() {
        if (this.isEmail(this.email)) {
            this.isValid = true;
            this.validationStatus = 'success';
            return;
        }
        this.isValid = false;
        this.validationStatus = 'error';
    }
    onChangeEmail(event) {
        this.email = event;
        this.checkValidationForm();
        console.log('event', event);
    }
    deleteEl(slide, i) {
        this.slides.splice(i, 1);
        this.sumCount -= this.brokerService.priceForEmail;
        this.brokerService.sumForPay = this.sumCount;
    }
    goBack() {
        this.clientService.email = null;
        this.router.navigate(['howPrint']);
    }
    goHome() {
        this.clientService.email = null;
        this.router.navigate(['']);
    }
    onCloseKeyboard(status) {
        if (status) {
            this.showKeyboard = false;
            this.checkValidationForm();
        }
    }
    goNext() {
        this.clientService.email = this.email;
        this.router.navigate(['paymentFormat']);
    }
}
SendEmailComponent.ɵfac = function SendEmailComponent_Factory(t) { return new (t || SendEmailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_broker_service__WEBPACK_IMPORTED_MODULE_4__["BrokerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_client_service__WEBPACK_IMPORTED_MODULE_5__["ClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_photo_service__WEBPACK_IMPORTED_MODULE_6__["PhotoService"])); };
SendEmailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SendEmailComponent, selectors: [["app-send-email"]], decls: 28, vars: 11, consts: [[1, "slot", 2, "height", "1180px"], [1, "header"], [1, "header-icons"], [1, "icon-wrap", 3, "click"], [1, "icon", "icon-back"], [1, "icon", "icon-home"], [1, "content"], [1, "title"], [1, "item", "email-item", "js__email-form"], ["type", "email", "required", "", "pattern", "/^([a-z0-9_-]+\\.)*[a-z0-9_-]+@[a-z0-9_-]+(\\.[a-z0-9_-]+)*\\.[a-z]{2,6}$/", "placeholder", "\u0412\u0430\u0448 email", 1, "e-input", "js__e-input", "input-email", 3, "ngModel", "ngModelChange", "focus", "blur", "click"], ["class", "form-error", 4, "ngIf"], [1, "slider-main"], [1, "carousel", 3, "config"], ["slickModal", "slick-carousel"], ["ngxSlickItem", "", "class", "slide", 4, "ngFor", "ngForOf"], [1, "img-box__add"], ["src", "././assets/static/img/search.png"], [1, "payment-btn", 3, "disabled", "click"], [1, "icon", "icon-pay-card"], [3, "value", "closeKeyboard", "changeCurrentValue", 4, "ngIf"], [1, "form-error"], ["ngxSlickItem", "", 1, "slide"], [1, "wrap"], [1, "img-box", 3, "click"], ["alt", "", "width", "148px", "height", "106px", 3, "src"], ["src", "../../../assets/img/close.svg", 1, "img_delete", 3, "click"], [3, "value", "closeKeyboard", "changeCurrentValue"]], template: function SendEmailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SendEmailComponent_Template_div_click_3_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SendEmailComponent_Template_div_click_5_listener() { return ctx.goHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438 \u043D\u0430 e-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SendEmailComponent_Template_input_ngModelChange_11_listener($event) { return ctx.email = $event; })("focus", function SendEmailComponent_Template_input_focus_11_listener() { return ctx.showKeyboard = true; })("blur", function SendEmailComponent_Template_input_blur_11_listener() { return ctx.isChecking = true; })("click", function SendEmailComponent_Template_input_click_11_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, SendEmailComponent_div_12_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ngx-slick-carousel", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, SendEmailComponent_div_16_Template, 5, 5, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\u041D\u0430\u0439\u0442\u0438 \u0435\u0449\u0435 \u0444\u043E\u0442\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SendEmailComponent_Template_button_click_21_listener() { return ctx.goNext(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\u041E\u043F\u043B\u0430\u0442\u0438\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, SendEmailComponent_app_virtual_keyboard_27_Template, 1, 1, "app-virtual-keyboard", 19);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active-error", ctx.validationStatus === "error" && ctx.isChecking)("input-success", ctx.validationStatus === "success" && ctx.isChecking);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.validationStatus === "error" && ctx.isChecking);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("config", ctx.slideConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.slides);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.validationStatus === "error" && !ctx.isValid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.sumCount, " \u20BD");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showKeyboard);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_8__["SlickCarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_8__["SlickItemDirective"], _shared_keyboard_virtual_keyboard_virtual_keyboard_component__WEBPACK_IMPORTED_MODULE_9__["VirtualKeyboardComponent"]], styles: [".slot[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border-radius: 60px;\n  display: flex;\n  flex-direction: column;\n  background: rgba(255, 255, 255, 0.7);\n  -webkit-backdrop-filter: blur(94px);\n          backdrop-filter: blur(94px);\n  border-radius: 60px;\n}\n\n.icon-wrap[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  padding: 32px 32px 0 32px;\n}\n\n.header-icons[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  width: 570px;\n  font-style: normal;\n  font-size: 48px;\n  line-height: 52px;\n  font-weight: 600;\n  margin-top: 12px;\n  color: black;\n  text-align: center;\n}\n\n.icon-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  width: 64px;\n  height: 64px;\n  background: #ffffff;\n  box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.2);\n  border-radius: 100px;\n  align-items: center;\n  justify-content: center;\n}\n\n.icon-wrap[_ngcontent-%COMP%]:first-child {\n  margin-right: 12px;\n}\n\n.func_wrap[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 58px;\n}\n\n.slider-main[_ngcontent-%COMP%] {\n  width: 888px;\n  height: 212px;\n  margin-bottom: 304px;\n}\n\n.slick-slider[_ngcontent-%COMP%] {\n  width: auto;\n}\n\n.slick-list[_ngcontent-%COMP%] {\n  height: 90% !important;\n}\n\n.slick-slide[_ngcontent-%COMP%] {\n  display: flex;\n  color: white;\n  font-size: 30px;\n  text-align: center;\n  width: 212px !important;\n  margin-left: 6px;\n  margin-right: 6px;\n}\n\n.slick-slide[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\n  width: 212px;\n  height: 286px;\n  display: flex;\n  flex-direction: column;\n  margin-left: 12px;\n  margin-right: 12px;\n}\n\n.slick-slide[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%] {\n  width: 212px;\n  height: 212px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.5);\n  box-shadow: 0px 15px 30px rgba(3, 74, 104, 0.1);\n  border-radius: 44px;\n  cursor: pointer;\n  position: relative;\n}\n\n.slick-slide[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  object-fit: cover;\n}\n\n.slick-slide[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]   .icon-wrap[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  position: absolute;\n  bottom: -17px;\n  right: -17px;\n}\n\n.slick-track[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.img-box.active-slide[_ngcontent-%COMP%] {\n  border: 10px solid #36b049;\n  position: relative;\n}\n\n.img_delete[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -16px;\n  bottom: -16px;\n  display: none;\n  width: 44px;\n  height: 44px;\n  background: #ffffff;\n  box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.2);\n  border-radius: 100px;\n  cursor: pointer;\n}\n\n.img_delete_visib[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.payment-btn[_ngcontent-%COMP%] {\n  width: 760px;\n  height: 160px;\n  background: #ffffff;\n  box-shadow: 0px 20px 40px rgba(3, 74, 104, 0.2);\n  border-radius: 44px;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.payment-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 32px;\n}\n\n.payment-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #000000;\n  font-weight: 600;\n  font-size: 38px;\n  line-height: 40px;\n  margin-right: 20px;\n}\n\n.payment-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  margin-right: 0px;\n}\n\n.payment-btn[disabled][_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n.email-item[_ngcontent-%COMP%] {\n  margin-top: 48px;\n  margin-bottom: 80px;\n}\n\n.e-input[_ngcontent-%COMP%] {\n  width: 760px;\n  height: 88px;\n  background: rgba(255, 255, 255, 0.5);\n  border-radius: 16px;\n  border: none;\n  font-weight: 600;\n  font-size: 38px;\n  line-height: 40px;\n  padding: 0px 32px;\n  outline: none;\n}\n\n.form-error[_ngcontent-%COMP%] {\n  display: flex;\n  color: #ff2d2b;\n  padding-top: 24px;\n  font-size: 18px;\n  justify-content: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n}\n\n.active-error[_ngcontent-%COMP%] {\n  width: 754px;\n  height: 82px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 38px;\n  line-height: 40px;\n  color: #ff2d2b;\n  border: 3px solid #ff2d2b !important;\n}\n\n.input-success[_ngcontent-%COMP%] {\n  border: 3px solid darkgreen !important;\n  width: 754px;\n  height: 82px;\n}\n\napp-virtual-keyboard[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 844px;\n  width: 760px;\n  z-index: 1001;\n  left: 157px;\n}\n\n.img-box__add[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.5);\n  box-shadow: rgba(3, 74, 104, 0.1) 0px 15px 30px;\n  border-radius: 44px;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 32px 38px;\n  margin: 0px 18px;\n  width: 212px;\n  height: 212px;\n}\n\n.img-box__add[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 28px;\n  font-weight: bold;\n  font-size: 20px;\n  color: rgba(0, 0, 0, 0.5);\n  margin-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlbmQtZW1haWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFDRTtFQUNFLGFBQUE7QUFDSjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBRUEsWUFBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDRDQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FBREY7O0FBS0U7RUFDRSxXQUFBO0FBRko7O0FBS0U7RUFDRSxzQkFBQTtBQUhKOztBQU1FO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBRUEsa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFMSjs7QUFNSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUpOOztBQUtNO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0NBQUE7RUFDQSwrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBSFI7O0FBSVE7RUFDRSxpQkFBQTtBQUZWOztBQUtRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBSFY7O0FBU0U7RUFDRSxhQUFBO0FBUEo7O0FBV0E7RUFHRSwwQkFBQTtFQUNBLGtCQUFBO0FBVkY7O0FBMEJBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsNENBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUF2QkY7O0FBMEJBO0VBQ0UsY0FBQTtBQXZCRjs7QUEwQkE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQXZCRjs7QUF5QkU7RUFDRSxrQkFBQTtBQXZCSjs7QUEwQkU7RUFFRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQXpCSjs7QUE0QkU7RUFDRSxpQkFBQTtBQTFCSjs7QUE4QkE7RUFDRSxZQUFBO0FBM0JGOztBQThCQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUEzQkY7O0FBOEJBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBRUEsaUJBQUE7RUFDQSxhQUFBO0FBNUJGOztBQWlDQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FBOUJGOztBQWlDQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBQ0Esb0NBQUE7QUEvQkY7O0FBa0NBO0VBQ0Usc0NBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQS9CRjs7QUFrQ0E7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQS9CRjs7QUFrQ0E7RUFDRSxvQ0FBQTtFQUNBLCtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUEvQkY7O0FBZ0NFO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBOUJKIiwiZmlsZSI6InNlbmQtZW1haWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2xvdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDYwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDk0cHgpO1xuICBib3JkZXItcmFkaXVzOiA2MHB4O1xufVxuXG4uaWNvbi13cmFwIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMzJweCAzMnB4IDAgMzJweDtcblxuICAmLWljb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG59XG5cbi5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvbnRlbnQgLnRpdGxlIHtcbiAgd2lkdGg6IDU3MHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgbGluZS1oZWlnaHQ6IDUycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIC8vIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pY29uLXdyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogNjRweDtcbiAgaGVpZ2h0OiA2NHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwcHggMTJweCAyMHB4IHJnYigwIDAgMCAvIDIwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmljb24td3JhcDpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbn1cblxuLmZ1bmNfd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDU4cHg7XG59XG5cbi5zbGlkZXItbWFpbiB7XG4gIHdpZHRoOiA4ODhweDtcbiAgaGVpZ2h0OiAyMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMzA0cHg7XG59XG5cbi5zbGljayB7XG4gICYtc2xpZGVyIHtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuXG4gICYtbGlzdCB7XG4gICAgaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcbiAgfVxuXG4gICYtc2xpZGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAvLyBmb250LWZhbWlseTogXCJBcmlhbFwiLCBcIkhlbHZldGljYVwiO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMjEycHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogNnB4O1xuICAgIG1hcmdpbi1yaWdodDogNnB4O1xuICAgIC53cmFwIHtcbiAgICAgIHdpZHRoOiAyMTJweDtcbiAgICAgIGhlaWdodDogMjg2cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgICAgLmltZy1ib3gge1xuICAgICAgICB3aWR0aDogMjEycHg7XG4gICAgICAgIGhlaWdodDogMjEycHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDMwcHggcmdiYSgzLCA3NCwgMTA0LCAwLjEpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0NHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pY29uLXdyYXAge1xuICAgICAgICAgIHdpZHRoOiA0OHB4O1xuICAgICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm90dG9tOiAtMTdweDtcbiAgICAgICAgICByaWdodDogLTE3cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmLXRyYWNrIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG59XG5cbi5pbWctYm94LmFjdGl2ZS1zbGlkZSB7XG4gIC8vIHdpZHRoOiAxOTJweCAhaW1wb3J0YW50O1xuICAvLyBoZWlnaHQ6IDE5MnB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMTBweCBzb2xpZCAjMzZiMDQ5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8vICY6YWZ0ZXJ7XG4gIC8vICAgICBjb250ZW50OiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9jbG9zZS5zdmcpO1xuICAvLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAvLyAgICAgcmlnaHQ6IC0xN3B4O1xuICAvLyAgICAgYm90dG9tOiAtMTdweDtcbiAgLy8gICAgIGRpc3BsYXk6IGJsb2NrO1xuICAvLyAgICAgd2lkdGg6IDQ0cHg7XG4gIC8vICAgICBoZWlnaHQ6IDQ0cHg7XG4gIC8vICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAvLyAgICAgYm94LXNoYWRvdzogMHB4IDEycHggMjBweCByZ2IoMCAwIDAgLyAyMCUpO1xuICAvLyAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIC8vICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIC8vIH1cbn1cblxuLmltZ19kZWxldGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtMTZweDtcbiAgYm90dG9tOiAtMTZweDtcbiAgZGlzcGxheTogbm9uZTtcbiAgd2lkdGg6IDQ0cHg7XG4gIGhlaWdodDogNDRweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMHB4IDEycHggMjBweCByZ2IoMCAwIDAgLyAyMCUpO1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaW1nX2RlbGV0ZV92aXNpYntcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5wYXltZW50LWJ0biB7XG4gIHdpZHRoOiA3NjBweDtcbiAgaGVpZ2h0OiAxNjBweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMHB4IDIwcHggNDBweCByZ2JhKDMsIDc0LCAxMDQsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDQ0cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgaSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xuICB9XG5cbiAgc3BhbiB7XG4gICAgLy8gZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIH1cblxuICBzcGFuOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICB9XG59XG5cbi5wYXltZW50LWJ0bltkaXNhYmxlZF0ge1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5lbWFpbC1pdGVtIHtcbiAgbWFyZ2luLXRvcDogNDhweDtcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcbn1cblxuLmUtaW5wdXQge1xuICB3aWR0aDogNzYwcHg7XG4gIGhlaWdodDogODhweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMzhweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIC8vIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmc6IDBweCAzMnB4O1xuICBvdXRsaW5lOiBub25lO1xuICAvLyB0ZXh0LWFsaWduOiBlbmQ7XG4gIC8vIGRpcmVjdGlvbjogcnRsO1xufVxuXG4uZm9ybS1lcnJvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbG9yOiAjZmYyZDJiO1xuICBwYWRkaW5nLXRvcDogMjRweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLmFjdGl2ZS1lcnJvciB7XG4gIHdpZHRoOiA3NTRweDtcbiAgaGVpZ2h0OiA4MnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzOHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgLy8gZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICNmZjJkMmI7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNmZjJkMmIgIWltcG9ydGFudDtcbn1cblxuLmlucHV0LXN1Y2Nlc3Mge1xuICBib3JkZXI6IDNweCBzb2xpZCBkYXJrZ3JlZW4gIWltcG9ydGFudDtcbiAgd2lkdGg6IDc1NHB4O1xuICBoZWlnaHQ6IDgycHg7XG59XG5cbmFwcC12aXJ0dWFsLWtleWJvYXJkIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDg0NHB4O1xuICB3aWR0aDogNzYwcHg7XG4gIHotaW5kZXg6IDEwMDE7XG4gIGxlZnQ6IDE1N3B4O1xufVxuXG4uaW1nLWJveF9fYWRkIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBib3gtc2hhZG93OiByZ2IoMyA3NCAxMDQgLyAxMCUpIDBweCAxNXB4IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDQ0cHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAzMnB4IDM4cHg7XG4gIG1hcmdpbjogMHB4IDE4cHg7XG4gIHdpZHRoOiAyMTJweDtcbiAgaGVpZ2h0OiAyMTJweDtcbiAgcCB7XG4gICAgbWFyZ2luLXRvcDogMjhweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "eMjM":
/*!********************************************************************************!*\
  !*** ./src/app/shared/keyboard/virtual-keyboard/virtual-keyboard.component.ts ***!
  \********************************************************************************/
/*! exports provided: VirtualKeyboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualKeyboardComponent", function() { return VirtualKeyboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var simple_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! simple-keyboard */ "3X/P");
/* harmony import */ var simple_keyboard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(simple_keyboard__WEBPACK_IMPORTED_MODULE_1__);



class VirtualKeyboardComponent {
    constructor() {
        this.changeCurrentValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.closeKeyboard = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /*onChangeKeyboard = (input: string) => {
          this.value += input;
          this.changeCurrentValue.emit(this.value);
        };*/
        this.onKeyPress = (button) => {
            console.log('onKeyPress', button);
            // if (button === "{default}" ||
            //     button === "{alt}" ||
            //     button === "{shiftactivated}" ||
            //     button === "{shift}" ) this.handleLayoutChange(button);
            switch (button) {
                case '{bksp}': {
                    this.value = this.value.substring(0, this.value.length - 1);
                    break;
                }
                case '{confirm}': {
                    this.closeKeyboard.emit(true);
                    return;
                }
                default: {
                    this.value += button;
                    break;
                }
            }
            this.changeCurrentValue.emit(this.value);
            return;
        };
    }
    ngOnInit() {
    }
    ngAfterContentChecked() {
    }
    ngAfterViewInit() {
        this.keyboard = new simple_keyboard__WEBPACK_IMPORTED_MODULE_1___default.a({
            //onChange: (input) => this.onChangeKeyboard.call(this, input),
            onKeyPress: (button) => this.onKeyPress.call(this, button),
            theme: "hg-theme-default myTheme1",
            layout: {
                default: [
                    "1 2 3 4 5 6 7 8 9 0",
                    "q w e r t y u i o p",
                    "a s d f g h j k l",
                    "z x c v b n m",
                    "{bksp} . _ - @ {confirm}"
                ],
            },
            display: {
                "{confirm}": "Готово",
                "{bksp}": "⌫",
            },
            buttonTheme: [
                {
                    class: 'confirm',
                    buttons: 'Готово',
                }
            ]
        });
    }
    onBlurField(value) {
        console.log('onBlurField model', value);
        this.keyboard.setInput(this.value);
    }
    handleLayoutChange(button) {
        let currentLayout = this.keyboard.options.layoutName;
        let layoutName;
        switch (button) {
            // case "{shift}":
            // case "{shiftactivated}":
            // case "{default}":
            //   layoutName = currentLayout === "default" ? "shift" : "default";
            //   break;
            // case "{alt}":
            // case "{altright}":
            //   layoutName = currentLayout === "alt" ? "default" : "alt";
            //   break;
            // default:
            //   break;
        }
        if (layoutName) {
            this.keyboard.setOptions({
                layoutName: layoutName
            });
        }
    }
}
VirtualKeyboardComponent.ɵfac = function VirtualKeyboardComponent_Factory(t) { return new (t || VirtualKeyboardComponent)(); };
VirtualKeyboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VirtualKeyboardComponent, selectors: [["app-virtual-keyboard"]], inputs: { value: "value" }, outputs: { changeCurrentValue: "changeCurrentValue", closeKeyboard: "closeKeyboard" }, decls: 3, vars: 1, consts: [[2, "text-align", "center"], ["type", "hidden", "placeholder", "Tap on the virtual keyboard to start", 1, "hiddenInput", 3, "value", "change"], [1, "simple-keyboard"]], template: function VirtualKeyboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function VirtualKeyboardComponent_Template_input_change_1_listener($event) { return ctx.onBlurField($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.value);
    } }, styles: ["ul {\n  text-align: center;\n}\n\n.simple-keyboard {\n  max-width: 1080px;\n}\n\n.hg-theme-default {\n  border-radius: 16px !important;\n  padding: 40px 0px !important;\n  background: #FFFFFF !important;\n  box-shadow: 0px 20px 40px rgba(3, 74, 104, 0.2) !important;\n}\n\n.simple-keyboard.myTheme1 .hg-row .hg-button-confirm {\n  background: linear-gradient(152.09deg, #87DC9F 10.63%, #36B049 86.4%) !important;\n  color: #ffffff;\n  width: 116px !important;\n  margin-left: 70px;\n}\n\n.simple-keyboard.myTheme1 .hg-row .hg-button-bksp {\n  width: 78px !important;\n  margin-right: 70px !important;\n}\n\n.hg-theme-default .hg-row {\n  justify-content: center;\n}\n\n.hg-theme-default .hg-button:not(:last-child) {\n  margin-right: 12px !important;\n}\n\n.hg-theme-default .hg-button {\n  flex-grow: unset !important;\n}\n\n.simple-keyboard.myTheme1 .hg-button {\n  background: #ffffff;\n  color: #000000;\n  height: 48px;\n  width: 44px !important;\n  border-radius: 12px;\n}\n\n.simple-keyboard.hg-layout-default .hg-button span {\n  font-size: 28px;\n  margin-bottom: -3px;\n  margin-left: -2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3ZpcnR1YWwta2V5Ym9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKOztBQUVFO0VBQ0UsaUJBQUE7QUFDSjs7QUFFRTtFQUNFLDhCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLDBEQUFBO0FBQ0o7O0FBR0U7RUFDRSxnRkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBR0U7RUFDRSxzQkFBQTtFQUNBLDZCQUFBO0FBQUo7O0FBR0U7RUFDRSx1QkFBQTtBQUFKOztBQUdFO0VBQ0UsNkJBQUE7QUFBSjs7QUFHQTtFQUNFLDJCQUFBO0FBQUY7O0FBR0U7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFBSiIsImZpbGUiOiJ2aXJ0dWFsLWtleWJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgLnNpbXBsZS1rZXlib2FyZCB7XG4gICAgbWF4LXdpZHRoOiAxMDgwcHg7XG4gIH1cblxuICAuaGctdGhlbWUtZGVmYXVsdCB7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDQwcHggMHB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRiAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IDBweCAyMHB4IDQwcHggcmdiYSgzLCA3NCwgMTA0LCAwLjIpICFpbXBvcnRhbnQ7XG5cbiAgfVxuXG4gIC5zaW1wbGUta2V5Ym9hcmQubXlUaGVtZTEgLmhnLXJvdyAuaGctYnV0dG9uLWNvbmZpcm17XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE1Mi4wOWRlZywgIzg3REM5RiAxMC42MyUsICMzNkIwNDkgODYuNCUpICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgd2lkdGg6IDExNnB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDcwcHg7XG4gIH1cblxuICAuc2ltcGxlLWtleWJvYXJkLm15VGhlbWUxIC5oZy1yb3cgLmhnLWJ1dHRvbi1ia3Nwe1xuICAgIHdpZHRoOiA3OHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiA3MHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaGctdGhlbWUtZGVmYXVsdCAuaGctcm93e1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLmhnLXRoZW1lLWRlZmF1bHQgLmhnLWJ1dHRvbjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHggIWltcG9ydGFudDtcbn1cblxuLmhnLXRoZW1lLWRlZmF1bHQgLmhnLWJ1dHRvbiB7XG4gIGZsZXgtZ3JvdzogdW5zZXQgIWltcG9ydGFudDtcbn1cbiAgXG4gIC5zaW1wbGUta2V5Ym9hcmQubXlUaGVtZTEgLmhnLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjsvLy9rZXkgYmFja2dyb3VuZCBjb2xvcnNcbiAgICBjb2xvcjogIzAwMDAwMDsvLy9rZXkgc3ltYm9scyBjb2xvcnNcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgd2lkdGg6IDQ0cHggIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICB9XG4gIFxuICAuc2ltcGxlLWtleWJvYXJkLmhnLWxheW91dC1kZWZhdWx0IC5oZy1idXR0b24gc3BhbiB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IC0zcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0ycHg7XG4gIH1cbiAgXG4gIC8vIC5zaW1wbGUta2V5Ym9hcmQuaGctbGF5b3V0LWFsdCAuaGctYnV0dG9uIHNwYW4ge1xuICAvLyAgIGZvbnQtc2l6ZTogMjRweDtcbiAgLy8gfVxuICBcbiAgLy8gLnNpbXBsZS1rZXlib2FyZC5oZy1sYXlvdXQtc2hpZnQgLmhnLWJ1dHRvbiBzcGFuIHtcbiAgLy8gICBmb250LXNpemU6IDMwcHg7XG4gIC8vIH1cbiAgXG4gIC8vIC5zaW1wbGUta2V5Ym9hcmQubXlUaGVtZTEgLmhnLWJ1dHRvbjphY3RpdmUge1xuICAvLyAgIGJhY2tncm91bmQ6ICM1QTVBNUE7XG4gIC8vICAgY29sb3I6ICNmZmZmZmY7XG4gIC8vIH1cbiAgXG4gIC8vIC5zaW1wbGUta2V5Ym9hcmQuaGctbGF5b3V0LWRlZmF1bHQgLnNwZWNpYWwtc3ltYm9sIHtcbiAgLy8gICBjb2xvcjogIzVBNUE1QTtcbiAgLy8gICBtYXgtd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gIC8vIH1cbiAgXG4gIC8vIC5zaW1wbGUta2V5Ym9hcmQuaGctbGF5b3V0LXNoaWZ0IC5zcGVjaWFsLXN5bWJvbCB7XG4gIC8vICAgY29sb3I6ICM1QTVBNUE7XG4gIC8vICAgbWF4LXdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xuICAvLyB9XG4gIFxuICAvLyAuc2ltcGxlLWtleWJvYXJkLmhnLWxheW91dC1kZWZhdWx0IC5hbHQta2V5IHtcbiAgLy8gICBjb2xvcjogIzVBNUE1QTtcbiAgLy8gICBtYXgtd2lkdGg6IDIwMHB4O1xuICAvLyB9XG4gIFxuICAvLyAuc2ltcGxlLWtleWJvYXJkLmhnLWxheW91dC1zaGlmdCAuYWx0LWtleSB7XG4gIC8vICAgY29sb3I6ICM1QTVBNUE7XG4gIC8vICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgLy8gfVxuICBcbiAgXG4gIC8vIC5zaW1wbGUta2V5Ym9hcmQuaGctbGF5b3V0LWRlZmF1bHQgLnNoaWZ0LWtleXMge1xuICAvLyAgIGNvbG9yOiAjNUE1QTVBO1xuICAvLyAgIG1heC13aWR0aDogMTI1cHg7XG4gIC8vICAgd2lkdGg6IDEyNXB4O1xuICAvLyB9XG4gIFxuICAvLyAuc2ltcGxlLWtleWJvYXJkLmhnLWxheW91dC1zaGlmdCAuc2hpZnQta2V5cyB7XG4gIC8vICAgY29sb3I6ICM1QTVBNUE7XG4gIC8vICAgbWF4LXdpZHRoOiAxMjVweDtcbiAgLy8gICB3aWR0aDogMTI1cHg7XG4gIC8vIH1cbiAgXG4gIC8vIC5oZy1idXR0b24tc2hpZnRhY3RpdmF0ZWR7XG4gIC8vICAgY29sb3I6ICM1QTVBNUE7XG4gIC8vICAgbWF4LXdpZHRoOiAxMjVweDtcbiAgLy8gICB3aWR0aDogMTI1cHg7XG4gIC8vIH1cbiAgXG4gIFxuICAvLyAuc2ltcGxlLWtleWJvYXJkLmhnLWxheW91dC1hbHQgLnNoaWZ0LWtleXMge1xuICAvLyAgIGNvbG9yOiAjNUE1QTVBO1xuICAvLyAgIG1heC13aWR0aDogMTI1cHg7XG4gIC8vICAgd2lkdGg6IDEyNXB4O1xuICAvLyB9XG4gIFxuICAvLyAuc2ltcGxlLWtleWJvYXJkLmhnLWxheW91dC1kZWZhdWx0IC5lbnRlci1rZXkge1xuICAvLyAgIGNvbG9yOiAjNUE1QTVBO1xuICAvLyAgIG1heC13aWR0aDogMjAwcHg7XG4gIC8vICAgd2lkdGg6IDIwMHB4O1xuICAvLyB9XG4gIFxuICAvLyAuc2ltcGxlLWtleWJvYXJkLmhnLWxheW91dC1zaGlmdCAuZW50ZXIta2V5IHtcbiAgLy8gICBjb2xvcjogIzVBNUE1QTtcbiAgLy8gICBtYXgtd2lkdGg6IDIwMHB4O1xuICAvLyAgIHdpZHRoOiAyMDBweDtcbiAgLy8gfVxuICBcbiAgLy8gLnNpbXBsZS1rZXlib2FyZC5oZy1sYXlvdXQtYWx0IC5lbnRlci1rZXkge1xuICAvLyAgIGNvbG9yOiAjNUE1QTVBO1xuICAvLyAgIG1heC13aWR0aDogMjAwcHg7XG4gIC8vICAgd2lkdGg6IDIwMHB4O1xuICAvLyB9XG4gIFxuICAvLyAuc2ltcGxlLWtleWJvYXJkLmhnLWxheW91dC1kZWZhdWx0IC5kZWxldGUta2V5IHtcbiAgLy8gICBjb2xvcjogIzVBNUE1QTtcbiAgLy8gICBtYXgtd2lkdGg6IDg3cHg7XG4gIC8vICAgd2lkdGg6IDg3cHg7XG4gIC8vIH1cbiAgXG4gIC8vIC5zaW1wbGUta2V5Ym9hcmQuaGctbGF5b3V0LXNoaWZ0IC5kZWxldGUta2V5IHtcbiAgLy8gICBjb2xvcjogIzVBNUE1QTtcbiAgLy8gICBtYXgtd2lkdGg6IDg3cHg7XG4gIC8vICAgd2lkdGg6IDg3cHg7XG4gIC8vIH1cbiAgXG4gIC8vIC5zaW1wbGUta2V5Ym9hcmQuaGctbGF5b3V0LWFsdCAuZGVsZXRlLWtleSB7XG4gIC8vICAgY29sb3I6ICM1QTVBNUE7XG4gIC8vICAgbWF4LXdpZHRoOiA4N3B4O1xuICAvLyAgIHdpZHRoOiA4N3B4O1xuICAvLyB9XG4gICJdfQ== */", "/*!\n * \n *   simple-keyboard v3.1.22\n *   https://github.com/hodgef/simple-keyboard\n *\n *   Copyright (c) Francisco Hodge (https://github.com/hodgef) and project contributors.\n *\n *   This source code is licensed under the MIT license found in the\n *   LICENSE file in the root directory of this source tree.\n *\n */.hg-theme-default{background-color:#ececec;border-radius:5px;box-sizing:border-box;font-family:HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;overflow:hidden;padding:5px;touch-action:manipulation;-webkit-user-select:none;user-select:none;width:100%}.hg-theme-default .hg-button span{pointer-events:none}.hg-theme-default button.hg-button{border-width:0;font-size:inherit;outline:0}.hg-theme-default .hg-button{display:inline-block;flex-grow:1}.hg-theme-default .hg-row{display:flex}.hg-theme-default .hg-row:not(:last-child){margin-bottom:5px}.hg-theme-default .hg-row .hg-button-container,.hg-theme-default .hg-row .hg-button:not(:last-child){margin-right:5px}.hg-theme-default .hg-row>div:last-child{margin-right:0}.hg-theme-default .hg-row .hg-button-container{display:flex}.hg-theme-default .hg-button{-webkit-tap-highlight-color:rgba(0,0,0,0);align-items:center;background:#fff;border-bottom:1px solid #b5b5b5;border-radius:5px;box-shadow:0 0 3px -1px rgba(0,0,0,.3);box-sizing:border-box;cursor:pointer;display:flex;height:40px;justify-content:center;padding:5px}.hg-theme-default .hg-button.hg-standardBtn{width:20px}.hg-theme-default .hg-button.hg-activeButton{background:#efefef}.hg-theme-default.hg-layout-numeric .hg-button{align-items:center;display:flex;height:60px;justify-content:center;width:33.3%}.hg-theme-default .hg-button.hg-button-numpadadd,.hg-theme-default .hg-button.hg-button-numpadenter{height:85px}.hg-theme-default .hg-button.hg-button-numpad0{width:105px}.hg-theme-default .hg-button.hg-button-com{max-width:85px}.hg-theme-default .hg-button.hg-standardBtn.hg-button-at{max-width:45px}.hg-theme-default .hg-button.hg-selectedButton{background:rgba(5,25,70,.53);color:#fff}.hg-theme-default .hg-button.hg-standardBtn[data-skbtn=\".com\"]{max-width:82px}.hg-theme-default .hg-button.hg-standardBtn[data-skbtn=\"@\"]{max-width:60px}.hg-candidate-box{background:#ececec;border-bottom:2px solid #b5b5b5;border-radius:5px;display:inline-flex;margin-top:-10px;max-width:272px;position:absolute;transform:translateY(-100%);-webkit-user-select:none;user-select:none}ul.hg-candidate-box-list{display:flex;flex:1;list-style:none;margin:0;padding:0}li.hg-candidate-box-list-item{align-items:center;display:flex;height:40px;justify-content:center;width:40px}li.hg-candidate-box-list-item:hover{background:rgba(0,0,0,.03);cursor:pointer}li.hg-candidate-box-list-item:active{background:rgba(0,0,0,.1)}.hg-candidate-box-prev:before{content:\"\u25C4\"}.hg-candidate-box-next:before{content:\"\u25BA\"}.hg-candidate-box-next,.hg-candidate-box-prev{align-items:center;background:#d0d0d0;color:#969696;cursor:pointer;display:flex;padding:0 10px}.hg-candidate-box-next{border-bottom-right-radius:5px;border-top-right-radius:5px}.hg-candidate-box-prev{border-bottom-left-radius:5px;border-top-left-radius:5px}.hg-candidate-box-btn-active{color:#444}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztFQVVFLENBQUMsa0JBQWtCLHdCQUF3QixDQUFDLGlCQUFpQixDQUFDLHFCQUFxQixDQUFDLDRHQUE0RyxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMseUJBQXlCLENBQUMsd0JBQXdCLENBQTRDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxrQ0FBa0MsbUJBQW1CLENBQUMsbUNBQW1DLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsNkJBQTZCLG9CQUFvQixDQUFDLFdBQVcsQ0FBQywwQkFBMEIsWUFBWSxDQUFDLDJDQUEyQyxpQkFBaUIsQ0FBQyxxR0FBcUcsZ0JBQWdCLENBQUMseUNBQXlDLGNBQWMsQ0FBQywrQ0FBK0MsWUFBWSxDQUFDLDZCQUE2Qix5Q0FBeUMsQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsK0JBQStCLENBQUMsaUJBQWlCLENBQUMsc0NBQXNDLENBQUMscUJBQXFCLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsc0JBQXNCLENBQUMsV0FBVyxDQUFDLDRDQUE0QyxVQUFVLENBQUMsNkNBQTZDLGtCQUFrQixDQUFDLCtDQUErQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLHNCQUFzQixDQUFDLFdBQVcsQ0FBQyxvR0FBb0csV0FBVyxDQUFDLCtDQUErQyxXQUFXLENBQUMsMkNBQTJDLGNBQWMsQ0FBQyx5REFBeUQsY0FBYyxDQUFDLCtDQUErQyw0QkFBNEIsQ0FBQyxVQUFVLENBQUMsK0RBQStELGNBQWMsQ0FBQyw0REFBNEQsY0FBYyxDQUFDLGtCQUFrQixrQkFBa0IsQ0FBQywrQkFBK0IsQ0FBQyxpQkFBaUIsQ0FBQyxtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsMkJBQTJCLENBQUMsd0JBQXdCLENBQTRDLGdCQUFnQixDQUFDLHlCQUF5QixZQUFZLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLDhCQUE4QixrQkFBa0IsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLHNCQUFzQixDQUFDLFVBQVUsQ0FBQyxvQ0FBb0MsMEJBQTBCLENBQUMsY0FBYyxDQUFDLHFDQUFxQyx5QkFBeUIsQ0FBQyw4QkFBOEIsV0FBVyxDQUFDLDhCQUE4QixXQUFXLENBQUMsOENBQThDLGtCQUFrQixDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyx1QkFBdUIsOEJBQThCLENBQUMsMkJBQTJCLENBQUMsdUJBQXVCLDZCQUE2QixDQUFDLDBCQUEwQixDQUFDLDZCQUE2QixVQUFVIiwiZmlsZSI6ImluZGV4LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogXG4gKiAgIHNpbXBsZS1rZXlib2FyZCB2My4xLjIyXG4gKiAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ob2RnZWYvc2ltcGxlLWtleWJvYXJkXG4gKlxuICogICBDb3B5cmlnaHQgKGMpIEZyYW5jaXNjbyBIb2RnZSAoaHR0cHM6Ly9naXRodWIuY29tL2hvZGdlZikgYW5kIHByb2plY3QgY29udHJpYnV0b3JzLlxuICpcbiAqICAgVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiAgIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi8uaGctdGhlbWUtZGVmYXVsdHtiYWNrZ3JvdW5kLWNvbG9yOiNlY2VjZWM7Ym9yZGVyLXJhZGl1czo1cHg7Ym94LXNpemluZzpib3JkZXItYm94O2ZvbnQtZmFtaWx5OkhlbHZldGljYU5ldWUtTGlnaHQsSGVsdmV0aWNhIE5ldWUgTGlnaHQsSGVsdmV0aWNhIE5ldWUsSGVsdmV0aWNhLEFyaWFsLEx1Y2lkYSBHcmFuZGUsc2Fucy1zZXJpZjtvdmVyZmxvdzpoaWRkZW47cGFkZGluZzo1cHg7dG91Y2gtYWN0aW9uOm1hbmlwdWxhdGlvbjstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7d2lkdGg6MTAwJX0uaGctdGhlbWUtZGVmYXVsdCAuaGctYnV0dG9uIHNwYW57cG9pbnRlci1ldmVudHM6bm9uZX0uaGctdGhlbWUtZGVmYXVsdCBidXR0b24uaGctYnV0dG9ue2JvcmRlci13aWR0aDowO2ZvbnQtc2l6ZTppbmhlcml0O291dGxpbmU6MH0uaGctdGhlbWUtZGVmYXVsdCAuaGctYnV0dG9ue2Rpc3BsYXk6aW5saW5lLWJsb2NrO2ZsZXgtZ3JvdzoxfS5oZy10aGVtZS1kZWZhdWx0IC5oZy1yb3d7ZGlzcGxheTpmbGV4fS5oZy10aGVtZS1kZWZhdWx0IC5oZy1yb3c6bm90KDpsYXN0LWNoaWxkKXttYXJnaW4tYm90dG9tOjVweH0uaGctdGhlbWUtZGVmYXVsdCAuaGctcm93IC5oZy1idXR0b24tY29udGFpbmVyLC5oZy10aGVtZS1kZWZhdWx0IC5oZy1yb3cgLmhnLWJ1dHRvbjpub3QoOmxhc3QtY2hpbGQpe21hcmdpbi1yaWdodDo1cHh9LmhnLXRoZW1lLWRlZmF1bHQgLmhnLXJvdz5kaXY6bGFzdC1jaGlsZHttYXJnaW4tcmlnaHQ6MH0uaGctdGhlbWUtZGVmYXVsdCAuaGctcm93IC5oZy1idXR0b24tY29udGFpbmVye2Rpc3BsYXk6ZmxleH0uaGctdGhlbWUtZGVmYXVsdCAuaGctYnV0dG9uey13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjpyZ2JhKDAsMCwwLDApO2FsaWduLWl0ZW1zOmNlbnRlcjtiYWNrZ3JvdW5kOiNmZmY7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2I1YjViNTtib3JkZXItcmFkaXVzOjVweDtib3gtc2hhZG93OjAgMCAzcHggLTFweCByZ2JhKDAsMCwwLC4zKTtib3gtc2l6aW5nOmJvcmRlci1ib3g7Y3Vyc29yOnBvaW50ZXI7ZGlzcGxheTpmbGV4O2hlaWdodDo0MHB4O2p1c3RpZnktY29udGVudDpjZW50ZXI7cGFkZGluZzo1cHh9LmhnLXRoZW1lLWRlZmF1bHQgLmhnLWJ1dHRvbi5oZy1zdGFuZGFyZEJ0bnt3aWR0aDoyMHB4fS5oZy10aGVtZS1kZWZhdWx0IC5oZy1idXR0b24uaGctYWN0aXZlQnV0dG9ue2JhY2tncm91bmQ6I2VmZWZlZn0uaGctdGhlbWUtZGVmYXVsdC5oZy1sYXlvdXQtbnVtZXJpYyAuaGctYnV0dG9ue2FsaWduLWl0ZW1zOmNlbnRlcjtkaXNwbGF5OmZsZXg7aGVpZ2h0OjYwcHg7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDozMy4zJX0uaGctdGhlbWUtZGVmYXVsdCAuaGctYnV0dG9uLmhnLWJ1dHRvbi1udW1wYWRhZGQsLmhnLXRoZW1lLWRlZmF1bHQgLmhnLWJ1dHRvbi5oZy1idXR0b24tbnVtcGFkZW50ZXJ7aGVpZ2h0Ojg1cHh9LmhnLXRoZW1lLWRlZmF1bHQgLmhnLWJ1dHRvbi5oZy1idXR0b24tbnVtcGFkMHt3aWR0aDoxMDVweH0uaGctdGhlbWUtZGVmYXVsdCAuaGctYnV0dG9uLmhnLWJ1dHRvbi1jb217bWF4LXdpZHRoOjg1cHh9LmhnLXRoZW1lLWRlZmF1bHQgLmhnLWJ1dHRvbi5oZy1zdGFuZGFyZEJ0bi5oZy1idXR0b24tYXR7bWF4LXdpZHRoOjQ1cHh9LmhnLXRoZW1lLWRlZmF1bHQgLmhnLWJ1dHRvbi5oZy1zZWxlY3RlZEJ1dHRvbntiYWNrZ3JvdW5kOnJnYmEoNSwyNSw3MCwuNTMpO2NvbG9yOiNmZmZ9LmhnLXRoZW1lLWRlZmF1bHQgLmhnLWJ1dHRvbi5oZy1zdGFuZGFyZEJ0bltkYXRhLXNrYnRuPVwiLmNvbVwiXXttYXgtd2lkdGg6ODJweH0uaGctdGhlbWUtZGVmYXVsdCAuaGctYnV0dG9uLmhnLXN0YW5kYXJkQnRuW2RhdGEtc2tidG49XCJAXCJde21heC13aWR0aDo2MHB4fS5oZy1jYW5kaWRhdGUtYm94e2JhY2tncm91bmQ6I2VjZWNlYztib3JkZXItYm90dG9tOjJweCBzb2xpZCAjYjViNWI1O2JvcmRlci1yYWRpdXM6NXB4O2Rpc3BsYXk6aW5saW5lLWZsZXg7bWFyZ2luLXRvcDotMTBweDttYXgtd2lkdGg6MjcycHg7cG9zaXRpb246YWJzb2x1dGU7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEwMCUpOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX11bC5oZy1jYW5kaWRhdGUtYm94LWxpc3R7ZGlzcGxheTpmbGV4O2ZsZXg6MTtsaXN0LXN0eWxlOm5vbmU7bWFyZ2luOjA7cGFkZGluZzowfWxpLmhnLWNhbmRpZGF0ZS1ib3gtbGlzdC1pdGVte2FsaWduLWl0ZW1zOmNlbnRlcjtkaXNwbGF5OmZsZXg7aGVpZ2h0OjQwcHg7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDo0MHB4fWxpLmhnLWNhbmRpZGF0ZS1ib3gtbGlzdC1pdGVtOmhvdmVye2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMDMpO2N1cnNvcjpwb2ludGVyfWxpLmhnLWNhbmRpZGF0ZS1ib3gtbGlzdC1pdGVtOmFjdGl2ZXtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjEpfS5oZy1jYW5kaWRhdGUtYm94LXByZXY6YmVmb3Jle2NvbnRlbnQ6XCLil4RcIn0uaGctY2FuZGlkYXRlLWJveC1uZXh0OmJlZm9yZXtjb250ZW50Olwi4pa6XCJ9LmhnLWNhbmRpZGF0ZS1ib3gtbmV4dCwuaGctY2FuZGlkYXRlLWJveC1wcmV2e2FsaWduLWl0ZW1zOmNlbnRlcjtiYWNrZ3JvdW5kOiNkMGQwZDA7Y29sb3I6Izk2OTY5NjtjdXJzb3I6cG9pbnRlcjtkaXNwbGF5OmZsZXg7cGFkZGluZzowIDEwcHh9LmhnLWNhbmRpZGF0ZS1ib3gtbmV4dHtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo1cHg7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6NXB4fS5oZy1jYW5kaWRhdGUtYm94LXByZXZ7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czo1cHg7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czo1cHh9LmhnLWNhbmRpZGF0ZS1ib3gtYnRuLWFjdGl2ZXtjb2xvcjojNDQ0fSJdfQ== */"], encapsulation: 2 });


/***/ }),

/***/ "ey9i":
/*!*******************************!*\
  !*** ./src/app/core/index.ts ***!
  \*******************************/
/*! exports provided: ActivityMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _handlers_activity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/activity */ "+DAo");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActivityMode", function() { return _handlers_activity__WEBPACK_IMPORTED_MODULE_0__["ActivityMode"]; });




/***/ }),

/***/ "faAt":
/*!**************************************************************************!*\
  !*** ./src/app/modules/download-module/smartphone/smartphone.service.ts ***!
  \**************************************************************************/
/*! exports provided: SmartphoneService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartphoneService", function() { return SmartphoneService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SmartphoneService {
    constructor() { }
}
SmartphoneService.ɵfac = function SmartphoneService_Factory(t) { return new (t || SmartphoneService)(); };
SmartphoneService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SmartphoneService, factory: SmartphoneService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "fh24":
/*!*****************************************************!*\
  !*** ./src/app/components/print/print.component.ts ***!
  \*****************************************************/
/*! exports provided: PrintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintComponent", function() { return PrintComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class PrintComponent {
    constructor() { }
    ngOnInit() {
    }
}
PrintComponent.ɵfac = function PrintComponent_Factory(t) { return new (t || PrintComponent)(); };
PrintComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrintComponent, selectors: [["app-print"]], decls: 7, vars: 0, consts: [[1, "print", 2, "height", "1180px"], [1, "print-main"], ["src", "././assets/static/img/print-done.png", "alt", "", 1, "photo-main__content-img"], [1, "print-main__title"], [1, "print-main__count"]], template: function PrintComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u041F\u0435\u0447\u0430\u0442\u0430\u0435\u043C \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "32");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".print[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.7);\n  -webkit-backdrop-filter: blur(94px);\n          backdrop-filter: blur(94px);\n  border-radius: 60px;\n}\n.print-main[_ngcontent-%COMP%] {\n  padding: 120px 64px;\n  text-align: center;\n}\n.print-main__title[_ngcontent-%COMP%] {\n  margin-top: 64px;\n  font-weight: 600;\n  font-size: 48px;\n  text-align: center;\n}\n.print-main__count[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3ByaW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0NBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUFJO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBQUVSO0FBQVE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBRVo7QUFDUTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQ1oiLCJmaWxlIjoicHJpbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpbnQge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOTRweCk7XG4gICAgYm9yZGVyLXJhZGl1czogNjBweDtcbiAgICAmLW1haW4ge1xuICAgICAgICBwYWRkaW5nOiAxMjBweCA2NHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgJl9fdGl0bGUge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNjRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAmX19jb3VudCB7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiA4MHB4O1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ "ftYp":
/*!*************************************************************!*\
  !*** ./src/app/modules/outer-config/outer-config.module.ts ***!
  \*************************************************************/
/*! exports provided: loadConfig, OuterConfigModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadConfig", function() { return loadConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OuterConfigModule", function() { return OuterConfigModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.service */ "tmTl");





function loadConfig(app) {
    return () => {
        return new Promise((resolve, reject) => {
            app.load();
            setTimeout(() => {
                if (app.isStatusLoad()) {
                    resolve();
                }
            }, 500);
        });
    };
}
class OuterConfigModule {
}
OuterConfigModule.ɵfac = function OuterConfigModule_Factory(t) { return new (t || OuterConfigModule)(); };
OuterConfigModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OuterConfigModule });
OuterConfigModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [
        _settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"],
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
            useFactory: loadConfig,
            deps: [_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"]],
            multi: true
        },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OuterConfigModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]] }); })();


/***/ }),

/***/ "g++4":
/*!***********************************************************************!*\
  !*** ./src/app/components/payment-format/payment-format.component.ts ***!
  \***********************************************************************/
/*! exports provided: PaymentFormatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentFormatComponent", function() { return PaymentFormatComponent; });
/* harmony import */ var src_app_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core */ "ey9i");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_services_howPrint_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/howPrint.service */ "krGR");




class PaymentFormatComponent {
    constructor(router, printService) {
        this.router = router;
        this.printService = printService;
        this.disabled = true;
    }
    ngOnInit() {
        src_app_core__WEBPACK_IMPORTED_MODULE_0__["ActivityMode"].startTimer();
    }
    goBack() {
        this.router.navigate(['cart']);
    }
    goHome() {
        this.router.navigate(['']);
    }
    goNext(method) {
        this.printService.method = method;
        this.router.navigate(['pay']);
    }
}
PaymentFormatComponent.ɵfac = function PaymentFormatComponent_Factory(t) { return new (t || PaymentFormatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_howPrint_service__WEBPACK_IMPORTED_MODULE_3__["HowPrintService"])); };
PaymentFormatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PaymentFormatComponent, selectors: [["app-payment-format"]], decls: 23, vars: 1, consts: [[1, "payment", 2, "height", "1180px"], [1, "header"], [1, "header-icons"], [1, "icon-wrap", 3, "click"], [1, "icon", "icon-back"], [1, "icon", "icon-home"], [1, "payment-main"], [1, "payment-main__title"], [1, "payment-main__grids"], [1, "payment-main__grid", "payment-main__grid-full", 3, "click"], ["src", "././assets/static/img/payment-card.png", "alt", "", 1, "payment-main__grid-img"], [1, "payment-main__grid-title"], [1, "payment-main__grid", 3, "click"], ["src", "././assets/static/img/payment-money.png", "alt", "", 1, "payment-main__grid-img"], [1, "payment-main__grid", 3, "disabled", "click"], ["src", "././assets/static/img/payment-qr.png", "alt", "", 1, "payment-main__grid-img"]], template: function PaymentFormatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PaymentFormatComponent_Template_div_click_3_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PaymentFormatComponent_Template_div_click_5_listener() { return ctx.goHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u0412\u044B\u0431\u0435\u0440\u0435\u0442\u0435 \u0444\u043E\u0440\u043C\u0430\u0442 \u043E\u043F\u043B\u0430\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PaymentFormatComponent_Template_button_click_11_listener() { return ctx.goNext("Card"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\u041A\u0430\u0440\u0442\u043E\u0439");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PaymentFormatComponent_Template_button_click_15_listener() { return ctx.goNext("Union"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\u041A\u0443\u043F\u044E\u0440\u0430\u043C\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PaymentFormatComponent_Template_button_click_19_listener() { return ctx.goNext("QR"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "QR-\u043A\u043E\u0434 \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.disabled);
    } }, styles: [".payment[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.7);\n  -webkit-backdrop-filter: blur(94px);\n          backdrop-filter: blur(94px);\n  border-radius: 60px;\n}\n.payment-header[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 32px 32px 0 32px;\n}\n.payment-header__btn[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #FFFFFF;\n  background-size: cover;\n  padding: 8px;\n  box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.2);\n  border-radius: 100px;\n  margin: 0px 12px;\n}\n.payment-main[_ngcontent-%COMP%] {\n  padding: 0px 64px;\n}\n.payment-main__title[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  font-weight: 600;\n  font-size: 48px;\n  text-align: center;\n}\n.payment-main__grids[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n.payment-main__grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  background: #FFFFFF;\n  padding: 68px 24px;\n  box-shadow: 0px 20px 40px rgba(3, 74, 104, 0.2);\n  border-radius: 44px;\n  width: 46%;\n  height: 340px;\n  margin: 32px 0;\n}\n.payment-main__grid[_ngcontent-%COMP%]:nth-child(2) {\n  margin-right: 24px;\n}\n.payment-main__grid-full[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  max-height: 340px;\n}\n.payment-main__grid-full[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 4rem;\n}\n.payment-main__grid-title[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 38px;\n  margin: 0;\n  text-align: center;\n}\n.payment-main__grid-price[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 24px;\n  color: rgba(0, 0, 0, 0.4);\n}\n.payment-main__grid-img[_ngcontent-%COMP%] {\n  height: 100%;\n  max-height: 90px;\n}\n.icon-wrap[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  padding: 32px 32px 0 32px;\n}\n.header-icons[_ngcontent-%COMP%] {\n  display: flex;\n}\n.icon-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  width: 64px;\n  height: 64px;\n  background: #ffffff;\n  box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.2);\n  border-radius: 100px;\n  align-items: center;\n  justify-content: center;\n}\n.icon-wrap[_ngcontent-%COMP%]:first-child {\n  margin-right: 12px;\n}\nbutton[_ngcontent-%COMP%] {\n  border: none;\n}\nbutton[disabled][_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BheW1lbnQtZm9ybWF0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0NBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUNJO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0FBQ1I7QUFBUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLDRDQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQUVaO0FBRUk7RUFDSSxpQkFBQTtBQUFSO0FBRVE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQVo7QUFHUTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QUFEWjtBQUlRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBRlo7QUFJWTtFQUNJLGtCQUFBO0FBRmhCO0FBS1k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBSGhCO0FBSWdCO0VBQ0ksZ0JBQUE7QUFGcEI7QUFNWTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBSmhCO0FBT1k7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQUxoQjtBQVFZO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FBTmhCO0FBWUE7RUFDSSxlQUFBO0FBVEo7QUFZQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFUSjtBQVdJO0VBQ0ksYUFBQTtBQVRSO0FBYUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDRDQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBVko7QUFhQTtFQUNJLGtCQUFBO0FBVko7QUFhQTtFQUNJLFlBQUE7QUFWSjtBQWFBO0VBQ0ksWUFBQTtBQVZKIiwiZmlsZSI6InBheW1lbnQtZm9ybWF0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBheW1lbnQge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOTRweCk7XG4gICAgYm9yZGVyLXJhZGl1czogNjBweDtcblxuICAgICYtaGVhZGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgcGFkZGluZzogMzJweCAzMnB4IDAgMzJweDtcbiAgICAgICAgJl9fYnRue1xuICAgICAgICAgICAgd2lkdGg6IDY0cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDY0cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMTJweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwcHggMTJweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtbWFpbiB7XG4gICAgICAgIHBhZGRpbmc6IDBweCA2NHB4O1xuXG4gICAgICAgICZfX3RpdGxlIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiA0OHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgJl9fZ3JpZHMge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgfVxuXG4gICAgICAgICZfX2dyaWQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgICAgICAgICAgcGFkZGluZzogNjhweCAyNHB4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDIwcHggNDBweCByZ2JhKDMsIDc0LCAxMDQsIDAuMik7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0NHB4O1xuICAgICAgICAgICAgd2lkdGg6IDQ2JTtcbiAgICAgICAgICAgIGhlaWdodDogMzQwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDMycHggMDtcblxuICAgICAgICAgICAgJjpudGgtY2hpbGQoMil7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLWZ1bGwge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAzNDBweDtcbiAgICAgICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDRyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLXRpdGxlIHtcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDM4cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi1wcmljZSB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYtaW1nIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogOTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmljb24td3JhcHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5oZWFkZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAzMnB4IDMycHggMCAzMnB4O1xuXG4gICAgJi1pY29ucyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxufVxuXG4uaWNvbi13cmFwe1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDY0cHg7XG4gICAgaGVpZ2h0OiA2NHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgYm94LXNoYWRvdzogMHB4IDEycHggMjBweCByZ2IoMCAwIDAgLyAyMCUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pY29uLXdyYXA6Zmlyc3QtY2hpbGR7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuXG5idXR0b257XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG5idXR0b25bZGlzYWJsZWRde1xuICAgIG9wYWNpdHk6IDAuNTtcbn0iXX0= */"] });


/***/ }),

/***/ "kj9m":
/*!**************************************************!*\
  !*** ./src/app/shared/services/mocks.service.ts ***!
  \**************************************************/
/*! exports provided: MocksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MocksService", function() { return MocksService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class MocksService {
    constructor(http) {
        this.http = http;
        this.sampleImage = '';
        this.getImageForSearch().subscribe(image => this.sampleImage = image);
    }
    getMockMassive() {
        return [
            {
                brandId: 7,
                path: "././assets/static/img/p2.jpg",
                thumbUri: "././assets/static/img/p2.jpg",
                sumOfPaper: 1,
                originalUri: "././assets/static/img/p2.jpg",
            },
            {
                brandId: 7,
                path: "././assets/static/img/p2.jpg",
                thumbUri: "././assets/static/img/p2.jpg",
                sumOfPaper: 1,
                originalUri: "././assets/static/img/p2.jpg",
            },
            {
                brandId: 7,
                path: "././assets/static/img/p2.jpg",
                thumbUri: "././assets/static/img/p2.jpg",
                sumOfPaper: 1,
                originalUri: "././assets/static/img/p2.jpg",
            },
            {
                brandId: 7,
                path: "././assets/static/img/p2.jpg",
                thumbUri: "././assets/static/img/p2.jpg",
                sumOfPaper: 1,
                originalUri: "././assets/static/img/p2.jpg",
            },
            {
                brandId: 7,
                path: "././assets/static/img/p2.jpg",
                thumbUri: "././assets/static/img/p2.jpg",
                sumOfPaper: 1,
                originalUri: "././assets/static/img/p2.jpg",
            }
        ];
    }
    getMockSupportJSON() {
        return this.http.get('././assets/mocks/test-massive.json');
    }
    getImageForSearch() {
        return this.http.get('/assets/mocks/myPhoto.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((item) => item.image1));
    }
    getMockCheckJSON() {
        return this.http.get('././assets/mocks/check.json');
    }
    getCertainFacesSearchJSON() {
        return this.http.get('././assets/mocks/certain-faces-search.json');
    }
}
MocksService.ɵfac = function MocksService_Factory(t) { return new (t || MocksService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
MocksService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MocksService, factory: MocksService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "krGR":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/howPrint.service.ts ***!
  \*****************************************************/
/*! exports provided: HowPrintService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowPrintService", function() { return HowPrintService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HowPrintService {
    constructor() { }
}
HowPrintService.ɵfac = function HowPrintService_Factory(t) { return new (t || HowPrintService)(); };
HowPrintService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HowPrintService, factory: HowPrintService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "kyqW":
/*!*******************************************************!*\
  !*** ./src/app/components/neural/neural.component.ts ***!
  \*******************************************************/
/*! exports provided: NeuralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeuralComponent", function() { return NeuralComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core */ "ey9i");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_services_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/client.service */ "oR8h");
/* harmony import */ var src_app_shared_services_camera_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/camera.service */ "p341");
/* harmony import */ var src_app_shared_services_mocks_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/mocks.service */ "kj9m");
/* harmony import */ var src_app_shared_services_broker_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/broker.service */ "VsY3");
/* harmony import */ var src_app_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/navigation.service */ "LFK6");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _photos_camera_camera_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../photos/camera/camera.component */ "Vu4P");












function NeuralComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NeuralComponent_div_12_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.isLocation && ctx_r2.navigate.navigate("datepicker"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("loc_valid", !ctx_r0.isValidationDate)("empty-data", !ctx_r0.selectedDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.selectedDate || "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435\u00A0\u0434\u0430\u0442\u0443", " ");
} }
function NeuralComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0425\u043E\u0442\u0438\u0442\u0435 \u0440\u0430\u0441\u043F\u0435\u0447\u0430\u0442\u0430\u0442\u044C \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438 \u0441 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 \u0438\u043B\u0438 \u0438\u0437 \u0441\u043E\u0446. \u0441\u0435\u0442\u0435\u0439?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NeuralComponent_div_24_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.goGallery(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0441\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NeuralComponent {
    constructor(router, clientService, cameraService, mocksService, brokerService, navigate, location) {
        this.router = router;
        this.clientService = clientService;
        this.cameraService = cameraService;
        this.mocksService = mocksService;
        this.brokerService = brokerService;
        this.navigate = navigate;
        this.location = location;
        this.photoForSearch = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); ///
        this.takePhoto = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectedLocations = this.clientService.location || 'Выберите локацию';
        this.isLocation = this.clientService.location ? true : false;
        this.selectedDate = this.clientService.date;
        this.selectedDateTitle = 'Выберите дату';
        this.webcamImage = null;
        this.isValidationLocation = true;
        this.isValidationDate = true;
        this.blur = false;
        this.timeLeft = 3;
        this.flash = false;
        this.blur_white = false;
        this.captureImageData = false;
    }
    handleImage(webcamImage) {
        this.webcamImage = webcamImage;
    }
    ngOnInit() {
        src_app_core__WEBPACK_IMPORTED_MODULE_1__["ActivityMode"].startTimer();
        this.clientService.neiron.subscribe(item => {
            this.clientService.certainFacesSearch({
                location: 'DC',
                limit: 15,
                offset: 0,
                sampleImage: this.cameraService.photo_search,
                date: moment__WEBPACK_IMPORTED_MODULE_2__().format('YYYY-MM-DD'),
            })
                .subscribe(() => {
                this.clientService.getClient().subscribe((item) => {
                    this.cameraService.setRotateCamera(item.devices.webCamera.rotate);
                    this.brokerService.priceForPaper = (item.products[0].costPenny / 100);
                    // this.brokerService.priceForPaper = 1
                    this.brokerService.priceForEmail = (item.products[1].costPenny / 100);
                });
                this.clientService.standBy().subscribe((item) => {
                });
            });
        });
        this.navigate.clearURL();
    }
    startTimer() {
        setInterval(() => {
            var _a;
            if (this.timeLeft > 0) {
                this.timeLeft--;
                if (this.timeLeft == 0) {
                    this.flash = true;
                    this.blur_white = true;
                    // this.photoForSearch.emit({
                    //   sampleImage: this.webcamImage?.imageAsDataUrl!
                    // });
                    this.takePhoto.emit({
                        sampleImage: (_a = this.webcamImage) === null || _a === void 0 ? void 0 : _a.imageAsDataUrl
                    });
                    // this.blur = false
                    setTimeout(() => {
                        this.router.navigate(['gallery']);
                    }, 1000);
                }
            }
        }, 1000);
    }
    navigateTo(rout) {
        this.navigate.navigate(rout);
    }
    goGallery() {
        if (!this.isLocation) {
            this.isValidationLocation = false;
        }
        /*if (!this.selectedDate) {
          this.isValidationDate = false;
        } */
        if (!this.isValidationLocation || !this.isValidationDate) {
            return;
        }
        this.blur = true;
        this.startTimer();
    }
}
NeuralComponent.ɵfac = function NeuralComponent_Factory(t) { return new (t || NeuralComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_client_service__WEBPACK_IMPORTED_MODULE_4__["ClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_camera_service__WEBPACK_IMPORTED_MODULE_5__["CameraService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_mocks_service__WEBPACK_IMPORTED_MODULE_6__["MocksService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_broker_service__WEBPACK_IMPORTED_MODULE_7__["BrokerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_8__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"])); };
NeuralComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NeuralComponent, selectors: [["app-neural-page"]], outputs: { photoForSearch: "photoForSearch" }, decls: 25, vars: 13, consts: [["classs", "container neural-page", 2, "display", "flex", "flex-direction", "column", "align-items", "center"], [1, "wrap"], [1, "item_wrap", "location_block"], [1, "icon-wrap", 3, "click"], [1, "icon", "icon-back"], [1, "title"], [1, "func-loc"], [1, "loc_select", 3, "click"], ["class", "neural-page__data-select", 3, "loc_valid", "empty-data", "click", 4, "ngIf"], [1, "item_wrap", "selfie_block"], [1, "camera_wrapper"], [1, "camera", 3, "takePhoto", "pictureTaken"], [1, "interval"], [1, "selfie_btn", 3, "click"], [1, "icon", "icon-selfie"], ["class", "item_wrap func_block", 4, "ngIf"], [1, "neural-page__data-select", 3, "click"], [1, "item_wrap", "func_block"], [1, "social-sets"], ["href", "/"], [1, "icon", "icon-photo"], [1, "icon", "icon-download"], [1, "icon", "icon-vk"], [1, "btn", 3, "click"]], template: function NeuralComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NeuralComponent_Template_div_click_3_listener() { return ctx.navigateTo(""); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0421\u0434\u0435\u043B\u0430\u0439\u0442\u0435 \u0441\u0435\u043B\u0444\u0438 \u0438 \u043C\u044B \u043D\u0430\u0439\u0434\u0435\u043C \u0432\u0441\u0435 \u0432\u0430\u0448\u0438 \u0444\u043E\u0442\u043E, \u0441\u0434\u0435\u043B\u0430\u043D\u043D\u044B\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0432");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NeuralComponent_Template_div_click_10_listener() { return ctx.navigateTo("location"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NeuralComponent_div_12_Template, 2, 5, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0412 \u043A\u0430\u0434\u0440\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043E\u0434\u043D\u043E \u043B\u0438\u0446\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "app-camera", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pictureTaken", function NeuralComponent_Template_app_camera_pictureTaken_17_listener($event) { return ctx.handleImage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NeuralComponent_Template_button_click_20_listener() { return ctx.goGallery(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u0441\u0435\u043B\u0444\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, NeuralComponent_div_24_Template, 12, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("wrap_blur_white", ctx.blur_white == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("loc_valid", !ctx.isValidationLocation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.selectedLocations, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("takePhoto", ctx.takePhoto);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("interval_active", ctx.blur == true)("flash", ctx.flash == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.timeLeft);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", false);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _photos_camera_camera_component__WEBPACK_IMPORTED_MODULE_10__["CameraComponent"]], styles: ["[_nghost-%COMP%] {\n  width: 940px;\n}\n\n.neural-page__data-select[_ngcontent-%COMP%] {\n  color: #40b654;\n  height: 68px;\n  font-size: 48px;\n  font-style: normal;\n  line-height: 52px;\n  font-weight: 600;\n  letter-spacing: 0em;\n  font-family: panton;\n  background: #ffffff80;\n  cursor: pointer;\n  border: none;\n  border-radius: 10px;\n  outline: none;\n  margin-left: 20px;\n  padding-left: 24px;\n  align-items: center;\n  display: flex;\n  padding-right: 24px;\n}\n\n.neural-page__data-select.empty-data[_ngcontent-%COMP%] {\n  font-size: 38px;\n}\n\n.main-container[_ngcontent-%COMP%] {\n  background: unset;\n  -webkit-backdrop-filter: unset;\n          backdrop-filter: unset;\n}\n\n.wrap[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 98;\n}\n\n.wrap_blur[_ngcontent-%COMP%] {\n  filter: blur(50px);\n}\n\n.wrap_blur_white[_ngcontent-%COMP%] {\n  filter: blur(500px);\n}\n\n[_nghost-%COMP%]     .camera_wrapper .webcam-wrapper {\n  width: 312px;\n  height: 520px;\n}\n\n.icon-wrap[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 24px;\n  top: 30px;\n  display: flex;\n  width: 64px;\n  height: 64px;\n  background: #ffffff;\n  box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.2);\n  border-radius: 100px;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.item_wrap[_ngcontent-%COMP%] {\n  width: 1048px;\n  display: flex;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.7);\n  border-radius: 60px;\n  margin-bottom: 16px;\n  -webkit-backdrop-filter: blur(94px);\n          backdrop-filter: blur(94px);\n}\n\n.item_wrap[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0px;\n}\n\n.location_block[_ngcontent-%COMP%] {\n  height: 340px;\n  flex-direction: column;\n}\n\n.location_block[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  height: 68px;\n  font-size: 48px;\n  font-style: normal;\n  line-height: 52px;\n  font-weight: 600;\n  letter-spacing: 0em;\n  font-family: panton;\n  background: #ffffff80;\n  cursor: pointer;\n  border: none;\n  border-radius: 10px;\n  outline: none;\n  margin-left: 20px;\n  padding-left: 24px;\n}\n\n.location_block[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background: #ffffff80;\n  border-radius: 10px;\n}\n\n.location_block[_ngcontent-%COMP%]   .loc_select[_ngcontent-%COMP%] {\n  color: #a85bc5;\n  height: 68px;\n  font-size: 48px;\n  font-style: normal;\n  line-height: 52px;\n  font-weight: 600;\n  letter-spacing: 0em;\n  font-family: panton;\n  background: #ffffff80;\n  cursor: pointer;\n  border: none;\n  border-radius: 10px;\n  outline: none;\n  margin-left: 20px;\n  padding-left: 24px;\n  align-items: center;\n  display: flex;\n  padding-right: 24px;\n}\n\n.location_block[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  padding: 0 186px;\n  text-align: center;\n  margin-top: 48px;\n  margin-bottom: 12px;\n}\n\n.location_block   .main-container[_nghost-%COMP%], .main-container   [_nghost-%COMP%] {\n  height: 0px;\n}\n\n.location_block[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: panton;\n  font-size: 48px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 52px;\n  letter-spacing: 0em;\n  color: #000000;\n}\n\n.location_block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: panton;\n  font-size: 28px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 30px;\n  letter-spacing: 0em;\n  color: #000000;\n  display: flex;\n  align-items: center;\n  margin-top: 24px;\n}\n\n.location_block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]::before {\n  content: url(\"/assets/img/warning.svg\");\n  display: flex;\n  width: 36px;\n  height: 36px;\n  margin-bottom: 4px;\n  margin-right: 12px;\n}\n\n.func-loc[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.selfie_block[_ngcontent-%COMP%] {\n  height: 552px;\n  display: flex;\n  justify-content: flex-start;\n}\n\n.selfie_block[_ngcontent-%COMP%]   .camera[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 520px;\n  border-radius: 44px;\n}\n\n.selfie_block[_ngcontent-%COMP%]   .camera[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 520px;\n}\n\n.selfie_block[_ngcontent-%COMP%]   .selfie_btn[_ngcontent-%COMP%] {\n  width: 700px;\n  height: 520px;\n  background: #ffffff;\n  box-shadow: 0px 20px 40px rgba(3, 74, 104, 0.2);\n  border-radius: 44px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  outline: none;\n  border: none;\n  cursor: pointer;\n  margin-right: 18px;\n}\n\n.selfie_block[_ngcontent-%COMP%]   .selfie_btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: panton;\n  font-size: 38px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 40px;\n  letter-spacing: 0em;\n  color: #000000;\n}\n\n.selfie_block[_ngcontent-%COMP%]   .selfie_btn[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.func_block[_ngcontent-%COMP%] {\n  height: 390px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.func_block[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-family: panton;\n  font-size: 48px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 52px;\n  letter-spacing: 0em;\n  color: #000000;\n  padding: 0px 142px;\n  text-align: center;\n}\n\n.func_block[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  margin-right: 16px;\n  margin-left: 16px;\n  width: 76px;\n}\n\n.func_block[_ngcontent-%COMP%]   .social-sets[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.func_block[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 760px;\n  height: 78px;\n  background: #ffffff;\n  box-shadow: 0px 20px 40px rgba(3, 74, 104, 0.2);\n  border-radius: 44px;\n  border: none;\n  font-family: panton;\n  font-size: 28px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 30px;\n  letter-spacing: 0em;\n  color: #000000;\n}\n\n.data_select[_ngcontent-%COMP%] {\n  width: 318px;\n  height: 68px;\n  justify-content: center;\n}\n\n.loc_valid[_ngcontent-%COMP%] {\n  border: 3px solid red !important;\n}\n\n.flash[_ngcontent-%COMP%] {\n  background-color: white;\n  z-index: 1;\n  width: 1080px;\n  height: 1920px;\n  top: 0px;\n  left: 0px;\n}\n\n.flash[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  animation: flash 1s;\n}\n\n@keyframes flash {\n  0% {\n    opacity: 0.3;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n.camera_wrapper[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 520px;\n  margin-right: 28px;\n  margin-left: 16px;\n}\n\n\n\n.interval[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 400px;\n  display: none;\n  color: rgba(255, 255, 255, 0.5);\n  z-index: 106;\n  top: 0px;\n  left: 40px;\n  font-weight: 700;\n}\n\n.interval_active[_ngcontent-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25ldXJhbC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksWUNIWTtBREVoQjs7QUFLSTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBRlI7O0FBSVE7RUFDSSxlQUFBO0FBRlo7O0FBTUE7RUFDSSxpQkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUFISjs7QUFNQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQUhKOztBQU1BO0VBQ0ksa0JBQUE7QUFISjs7QUFNQTtFQUNJLG1CQUFBO0FBSEo7O0FBTUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQUhKOztBQWFBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsNENBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBVko7O0FBYUE7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtBQVZKOztBQWFBO0VBQ0ksa0JBQUE7QUFWSjs7QUFhQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQVZKOztBQVlJO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFWUjs7QUFXUTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7QUFUWjs7QUFhSTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBWFI7O0FBY0k7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQVpSOztBQWVPO0VBQ0EsV0FBQTtBQWJQOztBQWdCSTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQWRSOztBQWlCSTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBZlI7O0FBaUJRO0VBQ0ksdUNBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBZlo7O0FBb0JBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBakJKOztBQW9CQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7QUFqQko7O0FBbUJJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQWpCUjs7QUFtQlE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQWpCWjs7QUFxQkk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQW5CUjs7QUFxQlE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFuQlo7O0FBc0JRO0VBQ0ksbUJBQUE7QUFwQlo7O0FBeUJBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUF0Qko7O0FBd0JJO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQXRCUjs7QUF5Qkk7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQXZCUjs7QUE4Qkk7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQTVCUjs7QUErQkk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUE3QlI7O0FBaUNBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQTlCSjs7QUFtQ0E7RUFDSSxnQ0FBQTtBQWhDSjs7QUFtQ0E7RUFDSSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBaENKOztBQW1DQTtFQUNJLFVBQUE7RUFFQSxtQkFBQTtBQWhDSjs7QUF1Q0U7RUFDRTtJQUFLLFlBQUE7RUEzQlA7RUE0QkU7SUFBTyxVQUFBO0VBekJUO0FBQ0Y7O0FBNEJFO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBMUJOOztBQTZCRTs7Ozs7O0VBQUE7O0FBUUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUEzQko7O0FBOEJBO0VBQ0ksYUFBQTtBQTNCSiIsImZpbGUiOiJuZXVyYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGVzJztcblxuOmhvc3R7XG4gICAgd2lkdGg6ICR3aWR0aC1jb250ZW50O1xufVxuXG4ubmV1cmFsLXBhZ2UgeyAgICBcbiAgICAmX19kYXRhLXNlbGVjdCB7XG4gICAgICAgIGNvbG9yOiAjNDBiNjU0O1xuICAgICAgICBoZWlnaHQ6IDY4cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBsaW5lLWhlaWdodDogNTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcbiAgICAgICAgZm9udC1mYW1pbHk6IHBhbnRvbjtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjgwO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjRweDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjRweDtcbiAgICAgICAgXG4gICAgICAgICYuZW1wdHktZGF0YSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDM4cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4ubWFpbi1jb250YWluZXJ7XG4gICAgYmFja2dyb3VuZDogdW5zZXQ7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiB1bnNldDtcbn1cblxuLndyYXB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDk4O1xufVxuXG4ud3JhcF9ibHVye1xuICAgIGZpbHRlcjogYmx1cig1MHB4KTtcbn1cblxuLndyYXBfYmx1cl93aGl0ZXtcbiAgICBmaWx0ZXI6IGJsdXIoNTAwcHgpO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmNhbWVyYV93cmFwcGVyIC53ZWJjYW0td3JhcHBlciB7XG4gICAgd2lkdGg6IDMxMnB4O1xuICAgIGhlaWdodDogNTIwcHg7XG4gIH1cblxuLy8gLmNhbWVyYXtcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgei1pbmRleDogMTA1O1xuLy8gICAgIHRvcDogNjgwcHg7XG4vLyAgICAgbGVmdDogMzBweDtcbi8vIH1cblxuLmljb24td3JhcCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDI0cHg7XG4gICAgdG9wOiAzMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDY0cHg7XG4gICAgaGVpZ2h0OiA2NHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgYm94LXNoYWRvdzogMHB4IDEycHggMjBweCByZ2IoMCAwIDAgLyAyMCUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbi5pdGVtX3dyYXAge1xuICAgIHdpZHRoOiAxMDQ4cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgICBib3JkZXItcmFkaXVzOiA2MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDk0cHgpO1xufVxuXG4uaXRlbV93cmFwOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLmxvY2F0aW9uX2Jsb2NrIHtcbiAgICBoZWlnaHQ6IDM0MHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICBzZWxlY3Qge1xuICAgICAgICBoZWlnaHQ6IDY4cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBsaW5lLWhlaWdodDogNTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcbiAgICAgICAgZm9udC1mYW1pbHk6IHBhbnRvbjtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjgwO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjRweDtcbiAgICAgICAgb3B0aW9uIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY4MDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAubG9jX3NlbGVjdCB7XG4gICAgICAgIGNvbG9yOiAjYTg1YmM1O1xuICAgICAgICBoZWlnaHQ6IDY4cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBsaW5lLWhlaWdodDogNTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcbiAgICAgICAgZm9udC1mYW1pbHk6IHBhbnRvbjtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjgwO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjRweDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjRweDtcbiAgICB9XG5cbiAgICAudGl0bGUge1xuICAgICAgICBwYWRkaW5nOiAwIDE4NnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IDQ4cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgfVxuXG4gICAgICAgOmhvc3QtY29udGV4dCgubWFpbi1jb250YWluZXIpIHtcbiAgICAgICBoZWlnaHQ6IDBweDtcbiAgICAgIH1cblxuICAgIHNwYW4ge1xuICAgICAgICBmb250LWZhbWlseTogcGFudG9uO1xuICAgICAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDUycHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwZW07XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIH1cblxuICAgIHAge1xuICAgICAgICBmb250LWZhbWlseTogcGFudG9uO1xuICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwZW07XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuXG4gICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiB1cmwoXCIvYXNzZXRzL2ltZy93YXJuaW5nLnN2Z1wiKTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB3aWR0aDogMzZweDtcbiAgICAgICAgICAgIGhlaWdodDogMzZweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmZ1bmMtbG9je1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNlbGZpZV9ibG9jayB7XG4gICAgaGVpZ2h0OiA1NTJweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblxuICAgIC5jYW1lcmEge1xuICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgIGhlaWdodDogNTIwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDQ0cHg7XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgIGhlaWdodDogNTIwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuc2VsZmllX2J0biB7XG4gICAgICAgIHdpZHRoOiA3MDBweDtcbiAgICAgICAgaGVpZ2h0OiA1MjBweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDIwcHggNDBweCByZ2JhKDMsIDc0LCAxMDQsIDAuMik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDQ0cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHBhbnRvbjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwZW07XG4gICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pY29ue1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmZ1bmNfYmxvY2sge1xuICAgIGhlaWdodDogMzkwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAudGl0bGUge1xuICAgICAgICBmb250LWZhbWlseTogcGFudG9uO1xuICAgICAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDUycHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwZW07XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICBwYWRkaW5nOiAwcHggMTQycHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuaWNvbiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgIHdpZHRoOiA3NnB4O1xuICAgIH1cblxuICAgIC8vIC5pY29uOmxhc3QtY2hpbGQge1xuICAgIC8vICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICAvLyB9XG5cbiAgICAuc29jaWFsLXNldHMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cblxuICAgIC5idG4ge1xuICAgICAgICB3aWR0aDogNzYwcHg7XG4gICAgICAgIGhlaWdodDogNzhweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDIwcHggNDBweCByZ2JhKDMsIDc0LCAxMDQsIDAuMik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDQ0cHg7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgZm9udC1mYW1pbHk6IHBhbnRvbjtcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMGVtO1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICB9XG59XG5cbi5kYXRhX3NlbGVjdCB7XG4gICAgd2lkdGg6IDMxOHB4O1xuICAgIGhlaWdodDogNjhweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuXG5cbi5sb2NfdmFsaWR7XG4gICAgYm9yZGVyOjNweCBzb2xpZCByZWQgIWltcG9ydGFudDtcbn1cblxuLmZsYXNoe1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgd2lkdGg6IDEwODBweDtcbiAgICBoZWlnaHQ6IDE5MjBweDtcbiAgICB0b3A6IDBweDtcbiAgICBsZWZ0OiAwcHg7XG59XG5cbi5mbGFzaDpob3ZlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmxhc2ggMXM7XG4gICAgYW5pbWF0aW9uOiBmbGFzaCAxcztcbiAgfVxuICAgXG4gIEAtd2Via2l0LWtleWZyYW1lcyBmbGFzaCB7XG4gICAgMCUgeyAgb3BhY2l0eTogLjM7ICB9XG4gICAgMTAwJSB7IG9wYWNpdHk6IDE7IH1cbiAgfVxuICBAa2V5ZnJhbWVzIGZsYXNoIHtcbiAgICAwJSB7IG9wYWNpdHk6IC4zOyB9XG4gICAgMTAwJSB7IG9wYWNpdHk6IDE7ICB9XG4gIH1cblxuXG4gIC5jYW1lcmFfd3JhcHBlcntcbiAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgIGhlaWdodDogNTIwcHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDI4cHg7XG4gICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgfVxuXG4gIC8qOmhvc3QgOjpuZy1kZWVwIC53ZWJjYW0td3JhcHBlciB2aWRlb3tcbiAgICBoZWlnaHQ6IDMxMnB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDUyMHB4ICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IC0xMDRweDtcbiAgICB0b3A6IDEwNHB4O1xuICB9Ki9cbiAgXG4gIC5pbnRlcnZhbHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZm9udC1zaXplOiA0MDBweDtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gICAgei1pbmRleDogMTA2O1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDQwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmludGVydmFsX2FjdGl2ZXtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4iLCIkd2lkdGgtY29udGVudDogOTQwcHg7XG4kcmFkaXVzLWNhbWVyYTogNjBweDsiXX0= */"] });


/***/ }),

/***/ "mZtN":
/*!****************************************************!*\
  !*** ./src/app/shared/services/session.service.ts ***!
  \****************************************************/
/*! exports provided: SessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionService", function() { return SessionService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



;
class SessionService {
    constructor(rendererFactory) {
        this._sessionData = null;
        this._session = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"]();
        this._activity = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"]();
        this.branch = 'Neural';
        this.renderer = rendererFactory.createRenderer(null, null);
        this.renderer.listen('window', 'click', (e) => {
            if (this._sessionData) {
                const data = this._sessionData;
                this.activity = Object.assign(Object.assign({}, data), { expiryDate: this.expiryDate });
            }
            else {
                this.activity = {
                    date: moment__WEBPACK_IMPORTED_MODULE_1__(),
                    expiryDate: this.expiryDate
                };
            }
        });
    }
    get activity$() {
        return this._activity.asObservable();
    }
    set activity(value) {
        this._sessionData = value;
        this._activity.next(value);
    }
    get expiryDate() {
        return moment__WEBPACK_IMPORTED_MODULE_1__().add(120, 'seconds');
    }
    get session$() {
        return this._session.asObservable();
    }
    set session(value) {
        this._session.next(value);
    }
}
SessionService.ɵfac = function SessionService_Factory(t) { return new (t || SessionService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["RendererFactory2"])); };
SessionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SessionService, factory: SessionService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "myVS":
/*!************************************************!*\
  !*** ./src/app/modules/outer-config/config.ts ***!
  \************************************************/
/*! exports provided: Configuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Configuration", function() { return Configuration; });
class Configuration {
    static reWrite(data) {
        Configuration.host = data['host'] || '';
        Configuration.tradeService = data['tradeService'] || '';
        Configuration.fiatService = data['fiatService'] || '';
        Configuration.activityTimer = Number(data.activityTimer);
        Configuration.session = data['session'];
        Configuration.pauseCamera = Number(data.pauseCamera || 5);
        // Configuration.rotateCamera = Number(data['rotateCamera'] || 1);
    }
}
Configuration.host = '';
Configuration.tradeService = '';
Configuration.fiatService = '';


/***/ }),

/***/ "n7hL":
/*!***************************************************************!*\
  !*** ./src/app/components/print-done/print-done.component.ts ***!
  \***************************************************************/
/*! exports provided: PrintDoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintDoneComponent", function() { return PrintDoneComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core */ "ey9i");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_services_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/client.service */ "oR8h");
/* harmony import */ var src_app_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/navigation.service */ "LFK6");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







function PrintDoneComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "svg", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "path", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u041F\u0435\u0447\u0430\u0442\u0430\u0435\u043C \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.printWorkingTimer);
} }
const _c0 = function () { return ["/"]; };
function PrintDoneComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "svg", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "path", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u044B\u0439 \u044D\u043A\u0440\u0430\u043D");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](2, _c0));
} }
class PrintDoneComponent {
    constructor(router, clientService, navigateService) {
        this.router = router;
        this.clientService = clientService;
        this.navigateService = navigateService;
        this.printWorking = true;
        this.printWorkingTimer = 15;
        this.completePrintWorking$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.message = '';
    }
    ngOnInit() {
        src_app_core__WEBPACK_IMPORTED_MODULE_1__["ActivityMode"].stopTimer();
        this.navigateService.clearURL();
        if (this.clientService.email) {
            this.message = 'Ваши фото отправлены';
            this.printWorking = false;
            return;
        }
        const mainInterval = setInterval(() => {
            this.printWorkingTimer--;
            if (this.printWorkingTimer <= 0) {
                this.printWorking = false;
                this.message = 'Фотографии напечатаны!';
                clearInterval(mainInterval);
                src_app_core__WEBPACK_IMPORTED_MODULE_1__["ActivityMode"].routePath = '';
                src_app_core__WEBPACK_IMPORTED_MODULE_1__["ActivityMode"].startTimer(15000);
            }
            ;
        }, 1000);
    }
}
PrintDoneComponent.ɵfac = function PrintDoneComponent_Factory(t) { return new (t || PrintDoneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_client_service__WEBPACK_IMPORTED_MODULE_4__["ClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_5__["NavigationService"])); };
PrintDoneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PrintDoneComponent, selectors: [["app-print-done"]], decls: 3, vars: 2, consts: [[1, "print", 2, "height", "1180px"], [4, "ngIf"], [1, "print-header"], ["href", "/", 1, "print-header__btn"], ["width", "40", "height", "39", "viewbox", "0 0 40 39", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M36.829 17.6197C37.7245 18.2664 38.9747 18.0648 39.6214 17.1693C40.2681 16.2738 40.0665 15.0237 39.171 14.377L21.171 1.37696L20 0.53125L18.829 1.37696L0.829042 14.377C-0.0664084 15.0237 -0.268049 16.2738 0.378668 17.1693C1.02538 18.0648 2.27555 18.2664 3.17101 17.6197L20 5.46538L36.829 17.6197ZM9.00002 20.9983C9.00002 19.8937 8.10459 18.9983 7.00002 18.9983C5.89545 18.9983 5.00002 19.8937 5.00002 20.9983V30.9983C5.00002 35.4166 8.58175 38.9983 13 38.9983H27C31.4183 38.9983 35 35.4166 35 30.9983V20.9983C35 19.8937 34.1046 18.9983 33 18.9983C31.8955 18.9983 31 19.8937 31 20.9983V30.9983C31 33.2075 29.2092 34.9983 27 34.9983H13C10.7909 34.9983 9.00002 33.2075 9.00002 30.9983V20.9983Z", "fill", "black", "fill-opacity", "0.3"], [1, "print-main"], ["src", "././assets/static/img/print-done.png", "alt", "", 1, "photo-main__content-img"], [1, "print-main__title"], [1, "print-main__title", "fs90"], [1, "print-main__btn", 3, "routerLink"]], template: function PrintDoneComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PrintDoneComponent_ng_container_1_Template, 11, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, PrintDoneComponent_ng_container_2_Template, 11, 3, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.printWorking);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.printWorking);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".print[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.7);\n  -webkit-backdrop-filter: blur(94px);\n          backdrop-filter: blur(94px);\n  border-radius: 60px;\n}\n.print-header[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 32px 32px 0 32px;\n}\n.print-header__btn[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #FFFFFF;\n  background-size: cover;\n  padding: 8px;\n  box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.2);\n  border-radius: 100px;\n  margin: 0px 12px;\n}\n.print-main[_ngcontent-%COMP%] {\n  padding: 32px 64px;\n  text-align: center;\n}\n.print-main__title[_ngcontent-%COMP%] {\n  margin-top: 64px;\n  font-weight: 600;\n  font-size: 48px;\n  text-align: center;\n}\n.print-main__count[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 80px;\n}\n.print-main__btn[_ngcontent-%COMP%] {\n  margin-top: 64px;\n  background: #FFFFFF;\n  box-shadow: 0px 20px 40px rgba(3, 74, 104, 0.2);\n  border-radius: 44px;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 38px;\n  text-decoration: none;\n  color: black;\n  padding: 64px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3ByaW50LWRvbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQ0FBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQUk7RUFDSSxhQUFBO0VBQ0EseUJBQUE7QUFFUjtBQURRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsNENBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBR1o7QUFDSTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUFDUjtBQUNRO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUNaO0FBRVE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUFaO0FBR1E7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRFoiLCJmaWxlIjoicHJpbnQtZG9uZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmludCB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig5NHB4KTtcbiAgICBib3JkZXItcmFkaXVzOiA2MHB4O1xuICAgICYtaGVhZGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgcGFkZGluZzogMzJweCAzMnB4IDAgMzJweDtcbiAgICAgICAgJl9fYnRuIHtcbiAgICAgICAgICAgIHdpZHRoOiA2NHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA2NHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDEycHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDEycHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLW1haW4ge1xuICAgICAgICBwYWRkaW5nOiAzMnB4IDY0cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICAmX190aXRsZSB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA2NHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgICZfX2NvdW50IHtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDgwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAmX19idG4ge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNjRweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMjBweCA0MHB4IHJnYmEoMywgNzQsIDEwNCwgMC4yKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDQ0cHg7ICAgIFxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIHBhZGRpbmc6IDY0cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ "ny42":
/*!**************************************************!*\
  !*** ./src/app/shared/services/photo.service.ts ***!
  \**************************************************/
/*! exports provided: PhotoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoService", function() { return PhotoService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _mappers_photo_mapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mappers/photo.mapper */ "Fk/T");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class PhotoService {
    constructor(http) {
        this.http = http;
        this._photo$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
        this.selfiBase64 = [];
        this.selfieMas = [];
    }
    get photo$() {
        return this._photo$.asObservable();
    }
    set photo(value) {
        this._photo$.next(value);
    }
    getImages() {
        return this.http.get('./assets/mocks/photos.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(items => _mappers_photo_mapper__WEBPACK_IMPORTED_MODULE_2__["PhotoMapper"].formatToLocal(items)));
    }
}
PhotoService.ɵfac = function PhotoService_Factory(t) { return new (t || PhotoService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
PhotoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: PhotoService, factory: PhotoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "oNY9":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/download-module/download/download/download.component.ts ***!
  \*********************************************************************************/
/*! exports provided: DownloadComponent, UploadEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadComponent", function() { return DownloadComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadEnum", function() { return UploadEnum; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/navigation.service */ "LFK6");
/* harmony import */ var _download_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../download.service */ "/Htz");
/* harmony import */ var _smartphone_smartphone_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../smartphone/smartphone.service */ "faAt");
/* harmony import */ var _social_social_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../social/social.service */ "OIb2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/header/header.component */ "320Y");







function DownloadComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function DownloadComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0444\u043E\u0442\u043E \u0438\u0437 \u0441\u043E\u0446.\u0441\u0435\u0442\u0435\u0439");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DownloadComponent_div_3_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.navigateTo("social", "instagram", "downLoad"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Instagram");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DownloadComponent_div_3_Template_div_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.navigateTo("social", "vk", "downLoad"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0412\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DownloadComponent_div_3_Template_div_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.navigateTo("social", "facebook", "downLoad"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Facebook");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DownloadComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0444\u043E\u0442\u043E c \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DownloadComponent_div_4_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.navigateTo("smartphone", "wifi", "downLoad"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u041F\u043E WI-FI");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DownloadComponent_div_4_Template_div_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.navigateTo("smartphone", "site", "downLoad"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0427\u0435\u0440\u0435\u0437 \u0441\u0430\u0439\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DownloadComponent_div_4_Template_div_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.navigateTo("smartphone", "email", "downLoad"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u041F\u043E E-Mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DownloadComponent_div_4_Template_div_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.navigateTo("smartphone", "telegram", "downLoad"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u041F\u043E Telegram");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DownloadComponent {
    constructor(navigate, downloadService, smartphoneService, socialService) {
        this.navigate = navigate;
        this.downloadService = downloadService;
        this.smartphoneService = smartphoneService;
        this.socialService = socialService;
        this.header = true;
    }
    ngOnInit() {
        switch (this.downloadService.uploadMethod) {
            case 'smartphone':
                this.upload = UploadEnum.Smartphone;
                break;
            case 'social':
                this.upload = UploadEnum.Social;
                break;
        }
        this.navigate.clearURL();
    }
    navigateTo(rout, data, prev) {
        this.navigate.prevPage = prev;
        this.smartphoneService.uploadMethod = data;
        this.socialService.socialMethod = data;
        this.navigate.navigate(rout);
    }
}
DownloadComponent.ɵfac = function DownloadComponent_Factory(t) { return new (t || DownloadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_download_service__WEBPACK_IMPORTED_MODULE_2__["DownloadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_smartphone_smartphone_service__WEBPACK_IMPORTED_MODULE_3__["SmartphoneService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_social_social_service__WEBPACK_IMPORTED_MODULE_4__["SocialService"])); };
DownloadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DownloadComponent, selectors: [["app-download"]], decls: 5, vars: 4, consts: [[1, "slot-cell"], [4, "ngIf"], [1, "content", 3, "ngSwitch"], ["class", "upload_wrap", 4, "ngSwitchCase"], [1, "upload_wrap"], [1, "upload-cell", 2, "width", "760px", 3, "click"], [1, "icon", "icon-inst-download"], [1, "upload-cell", 3, "click"], [1, "icon", "icon-vk-download"], [1, "icon", "icon-facebook-download"], [1, "icon", "icon-wifi-download"], [1, "icon", "icon-site-download"], [1, "icon", "icon-email-download"], [1, "icon", "icon-telegram-download"]], template: function DownloadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DownloadComponent_ng_container_1_Template, 2, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DownloadComponent_div_3_Template, 15, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DownloadComponent_div_4_Template, 19, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.header == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.upload);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "social");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "smartphone");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitchCase"], _shared_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"]], styles: [".upload_wrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  height: 100%;\n}\n.upload_wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: black;\n  font-size: 48px;\n  line-height: 52px;\n  letter-spacing: 0em;\n  margin-bottom: 24px;\n}\n.upload_wrap[_ngcontent-%COMP%]   .upload-cell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 12px;\n  width: 364px;\n  min-width: 364px;\n  height: 340px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #FFFFFF;\n  box-shadow: 0px 20px 40px rgba(3, 74, 104, 0.2);\n  border-radius: 44px;\n}\n.upload_wrap[_ngcontent-%COMP%]   .upload-cell[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 38px;\n  line-height: 40px;\n  color: #000000;\n  margin-top: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2Rvd25sb2FkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUNKO0FBQUk7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUVSO0FBQ0k7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7RUFDQSxtQkFBQTtBQUFSO0FBQ1E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFDWiIsImZpbGUiOiJkb3dubG9hZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51cGxvYWRfd3JhcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgaDEge1xuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAxKTtcbiAgICAgICAgZm9udC1zaXplOiA0OHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNTJweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICB9XG5cbiAgICAudXBsb2FkLWNlbGx7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAvLyBmbGV4OiAxIDE7XG4gICAgICAgIG1hcmdpbjogMTJweDtcbiAgICAgICAgd2lkdGg6IDM2NHB4O1xuICAgICAgICBtaW4td2lkdGg6IDM2NHB4O1xuICAgICAgICBoZWlnaHQ6IDM0MHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDIwcHggNDBweCByZ2JhKDMsIDc0LCAxMDQsIDAuMik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDQ0cHg7XG4gICAgICAgIHNwYW57XG4gICAgICAgICAgICBmb250LXNpemU6IDM4cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"] });
var UploadEnum;
(function (UploadEnum) {
    UploadEnum["Smartphone"] = "smartphone";
    UploadEnum["Social"] = "social";
})(UploadEnum || (UploadEnum = {}));


/***/ }),

/***/ "oR8h":
/*!***************************************************!*\
  !*** ./src/app/shared/services/client.service.ts ***!
  \***************************************************/
/*! exports provided: ClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientService", function() { return ClientService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_modules_outer_config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/outer-config/config */ "myVS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _photo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./photo.service */ "ny42");





class ClientService {
    constructor(http, photoService) {
        this.http = http;
        this.photoService = photoService;
        this.photoToCart = [];
        this.photoToPaper = [];
        this.neiron = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    getClient() {
        return this.http.get(`${src_app_modules_outer_config_config__WEBPACK_IMPORTED_MODULE_1__["Configuration"].host}api/client`);
    }
    getListImage() {
        return this.http.get(`${src_app_modules_outer_config_config__WEBPACK_IMPORTED_MODULE_1__["Configuration"].host}api/client/source/image-directory-faces`);
    }
    createOrder(basket) {
        return this.http.post(`${src_app_modules_outer_config_config__WEBPACK_IMPORTED_MODULE_1__["Configuration"].host}api/client/order`, JSON.stringify(basket), {
            headers: {
                'Content-Type': 'application/json'
            },
            observe: "response"
        });
    }
    getCheck(orderId) {
        return this.http.get(`${src_app_modules_outer_config_config__WEBPACK_IMPORTED_MODULE_1__["Configuration"].host}api/client/order/${orderId}/invoice`);
    }
    certainFacesSearch(photoBase64) {
        return this.http.post(`${src_app_modules_outer_config_config__WEBPACK_IMPORTED_MODULE_1__["Configuration"].host}api/client/source/certain-faces-search`, JSON.stringify(photoBase64), {
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }
    sourceSelfi(photoBase64mas) {
        return this.http.post(`${src_app_modules_outer_config_config__WEBPACK_IMPORTED_MODULE_1__["Configuration"].host}api/client/source/selfie`, (photoBase64mas), {
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }
    getDates(location) {
        return this.http.post(`${src_app_modules_outer_config_config__WEBPACK_IMPORTED_MODULE_1__["Configuration"].host}api/client/source/get-dates`, {
            location
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    completeOrder(orderId) {
        return this.http.get(`${src_app_modules_outer_config_config__WEBPACK_IMPORTED_MODULE_1__["Configuration"].host}api/client/order/${orderId}/execute`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    standBy() {
        return this.http.post(`${src_app_modules_outer_config_config__WEBPACK_IMPORTED_MODULE_1__["Configuration"].host}api/client/state/stand-by`, {}, {
            headers: {
                'Content-Type': 'application/json'
            },
            observe: "response"
        });
    }
}
ClientService.ɵfac = function ClientService_Factory(t) { return new (t || ClientService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_photo_service__WEBPACK_IMPORTED_MODULE_4__["PhotoService"])); };
ClientService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ClientService, factory: ClientService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "oaKM":
/*!*************************************************************!*\
  !*** ./src/app/components/main-page/main-page.component.ts ***!
  \*************************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var src_app_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core */ "ey9i");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_shared_services_mocks_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/mocks.service */ "kj9m");
/* harmony import */ var src_app_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/navigation.service */ "LFK6");
/* harmony import */ var src_app_shared_services_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/session.service */ "mZtN");
/* harmony import */ var src_app_modules_download_module_download_download_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/download-module/download/download.service */ "/Htz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-slick-carousel */ "eSVu");









function MainPageComponent_ng_container_12_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u0411\u0443\u043C\u0430\u0433\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u043E\u0442 200 \u20BD");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", slide_r3.thumbUri, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function MainPageComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainPageComponent_ng_container_12_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.navigateTo("download", "smartphone"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0438\u0437 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainPageComponent_ng_container_12_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.navigateTo("download", "social"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0438\u0437 \u0441\u043E\u0446. \u0441\u0435\u0442\u0435\u0439");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ngx-slick-carousel", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, MainPageComponent_ng_container_12_div_13_Template, 9, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\u0412\u0441\u0435 \u0446\u0435\u043D\u044B");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "\u0421\u043A\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C QR-\u043A\u043E\u0434");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("config", ctx_r0.slideConfig);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.slides);
} }
class MainPageComponent {
    constructor(http, mocks, navigate, sessionService, downloadService) {
        this.http = http;
        this.mocks = mocks;
        this.navigate = navigate;
        this.sessionService = sessionService;
        this.downloadService = downloadService;
        this.slides = this.mocks.getMockMassive();
        this.slideConfig = {
            autoplay: false,
            vertical: false,
            verticalSwiping: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: false,
            arrows: false,
            infinite: false,
        };
    }
    ngOnInit() {
        src_app_core__WEBPACK_IMPORTED_MODULE_0__["ActivityMode"].stopTimer();
        this.navigate.clearURL();
    }
    navigateTo(rout, uploadMethod) {
        switch (rout) {
            case 'selfie': {
                this.sessionService.branch = 'Selfie';
                // this.navigate.navigate('neural')
                break;
            }
            case 'neural': {
                this.sessionService.branch = 'Neural';
                // this.navigate.navigate('neural')
                break;
            }
            case 'download': {
                if (uploadMethod == 'smartphone') {
                    this.downloadService.uploadMethod = 'smartphone';
                }
                if (uploadMethod == 'social') {
                    this.downloadService.uploadMethod = 'social';
                }
                break;
            }
        }
        this.navigate.navigate(rout);
    }
}
MainPageComponent.ɵfac = function MainPageComponent_Factory(t) { return new (t || MainPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_mocks_service__WEBPACK_IMPORTED_MODULE_3__["MocksService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_4__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_modules_download_module_download_download_service__WEBPACK_IMPORTED_MODULE_6__["DownloadService"])); };
MainPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MainPageComponent, selectors: [["app-main-page"]], decls: 13, vars: 1, consts: [[1, "slot-cell"], [1, "slot-title"], [1, "search-wrap"], [1, "slot-btn", "search-btn", 3, "click"], [1, "icon", "icon-photo"], [1, "icon", "icon-search"], [4, "ngIf"], [1, "download-wrap"], [1, "slot-btn", "download-btn", 3, "click"], [1, "icon", "icon-tel-download"], [1, "icon", "icon-social-download"], [1, "slider-main"], [1, "carousel", 3, "config"], ["slickModal", "slick-carousel"], ["ngxSlickItem", "", "class", "slide", 4, "ngFor", "ngForOf"], [1, "slot-btn", "price-btn"], [1, "foot_wrap"], [1, "func_block"], [1, "lang-btn"], [1, "icon", "icon-lang-main"], [1, "icon", "icon-arrow-main"], [1, "info-btn"], [1, "icon", "icon-info-main"], [1, "qr-btn"], [1, "icon", "icon-qr-main"], ["ngxSlickItem", "", 1, "slide"], [1, "wrap"], [1, "img-box"], ["alt", "", "width", "93px", "height", "140px", 3, "src"], [1, "desc_wrap"], [1, "how-print"], [1, "slider-counter"]], template: function MainPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0412 \u044D\u0442\u043E\u043C \u043A\u0438\u043E\u0441\u043A\u0435 \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0440\u0430\u0441\u043F\u0435\u0447\u0430\u0442\u0430\u0442\u044C \u0438\u043B\u0438 \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043D\u0430 email \u0441\u0432\u043E\u0438 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainPageComponent_Template_button_click_4_listener() { return ctx.navigateTo("selfie"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u0444\u043E\u0442\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainPageComponent_Template_button_click_8_listener() { return ctx.navigateTo("neural"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\u041D\u0430\u0439\u0442\u0438 \u0444\u043E\u0442\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, MainPageComponent_ng_container_12_Template, 28, 2, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", false);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_8__["SlickCarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_8__["SlickItemDirective"]], styles: [".download-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.download-wrap[_ngcontent-%COMP%]   .download-btn[_ngcontent-%COMP%] {\n  width: 364px;\n  height: 160px;\n  justify-content: flex-start;\n}\n.download-wrap[_ngcontent-%COMP%]   .download-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  margin-left: 24px;\n  text-align: left;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 28px;\n  line-height: 40px;\n  color: #000000;\n  font-family: Panton;\n}\n.download-wrap[_ngcontent-%COMP%]   .download-btn[_ngcontent-%COMP%]:first-child {\n  margin-right: 32px;\n}\n.download-wrap[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  margin-left: 28px;\n}\n.slider-main[_ngcontent-%COMP%] {\n  width: 888px;\n  height: 286px;\n  margin-bottom: 60px;\n}\n.slick-slider[_ngcontent-%COMP%] {\n  width: auto;\n  padding-top: 42px;\n}\n.slick-list[_ngcontent-%COMP%] {\n  height: 90% !important;\n}\n.slick-slide[_ngcontent-%COMP%] {\n  display: flex;\n  color: white;\n  font-size: 30px;\n  text-align: center;\n  margin-left: 6px;\n  margin-right: 6px;\n}\n.slick-slide[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\n  width: 212px;\n  height: 286px;\n  display: flex;\n  align-items: center;\n  margin-left: 12px;\n  margin-right: 12px;\n}\n.slick-slide[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-right: 12px;\n}\n.slick-slide[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  object-fit: cover;\n  box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.2);\n}\n.slick-slide[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]   .icon-wrap[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  position: absolute;\n  bottom: -17px;\n  right: -17px;\n}\n.slick-slide[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .how-print[_ngcontent-%COMP%] {\n  display: flex;\n  font-weight: 600;\n  font-size: 28px;\n  line-height: 30px;\n  font-style: normal;\n  color: #000000;\n  margin-top: 12px;\n  margin-bottom: 8px;\n}\n.slick-slide[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .slider-counter[_ngcontent-%COMP%] {\n  display: flex;\n  font-style: normal;\n  font-size: 20px;\n  line-height: 22px;\n  font-weight: bold;\n  color: rgba(0, 0, 0, 0.4);\n}\n.slick-track[_ngcontent-%COMP%] {\n  display: flex;\n  margin-left: 0px !important;\n  margin-right: 0px !important;\n}\n.price-btn[_ngcontent-%COMP%] {\n  width: 760px;\n  height: 78px;\n  margin-bottom: 52px;\n}\n.price-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 30px;\n  letter-spacing: 0em;\n  text-align: center;\n  font-family: Panton;\n  color: black;\n}\n.foot_wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n.foot_wrap[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  border-radius: 0px;\n}\n.foot_wrap[_ngcontent-%COMP%]   .func_block[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.foot_wrap[_ngcontent-%COMP%]   .func_block[_ngcontent-%COMP%]   .lang-btn[_ngcontent-%COMP%] {\n  width: 68px;\n  height: 48px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: inherit;\n  border: none;\n}\n.foot_wrap[_ngcontent-%COMP%]   .func_block[_ngcontent-%COMP%]   .lang-btn[_ngcontent-%COMP%]   .icon-lang-main[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.foot_wrap[_ngcontent-%COMP%]   .func_block[_ngcontent-%COMP%]   .info-btn[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  background: inherit;\n  border: none;\n}\n.foot_wrap[_ngcontent-%COMP%]   .qr-btn[_ngcontent-%COMP%] {\n  width: 260px;\n  height: 48px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: inherit;\n  border: none;\n}\n.foot_wrap[_ngcontent-%COMP%]   .qr-btn[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21haW4tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBQUo7QUFDSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7QUFDUjtBQUFRO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBRVo7QUFFSTtFQUNJLGtCQUFBO0FBQVI7QUFHSTtFQUNJLGlCQUFBO0FBRFI7QUFLQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFGSjtBQU1JO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FBSFI7QUFNSTtFQUNJLHNCQUFBO0FBSlI7QUFPSTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUVBLGtCQUFBO0VBRUEsZ0JBQUE7RUFDQSxpQkFBQTtBQVBSO0FBUVE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFOWjtBQU9ZO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBTGhCO0FBTWdCO0VBQ0ksaUJBQUE7RUFDQSw0Q0FBQTtBQUpwQjtBQU9nQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUxwQjtBQVFZO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQVBoQjtBQVVZO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFFQSx5QkFBQTtBQVRoQjtBQWNJO0VBQ0ksYUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUFaUjtBQWdCQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFiSjtBQWNJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFaUjtBQWdCQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFiSjtBQWNJO0VBQ0ksa0JBQUE7QUFaUjtBQWVJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFiUjtBQWNRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQVpaO0FBYVk7RUFDSSxpQkFBQTtBQVhoQjtBQWVRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFiWjtBQW1CSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFqQlI7QUFrQlE7RUFDSSxpQkFBQTtBQWhCWiIsImZpbGUiOiJtYWluLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5kb3dubG9hZC13cmFwe1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgLmRvd25sb2FkLWJ0bntcbiAgICAgICAgd2lkdGg6IDM2NHB4O1xuICAgICAgICBoZWlnaHQ6IDE2MHB4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIHNwYW57XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDI0cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgICAgICBmb250LWZhbWlseTogUGFudG9uO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmRvd25sb2FkLWJ0bjpmaXJzdC1jaGlsZHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xuICAgIH1cblxuICAgIC5pY29ue1xuICAgICAgICBtYXJnaW4tbGVmdDogMjhweDtcbiAgICB9XG59XG5cbi5zbGlkZXItbWFpbiB7XG4gICAgd2lkdGg6IDg4OHB4O1xuICAgIGhlaWdodDogMjg2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcbn1cblxuLnNsaWNrIHtcbiAgICAmLXNsaWRlciB7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBwYWRkaW5nLXRvcDogNDJweDtcbiAgICB9XG5cbiAgICAmLWxpc3Qge1xuICAgICAgICBoZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgICYtc2xpZGUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgLy8gZm9udC1mYW1pbHk6IFwiQXJpYWxcIiwgXCJIZWx2ZXRpY2FcIjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAvLyB3aWR0aDogMjEycHggIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gICAgICAgIC53cmFwIHtcbiAgICAgICAgICAgIHdpZHRoOiAyMTJweDtcbiAgICAgICAgICAgIGhlaWdodDogMjg2cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgICAgICAgICAgLmltZy1ib3gge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDEycHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmljb24td3JhcCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0OHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAtMTdweDtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IC0xN3B4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ob3ctcHJpbnQge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgICAgIC8vIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zbGlkZXItY291bnRlciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIC8vIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtdHJhY2sge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG4ucHJpY2UtYnRue1xuICAgIHdpZHRoOiA3NjBweDtcbiAgICBoZWlnaHQ6IDc4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNTJweDtcbiAgICBzcGFue1xuICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1mYW1pbHk6IFBhbnRvbjtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XG4gICAgfVxufVxuXG4uZm9vdF93cmFwe1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIC5pY29ue1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgfVxuXG4gICAgLmZ1bmNfYmxvY2t7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAubGFuZy1idG57XG4gICAgICAgICAgICB3aWR0aDogNjhweDtcbiAgICAgICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgLmljb24tbGFuZy1tYWlue1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuaW5mby1idG57XG4gICAgICAgICAgICB3aWR0aDogNDhweDtcbiAgICAgICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBcbiAgICBcbiAgICAucXItYnRue1xuICAgICAgICB3aWR0aDogMjYwcHg7XG4gICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgLmljb257XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cblxuIl19 */"] });


/***/ }),

/***/ "p341":
/*!***************************************************!*\
  !*** ./src/app/shared/services/camera.service.ts ***!
  \***************************************************/
/*! exports provided: CameraService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraService", function() { return CameraService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CameraService {
    constructor() {
        this._rotate = 0;
        this.timeFlash = 5;
        this.checkRotate = {
            0: 'rotate-top',
            90: 'rotate-right',
            180: 'rotate-bottom',
            270: 'rotate-left'
        };
    }
    get cssClass() {
        return this._rotateClass;
    }
    setRotateCamera(rotate) {
        this._rotate = rotate;
        this._rotateClass = this.checkRotate[this._rotate];
    }
}
CameraService.ɵfac = function CameraService_Factory(t) { return new (t || CameraService)(); };
CameraService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CameraService, factory: CameraService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "p35z":
/*!*************************************************************************!*\
  !*** ./src/app/components/photo-not-found/photo-not-found.component.ts ***!
  \*************************************************************************/
/*! exports provided: PhotoNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoNotFoundComponent", function() { return PhotoNotFoundComponent; });
/* harmony import */ var src_app_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core */ "ey9i");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PhotoNotFoundComponent {
    constructor() { }
    ngOnInit() {
        src_app_core__WEBPACK_IMPORTED_MODULE_0__["ActivityMode"].startTimer();
    }
}
PhotoNotFoundComponent.ɵfac = function PhotoNotFoundComponent_Factory(t) { return new (t || PhotoNotFoundComponent)(); };
PhotoNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PhotoNotFoundComponent, selectors: [["app-photo-not-found"]], decls: 17, vars: 0, consts: [[1, "photo", 2, "height", "1180px"], [1, "photo-header"], ["href", "/", 1, "photo-header__btn"], ["width", "18", "height", "32", "viewbox", "0 0 18 32", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M16 2L3 16L16 30", "stroke", "black", "stroke-opacity", "0.3", "stroke-width", "4", "stroke-linecap", "round"], ["width", "40", "height", "39", "viewbox", "0 0 40 39", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M36.829 17.6197C37.7245 18.2664 38.9747 18.0648 39.6214 17.1693C40.2681 16.2738 40.0665 15.0237 39.171 14.377L21.171 1.37696L20 0.53125L18.829 1.37696L0.829042 14.377C-0.0664084 15.0237 -0.268049 16.2738 0.378668 17.1693C1.02538 18.0648 2.27555 18.2664 3.17101 17.6197L20 5.46538L36.829 17.6197ZM9.00002 20.9983C9.00002 19.8937 8.10459 18.9983 7.00002 18.9983C5.89545 18.9983 5.00002 19.8937 5.00002 20.9983V30.9983C5.00002 35.4166 8.58175 38.9983 13 38.9983H27C31.4183 38.9983 35 35.4166 35 30.9983V20.9983C35 19.8937 34.1046 18.9983 33 18.9983C31.8955 18.9983 31 19.8937 31 20.9983V30.9983C31 33.2075 29.2092 34.9983 27 34.9983H13C10.7909 34.9983 9.00002 33.2075 9.00002 30.9983V20.9983Z", "fill", "black", "fill-opacity", "0.3"], [1, "photo-main"], [1, "photo-main__title"], [1, "photo-main__content"], [1, "photo-main__content-text"], ["href", "/", 1, "photo-main__content-btn"], ["src", "././assets/static/img/photo-png.png", "alt", "", 1, "photo-main__content-img"]], template: function PhotoNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0439 \u043D\u0435 \u043D\u0430\u0448\u043B\u043E\u0441\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0435\u0449\u0435 \u0444\u043E\u0442\u043E, \u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0447\u0442\u043E \u0432\u044B\u0431\u0440\u0430\u043D\u044B \u043D\u0443\u0436\u043D\u044B\u0435 \u043B\u043E\u043A\u0430\u0446\u0438\u044F \u0438 \u0434\u0430\u0442\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " \u0421\u0434\u0435\u043B\u0430\u0442\u044C \u0435\u0449\u0435 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0444\u043E\u0442\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: [".photo[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.7);\n  -webkit-backdrop-filter: blur(94px);\n          backdrop-filter: blur(94px);\n  border-radius: 60px;\n}\n.photo-header[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 32px 32px 0 32px;\n}\n.photo-header__btn[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #FFFFFF;\n  background-size: cover;\n  padding: 8px;\n  box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.2);\n  border-radius: 100px;\n  margin: 0px 12px;\n}\n.photo-main[_ngcontent-%COMP%] {\n  padding: 0px 64px;\n}\n.photo-main__title[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  font-weight: 600;\n  font-size: 48px;\n  text-align: center;\n}\n.photo-main__content[_ngcontent-%COMP%] {\n  padding: 220px 0;\n}\n.photo-main__content-text[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 38px;\n  text-align: center;\n}\n.photo-main__content-btn[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  box-shadow: 0px 20px 40px rgba(3, 74, 104, 0.2);\n  border-radius: 44px;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 38px;\n  text-decoration: none;\n  color: black;\n  padding: 32px 64px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Bob3RvLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFDSTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtBQUNSO0FBQVE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSw0Q0FBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUFFWjtBQUVJO0VBQ0ksaUJBQUE7QUFBUjtBQUVRO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUFaO0FBR1E7RUFDSSxnQkFBQTtBQURaO0FBRVk7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQWhCO0FBR1k7RUFDSSxtQkFBQTtFQUNBLCtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFEaEIiLCJmaWxlIjoicGhvdG8tbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBob3RvIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDk0cHgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDYwcHg7XG4gIFxuICAgICYtaGVhZGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgcGFkZGluZzogMzJweCAzMnB4IDAgMzJweDtcbiAgICAgICAgJl9fYnRue1xuICAgICAgICAgICAgd2lkdGg6IDY0cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDY0cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMTJweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwcHggMTJweDtcbiAgICAgICAgfVxuICAgIH1cbiAgXG4gICAgJi1tYWluIHtcbiAgICAgICAgcGFkZGluZzogMHB4IDY0cHg7XG4gIFxuICAgICAgICAmX190aXRsZSB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICBcbiAgICAgICAgJl9fY29udGVudCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMjBweCAwO1xuICAgICAgICAgICAgJi10ZXh0IHtcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzOHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi1idG4ge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDIwcHggNDBweCByZ2JhKDMsIDc0LCAxMDQsIDAuMik7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNDRweDsgICAgXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzOHB4O1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMzJweCA2NHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgfSJdfQ== */"] });


/***/ }),

/***/ "pKmL":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _interceptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../interceptors */ "PC4I");
/* harmony import */ var _directives_activity_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directives/activity.directive */ "vRWC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class CoreModule {
}
CoreModule.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(); };
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        _interceptors__WEBPACK_IMPORTED_MODULE_2__["HttpInterceptorProviders"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]
        ], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [_directives_activity_directive__WEBPACK_IMPORTED_MODULE_3__["ActivityDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _directives_activity_directive__WEBPACK_IMPORTED_MODULE_3__["ActivityDirective"]] }); })();


/***/ }),

/***/ "r8hZ":
/*!*****************************************************************!*\
  !*** ./src/app/shared/locations/location/location.component.ts ***!
  \*****************************************************************/
/*! exports provided: LocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationComponent", function() { return LocationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/client.service */ "oR8h");
/* harmony import */ var src_app_core_services_location_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/location.service */ "JEiN");
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/navigation.service */ "LFK6");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function LocationComponent_ng_container_6_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LocationComponent_ng_container_6_div_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const location_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r4.onSelectLocation(location_r3); return ctx_r4.navigateTo("neural"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const location_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](location_r3.location);
} }
function LocationComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043B\u043E\u043A\u0430\u0446\u0438\u044E");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LocationComponent_ng_container_6_div_5_Template, 3, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const locations_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", locations_r1);
} }
class LocationComponent {
    constructor(router, clientServ, locationService, navigateService) {
        this.router = router;
        this.clientServ = clientServ;
        this.locationService = locationService;
        this.navigateService = navigateService;
    }
    ngOnInit() {
        this.navigateService.clearURL();
        this.locations$ = this.locationService.getLocations();
    }
    onSelectLocation(location) {
        this.clientServ.Location = location;
        //Deprecated
        this.clientServ.location = location.location;
        this.clientServ.locationID = location.id;
    }
    navigateTo(rout) {
        this.navigateService.navigate(rout);
    }
}
LocationComponent.ɵfac = function LocationComponent_Factory(t) { return new (t || LocationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_client_service__WEBPACK_IMPORTED_MODULE_2__["ClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_location_service__WEBPACK_IMPORTED_MODULE_3__["LocationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_navigation_service__WEBPACK_IMPORTED_MODULE_4__["NavigationService"])); };
LocationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LocationComponent, selectors: [["app-location"]], outputs: { selectedLoc: "selectedLoc" }, decls: 8, vars: 3, consts: [[1, "main_cont", 2, "height", "1180px"], [1, "header"], [1, "header-icons"], [1, "icon-wrap", 3, "click"], [1, "icon", "icon-close"], [1, "content"], [4, "ngIf"], [1, "title"], [1, "locations"], ["class", "block", 3, "click", 4, "ngFor", "ngForOf"], [1, "block", 3, "click"], [1, "block_title"]], template: function LocationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LocationComponent_Template_div_click_3_listener() { return ctx.navigateTo("neural"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LocationComponent_ng_container_6_Template, 6, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 1, ctx.locations$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: [".main_cont[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.7);\n  -webkit-backdrop-filter: blur(94px);\n          backdrop-filter: blur(94px);\n  border-radius: 60px;\n}\n\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  padding: 32px 32px 0 32px;\n}\n\n.header-icons[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-size: 48px;\n  line-height: 52px;\n  font-weight: 600;\n  color: black;\n  text-align: center;\n}\n\n.icon-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  width: 64px;\n  height: 64px;\n  background: #ffffff;\n  box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.2);\n  border-radius: 100px;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.locations[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0 48px;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n}\n\n.locations[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%] {\n  width: 364px;\n  height: 232px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #FFFFFF;\n  box-shadow: 0px 20px 40px rgba(3, 74, 104, 0.2);\n  border-radius: 44px;\n  margin: 16px;\n}\n\n.locations[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .block_title[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-size: 28px;\n  line-height: 30px;\n  font-weight: 600;\n  color: black;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xvY2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0NBQUE7RUFDRixtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUNJO0VBQ0UsYUFBQTtBQUNOOztBQUlFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFJRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxZQUFBO0VBQ0Esa0JBQUE7QUFGSjs7QUFNRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsNENBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBSEo7O0FBTUU7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBSE47O0FBSU07RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUZWOztBQUdVO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQURaIiwiZmlsZSI6ImxvY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5fY29udHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig5NHB4KTtcbiAgYm9yZGVyLXJhZGl1czogNjBweDtcbn1cblxuLmhlYWRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAzMnB4IDMycHggMCAzMnB4O1xuICBcbiAgICAmLWljb25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuICB9XG5cblxuICAuY29udGVudHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICBcbiAgLmNvbnRlbnQgLnRpdGxle1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDUycHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAvLyBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgXG4gIH1cbiAgXG4gIC5pY29uLXdyYXB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogNjRweDtcbiAgICBoZWlnaHQ6IDY0cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBib3gtc2hhZG93OiAwcHggMTJweCAyMHB4IHJnYigwIDAgMCAvIDIwJSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAubG9jYXRpb25ze1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIHBhZGRpbmc6IDAgNDhweDtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIC5ibG9ja3tcbiAgICAgICAgICB3aWR0aDogMzY0cHg7XG4gICAgICAgICAgaGVpZ2h0OiAyMzJweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggMjBweCA0MHB4IHJnYmEoMywgNzQsIDEwNCwgMC4yKTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0NHB4O1xuICAgICAgICAgIG1hcmdpbjogMTZweDtcbiAgICAgICAgICAuYmxvY2tfdGl0bGV7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAxKTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICB9XG4gIH0iXX0= */"] });


/***/ }),

/***/ "rPE0":
/*!*************************************************!*\
  !*** ./src/app/components/pay/pay.component.ts ***!
  \*************************************************/
/*! exports provided: PayComponent, PayMethodEnum, PayEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayComponent", function() { return PayComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayMethodEnum", function() { return PayMethodEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayEnum", function() { return PayEnum; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_modules_outer_config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/outer-config/config */ "myVS");
/* harmony import */ var rxjs_webSocket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/webSocket */ "3uOa");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app.component */ "Sy1n");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_app_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core */ "ey9i");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_services_client_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/client.service */ "oR8h");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_shared_services_broker_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/broker.service */ "VsY3");
/* harmony import */ var src_app_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/navigation.service */ "LFK6");
/* harmony import */ var src_app_shared_services_howPrint_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/services/howPrint.service */ "krGR");
/* harmony import */ var src_app_shared_services_date_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/services/date.service */ "BIm4");
/* harmony import */ var src_app_shared_services_session_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/services/session.service */ "mZtN");
/* harmony import */ var src_app_shared_services_photo_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/services/photo.service */ "ny42");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _error_popup_error_popup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../error-popup/error-popup.component */ "S90J");




















const _c0 = ["serviceCheckIsNotWork"];
const _c1 = ["errorState"];
function PayComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u041F\u043E\u0434\u043D\u0435\u0441\u0438\u0442\u0435 \u043A\u0430\u0440\u0442\u0443 \u0438\u043B\u0438 \u0442\u0435\u043B\u0435\u0444\u043E\u043D \u0434\u043B\u044F \u0431\u0435\u0441\u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u043E\u0439 \u043E\u043F\u043B\u0430\u0442\u044B");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0412\u0441\u0435\u0433\u043E \u043A \u043E\u043F\u043B\u0430\u0442\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.allSum.toFixed(2), " \u20BD");
} }
function PayComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0412\u043D\u0435\u0441\u0438\u0442\u0435 \u043A\u0443\u043F\u044E\u0440\u044B \u0432 \u043A\u0443\u043F\u044E\u0440\u043E\u043F\u0440\u0438\u0435\u043C\u043D\u0438\u043A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0412\u0441\u0435\u0433\u043E \u043A \u043E\u043F\u043B\u0430\u0442\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435! \u0422\u0435\u0440\u043C\u0438\u043D\u0430\u043B \u0441\u0434\u0430\u0447\u0438 \u043D\u0435 \u0434\u0430\u0435\u0442!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u0412\u043D\u0435\u0441\u0435\u043D\u043E");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u041E\u0441\u0442\u0430\u0435\u0442\u0441\u044F \u0432\u043D\u0435\u0441\u0442\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.allSum.toFixed(2), " \u20BD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.received.toFixed(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.remein.toFixed(2));
} }
function PayComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u041F\u043E\u0434\u043D\u0435\u0441\u0438\u0442\u0435 QR-\u043A\u043E\u0434 \u043A \u043A\u0430\u043C\u0435\u0440\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.timeLeft);
} }
function PayComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0421\u0435\u0440\u0432\u0438\u0441 \u0447\u0435\u043A\u043E\u0432 \u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E \u043D\u0435 \u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u041F\u0440\u0438\u043D\u043E\u0441\u0438\u043C \u0438\u0437\u0432\u0438\u043D\u0435\u043D\u0438\u044F \u0437\u0430 \u043D\u0435\u0443\u0434\u043E\u0431\u0441\u0442\u0432\u043E!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PayComponent_ng_template_11_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r6.modalService.dismissAll(); return ctx_r6.goHome(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041E\u041A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PayComponent_app_error_popup_13_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-error-popup", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("redirect", function PayComponent_app_error_popup_13_Template_app_error_popup_redirect_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onRedirectFromErrorPopUp($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isChild", true);
} }
class PayComponent {
    constructor(router, clientService, modalService, brokerService, navigateService, printService, dateService, sessionService, photoService) {
        this.router = router;
        this.clientService = clientService;
        this.modalService = modalService;
        this.brokerService = brokerService;
        this.navigateService = navigateService;
        this.printService = printService;
        this.dateService = dateService;
        this.sessionService = sessionService;
        this.photoService = photoService;
        this.error = false;
        this.messages = [];
        this.photoFromCart = [];
        this.basket = {
            queryNumber: this.clientService.queryNumber,
            terminal: this.clientService.locationID,
            client_email: this.clientService.email,
            start_at: Math.floor(Date.now() / 1000),
            items: []
        };
        this.changeQR = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //private sub$: Subject<boolean> = new Subject();
        this.subject = Object(rxjs_webSocket__WEBPACK_IMPORTED_MODULE_4__["webSocket"])(src_app_modules_outer_config_config__WEBPACK_IMPORTED_MODULE_3__["Configuration"].tradeService);
        this.fiatSubject = Object(rxjs_webSocket__WEBPACK_IMPORTED_MODULE_4__["webSocket"])(src_app_modules_outer_config_config__WEBPACK_IMPORTED_MODULE_3__["Configuration"].fiatService);
        this.images$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
        this.timeLeft = 40;
        this.steps = src_app_app_component__WEBPACK_IMPORTED_MODULE_5__["StepEnum"].Guest;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.received = 0;
        this.remein = 0;
    }
    triggerModal(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    }
    ngOnInit() {
        src_app_core__WEBPACK_IMPORTED_MODULE_7__["ActivityMode"].stopTimer();
        this.navigateService.clearURL();
        this.messages = [];
        this.allSum = this.brokerService.sumForPay;
        this.method = this.printService.method;
        this.photoService.photo$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1))
            .subscribe((items) => {
            items.map((item) => {
                var _a, _b;
                const current = {
                    product_id: 0,
                    product_count: 0,
                    brand_id: 0,
                    image_path: '',
                    remote_path: ''
                };
                if (item.sumOfPaper) {
                    current.product_id = 1;
                    current.product_count = item.totalCount;
                    current.brand_id = item.brandId;
                    current.image_path = item.path;
                    current.remote_path = item.originalUri;
                    (_a = this.basket.items) === null || _a === void 0 ? void 0 : _a.push(current);
                }
                if (item.sumOfEmail) {
                    current.product_id = 101;
                    current.product_count = item.totalCount;
                    current.brand_id = item.brandId;
                    current.image_path = item.path;
                    current.remote_path = item.originalUri;
                    (_b = this.basket.items) === null || _b === void 0 ? void 0 : _b.push(current);
                }
            });
            switch (this.method) {
                case 'Card':
                    this.getProofOfPayment();
                    break;
                case 'Union':
                    this.remein = this.allSum;
                    this.fiatPay();
                    break;
            }
        });
    }
    startTimer() {
        this.interval = setInterval(() => {
            if (this.timeLeft > 0) {
                this.timeLeft--;
            }
            else {
                this.steps = src_app_app_component__WEBPACK_IMPORTED_MODULE_5__["StepEnum"].Guest;
                this.sessionService.session = null;
                this.router.navigate(['']);
            }
        }, 1000);
    }
    //card
    getProofOfPayment() {
        this.createOrderSub = this.clientService.createOrder(this.basket)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err)))
            .subscribe((response) => {
            if (response.status === 200) {
                this.clientService.ordID = response.order_id;
                this.sendMessage(this.subject, {
                    "command": "sale",
                    "amount": response.body.amount_penny
                });
                this.subscribeCardPay(response);
                return;
            }
            ;
            this.error = true;
        });
    }
    completeOrder(orderId) {
        this.completeOderSub = this.clientService.completeOrder(orderId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => {
            this.viewPage = 'error';
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this.viewPay = true))
            .subscribe(complete => {
            if (complete) {
                this.basket = {
                    queryNumber: 1,
                    client_email: this.clientService.email,
                    start_at: Math.floor(Date.now() / 1000),
                    terminal: this.clientService.locationID,
                    items: []
                };
                this.changeQR.emit(complete.qr);
                console.log('completeOrder', complete);
                if (src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].printCheck) {
                    this.router.navigate(['check']);
                    return;
                }
                this.showMessageCheckIsNotWork('print-done');
            }
        });
    }
    //gotivka
    fiatPay() {
        this.createOrderSub = this.clientService.createOrder(this.basket)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err)))
            .subscribe((response) => {
            if (response.status !== 200) {
                this.error = true;
                return;
            }
            console.log("Сумма до приема денег" + response.body.amount_penny);
            this.clientService.ordID = response.body.order_id;
            this.sendMessage(this.fiatSubject, {
                "object": "cashmachine",
                "cmd": "enable",
                "enable": true,
            });
            this.subscribeFiatPay(response);
        });
    }
    sendMessage(service, message) {
        this.messages.push(message);
        service.subscribe();
        service.next(message);
        //service.unsubscribe();
    }
    subscribeFiatPay(response) {
        this.fiatSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => {
            console.log("Connect error");
            if (src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production) {
                this.showCassaIsNotWork('gallery');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err);
            }
            this.showMessageCheckIsNotWork();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err);
        }))
            .subscribe((message) => {
            let value = message.event || message.result;
            console.log('From ws message', message);
            if (this.messages.length) {
                const lastValue = this.messages[this.messages.length - 1];
                if (lastValue.enable == false && message.result == 'ok') {
                    value = "sucessfull";
                }
            }
            switch (value) {
                case 'ok': {
                    if (src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].endingPayment) {
                        //ТЕСТ Завершение приема денег
                        this.sendMessage(this.fiatSubject, {
                            "object": "cashmachine",
                            "cmd": "enable",
                            "enable": false
                        });
                    }
                    break;
                }
                case 'banknote': {
                    this.received += (message.eventValue / 100);
                    this.remein = ((this.remein * 100) - message.eventValue) / 100;
                    if (this.remein < 0)
                        this.remein = 0;
                    if (this.remein <= 0) {
                        // Завершение приема денег
                        this.sendMessage(this.fiatSubject, {
                            "object": "cashmachine",
                            "cmd": "enable",
                            "enable": false
                        });
                    }
                    break;
                }
                case 'rejecting': {
                    console.log("Банкнота не принята");
                    this.error = true;
                    break;
                }
                case 'coin': {
                    console.log("Принята монета");
                    break;
                }
                case 'sucessfull': {
                    console.log('Прием денег закончен');
                    this.brokerService.acquiring({
                        "command": "sale",
                        "status": "success",
                        "amount": response.body.amount_penny,
                    }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => {
                        this.error = true;
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err);
                    })).subscribe(balance => {
                        if (balance.status === 200) {
                            this.viewPay = false;
                            this.completeOrder(this.clientService.ordID);
                        }
                    });
                    break;
                }
            }
        });
    }
    subscribeCardPay(response) {
        this.subject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => {
            console.log("Connect error");
            if (src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production) {
                this.showCassaIsNotWork('gallery');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err);
            }
            this.showMessageCheckIsNotWork();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((item) => console.log(item)))
            .subscribe((message) => {
            console.log('message from ws:', message);
            switch (message.status) {
                case 'success': {
                    this.clientService.ordID = response.body.order_id;
                    this.brokerService.acquiring(message).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => {
                        console.log(16);
                        this.error = true;
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err);
                    })).subscribe(balance => {
                        if (balance.status === 200) {
                            this.viewPay = false;
                            console.log("balance status 200");
                            this.completeOrder(this.clientService.ordID);
                        }
                    });
                    break;
                }
                case 'error': {
                    this.brokerService.acquiring(message).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => {
                        console.log(18);
                        this.error = true;
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err);
                    })).subscribe(balance => {
                        if (balance.status === 200) {
                            this.viewPage = "error";
                            this.error = true;
                        }
                    });
                    break;
                }
            }
        });
    }
    showCassaIsNotWork(route) {
        this.error = true;
        setTimeout(() => {
            this.error = false;
            this.modalService.dismissAll();
            route && this.router.navigate([route]);
        }, 4000);
    }
    showMessageCheckIsNotWork(route) {
        this.triggerModal(this.serviceCheckIsNotWork);
        setTimeout(() => {
            this.error = false;
            this.modalService.dismissAll();
            route && this.router.navigate([route]);
        }, 4000);
    }
    goBack() {
        this.router.navigate(['cart']);
    }
    goGallery() {
        this.router.navigate(['gallery']);
    }
    goNext() {
        this.router.navigate(['check']);
    }
    goHome() {
        this.router.navigate(['']);
    }
    onRedirectFromErrorPopUp(router) {
        console.log('onRedirectFromErrorPopUp', router);
        this.navigateService.navigate(router);
    }
    ngOnDestroy() {
        this.timeLeft = 2;
        this.completeOderSub && this.completeOderSub.unsubscribe();
        this.createOrderSub && this.createOrderSub.unsubscribe();
        this.fiatSubject.unsubscribe();
        this.subject.unsubscribe();
    }
}
PayComponent.ɵfac = function PayComponent_Factory(t) { return new (t || PayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_client_service__WEBPACK_IMPORTED_MODULE_9__["ClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_broker_service__WEBPACK_IMPORTED_MODULE_11__["BrokerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_12__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_howPrint_service__WEBPACK_IMPORTED_MODULE_13__["HowPrintService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_date_service__WEBPACK_IMPORTED_MODULE_14__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_session_service__WEBPACK_IMPORTED_MODULE_15__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_photo_service__WEBPACK_IMPORTED_MODULE_16__["PhotoService"])); };
PayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PayComponent, selectors: [["app-pay"]], viewQuery: function PayComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.serviceCheckIsNotWork = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.errorState = _t.first);
    } }, inputs: { products: "products" }, outputs: { changeQR: "changeQR" }, decls: 14, vars: 5, consts: [[1, "slot", 2, "height", "1180px"], [1, "header"], [1, "header-icons"], [1, "icon-wrap", 3, "click"], [1, "icon", "icon-back"], [1, "icon", "icon-home"], [1, "content", 3, "ngSwitch"], ["class", "switch-pay", 4, "ngSwitchCase"], ["class", "switch-pay union-pay", 4, "ngSwitchCase"], ["class", "switch-pay qr-pay", 4, "ngSwitchCase"], ["serviceCheckIsNotWork", ""], ["class", "error-container", 3, "isChild", "redirect", 4, "ngIf"], [1, "switch-pay"], [1, "icon", "icon-wifi"], [1, "icon", "icon-card"], [1, "pay-block"], [1, "pay-item"], [1, "counter"], [1, "switch-pay", "union-pay"], [1, "icon", "icon-union"], [1, "pay-item", 2, "margin-bottom", "19px"], [1, "pay-item", 2, "margin-bottom", "31px"], [1, "pay-alert"], [1, "pay-item", 2, "margin-bottom", "31px", "margin-top", "24px"], [1, "switch-pay", "qr-pay"], [1, "icon", "icon-qr"], [1, "stopwatch"], [1, "icon", "icon-arrow"], [1, "error-title", "text-center", "fs36"], [1, "error-description"], ["type", "button", 1, "error-btn", 3, "click"], [1, "error-container", 3, "isChild", "redirect"]], template: function PayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PayComponent_Template_div_click_3_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PayComponent_Template_div_click_5_listener() { return ctx.goHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PayComponent_div_8_Template, 11, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PayComponent_div_9_Template, 24, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PayComponent_div_10_Template, 7, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PayComponent_ng_template_11_Template, 6, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PayComponent_app_error_popup_13_Template, 1, 1, "app-error-popup", 11);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.method);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "Union");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "QR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_17__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], _error_popup_error_popup_component__WEBPACK_IMPORTED_MODULE_18__["ErrorPopupComponent"]], styles: [".slot[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border-radius: 60px;\n  display: flex;\n  flex-direction: column;\n  background: rgba(255, 255, 255, 0.7);\n  -webkit-backdrop-filter: blur(94px);\n          backdrop-filter: blur(94px);\n  border-radius: 60px;\n}\n\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  padding: 32px 32px 0 32px;\n}\n\n.header-icons[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 140px;\n}\n\n.icon-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  width: 64px;\n  height: 64px;\n  background: #ffffff;\n  box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.2);\n  border-radius: 100px;\n  align-items: center;\n  justify-content: center;\n}\n\n.icon-wrap[_ngcontent-%COMP%]:first-child {\n  margin-right: 12px;\n}\n\n.next-btn[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.2);\n  border-radius: 100px;\n  width: 144px;\n  height: 64px;\n  font-weight: 600;\n  line-height: 30px;\n  border: none;\n  font-size: 28px;\n  color: #000000;\n  margin-left: 62%;\n}\n\n.switch-pay[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 760px;\n}\n\n.switch-pay[_ngcontent-%COMP%]   .icon-card[_ngcontent-%COMP%] {\n  margin-bottom: 76px;\n}\n\n.switch-pay[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 48px;\n  line-height: 52px;\n  color: #000000;\n  text-align: center;\n}\n\n.switch-pay[_ngcontent-%COMP%]   .stopwatch[_ngcontent-%COMP%] {\n  margin-top: 32px;\n  margin-bottom: 72px;\n  font-size: 80px;\n}\n\n.switch-pay[_ngcontent-%COMP%]   .pay-block[_ngcontent-%COMP%] {\n  width: 664px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  padding: 48px 48px;\n  background: #FFFFFF;\n  box-shadow: 0px 15px 30px rgba(3, 74, 104, 0.1);\n  border-radius: 44px;\n  margin-top: 46px;\n}\n\n.switch-pay[_ngcontent-%COMP%]   .pay-block[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 1px;\n  background: rgba(0, 0, 0, 0.1);\n  border: none;\n}\n\n.switch-pay[_ngcontent-%COMP%]   .pay-block[_ngcontent-%COMP%]   .pay-item[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.switch-pay[_ngcontent-%COMP%]   .pay-block[_ngcontent-%COMP%]   .pay-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 38px;\n  line-height: 40px;\n  color: #000000;\n}\n\n.switch-pay[_ngcontent-%COMP%]   .pay-block[_ngcontent-%COMP%]   .pay-item[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  font-size: 38px;\n  font-weight: 700;\n}\n\n.switch-pay[_ngcontent-%COMP%]   .pay-block[_ngcontent-%COMP%]   .pay-alert[_ngcontent-%COMP%] {\n  line-height: 30px !important;\n  font-size: 28px !important;\n  display: flex;\n  align-items: center;\n}\n\n.switch-pay[_ngcontent-%COMP%]   .pay-block[_ngcontent-%COMP%]   .pay-alert[_ngcontent-%COMP%]::before {\n  content: url('/assets/alert.svg');\n  width: 36px;\n  height: 36px;\n  margin-right: 12px;\n  margin-top: -2px;\n}\n\n.switch-pay[_ngcontent-%COMP%]   .icon-union[_ngcontent-%COMP%] {\n  margin-bottom: 74px;\n}\n\n.switch-pay[_ngcontent-%COMP%]   .icon-qr[_ngcontent-%COMP%] {\n  margin-bottom: 64px;\n}\n\n.qr-pay[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 620px;\n}\n\n.icon-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 569px;\n  left: -94px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BheS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUNJO0VBQ0ksYUFBQTtBQUNSOztBQUdBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7QUFBSjs7QUFHQTtFQUNJLG1CQUFBO0VBQ0EsNENBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUNJO0VBQ0ksbUJBQUE7QUFDUjs7QUFDSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUNBLGtCQUFBO0FBQVI7O0FBR0k7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQURSOztBQUlJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBRlI7O0FBSVE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQUZaOztBQUtRO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBSFo7O0FBSVk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7QUFIaEI7O0FBTVk7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBSmhCOztBQVFRO0VBQ0ksNEJBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQU5aOztBQVFZO0VBQ0ksaUNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFOaEI7O0FBWUk7RUFDSSxtQkFBQTtBQVZSOztBQWFJO0VBQ0ksbUJBQUE7QUFYUjs7QUFnQkk7RUFDSSxZQUFBO0FBYlI7O0FBaUJBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQWRKIiwiZmlsZSI6InBheS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbG90IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig5NHB4KTtcbiAgICBib3JkZXItcmFkaXVzOiA2MHB4O1xufVxuXG4uaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAzMnB4IDMycHggMCAzMnB4O1xuXG4gICAgJi1pY29ucyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxufVxuXG4uY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDE0MHB4O1xufVxuXG4uaWNvbi13cmFwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiA2NHB4O1xuICAgIGhlaWdodDogNjRweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGJveC1zaGFkb3c6IDBweCAxMnB4IDIwcHggcmdiKDAgMCAwIC8gMjAlKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaWNvbi13cmFwOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG59XG5cbi5uZXh0LWJ0bntcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJveC1zaGFkb3c6IDBweCAxMnB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIHdpZHRoOiAxNDRweDtcbiAgICBoZWlnaHQ6IDY0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIG1hcmdpbi1sZWZ0OiA2MiU7XG4gIH1cblxuLnN3aXRjaC1wYXkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiA3NjBweDtcbiAgICAuaWNvbi1jYXJke1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA3NnB4O1xuICAgIH1cbiAgICBzcGFuIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiA0OHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNTJweDtcbiAgICAgICAgLy8gZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBzYW5zLXNlcmlmO1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC5zdG9wd2F0Y2h7XG4gICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDcycHg7XG4gICAgICAgIGZvbnQtc2l6ZTogODBweDtcbiAgICB9XG5cbiAgICAucGF5LWJsb2Nre1xuICAgICAgICB3aWR0aDogNjY0cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogNDhweCA0OHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMTVweCAzMHB4IHJnYmEoMywgNzQsIDEwNCwgMC4xKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNDRweDtcbiAgICAgICAgbWFyZ2luLXRvcDogNDZweDtcbiAgICAgICAgXG4gICAgICAgIGhye1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wYXktaXRlbXtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzOHB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgIC8vIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIC5jb3VudGVye1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDM4cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5wYXktYWxlcnR7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgJjo6YmVmb3Jle1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2FsZXJ0LnN2Zyk7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDM2cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAuaWNvbi11bmlvbntcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNzRweDtcbiAgICB9XG5cbiAgICAuaWNvbi1xcntcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNjRweDtcbiAgICB9XG59XG5cbi5xci1wYXl7XG4gICAgc3BhbntcbiAgICAgICAgd2lkdGg6IDYyMHB4O1xuICAgIH1cbn1cblxuLmljb24tYXJyb3d7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTY5cHg7XG4gICAgbGVmdDogLTk0cHg7XG59XG4iXX0= */"] });
var PayMethodEnum;
(function (PayMethodEnum) {
    PayMethodEnum["Card"] = "Card";
    PayMethodEnum["Union"] = "Union";
    PayMethodEnum["QR"] = "QR";
})(PayMethodEnum || (PayMethodEnum = {}));
var PayEnum;
(function (PayEnum) {
    PayEnum["Magnit"] = "Magnit";
    PayEnum["Paper"] = "Paper";
})(PayEnum || (PayEnum = {}));


/***/ }),

/***/ "tmTl":
/*!**********************************************************!*\
  !*** ./src/app/modules/outer-config/settings.service.ts ***!
  \**********************************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "myVS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class SettingsService {
    constructor(http) {
        this.http = http;
        this.config = './assets/config.json';
        this.status = false;
    }
    load() {
        this.promise = this.http.get(this.config)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((data) => {
            this.reWriteConfig(data);
        }))
            .toPromise();
    }
    isStatusLoad() {
        return this.status;
    }
    reWriteConfig(data) {
        _config__WEBPACK_IMPORTED_MODULE_1__["Configuration"].reWrite(data);
        this.status = true;
    }
}
SettingsService.ɵfac = function SettingsService_Factory(t) { return new (t || SettingsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
SettingsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SettingsService, factory: SettingsService.ɵfac });


/***/ }),

/***/ "vRWC":
/*!*******************************************************!*\
  !*** ./src/app/core/directives/activity.directive.ts ***!
  \*******************************************************/
/*! exports provided: ActivityDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityDirective", function() { return ActivityDirective; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "ey9i");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ActivityDirective {
    constructor() {
    }
    onClick($event) {
        ___WEBPACK_IMPORTED_MODULE_0__["ActivityMode"].resetTimer();
    }
}
ActivityDirective.ɵfac = function ActivityDirective_Factory(t) { return new (t || ActivityDirective)(); };
ActivityDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: ActivityDirective, selectors: [["", "app-activity", ""]], hostBindings: function ActivityDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ActivityDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } } });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_neural_neural_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/neural/neural.component */ "kyqW");
/* harmony import */ var _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main-page/main-page.component */ "oaKM");
/* harmony import */ var _components_v1_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/v1/main-page/main-page.component */ "UW08");
/* harmony import */ var _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/gallery/gallery.component */ "EgB/");
/* harmony import */ var _components_how_print_how_print_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/how-print/how-print.component */ "WtDJ");
/* harmony import */ var _components_pre_load_pre_load_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/pre-load/pre-load.component */ "ycqb");
/* harmony import */ var _components_photo_not_found_photo_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/photo-not-found/photo-not-found.component */ "p35z");
/* harmony import */ var _components_payment_format_payment_format_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/payment-format/payment-format.component */ "g++4");
/* harmony import */ var _components_print_print_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/print/print.component */ "fh24");
/* harmony import */ var _components_print_done_print_done_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/print-done/print-done.component */ "n7hL");
/* harmony import */ var _components_error_popup_error_popup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/error-popup/error-popup.component */ "S90J");
/* harmony import */ var _components_receipt_popup_receipt_popup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/receipt-popup/receipt-popup.component */ "+JQM");
/* harmony import */ var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/cart/cart.component */ "QWKc");
/* harmony import */ var _components_pay_pay_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/pay/pay.component */ "rPE0");
/* harmony import */ var _components_send_email_send_email_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/send-email/send-email.component */ "cHCB");
/* harmony import */ var _shared_datepicker_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/datepicker/datepicker/datepicker.component */ "vnOL");
/* harmony import */ var _shared_locations_location_location_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/locations/location/location.component */ "r8hZ");
/* harmony import */ var _components_selfie_selfie_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/selfie/selfie.component */ "2uRY");
/* harmony import */ var _modules_download_module_smartphone_smartphone_smartphone_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modules/download-module/smartphone/smartphone/smartphone.component */ "5Nio");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/header/header.component */ "320Y");
/* harmony import */ var _modules_download_module_download_download_download_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modules/download-module/download/download/download.component */ "oNY9");
/* harmony import */ var _modules_download_module_social_social_social_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modules/download-module/social/social/social.component */ "b/8j");
/* harmony import */ var _modules_wireless_download_components_wireless_wireless_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./modules/wireless-download/components/wireless/wireless.component */ "Wz3H");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ "fXoL");






// Import library module





















const routes = [
    { path: '', component: _app_component__WEBPACK_IMPORTED_MODULE_24__["AppComponent"] },
    { path: 'main', component: _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__["MainPageComponent"] },
    { path: 'main-new', component: _components_v1_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"] },
    { path: 'selfie', component: _components_selfie_selfie_component__WEBPACK_IMPORTED_MODULE_18__["SelfieComponent"] },
    { path: 'neural', component: _components_neural_neural_component__WEBPACK_IMPORTED_MODULE_1__["NeuralComponent"], data: { animation: 'SelfiPage' } },
    { path: 'gallery', component: _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__["GalleryComponent"], data: { animation: 'GalleryPage' } },
    { path: 'howPrint', component: _components_how_print_how_print_component__WEBPACK_IMPORTED_MODULE_5__["HowPrintComponent"], data: { animation: 'HowPrintPage' } },
    { path: 'download', component: _modules_download_module_download_download_download_component__WEBPACK_IMPORTED_MODULE_21__["DownloadComponent"] },
    { path: 'wi-fi', component: _modules_wireless_download_components_wireless_wireless_component__WEBPACK_IMPORTED_MODULE_23__["WirelessComponent"], outlet: 'wifi' },
    { path: 'smartphone', component: _modules_download_module_smartphone_smartphone_smartphone_component__WEBPACK_IMPORTED_MODULE_19__["SmartphoneComponent"] },
    { path: 'header', component: _shared_header_header_component__WEBPACK_IMPORTED_MODULE_20__["HeaderComponent"] },
    { path: 'social', component: _modules_download_module_social_social_social_component__WEBPACK_IMPORTED_MODULE_22__["SocialComponent"] },
    { path: 'cart', component: _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_13__["CartComponent"], data: { animation: 'Cart' } },
    { path: 'email', component: _components_send_email_send_email_component__WEBPACK_IMPORTED_MODULE_15__["SendEmailComponent"] },
    { path: 'paymentFormat', component: _components_payment_format_payment_format_component__WEBPACK_IMPORTED_MODULE_8__["PaymentFormatComponent"], data: { animation: 'PaymentFormat' } },
    { path: 'pay', component: _components_pay_pay_component__WEBPACK_IMPORTED_MODULE_14__["PayComponent"], data: { animation: 'Pay' } },
    { path: 'check', component: _components_receipt_popup_receipt_popup_component__WEBPACK_IMPORTED_MODULE_12__["ReceiptPopupComponent"], data: { animation: 'Check' } },
    { path: 'print', component: _components_print_print_component__WEBPACK_IMPORTED_MODULE_9__["PrintComponent"], data: { animation: 'Print' } },
    { path: 'print-done', component: _components_print_done_print_done_component__WEBPACK_IMPORTED_MODULE_10__["PrintDoneComponent"] },
    { path: 'error', component: _components_error_popup_error_popup_component__WEBPACK_IMPORTED_MODULE_11__["ErrorPopupComponent"] },
    { path: 'preloader', component: _components_pre_load_pre_load_component__WEBPACK_IMPORTED_MODULE_6__["PreLoadComponent"] },
    { path: 'not', component: _components_photo_not_found_photo_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PhotoNotFoundComponent"] },
    { path: 'datepicker', component: _shared_datepicker_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_16__["DatepickerComponent"] },
    { path: 'test', loadChildren: () => __webpack_require__.e(/*! import() | test-test-module */ "test-test-module").then(__webpack_require__.bind(null, /*! ./test/test.module */ "FScs")).then(m => m.TestModule) },
    { path: 'location', component: _shared_locations_location_location_component__WEBPACK_IMPORTED_MODULE_17__["LocationComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vnOL":
/*!**********************************************************************!*\
  !*** ./src/app/shared/datepicker/datepicker/datepicker.component.ts ***!
  \**********************************************************************/
/*! exports provided: DatepickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerComponent", function() { return DatepickerComponent; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_core_mappers_date_mapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/mappers/date.mapper */ "J0yI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/client.service */ "oR8h");
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/navigation.service */ "LFK6");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");










function DatepickerComponent_ng_container_6_ng_template_7_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DatepickerComponent_ng_container_6_ng_template_7_div_0_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r6.navigate(-1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DatepickerComponent_ng_container_6_ng_template_7_div_0_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r8.navigate(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "ngb-datepicker-month", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const month_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r4.i18n.getMonthFullName(month_r5.month), " ", month_r5.year, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("month", month_r5);
} }
function DatepickerComponent_ng_container_6_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, DatepickerComponent_ng_container_6_ng_template_7_div_0_Template, 9, 3, "div", 12);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _r2.state.months);
} }
function DatepickerComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0430\u0442\u0443");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ngb-datepicker", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function DatepickerComponent_ng_container_6_Template_ngb_datepicker_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r9.date = $event; })("click", function DatepickerComponent_ng_container_6_Template_ngb_datepicker_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r11.selectDay(ctx_r11.date); })("navigate", function DatepickerComponent_ng_container_6_Template_ngb_datepicker_navigate_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r12.date = $event.next; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, DatepickerComponent_ng_container_6_ng_template_7_Template, 1, 1, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("displayMonths", 1)("weekdays", false)("markDisabled", ctx_r0.isDisabled)("minDate", ctx_r0.minDate)("maxDate", ctx_r0.maxDate)("ngModel", ctx_r0.date);
} }
class DatepickerComponent {
    constructor(router, calendar, clientService, i18n, navigateService) {
        this.router = router;
        this.calendar = calendar;
        this.clientService = clientService;
        this.i18n = i18n;
        this.navigateService = navigateService;
        this.disabledDates = [];
        this.isDisabled = (d, current) => this.disabledDates.find(x => new _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbDate"](x.year, x.month, x.day).equals(d)) ? true : false;
    }
    ngOnInit() {
        if (!this.clientService.Location) {
            return;
        }
        this.getData();
    }
    getData() {
        var _a;
        this.isLoading = true;
        this.dataSlotList$ = this.clientService.getDates((_a = this.clientService.Location) === null || _a === void 0 ? void 0 : _a.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((list) => {
            if (!list.length) {
                return [];
            }
            this.disabledDates = src_app_core_mappers_date_mapper__WEBPACK_IMPORTED_MODULE_2__["DateMapper"].getOutDates(list, list[0], list[list.length - 1]);
            this.minDate = src_app_core_mappers_date_mapper__WEBPACK_IMPORTED_MODULE_2__["DateMapper"].formatNgbDateStruct(list[0]);
            this.maxDate = src_app_core_mappers_date_mapper__WEBPACK_IMPORTED_MODULE_2__["DateMapper"].formatNgbDateStruct(list[list.length - 1]);
            this.navigateService.clearURL();
            return list;
        }));
    }
    navigate(number) {
        if (!this.datepicker) {
            return;
        }
        const { state, calendar } = this.datepicker;
        this.datepicker.navigateTo(calendar.getNext(state.firstDate, 'm', number));
    }
    formatDate(number) {
        return number < 10 ? `0${number}` : number;
    }
    selectDay(date) {
        const stringifyData = `${this.formatDate(date.day)}.${this.formatDate(date.month)}.${date.year}`;
        const stringifyMinData = `${this.formatDate(this.minDate.day)}.${this.formatDate(this.minDate.month)}.${this.minDate.year}`;
        const stringifyMaxData = `${this.formatDate(this.maxDate.day)}.${this.formatDate(this.maxDate.month)}.${this.maxDate.year}`;
        if ((date >= this.minDate && date <= this.maxDate) && (date.day != undefined)) {
            this.clientService.date = stringifyData;
            this.navigateTo('neural');
        }
    }
    navigateTo(rout) {
        this.navigateService.navigate(rout);
    }
}
DatepickerComponent.ɵfac = function DatepickerComponent_Factory(t) { return new (t || DatepickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCalendar"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_client_service__WEBPACK_IMPORTED_MODULE_5__["ClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbDatepickerI18n"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"])); };
DatepickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DatepickerComponent, selectors: [["app-datepicker"]], viewQuery: function DatepickerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbDatepicker"], 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.datepicker = _t.first);
    } }, decls: 8, vars: 3, consts: [[1, "main_cont", 2, "height", "1180px"], [1, "header"], [1, "header-icons"], [1, "icon-wrap", 3, "click"], [1, "icon", "icon-close"], [1, "content"], [4, "ngIf"], [1, "title"], [1, "d-inline-block"], ["outsideDays", "hidden", "navigation", "none", 1, "dp", 3, "displayMonths", "weekdays", "markDisabled", "minDate", "maxDate", "ngModel", "ngModelChange", "click", "navigate"], ["dp", ""], ["ngbDatepickerContent", ""], [4, "ngFor", "ngForOf"], [1, "dp-header"], ["type", "button", 1, "btn", 3, "click"], [1, "icon", "icon-back-dp"], [1, "text-primary", "p-1", "font-weight-bold", "mounth-title"], [1, "icon", "icon-next-dp"], [1, "border", "rounded", 3, "month"]], template: function DatepickerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DatepickerComponent_Template_div_click_3_listener() { return ctx.navigateTo("neural"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, DatepickerComponent_ng_container_6_Template, 8, 6, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 1, ctx.dataSlotList$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbDatepickerContent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbDatepickerMonth"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: [".main_cont {\n  background: rgba(255, 255, 255, 0.7);\n  -webkit-backdrop-filter: blur(94px);\n          backdrop-filter: blur(94px);\n  border-radius: 60px;\n}\n\n.dp {\n  width: 760px;\n  height: 604px;\n}\n\n.header {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  padding: 32px 32px 0 32px;\n}\n\n.header-icons {\n  display: flex;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.content .title {\n  font-style: normal;\n  font-size: 48px;\n  line-height: 52px;\n  font-weight: 600;\n  color: black;\n  text-align: center;\n  margin-bottom: 24px;\n}\n\n.icon-wrap {\n  display: flex;\n  width: 64px;\n  height: 64px;\n  background: #ffffff;\n  box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.2);\n  border-radius: 100px;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.dp {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 760px;\n  height: 604px;\n  background: #FFFFFF;\n  box-shadow: 0px 20px 40px rgba(3, 74, 104, 0.2);\n  border-radius: 44px;\n}\n\n.mounth-title {\n  font-weight: 600;\n  font-size: 38px;\n  line-height: 40px;\n  color: #000000 !important;\n  text-align: center;\n}\n\n.dp-header {\n  display: flex;\n  align-items: center;\n  padding-bottom: 64px !important;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2RhdGVwaWNrZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQ0FBQTtFQUNGLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUNJO0VBQ0UsYUFBQTtBQUNOOztBQUlFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFJRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQURKOztBQUtFO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFGSjs7QUFLRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLCtDQUFBO0VBQ0EsbUJBQUE7QUFGSjs7QUFLRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUZKOztBQU1FO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtBQUhKIiwiZmlsZSI6ImRhdGVwaWNrZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbl9jb250e1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDk0cHgpO1xuICBib3JkZXItcmFkaXVzOiA2MHB4O1xufVxuXG4uZHB7XG4gIHdpZHRoOiA3NjBweDtcbiAgaGVpZ2h0OiA2MDRweDtcbn1cblxuLmhlYWRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAzMnB4IDMycHggMCAzMnB4O1xuICBcbiAgICAmLWljb25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuICB9XG5cblxuICAuY29udGVudHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICBcbiAgLmNvbnRlbnQgLnRpdGxle1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDUycHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAxKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgXG4gIH1cbiAgXG4gIC5pY29uLXdyYXB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogNjRweDtcbiAgICBoZWlnaHQ6IDY0cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBib3gtc2hhZG93OiAwcHggMTJweCAyMHB4IHJnYigwIDAgMCAvIDIwJSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAuZHAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogNzYwcHg7XG4gICAgaGVpZ2h0OiA2MDRweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJveC1zaGFkb3c6IDBweCAyMHB4IDQwcHggcmdiKDMgNzQgMTA0IC8gMjAlKTtcbiAgICBib3JkZXItcmFkaXVzOiA0NHB4O1xuICB9XG5cbiAgLm1vdW50aC10aXRsZXtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICBjb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgIFxuICB9XG5cbiAgLmRwLWhlYWRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IDY0cHghaW1wb3J0YW50O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuIl19 */", "\n    .custom-datepicker .ngb-dp-header {\n      padding: 0;\n    }\n    .custom-datepicker .ngb-dp-content {\n      display: grid;\n      grid-template-columns: auto auto;\n      grid-column-gap: 1rem;\n      grid-row-gap: 0.5rem;\n    }\n  "], encapsulation: 2 });


/***/ }),

/***/ "wMwq":
/*!**************************************************!*\
  !*** ./src/app/interceptors/host.interceptor.ts ***!
  \**************************************************/
/*! exports provided: HostInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostInterceptor", function() { return HostInterceptor; });
/* harmony import */ var _modules_outer_config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/outer-config/config */ "myVS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HostInterceptor {
    constructor() {
    }
    intercept(request, next) {
        if (request.url.includes('i18n') || (request.url.includes(`${_modules_outer_config_config__WEBPACK_IMPORTED_MODULE_0__["Configuration"].host}api/client`))) {
            return next.handle(request);
        }
        const options = {};
        //let path = Routes[request.url];
        options.url = `${_modules_outer_config_config__WEBPACK_IMPORTED_MODULE_0__["Configuration"].host}${request.url}`;
        return next.handle(request);
    }
}
HostInterceptor.ɵfac = function HostInterceptor_Factory(t) { return new (t || HostInterceptor)(); };
HostInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HostInterceptor, factory: HostInterceptor.ɵfac });


/***/ }),

/***/ "ycqb":
/*!***********************************************************!*\
  !*** ./src/app/components/pre-load/pre-load.component.ts ***!
  \***********************************************************/
/*! exports provided: PreLoadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreLoadComponent", function() { return PreLoadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "JqCM");


class PreLoadComponent {
    constructor(spinner) {
        this.spinner = spinner;
        this.show = false;
    }
    ngOnInit() {
        /** spinner starts on init */
        this.spinner.show();
        setTimeout(() => {
            /** spinner ends after 5 seconds */
            this.spinner.hide();
        }, 5000);
    }
}
PreLoadComponent.ɵfac = function PreLoadComponent_Factory(t) { return new (t || PreLoadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"])); };
PreLoadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PreLoadComponent, selectors: [["app-pre-load"]], inputs: { show: "show" }, decls: 10, vars: 0, consts: [[1, "preload", 2, "height", "1180px"], [1, "preload-header"], ["href", "/", 1, "preload-header__btn"], ["width", "18", "height", "32", "viewbox", "0 0 18 32", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M16 2L3 16L16 30", "stroke", "black", "stroke-opacity", "0.3", "stroke-width", "4", "stroke-linecap", "round"], ["width", "40", "height", "39", "viewbox", "0 0 40 39", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M36.829 17.6197C37.7245 18.2664 38.9747 18.0648 39.6214 17.1693C40.2681 16.2738 40.0665 15.0237 39.171 14.377L21.171 1.37696L20 0.53125L18.829 1.37696L0.829042 14.377C-0.0664084 15.0237 -0.268049 16.2738 0.378668 17.1693C1.02538 18.0648 2.27555 18.2664 3.17101 17.6197L20 5.46538L36.829 17.6197ZM9.00002 20.9983C9.00002 19.8937 8.10459 18.9983 7.00002 18.9983C5.89545 18.9983 5.00002 19.8937 5.00002 20.9983V30.9983C5.00002 35.4166 8.58175 38.9983 13 38.9983H27C31.4183 38.9983 35 35.4166 35 30.9983V20.9983C35 19.8937 34.1046 18.9983 33 18.9983C31.8955 18.9983 31 19.8937 31 20.9983V30.9983C31 33.2075 29.2092 34.9983 27 34.9983H13C10.7909 34.9983 9.00002 33.2075 9.00002 30.9983V20.9983Z", "fill", "black", "fill-opacity", "0.3"], [1, "preload-main"], ["bdColor", "rgba(0, 0, 0, 0)", "size", "medium", "color", "#fff", "type", "ball-spin-clockwise", 2, "z-index", "999999"]], template: function PreLoadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "ngx-spinner", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerComponent"]], styles: [".preload[_ngcontent-%COMP%] {\n  position: relative;\n  background: rgba(255, 255, 255, 0.7);\n  -webkit-backdrop-filter: blur(94px);\n          backdrop-filter: blur(94px);\n  border-radius: 60px;\n}\n.preload-header[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 32px 32px 0 32px;\n}\n.preload-header__btn[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #FFFFFF;\n  background-size: cover;\n  padding: 8px;\n  box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.2);\n  border-radius: 100px;\n  margin: 0px 12px;\n}\n.preload-main[_ngcontent-%COMP%] {\n  padding: 0px 64px;\n}\n.preload-main__title[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  font-weight: 600;\n  font-size: 48px;\n  text-align: center;\n}\n.preload-main__title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 48px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3ByZS1sb2FkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFFQSxvQ0FBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxtQkFBQTtBQUFKO0FBRUk7RUFDSSxhQUFBO0VBQ0EseUJBQUE7QUFBUjtBQUNRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsNENBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBQ1o7QUFHSTtFQUNJLGlCQUFBO0FBRFI7QUFHUTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFEWjtBQUlRO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFGWiIsImZpbGUiOiJwcmUtbG9hZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmVsb2FkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDk0cHgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDYwcHg7XG5cbiAgICAmLWhlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHBhZGRpbmc6IDMycHggMzJweCAwIDMycHg7XG4gICAgICAgICZfX2J0bntcbiAgICAgICAgICAgIHdpZHRoOiA2NHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA2NHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDEycHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDEycHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLW1haW4ge1xuICAgICAgICBwYWRkaW5nOiAwcHggNjRweDtcblxuICAgICAgICAmX190aXRsZSB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgICZfX3RpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "zG83":
/*!*******************************************************************!*\
  !*** ./src/app/components/print-format/print-format.component.ts ***!
  \*******************************************************************/
/*! exports provided: PrintFormatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintFormatComponent", function() { return PrintFormatComponent; });
/* harmony import */ var src_app_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core */ "ey9i");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class PrintFormatComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        src_app_core__WEBPACK_IMPORTED_MODULE_0__["ActivityMode"].startTimer();
    }
    goBack() {
        this.router.navigate(['cart']);
    }
    goHome() {
        this.router.navigate(['']);
    }
    goNext() {
        this.router.navigate(['pay']);
    }
}
PrintFormatComponent.ɵfac = function PrintFormatComponent_Factory(t) { return new (t || PrintFormatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
PrintFormatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PrintFormatComponent, selectors: [["app-print-format"]], decls: 24, vars: 0, consts: [[1, "payment", 2, "height", "1180px"], [1, "header"], [1, "header-icons"], [1, "icon-wrap", 3, "click"], [1, "icon", "icon-back"], [1, "icon", "icon-home"], [1, "payment-main"], [1, "payment-main__title"], [1, "payment-main__grids"], [1, "payment-main__grid", "payment-main__grid-full", 3, "click"], ["src", "././assets/static/img/card.png", "alt", "", 1, "payment-main__grid-img"], [1, "payment-main__grid-title"], [1, "payment-main__grid", 3, "click"]], template: function PrintFormatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PrintFormatComponent_Template_div_click_3_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PrintFormatComponent_Template_div_click_5_listener() { return ctx.goHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u0424\u043E\u0440\u043C\u0430\u0442 \u043F\u0435\u0447\u0430\u0442\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PrintFormatComponent_Template_div_click_11_listener() { return ctx.goNext(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "10\u044515 \u0441\u043C");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PrintFormatComponent_Template_div_click_15_listener() { return ctx.goNext(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "7,5\u044510 \u0441\u043C");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PrintFormatComponent_Template_div_click_20_listener() { return ctx.goNext(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "10\u044510 \u0441\u043C");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: [".payment[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.7);\n  -webkit-backdrop-filter: blur(94px);\n          backdrop-filter: blur(94px);\n  border-radius: 60px;\n}\n.payment-header[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 32px 32px 0 32px;\n}\n.payment-header__btn[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #FFFFFF;\n  background-size: cover;\n  padding: 8px;\n  box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.2);\n  border-radius: 100px;\n  margin: 0px 12px;\n}\n.payment-main[_ngcontent-%COMP%] {\n  padding: 0px 64px;\n}\n.payment-main__title[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  font-weight: 600;\n  font-size: 48px;\n  text-align: center;\n}\n.payment-main__grids[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n.payment-main__grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: #FFFFFF;\n  padding: 68px;\n  box-shadow: 0px 20px 40px rgba(3, 74, 104, 0.2);\n  border-radius: 44px;\n  width: 46%;\n  margin: 32px 0;\n}\n.payment-main__grid[_ngcontent-%COMP%]:nth-child(2) {\n  margin-right: 24px;\n}\n.payment-main__grid-full[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  max-height: 340px;\n}\n.payment-main__grid-full[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 4rem;\n}\n.payment-main__grid-title[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 38px;\n  margin: 0;\n  text-align: center;\n}\n.payment-main__grid-price[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 24px;\n  color: rgba(0, 0, 0, 0.4);\n}\n.payment-main__grid-img[_ngcontent-%COMP%] {\n  width: 140px;\n}\n.icon-wrap[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  padding: 32px 32px 0 32px;\n}\n.header-icons[_ngcontent-%COMP%] {\n  display: flex;\n}\n.icon-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  width: 64px;\n  height: 64px;\n  background: #ffffff;\n  box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.2);\n  border-radius: 100px;\n  align-items: center;\n  justify-content: center;\n}\n.icon-wrap[_ngcontent-%COMP%]:first-child {\n  margin-right: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3ByaW50LWZvcm1hdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFBSTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtBQUVSO0FBRFE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSw0Q0FBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUFHWjtBQUNJO0VBQ0ksaUJBQUE7QUFDUjtBQUNRO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUNaO0FBRVE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0FBQVo7QUFHUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSwrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUFEWjtBQUdZO0VBQ0ksa0JBQUE7QUFEaEI7QUFJWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFGaEI7QUFHZ0I7RUFDSSxnQkFBQTtBQURwQjtBQUtZO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFIaEI7QUFNWTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBSmhCO0FBT1k7RUFDSSxZQUFBO0FBTGhCO0FBV0E7RUFDSSxlQUFBO0FBUko7QUFXQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFSSjtBQVVJO0VBQ0ksYUFBQTtBQVJSO0FBWUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDRDQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBVEo7QUFZQTtFQUNJLGtCQUFBO0FBVEoiLCJmaWxlIjoicHJpbnQtZm9ybWF0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBheW1lbnQge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOTRweCk7XG4gICAgYm9yZGVyLXJhZGl1czogNjBweDtcbiAgICAmLWhlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHBhZGRpbmc6IDMycHggMzJweCAwIDMycHg7XG4gICAgICAgICZfX2J0bntcbiAgICAgICAgICAgIHdpZHRoOiA2NHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA2NHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDEycHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDEycHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLW1haW4ge1xuICAgICAgICBwYWRkaW5nOiAwcHggNjRweDtcblxuICAgICAgICAmX190aXRsZSB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgICZfX2dyaWRzIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIH1cblxuICAgICAgICAmX19ncmlkIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDY4cHg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMjBweCA0MHB4IHJnYmEoMywgNzQsIDEwNCwgMC4yKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDQ0cHg7XG4gICAgICAgICAgICB3aWR0aDogNDYlO1xuICAgICAgICAgICAgbWFyZ2luOiAzMnB4IDA7XG5cbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDIpe1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjRweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi1mdWxsIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMzQwcHg7XG4gICAgICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0cmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi10aXRsZSB7XG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzOHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYtcHJpY2Uge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLWltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE0MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uaWNvbi13cmFwe1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmhlYWRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDMycHggMzJweCAwIDMycHg7XG5cbiAgICAmLWljb25zIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG59XG5cbi5pY29uLXdyYXB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogNjRweDtcbiAgICBoZWlnaHQ6IDY0cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBib3gtc2hhZG93OiAwcHggMTJweCAyMHB4IHJnYigwIDAgMCAvIDIwJSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmljb24td3JhcDpmaXJzdC1jaGlsZHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG59Il19 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map