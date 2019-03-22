(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _IssueList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IssueList */ "./src/IssueList.jsx");



var contentNode = document.getElementById('contents'); // class IssueFilter extends React.Component {
//     render() {
//         return (
//             <div>This is a placeholder for the Issue Filter.</div>
//         )
//     }
// }
// class IssueRow extends React.Component {
//     render() {
//
//         const issue = this.props.issue;
//
//         return (
//             <tr>
//                 <td>{issue.id}</td>
//                 <td>{issue.status}</td>
//                 <td>{issue.owner}</td>
//                 <td>{issue.created.toDateString()}</td>
//                 <td>{issue.effort}</td>
//                 <td>{issue.completionDate ? issue.completionDate.toDateString() : ''}</td>
//                 <td>{issue.title}</td>
//             </tr>
//         );
//     }
// }
//
// class IssueTable extends React.Component {
//     render() {
//
//         const issueRows = this.props.issues.map(issue => <IssueRow key={issue.id} issue={issue} />);
//
//         return (
//             <table className="bordered-table">
//                 <thead>
//                     <tr>
//                         <th>Id</th>
//                         <th>Status</th>
//                         <th>Owner</th>
//                         <th>Created</th>
//                         <th>Effort</th>
//                         <th>Completion Date</th>
//                         <th>Title</th>
//                     </tr>
//                 </thead>
//                 <tbody>{issueRows}</tbody>
//             </table>
//         );
//     }
// }
// const issues = [
//     {
//         id: 1, status: 'Open', owner: 'Ravan',
//         created: new Date('2016-08-15'), effort: 5, completionDate: undefined,
//         title: 'Error in console when clicking Add',
//     },
//     {
//         id: 2, status: 'Assigned', owner: 'Eddie',
//         created: new Date('2016-08-16'), effort: 14, completionDate: new Date('2016-08-30'),
//         title: 'Missing bottom border on panel',
//     },
// ];
//
// class IssueAdd extends React.Component {
//     constructor () {
//         super();
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//
//     handleSubmit(e) {
//         e.preventDefault();
//         let form = document.forms.issueAdd;
//         this.props.createIssue({
//             owner: form.owner.value,
//             title: form.title.value,
//             status: 'New',
//             created: new Date(),
//         });
//         form.owner.value = '';
//         form.owner.focus();
//         form.title.value = '';
//     }
//
//     render() {
//         return (
//             <div>
//                 <form name="issueAdd" onSubmit={this.handleSubmit}>
//                     <input type="text" name="owner" placeholder="Owner" />
//                     <input type="text" name="title" placeholder="Title" />
//                     <button>Add</button>
//                 </form>
//             </div>
//         );
//     }
// }
// class IssueList extends React.Component {
//     constructor () {
//         super();
//         this.state = { issues: [] };
//         this.createIssue = this.createIssue.bind(this);
//     }
//
//     componentDidMount() {
//         this.loadData();
//     }
//
//     loadData() {
//         // setTimeout(() => {
//         //     this.setState({ issues: issues});
//         // }, 500);
//
//       fetch('/api/issues').then(response =>
//         response.json()
//       ).then(data => {
//         console.log('total count of records:', data._metadata.total_count);
//         data.records.forEach(issue => {
//           issue.created = new Date(issue.created);
//           if (issue.completionDate)
//             issue.completionDate = new Date(issue.completionDate);
//         });
//         this.setState({ issues: data.records });
//       }).catch(err => {
//         console.log(err);
//       });
//
//     }
//
//     createIssue(newIssue) {
//
//       fetch('/api/issues', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(newIssue),
//
//       }).then(response => {
//
//         if (response.ok) {
//           response.json().then(updatedIssue => {
//             updatedIssue.created = new Date(updatedIssue.created);
//             if (updatedIssue.completionDate)
//               updatedIssue.completionDate = new Date(updatedIssue.completionDate);
//             const newIssues = this.state.issues.concat(updatedIssue);
//             this.setState({issues: newIssues});
//             console.log('Isue is okay', newIssues);
//           });
//         } else {
//           response.json().then(error => {
//             console.log('Failed to add issue: ', error.message);
//           });
//         }
//       }).catch(err => {
//         console.log('Error in sending date to server: ', err.message);
//       });
//
//       // const newIssues = this.state.issues.slice();
//       // newIssue.id = this.state.issues.length + 1;
//       // newIssues.push(newIssue);
//       // this.setState({ issues: newIssues });
//     }
//
//     // createIssue(newIssue) {
//     //
//     //   fetch('/api/issues', {
//     //     method: 'POST',
//     //     headers: { 'Content-Type': 'application/json' },
//     //     body: JSON.stringify(newIssue),
//     //
//     //   }).then(response => {
//     //
//     //     if (response.ok) {
//     //       response.json().then(updatedIssue => {
//     //         updatedIssue.created = new Date(updatedIssue.created);
//     //         if (updatedIssue.completionDate)
//     //           updatedIssue.completionDate = new Date(updatedIssue.completionDate);
//     //         const newIssues = this.state.issues.concat(updatedIssue);
//     //         this.setState({ issues: newIssues });
//     //       });
//     //     } else {
//     //       response.json().then(error => {
//     //         alert("Failed to add issue: " + error.message)
//     //       });
//     //     }
//     //   }).catch(err => {
//     //     alert("Error in sending data to server: " + err.message);
//     //   });
//     // }
//
//     render() {
//         return (
//             <div>
//                 <h1>Issue Tracker</h1>
//                 <IssueFilter/>
//                 <hr/>
//                 <IssueTable issues={this.state.issues} />
//                 <hr/>
//                 <IssueAdd createIssue={this.createIssue}/>
//              </div>
//         );
//     }
// }

react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IssueList__WEBPACK_IMPORTED_MODULE_2__["default"], null), contentNode);

if (false) {}

/***/ }),

/***/ "./src/IssueAdd.jsx":
/*!**************************!*\
  !*** ./src/IssueAdd.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IssueAdd; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var IssueAdd =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IssueAdd, _React$Component);

  function IssueAdd() {
    var _this;

    _classCallCheck(this, IssueAdd);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(IssueAdd).call(this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(IssueAdd, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.issueAdd;
      this.props.createIssue({
        owner: form.owner.value,
        title: form.title.value,
        status: 'New',
        created: new Date()
      });
      form.owner.value = '';
      form.owner.focus();
      form.title.value = '';
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        name: "issueAdd",
        onSubmit: this.handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        name: "owner",
        placeholder: "Owner-test"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        name: "title",
        placeholder: "Title"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", null, "Add")));
    }
  }]);

  return IssueAdd;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./src/IssueFilter.jsx":
/*!*****************************!*\
  !*** ./src/IssueFilter.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IssueFilter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var IssueFilter =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IssueFilter, _React$Component);

  function IssueFilter() {
    _classCallCheck(this, IssueFilter);

    return _possibleConstructorReturn(this, _getPrototypeOf(IssueFilter).apply(this, arguments));
  }

  _createClass(IssueFilter, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "This is a placeholder for the Issue Filter. NEW TEXT!");
    }
  }]);

  return IssueFilter;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./src/IssueList.jsx":
/*!***************************!*\
  !*** ./src/IssueList.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IssueList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");
/* harmony import */ var _IssueAdd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IssueAdd */ "./src/IssueAdd.jsx");
/* harmony import */ var _IssueFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IssueFilter */ "./src/IssueFilter.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var IssueRow =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IssueRow, _React$Component);

  function IssueRow() {
    _classCallCheck(this, IssueRow);

    return _possibleConstructorReturn(this, _getPrototypeOf(IssueRow).apply(this, arguments));
  }

  _createClass(IssueRow, [{
    key: "render",
    value: function render() {
      var issue = this.props.issue;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, issue._id), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, issue.status), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, issue.owner), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, issue.created.toDateString()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, issue.effort), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, issue.completionDate ? issue.completionDate.toDateString() : ''), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, issue.title));
    }
  }]);

  return IssueRow;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var IssueTable =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(IssueTable, _React$Component2);

  function IssueTable() {
    _classCallCheck(this, IssueTable);

    return _possibleConstructorReturn(this, _getPrototypeOf(IssueTable).apply(this, arguments));
  }

  _createClass(IssueTable, [{
    key: "render",
    value: function render() {
      var issueRows = this.props.issues.map(function (issue) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IssueRow, {
          key: issue._id,
          issue: issue
        });
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        className: "bordered-table"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Id"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Status-brother"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Owner"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Created"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Effort"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Completion Date"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Title"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, issueRows));
    }
  }]);

  return IssueTable;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var IssueList =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(IssueList, _React$Component3);

  function IssueList() {
    var _this;

    _classCallCheck(this, IssueList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(IssueList).call(this));
    _this.state = {
      issues: []
    };
    _this.createIssue = _this.createIssue.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(IssueList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
      console.log('component did mount');
    }
  }, {
    key: "loadData",
    value: function loadData() {
      var _this2 = this;

      fetch('/api/issues').then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            console.log('Total count of records:', data._metadata.total_count);
            data.records.forEach(function (issue) {
              issue.created = new Date(issue.created);
              if (issue.completionDate) issue.completionDate = new Date(issue.completionDate);
            });

            _this2.setState({
              issues: data.records
            });
          });
        } else {
          response.json().then(function (error) {
            alert('Failed to fetch issues:' + error.message);
          });
        }
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: "createIssue",
    value: function createIssue(newIssue) {
      var _this3 = this;

      fetch('/api/issues', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newIssue)
      }).then(function (response) {
        if (response.ok) {
          response.json().then(function (updatedIssue) {
            updatedIssue.created = new Date(updatedIssue.created);
            if (updatedIssue.completionDate) updatedIssue.completionDate = new Date(updatedIssue.completionDate);

            var newIssues = _this3.state.issues.concat(updatedIssue);

            _this3.setState({
              issues: newIssues
            });

            console.log('Issue is okay', newIssues);
          });
        } else {
          response.json().then(function (error) {
            console.log('Failed to add issue: ', error.message);
          });
        }
      }).catch(function (err) {
        console.log('Error in sending date to server: ', err.message);
      }); // const newIssues = this.state.issues.slice();
      // newIssue.id = this.state.issues.length + 1;
      // newIssues.push(newIssue);
      // this.setState({ issues: newIssues });
    } // createIssue(newIssue) {
    //
    //   fetch('/api/issues', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(newIssue),
    //
    //   }).then(response => {
    //
    //     if (response.ok) {
    //       response.json().then(updatedIssue => {
    //         updatedIssue.created = new Date(updatedIssue.created);
    //         if (updatedIssue.completionDate)
    //           updatedIssue.completionDate = new Date(updatedIssue.completionDate);
    //         const newIssues = this.state.issues.concat(updatedIssue);
    //         this.setState({ issues: newIssues });
    //       });
    //     } else {
    //       response.json().then(error => {
    //         alert("Failed to add issue: " + error.message)
    //       });
    //     }
    //   }).catch(err => {
    //     alert("Error in sending data to server: " + err.message);
    //   });
    // }

  }, {
    key: "render",
    value: function render() {
      console.log('should see app');
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Issue Tracker"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IssueFilter__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IssueTable, {
        issues: this.state.issues
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IssueAdd__WEBPACK_IMPORTED_MODULE_2__["default"], {
        createIssue: this.createIssue
      }));
    }
  }]);

  return IssueList;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/App.jsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/App.jsx */"./src/App.jsx");


/***/ })

},[[0,"runtime~app","vendor"]]]);
//# sourceMappingURL=app.app.bundle.js.map