const wdio = require("webdriverio");

const opts = {
  port: 4723,
  desiredCapabilities: {
    platformName: "Android",
    platformVersion: "8.0",
    deviceName: "Android Emulator",
    app:
      "/Users/eugen/Projects/PocketDoctorUniversal/android/app/build/outputs/apk/release/app-release.apk",
    automationName: "UiAutomator"
  }
};

const client = wdio.remote(opts);

client
  .init()
  .pause(2000)

  //.click('//*[@text="Settings"]')

  .click("~Article 1")

  // .click(
  //   "//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]"
  // )

  .pause(2000)
  .end();
