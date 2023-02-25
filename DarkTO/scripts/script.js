//0 - default, 1 - rose, 2 - aqua, 3 - blue, 4 - yellow, 5 - green
const themes = [
        ['red', 'rgba(255, 0, 0, 0.25)', 'rgb(51, 0, 0)', 'rgba(51, 0, 0, 0.25)', 'rgba(51, 0, 0, 0.15)', '#111', '#111111a8', '#00000091'],
        ['#e866ab', '#ed5aa840', '#843575', 'rgba(51, 0, 38, 0.25)', 'rgba(51, 0, 34, 0.15)', '#362d37', '#3f3240a8', '#332a3391'],
        ['aqua', 'rgba(0, 255, 255, 0.25)', 'rgb(0, 51, 51)', 'rgba(0, 45, 51, 0.25)', 'rgba(0, 41, 51, 0.15)', '#111', '#111111a8', '#00000091'],
        ['rgb(96, 96, 255)', 'rgba(96, 96, 255, 0.25)', 'rgb(0, 1, 51)', 'rgba(0, 1, 51, 0.25)', 'rgba(1, 0, 51, 0.15)', '#111', '#111111a8', '#00000091'],
        ['yellow', 'rgba(255, 255, 0, 0.25)', 'rgb(50, 51, 0)', 'rgba(51, 50, 0, 0.25)', 'rgba(51, 48, 0, 0.15)', '#111', '#111111a8', '#00000091'],
        ['lime', 'rgba(0, 255, 0, 0.25)', 'rgb(2, 51, 0)', 'rgba(0, 51, 0, 0.25)', 'rgba(0, 51, 0, 0.15)', '#111', '#111111a8', '#00000091']
];

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
}

setTheme();


window.addEventListener('load', () => {
    console.log(lang());
})