import { useHistory, useParams } from "react-router-dom";
import useFetch from "./usefetch";

const BlogsDetails = () => {

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

            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>

                    <div>{ blog.body }</div>

                    <button onClick={handleDelete}> delete </button>
                </article>
            ) }
        </div>
     );
}
 
export default BlogsDetails;