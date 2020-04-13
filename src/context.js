import React, {Component} from "react";
import items from "./data.js";

const RoomContext = React.createContext();

export default class RoomProvider extends React.Component {
    state = {
        rooms: [],
        sorted: [],
        featured: [],
        loading: true,
    };

    //getData() {}

    componentDidMount() {
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter(room => room.featured === true);
        this.setState ({
            rooms, 
            sortedRooms: rooms,
            featuredRooms, 
            loading: false,
        });
    }

    formatData(items) {
        let tempItems = items.map(item => {
            let id =item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            let room = {...item.fields, images, id};
            return room;
        });
        return tempItems;
    }

    //Get Room for single room
    getRoom = (slug) => {
        let tempRooms = [...this.state.rooms];
        let room = tempRooms.find(room=> room.slug === slug);
        return room;
    }

    render() {
        return(
            <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom }}>
                {this.props.children}
            </RoomContext.Provider>
        );
    }
}

const RoomConsumer = RoomContext.Consumer;

export {RoomProvider, RoomConsumer, RoomContext};