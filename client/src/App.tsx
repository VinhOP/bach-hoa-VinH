import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { publicRoutes } from './routes';
import { FC, Fragment } from 'react';

const App: FC = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    {publicRoutes.map((route, i) => {
                        const Page = route.component;
                        const Layout = route.layout ? route.layout : Fragment;
                        return (
                            <Route
                                key={i}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                    <Route path="/admin" element={<Navigate to={'/admin/products'} />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
