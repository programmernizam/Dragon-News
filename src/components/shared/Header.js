import headingImg from '@/assets/the_dragon_news.png';
import getCurrentDate from '@/utils/getCurrentDate';
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
export default function Header() {
    const currentDate = getCurrentDate()
    return (
        <Box className="py-5">
            <Container>
                <Image className='mx-auto' src={headingImg} width={500} height={500} alt="logo" />
                <Typography className="text-center my-2" color="gray" variant="body2">
                    Journalism Without Fear or Favor
                </Typography>
                <Typography className="text-center">
                    {currentDate}
                </Typography>
            </Container>
        </Box>
    )
}
