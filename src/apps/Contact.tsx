import type { Component } from 'solid-js';
import { createSignal, createEffect, onCleanup } from 'solid-js';
import { render } from 'solid-js/web';

import styles from './App.module.css';

const Contact: Component = () => {
    return (
        <div id="contactM">
            <div id="DivFormM">
                <form id="contactFormM">
                    <label for="nameM">Name</label>
                    <input type="text" id="nameM" name="nameM" placeholder="Your name.."></input>
                    <label for="emailM">Email</label>
                    <input type="text" id="emailM" name="emailM" placeholder="Your email.."></input>
                    <label for="subjectM">Subject</label>
                    <textarea id="subjectM" name="subjectM" placeholder="Write something.." style="height:200px"></textarea>
                    <input type="submit" value="Submit"></input>
                </form>        
            </div>
        </div>
        
    );
};

export default Contact;