function stringToArray(string){
    // return string.split(' ');
    let arr = string.match(/\S+/g);
    return arr;
}