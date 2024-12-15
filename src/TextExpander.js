import { useState } from "react";

function TextExpander({ text="", length=text.length, showText="Show More", hideText="Show Less", showMore=false, textStyle={},btnStyle={}}) {

    const handleShow = () => {
        if (shown)
            setShownText(text);
        else
            setShownText(text.slice(0, length));
        setIsShown(current => !current);
    }

    const [shownText, setShownText] = useState(text.slice(0, length));
    const [shown, setIsShown] = useState(showMore);
    return (
        <div style={textStyle}>
            <p>
                {shown ? shownText + '...' : text}
            </p>
            <button style={btnStyle} onClick={handleShow}>
                {shown ? showText: hideText}
            </button>
        </div>
    )
}

export default TextExpander;
