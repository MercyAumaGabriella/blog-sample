import { useState, useEffect } from "react";
import BlogList from "./blogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1},
        { title: 'Welsome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2},
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'marty', id: 3},
        { title: 'Mobile App Tutorials', body: 'lorem ipsum...', author: 'mario', id: 4}
    ]);

    const [name, setName] = useState('mario');

    const handleDelete = (id) => {
        // deleting blogs in list
        const newBlogs = blogs.filter(blog => 
            blog.id !== id);

        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('use effect ran');
        console.log(name);
    }, [name]);

    return (  
        <div className="home">
            {/* Parsing props into the reusable component */}
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
            
            <button onClick={()=>setName}>Change name</button>
            <p>{name}</p>
        </div>
    );
}
 
export default Home;