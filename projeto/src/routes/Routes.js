import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
// import Cadastro from '../pages/Cadastro';
// import Relatorio from '../pages/Relatorio';
import Login from '../pages/login/Login';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/painel" element={<Painel />} />
                <Route path="/cadastro" element={<Painel />} />
                <Route path="/relatorio" element={<Painel />} /> */}
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}