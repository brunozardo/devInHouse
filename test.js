function lastElement(array){
    let ar = array;
    if (ar !== null){
        return ar[ar.length()-1];
    }
    return null;
}
lastElement([1,2,3])