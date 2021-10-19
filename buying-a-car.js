function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
    if (startPriceOld >= startPriceNew) {
        return [0, Math.floor(startPriceOld - startPriceNew)];
    };

    let totalSavings = 0;
    let nowPriceOld = startPriceOld;
    let nowPriceNew = startPriceNew;
    let month = 0;
    let nowLossPercent = percentLossByMonth;

    while ((totalSavings + nowPriceOld) <= nowPriceNew) {
        month++;

        if (month % 2 === 0) {
            nowLossPercent += 0.5;
        }

        totalSavings += savingperMonth;
        nowPriceOld -= nowPriceOld * (nowLossPercent / 100); 
        nowPriceNew -= nowPriceNew * (nowLossPercent / 100); 
    }

    return [month, Math.round(totalSavings + nowPriceOld - nowPriceNew)];
}

// Tests
console.log(nbMonths(2000, 8000, 1000, 1.5)); // return [6, 766]
console.log(nbMonths(12000, 8000, 1000, 1.5)); // return [0, 4000]