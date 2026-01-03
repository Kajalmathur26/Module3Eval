import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { RestaurantProvider } from "./context/RestaurantContext";
import ProtectedRoute from "./routes/ProtectedRoute";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import CustomerDashboard from "./pages/CustomerDashboard";
import UpdateRestaurant from "./pages/UpdateRestaurant";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <RestaurantProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/admin/dashboard" element={
              <ProtectedRoute allowedRole="admin">
                <AdminDashboard />
              </ProtectedRoute>
            } />
            <Route path="/admin/restaurants/update" element={
              <ProtectedRoute allowedRole="admin">
                <UpdateRestaurant />
              </ProtectedRoute>
            } />
            <Route path="/customers/dashboard" element={
              <ProtectedRoute allowedRole="customer">
                <CustomerDashboard />
              </ProtectedRoute>
            } />
          </Routes>
        </RestaurantProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
