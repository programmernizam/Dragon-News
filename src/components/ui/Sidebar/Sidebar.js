import topNews from '@/assets/side-top-news.png';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "next/image";
export default function Sidebar() {
    return (
        <Box className="py-5">
            <Card>
                <CardActionArea>
                    <CardMedia>
                        <Image src={topNews} alt="top news" width={800} />
                    </CardMedia>
                    <CardContent>
                        <p className='inline-block
                     bg-red-500 px-3 py-1 text-white mb-3'>Technology</p>
                        <Typography gutterBottom variant="h5" component="div">
                            BITCOIN DEVELOPER MAILING LIST MIGRATES
                        </Typography>
                        <Typography gutterBottom className='my-3'>
                            By Nizam - Jan 10 2024
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    )
}
