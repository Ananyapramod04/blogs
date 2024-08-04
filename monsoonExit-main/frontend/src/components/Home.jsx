//Create the Home UI for the BlogAPP(Cards are preferrred; You may choose your UI preference )
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Card, CardActions, CardContent, CardMedia, Button, Typography } from "@mui/material";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deletePost = (id) => {
    axios
      .delete(`http://localhost:3001/posts/${id}`)
      .then((res) => {
        setPosts(posts.filter(post => post._id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updatePost = (id) => {
    // Implement your update logic here
    console.log("Update post", id);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 2,
        padding: 2,
      }}
    >
      {posts.map((post) => (
        <Card key={post._id} sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={post.img_url}
            alt={post.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {post.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {post.content}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="secondary" onClick={() => deletePost(post._id)}>Delete</Button>
            <Button size="small" color="secondary" onClick={() => updatePost(post._id)}>Update</Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default Home;


//Write your code here