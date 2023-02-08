import Row from "./layout/Row";
import Column from "./layout/Column";
let weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";
import { useForm } from 'react-hook-form';


export default function InputForm() {
    const [schedules, setSchedules] = useState([])
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    useEffect(() => {
        getSchedules();
        forceUpdate();
    }, [])
    // validation
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    // let isEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/m;
    function getSchedules() {
        axios.get("http://localhost:5000/").then(response => {
            setSchedules(response.data)
        }).catch(e => console.log(`ERROR: ${e.message}`));
    }
    return (
        <form method="POST" onSubmit={handleSubmit((data) => {
            axios.post('http://localhost:5000/', data).then(res => {
                getSchedules();
            })
        })}>
            <Row attr="inputs">
                <Column>
                    <label htmlFor="name">Full Name</label>
                    <input {...register('name', { required: true })} type="text" name="name" id="name" placeholder="Jhon Doe" />
                    <p>{errors.firstName?.message}</p>
                </Column>
                <Column attr="mail">
                    <label htmlFor="email">Email</label>
                    <input type="email" {...register("email", { required: true })} id="email" placeholder="jhondoe@gmail.com" />
                </Column>
                <Column>
                    <label htmlFor="phone">Phone</label>
                    <input type="text" {...register("phone", { required: true })} id="phone" placeholder="1-541-754-3010" />
                </Column>
            </Row>
            <p className="question">What time works?</p>
            <Row attr="week-days">
                {weekDays.map(d => (
                    <div key={d} className="day">{d}</div>
                ))}
            </Row>
            <Column attr="date-time">
                <input type="date" {...register("date", { required: true })} />
                <Row attr="time-picker">
                    <Column attr="time">
                        <label>Time</label>
                        <div className="date">Mon, Sep 19</div>
                    </Column>
                    <input type="time" {...register("time", { required: true })} id="time" />
                </Row>
                <Row attr="output-box">
                    <div className="registered-date">
                        <div className="list">
                            {schedules.map((s, key) => (
                                <div kay={key}>
                                    <p className="info-p m0" kay={key}>
                                        The next date has been set:
                                    </p>
                                    <p className="question m0" kay={key}>
                                        At {s.time} on {new Date(s.date).toDateString()}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="check-icon hide-on-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#3AAE2A" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>
                    <div className="check-icon hide-on-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#3AAE2A" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div className="date-info">
                        <p className="info-p m0">
                            Please Click Submit if you are sure Do you want to change the date?
                        </p>
                        <p className="question m0">Please Click Submit if you are sure Do you want to change the date?</p>
                    </div>
                </Row>
            </Column>
            <Row attr="btn">
                <button type="submit" className="submit">Submit</button>
            </Row>
        </form>
    );
}