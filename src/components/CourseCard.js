import { useState } from "react";
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

function CourseCard(props) {
    const [liked, setLiked] = useState(false);

    function LikeHandler() {
        if (!liked) {
            { toast.success('Liked Sucessfully!') };
            setLiked(!liked);
        } else {
            { toast.warning('Like Removed!') }
            setLiked(!liked);
        }
    }
    return (
        <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>

            <div className='relative'><img src={props?.image?.url} alt={props?.image.alt}></img></div>

            <div className='w-[40px] h-[40px] bg-white rounded-full grid place-items-center mx-60 relative top-[-20px]'>
                <button onClick={LikeHandler}>
                    {(liked) ? (<FcLike fontSize='1.75rem' />) : (<FcLikePlaceholder fontSize='1.75rem' />)}
                </button>
            </div>
            <div className='p-4'>
                <p className="text-white font-semibold text-lg leading-6">{props.title}</p>
                <p className='mt-2 text-white'>{(props.description.length > 100) ? (props.description.substring(0, 100) + '....') : (props.description)}</p>
            </div>
        </div>
    );
};

export default CourseCard;