// https://www.codewars.com/kata/56bcaedfcf6b7f2125001118

// function htmlspecialchars(str) {
//     const correction = {
//         "<" : "&lt;",
//         ">" : "&gt;",
//         '"' : "&quot;",
//         "&" : "&amp;"
//       }
      
//       return str.replace(/[<>"&]/g, (char) => correction[char]);
// }

// Single line:
const htmlspecialchars = str => str.replace(/[<>"&]/g, ch => ({"<":"&lt;",">":"&gt;","\"":"&quot;","&":"&amp;"}[ch]));

// Test
console.log(htmlspecialchars("<h2>Hello World</h2>")); // expected output: '&lt;h2&gt;Hello World&lt;/h2&gt;'
console.log(htmlspecialchars('How was "The Matrix"?  Did you like it?')); // expected output: 'How was &quot;The Matrix&quot;?  Did you like it?'