/*
  Characters from https://encoding.spec.whatwg.org/index-windows-1252.txt

  With control characters removed.
 */
const re = /[\r\n\t \u00A0!"#\$%&'\(\)\*\+,-\.\/0-9:;<=>\?@A-Z\[\\\]\^_`a-z{\|}~€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ]*/g;

export const windows1252Filter = (input: string): string => {
  const result = (input.match(re) || []).join("");
  return result;
};
