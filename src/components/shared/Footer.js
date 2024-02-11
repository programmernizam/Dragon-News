import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import Link from "next/link";
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

export default function Footer() {
    const year = new Date().getFullYear()
    return (
        <Box className="bg-black px-2 py-10">
            <Container>
                <Box sx={{ "& svg": { color: 'white' } }} className="text-center">
                    <IconButton>
                        <Facebook />
                    </IconButton>
                    <IconButton>
                        <Instagram />
                    </IconButton>
                    <IconButton>
                        <Twitter />
                    </IconButton>
                    <IconButton>
                        <LinkedIn />
                    </IconButton>
                </Box>
                <Box className="w-full text-center">
                    {navItem.map((item) => (
                        <Link key={item} href={item.pathname}>
                            <Button className="text-white">
                                {item.route}
                            </Button>
                        </Link>
                    ))}
                </Box>
                <Typography className="text-center" color="gray" variant="body2">
                    ©{year} Dragon News. Design by ProgrammerNizam
                </Typography>
            </Container>
        </Box>
    )
}
