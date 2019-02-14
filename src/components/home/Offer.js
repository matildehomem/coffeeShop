import React from 'react'
import Title from '../globals/Title';
import { FaCoffee } from 'react-icons/fa'
import { FaBeer } from 'react-icons/fa'
import { FaDatabase } from 'react-icons/fa'

export default function Offer() {
    return (
        <div className="container py-5">
            <Title title="What we offer" />
            <hr />
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, iusto?</p>
            <div className="row my-5">
                <div className="col-10 col-lg-4 mx-auto text-center ">
                    <FaCoffee className="icon"/>
                    <h5 className="text-uppercase">Coffee</h5>
                    <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, quidem?</p>

                </div>
                <div className="col-10 col-lg-4 mx-auto text-center ">
                    <FaBeer className="icon" />
                    <h5 className="text-uppercase">Tea</h5>
                    <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, quidem?</p>

                </div>

                <div className="col-10 col-lg-4 mx-auto text-center ">
                    <FaDatabase className="icon"/>
                    <h5 className="text-uppercase">Cookies</h5>
                    <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, quidem?</p>
                </div>

            </div>
        </div>
    )
}
