import React,{Component} from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField'
import {Link} from 'react-router-dom'
import _ from 'lodash'

const FIELDS = [
    {label:'Survey Title', name:'title'},
    {label:'Survey Line', name:'subject'},
    {label:'Email Body', name:'body'},
    {label:'Recipients List', name:'emails'}
]

class SurveyForm extends Component{
    renderFields(){
        return _.map(FIELDS,({label,name})=>{
           return (
            <Field 
                key={name}
                component={SurveyField}
                type="text"
                label={label}
                name={name}
            />
           ) 
        })
        
    }
    render(){
        return(
            <div>
                <form onSubmit={this.props.handleSubmit((values)=>console.log(values))}>
                    {this.renderFields()}
                <Link to="/survey" className="red btn-flat white text">Cancel</Link>
                <button type="submit" className="red btn-flat white text">Next
                    <i className="material-icons right">done</i>
                </button>
                </form>
            </div>
        )
    }
}
export default reduxForm({
    form:'surveyForm'
}) (SurveyForm);