import './App.css';
import WalletBalance from './Components/TopSection/BalanceSection';
import ButtonsRow from './Components/TopSection/ButtonsRow';
import TabsRow from "./Components/LowerSection/TabsRow";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div>
                <WalletBalance />
                <ButtonsRow />
                <TabsRow />
          </div>
      </header>
    </div>
  );
}

export default App;