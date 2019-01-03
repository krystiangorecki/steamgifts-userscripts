// ==UserScript==
// @name        stemgifts-giveawaypage
// @namespace   https://github.com/krystiangorecki/steamgifts-userscripts/
// @author      krystiangorecki
// @icon        https://cdn.steamgifts.com/img/favicon.ico
// @match       http://www.steamgifts.com/giveaway/*
// @match       https://www.steamgifts.com/giveaway/*
// @grant       none
// @version     2018
// @updateURL   https://raw.githubusercontent.com/krystiangorecki/steamgifts-userscripts/master/steamgifts-giveawaypage.js
// @downloadURL https://raw.githubusercontent.com/krystiangorecki/steamgifts-userscripts/master/steamgifts-giveawaypage.js
// ==/UserScript==

var retryCount = 5;

(function () {
	'use strict';
	execute();
})();

function execute() {
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

function reloadPage() {
	window.location.replace(window.location.pathname);
}
