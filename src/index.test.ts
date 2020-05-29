import { windows1252Filter } from "./index";

test("should not filter out anything from simple 'Hello world' example", () => {
  const input = "Hello world";
  const output = windows1252Filter(input);
  expect(input).toEqual(output);
});

test("should filter out emojis", () => {
  const input = "Hello😁world";
  const output = windows1252Filter(input);
  expect(output).toEqual("Helloworld");
});

test("should filter out symbols", () => {
  const input = "♥";
  const output = windows1252Filter(input);
  expect(output).toEqual("");
});

test("should filter out multi-byte unicode (that is not reprented in windows-1252)", () => {
  const input = "和製漢語";
  const output = windows1252Filter(input);
  expect(output).toEqual("");
});

test("should not filter out any non-control characters from windows-1252", () => {
  const input =
    "!\"#$%&'()*+,-./0-9:;<=>?@A-Z[\\]^_`a-z{|}~€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ";
  const output = windows1252Filter(input);
  expect(output).toEqual(input);
});

test("should not filter out whitespace chars", () => {
  const nbsp = "\u00A0";
  const input = `\r\n\t ${nbsp}`;
  const output = windows1252Filter(input);
  expect(output).toEqual(input);
});

test("should handle a mixed bag of characters (© is in windows-1252 extended ASCII)", () => {
  const input = "A©和🙈©🎩和©Z";
  const output = windows1252Filter(input);
  expect(output).toEqual("A©©©Z");
});

test("should handle multi-line", () => {
  const input = `
    🙈©🎩和©Z

    🙈©🎩 和©Z


    🙈©🎩和©Z
  `;
  const output = windows1252Filter(input);
  expect(output).toEqual(`
    ©©Z

    © ©Z


    ©©Z
  `);
});
