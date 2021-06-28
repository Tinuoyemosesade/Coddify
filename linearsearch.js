function LineearSearch(value, list){
    let position = -1;
    let i = 0;
    let found = false;

    while (!found && i<list.length ){
        if ( value === list[i]){
            found = true;
            position = i;
        }else{
            i++;
        }
    }
    return position;
}

console.log (LinearSearch(55, [10, 55, 1111, 5, 3, 102]));