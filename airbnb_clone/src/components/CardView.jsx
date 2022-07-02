import React, {Component} from "react";

class CardView extends Component {

    render() {
        return (
            <div className="cardView shadow-lg">
                <div className="details_outer">
                    <img className="card_img" src={require(`./media/${this.props.img}`)} alt={this.props.img}/>
                    <div>
                        <hr/>
                        <h6>
                            <span> ⭐ </span>
                            <span> {this.props.rating} ({this.props.review}) • </span>
                            <span> {this.props.location} </span>
                        </h6>
                        <span>{!this.props.openSpot && <p className="text-info" >SOLD-OUT</p> }</span>
                    </div>
                    <div className="details">
                        <hr/>
                        <p> {this.props.title}</p>
                        <span><br/> <h6>Price:{this.props.price}$/person </h6> </span>
                    </div>
                </div>
                <div className="card-footer"></div>
            </div>
        )
    }

}

export default CardView