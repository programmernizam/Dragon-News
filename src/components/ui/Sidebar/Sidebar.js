import topNews from '@/assets/side-top-news.png';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
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
                        <Typography gutterBottom>
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
            <Grid container spacing={3} className='py-6'>
                <Grid item xs={12}>
                    <Card>
                        <Grid container>
                            <Grid item xs={4}>
                                <CardMedia className='w-full h-full'>
                                    <Image src={topNews} alt='news' width={400} className='w-full h-full object-cover' />
                                </CardMedia>
                            </Grid>
                            <Grid item xs={8}>
                                <CardContent className='p-3'>
                                    <Typography>
                                        BITCOIN DEVELOPER MAILING LIST MIGRATES
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        By Nizam - Jan 10 2024
                                    </Typography>
                                </CardContent>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <Card>
                        <Grid container>
                            <Grid item xs={4}>
                                <CardMedia className='w-full h-full'>
                                    <Image src={topNews} alt='news' width={400} className='w-full h-full object-cover' />
                                </CardMedia>
                            </Grid>
                            <Grid item xs={8}>
                                <CardContent className='p-3'>
                                    <Typography>
                                        BITCOIN DEVELOPER MAILING LIST MIGRATES
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        By Nizam - Jan 10 2024
                                    </Typography>
                                </CardContent>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <Card>
                        <Grid container>
                            <Grid item xs={4}>
                                <CardMedia className='w-full h-full'>
                                    <Image src={topNews} alt='news' width={400} className='w-full h-full object-cover' />
                                </CardMedia>
                            </Grid>
                            <Grid item xs={8}>
                                <CardContent className='p-3'>
                                    <Typography>
                                        BITCOIN DEVELOPER MAILING LIST MIGRATES
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        By Nizam - Jan 10 2024
                                    </Typography>
                                </CardContent>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
            <Card>
                <CardActionArea>
                    <CardMedia>
                        <Image src={topNews} alt="top news" width={800} />
                    </CardMedia>
                    <CardContent>
                        <p className='inline-block
                     bg-red-500 px-3 py-1 text-white mb-3'>Technology</p>
                        <Typography gutterBottom>
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
