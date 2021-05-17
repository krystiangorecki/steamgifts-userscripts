// ==UserScript==
// @name        steamgifts-giveawaypage
// @namespace   https://github.com/krystiangorecki/steamgifts-userscripts/
// @author      krystiangorecki
// @icon        https://cdn.steamgifts.com/img/favicon.ico
// @match       http://www.steamgifts.com/giveaway/*
// @match       https://www.steamgifts.com/giveaway/*
// @grant       none
// @version     2021.05.17
// @updateURL   https://raw.githubusercontent.com/krystiangorecki/steamgifts-userscripts/master/steamgifts-giveawaypage.js
// @downloadURL https://raw.githubusercontent.com/krystiangorecki/steamgifts-userscripts/master/steamgifts-giveawaypage.js
// ==/UserScript==

var retryCount = 5;

(function () {
    'use strict';
    autoEnter();
    resizeEntryCount();
    addLowcyGierBazarLink();
})();

function autoEnter() {
    // alert("start");

    // autoklikanie
    var enterLink = document.querySelector(".sidebar__entry-insert");
    if (enterLink == null) {
        var noPointsButton = document.querySelector(".sidebar__error");
        setTimeout(reloadPage, 1800000); //30min
    } else if (enterLink.className.indexOf("is-hidden") == -1) {
        // alert("entry link is not hidden");
        setTimeout(clickLink, 2000);
        setTimeout(checkIsDeleteEntryLinkVisible, 7000);
    }
}

function resizeEntryCount(){
    var element = document.querySelector(".live__entry-count");
    //var number = parseInt(element.innerText.replace(",",""), 10);
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
            setTimeout(clickLink, 2000);
            retryCount = retryCount - 1;
        }
    }
}

function addLowcyGierBazarLink(){
    debugger;
    var titEl = document.querySelector(".featured__heading__medium");
    var gameTitle = titEl.innerText.replaceAll('®','').replaceAll('™','').replaceAll(':','').replaceAll('-',' ').replaceAll('—',' ');
    var bazarLink = document.createElement("a");
    bazarLink.innerHTML = '<img src="https://bazar.lowcygier.pl/favicon.ico" style="height:20px"/>'
    bazarLink.classList.add('bazar');
    bazarLink.setAttribute("href", "https://bazar.lowcygier.pl/?options=&type=&platform=&payment=&game_type=&game_genre=&title=" + gameTitle + "&sort=-created_at&per-page=25");
    $(".featured__giveaway__hide").parent().parent().append(bazarLink);
}

function reloadPage() {
    window.location.replace(window.location.pathname);
}
