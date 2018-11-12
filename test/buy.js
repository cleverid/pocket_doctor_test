const expect = require("chai").expect;
const scrollUntill = require("../utils/scroll-untill");
const AndroidFreeRusInit = require("../config/app-init").AndroidFreeRusInit;

client = AndroidFreeRusInit();

describe("Открытые/закрытые статьи", () => {
  beforeEach(() => {
    return client.init();
  });

  afterEach(() => {
    return client.end();
  });

  it("Открытая статья", async () => {
    await client.waitForVisible("~Settings", 6000, false);
    await scrollUntill(client, "~Article 2");

    let visible = await client
      .click("~Article 2")
      .waitForVisible("~Page. Article 2", 6000, false)
      .isVisible("~Page. Article 2");

    expect(visible).to.be.true;
  });

  it("Закрытая статья", async () => {
    await client.waitForVisible("~Settings", 6000, false);
    await scrollUntill(client, "~Article 15");

    let visible = await client
      .click("~Article 15")
      .waitForVisible("~Page. Buy info", 6000, false)
      .isVisible("~Page. Buy info");

    expect(visible).to.be.true;
  });
});
