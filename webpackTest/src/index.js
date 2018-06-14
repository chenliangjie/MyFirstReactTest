import React from "react";
import ReactDOM from "react-dom";
import Main from "./SubPage/Main";
import App from "./MyPage/App";
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { LocaleProvider } from 'antd';

ReactDOM.render(
    <LocaleProvider locale={zhCN}>
        <App />
    </LocaleProvider>,
    document.getElementById("app")
);