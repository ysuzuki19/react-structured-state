import { Route } from 'react-router-dom';

import Root from './routes/Root';
import ArrayDemo from './routes/ArrayDemo';
import QueueDemo from './routes/QueueDemo';
import SetDemo from './routes/SetDemo';
import NavBar from './components/NavBar';

const App = (): JSX.Element => {
  return (
    <>
      <NavBar />
      <Route exact path="/" component={Root} />
      <Route exact path="/demo/array" component={ArrayDemo} />
      <Route exact path="/demo/queue" component={QueueDemo} />
      <Route exact path="/demo/set" component={SetDemo} />
    </>
  );
};

export default App;
