import { useState } from "react";

let Home = () => {
    const [counter, setCount] = useState(0);


    return (
        <>
            <div className="bg-red-600 dark:bg-gray-900 dark:text-white">
                Hello From Home
            </div>
        </>
    )
}

export default Home;