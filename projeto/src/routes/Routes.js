import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Relatorio from '../pages/relatorio/Relatorio';
import Login from '../pages/login/Login';
import Cadastro from '../pages/cadastro/Cadastro';
import Painel from '../pages/painel/Painel';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/painel" element={<Painel />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/relatorio" element={<Relatorio />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}