const AndroidFreeRusInit = require("../config/app-init").AndroidFreeRusInit;

client = AndroidFreeRusInit();

describe("Переход по изображениям", () => {
  beforeEach(() => {
    return client.init();
  });

  afterEach(() => {
    return client.end();
  });

  it.only("test", async () => {});
});
