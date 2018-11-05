module.exports = async (client, selector) => {
  while (!(await client.isVisible(selector))) {
    await client.touchAction([
      { action: "press", x: 0, y: 500 },
      { action: "wait", ms: 150 },
      { action: "moveTo", x: 0, y: 1 },
      "release"
    ]);
  }

  return true;
};
