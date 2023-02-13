const dataVersion = '1.2'

const $body = document.querySelector('body');

const lang = () => {
    const lan = localStorage.getItem('language_store_key');
    if(lan != null){
        return lan.toLowerCase();
    }
    if(window.navigator.languages.indexOf('ru') != -1){
        return 'ru';
    }
    return 'en';
}

const lan = {
    defaultSettingsInstall: (lang() == 'ru') ? 'DarkTO: Стандартные настройки загружены' : 'DarkTO: Default settings installed',
    differentVersion: (lang() == 'ru') ? 'DarkTO: Версия DarkTO и версия настроек разные' : 'DarkTO: Vesion of DarkTO and version of settings is different',
    settingsRecived: (lang() == 'ru') ? 'DarkTO: Настройки получены' : 'DarkTO: Settings recived',
    cannotFindSettings: (lang() == 'ru') ? 'DarkTO: Настройки не найдены' : 'DarkTO: Cannot find settings',
    settingsSaved: (lang() == 'ru') ? 'DarkTO: Настройки сохранены' : 'DarkTO: Settings saved',
    menuH: (lang() == 'ru') ? 'DarkTO настройки' : 'DarkTO settings',
    pgRelCol: (lang() == 'ru') ? '(Это цвет настроек перезагружающих страницу)' : '(This is the color of settings which reload the page)',
    themeSett: (lang() == 'ru') ? 'Настройка темы' : 'Theme settings',
    readyCol: (lang() == 'ru') ? 'Готовые схемы цветов:' : 'Ready color schemes:',
    userCol: (lang() == 'ru') ? 'Пользовательские цвета:' : 'Custom colors:',
    themeList: (lang() == 'ru') ?['--Выбор цветовой схемы--', 'Красная', 'Розовая', 'Аква', 'Синяя', 'Желтая', 'Зеленая'] : ['--Select color scheme--', 'Red', 'Rose', 'Aqua', 'Blue', 'Yellow', 'Green'],
    other: (lang() == 'ru') ? 'Прочее' : 'Other',
    showMBtn: (lang() == 'ru') ? 'Показать/Скрыть кнопку слева снизу' : 'Show/Hide button on left bottom corner',
    resetSettings: (lang() == 'ru') ? 'Вернуть настройки по умолчанию' : 'Reset settings by default',
    timerSettings: (lang() == 'ru') ? 'Настройка таймера' : 'Timer setting',
    timerPos: (lang() == 'ru') ? 'Расположение таймера:' : 'Timer position:',
    timerPosList: (lang() == 'ru') ? ['Скрыт', 'Справа посередине', 'Справа снизу', 'Посередине снизу', 'Слева снизу', 'Слева посередине', 'Слева снизу', 'Слева сверху', 'Посередине сверху', 'Справа сверху'] : ['Hide', 'Right middle', 'Right bottom', 'Middle bottom', 'Left bottom', 'Left middle', 'Left top', 'Middle top', 'Right top'],
    timerCol: (lang() == 'ru') ? 'Цвета таймера:' : 'Timer colors:',
    startTimerDef: (lang() == 'ru') ? 'Начальная точка отсчета таймера (сек.):' : 'Timer starting point (sec.):',
    save: (lang() == 'ru') ? 'Сохранить' : 'Save',
    numLess1: (lang() == 'ru') ? 'Ошибка, число должно быть больше 1' : 'Error, number must be bigger than 1',
    addingTime: (lang() == 'ru') ? 'Добовляемое время (сек.):' : 'Adding time (sec.):',
    removingTime: (lang() == 'ru') ? 'Вычетаемое время (сек):' : 'Subtracting time (sec.):',
    hotKeysH: (lang() == 'ru') ? 'Настройка горячих клавиш' : 'HotKeys setting',
    hkG: (lang() == 'ru') ? '(Чтобы создать комбинацию используйте "+" (Например: ctrl + d))' : '(To create a combination use "+" (For example: ctrl + d))',
    openCloseMenu: (lang() == 'ru') ? 'Открыть/Закрыть меню настроек DarkTO:' : 'Open/Close DarkTO settings menu:',
    startStopTimer: (lang() == 'ru') ? 'Запустить/Остановить таймер:' : 'Start/Stop timer:',
    resetTimer: (lang() == 'ru') ? 'Сбросить таймер:' : 'Reset timer:',
    addTime: (lang() == 'ru') ? 'Добавить время:' : 'Add time:',
    removeTime: (lang() == 'ru') ? 'Вычесть время:' : 'Subtract time:',
    saveHotKeys: (lang() == 'ru') ? 'Сохранить горячие клавиши' : 'Save HotKeys',
    authorDs: (lang() == 'ru') ? "Дискорд автора: kortex#7580" : "Author's discord: kortex#7580",
    autoResetTimer: (lang() == 'ru') ? "Автомотический перезапуск таймера:" : "Auto reset timer:",
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
        remover: 10,
        autoReset: true
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