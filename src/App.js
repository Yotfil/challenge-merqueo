/* External */
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
/* Components */
import Header from './components/Header';
import ContainerProducts from './pages/ContainerProducts.jsx'

library.add(fas)

function App() {

  return (
       <>
        <Header></Header>
        <ContainerProducts></ContainerProducts>
       </>
  );
}

export default App;
