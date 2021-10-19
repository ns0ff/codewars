function alphabetPosition(text) {
  let position = [];

	for ( var i = 0; i < text.length; i++ ) {
		let charCode = text.charCodeAt( i );

		if ( charCode >= 97 && charCode <= 122 ) {
			position.push( charCode - 96 );
		} else if ( charCode >= 65 && charCode <= 90 ) {
			position.push( charCode - 64 );
		}
	}

  let str = position.join(' ');
	return str;
}


// Tests
console.log(alphabetPosition("The sunset sets at twelve o' clock.")); // return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
console.log(alphabetPosition("The narwhal bacons at midnight.")); // return "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"
