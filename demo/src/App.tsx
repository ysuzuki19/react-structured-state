import { Route, Routes } from 'react-router-dom';

import Root from './routes/Root';
import ArrayDemo from './routes/ArrayDemo';
import QueueDemo from './routes/QueueDemo';
import SetDemo from './routes/SetDemo';
import MapDemo from './routes/MapDemo';
import NavBar from './components/NavBar';

const App = (): JSX.Element => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/demo/array" element={<ArrayDemo />} />
        <Route path="/demo/queue" element={<QueueDemo />} />
        <Route path="/demo/set" element={<SetDemo />} />
        <Route path="/demo/map" element={<MapDemo />} />
      </Routes>
    </>
  );
};

export default App;
