import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { FilmDetails } from "./UI/Card_details";

export function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<App />} path="/" />
          <Route element={<FilmDetails />} path="/film/:moiveId" />
          <Route path="*" element={<div>Not found</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
