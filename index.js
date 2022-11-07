let userArray = [];
while (!userArray.includes(null) && !userArray.some(isNaN)) {
    userArray.push(prompt('Enter the elements'));
    };
userArray.pop();
console.log(userArray);
userArray.sort((firstElement, secondElement) => {
    if (firstElement > secondElement) return 1;
    if (firstElement < secondElement) return -1;
    return 0;
});
console.log(userArray.sort());
userArray.splice(1,2);
