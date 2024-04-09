import React, { useState } from "react";


export const Card = (): React.JSX.Element => {

    const [dropShadow, setDeropShadow] = useState<boolean>(false)

    const handleClick = () => {
        setDeropShadow(dropShadow => !dropShadow)
    }

    return <div onClick={handleClick} className={`card-area__element ${dropShadow?"red-shadow":""}`}>
        <header className="card-area__element-title">
            Lorem Ipsum is simply dummy text
        </header>

        <div className="card-area__element-content">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </div>
    </div>
}