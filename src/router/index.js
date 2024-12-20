import React, { Fragment, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import DefaultLayout from "../components/DefaultLayout";
import Home from "../pages/Customer/Homepage/Home";
import AdminRouters from "./AdminRouter";
import CustomerRouter from "./CustomerRouter";
import NotFound from "../pages/NotFound/NotFound";
import LoginManagerAndAdmin from "../pages/Management/LoginManagerAndAdmin";
import { AccountCus } from "../pages/Management/Admin/AccountCus";
import { DefaultLayoutAdmin } from "../components/DefaultLayoutAdmin";
import { AccountStaff } from "../pages/Management/Admin/AccountStaff";
import { SystemConfig } from "../pages/Management/Admin/SystemConfig";
import CustomerProfile from "../pages/Customer/Profile";
import UserProfileLayout from "../components/UserProfileLayout";
import DefaultLayoutManager from "../components/DefaultLayoutManager";
import ManagementStaff from "../pages/Management/Manager/ManagementStaff";
import ManagerRouter from "./ManagerRouter";
import Catalogue from "../pages/Customer/Catalogue";
import ManagementBodySize from "../pages/Management/Manager/ManagementBodySize";
import ManagementMaterial, {
  ManagementMaterialCategory,
  ManagementMaterialType,
} from "../pages/Management/Manager/ManagementMaterial";
import ManagementDiscount from "../pages/Management/Manager/ManagementDiscount";
import ProductDetail from "../pages/Customer/Catalogue/detail";
import BodyProfile from "../pages/Customer/BodyProfile/BodyProfile";
import ManagementProductTemplate, {
  ManagementCreateProductTemplate,
} from "../pages/Management/Manager/ManagementProductTemplate";
import Blog from "../pages/Customer/Blogs/Blog";
import BlogDetail from "../pages/Customer/Blogs/BlogDetail";
import Order from "../pages/Customer/Orders/Order";
import ManagementBlog from "../pages/Management/Manager/ManagementBlog";
import ManagementDashboard from "../pages/Management/Manager/ManagementDashboard";
import ManagementCustomer from "../pages/Management/Manager/ManagementCustomer";
import ManagementCategory from "../pages/Management/Manager/ManagementCategory";
import ManagementOrder from "../pages/Management/Manager/ManagementOrder";
import OrderToCustomer from "../pages/Management/Manager/OrderToCustomer";
import PaymentSuccess from "../components/PaymentSuccessOrNot/PaymentSuccess";
import PaymentFailed from "../components/PaymentSuccessOrNot/PaymentFailed";
import OrderDetail from "../pages/Customer/Orders/OrderDetail";
import ManagementTask from "../pages/Management/Manager/ManagementTask";
import ManagementTaskByOrder from "../pages/Management/Manager/ManagementTaskByOrder";
import ManagementUpdateProductTemplate from "../pages/Management/Manager/ManagementUpdateProductTemplate";
import ProductTemplateDetail from "../pages/Management/Manager/ProductTemplateDetail";
import ChangePassword from "../pages/Customer/BodyProfile/ChangePassword";
import { InfoManager } from "../pages/Management/Manager/InfoManager/InfoManager";

export const customerRouters = [
  {
    path: "/body-profile",
    name: "user-body-profile",
    component: BodyProfile,
    layout: UserProfileLayout,
  },
  {
    path: "/change-password",
    name: "user-change-password",
    component: ChangePassword,
    layout: UserProfileLayout,
  },
  {
    path: "/profile",
    name: "customer-profile",
    component: CustomerProfile,
    layout: UserProfileLayout,
  },
  {
    path: "/orders",
    name: "customer-orders",
    component: Order,
    layout: DefaultLayout,
  },
  {
    path: "/orders/:id",
    name: "customer-order-detail",
    component: OrderDetail,
    layout: DefaultLayout,
  },
];

export const publicRouters = [
  {
    path: "/",
    name: "home",
    component: Home,
    layout: DefaultLayout,
  },
  {
    path: "/blog",
    name: "blog",
    component: Blog,
    layout: DefaultLayout,
  },
  {
    path: "/home",
    name: "home",
    component: Home,
    layout: DefaultLayout,
  },
  {
    path: "/error",
    name: "error",
    component: NotFound,
    layout: null,
  },
  {
    path: "/payment-success",
    name: "success",
    component: PaymentSuccess,
    layout: null,
  },
  {
    path: "/payment-fail",
    name: "failed",
    component: PaymentFailed,
    layout: null,
  },

  {
    path: "/management/login",
    name: "admin-login",
    component: LoginManagerAndAdmin,
    layout: null,
  },
  {
    path: "/catalogue",
    name: "home-catalogue",
    component: Catalogue,
    layout: DefaultLayout,
  },
  {
    path: "/catalogue/:id",
    name: "product-detail",
    component: ProductDetail,
    layout: DefaultLayout,
  },
  {
    path: "/blog/:id",
    name: "blog-detail",
    component: BlogDetail,
    layout: DefaultLayout,
  },
];

export const adminRouters = [
  {
    path: "/admin",
    name: "home-admin",
    component: AccountCus,
    layout: DefaultLayoutAdmin,
  },
  {
    path: "/admin/account/staff",
    name: "home-admin-account-staff",
    component: AccountStaff,
    layout: DefaultLayoutAdmin,
  },

  {
    path: "/admin/system-configuration",
    name: "system-configuration",
    component: SystemConfig,
    layout: DefaultLayoutAdmin,
  },
];
export const managerRouters = [
  {
    path: "/manager/product-template",
    name: "manager-product-template",
    component: ManagementProductTemplate,
    layout: DefaultLayoutManager,
  },
  {
    path: "/manager/create/product-template",
    name: "manager",
    component: ManagementCreateProductTemplate,
    layout: DefaultLayoutManager,
  },
  {
    path: "/manager/account/staffs",
    name: "management-staff",
    component: ManagementStaff,
    layout: DefaultLayoutManager,
  },
  {
    path: "/manager/body-size",
    name: "management-body-size",
    component: ManagementBodySize,
    layout: DefaultLayoutManager,
  },
  {
    path: "/manager/tasks-management",
    name: "management-tasks",
    component: ManagementTask,
    layout: DefaultLayoutManager,
  },
  {
    path: "/manager/tasks-management-by-order",
    name: "management-tasks",
    component: ManagementTaskByOrder,
    layout: DefaultLayoutManager,
  },
  {
    path: "/manager/material",
    name: "management-material",
    component: ManagementMaterial,
    layout: DefaultLayoutManager,
  },
  {
    path: "/manager/discount",
    name: "management-material",
    component: ManagementDiscount,
    layout: DefaultLayoutManager,
  },
  {
    path: "/manager/blog",
    name: "management-blog",
    component: ManagementBlog,
    layout: DefaultLayoutManager,
  },
  {
    path: "/manager",
    name: "management",
    component: ManagementDashboard,
    layout: DefaultLayoutManager,
  },
  {
    path: "/manager/account/customer",
    name: "management-customer",
    component: ManagementCustomer,
    layout: DefaultLayoutManager,
  },
  {
    path: "/manager/material-category",
    name: "management-customer",
    component: ManagementMaterialCategory,
    layout: DefaultLayoutManager,
  },
  {
    path: "/manager/material-type",
    name: "management-customer",
    component: ManagementMaterialType,
    layout: DefaultLayoutManager,
  },
  {
    path: "/manager/product-template/category",
    name: "management-category",
    component: ManagementCategory,
    layout: DefaultLayoutManager,
  },
  {
    path: "/manager/orders",
    name: "management-category",
    component: ManagementOrder,
    layout: DefaultLayoutManager,
  },
  {
    path: "/manager/order-for-customer",
    name: "management-order-for-customer",
    component: OrderToCustomer,
    layout: DefaultLayoutManager,
  },
  {
    path: "/manager/update/product-template/:id",
    name: "manager",
    component: ManagementUpdateProductTemplate,
    layout: DefaultLayoutManager,
  },
  {
    path: "/manager/product-template/:id",
    name: "product-template-detail",
    component: ProductTemplateDetail,
    layout: DefaultLayoutManager,
  },
  {
    path: "/manager/manager-info",
    name: "manager-info",
    component: InfoManager,
    layout: DefaultLayoutManager,
  },
];

//Scroll Top when clicked another page
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

export const RouterComponents = () => {
  return (
    <BrowserRouter>
      <div>
        <ScrollToTop />
        <Routes>
          {publicRouters.map((route, index) => {
            const Page = route.component;
            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
          <Route exact path="/" element={<AdminRouters />}>
            {adminRouters.map((route, index) => {
              const Page = route.component;
              let Layout = DefaultLayout;
              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = Fragment;
              }
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Route>
          <Route exact path="/" element={<ManagerRouter />}>
            {managerRouters.map((route, index) => {
              const Page = route.component;
              let Layout = DefaultLayout;
              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = Fragment;
              }
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Route>
          <Route exact path="/" element={<CustomerRouter />}>
            {customerRouters.map((route, index) => {
              const Page = route.component;
              let Layout = DefaultLayout;
              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = Fragment;
              }
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};
