var txtInput;
 

function initialize() {
    txtInput = document.getElementById('txtInput');
    document.getElementById('btn1').addEventListener('click', numberClick, false);
    document.getElementById('btn2').addEventListener('click', numberClick, false);
    document.getElementById('btn3').addEventListener('click', numberClick, false);
    document.getElementById('btn4').addEventListener('click', numberClick, false);
    document.getElementById('btn5').addEventListener('click', numberClick, false);
    document.getElementById('btn6').addEventListener('click', numberClick, false);
    document.getElementById('btn7').addEventListener('click', numberClick, false);
    document.getElementById('btn8').addEventListener('click', numberClick, false);
    document.getElementById('btn9').addEventListener('click', numberClick, false);
    document.getElementById('btn0').addEventListener('click', numberClick, false);
}

function numberClick()
{
    txtInput.value = txtInput.value == '0' ?
        this.innerText : txtInput.value + this.innerText;
}