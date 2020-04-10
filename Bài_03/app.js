let inputA=parseInt(prompt("Nhập số a"));
let inputB=parseInt(prompt("Nhập Số b"));
function sum(a,b) {
    a=inputA;
    b=inputB;
    if (a>b){
        alert(" A Lớn Hơn B");
    }else if (a<b) {
        return a+b;
    }
}
document.write(sum(inputA,inputB));