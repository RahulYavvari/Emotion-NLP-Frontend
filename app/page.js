"use client";
import { useState, useEffect } from "react";

import Navbar from "@/components/Navbar";
import InputBar from "@/components/InputBar";
import EmotionResponse from "@/components/EmotionResponse";
import Feedback from "@/components/Feedback";

export const userHistory = [];

export default function Home() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [askFeedback, setAskFeedback] = useState(false);

  const [isSendClicked, setIsSendClicked] = useState(false);
  useEffect(() => {
    if(response != "") {
      setTimeout(() => {
        setAskFeedback(true);
      }, 2000);
    }
  }, [response]);

  return (
    <div>
      <Navbar />
      <div className="m-auto px-10 max-w-[1250px] py-8 flex-col justify-center">
        <InputBar setResponse={setResponse} setInput={setInput} setIsSendClicked={setIsSendClicked}/> 
        <EmotionResponse input={input} response={response} />
        
        {askFeedback == true ? <Feedback response={response} />: null}
      </div>
    </div>
  );
}
