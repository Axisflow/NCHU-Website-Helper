// ==UserScript==
// @name         NCHU Portal Helper for Logging in
// @namespace    https://idp.nchu.edu.tw/
// @version      0.1.12
// @description  興大入口自動登入
// @homepage     https://github.com/Axisflow
// @author       Axisflow
// @match        https://idp.nchu.edu.tw/*
// @icon         https://www.nchu.edu.tw/favicon.ico
// @updateURL    https://axisflow.github.io/NCHU-Website-Helper/AllPortals-Login/apl.meta.js
// @downloadURL  https://axisflow.github.io/NCHU-Website-Helper/AllPortals-Login/apl.user.js
// @supportURL   https://github.com/Axisflow/NCHU-Website-Helper/issues
// @grant        unsafeWindow
// ==/UserScript==

(function () {
    'use strict';

    /* Main Program */

    if(window.location.pathname == "/nidp/idff/sso") {
        document.getElementsByTagName('input')[2].value = code;

        if(window.location.search.search("option=credential") != -1) {
            document.getElementsByTagName('button')[0].click();
        }
    }

})();
