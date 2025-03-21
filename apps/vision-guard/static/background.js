chrome.management.onInstalled.addListener(async (info) => {
	if (info.name === 'Vision Guard 119 Ext') {
		console.log('Target Extension Installed');
	}
});

chrome.management.onUninstalled.addListener(async (info) => {
	if (info.name === 'Vision Guard 119 Ext') {
		console.log('Target Extension Uninstalled');
	}
});

chrome.management.onDisabled.addListener(async (info) => {
	if (info.name === 'Vision Guard 119 Ext') {
		console.log('Target Extension Disabled');
	}
});

chrome.management.onEnabled.addListener(async (info) => {
	if (info.name === 'Vision Guard 119 Ext') {
		console.log('Target Extension Enabled');
	}
});

chrome.extension.isAllowedIncognitoAccess((isAllowedAccess) => {
	console.log('isAllowedAccess', isAllowedAccess);
});

chrome.storage.onChanged.addListener((changes, areaName) => {
	if (areaName === 'local' || areaName === 'sync') {
		const isStorageCleared = Object.keys(changes).length === 0;
		if (isStorageCleared) {
			console.log('Chrome storage has been cleared in the', areaName, 'area.');
		} else {
			console.log('Storage changes detected:', changes);
		}
	}
});
