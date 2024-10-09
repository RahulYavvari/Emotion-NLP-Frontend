import AngerEmoji from "@/app/public/images/anger.png";
import DisgustEmoji from "@/app/public/images/disgust.png";
import FearEmoji from "@/app/public/images/fear.png";
import GuiltEmoji from "@/app/public/images/guilt.png";
import JoyEmoji from "@/app/public/images/joy.png";
import SadEmoji from "@/app/public/images/sadness.png";
import ShameEmoji from "@/app/public/images/shame.png";

const emojiResource = [
    {
        emotion: "Anger",
        uri: AngerEmoji
    },
    {
        emotion: "Disgust",
        uri: DisgustEmoji
    },
    {
        emotion: "Fear",
        uri: FearEmoji
    },
    {
        emotion: "Guilt",
        uri: GuiltEmoji
    },
    {
        emotion: "Joy",
        uri: JoyEmoji
    },
    {
        emotion: "Sadness",
        uri: SadEmoji
    },
    {
        emotion: "Shame",
        uri: ShameEmoji
    },
];

const keyMap = {
    SEND: 'ctrl+enter',
};

export { emojiResource, keyMap};