let arr1 = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"];
let arr2 = ["UrsaMinor", "Tarurus", "Cygnus", "Lyra", "Aquila", "UrsaMajor", "Leo"];
let inputTxt = prompt("Nhap ten cac ngoi sao: ");

function findName(name) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === name) {
            return arr1[i] + arr2[i];
        }
    }
    return "Vui long nhap lai";
}

alert(findName(inputTxt));