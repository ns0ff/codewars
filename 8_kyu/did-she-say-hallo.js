// https://www.codewars.com/kata/56a4addbfd4a55694100001f/train/javascript

function validateHello(greetings) {
    return  /(hello|ciao|salut|hallo|hola|ahoj|czesc)/i.test(greetings);
}

// Tests
console.log(validateHello('ahoj')); // expected output true
console.log(validateHello('meh')); // expected output false
console.log(validateHello('meh')); // expected output false
console.log(validateHello("VIsta WIe, hOW: hoMBre hAlLo. tREs viSTA. BieN: bieN: YoU Que HAsta: aHoJ hellO, You. TREs WIe; que, visTa. vISTA HAStA hOmbRE! BIEn, haLlo? DoInG TreS WiE! TSchusS, PASA hasta?")); // expected output true