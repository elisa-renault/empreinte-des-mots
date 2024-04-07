import React, {useEffect, useState} from "react";
import CardPost from "./CardPost";

import {Grid, Box, Skeleton} from '@mui/material/';

export default function Posts() {

    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:1337/api/posts?populate=*',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(res => res.json())
        .then(res => {
            setTimeout(() => {
                if (res && res.data) {
                    setPosts(res.data);
                } else {
                    console.error('La réponse de l\'API n\'est pas la structure attendue:', res);
                }
                setIsLoading(false);
            }, 2000);
        })
    },[]);

    return (
        <div className="posts">
            <h1>Liste des articles</h1>
            <Grid container spacing={2}>
                {isLoading ? (
                    <Grid item>
                        <Box>
                            <Skeleton variant="rounded" width={300} height={100} style={{ marginBottom: 6 }} />
                            <Skeleton height={32} />
                            <Skeleton />
                        </Box>
                    </Grid>
                ) : posts.map(post => (
                    <Grid item>
                        <CardPost post={post.attributes} key={post.id} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};