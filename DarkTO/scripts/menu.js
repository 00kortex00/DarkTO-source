const showMenu = (a = true) => {
    try{
        const menus = document.querySelectorAll('.themeMenu');
        if(menus.length != 0){
            menus.forEach((m) => {
                $body.removeChild(m);
            })
        } else{
        //menu creating
            if(a){
                const menu = document.createElement('div');
                menu.classList.add('themeMenu');
                $body.appendChild(menu);
    
                const $closeBtn = document.createElement('button');
                $closeBtn.classList.add('themesCloseBtn');
                $closeBtn.innerText = 'x';
                
                $closeBtn.addEventListener('click', () => {
                    $body.removeChild(menu);
                })
    
                menu.appendChild($closeBtn);
    
                const $content = document.createElement('div');
                $content.classList.add('themeContent')
                menu.appendChild($content);
    
                const themeH = document.createElement('h1');
                themeH.innerText = lan.menuH;
                menu.appendChild(themeH);

                const createH = (text) => {
                    const themeH = document.createElement('h2');
                    themeH.innerText = text;
                    $content.appendChild(themeH);
                    return themeH;
                }
                const createBtn = (text) => {
                    const btn = document.createElement('button');
                    btn.innerText = text;
                    btn.classList.add('button');
                    $content.appendChild(btn);
                    return btn;
                }
                const createP = (text) => {
                    const p = document.createElement('p');
                    p.style.margin = '1em 0 0 0'
                    p.innerText = text;
                    $content.appendChild(p);
                    return p;
                }
                const createSelect = (options) => {
                    const select = document.createElement('select');
                    options.forEach((text, i) => {
                        const option = document.createElement('option');
                        option.innerText = text;
                        option.value = i;
                        select.appendChild(option);
                    })
                    $content.appendChild(select);
                    return select;
                }
                const createColorInput = (ind) => {
                    const input = document.createElement('div');
                    input.id = ind;
                    return input;
                }

                const createNumInp = () => {
                    const inp = document.createElement('input');
                    inp.type = 'number';
                    $content.appendChild(inp);
                    return inp;
                }

                const createTextInp = () => {
                    const inp = document.createElement('input');
                    $content.appendChild(inp);
                    return inp;
                }

                const checkBox = () => {
                    const check = document.createElement('input');
                    check.type = 'checkbox';
                    $content.appendChild(check);
                    return check;
                }

                const reloadingSetts = createP(lan.pgRelCol);
                reloadingSetts.style.color = 'red';

                const themeSetH = createH(lan.themeSett);
                const readyColorsP = createP(lan.readyCol);
                const selColorScheme = createSelect([lan.themeList[0], lan.themeList[1], lan.themeList[2], lan.themeList[3], lan.themeList[4], lan.themeList[5], lan.themeList[6]]);

                
                selColorScheme.addEventListener('input', () => {
                    const val = Number(selColorScheme.value);
                    if(val > 0){
                        data.themeSettings.customColors.c1 = themes[val-1][0];
                        data.themeSettings.customColors.c2 = themes[val-1][1];
                        data.themeSettings.customColors.c3 = themes[val-1][2];
                        data.themeSettings.customColors.c4 = themes[val-1][3];
                        data.themeSettings.customColors.c5 = themes[val-1][4];
                        data.themeSettings.customColors.m1 = themes[val-1][5];
                        data.themeSettings.customColors.m2 = themes[val-1][6];
                        data.themeSettings.customColors.m3 = themes[val-1][7];
                        setTheme();
                        dataSave();
                        showMenu();
                        showMenu();
                    }
                })
                const userColorsP = createP(lan.userCol);
                const colorsBox = document.createElement('div');
                $content.appendChild(colorsBox);

                const inputs = [createColorInput('inp1'), createColorInput('inp2'), createColorInput('inp3'), createColorInput('inp4'), createColorInput('inp5'), createColorInput('inp6'), createColorInput('inp7'), createColorInput('inp8')];
                inputs.forEach((e, id) => {
                    colorsBox.appendChild(e);
                    const alwan = new Alwan(`#${e.id}`, {
                        classname: 'inp',
                        theme: 'dark',
                        color: (id == 0) ? data.themeSettings.customColors.c1:(id == 1) ? data.themeSettings.customColors.c2:(id == 2) ? data.themeSettings.customColors.c3:(id == 3) ? data.themeSettings.customColors.c4:(id == 4) ? data.themeSettings.customColors.c5:(id == 5) ? data.themeSettings.customColors.m1:(id == 6) ? data.themeSettings.customColors.m2:(id == 7) ? data.themeSettings.customColors.m3:'#111'
                    });
                    alwan.on('color', (color) => {
                        if(id == 0){
                            data.themeSettings.customColors.c1 = color.hex();
                        }
                        if(id == 1){
                            data.themeSettings.customColors.c2 = color.hex();
                        }
                        if(id == 2){
                            data.themeSettings.customColors.c3 = color.hex();
                        }
                        if(id == 3){
                            data.themeSettings.customColors.c4 = color.hex();
                        }
                        if(id == 4){
                            data.themeSettings.customColors.c5 = color.hex();
                        }
                        if(id == 5){
                            data.themeSettings.customColors.m1 = color.hex();
                        }
                        if(id == 6){
                            data.themeSettings.customColors.m2 = color.hex();
                        }
                        if(id == 7){
                            data.themeSettings.customColors.m3 = color.hex();
                        }
                        setTheme();
                    })
                    alwan.on('change', () => {
                        dataSave();
                    })
                })
                
                createH(lan.timerSettings);

                createP(lan.timerPos);
                const timerPos = createSelect(lan.timerPosList);
                timerPos.value = data.timer.position;
                timerPos.addEventListener('input', () => {
                    data.timer.position = Number(timerPos.value);
                    dataSave();
                    timerStylesUpd();
                })
                createP(lan.timerCol);
                const timerColorBox = document.createElement('div');
                $content.appendChild(timerColorBox);

                const autoResetP = createP('Auto reset timer:');
                const autoReset = checkBox();

                autoReset.checked = data.timer.autoReset;

                autoReset.addEventListener('click', () => {
                    data.timer.autoReset = !(data.timer.autoReset);
                    dataSave();
                })


                const timerColors = [createColorInput('t1'), createColorInput('t2'), createColorInput('t3'), createColorInput('t4')];

                timerColors.forEach((e, id) => {
                    timerColorBox.appendChild(e);
                    const alwan = new Alwan(`#${e.id}`, {
                        classname: 'inp',
                        theme: 'dark',
                        color: (id == 0) ? data.timer.colors[0]:(id == 1) ? data.timer.colors[1]:(id == 2) ?data.timer.colors[2]:data.timer.colors[3]
                    });
                    alwan.on('color', (color) => {
                        if(id == 0){
                            data.timer.colors[0] = color.hex();
                        }
                        if(id == 1){
                            data.timer.colors[1] = color.hex();
                        }
                        if(id == 2){
                            data.timer.colors[2] = color.hex();
                        }
                        if(id == 3){
                            data.timer.colors[3] = color.hex();
                        }
                        timerStylesUpd();
                    })
                    alwan.on('change', () => {
                        dataSave();
                    })
                })
                createP(lan.startTimerDef);
                const startTime = createNumInp();
                startTime.value = data.timer.defaultTime;
                const timerTimeSave = createBtn(lan.save);

                timerTimeSave.addEventListener('click', () => {
                    if(Number(startTime.value) >= 1){
                        data.timer.defaultTime = Math.floor(Number(startTime.value));
                        dataSave();
                    } else{
                        alert(lan.numLess1);
                    }
                })

                createP(lan.addingTime);
                const addTime = createNumInp();
                addTime.value = data.timer.adder;

                const timerAddSave = createBtn(lan.save);

                timerAddSave.addEventListener('click', () => {
                    if(Number(addTime.value) >= 1){
                        data.timer.adder = Math.floor(Number(addTime.value));
                        dataSave();
                    } else{
                        alert(lan.numLess1);
                    }
                })

                createP(lan.removingTime);
                const remTime = createNumInp();
                remTime.value = data.timer.remover;
                const timerRemSave = createBtn(lan.save);
                timerRemSave.addEventListener('click', () => {
                    if(Number(remTime.value) >= 1){
                        data.timer.remover = Math.floor(Number(remTime.value));
                        dataSave();
                    } else{
                        alert(lan.numLess1);
                    }
                })

                createH(lan.hotKeysH);
                createP(lan.hkG);

                createP(lan.openCloseMenu);
                const openDarkTOMenu = createTextInp();
                openDarkTOMenu.value = data.hotKeys.menu;

                createP(lan.startStopTimer);
                const startStopTimer = createTextInp();
                startStopTimer.value = data.hotKeys.startStopTimer;

                createP(lan.resetTimer);
                const resetTimer = createTextInp();
                resetTimer.value = data.hotKeys.resetTimer;

                createP(lan.addTime);
                const addTimer = createTextInp();
                addTimer.value = data.hotKeys.addTime;

                createP(lan.removeTime);
                const removeTimer = createTextInp();
                removeTimer.value = data.hotKeys.removeTime;

                const saveHotkeys = createBtn(lan.saveHotKeys);
                saveHotkeys.style.color = 'red';
                saveHotkeys.style.borderColor = 'red';

                saveHotkeys.addEventListener('click', () => {
                    data.hotKeys.menu = openDarkTOMenu.value;
                    data.hotKeys.startStopTimer = startStopTimer.value;
                    data.hotKeys.resetTimer = resetTimer.value;
                    data.hotKeys.addTime = addTimer.value;
                    data.hotKeys.removeTime = removeTimer.value;
                    dataSave();
                    window.location.href = window.location.href;

                })

                const otherSetH = createH(lan.other);
                const hideBtnBtn = createBtn(lan.showMBtn);
                hideBtnBtn.addEventListener('click', () => {
                    if(data.themeSettings.hideBtn){
                        data.themeSettings.hideBtn = false;
                        showMenuBtn();
                    } else{
                        data.themeSettings.hideBtn = true;
                        document.querySelectorAll('.menuBtn').forEach((e) => {
                            $body.removeChild(e);
                        })
                    }
                    dataSave();
                })
                const resetSettingsBtn = createBtn(lan.resetSettings);
                resetSettingsBtn.style.cssText = 'color: red; border-color: red;';
                resetSettingsBtn.addEventListener('click', () => {
                    setDefaultData();
                    window.location.href = window.location.href;
                })

                const ds = createP(lan.authorDs);
                ds.style.color = 'lime';

            }

        }
    } catch(err){
        alert(err);
    }

}
const showMenuBtn = () => {
    const menuBtn = document.createElement('div');
    menuBtn.innerText = 'DarkTO';
    menuBtn.classList.add('menuBtn');

    $body.appendChild(menuBtn);
    menuBtn.addEventListener('click', () => {
        showMenu();
    })
}
window.addEventListener('load', () => {
    
    if(!data.themeSettings.hideBtn){
        showMenuBtn();
    }
    if(!(document.activeElement.tagName == 'input' || document.activeElement.tagName == 'textarea1')){
        hotkeys(data.hotKeys.menu, function(event){
            event.preventDefault();
            showMenu();
          });

          hotkeys(data.hotKeys.startStopTimer, (event) => {
            event.preventDefault();
            startStopTimer();
          });

          hotkeys(data.hotKeys.resetTimer, (event) => {
            event.preventDefault();
            resetTimer();
          });

          hotkeys(data.hotKeys.addTime, (event) => {
            event.preventDefault();
            time += data.timer.adder;
            updateTime();
          });

          hotkeys(data.hotKeys.removeTime, (event) => {
            event.preventDefault();
            time -= data.timer.remover;
            updateTime();
          });

    }
    hotkeys('esc', function(event){
        event.preventDefault();
        showMenu(false);
    });

})