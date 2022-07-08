// https://www.codewars.com/kata/5bb904724c47249b10000131

function points(games) {
  let ttl = 0

  games.map(el => {
    if(el[0] === el [2]) {
        ttl += 1
    } else if(el[0] > el[2]) {
        ttl += 3
    } 
  })

  return ttl
}

// Single line solution:
// const points = games => games.reduce((sum, [x, , y]) => sum + (x > y ? 3 : x == y), 0)

// Output:
console.log(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"])); // expected output: 10
console.log(points(['1:0','2:0','3:0','4:0','2:1','1:3','1:4','2:3','2:4','3:4'])); // expected output: 15
console.log(points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"])); // expected output: 0
console.log(points(["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"])); // expected output: 12