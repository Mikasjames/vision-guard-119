chrome.management.onInstalled.addListener(async (info) => {
	if (info.name === 'Vision Guard 119') {
		console.log('Target Extension Installed');
	}
});

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

chrome.management.onEnabled.addListener(async (info) => {
	if (info.name === 'Vision Guard 119') {
		console.log('Target Extension Enabled');
	}
});

chrome.extension.isAllowedIncognitoAccess((isAllowedAccess) => {
	console.log('isAllowedAccess', isAllowedAccess);
});
