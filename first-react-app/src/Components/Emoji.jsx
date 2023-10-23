import { useState } from "react";

function Emoji(props) {
    const [myMood, setMyMood] = useState(true);

    //Function to change the mood emoji
    const toggleMood = () => {
        setMyMood((prevMyMood) => !prevMyMood);
    };

    return (
        <div className="Emoji componentBox">
            <button onClick={toggleMood}>Change Mood</button>
            {myMood ? (
                <img src="../src/assets/happy.svg" alt="Happy Emoji" />
            ) : (
                <img src="../src/assets/angry.svg" alt="Angry Emoji" />
            )}
        </div>
    )
}

export default Emoji;