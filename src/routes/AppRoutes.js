import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'

const LazyAbout = React.lazy(() => import('../pages/About'));
const LazyContact = React.lazy(() => import('../pages/Contact'));

const LazyUseStateHome = React.lazy(() => import('../pages/UseStateHooks/Home'))
const LazyUseStateHookAppOne = React.lazy(() => import('../pages/UseStateHooks/ApplicationOne'));
const LazyUseStateHookAppTwo = React.lazy(() => import('../pages/UseStateHooks/ApplicationTwo'));
const LazyUseStateHookAppThree = React.lazy(() => import('../pages/UseStateHooks/ApplicationThree'));
const LazyUseStateHookAppFour = React.lazy(() => import('../pages/UseStateHooks/ApplicationFour'));
const LazyUseStateHookAppFive = React.lazy(() => import('../pages/UseStateHooks/ApplicationFive'));
const LazyUseStateHookAppSix = React.lazy(() => import('../pages/UseStateHooks/ApplicationSix'));

const LazyUseEffectHome = React.lazy(() => import('../pages/UseEffectHooks/Home'))
const LazyUseEffectHookAppOne = React.lazy(() => import('../pages/UseEffectHooks/ApplicationOne'));
const LazyUseEffectHookAppTwo = React.lazy(() => import('../pages/UseEffectHooks/ApplicationTwo'));

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />}></Route>

                <Route path='use-state-hook' element={<React.Suspense fallback='loading.....'><LazyUseStateHome /></React.Suspense>}>
                    <Route index element={<React.Suspense fallback='loading.....'><LazyUseStateHookAppOne /></React.Suspense>}></Route>
                    <Route path="app2" element={<React.Suspense fallback='loading.....'><LazyUseStateHookAppTwo /></React.Suspense>}></Route>
                    <Route path="app3" element={<React.Suspense fallback='loading.....'><LazyUseStateHookAppThree /></React.Suspense>}></Route>
                    <Route path="app4" element={<React.Suspense fallback='loading.....'><LazyUseStateHookAppFour /></React.Suspense>}></Route>
                    <Route path="app5" element={<React.Suspense fallback='loading.....'><LazyUseStateHookAppFive /></React.Suspense>}></Route>
                    <Route path="app6" element={<React.Suspense fallback='loading.....'><LazyUseStateHookAppSix /></React.Suspense>}></Route>
                </Route>

                <Route path='use-effect-hook' element={<React.Suspense fallback='loading.....'><LazyUseEffectHome /></React.Suspense>}>
                    <Route index element={<React.Suspense fallback='loading.....'><LazyUseEffectHookAppOne /></React.Suspense>}></Route>
                    <Route path="app2" element={<React.Suspense fallback='loading.....'><LazyUseEffectHookAppTwo /></React.Suspense>}></Route>
                </Route>
                
                <Route path="about" element={<React.Suspense fallback='loading.....'><LazyAbout /></React.Suspense>}></Route>
                <Route path="contact" element={<React.Suspense fallback='loading.....'><LazyContact /></React.Suspense>}></Route>
            </Routes>
        </>
    )
}

export default AppRoutes