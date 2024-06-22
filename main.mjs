import getRandomNum from './modules/getRandomNum.mjs';
import getResponse from './modules/getResponse.mjs';

function main() {
    let response,
        result,
        answer = true,
        errors = 0,
        level = 1,
        maxLevel = 1;

    do {
        response = getResponse(answer, 1, level + 1);

        if (response !== null && isFinite(response)) {
            answer = true;
            errors = 0;
            response = +response;

            const randomNum = getRandomNum(1, level + 1);
            result = "lose";

            if (randomNum == response) {
                level++;
                result = "won";

                if (level > maxLevel) maxLevel = level;

            } else {
                if (level > 1) level--;
            }

            const continuation = confirm(
                `Number ${randomNum} rolled! You ${result} the game! Your current level is ${level}. Do you want to play again?`
            );

            if (!continuation) {
                alert(`Max level: ${maxLevel}`);
                return;
            }

        } else if (response == "lvl") {
            alert(`Current level: ${level}\nMax level: ${maxLevel}`);
        } else if (response === null) {
            alert(`Max level: ${maxLevel}`);
            return;
        } else {
            if (errors > 2) {
                return;
            }

            answer = false;
            errors++;
        }

    } while (true);
}