import React, {Component} from "react";
import Title from "./Title";
import {RoomContext} from "../context";

export default class FeaturedRoom extends React.Component {
    static contextType = RoomContext;
    render() {
        const {name, greeting} = this.context;
        
        return(
            <>
                <Title title="Featured Rooms"></Title>
                <h6>{name}</h6>
                <p>{greeting}</p>
                
            </>
        );
    }
}