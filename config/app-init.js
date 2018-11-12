const wdio = require("webdriverio");

module.exports.AndroidFreeRusInit = () => {
  return wdio.remote({
    port: 4723,
    desiredCapabilities: {
      platformName: "Android",
      platformVersion: "8.1",
      deviceName: "Android Emulator",
      app: process.cwd() + "/app-release.apk",
      automationName: "UiAutomator"
    }
  });
};
