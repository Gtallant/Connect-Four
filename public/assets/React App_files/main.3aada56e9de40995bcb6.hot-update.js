webpackHotUpdate("main",{

/***/ "./src/components/Game/Game.js":
/*!*************************************!*\
  !*** ./src/components/Game/Game.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Game_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game.scss */ "./src/components/Game/Game.scss");
/* harmony import */ var _Game_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Game_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Board */ "./src/components/Board/index.js");
var _jsxFileName = "/Users/meltalla/Documents/Projects/connect-four/src/components/Game/Game.js";




class Game extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    let playerColors;

    if (props.playerOneColor === 'red') {
      playerColors = ['red', 'black'];
    } else {
      playerColors = ['black', 'red'];
    }

    this.state = {
      currentPlayer: 0,
      playerColors: playerColors,
      gameData: [[null, null, null, null, null, null], [null, null, null, null, null, null], [null, null, null, null, null, null], [null, null, null, null, null, null], [null, null, null, null, null, null], [null, null, null, null, null, null], [null, null, null, null, null, null]]
    };
  }

  render() {
    const _this$state = this.state,
          currentPlayer = _this$state.currentPlayer,
          playerColors = _this$state.playerColors,
          gameData = _this$state.gameData;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "game",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "game__controls",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      className: "game__controls__current-player ".concat(playerColors[currentPlayer]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, "Player ", currentPlayer + 1), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "game__controls__label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, "place a token.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Board__WEBPACK_IMPORTED_MODULE_2__["default"], {
      gameData: gameData,
      playerColors: playerColors,
      currentPlayer: currentPlayer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ })

})
//# sourceMappingURL=main.3aada56e9de40995bcb6.hot-update.js.map