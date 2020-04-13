import React, {Component} from "react";
import {RoomContext} from "../context";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";
import Title from "../components/Title";

export default class SingleRoom extends React.Component {
    static contextType = RoomContext;
    constructor(props) {
        super(props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg,

        };
    }

    //componentDidMount() {}

    render () {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
        if(!room) {
            return(
                <Hero>
                    <div className= "error">
                        <h3>No such room could be found!!</h3>
                        <Link to = "/rooms" className= "btn-primary" > Back to Rooms </Link>
                    </div>
                </Hero>
            );
        }
        const {name, description, capacity, size, price, extras, breakfast, pets, images} = room;
    return (
        <>
        <Hero hero="roomsHero">
            <Banner title= {`${name} room`}>
                <Link to ="/rooms" className="btn-primary">Back to Rooms</Link>
            </Banner>
        </Hero>
        <div>
            <h1>This is from Single Room</h1>
        </div>
        </>
    );
    }
}