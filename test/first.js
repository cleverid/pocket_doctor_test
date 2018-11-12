const AndroidFreeRusInit = require("../config/app-init").AndroidFreeRusInit;

client = AndroidFreeRusInit();

describe("Переход по ссылкам", () => {
  beforeEach(() => {
    return client.init();
  });

  afterEach(() => {
    return client.end();
  });

  it("test", async () => {});
});
