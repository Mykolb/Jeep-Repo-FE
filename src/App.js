import Container from './components/Container';

//importing icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faBars, faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
library.add(fas, faBars, faTimesCircle);



function App() {
  return (
    <div className="App">
      <Container />
    </div>
  );
}

export default App;
