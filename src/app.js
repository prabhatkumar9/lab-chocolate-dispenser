var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color

function addChocolates(chocolates, color, count) {
    var a = [];
    a.unshift("red");
    a.unshift("red");
    if (count > 0) {
        for (let i = 0; i < count; i++) {
            chocolates.push(color);
        }
    } else {
        return 'Number cannot be zero/negative';
    }

    return chocolates;
}

//Progression 2: Remove ___ chocolates from the top the dispenser

function removeChocolates(chocolates, number) {
    let a = [];
    var count = chocolates.length;
    if (count < number) {
        return "Insufficient chocolates in the dispenser";
    }
    if (number <= 0) {
        return "Number cannot be zero/negative";
    }
    for (let i = 0; i < number; i++) {
        a.push(chocolates.shift());
    }
    return a;
}


//Progression 3: Dispense ___ chocolates

function dispenseChocolates(chocolates, number) {
    var choco = [];
    let count = chocolates.length;
    if (number <= 0) {
        return "Number cannot be zero/negative";
    }
    if (count < number) {
        return "Insufficient chocolates in the dispenser";
    }
    for (let i = 0; i < number; i++) {
        choco.push(chocolates.pop());
    }
    return choco;
}


//Progression 4: Dispense ___ chocolates of ____ color

function dispenseChocolatesOfColor(chocolates, number, color) {
    let choco = [];
    var fav = 0;
    if (number > chocolates.length) {
        return "Insufficient chocolates in the dispenser";
    }

    if (number <= 0) {
        return "Number cannot be zero/negative";
    }

    for (let i = chocolates.length - 1; i >= 0; i--) {
        if (chocolates[i] == color) {
            choco.push(chocolates.pop());
            fav++;
            if (fav == number)
                return choco;
        }
    }
    if (fav != number) {
        return "Insufficient chocolates in the dispenser";
    }

}


//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]

function noOfChocolates(chocolates) {
    let chocoNum = [];
    for (let i = 0; i < chocolates.length; i++) {
        if (chocolates[i] !== 0) {
            var count = 1;
            for (let j = i + 1; j < chocolates.length; j++) {
                if (chocolates[i] == chocolates[j]) {
                    count++;
                    chocolates[j] = 0;
                }
            }
            chocoNum.push(count);
        }
    }
    return chocoNum;
}


//Progression 6: Sort chocolates based on count in each color. Return array of colors
function sortChocolateBasedOnCount(chocolates) {
    let chocoColor = [];
    let chocoNum = [];
    for (let i = 0; i < chocolates.length; i++) {
        if (chocolates[i] !== 0) {
            var count = 1;
            for (let j = i + 1; j < chocolates.length; j++) {
                if (chocolates[i] == chocolates[j]) {
                    count++;
                    chocolates[j] = 0;
                }
            }
            chocoNum.push(count);
            chocoColor.push(chocolates[i]);

        }
    }

    for (let i = 0; i < chocoNum.length; i++) {
        for (let j = 0; j < chocoNum.length - 1 - i; j++) {
            if (chocoNum[j] < chocoNum[j + 1]) {
                var temp = chocoNum[j];
                chocoNum[j] = chocoNum[j + 1];
                chocoNum[j + 1] = temp;
                let tempo = chocoColor[j];
                chocoColor[j] = chocoColor[j + 1];
                chocoColor[j + 1] = tempo;

            }
        }
    }

    let color = [];
    color.push((chocoColor.pop()))
    let num = [];
    num.push(chocoNum.pop());

    let sorted = [];
    for (let i = 0; i < color.length; i++) {
        for (let j = 0; j < num[i]; j++) {
            sorted.push(color[i]);
        }
    }

    return sorted;
}



//Progression 7: Change ___ chocolates of ____ color to ____ color

function changeChocolateColor(chocolates, number, color, finalColor) {
    var count = 0;
    if (chocolates.length == 0)
        return chocolates;
    if (number <= 0)
        return "Number cannot be zero/negative";
    if (number > chocolates.length)
        return "Insufficient chocolates in the dispenser";
    for (var i = 0; i < chocolates.length; i++) {
        if (chocolates[i] == finalColor)
            return "Can't replace the same chocolates";
        if (chocolates[i] == color) {
            chocolates[i] = finalColor;
            count++;
            if (count == number)
                return chocolates;

        }
    }
    if (count < number)
        return "Insufficient chocolates in the dispenser";

}


//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]

function changeChocolateColorAllOfxCount(chocolates, color, finalColor) {
    var count = 0;
    let arr = [];
    let fin = [];
    if (chocolates.length == 0) {
        arr.push(count, fin);
        return arr;
    } else {
        for (var i = 0; i < chocolates.length; i++) {
            if (chocolates[i] == finalColor)
                return "Can't replace the same chocolates";

            else if (chocolates[i] == color) {
                chocolates[i] = finalColor;
            }

        }
    }
    for (var i = 0; i < chocolates.length; i++) {
        if (chocolates[i] == finalColor) {
            count++;
            fin.push(chocolates[i]);
        }
    }
    arr.push(count, fin);
    return arr;
}



//Challenge 1: Remove one chocolate of ____ color from the top


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed