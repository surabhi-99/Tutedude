import './App.css';
import {ThemeProvider} from '@mui/material/styles';
import theme from "./styles/style";
import Work from "./components/work";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Work />
            </div>
        </ThemeProvider>
    );
}

export default App;
