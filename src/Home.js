import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {id: 1, title:'My new website', body:'Lorem Ipsum', author: 'Mario'},
        {id: 2, title:'Welcome Party!', body:'Lorem Ipsum', author: 'Luigi'},
        {id: 3, title:'Web Dev Top Tips', body:'Lorem Ipsum', author: 'Toad'},
        {id: 4, title:'React 101', body:'Lorem Ipsum', author: 'Mario'}
    ])

    const handleDelete = (id) => {
        const filteredBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(filteredBlogs);
    }

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title='All Blogs' handleDelete={handleDelete} />
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === "Mario")} title="Mario's Blogs" /> */}
        </div>
     );
}
 
export default Home;