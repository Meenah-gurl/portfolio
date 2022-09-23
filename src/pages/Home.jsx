import { useState } from "react";

let Home = () => {
    const [counter, setCount] = useState(0);


    return (
        <>
            <div>
                Hello From Home
            </div>

            <div className="my-10">
                <button onClick={() => setCount(counter + 1) }>
                    Add
                </button>
            </div>

            <div className="py-3 px-5 bg-red-200">
                { counter }
            </div>
        </>
    )
}

export default Home;