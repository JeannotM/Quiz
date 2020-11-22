/* jshint esversion: 6 */
const complimenten = ["Goedzo!", "Goed gedaan!", "Nice!", "Klopt helemaal!", "Ik ben trots op jou!", "Slimme koekie hoor!", "DAYUMM!!!", "Zoinks!", "Wouwiieee"];
const complimentWindow = document.getElementById("complimentWindow");
const AnswerButtons = document.getElementsByClassName("answers");
const vragenClass = document.getElementsByClassName("vraag");
const page = document.getElementsByClassName("page");
var vragenCount = 0;
var g = [];
const b = [
    ["SFRNTCBpcyBlZW4gZWNodGUgcHJvZ3JhbW1lZXJ0YWFs", ["S2xvcHQ=", "Rm91dA==", "R2VlbiBtZW5pbmc=", "TmlldCB6ZWtlcg=="], "MA==", "SFRNTCBpcyBlZW4gZWNodGUgcHJvZ3JhbW1lZXJ0YWFsLCBtYWFyIGluIGRlIHByb2dyYW1tZWVyIHdlcmVsZCB3b3JkdCBkZSB0YWFsIG5pZXQgaG9vZyBnZXppZW4="],
    ["V2FhcnZvb3IgZGllbnQgZWVuIDxzcGFuIGNsYXNzPSJjb2RlIj5JRnJhbWU8L3NwYW4+IGluIEhUTUw/", ["T20gM0QvVlIgYXBwbGljYXRpZXMgb25saW5lIHRlIGdlYnJ1aWtlbg==", "RWVuIDxzcGFuIGNsYXNzPSJjb2RlIj5ESVY8L3NwYW4+IHZvb3IgYW5pbWF0aWVz", "T20gdmlkZW8ncyBlbiBwYWdpbmEncyB0ZSBsYXRlbiB6aWVu", "QWxsZSAzIGRlIGJlc2NocmV2ZW4gaXRlbXM="], "Mg==", "RWVuIDxzcGFuIGNsYXNzPSdjb2RlJz5JRnJhbWU8L3NwYW4+IGlzIGJlZG9lbGQgb20gcGFnaW5hJ3MgZW4gdmlkZW8ncyB0ZSBydW5uZW4uIHZvb3IgM0QvVlIgZGluZ2VuIGdlYnJ1aWsgamUgZGUgZnJhbWV3b3JrIDxhIGhyZWY9J2h0dHBzOi8vYWZyYW1lLmlvLyc+QS1GcmFtZTwvYT4gb2YgYmVsYWNoZWxpamsgdmVlbCBDU1MgZW4gSmF2YVNjcmlwdC4gRW4gdm9vciBhbmltYXRpZXMgZ2VicnVpayBqZSBDU1M="],
    ["SG9lIGJyZWVrIGplIGNvcnJlY3QgZWVuIGxpam4gaW4gZWVuIFN0cmluZyBpbiBIVE1MPw==", ["PHNwYW4gY2xhc3M9ImNvZGUiPm5sPC9zcGFuPg==", "PHNwYW4gY2xhc3M9ImNvZGUiPmJyPC9zcGFuPg==", "PHNwYW4gY2xhc3M9ImNvZGUiPmJyZWFrPC9zcGFuPg==", "PHNwYW4gY2xhc3M9ImNvZGUiPmxiPC9zcGFuPg=="], "MQ==", "QWxsZWVuIGRlIDxzcGFuIGNsYXNzPSdjb2RlJz5icjwvc3Bhbj4gdGFnIGthbiBlZW4gbGlqbiBicmVrZW4="],
    ["V2FhciBzdGFhdCBDU1Mgdm9vcj8=", ["Q3JlYXRpdmUgU3R5bGUgU2hlZXRz", "Q29sb3JmdWwgU3R5bGUgU2hlZXRz", "Q2FzY2FkaW5nIFN0eWxlIFNoZWV0cw==", "Q29tcHV0ZXIgU3R5bGUgU2hlZXRz"], "Mg==", "Q1NTIHN0YWF0IHZvb3IgQ2FzY2FkaW5nIFN0eWxlIFNoZWV0cw=="],
    ["SG9lIHJlZmVyZWVyIGplIGNvcnJlY3QgbmFhciBlZW4gSmF2YVNjcmlwdCBiZXN0YW5kPw==", ["PHNwYW4gY2xhc3M9ImNvZGUiPnNjcmlwdCBzcmM9Inh4eC5qcyI8L3NwYW4+", "PHNwYW4gY2xhc3M9ImNvZGUiPnNjcmlwdCBocmVmPSJ4eHguanMiPC9zcGFuPg==", "PHNwYW4gY2xhc3M9ImNvZGUiPnNjcmlwdCBuYW1lPSJ4eHguanMiPC9zcGFuPg==", "PHNwYW4gY2xhc3M9ImNvZGUiPnNjcmlwdCBsb2M9Inh4eC5qcyI8L3NwYW4+"], "MA==", "Vm9vciBlZW4gc2NyaXB0IGdlYnJ1aWtlbiB3ZSBzcmMuIEhyZWYgd29yZHQgYWxsZWVuIGdlYnJ1aWt0IHZvb3IgbGlua2plcywgbmFtZSBhbGxlZW4gdm9vciBkZSBuYWFtZ2V2aW5nIGVuIGxvYyBpcyBlZW4gYWZrb3J0aW5nIHZhbiBsb2NhdGlvbg=="],
    ["SG9lIG1hYWsgamUgZWVuIGZ1bmN0aWUgYWFuIGluIEphdmFTY2lwdD8=", ["ZnVuY3Rpb24gPSBteUZ1bmN0aW9uKCk=", "ZnVuY3Rpb248c3BhbiBjbGFzcz0ibWluLXRla2VuIj4tPC9zcGFuPiZndDtteUZ1bmN0aW9uKCk=", "ZnVuY3Rpb24ubXlGdW5jdGlvbigp", "ZnVuY3Rpb24gbXlGdW5jdGlvbigp"], "Mw==", "VmFuIGRlemUgd2FhcmRlcyBrYW4gamUgYWxsZWVuIGVlbiBmdW5jdGllIG1ha2VuIG1ldCBmdW5jdGlvbiBteUZ1bmN0aW9uKCk="],
    ["V2Vsa2UgdmFuIGRlIDQgaXMgY29ycmVjdD8=", ["aWYgaSA9PSA1", "aWYgKGkgPSA1KQ==", "aWYgaSA9PSA1IHRoZW4=", "aWYgKGkgPT0gNSk="], "Mw==", "aWYgKGkgPT0gNSkgaXMgY29ycmVjdC4gMSA9IGJldGVrZW50IGRhdCBkaXQgZGUgd2FhcmRlIGlzIGVuIDIgPT0gdGVrZW5zIGJldGVrZW50IGRhdCBoZXQgd29yZHQgdmVyZ2VsZWtlbiBtZXQgZWVuIGJlcGFhbGRlIHdhYXJkZQ=="],
    ["V2Vsa2Ugc29vcnQgY29tbWVudCBrb210IE5JRVQgdm9vciBpbiBIVE1MLCBDU1Mgb2YgSmF2YVNjcmlwdD8=", ["PHNwYW4gY2xhc3M9ImNvbW1lbnQiPi8qKiBDb21tZW50ICoqLzwvc3Bhbj4=", "PHNwYW4gY2xhc3M9ImNvbW1lbnQiPiMgQ29tbWVudDwvc3Bhbj4=", "PHNwYW4gY2xhc3M9ImNvbW1lbnQiPi8vIENvbW1lbnQ8L3NwYW4+", "PHNwYW4gY2xhc3M9ImNvbW1lbnQiPiYjNjA7ITxzcGFuIGNsYXNzPSJtaW4tdGVrZW4iPi0tPC9zcGFuPiBDb21tZW50IDxzcGFuIGNsYXNzPSJtaW4tdGVrZW4iPi0tPC9zcGFuPj48L3NwYW4+"], "MQ==", "SFRNTCBoZWVmdCAmIzYwOyEtLSAtLT4sIENTUyBlbiBKYXZhU2NyaXB0IGhlYmJlbiAvLyBlbiAvKiogKiovIGVuIGdlZW4gdmFuIGRlemUgcHJvZ3JhbW1lZXJ0YWxlbiBoZWVmdCBkZSAj"],
    ["V2Vsa2UgdmFuIGRlemUgb3BlcmF0b3JlbiBrYW4gamUgTklFVCBnZWJydWlrZW4gdm9vciByZWtlbmVuIGluIEphdmFTY3JpcHQ/", ["Og==", "JQ==", "Kg==", "PHNwYW4gY2xhc3M9Im1pbi10ZWtlbiI+LTwvc3Bhbj49"], "MA==", "SW4gZGUgbWVuc2VuIHdlcmVsZCB3b3JkdCBkZSBkdWJiZWxlIHB1bnQgZ2VicnVpa3Qgb20gdGUgZGVsZW4sIGluIGRlIGNvbXB1dGVyIHdlcmVsZCBnZWJldXJ0IGRhdCBtZXQgZGUgLywgZGUgJSB3b3JkdCBnZWJydWlrdCBvbSBkZSByZXN0IHVpdCB0ZSByZWtlbmVuICg1ICUgMiA9IDEp"],
    ["V2Vsa2UgdGFnIHdvcmR0IGdlYnJ1aWt0IG9tIG5hdmlnYXRpZSdzIGFhbiB0ZSBnZXZlbj8=", ["PHNwYW4gY2xhc3M9ImNvZGUiPm5hdmlnYXRpb248L3NwYW4+", "PHNwYW4gY2xhc3M9ImNvZGUiPm5hdmlnYXRlPC9zcGFuPg==", "PHNwYW4gY2xhc3M9ImNvZGUiPmRpdjwvc3Bhbj4=", "PHNwYW4gY2xhc3M9ImNvZGUiPm5hdjwvc3Bhbj4="], "Mw==", "SmUga2FuIGVlbiA8c3BhbiBjbGFzcz0nY29kZSc+ZGl2PC9zcGFuPiBnZWJydWlrZW4sIG1hYXIgZGUgPHNwYW4gY2xhc3M9J2NvZGUnPm5hdjwvc3Bhbj4gaXMgb20gaGV0IGR1aWRlbGlqayBhYW4gdGUgZ2V2ZW4gaW4gZGUgSFRNTCBjb2Rl"]
];
var random = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const images = { 0: "html.jpg", 1: "matrix.gif", 3: "css.jpg", 7: "comment.jpg", 9: "navigation.gif" };
const month = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"];
var totalAnswered = 0;
var correctAnswered = 0;
var timer;
var filler;
var studentInfo;
var seconds = 0;
var minutes = 0;

function keyboardFunctionality(_, e) {
    switch (e.keyCode) {
        case 49:
        case 96: // (Num) 1
            answerQuestion(0, 0);
            break;
        case 50:
        case 97: // (Num) 2
            answerQuestion(1, 1);
            break;
        case 51:
        case 98: // (Num) 3
            answerQuestion(2, 2);
            break;
        case 52:
        case 99: // (Num) 4
            answerQuestion(3, 3);
            break;
        case 8: // BackSpace
            prevQuestion();
            break;
        case 13: // Enter
            nextQuestion();
            break;
        default:
            break;
    }
}

/** The counter that counts how long you've been doing the quiz */
function counter() {
    seconds += 1;
    if (seconds == 60) {
        minutes += 1;
        seconds = 0;
        filler = 0;
    } else if (seconds < 10) {
        filler = 0;
    } else {
        filler = "";
    }
    document.getElementById("time").textContent = minutes + ":" + filler + seconds;
}

/** Add actions to page buttons  */
function addButtonActions() {
    var startButton = document.getElementById('button-start');
    startButton.addEventListener("click", function () {
        startButton.disabled = true;
        showQuestionsPage();
    });
    document.getElementById('button-information').addEventListener("click", function () {
        document.getElementById("information").classList.toggle("active");
    });
    document.getElementById("next").addEventListener("click", function () {
        nextQuestion();
    });
    document.getElementById("prev").addEventListener("click", function () {
        prevQuestion();
    });
    document.getElementById("inlogcheck").addEventListener("click", function () {
        checkStudent();
    });
    document.getElementById("particles").addEventListener("click", function () {
        particles();
    });
    document.getElementById("twitter").addEventListener("click", function () {
        var strtwt = "Wow, ik heb zojuist " + correctAnswered + " punten van de 10 gescoord in " + minutes + ":" + seconds + " op een quiz die over HTML, CSS en JavaScript gaat!";
        window.open("https://twitter.com/intent/tweet?text=" + encodeURI(strtwt));
    });
    document.getElementById("scoreboard").addEventListener("click", function () {
        document.getElementById("latestScore").classList.toggle("active");
        document.getElementById("topScore").classList.toggle("active");
        if (document.getElementById("latestScore").classList.contains("active")) {
            document.getElementById("scoreboard").textContent = "Bekijk top score";
        } else {
            document.getElementById("scoreboard").textContent = "Bekijk recente score";
        }
    });
    document.body.addEventListener('keydown', function (event) {
        keyboardFunctionality(this, event);
    });
    for (let i = 0; i < 10; i++) {
        var div = document.createElement("div");
        div.className = "block";
        document.getElementById("shownAnswers").appendChild(div);
    }
}

/** Show start page */
function showStartPage() {
    if (getCookie("user") !== "" && getCookie("user") !== null) {
        studentInfo = JSON.parse(getCookie("user"));
        document.getElementById("username").textContent = JSON.parse(getCookie("user")).firstName + " " + JSON.parse(getCookie("user")).lastName;
        var inlogbox = document.getElementById("inlogbox");
        inlogbox.parentNode.removeChild(inlogbox);
        studentInfo = JSON.parse(getCookie("user"));
    }
}

/** Show Questions page */
function showQuestionsPage() {
    buildQuestionPage(random[vragenCount]);
    vragenClass[0].classList.add("active");
    page[1].classList.add("slide-down-up");
    timer = setInterval(function () { counter(); }, 1000);

    setTimeout(function () {
        page[2].classList.add("deactivate");
        page[1].classList.remove("slide-down-up");
        page[1].classList.add("active");
    }, 990);
}

/** Show Last page */
function showEndPage() {
    clearInterval(timer);
    page[0].classList.add("slide-down-up");
    setTimeout(function () {
        page[1].classList.add("deactivate");
        page[0].classList.remove("slide-down-up");
        page[0].classList.add("active");
    }, 990);
    eval(atob("Ly8gRGl0IGJlc3RhbmQgaXMgdGUgdmluZGVuIG9wIGxpam4gMTYzIGluIHF1aXouanMNCi8vIEhleSBhbHMgamUgZGl0IGhlYnQgJ29wZW4gZ2VrcmFha3QnIGJlbiBqZSBhY2h0ZXIgYWwgbWlqbiBnZWhlaW1lbiBnZWtvbWVuLCBpayB3aWxkZSBtaW5pbWFsZSBiZXZlaWxpZ2luZyB0ZWdlbiBtZW5zZW4gZGllIHZhbHMgc3BlZWxkZSwgZHVzIGhlYiBpayBkZXplIGZ1bmN0aWUgaGllciBnZWhhc2hlZA0KLy8gV2Fhcm9tIGRlIGZ1bmN0aWUgem8gaGVldDogaHR0cHM6Ly95b3V0dS5iZS9rSkdjRFU0ZXNVWT90PTMzOA0KDQovKiogU2VuZHMgc2NvcmUgb2YgdGhlIHBsYXllciB0byB0aGUgUXVpei1BUEkgYWZ0ZXIgY2hlY2tpbmcgZm9yIGNoZWF0aW5nLg0KICogQHBhcmFtIHN0dWRlbnQgU3R1ZGVudCBudW1iZXIgb2YgcGxheWVyDQogKiBAcGFyYW0gcG9pbnRzIFBvaW50cyBvZiBwbGF5ZXINCiAqIEBwYXJhbSB0aW1lIFRpbWUgc3BlbnQgZG9pbmcgdGhlIHF1aXoNCiAqICovDQpmdW5jdGlvbiB2aXJnaW5TbGF5ZXIoc3R1ZGVudCwgcG9pbnRzLCB0aW1lKSB7DQogICAgbGV0IGVycnN0cmluZyA9ICcnOw0KICAgIGxldCBjaGVhdGVkID0gMDsNCiAgICBsZXQgY291bnRlZFBvaW50cyA9IDA7DQogICAgaWYgKHBvaW50cyA+IDEwKSB7DQogICAgICAgIGNoZWF0ZWQgPSAxOw0KICAgICAgICBlcnJzdHJpbmcgKz0gJ0plIGhlYnQgbWVlciBwdW50ZW4gaW4gZ2VjaGVhdCBkYW4gZGF0IGFhbndlemlnIGlzIG9wIGRlIHdlYnNpdGU8YnI+JzsNCiAgICB9DQogICAgaWYgKHRpbWUgPCAyNSAmJiBwb2ludHMgPT09IDEwKSB7DQogICAgICAgIGNoZWF0ZWQgPSAxOw0KICAgICAgICBlcnJzdHJpbmcgKz0gJ0plIGhlYnQgZGV6ZSBxdWl6IHpla2VyIGVlcmRlciBnZWRhYW4/PGJyPic7DQogICAgfQ0KICAgIGlmICh0aW1lIDwgMTApIHsNCiAgICAgICAgY2hlYXRlZCA9IDE7DQogICAgICAgIGVycnN0cmluZyArPSAnSGFkIGplIHpvIHdlaW5pZyB0aWpkIG5vZGlnPzxicj4nOw0KICAgIH0NCiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHsNCiAgICAgICAgaWYgKGdbcmFuZG9tW2ldXSA9PSBiW3JhbmRvbVtpXV1bMl0pIHsNCiAgICAgICAgICAgIGNvdW50ZWRQb2ludHMrKzsNCiAgICAgICAgfQ0KICAgIH0NCiAgICBpZiAoY291bnRlZFBvaW50cyAhPT0gcG9pbnRzIHx8IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJzaG93bkFuc3dlcnMiKS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCJyaWdodCIpLmxlbmd0aCAhPT0gcG9pbnRzKSB7DQogICAgICAgIGNoZWF0ZWQgPSAxOw0KICAgICAgICBlcnJzdHJpbmcgKz0gJ1dvdywgSmUgaGVidCBtZWVyIHB1bnRlbiB0b2VnZXZvZWdkIG1ldCBoZXQgZ2VicnVpayB2YW4gSmF2YVNjcmlwdDxicj4nOw0KICAgIH0NCg0KICAgIGlmIChnZXRDb29raWUoJ3ZzJykgIT09ICIiKSB7DQogICAgICAgIGVycnN0cmluZyA9ICdKZSBoZWJ0IGVlcmRlciBjaGVhdHMgZ2VicnVpa3QsIHdhYXJvbSB6b3UgaWsgamUgbnUgdmVydHJvdXdlbj88YnI+JzsNCiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZm9ybWF0aW9uLWVuZCcpLmlubmVySFRNTCA9IGVycnN0cmluZzsNCiAgICB9IGVsc2UgaWYgKGNoZWF0ZWQgPT09IDApIHsNCiAgICAgICAgLy8gSGllciB6b3UgZGFuIGR1cyBlZW4gQUpBWCBjYWxsIGtvbWVuIGRpZSBuYWFyIGRlIGRhdGFiYXNlIGdhYXQNCiAgICB9IGVsc2Ugew0KICAgICAgICBzZXRDb29raWUoJ3ZzJywgMSwgMzY1KTsNCiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZm9ybWF0aW9uLWVuZCcpLmlubmVySFRNTCA9IGVycnN0cmluZzsNCiAgICB9DQp9DQppZiAoc3R1ZGVudEluZm8gPT0gbnVsbCkgew0KICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmZvcm1hdGlvbi1lbmQnKS5pbm5lckhUTUwgPSAnV1RGLCBqZSBiZW50IG5pZXQgZWVucyBpbmdlbG9nZC48YnI+JzsNCn0gZWxzZSB7DQogICAgdmlyZ2luU2xheWVyKHN0dWRlbnRJbmZvWydudW1iZXInXSwgY29ycmVjdEFuc3dlcmVkLCAoc2Vjb25kcyArIChtaW51dGVzICogNjApKSk7DQp9"));
    showLeaderBoard();
}

/** Go to the next question */
function nextQuestion() {
    if (vragenCount < 9 && g.length > vragenCount) {
        document.getElementById("prev").disabled = false;
        vragenCount++;
        buildQuestionPage(random[vragenCount]);
        vragenClass[0].classList.remove("active");
        vragenClass[0].classList.add("slide-to-left");
        vragenClass[1].classList.add("slide-from-right");
        vragenClass[1].classList.add("active");

        setTimeout(function () {
            vragenClass[0].parentNode.removeChild(vragenClass[0]);
            vragenClass[0].classList.remove("slide-from-right");
        }, 790);
        if (g.length == vragenCount) {
            document.getElementById("next").disabled = true;
        }
    }
}

/** Go to the previous question */
function prevQuestion() {
    if (vragenCount > 0) {
        vragenCount--;
        document.getElementById("next").disabled = false;
        buildQuestionPage(random[vragenCount]);
        vragenClass[0].classList.remove("active");
        vragenClass[0].classList.add("slide-to-right");
        vragenClass[1].classList.add("slide-from-left");
        vragenClass[1].classList.add("active");

        setTimeout(function () {
            vragenClass[0].parentNode.removeChild(vragenClass[0]);
            vragenClass[0].classList.remove("slide-from-left");
        }, 790);
    }
    if (vragenCount === 0) {
        document.getElementById("prev").disabled = true;
    }
}

/** API Call to the database */
function showLeaderBoard() {
    var arr = [
        { date: "2020-09-15 15:49:49", player: { number: "s1155764", firstName: "Jeannot", lastName: "G." }, points: 9, time: 22 },
        { date: "2020-09-15 16:18:48", player: { number: "s1155764", firstName: "Jeannot", lastName: "G." }, points: 9, time: 25 },
        { date: "2020-09-15 19:51:07", player: { number: "s1155764", firstName: "Jeannot", lastName: "G." }, points: 10, time: 31 },
        { date: "2020-09-15 20:10:38", player: { number: "s1155764", firstName: "Jeannot", lastName: "G." }, points: 9, time: 40 },
        { date: "2020-09-15 20:21:12", player: { number: "s1155764", firstName: "Jeannot", lastName: "G." }, points: 3, time: 16 },
        { date: "2020-09-15 20:22:52", player: { number: "s1155764", firstName: "Jeannot", lastName: "G." }, points: 4, time: 17 },
        { date: "2020-09-15 20:25:04", player: { number: "s1155764", firstName: "Jeannot", lastName: "G." }, points: 6, time: 20 },
        { date: "2020-09-15 20:27:04", player: { number: "s1155764", firstName: "Jeannot", lastName: "G." }, points: 7, time: 21 },
        { date: "2020-09-15 20:36:50", player: { number: "s1155764", firstName: "Jeannot", lastName: "G." }, points: 6, time: 21 },
        { date: "2020-09-15 20:39:03", player: { number: "s1155764", firstName: "Jeannot", lastName: "G." }, points: 2, time: 36 },
        { date: "2020-09-15 20:40:14", player: { number: "s1155764", firstName: "Jeannot", lastName: "G." }, points: 6, time: 23 },
        { date: "2020-09-15 20:42:02", player: { number: "s1155764", firstName: "Jeannot", lastName: "G." }, points: 9, time: 23 },
        { date: "2020-09-15 20:54:30", player: { number: "s1155764", firstName: "Jeannot", lastName: "G." }, points: 9, time: 25 },
        { date: "2020-09-15 21:03:11", player: { number: "s1155764", firstName: "Jeannot", lastName: "G." }, points: 9, time: 28 },
        { date: "2020-09-16 13:24:06", player: { number: "s1155764", firstName: "Jeannot", lastName: "G." }, points: 5, time: 16 },
        { date: "2020-09-16 13:25:49", player: { number: "s1155764", firstName: "Jeannot", lastName: "G." }, points: 9, time: 19 },
        { date: "2020-09-16 13:34:23", player: { number: "s1155764", firstName: "Jeannot", lastName: "G." }, points: 7, time: 16 },
        { date: "2020-09-16 13:35:11", player: { number: "s1155764", firstName: "Jeannot", lastName: "G." }, points: 9, time: 18 },
        { date: "2020-09-16 13:43:29", player: { number: "s1155764", firstName: "Jeannot", lastName: "G." }, points: 9, time: 20 },
        { date: "2020-09-16 14:05:21", player: { number: "s1155764", firstName: "Jeannot", lastName: "G." }, points: 9, time: 20 },
        { date: "2020-09-16 14:16:01", player: { number: "s1155764", firstName: "Jeannot", lastName: "G." }, points: 9, time: 19 },
        { date: "2020-09-16 14:33:13", player: { number: "s1155764", firstName: "Jeannot", lastName: "G." }, points: 9, time: 21 },
        { date: "2020-09-16 16:56:51", player: { number: "s1155764", firstName: "Jeannot", lastName: "G." }, points: 9, time: 20 },
        { date: "2020-09-16 17:11:55", player: { number: "s1155616", firstName: "Soufiane", lastName: "R." }, points: 9, time: 187 },
        { date: "2020-09-16 17:19:45", player: { number: "s1155616", firstName: "Soufiane", lastName: "R." }, points: 10, time: 35 },
        { date: "2020-09-16 17:29:56", player: { number: "s1155616", firstName: "Soufiane", lastName: "R." }, points: 6, time: 154 },
        { date: "2020-09-16 18:00:44", player: { number: "s1160736", firstName: "Roy", lastName: "F." }, points: 8, time: 126 },
        { date: "2020-09-16 19:14:44", player: { number: "s1162762", firstName: "Dennis", lastName: "Z." }, points: 2, time: 83 },
        { date: "2020-09-16 19:43:17", player: { number: "s1160736", firstName: "Roy", lastName: "F." }, points: 3, time: 176 },
        { date: "2020-09-16 19:54:55", player: { number: "s1162762", firstName: "Dennis", lastName: "Z." }, points: 2, time: 23 },
        { date: "2020-09-16 21:25:36", player: { number: "s1162762", firstName: "Dennis", lastName: "Z." }, points: 4, time: 149 },
        { date: "2020-09-16 21:26:17", player: { number: "s1162762", firstName: "Dennis", lastName: "Z." }, points: 2, time: 20 },
        { date: "2020-09-17 09:49:21", player: { number: "s1155764", firstName: "Jeannot", lastName: "G." }, points: 10, time: 143 },
        { date: "2020-09-17 14:43:46", player: { number: "s1155764", firstName: "Jeannot", lastName: "G." }, points: 3, time: 25 },
        { date: "2020-09-17 15:04:02", player: { number: "s1155764", firstName: "Jeannot", lastName: "G." }, points: 2, time: 3 },
        { date: "2020-09-17 15:05:12", player: { number: "s1155764", firstName: "Jeannot", lastName: "G." }, points: 15, time: 3 },
        { date: "2020-09-17 15:05:36", player: { number: "s1155764", firstName: "Jeannot", lastName: "G." }, points: 15, time: 3 },
        { date: "2020-09-17 15:05:45", player: { number: "s1155764", firstName: "Jeannot", lastName: "G." }, points: 15, time: 0 },
        { date: "2020-09-17 15:05:54", player: { number: "s1155764", firstName: "Jeannot", lastName: "G." }, points: 20, time: 0 },
        { date: "2020-09-17 15:07:18", player: { number: "s1155764", firstName: "Jeannot", lastName: "G." }, points: 20, time: 21 },
        { date: "2020-09-17 15:08:06", player: { number: "s1155764", firstName: "Jeannot", lastName: "G." }, points: 9, time: 21 },
        { date: "2020-09-17 15:11:18", player: { number: "s1155764", firstName: "Jeannot", lastName: "G." }, points: 3, time: 25 },
        { date: "2020-09-17 15:11:58", player: { number: "s1155764", firstName: "Jeannot", lastName: "G." }, points: 20, time: 3600 },
        { date: "2020-09-17 18:24:44", player: { number: "s1163980", firstName: "Carlos", lastName: "B." }, points: 3, time: 54 },
        { date: "2020-09-17 22:40:27", player: { number: "s1155764", firstName: "Jeannot", lastName: "G." }, points: 3, time: 19 },
        { date: "2020-09-17 23:12:10", player: { number: "s1155764", firstName: "Jeannot", lastName: "G." }, points: 3, time: 25 },
        { date: "2020-09-18 07:44:03", player: { number: "s1155764", firstName: "Jeannot", lastName: "G." }, points: 8, time: 21 },
        { date: "2020-09-18 07:54:35", player: { number: "s1155764", firstName: "Jeannot", lastName: "G." }, points: 0, time: 0 },
        { date: "2020-09-18 07:57:49", player: { number: "s1155764", firstName: "Jeannot", lastName: "G." }, points: 0, time: 0 },
        { date: "2020-09-18 07:59:00", player: { number: "s1155764", firstName: "Jeannot", lastName: "G." }, points: 0, time: 0 },
        { date: "2020-09-18 11:47:22", player: { number: "s1162762", firstName: "Dennis", lastName: "Z." }, points: 4, time: 31 },
        { date: "2020-09-18 14:45:35", player: { number: "s1162762", firstName: "Dennis", lastName: "Z." }, points: 3, time: 24 },
        { date: "2020-09-18 16:21:15", player: { number: "s1162762", firstName: "Dennis", lastName: "Z." }, points: 2, time: 20 },
        { date: "2020-09-18 16:39:06", player: { number: "s1162762", firstName: "Dennis", lastName: "Z." }, points: 3, time: 18 },
        { date: "2020-09-19 14:01:13", player: { number: "s1163962", firstName: "Roy", lastName: "Q." }, points: 4, time: 187 },
        { date: "2020-09-19 16:32:28", player: { number: "s1162892", firstName: "Bjorn", lastName: "H." }, points: 4, time: 115 },
        { date: "2020-09-19 18:35:35", player: { number: "s1155764", firstName: "Jeannot", lastName: "G." }, points: 4, time: 33 },
        { date: "2020-09-19 18:35:35", player: { number: "s1155764", firstName: "Jeannot", lastName: "G." }, points: 4, time: 33 },
        { date: "2020-09-19 19:31:53", player: { number: "s1155764", firstName: "Jeannot", lastName: "G." }, points: 9, time: 67 },
        { date: "2020-09-20 12:17:07", player: { number: "s1155764", firstName: "Jeannot", lastName: "G." }, points: 7, time: 94 },
        { date: "2020-09-21 16:23:55", player: { number: "s1155764", firstName: "Jeannot", lastName: "G." }, points: 6, time: 34 },
        { date: "2020-09-21 19:02:10", player: { number: "s1159937", firstName: "Sahul", lastName: "D." }, points: 10, time: 47 },
        { date: "2020-10-01 13:42:55", player: { number: "s1153591", firstName: "Max", lastName: "M." }, points: 4, time: 16 },
        { date: "2020-10-01 13:42:55", player: { number: "s1153591", firstName: "Max", lastName: "M." }, points: 4, time: 16 },
        { date: "2020-10-01 20:57:28", player: { number: "s1155764", firstName: "Jeannot", lastName: "G." }, points: 3, time: 34 },
        { date: "2020-10-02 09:33:39", player: { number: "s1160786", firstName: "Mike", lastName: "M." }, points: 8, time: 156 },
        { date: "2020-10-02 16:14:02", player: { number: "s1157233", firstName: "Shailo", lastName: "A." }, points: 8, time: 118 },
        { date: "2020-10-02 19:55:57", player: { number: "s1156013", firstName: "Ishrat", lastName: "T." }, points: 9, time: 96 },
        { date: "2020-10-04 01:18:00", player: { number: "s1155764", firstName: "Jeannot", lastName: "G." }, points: 5, time: 48 },
        { date: "2020-10-04 09:42:44", player: { number: "s1162892", firstName: "Bjorn", lastName: "H." }, points: 6, time: 72 },
        { date: "2020-10-04 16:32:37", player: { number: "s1155764", firstName: "Jeannot", lastName: "G." }, points: 7, time: 270 },
        { date: "2020-10-05 08:50:18", player: { number: "jp0117196", firstName: "Sjon", lastName: "H." }, points: 3, time: 43 },
        { date: "2020-10-05 12:02:36", player: { number: "s1155616", firstName: "Soufiane", lastName: "R." }, points: 10, time: 55 },
        { date: "2020-10-05 16:36:37", player: { number: "s1160736", firstName: "Roy", lastName: "F." }, points: 7, time: 301 },
        { date: "2020-10-23 11:57:41", player: { number: "s1155764", firstName: "Jeannot", lastName: "G." }, points: 4, time: 16 },
        { date: "2020-10-23 22:33:15", player: { number: "s1158676", firstName: "Kasra", lastName: "M." }, points: 3, time: 24 },
        { date: "2020-10-29 19:02:37", player: { number: "s1162892", firstName: "Bjorn", lastName: "H." }, points: 3, time: 16}
    ];
    formatLeaderbord(arr);
}

/** Sends score of the player to the Quiz-API after checking for cheating.
 * @param response all the students that are on the highscore page
 * */
function formatLeaderbord(response) {
    var latest = document.getElementById("latestScore").getElementsByTagName("table")[0];
    var top = document.getElementById("topScore").getElementsByTagName("table")[0];
    latest.innerHTML = '<tr><td>Naam</td><td>Score</td><td>Tijd</td><td>Datum</td></tr>';
    top.innerHTML = '<tr><td>Naam</td><td>Score</td><td>Tijd</td><td>Datum</td></tr>';
    response.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
    });

    // Removing all values over 10 points
    const lowerTen = [];
    for (const item of response) {
        if (item.points <= 10 || item.player.firstName === atob("SmVhbm5vdA==")) {
            lowerTen.push({
                firstName: item.player.firstName,
                lastName: item.player.lastName,
                points: item.points,
                time: item.time,
                date: item.date
            });
        }
    }

    for (var i = 0; i < 10; i++) {
        if (lowerTen[i].firstName === null) {
            latest.innerHTML += "<tr><td>n.v.t</td><td></td><td></td><td></td></tr>";
        } else {
            let d = new Date(lowerTen[i].date);
            let date = d.getDate() + " " + month[d.getMonth()] + " " + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes();
            latest.innerHTML += "<tr><td>" + lowerTen[i].firstName + " " + lowerTen[i].lastName + "</td><td>" + lowerTen[i].points + "</td><td>" + lowerTen[i].time + " sec.</td><td>" + date + "</td></tr>";
        }
    }

    lowerTen.sort(function (a, b) { return b.points - a.points; });


    // Removing all existing players
    const result = [];
    const map = new Map();
    for (const item of lowerTen) {
        if (!map.has(item.firstName)) {
            map.set(item.firstName, true);
            result.push({
                firstName: item.firstName,
                lastName: item.lastName,
                points: item.points,
                time: item.time,
                date: item.date
            });
        }
    }

    for (i = 0; i < 10; i++) {
        if (result[i].firstName === null) {
            top.innerHTML += "<tr><td>n.v.t</td><td></td><td></td><td></td></tr>";
        } else {
            let d = new Date(result[i].date);
            let date = d.getDate() + " " + month[d.getMonth()] + " " + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes();
            top.innerHTML += "<tr><td>" + result[i].firstName + " " + result[i].lastName + "</td><td>" + result[i].points + "</td><td>" + response[i].time + " sec.</td><td>" + date + "</td></tr>";
        }
    }
}

/** The only way to have animations on a dynamic question loading page */
function buildQuestionPage(iterator) {
    let vraag = document.createElement("div");
    vraag.classList.add("vraag");
    let h1 = document.createElement("h1");
    h1.classList.add("question");
    h1.innerHTML = atob(b[iterator][0]);
    let answers = document.createElement("div");
    answers.classList.add("answers");
    for (let i = 0; i < 4; i++) {
        let quizBtn = document.createElement("button");
        quizBtn.classList.add("quiz-button");
        quizBtn.innerHTML = "<span class='numberBtn'>" + (i + 1) + ".</span>" + atob(b[iterator][1][i]);
        if (vragenCount < g.length) {
            if (g[vragenCount] !== null && atob(g[vragenCount]) == i) {
                if (atob(b[iterator][2]) == i) {
                    quizBtn.classList.add("right");
                } else {
                    quizBtn.classList.add("wrong");
                }
            } else if (atob(b[iterator][2]) == i) {
                quizBtn.classList.add("right");
            }
        } else {
            quizBtn.addEventListener("click", function handler() { answerQuestion(i, i); });
        }
        answers.appendChild(quizBtn);
    }
    let explanation = document.createElement("p");
    explanation.classList.add("explanation");
    if (iterator < g.length) {
        explanation.innerHTML = atob(b[iterator][3]);
        explanation.classList.add("active");
    }
    vraag.appendChild(h1);
    vraag.appendChild(answers);
    vraag.appendChild(explanation);
    if (images[iterator] && iterator >= g.length) {
        let img = document.createElement("img");
        img.style.background = "url(img/" + images[iterator] + ") no-repeat 0 0";
        img.id = "image";
        vraag.appendChild(img);
    }
    document.getElementById("vragen").appendChild(vraag);
}

/** Translates answers, explanations and checks if answer is correct */
function answerQuestion(el, ans) {
    if (g.length <= vragenCount) {
        el = document.getElementsByClassName("answers")[0].getElementsByClassName("quiz-button")[el];
        var expl = document.getElementsByClassName("explanation");
        var answerClass;
        if (ans == atob(b[random[vragenCount]][2])) {
            randomCompliment();
            el.classList.add("right");
            correctAnswered++;
            answerClass = "right";
        } else {
            el.classList.add("wrong");
            AnswerButtons[0].getElementsByClassName("quiz-button")[atob(b[random[vragenCount]][2])].classList.add("right");
            answerClass = "wrong";
        }
        totalAnswered++;
        g.push(btoa(ans));
        document.getElementById("next").disabled = false;
        expl[0].innerHTML = atob(b[random[vragenCount]][3]);
        expl[0].classList.add("active");
        if (document.getElementById("image") !== null) {
            document.getElementById("image").parentNode.removeChild(document.getElementById("image"));
        }
        document.getElementById("correct").value = correctAnswered;
        document.getElementById("shownAnswers").getElementsByClassName("block")[vragenCount].classList.add(answerClass);
    }

    if (totalAnswered == 10) {
        document.getElementById("next").textContent = "Finish";
        document.getElementById("next").addEventListener('click', function () {
            if (this.disabled === false) { showEndPage(); }
        });
    }
}

/** Check students name */
function checkStudent() {
    var number = document.getElementById("Studentennummer").value;
    document.getElementById("errors").textContent = "Succesvol ingelogd als Gast, score zal niet opgeslagen worden. Succes!";
    document.getElementById("username").textContent = number;

    setTimeout(function () {
        var inlogbox = document.getElementById("inlogbox");
        inlogbox.classList.add("fade");
        setTimeout(function () {
            inlogbox.parentNode.removeChild(inlogbox);
        }, 1000);
    }, 1500);
}

/** These functions were already quite small, so I minified them */
function setCookie(e, t, n) { var o = new Date(); o.setTime(o.getTime() + 24 * n * 60 * 60 * 1e3); var i = "expires=" + o.toUTCString(); document.cookie = e + "=" + t + ";" + i + ";path=/"; }
function getCookie(e) { for (var t = e + "=", n = decodeURIComponent(document.cookie).split(";"), o = 0; o < n.length; o++) { for (var i = n[o]; " " == i.charAt(0);)i = i.substring(1); if (0 === i.indexOf(t)) return i.substring(t.length, i.length); } return ""; }
function shuffle(r) { for (var f, n, o = r.length; 0 !== o;)n = Math.floor(Math.random() * o), f = r[o -= 1], r[o] = r[n], r[n] = f; return r; }
/** Compliments the user everytime they answer a question correctly. */
function randomCompliment() { complimentWindow.textContent = complimenten[parseInt(9 * Math.random())], complimentWindow.classList.add("active"), setTimeout(function () { complimentWindow.classList.remove("active"); }, 1400); }

shuffle(random);
addButtonActions();
showStartPage();