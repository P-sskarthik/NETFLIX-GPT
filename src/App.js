import Body from './Components/Body';
import Profiles from './Components/Profiles'; // Import Profiles Page
import { Provider } from "react-redux";
import Store from './Utils/store';

function App() {
  return (
    <Provider store={Store}>
      <Body />
    </Provider>
  );
}

export default App;
