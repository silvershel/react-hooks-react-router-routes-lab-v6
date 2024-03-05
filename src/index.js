import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

/*
COMPONENTS
MovieCard
This component is already set up to render the title of one movie. 
You'll need to pass it the appropriate props to render a movie's title. 
You'll also need to use a Link component from react-router-dom that uses dynamic 
routing to link a user to the Movie page, using the movie id as a parameter.

PAGES
Movie
The component will display information about one specific movie. It should display 
the movie's title in an <h1> tag, the movie's time in a <p> tag, 
and each of the movie's genres within its own <span> tag.

You'll need to use the useParams hook to get URL parameter data about which movie you want 
to render, then use that data to fetch and render the appropriate movie.

Note: Even when all of your tests are passing, you will see a console.warn message indicating 
that the route the test file is using — bad-route — doesn't match any routes.


-----
MAYBE DONE
Home
It should also render a list of movies using MovieCard components.

*/
