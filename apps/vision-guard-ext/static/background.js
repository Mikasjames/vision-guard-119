chrome.management.onUninstalled.addListener(async (info) => {
    if (info.name === 'Vision Guard 119') {
        console.log('Target Extension Uninstalled');
    }
});

chrome.management.onDisabled.addListener(async (info) => {
    if (info.name === 'Vision Guard 119') {
        console.log('Target Extension Disabled');
    }
});

chrome.extension.isAllowedIncognitoAccess((isAllowedAccess) => {
    console.log('isAllowedAccess', isAllowedAccess);
});

// listen to events when vision guard 119 is disabled in incognito mode
