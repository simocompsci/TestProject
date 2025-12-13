import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LibraryPage from "./Pages/LibraryPage";
import WishListPage from "./Pages/WishListPage";
import SettingsPage from "./Pages/SettingsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/whishlist" element={<WishListPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
