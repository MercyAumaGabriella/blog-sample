import { useHistory, useParams } from "react-router-dom";
import useFetch from "./usefetch";
import PopUpDelete from "./popUp";
import { useState } from "react";

const BlogsDetails = () => {
    // Show the popUp button
    const [popUp, showPopUp] = useState(false);

    const popUpFunction = () => {
        if(popUp === false){
            showPopUp(true);
        } else {
            showPopUp(false);
        }
        
    }

    // allows us to grab parameters from the urls
    const { id } = useParams();

    // using a custom Hook to get information
    const {data:blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);

    const history = useHistory();
    
    const handleDelete = () =>{
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return ( 
        <div className="blog-details">
            {/* loading message if true */}
            { isPending && <div>Loading</div> }

            {/* Loading error if any */}
            { error && <div>{error}</div> }

            { popUp && <PopUpDelete /> }

            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>

                    <div>{ blog.body }</div>

                    <button onClick={popUpFunction}> delete </button>
                </article>
            ) }
        </div>
     );
}
 
export default BlogsDetails;