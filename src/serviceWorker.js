// serviceWorker.js
// Register and unregister functions should be defined as follows
export function unregister() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready
        .then(registration => {
          registration.unregister();
        })
        .catch(error => {
          console.error('Error during service worker unregistering:', error);
        });
    }
  }
  