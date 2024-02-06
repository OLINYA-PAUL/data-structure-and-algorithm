const array = [1,3,7,9,2]

const findArrayValue = (numValue, targetValue) => {
    for(let p1 = 0; p1 < numValue.length; p1++){
        const numberTofind = targetValue - numValue[p1];
        
        for(let p2 = p1 + 1; p2 < numValue.length; p2++){
            console.log(p1)
            if(numberTofind === numValue[p2]){
                return [p1, p2]
            }

        }
    }

    return null
}

// console.log(findArrayValue(array, 11)) Optimizing our solution


 function findtwosum(num, target) {
    const hashMap = {};

    for(let i = 0; i < num.length; i++){
        const hashMapValue = hashMap[num[i]];

        if(hashMapValue >= 0){
            return [hashMapValue, i];
        }
        else{
            const numberTofind = target - num[i];
            hashMap[numberTofind] = i;
        }
    }

    return null;
}

console.log(findtwosum(array, 12))