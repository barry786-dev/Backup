// start java script cosding here 
console.log('!--------colors ?-------!');
function colorGenerator() {
    let rgba = [];
    let str = '';
    function transGen() {
      return Math.random().toFixed(2);
    }
    function colorGen() {
      return Math.floor(Math.random() * 256);
    }
    rgba.push(colorGen(), colorGen(), colorGen(), transGen());
    return (str = `rgba(${rgba})`);
  }
  // easer version to color Generator
  /* function colorGenertor() {
    return `rgba(${Math.floor(Math.random() * 256)},${Math.floor(
      Math.random() * 256
    )},${Math.floor(Math.random() * 256)},${Math.random().toFixed(2)})`;
  } */
  // function to generate hexadecial colors
  /* function HexacolorGenertor() {
    function maketwodigit() {
      const hexacolorsnumbers = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
      let twodigits = `${hexacolorsnumbers[Math.floor(Math.random() * 16)]}${
        hexacolorsnumbers[Math.floor(Math.random() * 16)]
      }`;
      return twodigits;
    }
    return `#${maketwodigit()}${maketwodigit()}${maketwodigit()}${maketwodigit()}`;
  } */