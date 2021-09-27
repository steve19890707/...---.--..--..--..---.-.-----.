import { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import countdown from "countdown";
import moment from "moment-timezone";
import { IoTriangleOutline, IoCloseOutline } from "react-icons/io5";
import { BiSquare, BiCircle } from "react-icons/bi";

const hostname = window.location.hostname.indexOf(":") ? "./puzzle/" : "./";
const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    background-color:#f7f7f7;
  }
`;
const StyledApp = styled.div`
  margin-top: 50px;
  header {
    position: fixed;
    top: 0;
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
  .anser {
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
    &:last-child {
      margin: 15px auto 50px auto;
    }
    .sing {
      font-size: 32px;
    }
    .mos {
      width: 50%;
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
    img {
      height: 100%;
    }
  }
`;
function App() {
  const [countdownDate, setCountdownDate] = useState("loading...");
  const [timesup, setTimesup] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      const endDate = new Date(2021, 9, 7, 13, 30, 0);
      const update = countdown(new Date(), endDate, 0);
      const now = new Date();
      if (moment(update.end).isBefore(now)) {
        alert(`Time's up!`);
        setCountdownDate(`Time's up!`);
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
            <div className="mos">... --.- ..- .. -.. --. .- -- . </div>
          </div>
        </>
      )}
      <p className="subtitle">Anser:</p>
      <div className="question">
        {timesup ? (
          <div className="anser">A會議室</div>
        ) : (
          <>
            <IoTriangleOutline className="svg-IoTriangleOutline" />
            <IoCloseOutline className="svg-IoCloseOutline" />
            <BiCircle className="svg-BiCircle" />
            <BiSquare className="svg-BiSquare" />
          </>
        )}
      </div>
    </StyledApp>
  );
}
export default App;
