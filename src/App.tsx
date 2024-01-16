import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
const AuthLayout = lazy(() => import("./layout/Auth.layout"));
const AuthPage = lazy(() => import("./pages/auth/Auth.page"));
const HomePage = lazy(() => import("./pages/Home.page"));
const CompleteProfilePage = lazy(
  () => import("./pages/auth/CompleteProfile.page"),
);
const OwnerLayout = lazy(() => import("./layout/Owner.layout"));
const Projects = lazy(() =>
  import("./pages/owner/Projects.page").then((res) => {
    console.log("chom");
    return res;
  }),
);
const Project = lazy(() => import("./pages/owner/Project.page"));
const Dashboard = lazy(() => import("./pages/owner/Dashboard.page"));
const CreateProjectPage = lazy(
  () => import("./pages/owner/CreateProject.page"),
);
const FreelancerLayout = lazy(() => import("./layout/Freelancer.Layout"));
const DashboardPage = lazy(() => import("./pages/freelancer/Dashboard.page"));
const ExistedProjectsPage = lazy(
  () => import("./pages/freelancer/ExistedProjects.page"),
);
const ProposalsPage = lazy(() => import("./pages/freelancer/Proposals.Page"));
const ProtectedRoute = lazy(() => import("./guard/ProtectedRoute"));
const AdminLayout = lazy(() => import("./layout/Admin.layout"));
const AdminDashboardPage = lazy(
  () => import("./pages/admin/AdminDashboardPage"),
);
const AdminUsersPage = lazy(() => import("./pages/admin/AdminUsersPage"));

function App() {
  return (
    <>
      <Routes>
        {/* public route */}
        <Route path="/" element={<HomePage />} />

        {/* private route */}
        <Route element={<AuthLayout />}>
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/complete-profile" element={<CompleteProfilePage />} />
        </Route>
        {/* owner root */}
        <Route
          path="/owner"
          element={
            <ProtectedRoute>
              <Suspense
                fallback={
                  <div className="fixed flex h-screen w-full items-center justify-center text-2xl">
                    درحال دریافت اطلاعات
                  </div>
                }
              >
                <OwnerLayout />
              </Suspense>
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="projects" element={<Projects />} />
          <Route path="create-project" element={<CreateProjectPage />} />
          <Route path="projects/:id" element={<Project />} />
        </Route>
        {/* freelancer route */}
        <Route
          path="/freelancer"
          element={
            <ProtectedRoute>
              <Suspense
                fallback={
                  <div className="fixed flex h-screen w-full items-center justify-center text-2xl">
                    درحال دریافت اطلاعات
                  </div>
                }
              >
                <FreelancerLayout />
              </Suspense>
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="projects" element={<ExistedProjectsPage />} />
          <Route path="proposals" element={<ProposalsPage />} />
        </Route>
        {/* admin route */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Suspense
                fallback={
                  <div className="fixed flex h-screen w-full items-center justify-center text-2xl">
                    درحال دریافت اطلاعات
                  </div>
                }
              >
                <AdminLayout />
              </Suspense>
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboardPage />} />
          <Route path="projects" element={<ExistedProjectsPage />} />
          <Route path="proposals" element={<ProposalsPage />} />
          <Route path="users" element={<AdminUsersPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
