// ==UserScript==
// @name         steamgifts giveaways entries bar + load entered bazar prices
// @namespace    https://github.com/krystiangorecki/steamgifts-userscripts/
// @author       krystiangorecki
// @icon         https://cdn.steamgifts.com/img/favicon.ico
// @match        https://www.steamgifts.com/giveaways/entered*
// @match        http://www.steamgifts.com/giveaways/entered*
// @grant        GM.xmlHttpRequest
// @connect      bazar.lowcygier.pl
// @version      2023.09
// @updateURL    https://raw.githubusercontent.com/krystiangorecki/steamgifts-userscripts/master/steamgifts-entered.js
// @downloadURL  https://raw.githubusercontent.com/krystiangorecki/steamgifts-userscripts/master/steamgifts-entered.js
// ==/UserScript==

(function() {
    'use strict';
    drawEntriesBarForEnteredPage();
    addLoadBazarPricesButton();
})();

function drawEntriesBarForEnteredPage() {
    var rows = document.querySelectorAll('.table__row-inner-wrap');
    for (var i = 0 ; i< rows.length; i++) {
        var cell = rows[i].querySelector(".table__column--width-small");
        var number = parseInt(cell.innerText.replace(",",""));
        var sizeInPx = number / 15;
        cell.style = "background: url(https://krystiangorecki.github.io/20x20_FFC5C5.png);  background-size: " + sizeInPx + "px 50px;  background-repeat: no-repeat;";
    }
}

function addLoadBazarPricesButton() {
    var loadBazarPricesButton = document.createElement("input");
    loadBazarPricesButton.setAttribute("type", "button");
    loadBazarPricesButton.setAttribute("style", "width:9%; position:fixed;right:0px; top:100px");
    loadBazarPricesButton.value = 'loadBazarPrices';
    loadBazarPricesButton.onclick = loadBazarPrices;

    var destination = document.querySelector('body div');
    if (destination != undefined) {
        insertAfter(destination, loadBazarPricesButton);
    }
}

function loadBazarPrices(){
    var rows = document.querySelectorAll('.widget-container > div > div.table .table__rows .table__row-inner-wrap');
    rows.forEach((row) => {
        var gameTitleElement = row.querySelector(' a.table__column__heading');
        var gameTitle = getCleanGameTitle(gameTitleElement);
        var destination = row.querySelector('.table__column--width-small > span[data-timestamp]').parentElement;
        loadBazarPrice(gameTitle, destination);
    });
}

function loadBazarPrice(gameTitle, destination){
    var selector = '#w0 p.prc'
    httpGETWithCORSbypass('https://bazar.lowcygier.pl/?options=&type=&platform=&payment=&game_type=&game_genre=&sort=-created_at&per-page=25&title=' + gameTitle, selector, destination);
}

function getCleanGameTitle(element) {
    return element.innerText.replaceAll('®','').replaceAll('™','').replaceAll(':','').replaceAll('-',' ').replaceAll('—',' ').replaceAll('+','');
}

function httpGETWithCORSbypass(url, selector, link) {
    var linkText = link.innerText;
    link.innerText = linkText + " ...";
    GM.xmlHttpRequest({
        method: "GET",
        url: url,
        onload: function(response) {
            var dom2 = htmlToElement(response.responseText);
            var size = dom2.querySelector(selector);
            if (size != null) {
                size = size.innerText;
                size = size.trim();
                if (contains(url, 'upfiles.com')) {
                    size = size.replace(/.*\(/, '(');
                }
                size = size.replace('Size', '');
                size = size.replace('(','').replace(')','');
                if (size.length == 0 || contains(size, 'Earn money') || contains(size, 'File Not Found') || contains(size, 'deleted')) {
                    size = "-";
                }
                if (contains(url, 'filefactory.com')) {
                    size = size.replace(/ uploaded.*/, '');
                }
                if (contains(url, 'embedrise.com')) {
                    size = size.replace(',', '').replace('.',',');
                }
            } else {
                size = "-";
            }
            link.innerText = linkText + " -- " + size;
        },
        ontimeout: function(response) {
            console.log('ontimeout');
            link.innerText = linkText + " timeout!";
        },
        onerror: function(response) {
            link.innerText = linkText + " error: " + response.error;
            console.log(response);
        },
    });
}

function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;
    return template.content;
}

function contains(haystack, needle) {
    return haystack.indexOf(needle) > -1;
}

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
