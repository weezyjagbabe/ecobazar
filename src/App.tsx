import {RouterProvider} from "react-router-dom";
import {router} from "./router.tsx";
import {Toaster} from "react-hot-toast";

function App() {
    return (
        <div className="App">
            <RouterProvider router={router}/>
            <Toaster
                position="top-center"
                reverseOrder={false}
                gutter={8}
                containerClassName=""
                containerStyle={{}}
                toastOptions={{
                    // Define default options
                    className: '',
                    duration: 5000,
                    style: {
                        background: '#363636',
                        color: '#fff',
                    },

                    // Default options for specific types
                    success: {
                        duration: 3000,
                    },
                }}
            />
        </div>
    )
}

export default App
