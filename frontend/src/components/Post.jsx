import React, {useEffect} from "react";
import {useParams} from 'react-router-dom';
export default function Post() {

    let {slug} = useParams();
    console.log(slug);

    useEffect(() => {
        fetch(`http://localhost:1337/api/posts/${slug}`)
        .then(res => res.json())
        .then(res => console.log(res))
    });

    return (
        <div className="post">
            <p>My post.</p>
        </div>
    );
};