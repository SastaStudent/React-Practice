import React from "react";
import { useParams } from "react-router-dom";

export default function User() {
    const { userid } = useParams();
    const data = userid.toString().toUpperCase();
    
    const op1 = " Bahut accha ladka hai, Apko is se kuchh sikhana chahiye";
    const op2 = " Ye to gandu hai, saala kutta, kamina, haramkhor";
    
    let message; // Variable to hold the final message

    if (data.includes('MONU')) {
        message = data + op1;
    } else {
        message = data + op2;
    }
    
    return (
        <div className="text-3xl bg-slate-600 h-screen w-full flex">
            <div className=" bg-orange-300 w-[90%] h-[50%] m-auto p-10 flex justify-center items-center rounded-md">
            {message}
            </div>
        </div>
    );
}
