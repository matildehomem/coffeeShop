import React from 'react'
import { Link } from 'gatsby'
import Title from '../globals/Title';


export default function Info() {
    return (
        <section className="py-5 my-4">
            <div className="container">
            <Title title="our story" />
            <hr/>
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="text-muted mb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nemo repudiandae obcaecati accusamus, voluptatum laudantium asperiores maiores officia necessitatibus ad minus tempora fugiat odio non rem blanditiis quaerat, possimus esse, voluptate ea quisquam et at aspernatur amet. Itaque voluptate omnis veritatis, est labore hic incidunt quaerat ab, necessitatibus tempore voluptatibus. Suscipit ullam nisi perferendis quidem corrupti. Eaque minima numquam quo aliquid aspernatur velit repudiandae fugiat debitis molestias accusamus. Distinctio, velit!
                        </p>
                        <Link to="/about">
                            <button className="btn btn-yellow">about page</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
