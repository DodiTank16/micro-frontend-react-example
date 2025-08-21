// utils/loadRemote.js
export async function loadRemote(remoteUrl, scope, module) {
  return new Promise((resolve, reject) => {
    const element = document.createElement("script");
    element.src = remoteUrl;
    element.type = "text/javascript";
    element.async = true;

    element.onload = () => {
      // Initialize share scope
      __webpack_init_sharing__("default").then(() => {
        const container = window[scope];
        if (!container) {
          return reject(`Container ${scope} not found`);
        }
        container.init(__webpack_share_scopes__.default).then(() => {
          container
            .get(module)
            .then((factory) => resolve(factory()))
            .catch(reject);
        });
      });
    };

    element.onerror = () => {
      reject(new Error(`Failed to load remote: ${remoteUrl}`));
    };

    document.head.appendChild(element);
  });
}
