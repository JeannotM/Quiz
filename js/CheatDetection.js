// This file can be found on line 160 in quiz.js
// The reason why this function has this name: https://youtu.be/kJGcDU4esUY?t=338

/** Sends score of the player to the Quiz-API after checking for cheating.
 * @param student Student number of player
 * @param points Points of player
 * @param time Time spent doing the quiz
 * */
function virginSlayer(student, points, time) {
    let errstring = '';
    let cheated = 0;
    let countedPoints = 0;
    if (points > 10) {
        cheated = 1;
        errstring += 'Je hebt meer punten in gecheat dan dat aanwezig is op de website<br>';
    }
    if (time < 25 && points === 10) {
        cheated = 1;
        errstring += 'Je hebt deze quiz zeker eerder gedaan?<br>';
    }
    if (time < 10) {
        cheated = 1;
        errstring += 'Had je zo weinig tijd nodig?<br>';
    }
    for (let i = 0; i < 10; i++) {
        if (g[random[i]] == b[random[i]][2]) {
            countedPoints++;
        }
    }
    if (countedPoints !== points || document.getElementById("shownAnswers").getElementsByClassName("right").length !== points) {
        cheated = 1;
        errstring += 'Wow, Je hebt meer punten toegevoegd met het gebruik van JavaScript<br>';
    }

    if (getCookie('vs') !== "") {
        errstring = 'Je hebt eerder cheats gebruikt, waarom zou ik je nu vertrouwen?<br>';
        document.getElementById('information-end').innerHTML = errstring;
    } else if (cheated === 0) {
        // The AJAX call to the database would come here, but due too security reasons has been removes
    } else {
        setCookie('vs', 1, 365);
        document.getElementById('information-end').innerHTML = errstring;
    }
}
if (studentInfo == null) {
    document.getElementById('information-end').innerHTML = 'WTF, je bent niet eens ingelogd.<br>';
} else {
    virginSlayer(studentInfo['number'], correctAnswered, (seconds + (minutes * 60)));
}