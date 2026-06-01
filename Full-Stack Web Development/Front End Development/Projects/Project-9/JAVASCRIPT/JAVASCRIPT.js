// show right angle triangle star pattern below
function generateRightAnglePattern() {
    let rightAngleStarPattern = "";
    let a = document.getElementById("number1").value;
    for (i = 1; i <= a; i++) {
        for (j = 1; j <= i; j++){
            rightAngleStarPattern += " * ";
        }
        rightAngleStarPattern += " <br>";
    }
    document.getElementById("rightAngleStarPattern").innerHTML = rightAngleStarPattern;
}