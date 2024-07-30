import { Route, Routes } from 'react-router-dom';
import CustomerRouter from './Routers/CustomerRouter';
import AdminRouter from './Routers/AdminRouter';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/*' element={<CustomerRouter/>}></Route>
        <Route path='/admin/*' element={<AdminRouter/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
