import React, {useState} from 'react'


function Button(props) {
    console.log(props)

    const [count, setCount] = useState(props.upvotes);

    function handleClick(){
                setCount((currentCount)=> currentCount +1)
                // setCount = useState(9210)
            
    }

    const [countDown, setCountDown] = useState(props.downvotes);

    function handleClickDown(){
                setCountDown((currentCount)=> currentCount +1)
                // setCount = useState(9210)
            
    }
    return (
        <div>
            <button onClick={handleClick}>{count}👍 </button> <button onClick={handleClickDown}>{countDown}👎 </button>
        </div>
    )
}

export default Button;