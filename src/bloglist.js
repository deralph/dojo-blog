import { Link } from "react-router-dom";
const Bloglist = ({blogs,title}) => {

    return ( 
        <div className="blog-list">
            <h1>{title}</h1>
            {blogs.map(({id,author,title,body}) => {
                // const {id,author,title,body} = blog
              return ( <div className="blog-preview" key={id}>
                <Link to={`/blog/${id}`}>
                  <h2>{title}</h2>
                  <p>Written by {author}</p>
                </Link>
                       
                </div>
              )
            })}
        </div>
     );
}
 
export default Bloglist;