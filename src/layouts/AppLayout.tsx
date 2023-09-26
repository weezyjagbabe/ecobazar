import {Outlet} from "react-router-dom";
import Header from "../components/Header.tsx";

function AppLayout() {
    return (
        <main className="min-h-screen">
            <Header/>
            <div className="mx-auto max-w-7xl">
                <Outlet/>
            </div>
        </main>
    )
}

export default AppLayout;