import { useRoutes } from 'react-router-dom';
import routes from './routes/routes';

function App() {
  const content = useRoutes(routes);
  return content;
}

export default App;
