import { useState, useEffect } from "react";
import Image from "next/image";
import { emojiResource } from "@/app/constants";
import GreenTick from "@/app/public/assets/green_tick.png";

const Feedback = ( { response } ) => {
    // BUG: [Is new response is same a previous, the feedback is not being asked]
    const feedbackEmojiWidth = 60;
    const [isFeedbackNeeded, setIsFeedbackNeeded] = useState(true);
    const [isFeedbackReceived, setIsFeedbackReceived] = useState(false);

    const [takeFeedback, setTakeFeedback] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            if(isFeedbackReceived) {
                setIsFeedbackNeeded(false);
                setTakeFeedback(false);
                setIsFeedbackReceived(false);
            }
        }, 3000);
    });

    useEffect(() => {
        setIsFeedbackNeeded(true);
        setTakeFeedback(false);
    }, [response]);

    const noFeedbackHandler = () => {
        setIsFeedbackNeeded(false);
        setTakeFeedback(!takeFeedback);
    };

    const yesFeedbackHandler = () => {
        setIsFeedbackNeeded(!isFeedbackNeeded);
        setIsFeedbackReceived(!isFeedbackReceived);

    };

    let feedbackEmotion = null;
    const handleFeedback = (e, emotion) => {
        feedbackEmotion = emotion;
        console.log(feedbackEmotion);
        setTakeFeedback(!takeFeedback);
        setIsFeedbackReceived(true);
    }

    return (
        <div>
            {isFeedbackNeeded ?
                <div className="flex flex-wrap gap-10 items-center justify-center p-10 border-2 rounded-lg m-10">
                    <h1 className="font-semibold">Did we give the correct emotion?</h1>
                    <div className="flex gap-5 items-center">
                        <div className="border-[1px] border-gray-400 rounded-lg px-2 w-12 text-center cursor-pointer hover:bg-gray-100" onClick={yesFeedbackHandler}>Yes</div>

                        <div className="border-[1px] border-gray-400 rounded-lg px-2 w-12 text-center cursor-pointer hover:bg-gray-100" onClick={noFeedbackHandler}>No</div>
                    </div>
                </div>
                :
                null
            }

            {
                isFeedbackReceived ?
                    <div className="flex justify-center items-center mt-5">
                        <div className="flex items-center gap-2 pt-10">
                            <Image src={GreenTick} alt="Green Tick" />
                            <div className="font-semibold text-center">
                                Thank You for leaving the feedback!
                            </div>
                        </div>
                    </div>
                    :
                    null
            }

            { 
                takeFeedback ?
                <div className="flex-col mt-5 border-dotted border-2 rounded-lg">
                <div className="flex gap-10 flex-wrap justify-evenly pt-10" >
                {emojiResource.map(ele => {
                    if(ele.emotion == response) return null
                    return (
                            <div key={ele.emotion} className="flex-col items-center cursor-pointer" onClick={(e) => {handleFeedback(e, ele.emotion)}}>
                                <Image className="transform transition hover:scale-110 " src={ele.uri} alt={ele.emotion} width={60} height={60} />
                                <div className="font-bold text-center">{ele.emotion}</div>
                            </div>
                    );
                })}
            </div>
                <div className="font-thin text-gray-400 text-center mt-5 pb-5">Please select the appropriate emotion you think is correct from above</div>
                </div>
                :
                null
            }
        </div>
    );
}

export default Feedback;