import './App.css';
import Counter from './components/counter/Counter';
import TestCounterProps from './components/counterMockingFunctions/TestCounterProps';
import Mui from './components/mui/Mui';
import { MuiProvider } from './providers/MuiProvider';
function App() {
  return (
    <MuiProvider>
      {/* <Mui/> */}
      {/* <Counter/> */}
      <TestCounterProps/> 
    </MuiProvider>
  );
}

export default App;
