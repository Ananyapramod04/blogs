import React, { useEffect, useState } from "react";
import { Box, Card, CardContent, CardMedia, Button, Typography } from "@mui/material";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/get")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const deletePost = (id) => {
    axios.delete(`http://localhost:3001/delete/${id}`)
      .then(() => {
        setPosts(posts.filter(post => post._id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const updatePost = (id) => {
    // Implement update logic here or navigate to an update form
  };

  return (
    <Box display="flex" justifyContent="center" flexWrap="wrap" gap={2} p={2}>
      {posts.map((post) => (
        <Card key={post._id} sx={{ width: 300 }}>
          <CardMedia component="img" height="140" image={post.img_url} alt={post.title} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {post.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {post.content}
            </Typography>
          </CardContent>
          <Box display="flex" justifyContent="space-between" p={2}>
            <Button variant="contained" color="secondary" onClick={() => deletePost(post._id)}>Delete</Button>
            <Button variant="contained" color="secondary" onClick={() => updatePost(post._id)}>Update</Button>
          </Box>
        </Card>
      ))}
    </Box>
  );
};

export default Home;


