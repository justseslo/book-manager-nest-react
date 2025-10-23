import AppLayout from "@/layouts/AppLayout";
import AddBookPage from "@/pages/books/AddBookPage";
import HomePage from "@/pages/home/HomePage";
import React from "react";
import { Route, Routes } from "react-router";

function Index() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="add-book" element={<AddBookPage />} />

      </Route>
    </Routes>
  );
}

export default Index;
