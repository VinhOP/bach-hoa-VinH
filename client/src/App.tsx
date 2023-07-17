import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { publicRoutes } from './routes';
import { FC, Fragment } from 'react';

const App: FC = () => {
    return (
        <div className="App">
            <Routes>
                {publicRoutes.map((route, i) => {
                    const Page = route.component;
                    const Layout = route.layout ? route.layout : Fragment;
                    return (
                        <Route key={i} element={<Layout />}>
                            <Route path={route.path} element={<Page />} />
                        </Route>
                    );
                })}
                <Route path="/admin" element={<Navigate to={'/admin/category'} />} />
            </Routes>
        </div>
    );
};

export default App;
