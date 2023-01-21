const dataVersion = '1.1'

const $body = document.querySelector('body');

const lang = () => {
    return localStorage.getItem('language_store_key');
}

const lan = {
    defaultSettingsInstall: (lang() == 'RU') ? 'DarkTO: Стандартные настройки загружены' : 'DarkTO: Default settings installed',
    differentVersion: (lang() == 'RU') ? 'DarkTO: Версия DarkTO и версия настроек разные' : 'DarkTO: Vesion of DarkTO and version of settings is different',
    settingsRecived: (lang() == 'RU') ? 'DarkTO: Настройки получены' : 'DarkTO: Settings recived',
    cannotFindSettings: (lang() == 'RU') ? 'DarkTO: Настройки не найдены' : 'DarkTO: Cannot find settings',
    settingsSaved: (lang() == 'RU') ? 'DarkTO: Настройки сохранены' : 'DarkTO: Settings saved',
    menuH: (lang() == 'RU') ? 'DarkTO настройки' : 'DarkTO settings',
    pgRelCol: (lang() == 'RU') ? '(Это цвет настроек перезагружающих страницу)' : '(This is the color of settings which reload the page)',
    themeSett: (lang() == 'RU') ? 'Настройка темы' : 'Theme settings',
    readyCol: (lang() == 'RU') ? 'Готовые схемы цветов:' : 'Ready color schemes:',
    userCol: (lang() == 'RU') ? 'Пользовательские цвета:' : 'Custom colors:',
    themeList: (lang() == 'RU') ?['--Выбор цветовой схемы--', 'Красная', 'Розовая', 'Аква', 'Синяя', 'Желтая', 'Зеленая'] : ['--Select color scheme--', 'Red', 'Rose', 'Aqua', 'Blue', 'Yellow', 'Green'],
    other: (lang() == 'RU') ? 'Прочее' : 'Other',
    showMBtn: (lang() == 'RU') ? 'Показать/Скрыть кнопку слева снизу' : 'Show/Hide button on left bottom corner',
    resetSettings: (lang() == 'RU') ? 'Вернуть настройки по умолчанию' : 'Reset settings by default',
    timerSettings: (lang() == 'RU') ? 'Настройка таймера' : 'Timer setting',
    timerPos: (lang() == 'RU') ? 'Расположение таймера:' : 'Timer position:',
    timerPosList: (lang() == 'RU') ? ['Скрыт', 'Справа посередине', 'Справа снизу', 'Посередине снизу', 'Слева снизу', 'Слева посередине', 'Слева снизу', 'Слева сверху', 'Посередине сверху', 'Справа сверху'] : ['Hide', 'Right middle', 'Right bottom', 'Middle bottom', 'Left bottom', 'Left middle', 'Left top', 'Middle top', 'Right top'],
    timerCol: (lang() == 'RU') ? 'Цвета таймера:' : 'Timer colors:',
    startTimerDef: (lang() == 'RU') ? 'Начальная точка отсчета таймера (сек.):' : 'Timer starting point (sec.):',
    save: (lang() == 'RU') ? 'Сохранить' : 'Save',
    numLess1: (lang() == 'RU') ? 'Ошибка, число должно быть больше 1' : 'Error, number must be bigger than 1',
    addingTime: (lang() == 'RU') ? 'Добовляемое время (сек.):' : 'Adding time (sec.):',
    removingTime: (lang() == 'RU') ? 'Вычетаемое время (сек):' : 'Subtracting time (sec.):',
    hotKeysH: (lang() == 'RU') ? 'Настройка горячих клавиш' : 'HotKeys setting',
    hkG: (lang() == 'RU') ? '(Чтобы создать комбинацию используйте "+" (Например: ctrl + d))' : '(To create a combination use "+" (For example: ctrl + d))',
    openCloseMenu: (lang() == 'RU') ? 'Открыть/Закрыть меню настроек DarkTO:' : 'Open/Close DarkTO settings menu:',
    startStopTimer: (lang() == 'RU') ? 'Запустить/Остановить таймер:' : 'Start/Stop timer:',
    resetTimer: (lang() == 'RU') ? 'Сбросить таймер:' : 'Reset timer:',
    addTime: (lang() == 'RU') ? 'Добавить время:' : 'Add time:',
    removeTime: (lang() == 'RU') ? 'Вычесть время:' : 'Subtract time:',
    saveHotKeys: (lang() == 'RU') ? 'Сохранить горячие клавиши' : 'Save HotKeys',
    authorDs: (lang() == 'RU') ? "Дискорд автора: kortex#7580" : "Author's discord: kortex#7580",
}

const defaultData = {
    dataVersion: dataVersion,
    themeSettings: {
        hideBtn: false,
        customColors: {
            c1: 'red',
            c2: 'rgba(255, 0, 0, 0.25)',
            c3: 'rgb(51, 0, 0)',
            c4: 'rgba(51, 0, 0, 0.25)',
            c5: 'rgba(51, 0, 0, 0.15)',
            m1: '#111',
            m2: '#111111a8',
            m3: '#00000091'
        }
    },
    hotKeys: {
        menu: 'ctrl + capslock',
        resetTimer: 'i',
        startStopTimer: 'k',
        addTime: 'l',
        removeTime: 'j'
    },
    timer: {
        position: 0,
        colors: ['#fff', '#000', 'lime', 'red'],
        defaultTime: 100,
        adder: 5,
        remover: 10
    }
}

let data = defaultData;

const setDefaultData = () => {
    localStorage.setItem('DarkTOCash', JSON.stringify(defaultData));
    data = JSON.parse(localStorage.getItem('DarkTOCash'));
    console.log(lan.defaultSettingsInstall);
}

const dataLoad = () => {
    if(localStorage.getItem('DarkTOCash')){
        data = JSON.parse(localStorage.getItem('DarkTOCash'));
        if(data.dataVersion != dataVersion){
            console.log(lan.differentVersion);
            setDefaultData();
        }
    } else{
        console.log(lan.cannotFindSettings);
        setDefaultData();
    }
    console.log(lan.settingsRecived);
}
dataLoad();

const dataSave = () => {
    localStorage.setItem('DarkTOCash', JSON.stringify(data));
    console.log(lan.settingsSaved);
}