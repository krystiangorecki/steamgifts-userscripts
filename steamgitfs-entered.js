// ==UserScript==
// @name         steamgifts entered giveaways entries bar
// @namespace    https://github.com/krystiangorecki/steamgifts-userscripts/
// @author       krystiangorecki
// @icon         https://cdn.steamgifts.com/img/favicon.ico
// @match        https://www.steamgifts.com/giveaways/entered
// @match        http://www.steamgifts.com/giveaways/entered
// @grant        none
// @version      2020.03
// ==/UserScript==

(function() {
    'use strict';
    var rows = document.querySelectorAll('.table__row-inner-wrap');
    for(var i = 0 ; i< rows.length; i++){
        var cell = rows[i].querySelector(".table__column--width-small");
        var number = parseInt(cell.innerText.replace(",",""));
        var sizeInPx = number * 90 / 1500;
        cell.style = "background: url(https://place-hold.it/20x20/FCC);  background-size: "+sizeInPx+"px 50px;  background-repeat: no-repeat;";
    }
})();
