import { Link } from "react-router-dom";

/* I used destructuring to access the home blog list. You can also use the variable "props" instead like:
const BlogList = (props) => {...}
 */
const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          {/* to access the url and the parmeters within it, we use javascript */}
          <Link to = {`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
          
        </div>
      ))}
    </div>
  );
};

export default BlogList;
