import React, { useState } from "react";
import "./App.css";
import chatGptLogo from "./assets/chatgpt.svg";
import addBtn from "./assets/add-30.png";
import msgIcon from "./assets/message.svg";
import saveIcon from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg";
import send from "./assets/send.svg";
import home from "./assets/home.svg";
import user from "./assets/user-icon.png";
import gpt from "./assets/chatgptLogo.svg";
import { sendMsgToOpenAi } from "./openai";
const App = () => {
  const [input, setInput] = useState("");
  const handleSend = async() => {
    const res = await sendMsgToOpenAi(input);
    console.log(res);
    alert(res)
  };
  return (
    <div className="App">
      <div className="sidebar">
        <div className="upperSide">
          <div className="upperSideTop">
            <div className="head">
              <img className="logo" src={chatGptLogo} alt="" />{" "}
              <span className="brand">ChatGpt</span> <br />
            </div>
            <button className="midBtn">
              <img className="addBtn" alt="" src={addBtn} />
              New Chat
            </button>{" "}
            <br />
            <div className="upperSideBtm">
              <button className="query">
                {" "}
                <img src={msgIcon} className="msg" alt="" /> What is
                Programming?
              </button>{" "}
              <br />
              <button className="query">
                {" "}
                <img src={msgIcon} className="msg" alt="" /> How Make Web
                Applications?
              </button>
            </div>
          </div>
        </div>
        <div className="lowerSide">
          <div className="lisItems">
            {" "}
            <img src={home} className="lisItemsImg" id="ele1" alt="" /> Home
          </div>{" "}
          <br />
          <div className="lisItems">
            {" "}
            <img src={saveIcon} className="lisItemsImg" id="2ele" alt="" />{" "}
            Saved
          </div>{" "}
          <br />
          <div className="lisItems">
            {" "}
            <img src={rocket} className="lisItemsImg" alt="" id="ele2" />{" "}
            Upgrade to Pro
          </div>
        </div>
      </div>

      <div className="main">
        <div className="chats">
          <div className="chat">
            <img src={user} className="chatImg" />
            <p className="txt">Lorem Ipsum is simply dummy</p>
          </div>
          <br />
          <div className="chat bot">
            <img src={gpt} className="chatImg" />
            <p className="txt">
              It seems like there might be a typo in your question, but I'll
              assume you're asking about "programming." Programming, also known
              as coding or software development, is the process of creating
              instructions for a computer to perform specific tasks. It involves
              writing code in programming languages that computers can
              understand and execute. Programmers use these instructions to
              create software, websites, applications, games, and more.
              Programming involves several key steps: Problem Definition:
              Clearly understand the problem you're trying to solve with
              software. Algorithm Design: Create a logical step-by-step plan
              (algorithm) to solve the problem. ThisCoding: Write the actual
              code using a programming language. The code contains the
              instructions that the computer will follow. Debugging and Testing:
              Check the code for errors (bugs) and test it to ensure it behaves
              as expected. Optimization: Refine and improve the code for better
              performance and efficiency. Documentation: Create documentation
              that explains how the code works, making it easier for others to
              understand and maintain. Deployment: Make the code available for
              use by others, which can involve packaging it into an executable
              program, a website, or an app.
            </p>
          </div>
          <br />
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input
              placeholder="send a Message"
              type="text"
              name=""
              id=""
              value={input}
              onClick={handleSend}
              onChange={(e) => setInput(e.target.value)}
            />
            <img src={send} alt="" className="send" /> <br />
          </div>
          <p className="demo">
            Free Research Preview. ChatGPT may produce inaccurate information
            about people, places, or facts. ChatGPT August 3 Version
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
