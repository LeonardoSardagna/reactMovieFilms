import { Header } from "./header";
import { Outlet } from "react-router-dom";

export function PaginaPadrao() {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    )
}