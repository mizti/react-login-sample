import React, { useEffect, useState } from 'react'
import "./Home.css"
import { collection, query, where, doc, getDocs, deleteDoc } from "firebase/firestore";
import { auth, provider, db } from "../firebase";
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [postList, setPostList] = useState([]);
    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(collection(db, "posts"));
            setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getPosts();
    }, []);

    const navigate = useNavigate();
    const handleDelete = async (id) => {
        await deleteDoc(doc(db, "posts", id));
        window.location.href = "/";
    };

    return (
        <div className="homePage">
            {postList.map((post) => {
                return (
                    <div className="postContents" key={post.id}>
                        <div className="postHeader">
                            <h1>{post.title}</h1>
                        </div>
                        <div className="postTextContainer">
                            {post.postsText}
                        </div>
                        <div className="nameAndDeleteButton">
                            <h3>@{post.author.username}</h3>
                            {post.author.id === auth.currentUser?.uid && (
                                <button onClick={() => handleDelete(post.id)}>Delete</button>
                            )}
                        </div>
                    </div>
                )
            })}
        </div>
    )
};

export default Home