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
// @connect     store.steampowered.com
// @grant       GM.xmlHttpRequest
// @grant       GM_addStyle
// @version     2023.09.25
// @updateURL   https://raw.githubusercontent.com/krystiangorecki/steamgifts-userscripts/master/steamgifts-mainpage.js
// @downloadURL https://raw.githubusercontent.com/krystiangorecki/steamgifts-userscripts/master/steamgifts-mainpage.js
// ==/UserScript==

GM_addStyle(' .separator { border-top:solid red 2px }');

var BEGINNING = '.page__heading'; //'.pinned-giveaways__outer-wrap';

var desiredTitlesRegexp = new RegExp('Forgive Me Father|^Oxygen$|Remnant II|Echo of Starsong|Beyond a Steel Sky|Twin Mirror|Vikings|We Are The Dwarves|Deceive Inc|Kingdom Rush Origins|Descenders|Little Orpheus|Ghost of a Tale|SuchArt|Murder Mystery Machine|The Forgotten City|Who Pressed Mute on Uncle Marcus|Tiny Tina\'s Wonderlands|Detroit|The Quarry|Assemble with Care|Ghostwire|Eternal Edge|Soulstice|Time Loader|God of War|Celeste|Turbo Golf Racing|Leap of Fate|Dragon\'s Dogma|Spectrum Retreat|The Outer Worlds|Broken Pieces|Eternal Threads|^Operation: Tango$|Rollerdrome|Fireteam Elite|Ring of Pain|AMID EVIL|Zombie Driver|^Teacup$|Death Squared|Desperados|Pathfinder|Quadrata|Dorfromantik|The Inner World|Shady Part of Me|Thronebreaker|Ten Dates|Pendula Swing|^Contractors$|Dinfna Hotel|Othercide|Days Gone|DEATHLOOP|Dark Nights with Poe and Munro|Absolute Drift|^House$|Firefighting Simulator|John Wick|Yono and the Celestial Elephants|Model Builder|The Raven Remastered|Sudden Strike|Unlock The King|Middle-earth|Holy Potatoes|Gas Station Simulator|Ni no Kuni|Railroad Tycoon|Save Room|Colonial Marines|Aliens VS Predator|Before We Leave|NARUTO TO BORUTO|X-COM|shapez|INDUSTRIA|Descenders|Forgive Me Father|Naheulbeuk|SHENZHEN|7 Billion Humans|while True: learn|EXAPUNKS|Learning Factory|Spider-Man|Necromunda|Project Wingman|Black Book|The Innsmouth Case|Agatha Christie|Alfred Hitchcock|Unavowed|Draugen|Beyond a Steel Sky|Dying Light|EarthNight|Armello|^The Ascent$|^Omno$|A Plague Tale|Mind Scanners|In Sound Mind|Emily is Away|Dreamfall|LucasArts Adventure Pack|^Jessika$|Game Dev Studio|Degrees of Separation|^Heal$|Lake Ridden|^XEL$|Tale of the Forgotten King|Haven Park|Greak|Northend Tower Defense|Slide Stars|Moving Out|Escape Room|Timelie|Aeon of Ruin|Valfaris|I am Fish|Siege Survival|Phoenix Point|Call of the Sea|Gamedec|Pumpkin Jack|Post Void|Cook, Serve, Delicious|ABRISS|The Henry Stickmin Collection|In Other Waters|Voidigo|INMOST|Fable Anniversary|We are alright|El Hijo|^Pine$|^fault -|Command & Conquer|Surviving the Aftermath|If Found\.\.\.|Genesis Noir|Embr|Planet Zoo|SpongeBob SquarePants|Spellcaster University|Beyond: Two Souls|FAR: Lone Sails|Doctor Who|Chicken Police|West of Dead|Pikuniku|SCARLET NEXUS|Endzone|Lust from Beyond|Gears 5|Heavy Rain|The Incredible Adventures of Van Helsing|Myst:|realMyst|Riven: The Sequel to MYST|Myst III: Exile|Myst IV: Revelation|Myst V: End of Ages|URU: Complete Chronicles|Lacuna|Survivalists|Maneater|MORDHAU|Greak: Memories of Azur|^TOHU|Endzone|Down in Bermuda|Yuppie Psycho|Void Bastards|Potion Explosion|Felix The Reaper|Devil May Cry|Kingdom: New Lands|^The Path$|GRIME|INSOMNIA: The Ark|Carcassonne|Bury Me, My Love|Raw Data|The Falconeer|Narita Boy|Heaven\'s Vault|Not For Broadcast|Fractured Minds|Bridge Constructor Portal|Tank Mechanic Simulator|theHunter|The Humankind Odyssey|Quake|DEATH STRANDING|Kill Your Gods|Generation Zero|Superliminal|^Carto$|As Far As The Eye|We Need To Go Deeper|Last Oasis|ENCODYA|Drake Hollow|Blue Fire|Last Stop|Driven Out|Bee Simulator|DIRT|Reventure|深海|Wildermyth|Griftlands|Baldur\'s Gate|Oxygen Not Included|Devil\'s Hunt|Steamburg|Secret Neighbor|Going Under|Milky Way Prince|DESOLATE|Railway Empire|Baba Is You|Tower of Time|Out of Space|Gray Dawn|Commandos|Praetorians|Tesla Force|Neverinth|Dark Devotion|Kill It With Fire|Falconeer|Cultist Simulator|Hellpoint|Retimed|Vane|Fury Unleashed|Metro Exodus|Size Matters|DeadCore|Those Who Remain|missed messages|Skully|Ghost Warrior|Main Assembly|Rock of Ages|Remothered|Aven Colony|SIMULACRA|Shenmue|Flockers|Paradise Lost|Chaos Reborn|Sands of Salzaar|Project Winter|The Signifier|Kingdom Two Crowns|Generation Zero|^ELEX$|Cyber Hook|Blacksad|POSTAL|Valkyria Chronicles|The Signal From Tölva|Vendetta - Curse of Raven\'s Cry|The Light Keeps Us Safe|Detective Di|OPUS: Rocket of Whispers|Path to Mnemosyne|Battle of Polytopia|Gravel|Iron Danger|Shark Attack|Western 1849|Through the Woods|The Last Unicorn|Flatout|Ghostrunner|Five Dates|The Complex|The Bunker|Sid Meier|^Salt$|Minoria|Manual Samuel|Horizon Chase Turbo|Scanner Sombre|Lakeview Cabin|Locomotion|Banner Saga|LEAVES - The Journey|Phoning Home|Days of War|S\.W\.I\.N\.E\.|Alekhine\'s Gun|Leisure Suit Larry|Everreach|SINNER:|Seven: Enhanced Edition|Red Faction|Peaky Blinders|Vampire: The Masquerade|Violett|Transistor|Kane & Lynch|Master Reboot|Cat Quest|Feather|Path of Giants|Frog Detective|Struggling|The Beast Inside|Disney Infinity|Shining Resonance|Halcyon|Path of Giants|God\'s Trigger|Out There: Ω Edition|Detective Grimoire|Blitzkrieg|Dry Drowning|Train Valley|Crying Suns|Darksburg|Little Misfortune|Smile For Me|TSIOQUE|Rover Mechanic Simulator|Youropa|Townsmen|Autonauts|Kingdom Rush - Tower Defense|RollerCoaster Tycoon|Craftopia|Truberbrook|Layers of Fear|AVICII Invector|Quantum Conundrum|Lorelai|Silver Chains|^Hades|The Moment of Silence|How To Date A Magical Girl!|Repentant|Vanquish|Super Game Jam|The Last Sky|Lightmatter|^Basement$|The Uncertain|GOAT OF DUTY|The Suicide of Rachel Foster|Fantasy Blacksmith|Fae Tactics|Tropico 6|SUNLESS SKIES|Autonauts|Iron Danger|Shadows: Awakening|Portal Knights|Talisman: Digital Edition|Lords of the Fallen|Kane and Lynch|Rain of Reflections|Beyond Eyes|The Descendant|XIII - Classic|^Toki$|3D Realms Anthology|Wrongworld|Metro Redux Bundle|EARTH\'S DAWN|Praetorians|DEEMO|Catherine Classic|Strange Brigade|The Shrouded Isle|MotoGP|^Chasm$|eXperience 112|Chicago 1930|Vampire: The Masquerade|The Shapeshifting Detective|theHunter|Blood: Fresh Supply|PC Building Simulator|We. The Revolution|Radio Commander|Elite Dangerous|LEWDAPOCALYPSE|Picture Perfect|Day of the Tentacle|Devil\'s Hunt|Haimrik|7 Days to Die|Journey of a Roach|Vikings - Wolves of Midgard|^RAD$|Dead Effect|Legacy of Kain|Hello Neighbor|Case of distrust|American Fugitive|We Were Here Together|Through the Darkest of Times|Little Big Workshop|Automachef|LOST EMBER|Cloudpunk|Deadly Premonition|Lucius|Particulars|Scourge: Outbreak|Prodigy Tactics|Internet Cafe Simulator|Vampyr|Call of Cthulhu|Aragami|Ultimate Doom|We Were Here Together|Of Orcs And Men|EARTHLOCK|Battlestar Galactica|Steampunk Tower|Telefrag|Psychonauts|GNOG|She Sees Red|Double Fine Adventure|Alone in the Dark|Elite Dangerous|Empathy: Path of Whispers|Another World|Rocket League|Don\'t Escape: 4 Days to Survive|Outcast - Second Contact|Call of Cthulhu: Prisoner of Ice|In Between|A Mortician\'s Tale|Tilt Brush|Intruders: Hide and Seek|EarthX|Boundless|NEOVERSE|Spelunky|Sigma Theory|Tragedy of Prince Rupert|Adventure Time|Townscaper|The Almost Gone|My Memory of Us|Hard West|Indiana Jones|V-Rally|LiEat|Aarklash|Barotrauma|STASIS|AIRHEART|Rebuild 3|Dead Synchronicity|Surviving Mars|GET EVEN|Paperbark|Flashback|Neoverse|The Swords of Ditto|Rise of Industry|Smoke and Sacrifice|The Stillness of the Wind|^INFRA$|TEKKEN 7|Heave Ho|Arcanum|Small World|Caesar|Phantasmagoria|TimeShift|Police Quest|Jurassic World Evolution|MO:Astray|Homefront|American Fugitive|Puddle|Colin McRae|This Is the Police|Grim Dawn|Gaia Beyond|Odyssey - The Story of Science|^Totally Accurate Battle Simulator|The Witness|^Inside Me|^Chernobylite|Mages of Mystralia|Slay the Spire|Etherborn|^DiRT|SINNER|Two Worlds|Dandara|MXGP|Warstone|Spyro|Neverwinter Nights|AI War|MIND REFLECTION|Bionic Commando|Niffelheim|Fell Seal|Death\'s Gambit|Primal Carnage: Extinction|^The Dame Was Loaded$|Quern|Eador|Life source|Draw Your Game|Still Life|My Brother Rabbit|Witcher|SHENZHEN I/O|^Maize$|Night Call|^Eliza$|Project Warlock|GRIP: Combat Racing|Halo: The Master Chief Collection|FRAMED Collection|Gardens Between|DARQ|Abducted|Overclocked|Whispers of a Machine|Samaritan Paradox|Sekiro|Nioh|^The Park$|Nex Machina|Cities: Skylines|Thief|A Glider\'s Journey|Blasphemous|Phantom Doctrine|Tomb Raider|The Evil Within|SOULCALIBUR|EVERSPACE|The Daedalic Armageddon Bundle|Original War|Giana Sisters|Crash Bandicoot|Conductor|Last Horizon|Osiris: New Dawn|Parkour Simulator|Shenmue|Yakuza|METAL SLUG|Opus Magnum|Until I Have You|The Stanley Parable|Stairs|Salammbô|My Name is You|RPG Maker|I am not a Monster|Praey for the Gods|Tyranny|The Dark Pictures Anthology|The Darkside Detective|Californium|State of Mind|Art of Murder|Jack Orlando|Age of Empires|Deep Sky Derelicts|Infinite Air with Mark McMorris|The Charnel House Trilogy|Morphine|Agent A: A puzzle in disguise|The Little Acre|SEUM|Bientôt l\'été|Eastshade|The Assembly|Kind Words|Eximius|^Distance$|Armikrog|She Remembered Caterpillars|Darkwood|BUTCHER|The Town of Light|Redeemer|1000 days to escape|Return to Mysterious Island|The Day We Found Earth|Meadow|Shelter|A Short Hike|The Coma|Passpartout|Hand of Fate|ReThink|^HELI$|The Low Road|Candle|Nex Machina|Prison Architect|Contradiction - Spot The Liar|Decay|Road Redemption|NAIRI|Kingdom Come|^Awe$|Slipstream|Dex|The Room|Saints Row|S\.T\.A\.L\.K\.E\.R\.|SpellForce|Wandersong|Secret Files|Disciples|Earth 21|Duskers|Moonlighter|911 Operator|Learn Japanese To Survive|Bulletstorm|Shadow Warrior 2|Paratopic|Frozen Cortex|ISLANDERS|Last Inua|1954 Alcatraz|Earth 21|Blackguards|Lifeless Planet|Diaries of a Spaceport Janitor|Party Hard|Hello Neighbor|Goetia|F\.E\.A\.R\.|SUNLESS SEA|Yakuza Kiwami 2|11-11 Memories Retold|UNLOVED|Sanitarium|F-117A Nighthawk Stealth Fighter|^Sky$|Shape of the World|Sea of Solitude|Scorn|Rite of Ilk|Contraband Police|Pedestrian|Ether One|The Last Night|The Occupation|Little Big Adventure|Project Highrise|Pang Adventures|The Last Express|Heliborne|Postmen Of Horizon|Cuphead|House Party|White Night|Mars: War Logs|Niche|Late Shift|The First Tree|PC Building Simulator|Blues and Bullets|A Normal Lost Phone|Rise of Insanity|ShadowSide|Sherlock Holmes|while True: learn|The Detail|Gothic|Age of Wonders|RESIDENT EVIL|The Last Door|Bad Mojo|Else Heart\.Break|Domina|Leviathan: The Last Day of the Decade|Yesterday|Crashbots|Tom Clancy|The Invisible Hours|Downfall|Grimm|Shadow Bug|while True|Mainlining|Kathy Rain|Shadwen|Jagged Alliance|Zen Bound|^Everything$|A Vampyre Story|Crazy Machines|Unbox|Crashday|The Long Reach|Castlevania|The Elder Scrolls|Tower Wars|Lost Horizon|Sundered|Sniper Elite|Infested Planet|Shadowrun|The King\'s Bird|Yakuza 0|Wolfenstein|Dead Rising|Homeworld|Plague Inc|TASTEE|Race The Sun|Breaking Good|Assassin\'s Creed|Return of the Obra Dinn|Mutant Year Zero|GRIS|Thief Simulator|Tiny Echo|Visage|King\s Bird|INSIDE|Peregrin|^Detention$|Edge of Twilight|Seven: The Days Long Gone|Decay: THe Mare|TimeLock|Four Sided Fantasy|The Piano|Q\.U\.B\.E|Pinstripe|Watch This|Ancient Planet Tower Defense|Atlantis|The Free Ones|Dead Secret|The Bard\'s Tale|Lock Parsing 2|^Dungeons$|Dungeons 2|Dungeons 3|Dungeons Bundle|Among the Sleep|The Surge|observer_|Distrust|Tokyo 42|Rain World|Beholder|Ignorance is Strength|Elegy for a Dead World|Owlboy|FarSky|King\'s Bounty|Stacking|Dungeon Siege|Ceville|Hard Reset Redux|Antichamber|20181027|Rebel Galaxy|Kentucky Route Zero|Old Man\'s Journey|Gremlins, Inc|Back from Hell|The Sexy Brutale|LISA|We Were Here Too|Hollow Knight|Darkest Dungeon|The Old City|Yesterday Origins|Super Cloudbuilt|Black The Fall|Moon Hunters|Bird Game|^Silence$|Shadow Man|Monstrum|Skullgirls|Forward to the Sky|Sam & Max|Prophour23|STAR WARS|Star Wars|Battle Chef|Original Journey|20180917|BloodRayne|The Final Station|Monaco|BioShock|Serial Cleaner|Gunpoint|The Tiny Bang Story|Just Cause|SOMA|Torment|Little Nightmares|Figment|The Journey Down|Staxel|Dishonored|Pathologic|Mark of the Ninja|FTL: Faster Than Light|The Music Machine|The Longest Journey|Beat The Game|Lost In Space|Meadow|Oknytt|Darksiders|Far Cry|SAWKOBAN|20180907|Bridge Constructor Portal|The Void|Thirty Flights|Rust|The Long Journey Home|Wasteland|Shadow Tactics|The Floor is Jelly|Good Robot|Cloudbuilt|Resident Evil|Wizardry|Turok|RUNNING WITH RIFLES|DreadOut|RimWorld|Sudeki|GemCraft|We Are The Dwarves|Deployment|Ultimate General|How to Survive|White Noise|Dead Age|Mysterium|Teleglitch|35MM|Civilization|Wasteland|GT Legends|Ticket to Ride|Tiltagon|Icewind Dale|Painkiller|Mortal Kombat|Injustice|AER Memories of Old|Worms|Dead by Daylight|Deus Ex|Deadlight|^Bounce$|Turing Test|Kerbal|Heroes of Annihilated Empires|The Walking Dead|MONSTER HUNTER|^DUSK$|Grey Goo|Space Hulk|DuckTales|Larry|Airport Madness|Factorio|Etherlords|Ashes of the Singularity|Sniper Elite|Sins of a Solar Empire|Devil Daggers|Cities in Motion|Broken Sword|12 is Better Than 6|The Wolf Among Us|WRC|Space Pilgrim|This War of Mine|Anomaly|Call of Juarez|Overcooked|Sacred|DISTRAINT|Berseria|Munin|Kona|DOOM|Shuyan|Stronghold|Fallout|Memoria|Unwritten|Into the Breach|Getting Over It|SteamWorld|Risen|XCOM|Sacred|Strife|Oddworld|DARK SOULS|Call of Duty|Dirt Rally|Project CARS|NieR|TellTale|Gray Matter|The Deadly Tower of Monsters|Hotline Miami|Murder Mystery Adventure|Secret Ponchos|Rock of Ages|Chernobyl Commando|rFactor|Ghost Warrior|Samorost|Chronicles of Mystery|I Have No Mouth, and I Must Scream|Frostpunk|Final Fantasy|FINAL FANTASY|Etherlords Bundle|The Gate of Firmament|Styx|Advent Rising|Patent9|Reprisal Universe|Prey|Rune Classic|Lara Croft|Pillars of Eternity|Borderlands|observer|METAL GEAR|Frederic|Dark Souls|Majesty|Windward|Prototype|SUPERHOT|Gorky|Space HUlk|Warhammer|Metal Gear|System Shock|Heroes of Might|Isolation|Song of the Deep|Grand Theft|Endless|Mafia|Syberia|My Name is Addiction|Final Fantasy|DmC|Turmoil|Norwood|Monkey Island|Republique|Zeno Clash|Tacoma|Max Payne|Ryse: Son of Rome|Styx|Cognition|Ken Follet|Toren|Deadlight|Carmageddon|^Collapse$|Grimrock|DiRT Rally|Gabriel Knight|RUINER|Batman|Rainbow Six|Deponia|Force Unleashed|Manhunt|Noire|Doom|Gorky|Serious Sam|Dark Souls|Uncertain|Firewatch');

function isDesired(e) {
    var name = $(e).find('.giveaway__heading__name')[0];
    var result = name !== undefined && desiredTitlesRegexp.test(name.text);
    return result;
}

var nextPageNumber;
(function() {
    'use strict';
    sgStart();
})();

function sgStart() {
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
    addSteamScore();
}

function addSteamScore() {
    $('.giveaway__row-outer-wrap').each(function (i, a) {
        if (!isDesired(a)) {
            var level = $(a).find('.giveaway__column--contributor-level').text();
            if (level.indexOf('2') > 0 || level.indexOf('3') > 0 || level.indexOf('4') > 0 || level.indexOf('5') > 0 || level.indexOf('6') > 0) {
                var url = a.querySelector('i.fa-steam').parentElement.href;
                var hasSteamScoreInfo = a.querySelector('.steamScoreInfo') != null;
                if (!hasSteamScoreInfo) {
                    // adding new element before executing the request to reserve the space
                    // to avoid adding second element before this request completes when quick loading next pages
                    var steamScoreInfo = document.createElement("div");
                    steamScoreInfo.setAttribute("class", "steamScoreInfo");
                    steamScoreInfo.innerHTML = "---";
                    var timeLeftElement = a.querySelector('.fa-clock-o').parentElement;
                    insertAfter(timeLeftElement, steamScoreInfo);
                    GM.xmlHttpRequest({
                        method: "GET",
                        url: url,
                        onload: function(response) {
                            // fill prevoiusly added element with data from the response
                            var index = response.responseText.indexOf('<div class="title">Overall Reviews:</div>');
                            var result = response.responseText.substring(index, index + 200);
                            index = result.indexOf("data-tooltip-html=\"");
                            result = result.substring(index + "data-tooltip-html=\"".length);
                            result = result.substring(0,result.indexOf("\""));
                            result = result.substring(0, result.indexOf(' user'));
                            steamScoreInfo.innerHTML = "&nbsp;" + result;
                        }
                    });
                }
            }
        }
    });
}

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
function insertBefore(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.previousSibling);
}

function addLowcyGierBazarLink() {
    $('.giveaway__heading__name').each(function (index, element) {
        var alreadyHasBazarLink = $(element).nextAll('.bazar').length > 0;
        if (!alreadyHasBazarLink) {
            var gameTitle = element.text.replaceAll('®','').replaceAll('™','').replaceAll(':','').replaceAll('-',' ').replaceAll('—',' ');
            var bazarLink = document.createElement("a");
            bazarLink.innerHTML = '<img src="https://bazar.lowcygier.pl/favicon.ico" style="height:20px"/>'
            bazarLink.classList.add('bazar');
            bazarLink.setAttribute("href", "https://bazar.lowcygier.pl/?options=&type=&platform=&payment=&game_type=&game_genre=&title=" + gameTitle + "&sort=-created_at&per-page=25");
            $(element).parent().append(bazarLink);
        }
    });
}

// ustawia początkowy numer kolejnej strony na podstawie numeru obecnej
function sgSetNextPageNumber() {
    var currentPageNumber = getQueryVariable('page');
    // alert(currentPageNumber);
    nextPageNumber = parseInt(currentPageNumber) + 1;
}

function sgShowPromoted() {
    // rozwijam zwinięte giveawaye, bo po moim sortowaniu trafią tam te najciekawsze
    $('.pinned-giveaways__inner-wrap--minimized').removeClass('pinned-giveaways__inner-wrap--minimized');
}

function sgSort() {
    // alert('sgSort');
    // var start = new Date().getTime();

    $container = $('.giveaway__row-outer-wrap:first').parent();

    $('.separator').removeClass("separator");

    // więcej niż 1 kopia(posiada tekst "Copies") do przodu
    $('.giveaway__row-outer-wrap').each(function (i, a) {
        console.log($(a));
        // debugger;
        $(a).find('.giveaway__heading__thin').each(function (n, b) {
            var isCopiesElement = $(b).text().indexOf("Copies") != -1;
            if (isCopiesElement &&!isDesired(a)) {
                $container.prepend(a);
            }
        });
        console.log($(a));
    });

    // level 1 do przodu
    $('.giveaway__row-outer-wrap').each(function (i, a) {
        if (!isDesired(a) && $(a).find('.giveaway__column--contributor-level').text().indexOf('1') > 0 ) {
            $container.prepend(a);
        }
    });

    // level 2 do przodu
    $('.giveaway__row-outer-wrap').each(function (i, a) {
        if (!isDesired(a) && $(a).find('.giveaway__column--contributor-level').text().indexOf('2') > 0 ) {
            $container.prepend(a);
        }
    });

    // level 3 do przodu
    $('.giveaway__row-outer-wrap').each(function (i, a) {
        if (!isDesired(a) && $(a).find('.giveaway__column--contributor-level').text().indexOf('3') > 0 ) {
            $container.prepend(a);
        }
    });

    // level 4 do przodu
    $('.giveaway__row-outer-wrap').each(function (i, a) {
        if (!isDesired(a) && $(a).find('.giveaway__column--contributor-level').text().indexOf('4') > 0 ) {
            $container.prepend(a);
        }
    });



    // WSZYSTKIE poszukiwane tytuły do przodu
    $('.giveaway__row-outer-wrap').each(function (i, a) {
        if (isDesired(a)) {
            $container.prepend(a);
        }
    });

    // POSZUKIWANE LEVELE do przodu
    // poszukiwany level 1 do przodu
    $('.giveaway__row-outer-wrap').each(function (i, a) {
        if (isDesired(a) && $(a).find('.giveaway__column--contributor-level').text().indexOf('1') > 0 ) {
            $container.prepend(a);
        }
    });

    // poszukiwany level 2 do przodu
    $('.giveaway__row-outer-wrap').each(function (i, a) {
        if (isDesired(a) && $(a).find('.giveaway__column--contributor-level').text().indexOf('2') > 0 ) {
            $container.prepend(a);
        }
    });

    // poszukiwany level 3 do przodu
    $('.giveaway__row-outer-wrap').each(function (i, a) {
        if (isDesired(a) && $(a).find('.giveaway__column--contributor-level').text().indexOf('3') > 0 ) {
            $container.prepend(a);
        }
    });

    // poszukiwany level 4 do przodu
    $('.giveaway__row-outer-wrap').each(function (i, a) {
        if (isDesired(a) && $(a).find('.giveaway__column--contributor-level').text().indexOf('4') > 0 ) {
            $container.prepend(a);
        }
    });

    // poszukiwany level 5 do przodu
    $('.giveaway__row-outer-wrap').each(function (i, a) {
        if (isDesired(a) && $(a).find('.giveaway__column--contributor-level').text().indexOf('5') > 0 ) {
            $container.prepend(a);
        }
    });

    // poszukiwany level 6 do przodu
    $('.giveaway__row-outer-wrap').each(function (i, a) {
        if (isDesired(a) && $(a).find('.giveaway__column--contributor-level').text().indexOf('6') > 0 ) {
            $container.prepend(a);
        }
    });

    // oddzielam nieznane tytuły z dużym levelem od znanych
    $('.giveaway__row-outer-wrap').first().addClass('separator');


    // level 5 do przodu
    $('.giveaway__row-outer-wrap').each(function (i, a) {
        if (!isDesired(a) && $(a).find('.giveaway__column--contributor-level').text().indexOf('5') > 0 ) {
            $container.prepend(a);
        }
    });

    // level 6 do przodu
    $('.giveaway__row-outer-wrap').each(function (i, a) {
        if (!isDesired(a) && $(a).find('.giveaway__column--contributor-level').text().indexOf('6') > 0 ) {
            $container.prepend(a);
        }
    });

    // var end = new Date().getTime();
    // alert("Sorted in " + (end-start) + "ms");
}

function blockButton() {
    var button = $('#nextPageButton').first();
    button.css('text-decoration','line-through');
    button.attr('disabled','');
}

function unblockButton() {
    var button = $('#nextPageButton').first();
    button.css('text-decoration','');
    button.removeAttr('disabled');
}

function sgLoadAnotherPage1() {
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
            addSteamScore();
        }
    } );
}

// poprawki wizualne czcionek na stronie
function sgBetterFonts() {
    // alert("sgBetterFonts");

    // zwiększam czcionkę dla Level 234+
    var values = document.querySelectorAll("div[title='Contributor Level']");
    // alert(values.length);
    for (var i = 0; i < values.length; ++i) {
        var item = values[i];
        if (item.innerHTML.indexOf('6+') > 0) {
            item.style="font-size: 24px;";
        } else if (item.innerHTML.indexOf('5+') > 0) {
            item.style="font-size: 22px;";
        } else if (item.innerHTML.indexOf('4+') > 0) {
            item.style="font-size: 20px;";
        } else if (item.innerHTML.indexOf('3+') > 0) {
            item.style="font-size: 16px;";
        } else if (item.innerHTML.indexOf('2+') > 0) {
            item.style="font-size: 14px;";
        }
    }
    // pogrubiam jeśli więcej kopii
    values = document.querySelectorAll(".giveaway__heading__thin");
    // alert(values.length);
    for (var i = 0; i < values.length; ++i) {
        var item = values[i];
        if (item.innerHTML.indexOf('opies') > 0) {
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
    removeEnteredButton.setAttribute("style", "width:20% ; margin-bottom:8px");
    removeEnteredButton.setAttribute("value", "removeEntered");
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
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {return pair[1];}
    }
    return(1);
}

function drawEntriesBarForMainPage() {
    var cells = document.querySelectorAll("a>i.fa-tag+span");
    for(var i = 0; i < cells.length; i++) {
        var number = parseInt(cells[i].innerText.replace(",",""));
        var sizeInPx = number / 10;
        cells[i].parentElement.parentElement.style = "background: url(https://krystiangorecki.github.io/20x20_FFC5C5.png);  background-size: " + sizeInPx + "px 100px;  background-repeat: no-repeat;";
    }
}
//alert('full script loaded');
