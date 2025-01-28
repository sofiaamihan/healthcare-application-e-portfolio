import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ConfigProvider, theme } from 'antd';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConfigProvider
    //   theme={
    //     {
    //       "token": {
    //         "colorPrimary": "#405d72",
    //         "colorInfo": "#405d72",
    //         "colorTextBase": "#161a30",
    //         "colorBgBase": "#fff8f3",
    //       },
    //       "components": {
    //         "Button": {
    //           "borderRadius": 16
    //         },
    //         "Layout": {
    //           "algorithm": true,
    //           "headerBg": "rgb(255,248,243)",
    //           "headerColor": "rgb(255,248,243)",
    //           "headerHeight": 88
    //         },
    //         Segmented: {
    //           trackBg: "#336699",
    //           itemSelectedBg: "rgba(166,209,245,1)",
    //           itemColor: "#ffffff",
    //           itemHoverColor: "#ffffff",
    //           itemSelectedColor: "#000000"
    //         },
    //       },
    //       "algorithm": theme.darkAlgorithm
    //     }
    //   }
    >
    <App />
    </ConfigProvider>
  </StrictMode>,
);
