import React from "react";
import DiceRoller from "../DiceRoller/DiceRoller";
import "./RandomEncounters.css";

class RandomEncounterGenerator extends React.Component {
    constructor(props) {
        super(props);
        this.state = { result: null, area: "Ruins", encounter: null };
        this.resultMap = {
            "Ruins": {
                "1-5": "Apes",
                "6-10": "Baboons",
                "11-15": "Cannibals",
                "16-20": "Dragon, faerie",
                "21-25": "Gargoyles",
                "26-30": "Giant wasps",
                "31-35": "Giant wolf spiders",
                "36-40": "Goblins",
                "41-45": "Grungs",
                "46-50": "King of Feathers",
                "51-55": "Kobolds",
                "56-60": "Red Wizard",
                "61-65": "Shambling mound",
                "66-70": "Su-monsters",
                "71-75": "Tabaxi hunter",
                "76-80": "Undead, ghouls",
                "81-85": "Undead, zombies",
                "86-90": "Vegepygmies",
                "91-95": "Yellow musk creeper and yellow musk zombies",
                "96-100": "Yuan-ti"
            },
            "Palace": {
                "1-10": "Baboons",
                "11-15": "Dragon, faerie",
                "16-25": "Gargoyles",
                "26-35": "Giant wolf spiders",
                "36-40": "Goblins",
                "41-50": "King of Feathers",
                "51-60": "Kobolds",
                "61-70": "Red Wizard",
                "71-75": "Su-monsters",
                "76-80": "Tabaxi hunter",
                "81-90": "Yellow musk creeper and yellow musk zombies",
                "91-100": "Yuan-ti"
            },
            "Swamp": {
                "1-10": "Crocodiles",
                "11-15": "Gargoyles",
                "16-25": "Giant wasps",
                "26-35": "Grungs",
                "36-50": "King of Feathers",
                "51-60": "Shambling mound",
                "61-65": "Undead, ghouls",
                "66-70": "Undead, zombies",
                "71-80": "Vegepygmies",
                "81-90": "Yellow musk creeper and yellow musk zombies",
                "91-100": "Yuan-ti"
            }
        }
        this.encounterMap = {
            "Apes": [
                <p class="Core-Styles_Core-Body">The characters stumble upon 2d4 <a class="tooltip-hover monster-tooltip" href="https://www.dndbeyond.com/monsters/ape" data-tooltip-href="//www.dndbeyond.com/monsters/16788-tooltip?disable-webm=1&amp;disable-webm=1">apes</a> enjoying some excellent fruit. The apes feel threatened and show signs of defending their food. If the characters immediately back away slowly, the apes do nothing but make threatening displays. Otherwise, they attack.</p>
            ],
            "Baboons": [
                <p class="Core-Styles_Core-Body">A pack of 3d6 <a class="tooltip-hover monster-tooltip" href="https://www.dndbeyond.com/monsters/baboon" data-tooltip-href="//www.dndbeyond.com/monsters/16795-tooltip?disable-webm=1&amp;disable-webm=1">baboons</a> take umbrage at the characters’ intrusion. The baboons can be distracted by tossing each of them a day’s supply of food. Otherwise, they attack.</p>
            ],
            "Cannibals": [
                <p class="Core-Styles_Core-Body">Chultan cannibals prowl the jungles in small groups, killing and eating zombies while avoiding faster, more dangerous undead. Abandoned by their gods, the cannibals have turned to the worship of Dendar the Night Serpent and pay tribute to Ras Nsi in exchange for his favor and protection. They paint a blue triangle (Ras Nsi’s symbol) on their foreheads as proof of their devotion and are known to venture into Omu to hunt and deliver tribute.</p>,
                <p class="Core-Styles_Core-Body">If this encounter occurs during the day, the characters spot 3d6 <a class="tooltip-hover monster-tooltip" href="https://www.dndbeyond.com/monsters/tribal-warrior" data-tooltip-href="//www.dndbeyond.com/monsters/17038-tooltip?disable-webm=1&amp;disable-webm=1">tribal warriors</a> feeding on the rotting remains of a dismembered zombie. If the characters remain quiet and keep their distance, they can move away without being noticed by the cannibals.</p>,
                <p class="Core-Styles_Core-Body">If this encounter occurs at night, 3d6 <a class="tooltip-hover monster-tooltip" href="https://www.dndbeyond.com/monsters/tribal-warrior" data-tooltip-href="//www.dndbeyond.com/monsters/17038-tooltip?disable-webm=1&amp;disable-webm=1">tribal warriors</a> try to sneak into the adventurers’ camp and murder them. Any character on guard is warned of the attack with a successful DC 10 Wisdom (<a class="tooltip-hover skill-tooltip" href="https://www.dndbeyond.com/compendium/rules/basic-rules/using-ability-scores#Perception" data-tooltip-href="//www.dndbeyond.com/skills/14-tooltip?disable-webm=1&amp;disable-webm=1">Perception</a>) check.</p>
            ],
            "Crocodiles": [
                <p class="Core-Styles_Core-Body">Any character with a passive Wisdom (<a class="tooltip-hover skill-tooltip" href="https://www.dndbeyond.com/compendium/rules/basic-rules/using-ability-scores#Perception" data-tooltip-href="//www.dndbeyond.com/skills/14-tooltip?disable-webm=1&amp;disable-webm=1">Perception</a>) score of 12 or higher sees and hears 1d4 + 1 <a class="tooltip-hover monster-tooltip" href="https://www.dndbeyond.com/monsters/crocodile" data-tooltip-href="//www.dndbeyond.com/monsters/16834-tooltip?disable-webm=1&amp;disable-webm=1">crocodiles</a> moments before they attack; all other characters are surprised. A crocodile can capsize a canoe and throw its occupants into the water by using its action and succeeding on a DC 15 Strength (<a class="tooltip-hover skill-tooltip" href="https://www.dndbeyond.com/compendium/rules/basic-rules/using-ability-scores#Athletics" data-tooltip-href="//www.dndbeyond.com/skills/2-tooltip?disable-webm=1&amp;disable-webm=1">Athletics</a>) check.</p>
            ],
            "Dragon, faerie": [
                <p class="Core-Styles_Core-Body">An <a class="tooltip-hover condition-tooltip" href="https://www.dndbeyond.com/compendium/rules/basic-rules/appendix-a-conditions#Invisible" data-tooltip-href="//www.dndbeyond.com/conditions/8-tooltip?disable-webm=1&amp;disable-webm=1">invisible</a> green <a class="tooltip-hover monster-tooltip" href="https://www.dndbeyond.com/monsters/faerie-dragon-older" data-tooltip-href="//www.dndbeyond.com/monsters/17108-tooltip?disable-webm=1&amp;disable-webm=1">faerie dragon</a> takes an interest in the adventurers and follows them for a while. If the characters are in good spirits, the tiny dragon plays harmless pranks on them during the party’s next short or long rest. If the characters are not angered by this trickery, the dragon appears and truthfully answers three of their questions before bidding the party farewell. If the characters seem dour or mean, or if the faerie dragon’s pranks sour them, it flutters off without providing any sort of aid.</p>,
                <p class="Core-Styles_Core-Body">The faerie dragon visited Omu recently and knows about the evil gargoyles and “snake people” that watch over the city. It also knows things about other nearby landmarks or locations, as you determine.</p>
            ],
            "Gargoyles": [
                <p class="Core-Styles_Core-Body">The faerie dragon visited Omu recently and knows about the evil gargoyles and “snake people” that watch over the city. It also knows things about other nearby landmarks or locations, as you determine.</p>
            ],
            "Giant wasps": [
                <p class="Core-Styles_Core-Body">A droning sound announces the presence of 1d6 <a class="tooltip-hover monster-tooltip" href="https://www.dndbeyond.com/monsters/giant-wasp" data-tooltip-href="//www.dndbeyond.com/monsters/16898-tooltip?disable-webm=1&amp;disable-webm=1">giant wasps</a> before the characters see them. The wasps attack at once, ignoring heavily armored targets in favor of those with little or no defensive protection. At the end of the encounter, any character damaged by a giant wasp must succeed on a DC 11 Constitution saving throw or become infected with shivering sickness (see “<a href="https://www.dndbeyond.com/sources/toa/the-land-of-chult#Diseases" data-content-chunk-id="a6c6f31e-8324-442a-9946-4c7cf58fa7dd">Diseases</a>”).</p>
            ],
            "Giant wolf spiders": [
                <p class="Core-Styles_Core-Body">The characters are attacked by 1d6 <a class="tooltip-hover monster-tooltip" href="https://www.dndbeyond.com/monsters/giant-wolf-spider" data-tooltip-href="//www.dndbeyond.com/monsters/16900-tooltip?disable-webm=1&amp;disable-webm=1">giant wolf spiders</a> living in hidey-holes in the nearby ruins. A search of the spiders’ lair might yield treasure; roll once on the <a title="Treasure Drops table" href="#TreasureDrops" data-content-chunk-id="26594a53-faa7-4788-b4f8-b31e905adfba">Treasure Drops table</a> to determine what, if anything, is found.</p>
            ],
            "Goblins": [
                <p class="Core-Styles_Core-Body">A typical Batiri patrol or hunting party consists of a <a class="tooltip-hover monster-tooltip" href="https://www.dndbeyond.com/monsters/goblin-boss" data-tooltip-href="//www.dndbeyond.com/monsters/17155-tooltip?disable-webm=1&amp;disable-webm=1">goblin boss</a> leading 2d6 + 3 <a class="tooltip-hover monster-tooltip" href="https://www.dndbeyond.com/monsters/goblin" data-tooltip-href="//www.dndbeyond.com/monsters/16907-tooltip?disable-webm=1&amp;disable-webm=1">goblins</a>, all wearing painted wooden masks. They move quietly through familiar areas and seldom range outside their home territory. Batiri prefer to hunt at night and lay low in ambush positions during the day.</p>,
                <p class="Core-Styles_Core-Body">A night encounter with Batiri goblins involves an attack on the characters’ camp. Each party member standing watch must attempt a DC 16 Wisdom (<a class="tooltip-hover skill-tooltip" href="https://www.dndbeyond.com/compendium/rules/basic-rules/using-ability-scores#Perception" data-tooltip-href="//www.dndbeyond.com/skills/14-tooltip?disable-webm=1&amp;disable-webm=1">Perception</a>) check, made with disadvantage because of the noise of the jungle at night. On a success, a character detects the goblins moving into attack positions and can rouse the rest of the party. If no one on watch succeeds on the check, all the characters are surprised.</p>,
                <p class="Core-Styles_Core-Body">If this encounter occurs while the characters are traveling during the day, have each party member make a DC 16 Wisdom (<a class="tooltip-hover skill-tooltip" href="https://www.dndbeyond.com/compendium/rules/basic-rules/using-ability-scores#Perception" data-tooltip-href="//www.dndbeyond.com/skills/14-tooltip?disable-webm=1&amp;disable-webm=1">Perception</a> or <a class="tooltip-hover skill-tooltip" href="https://www.dndbeyond.com/compendium/rules/basic-rules/using-ability-scores#Survival" data-tooltip-href="//www.dndbeyond.com/skills/15-tooltip?disable-webm=1&amp;disable-webm=1">Survival</a>) check to spot the telltale signs of an ambush: disadvantageous terrain coupled with an eerie silence not normal for the jungle.</p>,
                <p class="Core-Styles_Core-Body">Goblins bargain for their lives if captured. If the characters can force or coerce a vow of cooperation from goblin prisoners, the Batiri will serve as guides. They have the following additional skill: <a class="tooltip-hover skill-tooltip" href="https://www.dndbeyond.com/compendium/rules/basic-rules/using-ability-scores#Survival" data-tooltip-href="//www.dndbeyond.com/skills/15-tooltip?disable-webm=1&amp;disable-webm=1">Survival</a> +1.</p>
            ],
            "Grungs": [
                <p class="Core-Styles_Core-Body">A grung hunting party consists of 2d6 <a class="tooltip-hover monster-tooltip" href="https://www.dndbeyond.com/monsters/grung" data-tooltip-href="//www.dndbeyond.com/monsters/17262-tooltip?disable-webm=1&amp;disable-webm=1">grungs</a> led by a <a class="tooltip-hover monster-tooltip" href="https://www.dndbeyond.com/monsters/grung-elite-warrior" data-tooltip-href="//www.dndbeyond.com/monsters/17263-tooltip?disable-webm=1&amp;disable-webm=1">grung elite warrior</a> (see <a href="https://www.dndbeyond.com/sources/toa/monsters-and-npcs#Grungs" data-content-chunk-id="a76a6a09-de3f-4a38-8dd8-282a1fe6dcc1">appendix D</a> for both). If this encounter occurs while the characters are traveling, the grungs have set up an ambush in the trees. Any character with a passive Wisdom (<a class="tooltip-hover skill-tooltip" href="https://www.dndbeyond.com/compendium/rules/basic-rules/using-ability-scores#Perception" data-tooltip-href="//www.dndbeyond.com/skills/14-tooltip?disable-webm=1&amp;disable-webm=1">Perception</a>) score of 14 or higher spots them just in time. All other characters are surprised.</p>,
                <p class="Core-Styles_Core-Body">If this encounter occurs while the party is camped, the grungs spotted the characters earlier in the day and have shadowed them unseen. Each character standing watch must succeed on a DC 14 Wisdom (<a class="tooltip-hover skill-tooltip" href="https://www.dndbeyond.com/compendium/rules/basic-rules/using-ability-scores#Perception" data-tooltip-href="//www.dndbeyond.com/skills/14-tooltip?disable-webm=1&amp;disable-webm=1">Perception</a>) check, made with disadvantage because of the noise of the jungle at night. On a success, a character detects the encroaching grungs and can rouse the rest of the party. If no one on watch succeeds on the check, all the characters are surprised.</p>,
                <p class="Core-Styles_Core-Body">If the characters capture one or more grungs, the frogfolk offer to lead the characters to treasure in exchange for a promise of freedom. The “treasure” is a half-mile away from the party’s present location and consists of a cache, which you can randomly determine by rolling on the <a title="Caches table" href="#Caches" data-content-chunk-id="5467c425-b8c5-492f-ab37-5843ebea5df0">Caches table</a>.</p>
            ],
            "King of Feathers": [
                <p class="Core-Styles_Core-Body">The characters encounter the tyrannosaurus rex known as the King of Feathers. See <a href="https://www.dndbeyond.com/sources/toa/dwellers-of-the-forbidden-city#HailtotheKing" data-content-chunk-id="4e91a2e9-a394-4698-a342-435c8f6c295d">chapter 3</a> for more information on this unique beast.</p>
            ],
            "Kobolds": [
                <p class="Core-Styles_Core-Body">Moving through the city or palace ruins are 1d4 + 1 <a class="tooltip-hover monster-tooltip" href="https://www.dndbeyond.com/monsters/kobold" data-tooltip-href="//www.dndbeyond.com/monsters/16939-tooltip?disable-webm=1&amp;disable-webm=1">kobolds</a> led by a <a class="tooltip-hover monster-tooltip" href="https://www.dndbeyond.com/monsters/kobold-inventor" data-tooltip-href="//www.dndbeyond.com/monsters/17277-tooltip?disable-webm=1&amp;disable-webm=1">kobold inventor</a> (see <a href="https://www.dndbeyond.com/sources/toa/monsters-and-npcs#Kobolds" data-content-chunk-id="4e36e9f7-45a0-4603-ac72-129b03b59bd8">appendix D</a>). Characters with a passive Wisdom (<a class="tooltip-hover skill-tooltip" href="https://www.dndbeyond.com/compendium/rules/basic-rules/using-ability-scores#Perception" data-tooltip-href="//www.dndbeyond.com/skills/14-tooltip?disable-webm=1&amp;disable-webm=1">Perception</a>) score of 12 or higher spot the kobolds, which flee if approached or attacked. The kobolds serve the kobold scale sorcerer Kakarol (see <a href="https://www.dndbeyond.com/sources/toa/dwellers-of-the-forbidden-city#KoboldCellars" data-content-chunk-id="cde9a3b9-88eb-4a69-ae2d-4157fda8f6ca">chapter 3</a>). They might be on their way to one of the city’s shrines to reset its traps, or they might be returning to their lair with a recently discovered treasure. Roll once on the <a title="Treasure Drops table" href="#TreasureDrops" data-content-chunk-id="a45e6e3c-da95-4d1a-afc5-d641494ffacb">Treasure Drops table</a> to determine what, if anything, the kobolds found.</p>
            ],
            "Red Wizard": [
                <p class="Core-Styles_Core-Body">This group consists of a Red Wizard (LE male or female Thayan human <a class="tooltip-hover monster-tooltip" href="https://www.dndbeyond.com/monsters/mage" data-tooltip-href="//www.dndbeyond.com/monsters/16947-tooltip?disable-webm=1&amp;disable-webm=1">mage</a>), 1d6 <a class="tooltip-hover monster-tooltip" href="https://www.dndbeyond.com/monsters/guard" data-tooltip-href="//www.dndbeyond.com/monsters/16915-tooltip?disable-webm=1&amp;disable-webm=1">guards</a>, and 1d6 <a class="tooltip-hover monster-tooltip" href="https://www.dndbeyond.com/monsters/skeleton" data-tooltip-href="//www.dndbeyond.com/monsters/17015-tooltip?disable-webm=1&amp;disable-webm=1">skeletons</a>, all answerable to Valindra Shadowmantle (see “<a href="https://www.dndbeyond.com/sources/toa/the-land-of-chult#HeartofUbtao" data-content-chunk-id="2866dc1e-7f89-4bf9-9ca9-060ab3e2ebd0">Heart of Ubtao</a>”). If this encounter occurs outside of Omu, these reinforcements are on their way to the city. If the encounter takes place in Omu, the Red Wizard is searching the city for shrines (see <a href="https://www.dndbeyond.com/sources/toa/dwellers-of-the-forbidden-city#RedWizardsofThay" data-content-chunk-id="548a789d-d416-4858-bab4-1dff7bac4801">chapter 3</a>). The Thayans aren’t spoiling for a fight; if defeat seems inevitable, the Red Wizard surrenders and offers a crude map of Chult marking the regions occupied by undead (see map 2.1). The characters can use the map to steer clear of these regions.</p>
            ],
            "Shambling mound": [
                <p class="Core-Styles_Core-Body">Roll any die when a <a class="tooltip-hover monster-tooltip" href="https://www.dndbeyond.com/monsters/shambling-mound" data-tooltip-href="//www.dndbeyond.com/monsters/17011-tooltip?disable-webm=1&amp;disable-webm=1">shambling mound</a> encounter occurs. On an even result, the characters hear the creature trudging through the muck before it attacks them. On an odd result, the shambling mound lurks within a mass of vegetation, where it can be noticed by any character with a passive Wisdom (<a class="tooltip-hover skill-tooltip" href="https://www.dndbeyond.com/compendium/rules/basic-rules/using-ability-scores#Perception" data-tooltip-href="//www.dndbeyond.com/skills/14-tooltip?disable-webm=1&amp;disable-webm=1">Perception</a>) score of 15 or higher.</p>
            ],
            "Su-monsters": [
                <p class="Core-Styles_Core-Body">The party comes across 1d4 + 1 <a class="tooltip-hover monster-tooltip" href="https://www.dndbeyond.com/monsters/su-monster" data-tooltip-href="//www.dndbeyond.com/monsters/33257-tooltip?disable-webm=1&amp;disable-webm=1">su-monsters</a> (see <a href="https://www.dndbeyond.com/sources/toa/monsters-and-npcs#Sumonster" data-content-chunk-id="06da23f1-8aef-4ec8-a14c-e029aac1c4ba">appendix D</a>). The su-monsters approach cautiously, feigning curiosity. If allowed to get close, each su-monster uses its Psychic Crush in the hope of stunning an adventurer before attacking with its bite and claws. The su-monsters flee to their treetop lairs if the fight goes against them.</p>,
                <p class="Core-Styles_Core-Body">The su-monsters might have treasure stashed in one of their trees; roll once on the <a title="Treasure Drops table" href="#TreasureDrops" data-content-chunk-id="8cd85535-2405-4c93-bcbf-d936df913913">Treasure Drops table</a> to determine what, if anything, a search of the tree yields.</p>
            ],
            "Tabaxi hunter": [
                <p class="Core-Styles_Core-Body">Any character with a passive Wisdom (<a class="tooltip-hover skill-tooltip" href="https://www.dndbeyond.com/compendium/rules/basic-rules/using-ability-scores#Perception" data-tooltip-href="//www.dndbeyond.com/skills/14-tooltip?disable-webm=1&amp;disable-webm=1">Perception</a>) score of 15 or higher spots a <a class="tooltip-hover monster-tooltip" href="https://www.dndbeyond.com/monsters/tabaxi-hunter" data-tooltip-href="//www.dndbeyond.com/monsters/33259-tooltip?disable-webm=1&amp;disable-webm=1">tabaxi hunter</a> (see <a href="https://www.dndbeyond.com/sources/toa/monsters-and-npcs#Tabaxi" data-content-chunk-id="f205d0d4-64d3-4d51-83dd-0f92e3dfdd62">appendix D</a>) watching the party from a vantage point 300 feet away. If the tabaxi goes unseen, it might shadow the characters for a while, then suddenly appear to help them fight off a tough encounter or warn them of danger in the vicinity.</p>,
                <p class="Core-Styles_Core-Body">If this encounter takes place in Omu, see <a href="https://www.dndbeyond.com/sources/toa/dwellers-of-the-forbidden-city#TabaxiHunters" data-content-chunk-id="e16cbbda-7f39-4830-97a4-b9450d22b362">chapter 3</a> for more information on the tabaxi hunters found there.</p>
            ],
            "Undead, ghouls": [
                <p id="UndeadGhouls" class="Core-Styles_Core-Body"><span class="Serif-Character-Style_Bold-Italic-Serif" data-content-chunk-id="88a7e507-54da-4772-a39c-86aa03c83ba4">Ghouls.</span> Any character with a passive Wisdom (<a class="tooltip-hover skill-tooltip" href="https://www.dndbeyond.com/compendium/rules/basic-rules/using-ability-scores#Perception" data-tooltip-href="//www.dndbeyond.com/skills/14-tooltip?disable-webm=1&amp;disable-webm=1">Perception</a>) score of 12 or higher hears and smells a ghoul pack approaching, consisting of 2d6 <a class="tooltip-hover monster-tooltip" href="https://www.dndbeyond.com/monsters/ghoul" data-tooltip-href="//www.dndbeyond.com/monsters/16872-tooltip?disable-webm=1&amp;disable-webm=1">ghouls</a> led by a <a class="tooltip-hover monster-tooltip" href="https://www.dndbeyond.com/monsters/ghast" data-tooltip-href="//www.dndbeyond.com/monsters/16870-tooltip?disable-webm=1&amp;disable-webm=1">ghast</a>. The ghast has a blue triangle tattooed on its forehead — an indicator that it once served Ras Nsi.</p>
            ],
            "Undead, zombies": [
                <p id="UndeadZombies" class="Core-Styles_Core-Body"><span class="Serif-Character-Style_Bold-Italic-Serif" data-content-chunk-id="5628cbc9-e4fd-412f-ab02-549362fb1ef6">Zombies.</span> Characters catch the scent of death on the air and hear the undead lumbering through the jungle. Roll a d10 to determine what appears:</p>,
                <blockquote class="compendium-basic-text-blockquote">
                    <p class="Core-Styles_Core-Hanging"><span class="Serif-Character-Style_Bold-Serif">1–3.</span> 3d6 <span class="Sans-Serif-Character-Styles_Bold-Sans-Serif"><a class="tooltip-hover monster-tooltip" href="https://www.dndbeyond.com/monsters/zombie" data-tooltip-href="//www.dndbeyond.com/monsters/17077-tooltip?disable-webm=1&amp;disable-webm=1">zombies</a></span></p>
                    <p class="Core-Styles_Core-Hanging"><span class="Serif-Character-Style_Bold-Serif">4–5.</span> 1 <span class="Sans-Serif-Character-Styles_Bold-Sans-Serif"><a class="tooltip-hover monster-tooltip" href="https://www.dndbeyond.com/monsters/ankylosaurus-zombie" data-tooltip-href="//www.dndbeyond.com/monsters/33282-tooltip?disable-webm=1&amp;disable-webm=1">ankylosaurus zombie</a></span> (see <a href="https://www.dndbeyond.com/sources/toa/monsters-and-npcs#Zombies">appendix D</a>)</p>
                    <p class="Core-Styles_Core-Hanging"><span class="Serif-Character-Style_Bold-Serif">6–7.</span> 1d4 <span class="Sans-Serif-Character-Styles_Bold-Sans-Serif"><a class="tooltip-hover monster-tooltip" href="https://www.dndbeyond.com/monsters/girallon-zombie" data-tooltip-href="//www.dndbeyond.com/monsters/33284-tooltip?disable-webm=1&amp;disable-webm=1">girallon zombies</a></span> (see <a href="https://www.dndbeyond.com/sources/toa/monsters-and-npcs#Zombies">appendix D</a>)</p>
                    <p class="Core-Styles_Core-Hanging"><span class="Serif-Character-Style_Bold-Serif">8–9.</span> 1d4 <span class="Sans-Serif-Character-Styles_Bold-Sans-Serif"><a class="tooltip-hover monster-tooltip" href="https://www.dndbeyond.com/monsters/ogre-zombie" data-tooltip-href="//www.dndbeyond.com/monsters/16970-tooltip?disable-webm=1&amp;disable-webm=1">ogre zombies</a></span></p>
                    <p class="Core-Styles_Core-Hanging"><span class="Serif-Character-Style_Bold-Serif">10.</span> 1 <span class="Sans-Serif-Character-Styles_Bold-Sans-Serif"><a class="tooltip-hover monster-tooltip" href="https://www.dndbeyond.com/monsters/tyrannosaurus-zombie" data-tooltip-href="//www.dndbeyond.com/monsters/33286-tooltip?disable-webm=1&amp;disable-webm=1">tyrannosaurus zombie</a></span> (see <a href="https://www.dndbeyond.com/sources/toa/monsters-and-npcs#Zombies">appendix D</a>)</p>
                </blockquote>
            ],
            "Vegepygmies": [
                <p class="Core-Styles_Core-Body">The characters cross paths with 1d4 <a class="tooltip-hover monster-tooltip" href="https://www.dndbeyond.com/monsters/vegepygmy" data-tooltip-href="//www.dndbeyond.com/monsters/17308-tooltip?disable-webm=1&amp;disable-webm=1">vegepygmies</a>, each one mounted on a <a class="tooltip-hover monster-tooltip" href="https://www.dndbeyond.com/monsters/thorny" data-tooltip-href="//www.dndbeyond.com/monsters/17310-tooltip?disable-webm=1&amp;disable-webm=1">thorny</a> (see <a href="https://www.dndbeyond.com/sources/toa/monsters-and-npcs#Vegepygmies">appendix D</a> for both). These vegepygmy hunters have wandered far from their tribe. They flee if outnumbered; otherwise, they attack.</p>
            ],
            "Yellow musk creeper and yellow musk zombies": [
                <p class="Core-Styles_Core-Body">The characters pass close to a ruin inhabited by 3d6 <a class="tooltip-hover monster-tooltip" href="https://www.dndbeyond.com/monsters/yellow-musk-zombie" data-tooltip-href="//www.dndbeyond.com/monsters/33277-tooltip?disable-webm=1&amp;disable-webm=1">yellow musk zombies</a> (see <a href="https://www.dndbeyond.com/sources/toa/monsters-and-npcs#YellowMuskCreeperandZombie" data-content-chunk-id="b443fb48-ff7c-48af-8d3b-96029ea44b0e">appendix D</a>). The zombies might be spread across the area or bunched together, depending on the terrain. In the heart of the ruin, a<span class="Serif-Character-Style_Bold-Serif"> <a class="tooltip-hover monster-tooltip" href="https://www.dndbeyond.com/monsters/yellow-musk-creeper" data-tooltip-href="//www.dndbeyond.com/monsters/33275-tooltip?disable-webm=1&amp;disable-webm=1">yellow musk creeper</a></span> (see <a href="https://www.dndbeyond.com/sources/toa/monsters-and-npcs#YellowMuskCreeperandZombie">appendix D</a>) clings to a crumbling archway, statue, or polluted well.</p>,
                <p class="Core-Styles_Core-Body">If this encounter occurs while the party is camped, the zombies emerge from a nearby ruin to attack the camp and attempt to knock characters <a class="tooltip-hover condition-tooltip" href="/compendium/rules/basic-rules/appendix-a-conditions#Unconscious" data-tooltip-href="//www.dndbeyond.com/conditions/15-tooltip?disable-webm=1&amp;disable-webm=1">unconscious</a>. They then drag those characters back to the yellow musk creeper.</p>
            ],
            "Yuan-ti": [
                <p class="Core-Styles_Core-Body">Yuan-ti patrols consist of 1d6 + 1 <a class="tooltip-hover monster-tooltip" href="https://www.dndbeyond.com/monsters/yuan-ti-pureblood" data-tooltip-href="//www.dndbeyond.com/monsters/17123-tooltip?disable-webm=1&amp;disable-webm=1">yuan-ti purebloods</a>, which keep their distance as they try to gather information to take back to Ras Nsi. The yuan-ti are camouflaged, but any character who succeeds on a DC 13 Wisdom (<a class="tooltip-hover skill-tooltip" href="https://www.dndbeyond.com/compendium/rules/basic-rules/using-ability-scores#Perception" data-tooltip-href="//www.dndbeyond.com/skills/14-tooltip?disable-webm=1&amp;disable-webm=1">Perception</a>) check made with disadvantage catches sight of the serpent folk as they withdraw.</p>,
                <p class="Core-Styles_Core-Body">If this encounter occurs within 25 miles of Omu, the patrol is instead made up of 1d4 <a class="tooltip-hover monster-tooltip" href="https://www.dndbeyond.com/monsters/yuan-ti-malison" data-tooltip-href="//www.dndbeyond.com/monsters/17122-tooltip?disable-webm=1&amp;disable-webm=1">yuan-ti malisons</a> (type 1), and it takes a DC 14 Wisdom (<a class="tooltip-hover skill-tooltip" href="https://www.dndbeyond.com/compendium/rules/basic-rules/using-ability-scores#Perception" data-tooltip-href="//www.dndbeyond.com/skills/14-tooltip?disable-webm=1&amp;disable-webm=1">Perception</a>) check to spot them. If the characters chase after the malisons, they transform into snakes and vanish into the jungle.</p>
            ],
        }
        this.selectArea = this.selectArea.bind(this);
        this.rollDice = this.rollDice.bind(this);
        this.getValue = this.getValue.bind(this);
    }

    selectArea(e) {
        this.setState({ area: e.target.value })
    }

    rollDice(dieType) {
        const result = Math.floor(Math.random() * dieType);
        const encounterName = this.getValue(result, this.state.area);
        this.setState({ result: result, encounter: this.encounterMap[encounterName] });
    }

    getValue(search, category) {
        for( var range in this.resultMap[category] ) {
            var split = range.split("-");
    
            if( search >= parseInt(split[0]) && search <= parseInt(split[1] || split[0]) )
                return this.resultMap[category][range];
        }
    }

    render() {
        return (
            <div className="RandomEncounterGenerator">
                <div className="DiceRoller">
                    <div className="DiceResult">
                        {this.state.result ? this.state.result : "?"}
                    </div>
                    <select className="areaSelector" id="areaSelector" name="areaSelector" onChange={ this.selectArea }>
                        <option value="Ruins">Ruins</option>
                        <option value="Palace">Palace</option>
                        <option value="Swamp">Swamp</option>
                    </select>
                    <DiceRoller onClick={() => this.rollDice(100)}></DiceRoller>
                </div>
                <div>
                    {this.state.encounter ? this.state.encounter.map((part) => part): "?"}
                </div>
            </div>
        );
    }
}

export default RandomEncounterGenerator;