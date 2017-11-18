import React,{Component} from 'react';
import {reduxForm,Field} from 'redux-form'
import SurveyField from './SurveyField'

class SurveyForm extends Component{
    renderFileds(){
        return(
            <div>
                <Field label="Survey Tilte" type="text" name="title" component={SurveyField} />
                <Field label="Subject Line" type="text" name="subject" component={SurveyField} />
                <Field label="Email Body" type="text" name="body" component={SurveyField} />
                <Field label="Recipients List" type="text" name="emails" component={SurveyField} />
            </div>
        )
    }
    render(){
        return(
            <div>
                <form onSubmit={this.props.handleSubmit((values)=>console.log(values))}>
                    {this.renderFileds()}
                <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
export default reduxForm({
    form:'surveyForm'
}) (SurveyForm);