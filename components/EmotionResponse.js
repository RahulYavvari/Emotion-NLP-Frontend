import Image from "next/image";
import {emojiResource} from "@/app/constants";

const EmotionResponse = ({ input, response }) => {
    const emojiWidth = 150;
    const emojiResponse = emojiResource.filter(ele => ele.emotion == response)[0];
    return (
        <>
        {response &&
        <div className="w-[100%] mt-[3rem] border-gray-200 border-2 shadow-md bg-white rounded-lg p-8 flex justify-center gap-10 items-center">
            <div>
                <Image src={emojiResponse.uri} width={emojiWidth} alt={emojiResponse.emotion} height={emojiWidth} />
            </div>
            <div className="flex-col gap-2">
                    <h1 className="text-gray-600 font-semibold text-xl max-w-[600px]">{input}</h1>
                    <h2 className="font-bold text-2xl"><strong className="text-gray-400">Emotion</strong> {response}</h2>
            </div>
        </div>
        }
        </>
    );
};

export default EmotionResponse;