import React from 'react'
import Title from '../globals/Title'

export default function Contact() {
    return (
        <section className="contact py-5">
            <Title title="Contact Us" />
            <div className="row fix">
                <div className="col-10 col-sm-8 col-md-6 mx-auto ">
                    <form action="https://formspree.io/matilde.a.s.homem@gmail.com" method="POST">
                        {/* name */}
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" name="name" id="name" placeholder="name"/>
                        </div>
                        {/* email */}
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" className="form-control" name="email" id="email" placeholder="email"/>
                        </div>
                        {/* description */}
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea name="description" id="description" className="form-control" rows="10" placeholder="Your description"></textarea>
                        </div>
                        {/* submit */}
                        <button type="submit" className="btn btn-yellow btn-block mt-5">Send</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
