// ==UserScript==
// @name        steamgifts-giveawaypage
// @namespace   https://github.com/krystiangorecki/steamgifts-userscripts/
// @author      krystiangorecki
// @icon        https://cdn.steamgifts.com/img/favicon.ico
// @match       http://www.steamgifts.com/giveaway/*
// @match       https://www.steamgifts.com/giveaway/*
// @grant       GM.xmlHttpRequest
// @connect     bazar.lowcygier.pl
// @version     2026.05.31
// @updateURL   https://raw.githubusercontent.com/krystiangorecki/steamgifts-userscripts/master/steamgifts-giveawaypage.js
// @downloadURL https://raw.githubusercontent.com/krystiangorecki/steamgifts-userscripts/master/steamgifts-giveawaypage.js
// ==/UserScript==

var retryCount = 5;
const delay20min = 20 * 60 * 1000; // 20 min
const delay30min = 30 * 60 * 1000; // 30 min
const delay2s = 2 * 1000; // 2s
const delay5s = 5 * 1000; // 5s

(function () {
    'use strict';
    autoEnter();
    resizeEntryCount();
    addLowcyGierBazarLink();
    loadBazarPrice();
})();


function loadBazarPrice(){
    var gameTitleElement = document.querySelector('div.featured__heading > div.featured__heading__medium');
    var gameTitle = getCleanGameTitle(gameTitleElement);
    var destination = document.querySelector('#bazar_price_placeholder');
    var selector = '#w0 p.prc'
    httpGETWithCORSbypass('https://bazar.lowcygier.pl/?options=&type=&platform=&payment=&game_type=&game_genre=&sort=-created_at&per-page=25&title=' + gameTitle, selector, destination);
}


function autoEnter() {
    // alert("start");
    var enterLink = document.querySelector(".sidebar__entry-insert");
    if (enterLink == null) {
        var noPointsButton = document.querySelector(".sidebar__error");
        const between20and30minutes = Math.floor(Math.random() * (delay30min - delay30min + 1)) + delay20min;
        setTimeout(reloadPage, between20and30minutes); // 20-30min
    } else if (enterLink.className.indexOf("is-hidden") == -1) {
        // alert("entry link is not hidden");
        const between2and5seconds = Math.floor(Math.random() * (delay5s - delay2s + 1)) + delay2s;
        setTimeout(clickLink, between2and5seconds);
        setTimeout(checkIsDeleteEntryLinkVisible, 7000);
    }
}

function resizeEntryCount(){
    var element = document.querySelector(".live__entry-count");
    element.style='font-size:3em';
}

function clickLink() {
    document.querySelector("[data-do=entry_insert]").click();
}

function checkIsDeleteEntryLinkVisible() {
    var deleteLink = document.querySelector("[data-do=entry_delete]");
    if (deleteLink.className.indexOf("is-hidden") == -1) {
        // alert("delete link is shown, OK");
    } else {
        // alert("delete link is hidden, retrying");
        if (retryCount > 0) {
            const between2and5seconds = Math.floor(Math.random() * (delay5s - delay2s + 1)) + delay2s;
            setTimeout(clickLink, between2and5seconds);
            retryCount = retryCount - 1;
        }
    }
}

function addLowcyGierBazarLink(){
    var titEl = document.querySelector(".featured__heading__medium");
    var gameTitle = getCleanGameTitle(titEl);
    var bazarLink = document.createElement("a");
    bazarLink.id = 'bazarLink';
    bazarLink.classList.add('bazar');
    bazarLink.innerHTML = '<img src="https://bazar.lowcygier.pl/favicon.ico" style="height:20px"/><span id="bazar_price_placeholder" style="vertical-align:super; color: black;"></span>'
    bazarLink.setAttribute("href", "https://bazar.lowcygier.pl/?options=&type=&platform=&payment=&game_type=&game_genre=&title=" + gameTitle + "&sort=-created_at&per-page=25");
    $(".featured__giveaway__hide").parent().parent().append(bazarLink);
}

function getCleanGameTitle(element) {
    return element.innerText.replaceAll('®','').replaceAll('™','').replaceAll(':','').replaceAll('-',' ').replaceAll('—',' ').replaceAll('+','');
}

function reloadPage() {
    window.location.replace(window.location.pathname);
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
            link.innerText = linkText + " " + size;
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
