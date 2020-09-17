const Game = require("./Game");

var game = new Game();

test("A = AA223, B = KKQQT", () => {
  game.setA("AA223");
  game.setB("KKQQT");
  expect(game.comparesion()).toBe(true);
});

test("A = AA234, B = AA235", () => {
  game.setA("AA234");
  game.setB("AA235");
  expect(game.comparesion()).toBe(false);
});

test("A = AAAA2, B = KKKK9", () => {
  game.setA("AAAA2");
  game.setB("KKKK9");
  expect(game.comparesion()).toBe(true);
});

test("A = AA567, B = 4567*", () => {
  game.setA("AA567");
  game.setB("4567*");
  expect(game.comparesion()).toBe(false);
});

test("A = AAA67, B = 4567*", () => {
  game.setA("AAA223");
  game.setB("4567*");
  expect(game.comparesion()).toBe(true);
});

test("A = A2679, B = KQ245", () => {
  game.setA("A2679");
  game.setB("KQ245");
  expect(game.comparesion()).toBe(true);
});

test("A = KKKK5, B = AAA99", () => {
  game.setA("KKKK5");
  game.setB("AAA99");
  expect(game.comparesion()).toBe(true);
});

test("A = KKKK5, B = AAA*9", () => {
    game.setA("KKKK5");
    game.setB("AAA*9");
    expect(game.comparesion()).toBe(false);
  });

test("A = 99888, B = 77888", () => {
  game.setA("99888");
  game.setB("77888");
  expect(game.comparesion()).toBe(true);
});


test("A = 23777, B = 23*56", () => {
    game.setA("23777");
    game.setB("23*56");
    expect(game.comparesion()).toBe(false);
  });
