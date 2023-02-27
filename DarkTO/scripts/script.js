//0 - default, 1 - rose, 2 - aqua, 3 - blue, 4 - yellow, 5 - green
const themes = [
        ['red', 'rgba(255, 0, 0, 0.25)', 'rgb(51, 0, 0)', 'rgba(51, 0, 0, 0.25)', 'rgba(51, 0, 0, 0.15)', '#111', '#111111a8', '#00000091'],
        ['#e866ab', '#ed5aa840', '#843575', 'rgba(51, 0, 38, 0.25)', 'rgba(51, 0, 34, 0.15)', '#362d37', '#3f3240a8', '#332a3391'],
        ['aqua', 'rgba(0, 255, 255, 0.25)', 'rgb(0, 51, 51)', 'rgba(0, 45, 51, 0.25)', 'rgba(0, 41, 51, 0.15)', '#111', '#111111a8', '#00000091'],
        ['rgb(96, 96, 255)', 'rgba(96, 96, 255, 0.25)', 'rgb(0, 1, 51)', 'rgba(0, 1, 51, 0.25)', 'rgba(1, 0, 51, 0.15)', '#111', '#111111a8', '#00000091'],
        ['yellow', 'rgba(255, 255, 0, 0.25)', 'rgb(50, 51, 0)', 'rgba(51, 50, 0, 0.25)', 'rgba(51, 48, 0, 0.15)', '#111', '#111111a8', '#00000091'],
        ['lime', 'rgba(0, 255, 0, 0.25)', 'rgb(2, 51, 0)', 'rgba(0, 51, 0, 0.25)', 'rgba(0, 51, 0, 0.15)', '#111', '#111111a8', '#00000091']
];

const tabImagesCSS = `
[data-style*="BattleTabStatisticComponentStyle-tableContainer"][data-style*="BattleTabStatisticComponentStyle-blueTeamTableContainer"]>table>thead>tr>th:nth-child(1) {
    max-width: 28em;
    width: calc(25em + 2 * 0.313em);
}
[data-style*="BattleTabStatisticComponentStyle-tableContainer"][data-style*="BattleTabStatisticComponentStyle-blueTeamTableContainer"]>table>thead>tr>th:nth-child(2) {
    width: 3em;
}
[data-style*="BattleTabStatisticComponentStyle-tableContainer"][data-style*="BattleTabStatisticComponentStyle-blueTeamTableContainer"]>table>thead>tr>th:nth-child(3) {
    width: 8em;
}
[data-style*="BattleTabStatisticComponentStyle-tableContainer"][data-style*="BattleTabStatisticComponentStyle-blueTeamTableContainer"]>table>thead>tr>th:nth-child(4) {
    width: 8em;
}
[data-style*="BattleTabStatisticComponentStyle-tableContainer"][data-style*="BattleTabStatisticComponentStyle-blueTeamTableContainer"]>table>thead>tr>th:nth-child(5) {
    width: 5em;
}
[data-style*="BattleTabStatisticComponentStyle-tableContainer"][data-style*="BattleTabStatisticComponentStyle-blueTeamTableContainer"]>table>thead>tr>th:nth-child(6) {
    width: 5em;
}
/* Шапка - Противники */
[data-style*="BattleTabStatisticComponentStyle-tableContainer"][data-style*="BattleTabStatisticComponentStyle-redTeamTableContainer"]>table>thead>tr>th:nth-child(1) {
    max-width: 28em;
    width: calc(25em + 2 * 0.313em);
}
[data-style*="BattleTabStatisticComponentStyle-tableContainer"][data-style*="BattleTabStatisticComponentStyle-redTeamTableContainer"]>table>thead>tr>th:nth-child(2) {
    width: 3em;
}
[data-style*="BattleTabStatisticComponentStyle-tableContainer"][data-style*="BattleTabStatisticComponentStyle-redTeamTableContainer"]>table>thead>tr>th:nth-child(3) {
    width: 8em;
}
[data-style*="BattleTabStatisticComponentStyle-tableContainer"][data-style*="BattleTabStatisticComponentStyle-redTeamTableContainer"]>table>thead>tr>th:nth-child(4) {
    width: 8em;
}
[data-style*="BattleTabStatisticComponentStyle-tableContainer"][data-style*="BattleTabStatisticComponentStyle-redTeamTableContainer"]>table>thead>tr>th:nth-child(5) {
    width: 5em;
}
[data-style*="BattleTabStatisticComponentStyle-tableContainer"][data-style*="BattleTabStatisticComponentStyle-redTeamTableContainer"]>table>thead>tr>th:nth-child(6) {
    width: 5em;
}
/* Данные - Союзники */
[data-style*="BattleTabStatisticComponentStyle-tableContainer"][data-style*="BattleTabStatisticComponentStyle-blueTeamTableContainer"]>table>tbody>tr>td:nth-child(1) {
    max-width: 28em;
    width: 25em;
}
[data-style*="BattleTabStatisticComponentStyle-tableContainer"][data-style*="BattleTabStatisticComponentStyle-blueTeamTableContainer"]>table>tbody>tr>td:nth-child(3) {
    width: 3em;
}
[data-style*="BattleTabStatisticComponentStyle-tableContainer"][data-style*="BattleTabStatisticComponentStyle-blueTeamTableContainer"]>table>tbody>tr>td:nth-child(4) {
    width: 8em;
}
[data-style*="BattleTabStatisticComponentStyle-tableContainer"][data-style*="BattleTabStatisticComponentStyle-blueTeamTableContainer"]>table>tbody>tr>td:nth-child(5) {
    width: 8em;
}
[data-style*="BattleTabStatisticComponentStyle-tableContainer"][data-style*="BattleTabStatisticComponentStyle-blueTeamTableContainer"]>table>tbody>tr>td:nth-child(6) {
    width: 5em;
}
[data-style*="BattleTabStatisticComponentStyle-tableContainer"][data-style*="BattleTabStatisticComponentStyle-blueTeamTableContainer"]>table>tbody>tr>td:nth-child(7) {
    width: 5em;
}
/* Данные - Противники */
[data-style*="BattleTabStatisticComponentStyle-tableContainer"][data-style*="BattleTabStatisticComponentStyle-redTeamTableContainer"]>table>tbody>tr>td:nth-child(1) {
    max-width: 28em;
    width: 25em;
}
[data-style*="BattleTabStatisticComponentStyle-tableContainer"][data-style*="BattleTabStatisticComponentStyle-redTeamTableContainer"]>table>tbody>tr>td:nth-child(3) {
    width: 3em;
}
[data-style*="BattleTabStatisticComponentStyle-tableContainer"][data-style*="BattleTabStatisticComponentStyle-redTeamTableContainer"]>table>tbody>tr>td:nth-child(4) {
    width: 8em;
}
[data-style*="BattleTabStatisticComponentStyle-tableContainer"][data-style*="BattleTabStatisticComponentStyle-redTeamTableContainer"]>table>tbody>tr>td:nth-child(5) {
    width: 8em;
}
[data-style*="BattleTabStatisticComponentStyle-tableContainer"][data-style*="BattleTabStatisticComponentStyle-redTeamTableContainer"]>table>tbody>tr>td:nth-child(6) {
    width: 5em;
}
[data-style*="BattleTabStatisticComponentStyle-tableContainer"][data-style*="BattleTabStatisticComponentStyle-redTeamTableContainer"]>table>tbody>tr>td:nth-child(7) {
    width: 5em;
}

/* Установка крайнего смещения для устройств */
[data-style*="BattleTabStatisticComponentStyle-tableContainer"]>table>tbody>tr>td[data-style*="BattleTabStatisticComponentStyle-deviceCell"] {
    justify-content: right !important;
}
/* Установка крайнего смещения для защиты */
[data-style*="BattleTabStatisticComponentStyle-tableContainer"]>table>tbody>tr>td[data-style*="BattleTabStatisticComponentStyle-defenceCell"] {
    justify-content: right !important;
}






.dXMOUQ{
    background: url(https://s.eu.tankionline.com/0/114/134/163/27571212744112/image.webp) center center / contain no-repeat!important;
    transform: scale(1.5)!important;
    -webkit-mask-image: none!important;

}
.gmBvfz{
background: url(https://s.eu.tankionline.com/575/156205/46/235/27673441764603/image.webp) center center / contain no-repeat!important;
transform: scale(1.5)!important;
-webkit-mask-image: none!important;

}
.bbREyy{
background: url(https://s.eu.tankionline.com/605/12650/335/51/30242554322574/image.webp) center center / contain no-repeat!important;
transform: scale(1.5)!important;
-webkit-mask-image: none!important;

}
.bgPXYz{
background: url(https://s.eu.tankionline.com/571/164753/344/273/27475173032662/image.webp) center center / contain no-repeat!important;
transform: scale(1.5)!important;
-webkit-mask-image: none!important;

}
.cPToIt{
background: url(https://s.eu.tankionline.com/0/16721/371/25/27006222502200/image.webp) center center / contain no-repeat!important;
transform: scale(1.5)!important;
-webkit-mask-image: none!important;

}
.SBLgg{
background: url(https://s.eu.tankionline.com/575/72153/171/306/27656433310704/image.webp) center center / contain no-repeat!important;
transform: scale(1.5)!important;
-webkit-mask-image: none!important;

}
.NIUCX{
background: url(https://s.eu.tankionline.com/566/114246/64/16/27323052543056/image.webp) center center / contain no-repeat!important;
transform: scale(1.5)!important;
-webkit-mask-image: none!important;

}
.jOwMmo{
background: url(https://s.eu.tankionline.com/0/16722/23/17/27006221355457/image.webp) center center / contain no-repeat!important;
transform: scale(1.5)!important;
-webkit-mask-image: none!important;

}
.fJnVLP{
background: url(https://s.eu.tankionline.com/0/16723/30/371/27006221253661/image.webp) center center / contain no-repeat!important;
transform: scale(1.5)!important;
-webkit-mask-image: none!important;

}
.izzniI{
background: url(https://s.eu.tankionline.com/601/112676/250/233/30062557707304/image.webp) center center / contain no-repeat!important;
transform: scale(1.5)!important;
-webkit-mask-image: none!important;

}
.iCjKi{
background: url(https://s.eu.tankionline.com/601/17263/233/51/30043654742567/image.webp) center center / contain no-repeat!important;
transform: scale(1.5)!important;
-webkit-mask-image: none!important;

}

.exthBD{
background: url(https://s.eu.tankionline.com/567/105205/202/144/27361241363510/image.webp) center center / contain no-repeat!important;
transform: scale(1.5)!important;
-webkit-mask-image: none!important;

}
.ihUeUv{
background: url(https://s.eu.tankionline.com/0/114/157/52/27006222153223/image.webp) center center / contain no-repeat!important;
transform: scale(1.5)!important;
-webkit-mask-image: none!important;

}
.heInIv{
background: url(https://s.eu.tankionline.com/603/146215/116/130/30171443247472/image.webp) center center / contain no-repeat!important;
transform: scale(1.5)!important;
-webkit-mask-image: none!important;

}
.hnVKdb{
background: url(https://s.eu.tankionline.com/0/16723/73/232/27006221670045/image.webp) center center / contain no-repeat!important;
transform: scale(1.5)!important;
-webkit-mask-image: none!important;

}
.fuZtRa{
background: url(https://s.eu.tankionline.com/552/54544/26/345/27006221746337/image.webp	) center center / contain no-repeat!important;
transform: scale(1.5)!important;
-webkit-mask-image: none!important;
}
.epgefG{
background: url(https://s.eu.tankionline.com/0/114/134/163/27571212744112/image.webp) center center / contain no-repeat!important;
transform: scale(1.5)!important;
-webkit-mask-image: none!important;
width: 2em!important;

}
.cIJZwW{
background: url(https://s.eu.tankionline.com/575/156205/46/235/27673441764603/image.webp) center center / contain no-repeat!important;
transform: scale(1.5)!important;
-webkit-mask-image: none!important;
width: 2em!important;

}
.gZyXfr{
background: url(https://s.eu.tankionline.com/605/12650/335/51/30242554322574/image.webp) center center / contain no-repeat!important;
transform: scale(1.5)!important;
-webkit-mask-image: none!important;
width: 2em!important;

}
.cMMmmW{
background: url(https://s.eu.tankionline.com/571/164753/344/273/27475173032662/image.webp) center center / contain no-repeat!important;
transform: scale(1.5)!important;
-webkit-mask-image: none!important;
width: 2em!important;

}
.gWdGPv{
background: url(https://s.eu.tankionline.com/0/16721/371/25/27006222502200/image.webp) center center / contain no-repeat!important;
transform: scale(1.5)!important;
-webkit-mask-image: none!important;
width: 2em!important;

}
.jBsPVr{
background: url(https://s.eu.tankionline.com/575/72153/171/306/27656433310704/image.webp) center center / contain no-repeat!important;
transform: scale(1.5)!important;
-webkit-mask-image: none!important;
width: 2em!important;

}
.kUDOOR{
background: url(https://s.eu.tankionline.com/566/114246/64/16/27323052543056/image.webp) center center / contain no-repeat!important;
transform: scale(1.5)!important;
-webkit-mask-image: none!important;
width: 2em!important;

}
.kjOvgI{
background: url(https://s.eu.tankionline.com/0/16722/23/17/27006221355457/image.webp) center center / contain no-repeat!important;
transform: scale(1.5)!important;
-webkit-mask-image: none!important;
width: 2em!important;

}
.nfOzV{
background: url(https://s.eu.tankionline.com/0/16723/30/371/27006221253661/image.webp) center center / contain no-repeat!important;
transform: scale(1.5)!important;
-webkit-mask-image: none!important;
width: 2em!important;

}
.sbzSh{
background: url(https://s.eu.tankionline.com/601/112676/250/233/30062557707304/image.webp) center center / contain no-repeat!important;
transform: scale(1.5)!important;
-webkit-mask-image: none!important;
width: 2em!important;

}
.lmhUUA{
background: url(https://s.eu.tankionline.com/601/17263/233/51/30043654742567/image.webp) center center / contain no-repeat!important;
transform: scale(1.5)!important;
-webkit-mask-image: none!important;
width: 2em!important;

}

.eevoZa{
background: url(https://s.eu.tankionline.com/567/105205/202/144/27361241363510/image.webp) center center / contain no-repeat!important;
transform: scale(1.5)!important;
-webkit-mask-image: none!important;
width: 2em!important;

}
.gfGoqm{
background: url(https://s.eu.tankionline.com/0/114/157/52/27006222153223/image.webp) center center / contain no-repeat!important;
transform: scale(1.5)!important;
-webkit-mask-image: none!important;
width: 2em!important;

}
.bXWvxf{
background: url(https://s.eu.tankionline.com/603/146215/116/130/30171443247472/image.webp) center center / contain no-repeat!important;
transform: scale(1.5)!important;
-webkit-mask-image: none!important;
width: 2em!important;

}
.gQEslj{
background: url(https://s.eu.tankionline.com/0/16723/73/232/27006221670045/image.webp) center center / contain no-repeat!important;
transform: scale(1.5)!important;
-webkit-mask-image: none!important;
width: 2em!important;

}
.gCshsu{
background: url(https://s.eu.tankionline.com/552/54544/26/345/27006221746337/image.webp	) center center / contain no-repeat!important;
transform: scale(1.5)!important;
-webkit-mask-image: none!important;
width: 2em!important;
}
`
const style = document.createElement('style');
$body.appendChild(style);
let col = data.themeSettings.customColors;

const setTheme = () => {
    const c1 = data.themeSettings.customColors.c1;
    const c2 = data.themeSettings.customColors.c2;
    const c3 = data.themeSettings.customColors.c3;
    const c4 = data.themeSettings.customColors.c4;
    const c5 = data.themeSettings.customColors.c5;
    const m1 = data.themeSettings.customColors.m1;
    const m2 = data.themeSettings.customColors.m2;
    const m3 = data.themeSettings.customColors.m3;

    $body.style.cssText = `--color: ${c1}; --color2: ${c2}; --color3: ${c3}; --color4: ${c4}; --color5: ${c5}; --bg: ${m1}; --bg2: ${m2}; --bg3: ${m3}`;
    
    if(data.themeSettings.tabImages){
        style.innerText = tabImagesCSS;
    } else{
        style.innerText = '';
    }
}

setTheme();


window.addEventListener('load', () => {
    console.log(`DarkTO lang: ${lang()}`);
})