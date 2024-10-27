let array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];
    let target = 8;
    let start = 0 ;
    let end = monthNames.length;
    for (let i = 0; i < end; i++) {
        let middle = Math.floor((start + end) / 2);
        if(start == end && target != monthNames[start]){
            console.log("Not found");
            break;
        }
        if(target == monthNames[middle])
        {
            console.log("element found at index: ",middle)
            break;
        }
        else if(target > monthNames[middle]){
            start = middle + 1;

        }
        else {
            end = middle - 1;
        }
    }
