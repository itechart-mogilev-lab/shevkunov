import React from "react";
import { Formik } from "formik";
import BookingSchema from "./BookingSchema";
import BookingForm from "./BookingForm";
import {selectService } from "../../helpers/enum";

export default function BookingFormik(props){
    const availableServices = props.company ? props.company.services : selectService;
    return (
        <Formik
            initialValues={{
                address: "",
                service: "",
                roomsCount: {
                    standart: 0,
                    big: 0,
                    toilet: 0
                },
                reccurent: false,
                date: "",
                startTime: "",
                days: [],
                regularity: "",
                duration: 0,
                availableServices
            }}
            validationSchema={BookingSchema}
            onSubmit={}
        />
    )
}
