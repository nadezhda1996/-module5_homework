let number = +prompt("Введите число");
if (isNaN(number)){
    console.log("Упс, кажется, вы ошиблись");
} else {
    if (number % 2 == 0){
        console.log(number+ "- четное число");
    } else {
        console.log(number + "- нечетное число" );
    }
}
