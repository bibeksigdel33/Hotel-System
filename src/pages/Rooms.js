import React from "react";
import Hero from "../components/Hero";
import {Link} from "react-router-dom";
import Banner from "../components/Banner";
import RoomList from "../components/RoomList";
//As seen in the tic tac toe, comopoents can be returned as const function.
//The arrow function is used here. Which is javascript's default function declaration method.
//returnType function FunctionName() {...} is equivalent to returnType FunctionName = ({props}) => {.....}
const Rooms = () => {
    return (
    <>
        <Hero hero="roomsHero">
            <Banner title="Our Rooms">
                <Link to="/" className="btn-primary">Return Home</Link>
            </Banner>
        </Hero>
         <RoomList />
    </>
    );
}

export default Rooms;