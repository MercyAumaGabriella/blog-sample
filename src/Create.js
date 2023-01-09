import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    // creating states for tracking values
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    // to redirect the user
    const history = useHistory();

    const handleSubmit = (e) => {
        // prevents page from being refreshed
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true);

        // posting to the data resource
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
            // going back one step in history
            // history.go(-1);

            // going back to the home page
            history.push('/');
        })
    }

    return (  
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                    type="text"
                    required 
                    // associate the state value to that in the form
                    value={title}
                    // updates the state with current value
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>

                <label>Blog Author</label>
                <select 
                   value={author}
                   onChange={(e)=> setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
            </form>
        </div>
    );
}
 
export default Create;