const SendButton = ({ isActive }) => {
    return (
        <>
        {!isActive && <input className="bg-blue-200  text-white font-semibold p-2 rounded-md" disabled type="submit" value="Send"/>}
        
        {isActive && <input className="bg-blue-800 text-white font-semibold p-2 cursor-pointer hover:bg-blue-900 rounded-md" type="submit" value="Send"/>}
        </>
    );
};

export default SendButton;