import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function CardPost({post, postid}) {
    return (
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea href={'/post/' + post.slug}>

            <CardMedia
              component="img"
              height="140"
              image={process.env.REACT_APP_API_URL + post.image.data.attributes.formats.small.url}
              alt={post.image.data.attributes.alternativeText}
            />
            
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {post.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {post.description.substring(0, 100) + '...'}
              </Typography>
            </CardContent>

          </CardActionArea>
        </Card>
      );
}