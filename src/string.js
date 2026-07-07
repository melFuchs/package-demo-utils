export function capitalize (text){
    if (typeof text !== "string")
    {
      throw new TypeError('string expected');
    }
    if (text.length === 0){
      return '';
    } 
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function reverse (text){
    if (typeof text !== "string")
    {
      throw new TypeError('string expected');
    }
    if (text.length === 0){
      throw new TypeError('reverse(text): at least one character expected');
    } 
    return Array.from(text).reverse().join('');
}