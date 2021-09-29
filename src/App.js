import { useState, useEffect, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import countdown from "countdown";
import moment from "moment-timezone";
import { IoTriangleOutline, IoCloseOutline } from "react-icons/io5";
import { BiSquare, BiCircle } from "react-icons/bi";
import { RiEyeLine } from "react-icons/ri";
import { decodeX, decodeS } from "./contact";
const hostname = window.location.hostname === "localhost" ? "./puzzle/" : "./";
const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0 auto;
    background-color:#f7f7f7;
    max-width: 600px;
  }
`;
const StyledApp = styled.div`
  margin-top: 50px;
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    z-index: 99;
    font-family: "Gemunu Libre", sans-serif;
    font-size: 24px;
    letter-spacing: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #a0a0a0;
  }
  .cd-title {
    text-align: center;
    margin: 0;
    padding: 15px 0;
    letter-spacing: 1px;
    font-size: 18px;
    color: #383838;
  }
  .answer {
    font-size: 22px;
    letter-spacing: 6px;
    width: 100%;
    text-align: center;
  }
  .count-down {
    width: 80%;
    margin: 0 auto;
    text-align: center;
    font-family: "Gemunu Libre", sans-serif;
    font-size: 22px;
    letter-spacing: 2px;
    color: #383838;
    padding: 6px;
    box-sizing: border-box;
    border-radius: 8px;
    border: 1px solid #a0a0a0;
    background: #fff;
  }
  .subtitle {
    width: 80%;
    margin: 0 auto;
    color: #383838;
    font-family: "Gemunu Libre", sans-serif;
    font-size: 22px;
    letter-spacing: 2px;
  }
  .subtitle-lose {
    width: 80%;
    margin: 0 auto 40px auto;
    color: #ff6161;
    font-family: "Gemunu Libre", sans-serif;
    font-size: 32px;
    font-weight: bold;
    letter-spacing: 2px;
    text-align: center;
  }
  .question {
    padding: 15px 40px;
    width: 80%;
    margin: 30px auto;
    border-radius: 8px;
    box-sizing: border-box;
    background: #fff;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    &.answer {
      margin: 15px auto 50px auto;
    }
    .sing {
      font-size: 32px;
    }
    .mos {
      max-width: 50%;
    }
    font-size: 18px;
    .svg-IoCloseOutline {
      width: 38px;
      height: 38px;
      fill: #000;
    }
    .svg-IoTriangleOutline {
      width: 30px;
      height: 30px;
      fill: #000;
    }
    .svg-BiSquare {
      width: 32px;
      height: 32px;
      fill: #000;
    }
    .svg-BiCircle {
      width: 32px;
      height: 32px;
      fill: #000;
    }
    .svg-RiEyeLine {
      width: 32px;
      height: 32px;
      fill: #000;
    }
    img {
      height: 100%;
    }
  }
  .input {
    position: relative;
    width: 80%;
    margin: 30px auto 50px auto;
  }
  input::placeholder {
    color: #c1c1c1;
  }
  input {
    display: block;
    width: 100%;
    border-radius: 8px;
    border: 0;
    padding: 16px 20px;
    font-size: 16px;
    box-sizing: border-box;
    outline: unset;
    background: #dcdcdc;
    color: #383838;
  }
  button {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-family: "Gemunu Libre", sans-serif;
    color: #383838;
    font-size: 18px;
    border-radius: 6px;
    border: 0;
    box-sizing: border-box;
    padding: 6px 12px;
    background: #fff;
  }
`;
function App() {
  const [countdownDate, setCountdownDate] = useState("loading...");
  const [timesup, setTimesup] = useState(false);
  const inputRef = useRef(null);
  useEffect(() => {
    const interval = setInterval(() => {
      const endDate = new Date(2021, 9, 7, 14, 0, 0);
      const update = countdown(new Date(), endDate, 0);
      const now = new Date();
      if (moment(update.end).isBefore(now)) {
        alert(`Time's up! you lose!!`);
        setCountdownDate(`--:--:--`);
        setTimesup(true);
        clearInterval(interval);
        return;
      }
      setCountdownDate(
        `${update.days} days ${update.hours}:${update.minutes}:${update.seconds}`
      );
      return () => clearInterval(interval);
    }, 1000);
  }, []);
  return (
    <StyledApp>
      <GlobalStyle />
      <header>
        <span>Welecome</span>
      </header>
      {!timesup && (
        <>
          <p className="cd-title">Time left:</p>
          <div className="count-down">{countdownDate}</div>
          <div className="question">
            <BiCircle className="svg-BiCircle" />
            <div className="sing">＝</div>
            <div>IBKI</div>
          </div>
          <div className="question">
            <RiEyeLine className="svg-RiEyeLine" />
            <div className="sing">＝</div>
            <div>a, b, d, w</div>
          </div>
          <div className="question">
            <IoCloseOutline className="svg-IoCloseOutline" />
            <div className="sing">＝</div>
            <div>人一田日</div>
          </div>
          <div className="question">
            <IoTriangleOutline className="svg-IoTriangleOutline" />
            <div className="sing">＝</div>
            <img src={`${hostname}image/image.png`} alt="" />
          </div>
          <div className="question">
            <BiSquare className="svg-BiSquare" />
            <div className="sing">＝</div>
            <div className="mos">.-. --- --- --</div>
          </div>
        </>
      )}
      <p className="subtitle">Answer:</p>
      <div className="question answer">
        <IoTriangleOutline className="svg-IoTriangleOutline" />
        <IoCloseOutline className="svg-IoCloseOutline" />
        <BiCircle className="svg-BiCircle" />
        <BiSquare className="svg-BiSquare" />
      </div>
      {timesup ? (
        <p className="subtitle-lose">Time's up You lose!!</p>
      ) : (
        <>
          <p className="subtitle">Try to submit the answer:</p>
          <div className="input">
            <input ref={inputRef} placeholder={"try to typing"} />
            <button
              onClick={() => {
                const value = inputRef.current.value;
                const isAnswerMatch = () => {
                  switch (value) {
                    case decodeS():
                    case decodeX():
                      return true;
                    default:
                      return false;
                  }
                };
                if (isAnswerMatch()) {
                  alert(`恭喜答對！ 請到『${decodeX()}』贖回遺失物`);
                } else {
                  alert("哭哭 答錯了哦~!");
                }
              }}
            >
              Submit
            </button>
          </div>
        </>
      )}
    </StyledApp>
  );
}
export default App;
