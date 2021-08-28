
export const filteringOutByDeletetime = <T>(array: T[]) => {
    //TODO: deleteTimeをrequiredにする方法はないのか？
    return array.filter(d => new Date(d.deleteTime) > new Date())
}

// export const deleteDuplicateKey = <T>(array: T[]) => {
//     return array.filter((element, index, self) =>
//         self.findIndex(e =>
//             e.key === element.key
//         ) === index
//     );
// }

export const updateArray = <T>(array: T[], newElement: T) => {
    const deletedArray = array.filter(d => d.key !== newElement.key)
    const newArray = deletedArray.concat(newElement);
    newArray.sort(function (a, b) {
        var keyA = a.key,
            keyB = b.key;
        // Compare the 2 dates
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
    });
    return newArray
}