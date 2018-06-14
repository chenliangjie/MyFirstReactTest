import React, { Component } from "react";
import { DatePicker } from "antd";
import "antd/dist/antd.css";
import locale from 'antd/lib/date-picker/locale/zh_CN'

export default class Contact extends React.Component {
    render() {
        return(
            <div>
                <h2>CONTACT</h2>
                <p><a href="https://github.com">GitHub</a></p>
                <br />
                <h3 className="titleP">Select Date :</h3>
                <DatePicker locale={locale} className="titleDatePicker" />
            </div>
        );
    }
}