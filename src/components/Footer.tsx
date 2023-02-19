import { Box, Container, Link, Typography, styled } from "@mui/material";
import * as React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="#">
                Zhengliang Wang
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const ContactContainer = styled("div")(() => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop : 16,
    paddingBottom : 16
}));
function Footer() {
    return (
        <footer>
            <Box component="footer"
                sx={{
                    bgcolor: 'background.paper',
                    py: 6,
                    position: 'absolute',
                    bottom: 0,
                    // height : "0rem",
                    width: '100%'
                }}>
                <Container maxWidth="lg">
                    <Typography
                        component="h2"
                        variant="h5"
                        color="inherit"
                        align="center"
                        noWrap
                        sx={{ flex: 2 }}>Contact Me</Typography>
                    <ContactContainer>
                        <Typography
                            component="h4"
                            variant="h6"
                            color="inherit"
                            noWrap>
                            <a href="mailto:wzlpuck@gmail.com">
                                <EmailIcon color="primary" sx={{ fontSize: 40 }} />
                            </a>wzlpuck@gmail.com
                        </Typography>
                        <Typography
                            component="h4"
                            variant="h6"
                            color="inherit"
                            noWrap>
                            <a href="https://github.com/pwang1997">
                                <GitHubIcon color="primary" fontSize={"large"} />
                            </a>@pwang1997
                        </Typography>
                        <Typography
                            component="h4"
                            variant="h6"
                            color="inherit"
                            noWrap>
                            <a href="https://www.linkedin.com/in/puck-wang-2020/">
                                <LinkedInIcon color="primary"
                                    fontSize={"large"} />
                            </a>@puck-wang-2020
                        </Typography>
                    </ContactContainer>
                    <Copyright />
                </Container>
            </Box>
        </footer>
    )
};

export default React.memo(Footer);
