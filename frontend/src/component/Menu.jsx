const Menu = ()=>{

    const posts = [
        // {
        //     id: "1",
        //     title: "Post 1",
        //     desc: "Description of post 1",
        //     img: "https://source.unsplash.com/featured/?nature,water"
        // },
        // {
        //     id: "2",
        //     title: "Post 2",
        //     desc: "Description of post 2",
        //     img: "https://source.unsplash.com/featured/?mountains,forest"
        // },
        // {
        //     id: "3",
        //     title: "Post 3",
        //     desc: "Description of post 3",
        //     img: "https://source.unsplash.com/featured/?sunset,landscape"
        // },
        // {
        //     id: "4",
        //     title: "Post 4",
        //     desc: "Description of post 4",
        //     img: "https://source.unsplash.com/featured/?animals,wildlife"
        // },
        // {
        //     id: "5",
        //     title: "Post 5",
        //     desc: "Description of post 5",
        //     img: "https://source.unsplash.com/featured/?architecture,city"
        // },
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
        },
        // {
        //     id: "11",
        //     title: "Post 11",
        //     desc: "Description of post 11",
        //     img: "https://source.unsplash.com/featured/?books,library"
        // },
        // {
        //     id: "12",
        //     title: "Post 12",
        //     desc: "Description of post 12",
        //     img: "https://source.unsplash.com/featured/?sports,fitness"
        // },
        // {
        //     id: "13",
        //     title: "Post 13",
        //     desc: "Description of post 13",
        //     img: "https://source.unsplash.com/featured/?cars,racing"
        // },
        // {
        //     id: "14",
        //     title: "Post 14",
        //     desc: "Description of post 14",
        //     img: "https://source.unsplash.com/featured/?technology,programming"
        // },
        // {
        //     id: "15",
        //     title: "Post 15",
        //     desc: "Description of post 15",
        //     img: "https://source.unsplash.com/featured/?movies,filmmaking"
        // }
    ];




    return(
        <div className="menu">

            <h1>Other posts you may like</h1>

            {posts.map(post=>(
                <div className="post" key={post.id}>

                <img src={post.img} alt=""/>
                <h1>{post.title}</h1>
                <button>Read More</button>



                </div>
            ))}


        </div>
    )
}

export default Menu;