const wdio = require("webdriverio");
const expect = require("chai").expect;
const scrollUntill = require("../utils/scroll-untill");
const appInitAndroidFree = require("../config/app-init").appInitAndroidFree;

let client;

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

client = wdio.remote(opts);

describe.only("Открытые/закрытые статьи", () => {
  beforeEach(() => {});
  it("Открытая статья", async () => {
    client.init().waitForVisible("~Settings", 6000, false);
    await scrollUntill(client, "~Article 2");

    let visible = await client
      .click("~Article 2")
      .waitForVisible("~Page. Article 2", 6000, false)
      .isVisible("~Page. Article 2")
      .end();

    expect(visible).to.be.true;
  });

  it("Закрытая статья", async () => {
    client.init().waitForVisible("~Settings", 6000, false);
    await scrollUntill(client, "~Article 15");

    let visible = await client
      .click("~Article 15")
      .waitForVisible("~Page. Buy info", 6000, false)
      .isVisible("~Page. Buy info")
      .end();

    expect(visible).to.be.true;
  });
});
