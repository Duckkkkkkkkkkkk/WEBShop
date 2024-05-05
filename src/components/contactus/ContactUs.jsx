import React, { useState } from 'react';

import './contactus.css';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
    <div className="contactus">
        <header>
            <div className="contacts__header">
                <h2 className='title-3'>Контакты</h2>
            </div>
        </header>
        <div id="form">
            <div className="fish" id="fish"></div>
            <div className="fish" id="fish2"></div>
            <form id="waterform" onSubmit={handleSubmit}>
                <div className="formgroup" id="name-form">
                    <label htmlFor="name">Ваше имя*</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="formgroup" id="email-form">
                    <label htmlFor="email">Ваш эл. адрес*</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="formgroup" id="message-form">
                    <label htmlFor="message">Ваше сообщение</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    />
                </div>
                <div className="buttons">
                    <button className="blob-btn">
                        Отправить
                        <span className="blob-btn__inner">
                            <span className="blob-btn__blobs">
                                <span className="blob-btn__blob"></span>
                                <span className="blob-btn__blob"></span>
                                <span className="blob-btn__blob"></span>
                                <span className="blob-btn__blob"></span>
                            </span>
                        </span>
                    </button>
                </div>            
            </form>
            <div className="vodorosli"></div>
        </div>
    </div>
    );
};
 
export default ContactUs;