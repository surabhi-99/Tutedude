import {
    createBrowserRouter, Outlet,
    RouterProvider,
} from "react-router-dom";
import './App.css';
import {ThemeProvider} from '@mui/material/styles';
import theme from "./styles/style";
import {Box, Container, Link, Typography} from "@mui/material";
import Refer from "./pages/Refer";
import Friend from "./pages/Friend";
import Header from "./components/Header";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <div className="App">
                    <Header/>
                    <Container sx={{my: {sm: 3, md: 6}}}>
                        <Outlet/>
                        <Box my={2}>
                            <Link href="/terms" sx={{textDecoration: 'none'}}>
                                <Typography variant="body1" color="primary">Terms & Conditions</Typography>
                            </Link>
                        </Box>
                    </Container>
                </div>
            ),
            children: [
                {
                    path: "/",
                    element: <Refer/>,
                },
                {
                    path: '/refer/friends',
                    element: <Friend/>
                }
            ],
        },

    ]);

    return (
        <ThemeProvider theme={theme}>
            <RouterProvider router={router}/>
        </ThemeProvider>
    );
}

export default App;
