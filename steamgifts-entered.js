// ==UserScript==
// @name         steamgifts giveaways entries bar
// @namespace    https://github.com/krystiangorecki/steamgifts-userscripts/
// @author       krystiangorecki
// @icon         https://cdn.steamgifts.com/img/favicon.ico
// @match        https://www.steamgifts.com/giveaways/entered
// @match        http://www.steamgifts.com/giveaways/entered
// @grant        none
// @version      2020.4
// @updateURL    https://raw.githubusercontent.com/krystiangorecki/steamgifts-userscripts/master/steamgifts-entered.js
// @downloadURL  https://raw.githubusercontent.com/krystiangorecki/steamgifts-userscripts/master/steamgifts-entered.js
// ==/UserScript==

(function() {
    'use strict';
    drawEntriesBarForEnteredPage();
})();

function drawEntriesBarForEnteredPage(){
    var rows = document.querySelectorAll('.table__row-inner-wrap');
    for(var i = 0 ; i< rows.length; i++){
        var cell = rows[i].querySelector(".table__column--width-small");
        var number = parseInt(cell.innerText.replace(",",""));
        var sizeInPx = number / 15;
        cell.style = "background: url(https://place-hold.it/20x20/FCC);  background-size: " + sizeInPx + "px 50px;  background-repeat: no-repeat;";
    }
}
