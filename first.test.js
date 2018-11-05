const wdio = require("webdriverio");
const scrollUntill = require("./utils/scroll-untill");

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

(async () => {
  await client.init().waitForVisible("~Settings", 6000, false);
  await scrollUntill(client, "~Article 21");

  await client
    .click("~Article 21")
    .pause(2000)
    .end()
    .catch(e => {
      console.log(e);
    });
})();

//.click('//*[@text="Settings"]')
// console.log(await client.getElementSize("~Settings"));
// console.log(await client.getLocation("~Article 1"));
// .click(
//   "//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]"
// )
