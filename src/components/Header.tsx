import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { useQuery } from 'react-query';
import { fetchDockerAppVersion } from '../services/DockerContainerServices';

function Header() {

    const { isLoading, isError, data, error } = useQuery('dockerAppVersion', fetchDockerAppVersion, { staleTime: 1000 * 60 * 5 });

    return (
        <AppBar
            position="static"
            color="default"
            elevation={0}
            sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
            <Toolbar sx={{ flexWrap: 'wrap' }}>
                <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                    Docker View
                </Typography>

                {
                    !isLoading &&
                    <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                        {data}
                    </Typography>
                }
                <nav>
                    <Link
                        variant="button"
                        color="text.primary"
                        href="#"
                        sx={{ my: 1, mx: 1.5 }}

                    >
                        Containers
                    </Link>

                    <Link
                        variant="button"
                        color="text.primary"
                        href="#"
                        sx={{ my: 1, mx: 1.5 }}
                    >
                        Control
                    </Link>
                </nav>
                <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                    Login
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default React.memo(Header);