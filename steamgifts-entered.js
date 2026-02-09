// ==UserScript==
// @name         steamgifts giveaways entries bar + load entered bazar prices
// @namespace    https://github.com/krystiangorecki/steamgifts-userscripts/
// @author       krystiangorecki
// @icon         https://cdn.steamgifts.com/img/favicon.ico
// @match        https://www.steamgifts.com/giveaways/entered*
// @match        http://www.steamgifts.com/giveaways/entered*
// @grant        GM.xmlHttpRequest
// @connect      bazar.lowcygier.pl
// @version      2025.01
// @updateURL    https://raw.githubusercontent.com/krystiangorecki/steamgifts-userscripts/master/steamgifts-entered.js
// @downloadURL  https://raw.githubusercontent.com/krystiangorecki/steamgifts-userscripts/master/steamgifts-entered.js
// ==/UserScript==

// v202501 caching of duplicate entries + requests made one by one instead of firehose of requests

const downloadedPricesMap = new Map();

(function() {
    'use strict';
    drawEntriesBarForEnteredPage();
    addLoadBazarPricesButton();
})();

function drawEntriesBarForEnteredPage() {
    var rows = document.querySelectorAll('.table__row-inner-wrap');
    for (var i = 0 ; i < rows.length; i++) {
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

async function loadBazarPrices() {
    var rows = document.querySelectorAll(
        '.widget-container > div > div.table .table__rows .table__row-inner-wrap'
    );

    for (const row of rows) {
        var gameTitleElement = row.querySelector('a.table__column__heading');
        var gameTitle = getCleanGameTitle(gameTitleElement);
        var destination = row.querySelector('.table__column--width-small > span[data-timestamp]').parentElement;

        if (downloadedPricesMap.has(gameTitle)) {
            updatePrice(gameTitle, destination, downloadedPricesMap.get(gameTitle));
            continue;
        }

        const price = await httpGETWithCORSbypassPromise('https://bazar.lowcygier.pl/?options=&type=&platform=&payment=&game_type=&game_genre=&sort=-created_at&per-page=25&title=' + gameTitle, '#w0 p.prc', gameTitle);

        downloadedPricesMap.set(gameTitle, price);
        updatePrice(gameTitle, destination, price);

        await new Promise(r => setTimeout(r, 300));
    }
}

function updatePrice(gameTitle, destination, price){
    var linkText = destination.innerText;
    destination.innerHTML = linkText + price;
}

function getCleanGameTitle(element) {
    let titleWithoutPoints = element.childNodes[0];
    return titleWithoutPoints.textContent.replaceAll('®','').replaceAll('™','').replaceAll(':','').replaceAll('-',' ').replaceAll('—',' ').replaceAll('+','').trim();
}

function httpGETWithCORSbypassPromise(url, selector, gameTitle) {
    return new Promise((resolve) => {
        GM.xmlHttpRequest({
            method: "GET",
            url: url,
            onload: function(response) {
                var dom2 = htmlToElement(response.responseText);
                var price = dom2.querySelector(selector);
                if (price != null) {
                    price = price.innerText.trim().replace('(', '').replace(')', '');
                } else {
                    price = "---";
                }
                resolve(" -- <strong>" + price + "</strong>");
            },
            ontimeout: function() {
                resolve(" timeout!");
            },
            onerror: function(response) {
                resolve(" error: " + response.error);
            }
        });
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
