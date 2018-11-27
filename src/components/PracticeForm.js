import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { newPractice } from '../actions/Practice';
import Input from './Input';
import './RegistrationForm.css';

export class PracticeForm extends React.Component {
  onSubmit(values) {
    const { date, timePracticed, scales, otherMusic } = values;
    const user = { date, timePracticed, scales, otherMusic };
    return this.props.dispatch(newPractice(user));
  }

  render() {
    return (
      <form
        className="practice-form"
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
      >
        <label htmlFor="date">Today's Date</label>
        <Field component={Input} type="text" name="date" />
        <label htmlFor="timePracticed">How Many Minutes Did You Practice?</label>
        <Field component={Input} type="text" name="timePracticed" />
        <label htmlFor="scales">Which Scales Did You Practice?</label>
        <Field component={Input} type="text" name="scales" />
        <label htmlFor="otherMusic">
          What Other Music Did You Practice? Be Specific.
        </label>
        <Field component={Input} type="text" name="otherMusic" />
        <button className="button-reg"
          type="submit"
          disabled={this.props.pristine || this.props.submitting}
        >
          Log Practice
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'practice',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('practice', Object.keys(errors)[0]))
})(PracticeForm);
