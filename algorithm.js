function fibs(n){
    let sequence = [] 
    for(let i = 0; i < n;i++){
        if(sequence.length < 2){
            sequence.push(i);
            continue;
        }
        let sum = sequence[sequence.length-1]+sequence[sequence.length-2];
        sequence.push(sum);
    }

    return sequence;
}

function fibsrec(n){
    if(n == 0){
        return [];
    }

    let sequence = fibsrec(n-1);

    if(sequence.length == 0){
        sequence.push(0)
    }else if(sequence.length == 1){
        sequence.push(1)
    }else if(sequence.length >= 2){
        sequence.push(sequence[sequence.length-1]+sequence[sequence.length-2]);
    }

    return sequence;
}


function mergeSort(arr){
    if(arr.length == 1){
        return [arr[0]];
    }

    let length = Math.ceil(arr.length/2);
    let halfLeft = arr.slice(0,length);
    let halfRight = arr.slice(length);
    
    let currValueLeft = mergeSort(halfLeft);
    let currValueRight = mergeSort(halfRight);

    let newArr = []

    while(currValueLeft.length > 0){
        if(currValueLeft[0] < currValueRight[0]){
            newArr.push(currValueLeft[0]);
            currValueLeft.splice(0,1);
        }else{
            newArr.push(currValueRight[0]);
            currValueRight.splice(0,1);
        }

        if(currValueLeft.length == 0 && currValueRight.length > 0){
            newArr.push(...currValueRight);
            break
        }else if(currValueRight.length == 0 && currValueLeft.length > 0){
            newArr.push(...currValueLeft);
            break
        }

    }

    return newArr;

}



let arr = [7,5,3,2,4,1,6];
console.log(mergeSort(arr));
console.log(fibsrec(8));