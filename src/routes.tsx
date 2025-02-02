import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Research from "@/pages/Research";
import Publications from "@/pages/Publications";

export const publicRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/research" element={<Research />} />
      <Route path="/publications" element={<Publications />} />
    </Route>
  )
);
