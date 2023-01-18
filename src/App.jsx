import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import { publicPage, privatePage } from './Routers/index';
function App() {
    return (
        <Routers>
            <div className="App">
                <Routes>
                    {publicPage.map((route, index) => {
                        const Page = route.Component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Suspense>
                                        <Page />
                                    </Suspense>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Routers>
    );
}

export default App;
