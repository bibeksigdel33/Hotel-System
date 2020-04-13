import React, {Component} from "react";
import {RoomContext} from "../context";
import Room from "./Room";
import Title from "./Title";
import Loading from "./Loading";

export default class RoomList extends React.Component {
    static contextType = RoomContext;
    
    render() {
        let {loading, rooms} = this.context;
        if(rooms) {
            rooms = rooms.map(room => {
                return <Room key={room.id} room={room}/>
            });
        }
        return (
            <section className="featured-rooms">
            <Title title="Our Rooms" />
            <div className="featured-rooms-center">
              {loading?<Loading/>: rooms}
            </div>
          </section>
        );
    }
}