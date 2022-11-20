import {
    createBrowserRouter,
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
            element: <Refer/>,
        },
        {
            path: '/refer/friends',
            element: <Friend/>
        }
    ]);

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Header/>
                <Container sx={{marginY: 6}}>
                    <RouterProvider router={router}/>
                    <Box my={2}>
                        <Link href="/terms" sx={{textDecoration: 'none'}}>
                            <Typography variant="body1" color="primary">Terms & Conditions</Typography>
                        </Link>
                    </Box>

                </Container>
            </div>
        </ThemeProvider>
    );
}

export default App;
