import Bloglist from "./bloglist";
import useFetch from "./useFetch";

const Home = () => {
    const {data:blogs,isError,isPending} = useFetch('http://localhost:8000/blogs')

    return ( 
        <div className="home">
            {isError && <div> {isError} </div>}
            {isPending && <h1>LOADING...</h1>}
        {blogs && <Bloglist blogs={blogs} title='All blogs'/>}
            {/* <Bloglist blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's blogs" handleDelete={handleDelete}/> */}

        </div>
     );
}
 
export default Home;
