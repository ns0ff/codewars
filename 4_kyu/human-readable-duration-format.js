// https://www.codewars.com/kata/52742f58faf5485cae000b9a

function formatDuration (sec) {
    let time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 }
    let res = []
    
    if(sec === 0) return 'now'
    
    for (let key in time) {
      if (sec >= time[key]) {
        let val = Math.floor(sec/time[key]);
        res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
        sec = sec % time[key]
      }
    }
   
    return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/,' and'+'$1') : res[0]
}
  
// Output:
console.log(formatDuration(1)); // Expected output: "1 second"
console.log(formatDuration(3600)); // Expected output: "1 hour"
console.log(formatDuration(3662)); // Expected output: "1 hour, 1 minute and 2 seconds"