import { getDiscoveredBridges } from './bindings';
import { Button } from './components/ui/button';

function App() {
    const discoveredBridgesPromise = getDiscoveredBridges();

    return (
        <div className="container">
            <h1>Welcome to Tauri!</h1>
            <Button>gaggi</Button>
            <div className='flex'>
            </div>
        </div>
    );
}

export default App;
