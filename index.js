// Toss
const playerNames = document.querySelector('#playerNames');
const playerOneInput = document.querySelector('#playerOneInput');
const playerTwoInput = document.querySelector('#playerTwoInput');
const playerOneName = document.querySelector('#playerOneName');
const playerTwoName = document.querySelector('#playerTwoName');
const tossBtn = document.querySelector('#tossBtn');
const tossWrap = document.querySelector('#tossWrap');
const tossOption = document.querySelector('.tossOption');

tossBtn.addEventListener('click', function(){
    if (playerOneInput.value || playerTwoInput.value == ""){
        playerOneName.style.borderColor = 'red';
        playerTwoName.style.borderColor = 'red';
    } else {
        playerOneName.innerText = playerOneInput.value;
        playerTwoName.innerText = playerTwoInput.value;
        playerOneInput.value = "";
        playerTwoInput.value = "";
        playerNames.style.display = 'none';
        tossWrap.style.display = 'block';
    }
    tossOption.addEventListener("click", function(){
        let i;
        for (i = 0; i < tossOption.length; i++) {
            tossOption[i].style.display = 'none';
        }
    })
})