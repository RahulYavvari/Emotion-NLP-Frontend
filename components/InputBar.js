"use client";
import { useState, useRef } from "react";

import SendButton from "@/components/SendButton";
import { userHistory } from "@/app/page";

import {emojiResource} from "@/app/constants";

const handleSubmit = (e) => {
    e.preventDefault();
    console.log("[LOG]", e.target[0].value);
    //fetch from websocket
    const emotionTags = emojiResource.map((ele) => ele.emotion);
    return emotionTags[Math.floor(Math.random()*emotionTags.length)];
}

const InputBar = ({setResponse, setInput, setIsSendClicked}) => {

    const [userInput, setUserInput] = useState("");
    return (
        <>
            <form className="flex-col relative items-center gap-10" onSubmit={(e) => {
                    const resp = handleSubmit(e);
                    setResponse(resp);
                    setInput(userInput);
                    userHistory.push({input:userInput, response: resp, timestamp: new Date()});
                    setUserInput("");
                    console.log(userHistory);
                }
            }>   
                <div className="flex relative w-[100%]">
                    <textarea name="userInput" placeholder="Enter your text here" className=" no-scrollbar transition transform hover:shadow-2xl active:shadow-2xl flex-1 shadow-xl border-gray-300 border-[0.5px] rounded-[10px] p-[1rem] pb-10 resize-none focus:outline-none  min-h-[150px] max-h-[500px]" wrap="soft" value={userInput} onChange={(event) => setUserInput(event.target.value)}></textarea>
                </div>
                <div className="absolute bottom-[1rem] right-[1rem]">
                    <SendButton onClick={() => {setIsSendClicked(true)}} isActive={userInput != "" ? true : false} />
                </div>
            </form>

        </>
    );
};

export default InputBar;