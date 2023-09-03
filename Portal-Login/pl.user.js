// ==UserScript==
// @name         NCHU Portal Helper for Loginning
// @namespace    https://idp.nchu.edu.tw/
// @version      0.1.8
// @description  興大入口自動登入
// @homepage     https://www.nchu.edu.tw/
// @author       Axisflow
// @match        https://idp.nchu.edu.tw/*
// @icon         https://www.nchu.edu.tw/favicon.ico
// @updateURL    https://axisflow.github.io/NCHU-Website-Helper/Portal-Login/pl.meta.js
// @downloadURL  https://axisflow.github.io/NCHU-Website-Helper/Portal-Login/pl.user.js
// @grant        unsafeWindow
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        window.close
// ==/UserScript==

(function () {
    'use strict';

    /* Main Program */

    if(window.location.pathname == "/nidp/idff/sso" && window.location.search.search("option=credential") != -1) {
        document.getElementsByTagName('input')[2].value = code;
        document.getElementsByTagName('button')[0].click();
    }

})();
