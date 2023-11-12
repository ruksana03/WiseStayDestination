import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import MainRouter from './Routers/MainRouter.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ParallaxProvider } from 'react-scroll-parallax';

import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

const client = new QueryClient();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <AuthProvider>
        <ParallaxProvider>
          <RouterProvider router={MainRouter} />
        </ParallaxProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
