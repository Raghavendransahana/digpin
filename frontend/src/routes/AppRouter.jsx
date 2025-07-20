import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "../features/Dashboard";
import CancelAccess from "../features/CancelAccess";
import NotFound from "../features/NotFound";

import Login from "../features/Auth";
import OTPVerify from "../features/OTP";

import UploadRecords from "../features/Upload";
import ViewRecords from "../features/Records";

import FamilyHub from "../features/FamilyHub";
import AccessLogs from "../features/AccessLogs";

import HospitalView from "../features/HospitalView";

import ProtectedRoute from "./ProtectedRoute";

export default function AppRouter() {
  return (
   
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/verify" element={<OTPVerify />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute role="patient">
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/records/upload"
          element={
            <ProtectedRoute role="patient">
              <UploadRecords />
            </ProtectedRoute>
          }
        />
        <Route
          path="/records/view"
          element={
            <ProtectedRoute role="patient">
              <ViewRecords />
            </ProtectedRoute>
          }
        />
        <Route
          path="/family-hub"
          element={
            <ProtectedRoute role="patient">
              <FamilyHub />
            </ProtectedRoute>
          }
        />
        <Route
          path="/access-logs"
          element={
            <ProtectedRoute role="patient">
              <AccessLogs />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cancel-access"
          element={
            <ProtectedRoute role="patient">
              <CancelAccess />
            </ProtectedRoute>
          }
        />

        <Route
          path="/hospital/view"
          element={
            <ProtectedRoute role="hospital">
              <HospitalView />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>

  );
}
