import { createBrowserRouter } from "react-router-dom";

import MainLayout from '../layouts/MainLayout.jsx';
import ListedBooks from "../pages/ListedBooks.jsx";
import PagesToRead from "../pages/PagesToRead.jsx";
import Home from "../pages/Home.jsx";
import Error from "../pages/Error.jsx";
import BookDetails from "../pages/BookDetails.jsx";
// import ReadBooks from "../components/ReadBooks.jsx";
// import WishlistBooks from "../components/WishlistBooks.jsx";
import Contact from "../pages/Contact.jsx";
import Faq from "../pages/Faq.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/books.json'),
      },
      {
        path: "book/:id",
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/books.json'),
      },
      {
        path: "ListedBook",
        element: <ListedBooks></ListedBooks>,
        // children: [
        //   {
        //     index: true,
        //     element: <ReadBooks></ReadBooks>,
        //   },
        //   {
        //     path: "Wishlist",
        //     element: <WishlistBooks></WishlistBooks>,
        //   },
        // ],
      },
      {
        path: "PagesToRead",
        element: <PagesToRead></PagesToRead>,
      },
      {
        path: "Contact",
        element: <Contact></Contact>
      },
      {
        path: "FAQ",
        element: <Faq></Faq>
      },
    ],
  },
]);