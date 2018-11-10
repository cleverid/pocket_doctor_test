const wdio = require("webdriverio");

module.exports.appInitAndroidFree = () => {
  const opts = {
    port: 4723,
    desiredCapabilities: {
      platformName: "Android",
      platformVersion: "8.1",
      deviceName: "Android Emulator",
      app: process.cwd() + "/app-release.apk",
      automationName: "UiAutomator"
    }
  };

  const client = wdio.remote(opts);
  return client;
};
