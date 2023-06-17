import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { publicRoutes } from './routes';
import { FC, Fragment } from 'react';

const App: FC = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    {publicRoutes.map((route, i) => {
                        const Page: FC = route.component;
                        const Layout: any = route.layout ? route.layout : Fragment;
                        return (
                            <Route
                                key={i}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            ></Route>
                        );
                    })}
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
