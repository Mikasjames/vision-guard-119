chrome.runtime.onStartup.addListener(async () => {
  const { isExtensionDisabled, disabledTime } = await chrome.storage.local.get(['isExtensionDisabled', 'disabledTime']);

  // Set default values if they don't exist
  console.log('isExtensionDisabled:', isExtensionDisabled ?? 'Not set');
  console.log('disabledTime:', disabledTime ?? 'Not set');

  // Optional: Initialize default values if they are missing
  if (isExtensionDisabled === undefined) {
      await chrome.storage.local.set({ isExtensionDisabled: false });
  }
  if (disabledTime === undefined) {
      await chrome.storage.local.set({ disabledTime: null });
  }

  initializeMonitoring();
}); 

function initializeMonitoring() {
  chrome.management.onDisabled.addListener(async (info) => {
      if (info.id === chrome.runtime.id) {
          // Store the disabled state
          await chrome.storage.local.set({ 
              isExtensionDisabled: true, 
              disabledTime: Date.now() 
          });
      }
  });
}
