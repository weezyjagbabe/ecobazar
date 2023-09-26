import {createBrowserRouter, createRoutesFromElements, Route,} from "react-router-dom";
import AppLayout from "./layouts/AppLayout.tsx";
import AddProduct from "./pages/product/AddProduct.tsx";
import Home from "./pages/Home.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<AppLayout/>} errorElement={<ErrorPage/>}>
            <Route index element={<Home/>}/>
            <Route path="add" element={<AddProduct key='add'/>}/>
            <Route path=":id/edit" element={<AddProduct key='edit'/>}/>
            <Route path="*" element={<ErrorPage/>}/>
        </Route>
    )
)