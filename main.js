(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Admin\Documents\resummee\resumeUnni\src\main.ts */"zUnb");


/***/ }),

/***/ "1fes":
/*!****************************************************!*\
  !*** ./src/app/experience/experience.component.ts ***!
  \****************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function ExperienceComponent_div_1_ul_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pro_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", pro_r3.period, " - ", pro_r3.project, " - ", pro_r3.description, "");
} }
function ExperienceComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExperienceComponent_div_1_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const x_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.openCompanyDetails(x_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ExperienceComponent_div_1_ul_7_Template, 3, 3, "ul", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r1.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" - ", x_r1.company, " as ", x_r1.designation, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", x_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", x_r1.projects);
} }
class ExperienceComponent {
    constructor() {
        this.expDetails = [{
                id: "c1",
                company: "Tata Consultancy Services",
                projects: [
                    {
                        period: "2020 Jan - Till Date",
                        project: "Ultmatix-SmartSales Project",
                        description: "Working as a full stack developer in Ultimatix SmartSales project in Tata Consultancy Services. Proficiency in Front end development with Angularjs, CSS3 and HTML.Backend coding skills in Java. Good knowledge in Advanced Agile Methodology."
                    },
                    {
                        period: "2019 JAug - 2020 Jan",
                        project: "BlockChain- Hyperledger Training With POC",
                        description: "POC done on Leave management application of users in an institution as an application of Blockchain."
                    }
                ],
                year: "2019 -2021",
                designation: "Assistant System Engineer",
                role: "Full Stack developer",
            },
            {
                id: "c2",
                company: "QBurst Technologies Pvt. Ltd.",
                projects: [
                    {
                        period: "14 Jun 2016 - 14 July 2016",
                        project: "SnapCube - 3D Web Album",
                        description: "Done as part of one month Internship at QBurst Technologies Pvt. Ltd, Trivandrum. Worked on three.js and apache cordova. "
                    }
                ],
                year: "2016",
                designation: "Internee",
                role: "Front End Developer",
            },
        ];
        this.ids = ["c1", "c2"];
    }
    ngOnInit() {
    }
    openCompanyDetails(id) {
        this.ids.forEach(element => {
            document.getElementById(element).style.display = "none";
        });
        document.getElementById(id).style.display = "block";
    }
}
ExperienceComponent.ɵfac = function ExperienceComponent_Factory(t) { return new (t || ExperienceComponent)(); };
ExperienceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExperienceComponent, selectors: [["app-experience"]], decls: 2, vars: 1, consts: [[1, "eduParent"], [4, "ngFor", "ngForOf"], [1, "lineTime"], [1, "liOfEdu"], [1, "timelineYear", 3, "click"], [2, "margin-left", "100px", "display", "none", 3, "id"]], template: function ExperienceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExperienceComponent_div_1_Template, 8, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.expDetails);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".timelineYear[_ngcontent-%COMP%]{\r\n    border : 2px solid green;\r\n    background-color: gainsboro;\r\n    padding : 5px;\r\n    border-radius: 50%;\r\n}\r\n.liOfEdu[_ngcontent-%COMP%]{\r\n    margin-top: -10px;\r\n}\r\n.lineTime[_ngcontent-%COMP%]{\r\n    border-left: 2px solid black;\r\n    height: 72px;\r\n    margin-top: -28px;\r\n    margin-left: -20px;\r\n    border-bottom: 2px solid black;\r\n    width: 20px;\r\n\r\n}\r\n.eduParent[_ngcontent-%COMP%]{\r\n    margin-top: 25px;\r\n    margin-left: 112px;\r\n}\r\n.eduHeading[_ngcontent-%COMP%]{\r\n    border: 1px solid black;\r\n   padding:10px;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    border-radius: 50%;\r\n    margin-left: -108px;\r\n    background-color: #010109;\r\n    z-index: 24;\r\n    color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVyaWVuY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtJQUN4QiwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsOEJBQThCO0lBQzlCLFdBQVc7O0FBRWY7QUFBQztJQUNHLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHVCQUF1QjtHQUN4QixZQUFZO0lBQ1gsMEJBQWtCO0lBQWxCLHVCQUFrQjtJQUFsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsV0FBVztJQUNYLFlBQVk7QUFDaEIiLCJmaWxlIjoiZXhwZXJpZW5jZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpbWVsaW5lWWVhcntcclxuICAgIGJvcmRlciA6IDJweCBzb2xpZCBncmVlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdhaW5zYm9ybztcclxuICAgIHBhZGRpbmcgOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLmxpT2ZFZHV7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxufVxyXG4ubGluZVRpbWV7XHJcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgaGVpZ2h0OiA3MnB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTI4cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTIwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XHJcbiAgICB3aWR0aDogMjBweDtcclxuXHJcbn0uZWR1UGFyZW50e1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMTJweDtcclxufVxyXG4uZWR1SGVhZGluZ3tcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICBwYWRkaW5nOjEwcHg7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEwOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxMDEwOTtcclxuICAgIHotaW5kZXg6IDI0O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59Il19 */"] });


/***/ }),

/***/ "9QmI":
/*!**************************************************!*\
  !*** ./src/app/educatiom/educatiom.component.ts ***!
  \**************************************************/
/*! exports provided: EducatiomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducatiomComponent", function() { return EducatiomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function EducatiomComponent_div_3_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r1.extraInfo);
} }
function EducatiomComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " -");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EducatiomComponent_div_3_div_9_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r1.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r1.course);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" - ", x_r1.collegeName, " - ", x_r1.grade, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r1.extraInfo != undefined);
} }
class EducatiomComponent {
    constructor() {
        this.eduDetails = [{
                year: "2017-19",
                course: "M.Tech - Network Engineering",
                collegeName: "Govt.Egineering College Barton Hill",
                grade: "9.6",
                extraInfo: "Completed M.Tech Thesis with 10 CGPA"
            },
            {
                year: "2013-17",
                course: "B.Tech - Information Technlogy",
                collegeName: "Govt.Egineering College Barton Hill",
                grade: "8.56",
                extraInfo: "Secured University First Rank in B.Tech Information Technology from University of Kerala"
            },
            {
                year: "2011-13",
                course: "HSE - Science",
                collegeName: "Govt. Higher Secondary School Neyyattinkara",
                grade: "96%"
            },
            {
                year: "2010-11",
                course: "SSLC",
                collegeName: "St. Therese's Convent GHSS Neyyattinkara",
                grade: "95%"
            }
        ];
    }
    ngOnInit() {
    }
}
EducatiomComponent.ɵfac = function EducatiomComponent_Factory(t) { return new (t || EducatiomComponent)(); };
EducatiomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EducatiomComponent, selectors: [["app-educatiom"]], decls: 4, vars: 1, consts: [[1, "eduParent"], [1, "eduHeading"], [4, "ngFor", "ngForOf"], [1, "lineTime"], [1, "liOfEdu"], [1, "timelineYear"], ["style", "margin-left:100px;", 4, "ngIf"], [2, "margin-left", "100px"]], template: function EducatiomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Eduacation in a Timeline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EducatiomComponent_div_3_Template, 10, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.eduDetails);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".timelineYear[_ngcontent-%COMP%]{\r\n    border : 2px solid green;\r\n    background-color: gainsboro;\r\n    padding : 5px;\r\n    border-radius: 50%;\r\n}\r\n.liOfEdu[_ngcontent-%COMP%]{\r\n    margin-top: -10px;\r\n}\r\n.lineTime[_ngcontent-%COMP%]{\r\n    border-left: 2px solid black;\r\n    height: 72px;\r\n    margin-top: -28px;\r\n    margin-left: -20px;\r\n    border-bottom: 2px solid black;\r\n    width: 20px;\r\n\r\n}\r\n.eduParent[_ngcontent-%COMP%]{\r\n    margin-top: 25px;\r\n    margin-left: 112px;\r\n}\r\n.eduHeading[_ngcontent-%COMP%]{\r\n    border: 1px solid black;\r\n   padding:10px;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    border-radius: 50%;\r\n    margin-left: -108px;\r\n    background-color: #010109;\r\n    z-index: 24;\r\n    color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkdWNhdGlvbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIsV0FBVzs7QUFFZjtBQUFDO0lBQ0csZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksdUJBQXVCO0dBQ3hCLFlBQVk7SUFDWCwwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsWUFBWTtBQUNoQiIsImZpbGUiOiJlZHVjYXRpb20uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aW1lbGluZVllYXJ7XHJcbiAgICBib3JkZXIgOiAycHggc29saWQgZ3JlZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87XHJcbiAgICBwYWRkaW5nIDogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi5saU9mRWR1e1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbn1cclxuLmxpbmVUaW1le1xyXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBibGFjaztcclxuICAgIGhlaWdodDogNzJweDtcclxuICAgIG1hcmdpbi10b3A6IC0yOHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcblxyXG59LmVkdVBhcmVudHtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTEycHg7XHJcbn1cclxuLmVkdUhlYWRpbmd7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgcGFkZGluZzoxMHB4O1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTAxMDk7XHJcbiAgICB6LWluZGV4OiAyNDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class HomeComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 40, vars: 0, consts: [[1, "parentDiv"], [1, "leftSideDiv"], [1, "circularPicBorder"], [1, "innerCircle"], ["src", "\\assets\\mainImages\\AishuPhoto.jpg", 1, "photo"], [1, "rightSideDiv"], [1, "nameHeading"], [1, "contactDetails"], ["src", "\\assets\\mainImages\\emailIcon.png", "width", "15px", "height", "15px", 1, "emailIcon"], [1, "email"], ["src", "assets\\mainImages\\phone.png", "width", "15px", "height", "15px", 1, "emailIcon"], [2, "width", "90%"], [1, "topnav"], ["routerLink", "/experience", "routerLinkActive", "activeNavBar"], ["routerLink", "/educationInfo", "routerLinkActive", "activeNavBar"], ["routerLink", "/projects", "routerLinkActive", "activeNavBar"], ["routerLink", "/technicalInfo", "routerLinkActive", "activeNavBar"], ["routerLink", "/personalInfo", "routerLinkActive", "activeNavBar"], ["id", "Education", 2, "display", "none"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "AISWARYA V I");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "aiswaryavi2014@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "7306887235, 9446788334");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "hr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Projects and Achievements");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Technical Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Personal Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " jesfjhfjhehsf ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["@keyframes scaleIn {\r\n    from {\r\n      transform: scale(1.0,1.0);\r\n      opacity: 1;\r\n    }\r\n    to {\r\n      transform: scale(1.1, 1.1);\r\n      opacity: 0.5;\r\n    }\r\n  }\r\n  \r\n  .parentDiv[_ngcontent-%COMP%]{\r\n    width : 100%;\r\n    display : inline-flex;\r\n    background-image: linear-gradient( to bottom right, #e6e6e6, #b3ffff);\r\n    height : 100%;\r\n}\r\n  \r\n  .leftSideDiv[_ngcontent-%COMP%]{\r\n      width : 40%;\r\n      \r\n      height:100%;\r\n          margin-left: 2%;\r\n          margin-top: 2%\r\n  }\r\n  \r\n  .rightSideDiv[_ngcontent-%COMP%]{\r\n      width : 60%;\r\n      \r\n      height:100%;\r\n  }\r\n  \r\n  .circularPicBorder[_ngcontent-%COMP%]{\r\n      border-radius: 50%;\r\n      background-color: #b3d1ff;\r\n      width: 412px;\r\n      height: 412px;\r\n      \r\n      padding-top: 4%;\r\n      animation: scaleIn 6s infinite cubic-bezier(.36, .11, .89, .32);\r\n      \r\n      \r\n      \r\n  }\r\n  \r\n  .innerCircle[_ngcontent-%COMP%]{\r\n      border-radius: 50%;\r\n      \r\n      width: 93%;\r\n      height: 93%;\r\n      background-color: #a3c2c2;\r\n      margin-left: 3.4%;\r\n      animation:none !important;\r\n      animation: scaleIn 3s infinite cubic-bezier(.36, .11, .89, .32);\r\n      \r\n  }\r\n  \r\n  .extCirc[_ngcontent-%COMP%]\r\n  {\r\n      border-radius: 50%;\r\n      \r\n      width: 20%;\r\n      height: 20%;\r\n      background-color: #1773B3;\r\n      margin-left: 3.4%;\r\n      z-index: 2;\r\n      margin-top: -92%;\r\n      margin-left: 76%;\r\n  }\r\n  \r\n  .photo[_ngcontent-%COMP%]{\r\n        border-radius: 50%;\r\n      padding: 28px 23px 29px 28px;\r\n      width: 326px;\r\n      height: 326px;\r\n      position: absolute;\r\n      margin-top: -27%;\r\n      margin-left: 1%;\r\n  }\r\n  \r\n  \r\n  \r\n  .topnav[_ngcontent-%COMP%] {\r\n    background-color: #397372;\r\n    width : -webkit-fit-content;\r\n    width : -moz-fit-content;\r\n    width : fit-content;\r\n    overflow: hidden;\r\n  }\r\n  \r\n  \r\n  \r\n  .topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    float: left;\r\n    color: #f2f2f2;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n    font-size: 17px;\r\n  }\r\n  \r\n  \r\n  \r\n  .topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background-color: #9FBEA7;\r\n    color: black;\r\n  }\r\n  \r\n  \r\n  \r\n  .activeNavBar[_ngcontent-%COMP%] {\r\n    background-color: #2EBBAC  !important;\r\n    color: white;\r\n  }\r\n  \r\n  .nameHeading[_ngcontent-%COMP%]{\r\n      color:#132639;\r\n      margin-left: 25%;\r\n  }\r\n  \r\n  \r\n  \r\n  .email[_ngcontent-%COMP%]{\r\n      margin : 1.5%;\r\n  }\r\n  \r\n  .contactDetails[_ngcontent-%COMP%]{\r\n          text-align : center;\r\n          margin-left :-20%;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO01BQ0UseUJBQXlCO01BQ3pCLFVBQVU7SUFDWjtJQUNBO01BQ0UsMEJBQTBCO01BQzFCLFlBQVk7SUFDZDtFQUNGOztFQUVBO0lBQ0UsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixxRUFBcUU7SUFDckUsYUFBYTtBQUNqQjs7RUFDRTtNQUNJLFdBQVc7TUFDWCwyQkFBMkI7TUFDM0IsV0FBVztVQUNQLGVBQWU7VUFDZjtFQUNSOztFQUNBO01BQ0ksV0FBVztNQUNYLDJCQUEyQjtNQUMzQixXQUFXO0VBQ2Y7O0VBQ0E7TUFDSSxrQkFBa0I7TUFDbEIseUJBQXlCO01BQ3pCLFlBQVk7TUFDWixhQUFhO01BQ2IsMEJBQTBCO01BQzFCLGVBQWU7TUFDZiwrREFBK0Q7Ozs7RUFJbkU7O0VBQ0E7TUFDSSxrQkFBa0I7TUFDbEIsMEJBQTBCO01BQzFCLFVBQVU7TUFDVixXQUFXO01BQ1gseUJBQXlCO01BQ3pCLGlCQUFpQjtNQUNqQix5QkFBeUI7TUFDekIsK0RBQStEOztFQUVuRTs7RUFDQTs7TUFFSSxrQkFBa0I7TUFDbEIsMEJBQTBCO01BQzFCLFVBQVU7TUFDVixXQUFXO01BQ1gseUJBQXlCO01BQ3pCLGlCQUFpQjtNQUNqQixVQUFVO01BQ1YsZ0JBQWdCO01BQ2hCLGdCQUFnQjtFQUNwQjs7RUFDQTtRQUNNLGtCQUFrQjtNQUNwQiw0QkFBNEI7TUFDNUIsWUFBWTtNQUNaLGFBQWE7TUFDYixrQkFBa0I7TUFDbEIsZ0JBQWdCO01BQ2hCLGVBQWU7RUFDbkI7O0VBQ0EsdURBQXVEOztFQUN2RDtJQUNFLHlCQUF5QjtJQUN6QiwyQkFBbUI7SUFBbkIsd0JBQW1CO0lBQW5CLG1CQUFtQjtJQUNuQixnQkFBZ0I7RUFDbEI7O0VBRUEsOENBQThDOztFQUM5QztJQUNFLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZUFBZTtFQUNqQjs7RUFFQSx1Q0FBdUM7O0VBQ3ZDO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7RUFDZDs7RUFFQSwyQ0FBMkM7O0VBQzNDO0lBQ0UscUNBQXFDO0lBQ3JDLFlBQVk7RUFDZDs7RUFDQTtNQUNJLGFBQWE7TUFDYixnQkFBZ0I7RUFDcEI7O0VBQ0E7OztJQUdFOztFQUNGO01BQ0ksYUFBYTtFQUNqQjs7RUFDQTtVQUNRLG1CQUFtQjtVQUNuQixpQkFBaUI7RUFDekIiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGtleWZyYW1lcyBzY2FsZUluIHtcclxuICAgIGZyb20ge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMCwxLjApO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSwgMS4xKTtcclxuICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAucGFyZW50RGl2e1xyXG4gICAgd2lkdGggOiAxMDAlO1xyXG4gICAgZGlzcGxheSA6IGlubGluZS1mbGV4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCB0byBib3R0b20gcmlnaHQsICNlNmU2ZTYsICNiM2ZmZmYpO1xyXG4gICAgaGVpZ2h0IDogMTAwJTtcclxufVxyXG4gIC5sZWZ0U2lkZURpdntcclxuICAgICAgd2lkdGggOiA0MCU7XHJcbiAgICAgIC8qYm9yZGVyIDoxcHggc29saWQgYmxhY2s7Ki9cclxuICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyJVxyXG4gIH1cclxuICAucmlnaHRTaWRlRGl2e1xyXG4gICAgICB3aWR0aCA6IDYwJTtcclxuICAgICAgLypib3JkZXIgOjFweCBzb2xpZCBibGFjazsqL1xyXG4gICAgICBoZWlnaHQ6MTAwJTtcclxuICB9XHJcbiAgLmNpcmN1bGFyUGljQm9yZGVye1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiM2QxZmY7XHJcbiAgICAgIHdpZHRoOiA0MTJweDtcclxuICAgICAgaGVpZ2h0OiA0MTJweDtcclxuICAgICAgLyogcGFkZGluZzogNiUgMiUgMCUgMiU7ICovXHJcbiAgICAgIHBhZGRpbmctdG9wOiA0JTtcclxuICAgICAgYW5pbWF0aW9uOiBzY2FsZUluIDZzIGluZmluaXRlIGN1YmljLWJlemllciguMzYsIC4xMSwgLjg5LCAuMzIpO1xyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgIFxyXG4gIH1cclxuICAuaW5uZXJDaXJjbGV7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgLyogcGFkZGluZzogMiUgMiUgMiUgMiU7ICovXHJcbiAgICAgIHdpZHRoOiA5MyU7XHJcbiAgICAgIGhlaWdodDogOTMlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTNjMmMyO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMy40JTtcclxuICAgICAgYW5pbWF0aW9uOm5vbmUgIWltcG9ydGFudDtcclxuICAgICAgYW5pbWF0aW9uOiBzY2FsZUluIDNzIGluZmluaXRlIGN1YmljLWJlemllciguMzYsIC4xMSwgLjg5LCAuMzIpO1xyXG4gICAgICBcclxuICB9XHJcbiAgLmV4dENpcmNcclxuICB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgLyogcGFkZGluZzogMiUgMiUgMiUgMiU7ICovXHJcbiAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgIGhlaWdodDogMjAlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTc3M0IzO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMy40JTtcclxuICAgICAgei1pbmRleDogMjtcclxuICAgICAgbWFyZ2luLXRvcDogLTkyJTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDc2JTtcclxuICB9XHJcbiAgLnBob3Rve1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgcGFkZGluZzogMjhweCAyM3B4IDI5cHggMjhweDtcclxuICAgICAgd2lkdGg6IDMyNnB4O1xyXG4gICAgICBoZWlnaHQ6IDMyNnB4O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIG1hcmdpbi10b3A6IC0yNyU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxJTtcclxuICB9XHJcbiAgLyogQWRkIGEgYmxhY2sgYmFja2dyb3VuZCBjb2xvciB0byB0aGUgdG9wIG5hdmlnYXRpb24gKi9cclxuICAudG9wbmF2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOTczNzI7XHJcbiAgICB3aWR0aCA6IGZpdC1jb250ZW50O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgXHJcbiAgLyogU3R5bGUgdGhlIGxpbmtzIGluc2lkZSB0aGUgbmF2aWdhdGlvbiBiYXIgKi9cclxuICAudG9wbmF2IGEge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBjb2xvcjogI2YyZjJmMjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICB9XHJcbiAgXHJcbiAgLyogQ2hhbmdlIHRoZSBjb2xvciBvZiBsaW5rcyBvbiBob3ZlciAqL1xyXG4gIC50b3BuYXYgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOUZCRUE3O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICBcclxuICAvKiBBZGQgYSBjb2xvciB0byB0aGUgYWN0aXZlL2N1cnJlbnQgbGluayAqL1xyXG4gIC5hY3RpdmVOYXZCYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJFQkJBQyAgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgLm5hbWVIZWFkaW5ne1xyXG4gICAgICBjb2xvcjojMTMyNjM5O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMjUlO1xyXG4gIH1cclxuICAvKi5lbWFpbEljb257XHJcbiAgICAgIG1hcmdpbi1sZWZ0IDogNSU7XHJcbiAgXHJcbiAgfSovXHJcbiAgLmVtYWlse1xyXG4gICAgICBtYXJnaW4gOiAxLjUlO1xyXG4gIH1cclxuICAuY29udGFjdERldGFpbHN7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduIDogY2VudGVyO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQgOi0yMCU7XHJcbiAgfSJdfQ== */"] });


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
const environment = {
    production: false
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

/***/ "F8Lx":
/*!****************************************************************!*\
  !*** ./src/app/technical-skills/technical-skills.component.ts ***!
  \****************************************************************/
/*! exports provided: TechnicalSkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnicalSkillsComponent", function() { return TechnicalSkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TechnicalSkillsComponent {
    constructor() { }
    ngOnInit() {
    }
}
TechnicalSkillsComponent.ɵfac = function TechnicalSkillsComponent_Factory(t) { return new (t || TechnicalSkillsComponent)(); };
TechnicalSkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TechnicalSkillsComponent, selectors: [["app-technical-skills"]], decls: 2, vars: 0, consts: [["id", "technicalSkills"]], template: function TechnicalSkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Angularjs, Angular 7 Java Machine Learning Basics HTML,CSS, JavaScript ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZWNobmljYWwtc2tpbGxzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "KlwU":
/*!********************************************************!*\
  !*** ./src/app/image-module/image-module.component.ts ***!
  \********************************************************/
/*! exports provided: ImageModuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageModuleComponent", function() { return ImageModuleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ImageModuleComponent {
    constructor() { }
    ngOnInit() {
    }
}
ImageModuleComponent.ɵfac = function ImageModuleComponent_Factory(t) { return new (t || ImageModuleComponent)(); };
ImageModuleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImageModuleComponent, selectors: [["app-image-module"]], decls: 2, vars: 0, template: function ImageModuleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "image-module works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbWFnZS1tb2R1bGUuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "9vUh");



class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'Aiswarya Resume';
    }
    ngOnInit() {
        this.router.navigateByUrl["/home"];
    }
    tabSwitch(a, b) {
        console.log("I do something useful!");
        if (b == 'technicalSkills') {
            this.router.navigateByUrl('/educationInfo');
        }
        else {
            this.router.navigateByUrl('/personalInfo');
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-home");
    } }, directives: [_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]], styles: ["@keyframes scaleIn {\r\n    from {\r\n      transform: scale(1.0,1.0);\r\n      opacity: 1;\r\n    }\r\n    to {\r\n      transform: scale(1.1, 1.1);\r\n      opacity: 0.5;\r\n    }\r\n  }\r\n\r\n\r\n  .parentDiv[_ngcontent-%COMP%]{\r\n    width : 100%;\r\n    display : inline-flex;\r\n    background-image: linear-gradient( to bottom right, #e6e6e6, #b3ffff);\r\n    height : 100%;\r\n}\r\n\r\n\r\n  .leftSideDiv[_ngcontent-%COMP%]{\r\n      width : 40%;\r\n      \r\n      height:100%;\r\n          margin-left: 2%;\r\n          margin-top: 2%\r\n  }\r\n\r\n\r\n  .rightSideDiv[_ngcontent-%COMP%]{\r\n      width : 60%;\r\n      \r\n      height:100%;\r\n  }\r\n\r\n\r\n  .circularPicBorder[_ngcontent-%COMP%]{\r\n      border-radius: 50%;\r\n      background-color: #b3d1ff;\r\n      width: 412px;\r\n      height: 412px;\r\n      \r\n      padding-top: 4%;\r\n      animation: scaleIn 6s infinite cubic-bezier(.36, .11, .89, .32);\r\n      \r\n      \r\n      \r\n  }\r\n\r\n\r\n  .innerCircle[_ngcontent-%COMP%]{\r\n      border-radius: 50%;\r\n      \r\n      width: 93%;\r\n      height: 93%;\r\n      background-color: #a3c2c2;\r\n      margin-left: 3.4%;\r\n      animation:none !important;\r\n      animation: scaleIn 3s infinite cubic-bezier(.36, .11, .89, .32);\r\n      \r\n  }\r\n\r\n\r\n  .extCirc[_ngcontent-%COMP%]\r\n  {\r\n      border-radius: 50%;\r\n      \r\n      width: 20%;\r\n      height: 20%;\r\n      background-color: #1773B3;\r\n      margin-left: 3.4%;\r\n      z-index: 2;\r\n      margin-top: -92%;\r\n      margin-left: 76%;\r\n  }\r\n\r\n\r\n  .photo[_ngcontent-%COMP%]{\r\n        border-radius: 50%;\r\n      padding: 28px 23px 29px 28px;\r\n      width: 326px;\r\n      height: 326px;\r\n      position: absolute;\r\n      margin-top: -27%;\r\n      margin-left: 1%;\r\n  }\r\n\r\n\r\n  \r\n\r\n\r\n  .topnav[_ngcontent-%COMP%] {\r\n    background-color: #397372;\r\n    width : -webkit-fit-content;\r\n    width : -moz-fit-content;\r\n    width : fit-content;\r\n    overflow: hidden;\r\n  }\r\n\r\n\r\n  \r\n\r\n\r\n  .topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    float: left;\r\n    color: #f2f2f2;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n    font-size: 17px;\r\n  }\r\n\r\n\r\n  \r\n\r\n\r\n  .topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background-color: #9FBEA7;\r\n    color: black;\r\n  }\r\n\r\n\r\n  \r\n\r\n\r\n  .activeNavBar[_ngcontent-%COMP%] {\r\n    background-color: #2EBBAC  !important;\r\n    color: white;\r\n  }\r\n\r\n\r\n  .nameHeading[_ngcontent-%COMP%]{\r\n      color:#132639;\r\n      margin-left: 25%;\r\n  }\r\n\r\n\r\n  \r\n\r\n\r\n  .email[_ngcontent-%COMP%]{\r\n      margin : 1.5%;\r\n  }\r\n\r\n\r\n  .contactDetails[_ngcontent-%COMP%]{\r\n          text-align : center;\r\n          margin-left :-20%;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7TUFDRSx5QkFBeUI7TUFDekIsVUFBVTtJQUNaO0lBQ0E7TUFDRSwwQkFBMEI7TUFDMUIsWUFBWTtJQUNkO0VBQ0Y7OztFQUdBO0lBQ0UsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixxRUFBcUU7SUFDckUsYUFBYTtBQUNqQjs7O0VBQ0U7TUFDSSxXQUFXO01BQ1gsMkJBQTJCO01BQzNCLFdBQVc7VUFDUCxlQUFlO1VBQ2Y7RUFDUjs7O0VBQ0E7TUFDSSxXQUFXO01BQ1gsMkJBQTJCO01BQzNCLFdBQVc7RUFDZjs7O0VBQ0E7TUFDSSxrQkFBa0I7TUFDbEIseUJBQXlCO01BQ3pCLFlBQVk7TUFDWixhQUFhO01BQ2IsMEJBQTBCO01BQzFCLGVBQWU7TUFDZiwrREFBK0Q7Ozs7RUFJbkU7OztFQUNBO01BQ0ksa0JBQWtCO01BQ2xCLDBCQUEwQjtNQUMxQixVQUFVO01BQ1YsV0FBVztNQUNYLHlCQUF5QjtNQUN6QixpQkFBaUI7TUFDakIseUJBQXlCO01BQ3pCLCtEQUErRDs7RUFFbkU7OztFQUNBOztNQUVJLGtCQUFrQjtNQUNsQiwwQkFBMEI7TUFDMUIsVUFBVTtNQUNWLFdBQVc7TUFDWCx5QkFBeUI7TUFDekIsaUJBQWlCO01BQ2pCLFVBQVU7TUFDVixnQkFBZ0I7TUFDaEIsZ0JBQWdCO0VBQ3BCOzs7RUFDQTtRQUNNLGtCQUFrQjtNQUNwQiw0QkFBNEI7TUFDNUIsWUFBWTtNQUNaLGFBQWE7TUFDYixrQkFBa0I7TUFDbEIsZ0JBQWdCO01BQ2hCLGVBQWU7RUFDbkI7OztFQUNBLHVEQUF1RDs7O0VBQ3ZEO0lBQ0UseUJBQXlCO0lBQ3pCLDJCQUFtQjtJQUFuQix3QkFBbUI7SUFBbkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtFQUNsQjs7O0VBRUEsOENBQThDOzs7RUFDOUM7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGVBQWU7RUFDakI7OztFQUVBLHVDQUF1Qzs7O0VBQ3ZDO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7RUFDZDs7O0VBRUEsMkNBQTJDOzs7RUFDM0M7SUFDRSxxQ0FBcUM7SUFDckMsWUFBWTtFQUNkOzs7RUFDQTtNQUNJLGFBQWE7TUFDYixnQkFBZ0I7RUFDcEI7OztFQUNBOzs7SUFHRTs7O0VBQ0Y7TUFDSSxhQUFhO0VBQ2pCOzs7RUFDQTtVQUNRLG1CQUFtQjtVQUNuQixpQkFBaUI7RUFDekIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAa2V5ZnJhbWVzIHNjYWxlSW4ge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wLDEuMCk7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xLCAxLjEpO1xyXG4gICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLnBhcmVudERpdntcclxuICAgIHdpZHRoIDogMTAwJTtcclxuICAgIGRpc3BsYXkgOiBpbmxpbmUtZmxleDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCggdG8gYm90dG9tIHJpZ2h0LCAjZTZlNmU2LCAjYjNmZmZmKTtcclxuICAgIGhlaWdodCA6IDEwMCU7XHJcbn1cclxuICAubGVmdFNpZGVEaXZ7XHJcbiAgICAgIHdpZHRoIDogNDAlO1xyXG4gICAgICAvKmJvcmRlciA6MXB4IHNvbGlkIGJsYWNrOyovXHJcbiAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMiVcclxuICB9XHJcbiAgLnJpZ2h0U2lkZURpdntcclxuICAgICAgd2lkdGggOiA2MCU7XHJcbiAgICAgIC8qYm9yZGVyIDoxcHggc29saWQgYmxhY2s7Ki9cclxuICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgfVxyXG4gIC5jaXJjdWxhclBpY0JvcmRlcntcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjNkMWZmO1xyXG4gICAgICB3aWR0aDogNDEycHg7XHJcbiAgICAgIGhlaWdodDogNDEycHg7XHJcbiAgICAgIC8qIHBhZGRpbmc6IDYlIDIlIDAlIDIlOyAqL1xyXG4gICAgICBwYWRkaW5nLXRvcDogNCU7XHJcbiAgICAgIGFuaW1hdGlvbjogc2NhbGVJbiA2cyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoLjM2LCAuMTEsIC44OSwgLjMyKTtcclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICBcclxuICB9XHJcbiAgLmlubmVyQ2lyY2xle1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIC8qIHBhZGRpbmc6IDIlIDIlIDIlIDIlOyAqL1xyXG4gICAgICB3aWR0aDogOTMlO1xyXG4gICAgICBoZWlnaHQ6IDkzJTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2EzYzJjMjtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDMuNCU7XHJcbiAgICAgIGFuaW1hdGlvbjpub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgIGFuaW1hdGlvbjogc2NhbGVJbiAzcyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoLjM2LCAuMTEsIC44OSwgLjMyKTtcclxuICAgICAgXHJcbiAgfVxyXG4gIC5leHRDaXJjXHJcbiAge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIC8qIHBhZGRpbmc6IDIlIDIlIDIlIDIlOyAqL1xyXG4gICAgICB3aWR0aDogMjAlO1xyXG4gICAgICBoZWlnaHQ6IDIwJTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE3NzNCMztcclxuICAgICAgbWFyZ2luLWxlZnQ6IDMuNCU7XHJcbiAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgIG1hcmdpbi10b3A6IC05MiU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA3NiU7XHJcbiAgfVxyXG4gIC5waG90b3tcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIHBhZGRpbmc6IDI4cHggMjNweCAyOXB4IDI4cHg7XHJcbiAgICAgIHdpZHRoOiAzMjZweDtcclxuICAgICAgaGVpZ2h0OiAzMjZweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBtYXJnaW4tdG9wOiAtMjclO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMSU7XHJcbiAgfVxyXG4gIC8qIEFkZCBhIGJsYWNrIGJhY2tncm91bmQgY29sb3IgdG8gdGhlIHRvcCBuYXZpZ2F0aW9uICovXHJcbiAgLnRvcG5hdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk3MzcyO1xyXG4gICAgd2lkdGggOiBmaXQtY29udGVudDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFN0eWxlIHRoZSBsaW5rcyBpbnNpZGUgdGhlIG5hdmlnYXRpb24gYmFyICovXHJcbiAgLnRvcG5hdiBhIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgY29sb3I6ICNmMmYyZjI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIENoYW5nZSB0aGUgY29sb3Igb2YgbGlua3Mgb24gaG92ZXIgKi9cclxuICAudG9wbmF2IGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzlGQkVBNztcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgLyogQWRkIGEgY29sb3IgdG8gdGhlIGFjdGl2ZS9jdXJyZW50IGxpbmsgKi9cclxuICAuYWN0aXZlTmF2QmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRUJCQUMgICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5uYW1lSGVhZGluZ3tcclxuICAgICAgY29sb3I6IzEzMjYzOTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDI1JTtcclxuICB9XHJcbiAgLyouZW1haWxJY29ue1xyXG4gICAgICBtYXJnaW4tbGVmdCA6IDUlO1xyXG4gIFxyXG4gIH0qL1xyXG4gIC5lbWFpbHtcclxuICAgICAgbWFyZ2luIDogMS41JTtcclxuICB9XHJcbiAgLmNvbnRhY3REZXRhaWxze1xyXG4gICAgICAgICAgdGV4dC1hbGlnbiA6IGNlbnRlcjtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0IDotMjAlO1xyXG4gIH0iXX0= */"] });


/***/ }),

/***/ "VBxf":
/*!**********************************************************!*\
  !*** ./src/app/personal-info/personal-info.component.ts ***!
  \**********************************************************/
/*! exports provided: PersonalInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalInfoComponent", function() { return PersonalInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class PersonalInfoComponent {
    constructor() { }
    ngOnInit() {
    }
}
PersonalInfoComponent.ɵfac = function PersonalInfoComponent_Factory(t) { return new (t || PersonalInfoComponent)(); };
PersonalInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PersonalInfoComponent, selectors: [["app-personal-info"]], decls: 38, vars: 0, consts: [[1, "personalParent"], [1, "personalRows"], ["href", "https://www.linkedin.com/in/aiswarya-v-i-898708106"]], template: function PersonalInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "AISWARYA V I");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Attukadavu House, Moonnukallinmoodu, Neyyattinkara P.O");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "LinkedIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "AISWARYA V I");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Date of Birth &nbsp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "15-01-1995");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Hobbies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Fabric painting, craft making, drawing, paintings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".personalParent[_ngcontent-%COMP%]{\r\n    margin-top: 25px;\r\n}\r\n.personalRows[_ngcontent-%COMP%]{\r\n    height:25px;\r\n    padding:2.5px\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcnNvbmFsLWluZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksV0FBVztJQUNYO0FBQ0oiLCJmaWxlIjoicGVyc29uYWwtaW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBlcnNvbmFsUGFyZW50e1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG4ucGVyc29uYWxSb3dze1xyXG4gICAgaGVpZ2h0OjI1cHg7XHJcbiAgICBwYWRkaW5nOjIuNXB4XHJcbn0iXX0= */"] });


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./personal-info/personal-info.component */ "VBxf");
/* harmony import */ var _technical_skills_technical_skills_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./technical-skills/technical-skills.component */ "F8Lx");
/* harmony import */ var _educatiom_educatiom_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./educatiom/educatiom.component */ "9QmI");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./experience/experience.component */ "1fes");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./projects/projects.component */ "zUkc");
/* harmony import */ var _image_module_image_module_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./image-module/image-module.component */ "KlwU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");













class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot([
                { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
                { path: 'personalInfo', component: _personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_4__["PersonalInfoComponent"] },
                { path: 'technicalInfo', component: _technical_skills_technical_skills_component__WEBPACK_IMPORTED_MODULE_5__["TechnicalSkillsComponent"] },
                { path: 'educationInfo', component: _educatiom_educatiom_component__WEBPACK_IMPORTED_MODULE_6__["EducatiomComponent"] }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_4__["PersonalInfoComponent"],
        _technical_skills_technical_skills_component__WEBPACK_IMPORTED_MODULE_5__["TechnicalSkillsComponent"],
        _educatiom_educatiom_component__WEBPACK_IMPORTED_MODULE_6__["EducatiomComponent"],
        _experience_experience_component__WEBPACK_IMPORTED_MODULE_7__["ExperienceComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
        _projects_projects_component__WEBPACK_IMPORTED_MODULE_9__["ProjectsComponent"],
        _image_module_image_module_component__WEBPACK_IMPORTED_MODULE_10__["ImageModuleComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


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
/* harmony import */ var _personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./personal-info/personal-info.component */ "VBxf");
/* harmony import */ var _technical_skills_technical_skills_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./technical-skills/technical-skills.component */ "F8Lx");
/* harmony import */ var _educatiom_educatiom_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./educatiom/educatiom.component */ "9QmI");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./experience/experience.component */ "1fes");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const routes = [{ path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'personalInfo', component: _personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_1__["PersonalInfoComponent"] },
    { path: 'technicalInfo', component: _technical_skills_technical_skills_component__WEBPACK_IMPORTED_MODULE_2__["TechnicalSkillsComponent"] },
    { path: 'educationInfo', component: _educatiom_educatiom_component__WEBPACK_IMPORTED_MODULE_3__["EducatiomComponent"] },
    { path: 'experience', component: _experience_experience_component__WEBPACK_IMPORTED_MODULE_5__["ExperienceComponent"] },];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUkc":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ProjectsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], decls: 2, vars: 0, template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "projects works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy5jb21wb25lbnQuY3NzIn0= */"] });


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