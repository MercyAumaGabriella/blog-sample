
import BlogList from "./blogList";
import useFetch from "./usefetch";

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    return (  
        <div className="home">
            {/* Parsing props into the reusable component e.g "blogs ={blogs}"*/}

            {/* Conditional statement where if blogs is null, nothing is returned but if something is there, the second part of the statement is fullfilled */}

            {/* Code for if loading is present then show the div statement */}

            {/* error is printed to the document */}
            {error && <div>{ error }</div>}
            {isPending && <div>Loading...</div> }
            {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
            
        </div>
    );
}
 
export default Home;