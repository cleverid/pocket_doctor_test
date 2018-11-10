const wdio = require("webdriverio");
const scrollUntill = require("../utils/scroll-untill");

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

describe.only("Открытые статьи", () => {
  it("test", async () => {
    await client.init().waitForVisible("~Settings", 6000, false);
    await scrollUntill(client, "~Article 2");

    await client
      .click("~Article 2")
      .pause(2000)
      .end()
      .catch(e => {
        console.log(e);
      });

    return true;
  });
});
