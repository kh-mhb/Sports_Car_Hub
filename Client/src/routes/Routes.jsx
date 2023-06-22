import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../Components/ErrorPage";
import AllToys from "../Components/AllToys";
import Registration from "../Registration";
import Login from "../Login";
import CategoryWiseCars from "../Components/CategoryWiseCars";
import AddItem from "../Components/AddItem";
import MyProducts from "../MyProducts";
import Private from "../Private/Private";
import SingleCarDetails from "../SingleCarDetails";
import Blog from "../Components/Blog";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:
            [
                {
                    path: '/',
                    element: <Home></Home>
                }, {
                    path: '/alltoys',
                    element: <AllToys></AllToys>
                },
                {
                    path: '/registration',
                    element: <Registration></Registration>
                },
                {
                    path: '/login',
                    element: <Login></Login>
                },
                {
                    path: '/catagory/:id',
                    element: <CategoryWiseCars></CategoryWiseCars>,
                    loader: async ({ params }) => {
                        return fetch(`https://toy-new.vercel.app/catagorywise/${params.id}`);
                    }
                },
                {
                    path: '/addItem',
                    element: <Private> <AddItem></AddItem></Private>
                }, {
                    path: '/myproducts',
                    element: <Private><MyProducts></MyProducts></Private>
                }, {
                    path: '/details/:id',
                    element: <Private> <SingleCarDetails></SingleCarDetails> </Private>,
                    loader: async ({ params }) => {
                        return fetch(`https://toy-new.vercel.app/details/${params.id}`);
                    }
                },
                {
                    path: '/blog',
                    element: <Blog></Blog>
                }

            ],
        errorElement: <ErrorPage></ErrorPage>
    },
]);
export default router;