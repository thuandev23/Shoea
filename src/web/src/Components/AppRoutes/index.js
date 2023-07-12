import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Customers from '../../Pages/Customers';
import Dashboard from '../../Pages/Dashboard';
import Inventory from '../../Pages/Inventtory';
import Orders from '../../Pages/Orders';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/inventory" element={<Inventory />}></Route>
      <Route path="/orders" element={<Orders />}></Route>
      <Route path="/customers" element={<Customers />}></Route>
    </Routes>
  );
}
export default AppRoutes;
