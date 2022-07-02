import React from "react";
import {Component} from "react";
import logo from "./media/logo_airbnb.svg"
import photo_grid from "./media/photo-groid.png"

class Navbar extends Component {

    render() {
        return (
            <React.Fragment>
                <header className="modal-header">
                    <img className="app_header" alt="logo" src={logo}/>
                </header>

                <section className="photo_section">
                    <img className="photo_grid" alt="grid" src={photo_grid}/>
                    <h1 className="card-title">Online Experiences</h1>
                    <p className="card-subtitle">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                        tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                        quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
                        sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                        recusandae alias error harum maxime adipisci amet laborum. Perspiciatis
                        minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit
                        quibusdam sed amet tempora.....
                    </p>
                </section>

            </React.Fragment>
        )
    }


}

export default Navbar;

