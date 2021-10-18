function longest(s1, s2) {
    let longStr = s1 + s2;
    let sortedStr = longStr.split('').sort().join('');
    return sortedStr.split('').filter(function(item, pos, self) {
      return self.indexOf(item) == pos;
    }).join('');
}


console.log(longest("aretheyhere", "yestheyarehere"));  // "aehrsty"
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"));  // "abcdefghilnoprstu"
console.log(longest("inmanylanguages", "theresapairoffunctions"));  //  "acefghilmnoprstuy"