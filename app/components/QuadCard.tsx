import * as React from 'react'; 
import { Button, Card, CardMedia, CardActions, CardContent }  
from '@mui/material'; 
  
export default function Demo() { 
    return ( 
        <div style={{ margin: 100 }}> 
            <h1 style={{ color: 'green' }}>GeeksforGeeks</h1> 
            <h3><u>React MUI Card API</u></h3> 
            <Card raised={true} sx={{ maxWidth: 400 }}> 
                <CardMedia 
                    component="img"
                    height="200"
                    image= 
'https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200x200-min.png'
                    alt="GFG Logo"
                /> 
                <CardContent sx={{ bgcolor: "#E8E8E8" }}> 
                    <h3>DSA Self Paced Course</h3> 
                    <h4 style={{ color: "green" }}> 
                        Most popular course on DSA trusted by 
                        over 75,000 students! Built with years 
                        of experience by industry experts and 
                        gives you a complete package of video 
                        lectures, practice problems, quizzes, 
                        discussion forums and contests.<br /> 
                        Start Today ! 
                    </h4> 
                </CardContent> 
                <CardActions > 
                    <Button variant="contained" color="warning"> 
                       Share 
                     </Button> 
                    <Button variant="contained" color="success"> 
                       Enroll 
                    </Button> 
                </CardActions> 
            </Card> 
        </div> 
    ); 
}