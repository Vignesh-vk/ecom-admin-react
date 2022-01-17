import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AC_LIST_FAQ, AC_ADD_FAQ, AC_VIEW_FAQ, AC_HANDLE_INPUT_CHANGE } from '../actions/faq';
// import swal from 'sweetalert';
class viewFaq extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: '',
            answerError: false,
            answerCountError: false,
            question: '',
            questionError: false,
            questionCountError: false,
            status: '',
            statusError: false,
        }
        this.validation = this.validation.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

    }

    validation() {
        const question = this.props.faqsReducer.faqInfo.question;
        const answer = this.props.faqsReducer.faqInfo.answer;
        const status = this.props.faqsReducer.faqInfo.status;
        const id = this.props.faqsReducer.faqInfo.id;
        let formData = {
            question : question,
            answer : answer,
            status : status,
            id : id
        }
        console.log("-=-formData=-=-",formData);
        this.props.AC_ADD_FAQ(formData);
    }

    handleInputChange(event) {
        let name = event.target.id;
        let value = event.target.value;
        this.props.AC_HANDLE_INPUT_CHANGE(name,value);
    }
    componentWillMount() {
        let faqId = this.props.match.params.id;
        // console.log("-=-=faqId-=",faqId);
        let formData = {id:faqId}
        this.props.AC_VIEW_FAQ(formData);
    }


    render() {
        const question = this.props.faqsReducer.faqInfo.question;
        const answer = this.props.faqsReducer.faqInfo.answer;
        const status = this.props.faqsReducer.faqInfo.status;
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Edit Faq</h4>
                                <form className="forms-sample" id="editFaq">
                                    <div className="form-group">
                                        <label for="exampleInputUsername1">QUESTION</label>
                                        <input type="text" autoComplete='off' placeholder="Question" id="question" value={question} onChange={this.handleInputChange} style={{ borderColor: this.state.color0}} className="form-control" disabled/>
                                        {this.state.questionError ? <label className="mt-2" style={{ color: 'red' }}>Question is required</label> : ""}
                                        {this.state.questionCountError ? <label className="mt-2" style={{ color: 'red' }}>Question should be atleast 5 characters</label> : ""}

                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputUsername1">ANSWER</label>
                                        <input type="text" autoComplete='off' placeholder="Answer" id="answer" value={answer} onChange={this.handleInputChange} style={{ borderColor: this.state.color1 }} className="form-control" disabled/>
                                        {this.state.answerError ? <label className="mt-2" style={{ color: 'red' }}>Answer is required</label> : ""}
                                        {this.state.answerCountError ? <label className="mt-2" style={{ color: 'red' }}>Answer should be atleast 5 characters</label> : ""}

                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputUsername1">STATUS</label>
                                        <select className="form-control" id="status" style={{ outline: this.state.color2 }} onChange={this.handleInputChange} disabled >
                                            <option value="">Select Status</option>
                                            <option value="true" selected={status == true}>Active</option>
                                            <option value="false" selected={status == false}>Inactive</option>
                                        </select>
                                        {this.state.statusError ? <label className="mt-2" style={{ color: 'red' }}>Status is required</label> : ""}
                                    </div>
                                    <button type="button" className="btn btn-gradient-primary me-2" style={{
                                        backgroundColor: 'blue',
                                        color: 'white'
                                    }} onClick={this.validation}>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    console.log('map state =====================', state);
    return {
        faqsReducer: state.FAQ_Reducer
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ AC_LIST_FAQ, AC_ADD_FAQ, AC_VIEW_FAQ,AC_HANDLE_INPUT_CHANGE }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(viewFaq);