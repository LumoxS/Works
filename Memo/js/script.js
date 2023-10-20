(() => {

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function shuffle(arr) {
        const arrcount = arr.length;
        for (let i = 0; i <= arrcount - 1; ++i) {
            itemRndm = Math.round(Math.random() * (arrcount - 1));
            let temp = arr[itemRndm];
            arr[itemRndm] = arr[i];
            arr[i] = temp;
        }
    }

    function createNumbersArray(count, array, arrayImg) {
        for (let i = 1; i <= count; ++i) {
            array.push({
                number: i,
                img: arrayImg[i - 1].src,
            },
                {
                    number: i,
                    img: arrayImg[i - 1].src,
                }
            );
        };
    }

    function creatArrayBackGroundCard(arrayImg) { 
        for (let i = 1; i <= 20; ++i) {
            arrayImg.push({
                src: "url('./img/cards/" + String(i) + ".jpg')"
            },
            );
        };
    }

    document.addEventListener('DOMContentLoaded', () => {
        const array = [];
        const arrayImg = []
        const keySave = 'memo';
        let checkTimeClick = false;
        let card1 = {}; 
        let card2 = {}; 
        let countLessCard = 0;
        let timerIdClick = null;
        let timerIdClickFinish = null; 
        let timerIDGame = null; 
        let timerIDGameFinish = null; 
        let timeWork = 0;
        let timeAll = 0;
        restoreGame();

        document.getElementById('cucsess').style.display = 'none';
        document.getElementById('finish-cucsess').style.display = 'none';
        document.getElementById('finish-uncucses').style.display = 'none';


        function cardOpen(item) {
            item.classList.add('card-open');
        }

        function cardBlock(item) {
            item.classList.add('card-block');
        }

        function cardsUnBlock() { 
            document.querySelectorAll('.card').forEach(function (element) { 
                element.classList.remove('card-block', 'card-open');
            })
        }

        function createCardsCheck(id, item) {
            if ((Object.entries(card1).length === 0) && (Object.entries(card2).length === 0)) { 
                card1 = {
                    id: id,
                    item: item,
                }
            }
            else if ((Object.entries(card1).length > 0) && (Object.entries(card2).length === 0)) { 
                card2 = {
                    id: id,
                    item: item,
                }
            }
        }

        function cardsBlock() { 
            document.querySelectorAll('.card').forEach(function (element) { 
                element.classList.add('card-block');
            })
        }

        function cardsCheck(timeClick) {
            if (card1.id === card2.id) {
                card1.item.classList.add('card-checked'); 
                card2.item.classList.add('card-checked'); 
                --countLessCard;
                card1 = {};
                card2 = {};
                cardsUnBlock();
                clearInterval(timerIdClick);
                clearTimeout(timerIdClickFinish);
                document.getElementById('cancell__time-move').textContent = timeClick;
                if (countLessCard === 0) {
                    gameFinish();
                }
                return true;
            }
            else {
                card1 = {};
                card2 = {};
                return false;
            };
        }

        function cardsCheckNoTime() { 
            if (card1.id === card2.id) {
                card1.item.classList.add('card-checked'); 
                card2.item.classList.add('card-checked'); 
                --countLessCard;
                if (countLessCard === 0) {
                    gameFinish();
                }
                return true;
            }
            else {
                return false;
            };
        }

        function firework(cucsessObject) {
            cucsessObject.style.display = 'block';
            let cucsess = null;
            clearTimeout(cucsess);
            cucsess = setTimeout(() => {
                cucsessObject.style.display = 'none';
            }, 1000);
        }

        function stopTimerClick(timeClick) {
            card1 = {};
            card2 = {};
            cardsUnBlock();
            document.getElementById('cancell__time-move').textContent = timeClick;
        }

        function startTimerClick(timeClick) { 
            let i = 1;
            let objectTime = document.getElementById('cancell__time-move');
            clearInterval(timerIdClick);
            timerIdClick = setInterval(() => {
                objectTime.textContent = String(timeClick - i);
                ++i;
            }
                , 1000);

            clearTimeout(timerIdClickFinish);
            timerIdClickFinish = setTimeout(() => {
                stopTimerClick(timeClick);
                clearInterval(timerIdClick);
            }, (timeClick * 1000) + 300);
        }

        function timeGameTimer(timeGame) {
            let j = 1;
            let objectTimeGame = document.getElementById('cancell__time-all');
            clearInterval(timerIDGame);
            timerIDGame = setInterval(() => {
                objectTimeGame.textContent = String(timeGame - j);
                ++j
                timeWork += 1;
            }
                , 1000);

            clearTimeout(timerIDGameFinish);
            timerIDGameFinish = setTimeout(() => {
                clearInterval(timerIDGame);
                gameFinish();
            }, timeGame * 1000);
        }

        function createItem(id, timeClick, srcImg) {
            let item = document.createElement('div');
            item.role = 'button';
            let itemNumber = document.createElement('span');
            let items = document.getElementById('cards');
            let cucsessObject = document.getElementById('cucsess');
            itemNumber.textContent = id;
            item.classList.add('card', 'flex');
            item.style.backgroundImage = srcImg; 
            item.addEventListener('click', () => {
                if (checkTimeClick) { 
                    startTimerClick(timeClick); 
                    createCardsCheck(id, item); 
                    cardOpen(item); 
                    cardBlock(item);
                    if ((Object.entries(card1).length > 0) && (Object.entries(card2).length > 0)) { 
                        cardsBlock();
                        let check = cardsCheck(timeClick); 
                        if (check && countLessCard > 0) { 
                            firework(cucsessObject); 
                        }
                    }
                }
                else { 
                    createCardsCheck(id, item); 
                    if ((Object.entries(card2).length === 0) || (card2.item === item)) {
                        cardOpen(item); 
                    }
                    cardBlock(item);
                    if ((Object.entries(card1).length > 0) && (Object.entries(card2).length > 0) && (card2.item === item)) { 
                        let check = cardsCheckNoTime(); 
                        if (check && countLessCard > 0) { 
                            firework(cucsessObject); 
                        }
                    }
                    if ((Object.entries(card1).length > 0) && (Object.entries(card2).length > 0) && (card2.item !== item)) {
                        card1 = {};
                        card2 = {};
                        cardsUnBlock();
                        createCardsCheck(id, item); 
                        cardOpen(item); 
                        cardBlock(item);
                    }
                }
            })
            items.append(item);
            item.append(itemNumber);
        }

        function gameFinish() {
            clearInterval(timerIdClick);
            clearTimeout(timerIdClickFinish);
            clearInterval(timerIDGame);
            clearTimeout(timerIDGameFinish);
            document.getElementById('cancell__time-all').textContent = 0;
            document.getElementById('cancell__time-move').textContent = 0;
            document.querySelectorAll('.card').forEach(function (element) {
                element.classList.add('card-block', 'card-open');
            })

            console.log('all', timeAll, 'work', timeWork);
            if (timeAll > timeWork) {
                document.getElementById('cucsess').style.display = 'block';
                document.getElementById('finish-cucsess').style.display = 'block';
                document.getElementById('finish-cucsess-txt').innerHTML = 'Поздравляю! Вы выиграли. Ваше время:' + String(timeWork) + 'секунд';
            }

            if (timeAll === timeWork) {
                document.getElementById('finish-uncucses').style.display = 'block';
            }


        }

        function gameClose() {
            document.getElementById('cancell').style.display = 'none';
            document.getElementById('cards').style.display = 'none';
            document.getElementById('condition').style.display = 'block';
            array.length = 0;
            arrayImg.length = 0;
            timeWork = 0;
            document.getElementById('cards').remove();
            clearInterval(timerIdClick);
            clearTimeout(timerIdClickFinish);
            clearInterval(timerIDGame);
            clearTimeout(timerIDGameFinish);
            card1 = {}; 
            card2 = {}; 
            timerIdClick = null;
            timerIdClickFinish = null; 
            timerIDGame = null; 
            timerIDGameFinish = null; 
            countLessCard = 0;
            document.getElementById('cucsess').style.display = 'none';
            document.getElementById('finish-uncucses').style.display = 'none';
            document.getElementById('finish-cucsess').style.display = 'none';
        }

        function dataToJson(data) {
            return JSON.stringify(data);
        }

        function jsonToData(data) {
            return JSON.parse(data);
        }

        function saveGame(countCards, inputTimeAll, inputTimeMove) {
            let dataSave = [];
            dataSave.push(countCards);
            dataSave.push(inputTimeAll);
            dataSave.push(inputTimeMove);
            localStorage.setItem(keySave, dataToJson(dataSave));
        }

        function restoreGame() {
            let dataRestore = [];
            try {
                dataRestore = jsonToData(localStorage.getItem(keySave));
                if (dataRestore) {
                    document.getElementById('countCards').value = dataRestore[0];
                    document.getElementById('input-time-all').value = dataRestore[1];
                    document.getElementById('input-time-move').value = dataRestore[2];
                }
            } catch { }
        }

        function controllInputCallCard() {
            if (Number(document.getElementById('countCards').value) > 20) {
                document.getElementById('countCards').value = 20;
            }
            else if (Number(document.getElementById('countCards').value < 2)) {
                document.getElementById('countCards').value = 2;
            }
        }

        function controllInputTimeAll() {
            if (Number(document.getElementById('input-time-all').value) > 20) {
                document.getElementById('input-time-all').value = 20;
            }
            else if (Number(document.getElementById('input-time-all').value) === 0) {
                document.getElementById('input-time-all').value = 0.5;
            }
        }

        function controllInputTimeClick() {
            if (Number(document.getElementById('input-time-move').value) > 60) {
                document.getElementById('input-time-move').value = 60;
            }
            else if (Number(document.getElementById('input-time-move').value) < 1) {
                document.getElementById('input-time-move').value = 1;
            }
        }

        document.getElementById('countCards').addEventListener('change', controllInputCallCard);
        document.getElementById('input-time-all').addEventListener('change', controllInputTimeAll);
        document.getElementById('input-time-move').addEventListener('change', controllInputTimeClick);



        document.getElementById('confirmBtn').addEventListener('click', () => {
            const timeGame = Number(document.getElementById('input-time-all').value) * 60; 
            timeAll = timeGame;
            const timeClick = Number(document.getElementById('input-time-move').value);
            document.getElementById('cancell__time-all').textContent = timeGame;
            document.getElementById('cancell__time-move').textContent = timeClick;
            document.getElementById('condition').style.display = 'none';
            document.getElementById('cancell').style.display = 'block';
            document.getElementById('finish-cucsess').style.display = 'none';
            document.getElementById('finish-uncucses').style.display = 'none';
            const container = document.getElementById('container');
            const cards = document.createElement('div');
            cards.classList.add('cards', 'flex');
            cards.id = 'cards';
            container.append(cards);
            countLessCard = Number(document.getElementById('countCards').value);
            creatArrayBackGroundCard(arrayImg); 
            shuffle(arrayImg); 
            createNumbersArray(Number(document.getElementById('countCards').value), array, arrayImg);
            shuffle(array);
            for (let item of array) { createItem(item.number, timeClick, item.img) };
            timeGameTimer(timeGame);
            saveGame(document.getElementById('countCards').value, document.getElementById('input-time-all').value, document.getElementById('input-time-move').value);
        });

        document.getElementById('cancell').addEventListener('click', () => {
            gameClose();
        });

        document.getElementById('checkbox').addEventListener('change', function () {
            if (this.checked) {
                checkTimeClick = true;
                document.getElementById('cancell__time-move').style.display = 'flex';
            } else {
                document.getElementById('cancell__time-move').style.display = 'none';
                checkTimeClick = false;
            }
        });
    })
})();
