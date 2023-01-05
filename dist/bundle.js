/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/App.jsx":
/*!*****************************!*\
  !*** ./src/scripts/App.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _components_Header_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Header.jsx */ \"./src/scripts/components/Header.jsx\");\n/* harmony import */ var _components_Sidebar_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Sidebar.jsx */ \"./src/scripts/components/Sidebar.jsx\");\n/* harmony import */ var _components_Content_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Content.jsx */ \"./src/scripts/components/Content.jsx\");\n/* harmony import */ var _pages_HistoryPage_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/HistoryPage.jsx */ \"./src/scripts/pages/HistoryPage.jsx\");\n\n\n\n\nfunction App({\n  theme,\n  scale\n}) {\n  return /*#__PURE__*/React.createElement(\"div\", {\n    id: \"app\",\n    theme: theme,\n    scale: scale\n  }, /*#__PURE__*/React.createElement(_components_Header_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null), /*#__PURE__*/React.createElement(_components_Sidebar_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), /*#__PURE__*/React.createElement(ReactRouterDOM.Routes, null, /*#__PURE__*/React.createElement(ReactRouterDOM.Route, {\n    path: \"/\",\n    element: /*#__PURE__*/React.createElement(_components_Content_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)\n  }), /*#__PURE__*/React.createElement(ReactRouterDOM.Route, {\n    path: \":companyId\",\n    element: /*#__PURE__*/React.createElement(_components_Content_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)\n  }, /*#__PURE__*/React.createElement(ReactRouterDOM.Route, {\n    path: \"history\",\n    element: /*#__PURE__*/React.createElement(_pages_HistoryPage_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)\n  }))));\n}\n\n//# sourceURL=webpack://course-information-website/./src/scripts/App.jsx?");

/***/ }),

/***/ "./src/scripts/components/Content.jsx":
/*!********************************************!*\
  !*** ./src/scripts/components/Content.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Content)\n/* harmony export */ });\n/* harmony import */ var _views_DeckView_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/DeckView.jsx */ \"./src/scripts/views/DeckView.jsx\");\n\nfunction Content() {\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"content-wrapper\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"content-section\"\n  }, /*#__PURE__*/React.createElement(ReactRouterDOM.Outlet, null)));\n}\n\n//# sourceURL=webpack://course-information-website/./src/scripts/components/Content.jsx?");

/***/ }),

/***/ "./src/scripts/components/Header.jsx":
/*!*******************************************!*\
  !*** ./src/scripts/components/Header.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Header)\n/* harmony export */ });\nfunction Header() {\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"header-wrapper\"\n  }, /*#__PURE__*/React.createElement(\"span\", null, \"ASTERISK\"));\n}\n\n//# sourceURL=webpack://course-information-website/./src/scripts/components/Header.jsx?");

/***/ }),

/***/ "./src/scripts/components/Sidebar.jsx":
/*!********************************************!*\
  !*** ./src/scripts/components/Sidebar.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Sidebar)\n/* harmony export */ });\n/* harmony import */ var _views_Treeview_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/Treeview.jsx */ \"./src/scripts/views/Treeview.jsx\");\n\nfunction Sidebar() {\n  const [isExpanded, setIsExpanded] = React.useState(true);\n  const [companies, setCompanies] = React.useState([]);\n  React.useEffect(() => {\n    const fetchCompanies = async () => {\n      const companyData = await eel.select_company()();\n      const newCompanies = [];\n      companyData.forEach(company => {\n        newCompanies.push({\n          title: `${company.name} (${company.company_id})`,\n          url: `${company.company_id}`,\n          children: [{\n            title: \"歷史股價\",\n            url: `${company.company_id}/history`\n          }]\n        });\n      });\n      setCompanies(newCompanies);\n    };\n    fetchCompanies();\n  }, []);\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: `sidebar-wrapper ${isExpanded ? \"expanded\" : \"collapsed\"}`\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"sidebar-backdrop\",\n    onClick: () => {\n      if (isExpanded) setIsExpanded(!isExpanded);\n    }\n  }), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"sidebar-toggler\",\n    onClick: () => setIsExpanded(!isExpanded)\n  }, /*#__PURE__*/React.createElement(\"i\", {\n    className: \"fa-solid fa-bars\"\n  })), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"sidebar-header\"\n  }, /*#__PURE__*/React.createElement(\"span\", null, \"\\u61C9\\u7528\\u529F\\u80FD\")), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"sidebar-list\"\n  }, companies.length !== 0 && /*#__PURE__*/React.createElement(_views_Treeview_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    tree: companies\n  })));\n}\n\n//# sourceURL=webpack://course-information-website/./src/scripts/components/Sidebar.jsx?");

/***/ }),

/***/ "./src/scripts/main.jsx":
/*!******************************!*\
  !*** ./src/scripts/main.jsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.jsx */ \"./src/scripts/App.jsx\");\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/main.scss */ \"./src/styles/main.scss\");\n\n\nconst root = ReactDOM.createRoot(document.getElementById(\"root\"));\nroot.render(\n/*#__PURE__*/\n// <React.StrictMode>\nReact.createElement(ReactRouterDOM.MemoryRouter, null, /*#__PURE__*/React.createElement(_App_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n  theme: \"claret\",\n  scale: \"md\"\n}))\n// </React.StrictMode>\n);\n\n//# sourceURL=webpack://course-information-website/./src/scripts/main.jsx?");

/***/ }),

/***/ "./src/scripts/pages/HistoryPage.jsx":
/*!*******************************************!*\
  !*** ./src/scripts/pages/HistoryPage.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HistoryInfo)\n/* harmony export */ });\n/* harmony import */ var _widgets_NewsReport_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../widgets/NewsReport.jsx */ \"./src/scripts/widgets/NewsReport.jsx\");\n\nfunction HistoryInfo() {\n  const {\n    companyId\n  } = ReactRouterDOM.useParams();\n  const [dateRange, setDateRange] = React.useState([\"2020-01-01\", \"2020-01-31\"]);\n  const [companies, setCompanies] = React.useState([]);\n  const [prices, setPrices] = React.useState([]);\n  const [news, setNews] = React.useState([]);\n  const [chart, setChart] = React.useState(null);\n  const [predicted, setPredicted] = React.useState([]);\n  const [canPredict, setCanPredict] = React.useState(true);\n  const maxNewsLength = 20;\n  let index = 0;\n  React.useEffect(() => {\n    const fetchCompanies = async () => {\n      const companyData = await eel.select_company()();\n      setCompanies(companyData);\n    };\n    fetchCompanies();\n  }, [companyId]);\n  React.useEffect(() => {\n    const fetchData = async () => {\n      const newStart = new Date(dateRange[0]);\n      newStart.setDate(newStart.getDate() - 15);\n      const priceData = await eel.select_price_within(companyId, [newStart.toISOString().split(\"T\")[0], dateRange[1]])();\n      const newsData = await eel.select_news_within(companyId, dateRange)();\n      priceData.sort((p1, p2) => new Date(p1.date) < new Date(p2.date));\n      newsData.sort((n1, n2) => new Date(n1.date) < new Date(n2.date));\n      setPrices(priceData);\n      setNews(newsData);\n    };\n    fetchData();\n  }, [companyId, dateRange]);\n  React.useEffect(() => {\n    if (!prices.length) return;\n    if (chart) chart.destroy();\n    const labels = [];\n    const startDate = new Date(dateRange[0]);\n    const endDate = new Date(dateRange[1]);\n    const period = (endDate - startDate) / 1000 / 60 / 60 / 24 + 1;\n    const graphPrices = [];\n    const begin = prices.indexOf(prices.find(p => new Date(p.date) > startDate)) - 1;\n    let index = 0;\n    console.log(prices);\n    // console.log(prices[begin].date, begin);\n    for (let day = 0; day < period; day++) {\n      const newDate = new Date(startDate);\n      newDate.setDate(startDate.getDate() + day);\n      const dateString = newDate.toISOString().split(\"T\")[0];\n      labels.push(dateString);\n      while (new Date(dateString) > new Date(prices[begin + index].date)) {\n        if (begin + index >= prices.length - 1) break;\n        index++;\n      }\n      if (new Date(dateString) < new Date(prices[begin + index].date)) index--;\n      // console.log(dateString, prices[begin + index].date, prices[begin + index].price);\n      if (prices[begin + index].date !== dateString) {\n        if (graphPrices.length) graphPrices.push(graphPrices.at(-1));else graphPrices.push(prices[begin].price);\n      } else graphPrices.push(prices[begin + index].price);\n    }\n    // console.log(graphPrices);\n    const ctx = document.getElementById(\"price-graph\");\n    const datasets = [{\n      label: \"實際收盤價\",\n      data: graphPrices,\n      fill: false,\n      borderJoinStyle: \"round\",\n      pointHitRadius: 5,\n      pointHoverRadius: 8\n    }];\n    // console.log(predicted);\n    if (predicted.length !== 0) datasets.push({\n      label: \"預測收盤價\",\n      data: predicted,\n      fill: false,\n      borderJoinStyle: \"round\",\n      pointHitRadius: 5,\n      pointHoverRadius: 8\n    });\n    const cht = new Chart(ctx, {\n      type: \"line\",\n      data: {\n        labels: labels,\n        datasets: datasets\n      }\n    });\n    setChart(cht);\n  }, [prices, predicted]);\n  const predictPrices = async () => {\n    if (!canPredict) return;\n    setCanPredict(false);\n    const results = await eel.model_predict(companyId, dateRange)();\n    setPredicted(results);\n    setCanPredict(true);\n  };\n  const changeDateRange = days => {\n    const start = new Date();\n    const end = new Date();\n    start.setDate(start.getDate() - days);\n    setDateRange([start.toISOString().split(\"T\")[0], end.toISOString().split(\"T\")[0]]);\n  };\n  const updateData = days => {\n    const update = async () => await eel.crawl_data(companyId)();\n    update();\n  };\n  const uniqueness = (value, index, self) => self.indexOf(self.find(record => record.title === value.title)) === index;\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"history-info-wrapper\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    style: {\n      display: \"flex\",\n      flexDirection: \"column\",\n      flex: 1\n    }\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"history-info-title\"\n  }, /*#__PURE__*/React.createElement(\"h1\", null, companies.length !== 0 && `${companies.find(company => company.company_id === companyId).name} (${companyId})`)), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"predict-button\",\n    onClick: () => predictPrices()\n  }, canPredict ? /*#__PURE__*/React.createElement(\"span\", null, \"\\u9810\\u6E2C\") : /*#__PURE__*/React.createElement(\"i\", {\n    className: \"fa-solid fa-ban\"\n  })), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"history-info-content\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    style: {\n      maxWidth: \"600px\",\n      maxHeight: \"400px\"\n    }\n  }, /*#__PURE__*/React.createElement(\"canvas\", {\n    id: \"price-graph\",\n    width: \"600px\",\n    height: \"400px\"\n  })), prices.length !== 0 && /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(\"button\", {\n    onClick: () => changeDateRange(7)\n  }, \"\\u6700\\u8FD1\\u4E00\\u9031\"), /*#__PURE__*/React.createElement(\"button\", {\n    onClick: () => changeDateRange(30)\n  }, \"\\u6700\\u8FD1\\u4E00\\u6708\"), /*#__PURE__*/React.createElement(\"button\", {\n    onClick: () => changeDateRange(365)\n  }, \"\\u6700\\u8FD1\\u4E00\\u5E74\"), /*#__PURE__*/React.createElement(\"button\", {\n    onClick: () => updateData()\n  }, \"\\u66F4\\u65B0\\u8CC7\\u6599\")))), /*#__PURE__*/React.createElement(\"div\", {\n    style: {\n      display: \"flex\",\n      width: \"var(--news-preview-width)\",\n      position: \"relative\"\n    }\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"history-info-news\"\n  }, news.filter(uniqueness).slice(0, maxNewsLength).map(record => /*#__PURE__*/React.createElement(_widgets_NewsReport_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    key: index++,\n    record: record\n  })))));\n}\n\n//# sourceURL=webpack://course-information-website/./src/scripts/pages/HistoryPage.jsx?");

/***/ }),

/***/ "./src/scripts/views/DeckView.jsx":
/*!****************************************!*\
  !*** ./src/scripts/views/DeckView.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DeckView)\n/* harmony export */ });\nfunction DeckView({\n  deck,\n  Widget\n}) {\n  let index = 0;\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"deckview-wrapper\"\n  }, deck.map(card => {\n    return /*#__PURE__*/React.createElement(DeckCard, {\n      key: index++,\n      card: card,\n      Widget: Widget\n    });\n  }));\n}\nfunction DeckCard({\n  card,\n  Widget\n}) {\n  let memoIndex = 0;\n  const [isFlipped, setIsFlipped] = React.useState(false);\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: `card-wrapper ${isFlipped ? \"flipped\" : \"\"}`,\n    onContextMenu: event => {\n      event.preventDefault();\n      setIsFlipped(!isFlipped);\n    }\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"card-interior\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"card-front\"\n  }, /*#__PURE__*/React.createElement(Widget, {\n    item: card\n  })), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"card-back\"\n  }, /*#__PURE__*/React.createElement(\"h3\", null, \"\\u5099\\u8A3B\"), /*#__PURE__*/React.createElement(\"ol\", null, card.memos.map(memo => {\n    return /*#__PURE__*/React.createElement(\"li\", {\n      key: memoIndex++\n    }, memo);\n  })))));\n}\n\n//# sourceURL=webpack://course-information-website/./src/scripts/views/DeckView.jsx?");

/***/ }),

/***/ "./src/scripts/views/Treeview.jsx":
/*!****************************************!*\
  !*** ./src/scripts/views/Treeview.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TreeView)\n/* harmony export */ });\nfunction TreeView({\n  tree\n}) {\n  let index = 0;\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"treeview-wrapper\"\n  }, /*#__PURE__*/React.createElement(\"ul\", {\n    style: {\n      overflow: \"auto\"\n    }\n  }, tree.length !== 0 && tree.map(child => {\n    return /*#__PURE__*/React.createElement(TreeNode, {\n      key: index++,\n      node: child\n    });\n  })));\n}\nfunction TreeNode({\n  node\n}) {\n  const [isExpanded, setIsExpanded] = React.useState(false);\n  const hasChild = node.children && node.children.length !== 0;\n  let index = 0;\n  return /*#__PURE__*/React.createElement(\"li\", {\n    className: `node-wrapper ${isExpanded ? \"expanded\" : \"collapsed\"}`,\n    style: {\n      height: `calc(${isExpanded && hasChild ? node.children.length + 1 : 1} * var(--list-item-height))`\n    }\n  }, /*#__PURE__*/React.createElement(ReactRouterDOM.Link, {\n    to: node.url ? node.url : \"\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: `node-title ${hasChild ? \"has-child\" : \"no-child\"}`,\n    onClick: () => setIsExpanded(!isExpanded)\n  }, hasChild && (isExpanded ? /*#__PURE__*/React.createElement(\"i\", {\n    className: \"fa-sharp fa-solid fa-caret-down\"\n  }) : /*#__PURE__*/React.createElement(\"i\", {\n    className: \"fa-solid fa-caret-right\"\n  })), /*#__PURE__*/React.createElement(\"span\", null, node.title))), hasChild && /*#__PURE__*/React.createElement(\"ul\", null, node.children.map(child => {\n    return /*#__PURE__*/React.createElement(TreeNode, {\n      key: index++,\n      node: child\n    });\n  })));\n}\n\n//# sourceURL=webpack://course-information-website/./src/scripts/views/Treeview.jsx?");

/***/ }),

/***/ "./src/scripts/widgets/NewsReport.jsx":
/*!********************************************!*\
  !*** ./src/scripts/widgets/NewsReport.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NewsReport)\n/* harmony export */ });\nfunction NewsReport({\n  record\n}) {\n  const {\n    link,\n    title,\n    content,\n    date\n  } = record;\n  const maxContentLength = 100;\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"news-card-wrapper\",\n    style: {\n      display: \"flex\",\n      flexDirection: \"column\",\n      flexShrink: 0,\n      minHeight: \"var(--news-min-height)\"\n    }\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    style: {\n      minHeight: \"30px\"\n    }\n  }, /*#__PURE__*/React.createElement(\"h3\", {\n    style: {\n      fontFamily: \"NotoSansMono\"\n    }\n  }, /*#__PURE__*/React.createElement(\"a\", {\n    href: link,\n    rel: \"noopener noreferrer\",\n    target: \"_blank\",\n    style: {\n      color: \"slateblue\",\n      cursor: \"pointer\"\n    }\n  }, title))), /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(\"p\", {\n    style: {\n      fontFamily: \"NotoSansMono\",\n      fontSize: \"12px\"\n    }\n  }, content.slice(0, maxContentLength), \"\\u2026\\u2026\")), /*#__PURE__*/React.createElement(\"div\", {\n    style: {\n      height: \"30px\"\n    }\n  }, /*#__PURE__*/React.createElement(\"span\", {\n    style: {\n      fontFamily: \"NotoSansMono\",\n      fontSize: \"10px\"\n    }\n  }, date)));\n}\n\n//# sourceURL=webpack://course-information-website/./src/scripts/widgets/NewsReport.jsx?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/NotoSansMonoCJKtc-Regular.otf */ \"./src/assets/fonts/NotoSansMonoCJKtc-Regular.otf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n  font-family: \\\"NotoSansMono\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n.sidebar-wrapper .sidebar-toggler {\\n  font-weight: bold;\\n  font-size: var(--text-icon);\\n  transition: 0.3s;\\n  cursor: pointer;\\n  user-select: none;\\n}\\n\\n.history-info-wrapper .history-info-title {\\n  font-family: \\\"NotoSansMono\\\";\\n  font-weight: bold;\\n}\\n\\n.predict-button span, .deckview-wrapper .card-wrapper .card-interior .card-front h3, .deckview-wrapper .card-wrapper .card-interior .card-back h3, .sidebar-wrapper .sidebar-header, .header-wrapper span {\\n  font-family: \\\"NotoSansMono\\\";\\n  font-weight: bold;\\n  font-size: var(--text-title);\\n  transition: 0.3s;\\n  cursor: pointer;\\n}\\n\\n.deckview-wrapper .card-wrapper .card-interior .card-back, .treeview-wrapper li .node-title {\\n  font-family: \\\"NotoSansMono\\\";\\n  font-size: var(--text-normal);\\n}\\n\\n#app[theme=claret][scale=sm] {\\n  --color-0: black;\\n  --color-1: #78281F;\\n  --color-2: #B03A2E;\\n  --color-3: #E74C3C;\\n  --color-4: #EC7063;\\n  --color-5: #F5B7B1;\\n  --color-6: #FDEDEC;\\n  --color-7: white;\\n  --navrail-width: 40px;\\n  --sidebar-width: 240px;\\n  --news-preview-width: 240px;\\n  --card-max-width: 400px;\\n  --header-height: 40px;\\n  --list-item-height: 30px;\\n  --card-max-height: 300px;\\n  --sidebar-toggler-width: 40px;\\n  --sidebar-toggler-height: 30px;\\n  --list-toggler-width: 10px;\\n  --list-toggler-height: 10px;\\n  --logo-size: 40px;\\n  --text-icon: 24px;\\n  --text-title: 20px;\\n  --text-normal: 16px;\\n}\\n\\n#app[theme=claret][scale=md] {\\n  --color-0: black;\\n  --color-1: #78281F;\\n  --color-2: #B03A2E;\\n  --color-3: #E74C3C;\\n  --color-4: #EC7063;\\n  --color-5: #F5B7B1;\\n  --color-6: #FDEDEC;\\n  --color-7: white;\\n  --navrail-width: 60px;\\n  --sidebar-width: 300px;\\n  --news-preview-width: 300px;\\n  --card-max-width: 500px;\\n  --header-height: 60px;\\n  --list-item-height: 40px;\\n  --news-min-height: 150px;\\n  --card-max-height: 360px;\\n  --sidebar-toggler-width: 50px;\\n  --sidebar-toggler-height: 40px;\\n  --list-toggler-width: 15px;\\n  --list-toggler-height: 15px;\\n  --logo-size: 60px;\\n  --text-icon: 30px;\\n  --text-title: 24px;\\n  --text-normal: 18px;\\n}\\n\\n#app[theme=claret][scale=lg] {\\n  --color-0: black;\\n  --color-1: #78281F;\\n  --color-2: #B03A2E;\\n  --color-3: #E74C3C;\\n  --color-4: #EC7063;\\n  --color-5: #F5B7B1;\\n  --color-6: #FDEDEC;\\n  --color-7: white;\\n  --navrail-width: 80px;\\n  --sidebar-width: 360px;\\n  --news-preview-width: 360px;\\n  --card-max-width: 600px;\\n  --header-height: 80px;\\n  --list-item-height: 50px;\\n  --card-max-height: 420px;\\n  --sidebar-toggler-width: 60px;\\n  --sidebar-toggler-height: 50px;\\n  --list-toggler-width: 15px;\\n  --list-toggler-height: 15px;\\n  --logo-size: 80px;\\n  --text-icon: 36px;\\n  --text-title: 30px;\\n  --text-normal: 24px;\\n}\\n\\n.header-wrapper {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 100%;\\n  height: var(--header-height);\\n  position: fixed;\\n  background-color: var(--color-2);\\n  opacity: 0.8;\\n}\\n.header-wrapper span {\\n  color: var(--color-6);\\n  user-select: none;\\n}\\n.header-wrapper span:hover {\\n  color: var(--color-7);\\n}\\n\\n.sidebar-wrapper {\\n  display: flex;\\n  flex-direction: column;\\n  width: var(--sidebar-width);\\n  height: 100%;\\n  position: absolute;\\n  background-color: var(--color-2);\\n  transition: 0.3s;\\n  z-index: 10;\\n}\\n.sidebar-wrapper.expanded {\\n  left: 0;\\n}\\n.sidebar-wrapper.expanded .sidebar-backdrop {\\n  opacity: 1;\\n}\\n.sidebar-wrapper.collapsed {\\n  left: calc(-1 * var(--sidebar-width));\\n}\\n.sidebar-wrapper.collapsed .sidebar-backdrop {\\n  opacity: 0;\\n  pointer-events: none;\\n}\\n.sidebar-wrapper .sidebar-backdrop {\\n  width: 100%;\\n  height: 100%;\\n  position: fixed;\\n  right: 0;\\n  background-color: rgba(0, 0, 0, 0.5);\\n  transition: 0.3s;\\n  z-index: -1;\\n}\\n.sidebar-wrapper .sidebar-toggler {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: var(--sidebar-toggler-width);\\n  height: var(--sidebar-toggler-height);\\n  position: fixed;\\n  left: 10px;\\n  top: 10px;\\n  border: solid 3px var(--color-2);\\n  border-radius: 10px;\\n  background-color: var(--color-2);\\n  color: var(--color-6);\\n  z-index: 15;\\n}\\n.sidebar-wrapper .sidebar-toggler:hover {\\n  border: solid 3px var(--color-5);\\n  background-color: var(--color-1);\\n  color: var(--color-7);\\n}\\n.sidebar-wrapper .sidebar-header {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  min-height: var(--header-height);\\n  background-color: var(--color-3);\\n  border-bottom: solid 1px var(--color-0);\\n  color: var(--color-6);\\n  user-select: none;\\n}\\n.sidebar-wrapper .sidebar-header:hover {\\n  color: var(--color-7);\\n}\\n.sidebar-wrapper .sidebar-list {\\n  display: flex;\\n  flex: 1;\\n  background-color: var(--color-2);\\n  color: var(--color-6);\\n  overflow-y: auto;\\n}\\n\\n.content-wrapper {\\n  display: flex;\\n  flex-direction: row;\\n  width: 100%;\\n  height: calc(100% - var(--header-height));\\n  position: absolute;\\n  top: var(--header-height);\\n}\\n.content-wrapper .content-section {\\n  display: flex;\\n  flex-direction: column;\\n  flex: 1;\\n  overflow-x: hidden;\\n  overflow-y: auto;\\n}\\n\\n.treeview-wrapper {\\n  display: flex;\\n  flex: 1;\\n  width: 100%;\\n  overflow-y: auto;\\n}\\n.treeview-wrapper ul {\\n  display: flex;\\n  flex-direction: column;\\n  flex: 1;\\n  margin: 0;\\n  padding: 0;\\n  padding-left: 1em;\\n  overflow: hidden;\\n  list-style-type: none;\\n  transition: 0.3s;\\n}\\n.treeview-wrapper li {\\n  display: flex;\\n  flex-direction: column;\\n  transition: 0.2s;\\n}\\n.treeview-wrapper li .node-title {\\n  display: flex;\\n  align-items: center;\\n  height: var(--list-item-height);\\n  position: relative;\\n  font-weight: bold;\\n  cursor: pointer;\\n  user-select: none;\\n}\\n.treeview-wrapper li .node-title:hover {\\n  background-color: var(--color-3);\\n}\\n.treeview-wrapper li .node-title.no-child {\\n  padding-left: 0.5em;\\n}\\n.treeview-wrapper li .node-title i {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 20px;\\n  height: var(--list-item-height);\\n}\\n\\n.deckview-wrapper {\\n  display: flex;\\n  flex-direction: column;\\n  flex: 1;\\n  align-items: center;\\n  padding: 20px;\\n  position: relative;\\n}\\n.deckview-wrapper .card-wrapper {\\n  display: flex;\\n  padding: 10px;\\n  width: 100%;\\n  height: var(--card-max-height);\\n  max-width: var(--card-max-width);\\n  max-height: var(--card-max-height);\\n  perspective: 1000px;\\n}\\n.deckview-wrapper .card-wrapper.flipped .card-interior {\\n  transform: rotateX(180deg);\\n}\\n.deckview-wrapper .card-wrapper .card-interior {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  flex: 1;\\n  position: relative;\\n  background-color: var(--color-3);\\n  border-radius: 10px;\\n  transform-style: preserve-3d;\\n  transition: transform 0.5s;\\n  cursor: pointer;\\n}\\n.deckview-wrapper .card-wrapper .card-interior .card-front, .deckview-wrapper .card-wrapper .card-interior .card-back {\\n  display: flex;\\n  flex-direction: column;\\n  flex: 1;\\n  position: absolute;\\n  backface-visibility: hidden;\\n  -webkit-backface-visibility: hidden;\\n}\\n.deckview-wrapper .card-wrapper .card-interior .card-front h3, .deckview-wrapper .card-wrapper .card-interior .card-back h3 {\\n  color: var(--color-7);\\n}\\n.deckview-wrapper .card-wrapper .card-interior .card-back {\\n  color: var(--color-7);\\n  text-align: center;\\n  transform: rotateX(180deg);\\n}\\n.deckview-wrapper .card-wrapper .card-interior .card-back ol li {\\n  cursor: text;\\n}\\n\\n.history-info-wrapper {\\n  display: flex;\\n  flex-direction: row;\\n  flex: 1;\\n}\\n.history-info-wrapper .history-info-title {\\n  display: flex;\\n  justify-content: center;\\n  height: var(--header-height);\\n}\\n.history-info-wrapper .history-info-title h1 {\\n  margin: 0;\\n}\\n.history-info-wrapper .history-info-content {\\n  display: flex;\\n  flex-direction: column;\\n  flex: 1;\\n  padding: 30px;\\n  position: relative;\\n  overflow-y: auto;\\n}\\n.history-info-wrapper .history-info-content canvas {\\n  max-width: 800px;\\n  max-height: 600px;\\n}\\n.history-info-wrapper .history-info-news {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  flex: 1;\\n  padding: 10px;\\n  min-width: 100%;\\n  max-height: 100%;\\n  position: absolute;\\n  right: 0;\\n  border-left: solid 1px rgba(0, 0, 0, 0.1);\\n  overflow-y: auto;\\n}\\n\\n*, *::after, *::before {\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  margin: 0;\\n  padding: 0;\\n  width: 100vw;\\n  height: 100vh;\\n}\\n\\na {\\n  color: unset;\\n  text-decoration: none;\\n}\\n\\n::-webkit-scrollbar {\\n  width: 10px;\\n}\\n\\n::-webkit-scrollbar-track {\\n  background: transparent;\\n}\\n\\n::-webkit-scrollbar-thumb {\\n  background: var(--color-3);\\n  border: solid 1px var(--color-2);\\n  border-radius: 5px;\\n}\\n\\n::-webkit-scrollbar-thumb:hover {\\n  background: var(--color-4);\\n}\\n\\n#root, #app {\\n  width: 100%;\\n  height: 100%;\\n  position: absolute;\\n}\\n\\n.predict-button {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 80px;\\n  height: 80px;\\n  position: fixed;\\n  right: 30px;\\n  bottom: 30px;\\n  border: solid 5px var(--color-1);\\n  border-radius: 50%;\\n  background-color: var(--color-3);\\n  color: var(--color-6);\\n  cursor: pointer;\\n  z-index: 8;\\n}\\n.predict-button:hover {\\n  border: solid 5px var(--color-0);\\n  background-color: var(--color-2);\\n  color: var(--color-7);\\n}\\n.predict-button i {\\n  font-size: var(--text-icon);\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://course-information-website/./src/styles/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://course-information-website/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://course-information-website/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://course-information-website/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://course-information-website/./src/styles/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://course-information-website/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://course-information-website/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://course-information-website/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://course-information-website/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://course-information-website/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://course-information-website/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets/fonts/NotoSansMonoCJKtc-Regular.otf":
/*!********************************************************!*\
  !*** ./src/assets/fonts/NotoSansMonoCJKtc-Regular.otf ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2b837fc5268e7f189002.otf\";\n\n//# sourceURL=webpack://course-information-website/./src/assets/fonts/NotoSansMonoCJKtc-Regular.otf?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/main.jsx");
/******/ 	
/******/ })()
;