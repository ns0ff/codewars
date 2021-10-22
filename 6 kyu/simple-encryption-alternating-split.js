function encrypt(text, n) {
    if (n <= 0 || !text) {
        return text;
    }

    let sec = text.split('').filter((el, i) => i%2 === 1);
    let res = text.split('').filter((el, i) => i%2 === 0);
    return encrypt(sec.concat(res).join(''),n-1);
}

function decrypt(encryptedText, n) {
    if (n <= 0 || !encryptedText) {
        return encryptedText;
    }

    let mid = encryptedText.length/2;
    let first = encryptedText.split('').slice(mid);
    let second = encryptedText.split('').slice(0, mid);
    let fin = [];

    for (i = 0; i < encryptedText.length; i++) {
        if (i%2 === i-1) {
            fin.push(second[i]);
            fin.push(first[i]);
        } else {
            fin.push(first[i]);
            fin.push(second[i]);
        }
    }

    return decrypt(fin.join(''), n - 1);
}

// Tests:
console.log(encrypt("This is a test!", 0)); // return This is a test!
console.log(decrypt("This is a test!", 0)); // return This is a test!
console.log(encrypt("This is a test!", 1)); // return hsi  etTi sats!
console.log(decrypt("hsi  etTi sats!", 1)); // return This is a test!
console.log(encrypt("This is a test!", 2)); // return s eT ashi tist!
console.log(decrypt("s eT ashi tist!", 2)); // return This is a test!
console.log(encrypt("This is a test!", 3)); // return  Tah itse sits!
console.log(decrypt(" Tah itse sits!", 3)); // return This is a test!
console.log(encrypt("This is a test!", -1)); // return This is a test!
console.log(decrypt("This is a test!", -1)); // return This is a test!