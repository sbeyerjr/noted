import React from 'react';
import Sidebar from './Sidebar';
import './PracticeForm.css';

export default function PracticeForm(props) {
    return (
        <div>
        <section>
          <h3>What Did You Practice?</h3>
          <form class="practice-form">
            <div>
              <label for="date">Date</label>
              <input
                placeholder="Date"
                type="text"
                name="date"
                id="date"
              />
            </div>
            <div>
              <label for="time-practiced">Time Practiced</label>
              <input
                type="text"
                name="time-practiced"
                id="time-practiced"
                placeholder="Time Practiced"
              />
            </div>
            <div>
              <label for="scales">Scales Practiced</label>
              <input type="text" name="scales" id="scales" />
            </div>
            <div>
            <textarea name="other-music" form="practice-form">What Else Did You Practice?</textarea>
            </div>
            <button type="submit">Submit Practice</button>
          </form>
        </section>
      </div>
    );
}