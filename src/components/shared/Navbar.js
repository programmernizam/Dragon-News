'use client'
import logo from '@/assets/logo.png';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import { IconButton, Stack } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';
import Link from 'next/link';
const navItem = [
    {
        route: "Home",
        pathname: "/"
    },
    {
        route: "Pages",
        pathname: "/pages"
    },
    {
        route: "Category",
        pathname: "/category"
    },
    {
        route: "News",
        pathname: "/news"
    },
    {
        route: "About",
        pathname: "/about"
    },
    {
        route: "Contact",
        pathname: "/contact"
    },
]

export default function Navbar() {

    return (
        <AppBar position="static" className='bg-black'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Link href={"/"}>
                        <Image width={100} height={100} src={logo} alt="logo" />
                    </Link>
                    <Box className="w-full text-center">
                        {navItem.map((item) => (
                            <Link key={item} href={item.pathname}>
                                <Button className="text-white">
                                    {item.route}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                    <Box>
                        <Stack direction="row" sx={{ "& svg": { color: 'white' } }}>
                            <IconButton>
                                <Facebook />
                            </IconButton>
                            <IconButton>
                                <Instagram />
                            </IconButton>
                            <IconButton>
                                <Twitter />
                            </IconButton>
                        </Stack>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}