const wdio = require("webdriverio");

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
  await client.init().waitForVisible("~Settings", 3000, false);
  console.log(await client.getElementSize("~Settings"));
  // await client.touchScroll("~Article 42");
  // await client.touchAction("~Article 1", [
  //   "press",
  //   { action: "moveTo", x: 50, y: 100 },
  //   "release"
  // ]);

  await client.swipe("~Article 1", 10, 0, 2);

  await client

    //.click('//*[@text="Settings"]')
    // .touchAction(["press", { action: "moveTo", x: 0, y: 200 }, "release"])
    // .touchScroll("~Article 1", 0, 300)
    .click("~Article 1")

    // .click(
    //   "//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]"
    // )

    .pause(2000)
    .end()
    .catch(e => {
      console.log(e);
    });
})();
