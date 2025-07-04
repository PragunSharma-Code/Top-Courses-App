import { useState } from "react";

function Filters(props) {
    const [activeBtn, setActiveBtn] = useState('All');

    return (
        <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
            {
                props.categories.map((category) => {
                    return <button key={category.id} onClick={() => {
                        props.currClickedCategory(category.title);
                        setActiveBtn(category.title);
                    }}

                        className={`text-lg px-2 py-1 rounded-md font-medium 
                     text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300
                    ${(activeBtn == category.title) ? "bg-opacity-60 border-white" : "bg-opacity-40 border-transparent"}`
                        }
                    >{category.title}</button>
                })}
        </div>
    );
};

export default Filters;