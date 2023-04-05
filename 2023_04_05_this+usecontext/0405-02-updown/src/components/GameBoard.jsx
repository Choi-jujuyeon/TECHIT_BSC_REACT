import { useEffect, useState } from "react";

const GameBoard = () => {
    //점수를 저장하는 기능
    const [point, setPoint] = useState(5);
    // 주사위를 만들경우 *6 +1
    const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * 100));
    const [hint, setHint] = useState("0 ~ 100 사이의 숫자를 맞춰보세요!");

    const [choiceNum, setChoiceNum] = useState("");

    // 랜덤한 값을 추적하려고 썼다!== 부차적으로 관리할 때 사용한다
    //첫번째 값에는 다양한 값들이 들어가도 된다 ==
    //두번째 인자에는 배열을 넣어 추적할 값을 넣어준다 == c추적하고자 하는 것
    useEffect(
        () => console.log(`랜덤 숫자는 ${randomNum}입니다.`),
        [randomNum]
    );
    useEffect(
        () => console.log(`유저가 선택한 숫자는 ${choiceNum}입니다.`),
        [choiceNum]
    );
    useEffect(() => console.log(`현재 점수 ${point}입니다.`), [point]);

    const onChangeChoice = (e) => {
        setChoiceNum(e.target.value);
    };

    const onClickCheck = (e) => {
        e.preventDefault();

        let checkNum = parseInt(choiceNum);

        if (isNaN(checkNum)) {
            setHint("숫자를 입력해주세요!");
            return;
        }

        //2. 0~100 이외의 숫자
        if (0 > checkNum || checkNum >= 100) {
            setHint("숫자를 잘 못 입력하였습니다! 0<Num<=100만 가능");
            return;
        }
        //랜덤 숫자와 유자가 선택한 숫자를 비교
        if (randomNum === checkNum) {
            setHint("정답입니다 ~!랜덤 값을 초기화 합니다!");

            if (point > 0) {
                //기존의 점수 불러오기
                let savedPoint = localStorage.getItem("point");
                //현재 점수와 기존의 점수 합칩
                //저장
                localStorage.setItem("point", parseInt(savedPoint) + point);
            } //초기화
            setRandomNum(Math.floor(Math.random() * 100));
            setChoiceNum("");
            setPoint(5);
            //
        } else if (randomNum > checkNum) {
            setHint(`정답은 ${checkNum} 보다 높은 숫자입니다 !`);
            setPoint(point - 1);
        } else if (randomNum < checkNum) {
            setHint(`정답은 ${checkNum} 보다 낮은 숫자입니다 !`);
            setPoint(point - 1);
        }
    };

    return (
        <div className=" w-full grow flex flex-col justify-center items-center">
            <div className="mb-4 text-xl font-bold">{hint}</div>
            <div>
                <input
                    className="border-2 rounded-lg px-4 py-2 focus:outline-pink-300 shadow-lg"
                    type="text"
                    value={choiceNum}
                    onChange={onChangeChoice}
                />
                <button
                    onClick={onClickCheck}
                    className="px-4 py-2 ml-2 rounded-lg border-2 border-pink-300 text-pink-300 shadow-lg"
                >
                    확인
                </button>
            </div>
        </div>
    );
};

export default GameBoard;
