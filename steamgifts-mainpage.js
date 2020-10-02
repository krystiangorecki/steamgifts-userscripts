// ==UserScript==
// @name        steamgifts-mainpage
// @namespace   https://github.com/krystiangorecki/steamgifts-userscripts/
// @author      krystiangorecki
// @icon        https://cdn.steamgifts.com/img/favicon.ico
// @match       http://www.steamgifts.com/
// @match       https://www.steamgifts.com/
// @match       https://www.steamgifts.com/giveaways/search*
// @run-at      document-end
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @grant       GM_addStyle
// @grant       none
// @version     2020.10.02
// @updateURL   https://raw.githubusercontent.com/krystiangorecki/steamgifts-userscripts/master/steamgifts-mainpage.js
// @downloadURL https://raw.githubusercontent.com/krystiangorecki/steamgifts-userscripts/master/steamgifts-mainpage.js
// ==/UserScript==

var BEGINNING = '.page__heading'; //'.pinned-giveaways__outer-wrap';

var desiredTitlesRegexp = new RegExp('Lightmatter|Basement|The Uncertain|GOAT OF DUTY|The Suicide of Rachel Foster|Fantasy Blacksmith|Fae Tactics|Tropico 6|SUNLESS SKIES|Autonauts |Iron Danger|Shadows: Awakening|Portal Knights|Talisman: Digital Edition|Lords of the Fallen|Kane and Lynch|Rain of Reflections|Beyond Eyes|The Descendant|XIII - Classic|^Toki$|3D Realms Anthology|Wrongworld|Metro Redux Bundle|EARTH\'S DAWN|Praetorians|DEEMO|Catherine Classic|Strange Brigade|The Shrouded Isle|MotoGP|^Chasm$|eXperience 112|Chicago 1930|Vampire: The Masquerade|The Shapeshifting Detective|theHunter|Blood: Fresh Supply|PC Building Simulator|We. The Revolution|Radio Commander|Elite Dangerous|LEWDAPOCALYPSE|Picture Perfect|Day of the Tentacle|Devil\'s Hunt|Haimrik|7 Days to Die|Journey of a Roach|Vikings - Wolves of Midgard|^RAD$|Dead Effect|Legacy of Kain|Hello Neighbor|Case of distrust|American Fugitive|We Were Here Together|Through the Darkest of Times|Little Big Workshop|Automachef|LOST EMBER|Cloudpunk|Deadly Premonition|Lucius|Particulars|Scourge: Outbreak|Prodigy Tactics|Internet Cafe Simulator|Vampyr|Call of Cthulhu|Aragami|Ultimate Doom|We Were Here Together|Of Orcs And Men|EARTHLOCK|Battlestar Galactica|Steampunk Tower|Telefrag|Psychonauts|GNOG|She Sees Red|Double Fine Adventure|Alone in the Dark|Elite Dangerous|Empathy: Path of Whispers|Another World|Rocket League|Don\'t Escape: 4 Days to Survive|Outcast - Second Contact|Call of Cthulhu: Prisoner of Ice|In Between|A Mortician\'s Tale|Tilt Brush|Intruders: Hide and Seek|EarthX|Boundless|NEOVERSE|Spelunky|Sigma Theory|Tragedy of Prince Rupert|Adventure Time|Townscaper|The Almost Gone|My Memory of Us|Hard West|Indiana Jones|V-Rally|LiEat|Aarklash|Barotrauma|STASIS|AIRHEART|Rebuild 3|Dead Synchronicity|Surviving Mars|GET EVEN|Paperbark|Flashback|Neoverse|The Swords of Ditto|Rise of Industry|Smoke and Sacrifice|The Stillness of the Wind|^INFRA$|TEKKEN 7|Heave Ho|Arcanum|Small World|Caesar|Phantasmagoria|TimeShift|Police Quest|Jurassic World Evolution|MO:Astray|Homefront|American Fugitive|Puddle|Colin McRae|This Is the Police|Grim Dawn|Gaia Beyond|Odyssey - The Story of Science|^Totally Accurate Battle Simulator|The Witness|^Inside Me|^Chernobylite|Mages of Mystralia|Slay the Spire|Etherborn|^DiRT|SINNER|Two Worlds|Dandara|MXGP|Warstone|Spyro|Neverwinter Nights|AI War|MIND REFLECTION|Bionic Commando|Niffelheim|Fell Seal|Death\'s Gambit|Primal Carnage: Extinction|^The Dame Was Loaded$|Quern|Eador|Life source|Draw Your Game|Still Life|My Brother Rabbit|Witcher|SHENZHEN I/O|^Maize$|Night Call|^Eliza$|Project Warlock|GRIP: Combat Racing|Halo: The Master Chief Collection|FRAMED Collection|Gardens Between|DARQ|Abducted|Overclocked|Whispers of a Machine|Samaritan Paradox|Sekiro|Nioh|^The Park$|Nex Machina|Cities: Skylines|Thief|A Glider\'s Journey|Blasphemous|Phantom Doctrine|Tomb Raider|The Evil Within|SOULCALIBUR|EVERSPACE|The Daedalic Armageddon Bundle|Original War|Giana Sisters|Crash Bandicoot|Conductor|Last Horizon|Osiris: New Dawn|Parkour Simulator|Shenmue|Yakuza|METAL SLUG|Opus Magnum|Until I Have You|The Stanley Parable|Stairs|Salammbô|My Name is You|RPG Maker|I am not a Monster|Praey for the Gods|Tyranny|The Dark Pictures Anthology|The Darkside Detective|Californium|State of Mind|Art of Murder|Jack Orlando|Age of Empires|Deep Sky Derelicts|Infinite Air with Mark McMorris|The Charnel House Trilogy|Morphine|Agent A: A puzzle in disguise|The Little Acre|SEUM|Bientôt l\'été|Eastshade|The Assembly|Kind Words|Eximius|^Distance$|Armikrog|She Remembered Caterpillars|Darkwood|BUTCHER|The Town of Light|Redeemer|1000 days to escape|Return to Mysterious Island|The Day We Found Earth|Meadow|Shelter|A Short Hike|The Coma|Passpartout|Hand of Fate|ReThink|^HELI$|The Low Road|Candle|Nex Machina|Prison Architect|Contradiction - Spot The Liar|Decay|Road Redemption|NAIRI|Kingdom Come|^Awe$|Slipstream|Dex|The Room|Saints Row|S\.T\.A\.L\.K\.E\.R\.|SpellForce|Wandersong|Secret Files|Disciples|Earth 21|Duskers|Moonlighter|911 Operator|Learn Japanese To Survive|Bulletstorm|Shadow Warrior 2|Paratopic|Frozen Cortex|ISLANDERS|Last Inua|1954 Alcatraz|Earth 21|Blackguards|Lifeless Planet|Diaries of a Spaceport Janitor|Party Hard|Hello Neighbor|Goetia|F\.E\.A\.R\.|SUNLESS SEA|Yakuza Kiwami 2|11-11 Memories Retold|UNLOVED|Sanitarium|F-117A Nighthawk Stealth Fighter|^Sky$|Shape of the World|Sea of Solitude|Scorn|Rite of Ilk|Contraband Police|Pedestrian|Ether One|The Last Night|The Occupation|Little Big Adventure|Project Highrise|Pang Adventures|The Last Express|Heliborne|Postmen Of Horizon|Cuphead|House Party|White Night|Mars: War Logs|Niche |Late Shift|The First Tree|PC Building Simulator|Blues and Bullets|A Normal Lost Phone|Rise of Insanity|ShadowSide|Sherlock Holmes|while True: learn|The Detail|Gothic|Age of Wonders|RESIDENT EVIL|The Last Door|Bad Mojo|Else Heart\.Break|Domina|Leviathan: The Last Day of the Decade|Yesterday|Crashbots|Tom Clancy|The Invisible Hours|Downfall|Grimm|Shadow Bug|while True|Mainlining|Kathy Rain|Shadwen|Jagged Alliance|Zen Bound|^Everything$|A Vampyre Story|Crazy Machines|Unbox|Crashday|The Long Reach|Castlevania|The Elder Scrolls|Tower Wars|Lost Horizon|Sundered|Sniper Elite|Infested Planet|Shadowrun|The King\'s Bird|Yakuza 0|Wolfenstein|Dead Rising|Homeworld|Plague Inc|TASTEE|Race The Sun|Breaking Good|Assassin\'s Creed|Return of the Obra Dinn|Mutant Year Zero|GRIS|Thief Simulator|Tiny Echo|Visage|King\s Bird|INSIDE|Peregrin|Detention|Edge of Twilight|Seven: The Days Long Gone|Decay: THe Mare|TimeLock|Four Sided Fantasy|The Piano|Q\.U\.B\.E|Pinstripe|Watch This|Ancient Planet Tower Defense|Atlantis|The Free Ones|Dead Secret|The Bard\'s Tale|Lock Parsing 2|Dungeons 3|Among the Sleep|The Surge|observer_|Distrust|Tokyo 42|Rain World|Beholder|Ignorance is Strength|Elegy for a Dead World|Owlboy|FarSky|King\'s Bounty|Stacking|Dungeon Siege|Ceville|Hard Reset Redux|Antichamber|20181027|Rebel Galaxy|Kentucky Route Zero|Old Man\'s Journey|Gremlins, Inc|Back from Hell|The Sexy Brutale|LISA|We Were Here Too|Hollow Knight|Darkest Dungeon|The Old City|Yesterday Origins|Super Cloudbuilt|Black The Fall|Moon Hunters|Bird Game|^Silence$|Shadow Man|Monstrum|Skullgirls|Forward to the Sky|Sam & Max|Prophour23|STAR WARS|Star Wars|Battle Chef|Original Journey|20180917|BloodRayne|The Final Station|Monaco|BioShock|Serial Cleaner|Gunpoint|The Tiny Bang Story|Just Cause|SOMA|Torment|Little Nightmares|Figment|The Journey Down|Staxel|Dishonored|Pathologic|Mark of the Ninja|FTL: Faster Than Light|The Music Machine|The Longest Journey|Beat The Game|Lost In Space|Meadow|Oknytt|Darksiders|Far Cry|SAWKOBAN|20180907|Bridge Constructor Portal|The Void|Thirty Flights|Rust|The Long Journey Home|Wasteland|Shadow Tactics|The Floor is Jelly|Good Robot|Cloudbuilt|Resident Evil|Wizardry|Turok|RUNNING WITH RIFLES|DreadOut|RimWorld|Sudeki|GemCraft|We Are The Dwarves|Deployment|Ultimate General|How to Survive|White Noise|Dead Age|Mysterium|Teleglitch|35MM|Civilization|Wasteland|GT Legends|Ticket to Ride|Tiltagon|Icewind Dale|Painkiller|Mortal Kombat|Injustice|AER Memories of Old|Worms|Dead by Daylight|Deus Ex|Deadlight|^Bounce$|Turing Test|Kerbal|Heroes of Annihilated Empires|The Walking Dead|MONSTER HUNTER|^DUSK$|Grey Goo|Space Hulk|DuckTales|Larry|Airport Madness|Factorio|Etherlords|Ashes of the Singularity|Sniper Elite|Sins of a Solar Empire|Devil Daggers|Cities in Motion|Broken Sword|12 is Better Than 6|The Wolf Among Us|WRC|Space Pilgrim|This War of Mine|Anomaly|Call of Juarez|Overcooked|Sacred|DISTRAINT|Berseria|Munin|Kona|DOOM|Shuyan|Stronghold|Fallout|Memoria|Unwritten|Into the Breach|Getting Over It|SteamWorld|Risen|XCOM|Sacred|Strife|Oddworld|DARK SOULS|Call of Duty|Dirt Rally|Project CARS|NieR|TellTale|Gray Matter|The Deadly Tower of Monsters|Hotline Miami|Murder Mystery Adventure|Secret Ponchos|Rock of Ages|Chernobyl Commando|rFactor|Ghost Warrior|Samorost|Chronicles of Mystery|I Have No Mouth, and I Must Scream|Frostpunk|Final Fantasy|FINAL FANTASY|Etherlords Bundle|The Gate of Firmament|Styx|Advent Rising|Patent9|Reprisal Universe|Prey|Rune Classic|Lara Croft|Pillars of Eternity|Borderlands|observer|METAL GEAR|Frederic|Dark Souls|Majesty|Windward|Prototype|SUPERHOT|Gorky|Space HUlk|Warhammer|Metal Gear|System Shock|Heroes of Might|Isolation|Song of the Deep|Grand Theft|Endless|Mafia|Syberia|My Name is Addiction|Final Fantasy|DmC|Turmoil|Norwood|Monkey Island|Republique|Zeno Clash|Tacoma|Max Payne|Ryse|Styx|Cognition|Ken Follet|Toren|Deadlight|Carmageddon|^Collapse$|Grimrock|DiRT Rally|Gabriel Knight|RUINER|Batman|Rainbow Six|Deponia|Force Unleashed|Manhunt|Noire|Doom |Gorky|Serious Sam|Dark Souls|Uncertain|Firewatch');

function isDesired(e){
    var name = $(e).find('.giveaway__heading__name')[0];
    var result = name !==undefined && desiredTitlesRegexp.test(name.text);
    return result;
}

var nextPageNumber;
(function() {
    'use strict';
    sgStart();
})();

function sgStart(){
    //debugger;
    //sgRemoveAds();
    sgSetNextPageNumber();
    //sgRemoveEntered();
    sgShowPromoted();
    sgBetterFonts();
    sgSort();
    addEditScriptLink();
    sgRemoveEnteredButton();
    drawEntriesBarForMainPage();
    sgGotoLoadNextPageButton();
    sgAddLoadNextPageButton();
    addLowcyGierBazarLink();
}

function addLowcyGierBazarLink(){
    $('.giveaway__heading__name').each(function (index, element) {
        debugger;
        var alreadyHasBazarLink = $(element).nextAll('.bazar').length > 0;
        if(!alreadyHasBazarLink){
            var gameTitle = element.text.replace('®','');
            var bazarLink = document.createElement("a");
            //bazarLink.text=" BAZAR ";
            bazarLink.innerHTML = '<img src="https://bazar.lowcygier.pl/favicon.ico" style="height:20px"/>'
            bazarLink.classList.add('bazar');
            bazarLink.setAttribute("href", "https://bazar.lowcygier.pl/?options=&type=&platform=&payment=&game_type=&game_genre=&title=" + gameTitle + "&sort=-created_at&per-page=25");
            $(element).parent().append(bazarLink);
        }
    });
}

// ustawia początkowy numer kolejnej strony na podstawie numeru obecnej
function sgSetNextPageNumber(){
    var currentPageNumber = getQueryVariable('page');
    // alert(currentPageNumber);
    nextPageNumber = parseInt(currentPageNumber) + 1;
}

function sgShowPromoted(){
    // rozwijam zwinięte giveawaye, bo po moim sortowaniu trafią tam te najciekawsze
    // $('.pinned-giveaways__button').click();	//przestało działać, ale wersja poniżej działa
    $('.pinned-giveaways__inner-wrap--minimized').removeClass('pinned-giveaways__inner-wrap--minimized');
}

function sgSort(){
    // alert('sgSort');
    // var start = new Date().getTime();


    // więcej niż 1 kopia(posiada tekst "Copies") do przodu
    $('.giveaway__row-outer-wrap').each(function (i, a) {
        console.log($(a));
        // debugger;
        $(a).find('.giveaway__heading__thin').each(function (n, b) {
            var isCopiesElement = $(b).text().indexOf("Copies")!= -1;
            if(isCopiesElement &&!isDesired(a)) {
                $('.giveaway__row-outer-wrap:first').prepend(a);
            }
        });
        console.log($(a));
    });

    // level 1 do przodu
    $('.giveaway__row-outer-wrap').each(function (i, a) {
        if(!isDesired(a) && $(a).find('.giveaway__column--contributor-level').text().indexOf('1')>0 ){
            $('.giveaway__row-outer-wrap:first').prepend(a);
        }
    });

    // level 2 do przodu
    $('.giveaway__row-outer-wrap').each(function (i, a) {
        if(!isDesired(a) && $(a).find('.giveaway__column--contributor-level').text().indexOf('2')>0 ){
            $('.giveaway__row-outer-wrap:first').prepend(a);
        }
    });

    // level 3 do przodu
    $('.giveaway__row-outer-wrap').each(function (i, a) {
        if(!isDesired(a) && $(a).find('.giveaway__column--contributor-level').text().indexOf('3')>0 ){
            $('.giveaway__row-outer-wrap:first').prepend(a);
        }
    });

    // level 4 do przodu
    $('.giveaway__row-outer-wrap').each(function (i, a) {
        if(!isDesired(a) && $(a).find('.giveaway__column--contributor-level').text().indexOf('4')>0 ){
            $('.giveaway__row-outer-wrap:first').prepend(a);
        }
    });


    // WSZYSTKIE poszukiwane tytuły do przodu
    $('.giveaway__row-outer-wrap').each(function (i, a) {
        if(isDesired(a)){
            $('.giveaway__row-outer-wrap:first').prepend(a);
        }
    });

    // POSZUKIWANE LEVELE do przodu
    // poszukiwany level 1 do przodu
    $('.giveaway__row-outer-wrap').each(function (i, a) {
        if(isDesired(a) && $(a).find('.giveaway__column--contributor-level').text().indexOf('1')>0 ){
            $('.giveaway__row-outer-wrap:first').prepend(a);
        }
    });

    // poszukiwany level 2 do przodu
    $('.giveaway__row-outer-wrap').each(function (i, a) {
        if(isDesired(a) && $(a).find('.giveaway__column--contributor-level').text().indexOf('2')>0 ){
            $('.giveaway__row-outer-wrap:first').prepend(a);
        }
    });

    // poszukiwany level 3 do przodu
    $('.giveaway__row-outer-wrap').each(function (i, a) {
        if(isDesired(a) && $(a).find('.giveaway__column--contributor-level').text().indexOf('3')>0 ){
            $('.giveaway__row-outer-wrap:first').prepend(a);
        }
    });

    // poszukiwany level 4 do przodu
    $('.giveaway__row-outer-wrap').each(function (i, a) {
        if(isDesired(a) && $(a).find('.giveaway__column--contributor-level').text().indexOf('4')>0 ){
            $('.giveaway__row-outer-wrap:first').prepend(a);
        }
    });

    // var end = new Date().getTime();
    // alert("Sorted in " + (end-start) + "ms");
}

function blockButton(){
    var button = $('#nextPageButton').first();
    button.css('text-decoration','line-through');
    button.attr('disabled','');
}

function unblockButton(){
    var button = $('#nextPageButton').first();
    button.css('text-decoration','');
    button.removeAttr('disabled');
}

function sgLoadAnotherPage1(){
    blockButton();
    // alert("start sgLoadAnotherPage1");
    $.ajax ( {
        type:       'GET',
        url:       'https://www.steamgifts.com/giveaways/search?page='+nextPageNumber,
        dataType:   'html',
        success:    function (data) {
            //debugger;
            var $page = $(data);
            var $elements = $page.find('.giveaway__row-outer-wrap');
            //var $first = $('.giveaway__row-outer-wrap').first();
            var $last = $('.giveaway__row-outer-wrap').last();
            $elements.insertAfter($last);
            // po pobraniu ponownie upiększam i ponownie sortuję
            // alert('sortuję ponownie');
            sgRemoveEntered();
            sgBetterFonts();
            $('#nextPageButton').parent().hide();
            sgSort();
            $('#nextPageButton').parent().show();
            nextPageNumber++;
            drawEntriesBarForMainPage();
            sgRefreshButtonNumber();
            unblockButton();
            addLowcyGierBazarLink();
        }
    } );
}

// poprawki wizualne czcionek na stronie
function sgBetterFonts(){
    // alert("sgBetterFonts");

    // zwiększam czcionkę dla Level 234+
    var values = document.querySelectorAll("div[title='Contributor Level']");
    // alert(values.length);
    for (var i = 0; i < values.length; ++i) {
        var item = values[i];
        if(item.innerHTML.indexOf('4+')>0){
            item.style="font-size: 20px;";
        }else if(item.innerHTML.indexOf('3+')>0){
            item.style="font-size: 16px;";
        }else if(item.innerHTML.indexOf('2+')>0){
            item.style="font-size: 14px;";
        }
    }
    // pogrubiam jeśli więcej kopii
    values = document.querySelectorAll(".giveaway__heading__thin");
    // alert(values.length);
    for (var i = 0; i < values.length; ++i) {
        var item = values[i];
        if(item.innerHTML.indexOf('opies')>0){
            item.style="font-size: 16px; font-weight: bold; margin-left: 90px;  ";
        }
    }
}

// dodaje na stronie przycisk do pobierania kolejnej strony
function sgAddLoadNextPageButton() {
    var loadNextPageButton = document.createElement("input");
    loadNextPageButton.setAttribute("type", "button");
    loadNextPageButton.setAttribute("id", "nextPageButton");
    loadNextPageButton.setAttribute("style", "width:20%;");
    loadNextPageButton.onclick = sgLoadAnotherPage1;
    $(BEGINNING).parent().prepend(loadNextPageButton);
    sgRefreshButtonNumber();
}

// dodaje na stronie link do przejścia do kolejnej strony
function sgGotoLoadNextPageButton() {
    var loadNextPageButton = document.createElement("a");
    loadNextPageButton.text = " goto page " + nextPageNumber + " ";
    loadNextPageButton.setAttribute("href", "https://www.steamgifts.com/giveaways/search?page="+nextPageNumber);
    loadNextPageButton.setAttribute("id", "gotoNextPageButton");
    $(BEGINNING).parent().prepend(loadNextPageButton);
}

// dodaje na stronie przycisk do usuwania tych w których biorę udział
function sgRemoveEnteredButton() {
    var removeEnteredButton = document.createElement("input");
    removeEnteredButton.setAttribute("type", "button");
    removeEnteredButton.setAttribute("style",  "width:20%");
    removeEnteredButton.setAttribute("value",  "removeEntered");
    removeEnteredButton.setAttribute("id", "removeEnteredButton");
    removeEnteredButton.onclick = sgRemoveEntered;
    $(BEGINNING).parent().prepend(removeEnteredButton);
}

// dodaje na stronie link do edycji skryptu w githubie
function addEditScriptLink() {
    var editScriptLink = document.createElement("a");
    editScriptLink.text = " edit script ";
    editScriptLink.setAttribute("href", "https://github.com/krystiangorecki/steamgifts-userscripts/edit/master/steamgifts-mainpage.js");
    editScriptLink.setAttribute("id", "editScriptLink");
    $(BEGINNING).parent().prepend(editScriptLink);
}

// Usuwa z DOM giveawaye, w których brałem udział.
function sgRemoveEntered() {
    //$('.is-faded').remove();
    $('.is-faded').each(function (i, a) {
        $(a).remove();
    });
}

// Usuwa reklamy.
function sgRemoveAds() {
    $('.sidebar__mpu').remove();
}

//aktualizuje labelkę na przycisku
function sgRefreshButtonNumber() {
    $('#nextPageButton').val("L O A D   P A G E " + nextPageNumber);
    $('#gotoNextPageButton').text(" goto page " + nextPageNumber + " ");
    $('#gotoNextPageButton').attr("href", "https://www.steamgifts.com/giveaways/search?page="+nextPageNumber);
}

// pobiera parametr page z query stringa
function getQueryVariable(variable){
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == variable){return pair[1];}
    }
    return(1);
}

function drawEntriesBarForMainPage(){
    var cells = document.querySelectorAll("a>i.fa-tag+span");
    for(var i = 0 ; i< cells.length; i++){
        var number = parseInt(cells[i].innerText.replace(",",""));
        var sizeInPx = number / 10;
        cells[i].parentElement.parentElement.style = "background: url(https://place-hold.it/20x20/FFC5C5);  background-size: " + sizeInPx + "px 100px;  background-repeat: no-repeat;";
    }
}
//alert('full script loaded');
