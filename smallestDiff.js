array1 = [4, 9, 2, 7, 1, 5, 3, 8, 6, 10]
array2 = [23, 17, 28, 12, 31, 20, 14, 26, 19, 30]


const smallestDiff = (arr1, arr2) => {
    arr1.sort((a, b) => a - b) 
    arr2.sort((a, b) => a - b) 

    let i = 0;
    let j = 0;

    let smallestDifference = Infinity;

    while(i < arr1.length && j < arr2.length) {
        let difference = Math.abs(arr1[i] - arr2[j])

        if(difference === 0) {
            return 0
        }

        if(difference < smallestDifference) {
            smallestDifference = difference
        }

        if(arr1[i] < arr2[j]) {
            i++
        } else {
            j++
        }
    }
    return smallestDifference
}