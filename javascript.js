var exec = 0;
var operator1 = null;
var operand = null;
var operator2 = null;
// this is test message
function checkNumber(event) {
    var aCode = event.which ? event.which : event.keyCode;
    if (aCode > 31 && (aCode < 48 || aCode > 57)) return false;

    return true;


}

function display(val) {


    var str = document.getElementById('result').value;

    if (val == '+' || val == '-' || val == '*' || val == '/') {
        var t = str.length;

        if (str[t - 1] == '+' || str[t - 1] == '-' || str[t - 1] == '*' || str[t - 1] == '/') {

            let result = str.slice(0, t - 1);
            result += val;
            document.getElementById('result').value = result;

        } else if (str.length == 0) {} else { document.getElementById('result').value += val; }
    } else {
        if (parseInt(val) == 'NaN') { alert('wrong input'); } else {
            document.getElementById('result').value += val;
        }
    }
}

function solve(val) {
    document.getElementById('result').value = val;
}

function clearScreen() {
    document.getElementById('result').value = "";
}

function delCharacter() {
    var strng = document.getElementById('result').value;
    strlen = strng.length;
    var newstr = ''
    for (let i = 0; i < strlen - 1; i++) {
        newstr = newstr + strng[i];
    }
    document.getElementById('result').value = newstr;
}

function evaluateInput() {
    exec = 1;
    var str = document.getElementById('result').value;
    var strlen = str.length;
    var operator1 = null;
    var inputstr = '';
    var t = 0;
    if (strlen == 0) {
        t = 1;
        alert("Please Input Value");
    } else if (str[strlen - 1] == '+' || str[strlen - 1] == '-' || str[strlen - 1] == '*' || str[strlen - 1] == '/') {
        alert("Invalid Input");
        t = 1;
    }
    if (t != 1) {
        for (i = 0; i < strlen; i++) {
            if (str[i] == '+' || str[i] == '-' || str[i] == '*' || str[i] == '/') {
                operand = str[i];
                if (operator1 == null) {
                    operator1 = parseInt(inputstr);
                    inputstr = '';
                    i = i + 1;
                    while (i != strlen && str[i] != '+' && str[i] != '-' && str[i] != '*' && str[i] !== '/') {
                        inputstr += str[i];
                        i = i + 1;
                    }
                    if (i == strlen) {
                        operator2 = parseInt(inputstr);
                        inputstr = '';
                    } else {
                        i = i - 1;
                        operator2 = parseInt(inputstr);
                        inputstr = '';
                    }
                    if (operand == '+') {
                        operator1 = operator1 + operator2;
                        operator2 = null;
                    } else if (operand == '-') {
                        operator1 = operator1 - operator2;
                        ooperator2 = null;
                    } else if (operand == '*') {

                        operator1 = operator1 * operator2;
                        operator2 = null;
                    } else {
                        operator1 = operator1 / operator2;
                        operator2 = null;
                    }
                } else {
                    i = i + 1;
                    while (i != strlen && str[i] != '+' && str[i] != '-' && str[i] != '*' && str[i] != '/') {
                        inputstr += str[i];
                        i = i + 1;
                    }
                    if (i == strlen) {
                        operator2 = parseInt(inputstr);
                        inputstr = '';
                    } else {
                        i = i - 1;
                        operator2 = parseInt(inputstr);
                        inputstr = '';
                    }
                    if (operand == '+') {

                        operator1 = operator1 + operator2;
                        operator2 = null;

                    } else if (operand == '-') {
                        operator1 = operator1 - operator2;
                        ooperator2 = null;


                    } else if (operand == '*') {

                        operator1 = operator1 * operator2;
                        operator2 = null;
                    } else {
                        operator1 = operator1 / operator2;
                        operator2 = null;
                    }
                }

            } else {

                inputstr += str[i];
            }
        }
    }
    solve(operator1);
}