

import { Link } from "react-router-dom";


const Home  = ()=>{

    const posts =[
        {
            id: "1",
            title: "Post 1",
            desc: "Description of post 1",
            img: "https://source.unsplash.com/featured/?nature,water"
        },
        {
            id: "2",
            title: "Post 2",
            desc: "Description of post 2",
            img: "https://source.unsplash.com/featured/?mountains,forest"
        },
        {
            id: "3",
            title: "Post 3",
            desc: "Description of post 3",
            img: "https://source.unsplash.com/featured/?sunset,landscape"
        },
        {
            id: "4",
            title: "Post 4",
            desc: "Description of post 4",
            img: "https://source.unsplash.com/featured/?animals,wildlife"
        },
        {
            id: "5",
            title: "Post 5",
            desc: "Description of post 5",
            img: "https://source.unsplash.com/featured/?architecture,city"
        },
        {
            id: "6",
            title: "Post 6",
            desc: "Description of post 6",
            img: "https://source.unsplash.com/featured/?travel,adventure"
        },
        {
            id: "7",
            title: "Post 7",
            desc: "Description of post 7",
            img: "https://source.unsplash.com/featured/?food,cooking"
        },
        {
            id: "8",
            title: "Post 8",
            desc: "Description of post 8",
            img: "https://source.unsplash.com/featured/?technology,code"
        },
        {
            id: "9",
            title: "Post 9",
            desc: "Description of post 9",
            img: "https://source.unsplash.com/featured/?fashion,clothing"
        },
        {
            id: "10",
            title: "Post 10",
            desc: "Description of post 10",
            img: "https://source.unsplash.com/featured/?music,instrument"
        }
    ]
    
    return(
        <div className="home">
        <div className="posts">

            {posts.map(post=>(
        <div className="post" key={post.id}>
        <div className="img">
            <img src={post.img} alt="Post image"/>
        </div>

        <div className="content">
            <Link className="link" to={`/post/${post.id}`} >
                <h1>{post.title}</h1>
            </Link>
                <p>{post.desc}</p>
                <button>Read More</button>
        </div>



        </div>

            ))}
        </div>


        </div>
    )
}

export default Home;
