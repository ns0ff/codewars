// https://www.codewars.com/kata/56efc695740d30f963000557

String.prototype.toAlternatingCase = function () {
    let result = '';
    for (i = 0; i < this.length; i++) {
      if(this[i] == this[i].toLowerCase()){
        result += this[i].toUpperCase();
      } else {
        result += this[i].toLowerCase();
      }
    }
    return result;
}

// Single line:
// String.prototype.toAlternatingCase = function () {
//     return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
// }