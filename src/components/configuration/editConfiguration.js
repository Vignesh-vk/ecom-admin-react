import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AC_LIST_CONFIGURATION, AC_ADD_CONFIGURATION, AC_VIEW_CONFIGURATION, AC_HANDLE_INPUT_CHANGE } from '../actions/config';
import { Redirect } from 'react-router-dom';
// import swal from 'sweetalert';
class editConfiguration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            slug: '',
            slugError: false,
            slugCountError: false,

            name: '',
            nameError: false,
            nameCountError: false,

            description: '',
            descriptionError: false,
            descriptionCountError: false,

            status: '',
            statusError: false,
            editStatus: false,
            addText: [{}]

        }
        this.validation = this.validation.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.back = this.back.bind(this);
    }

    validation() {
        const name = this.props.configReducer.configInfo.name;
        const slug = this.props.configReducer.configInfo.slug;
        const status = this.props.configReducer.configInfo.status;
        const description = this.props.configReducer.configInfo.description;
        const id = this.props.configReducer.configInfo.id;
        let formData = {
            name: name,
            slug: slug,
            description: description,
            status: status,
            id: id
        }
        console.log("-=-formData=-=-", formData);
        this.props.AC_ADD_CONFIGURATION(formData);
    }

    handleInputChange(event) {
        let name = event.target.id;
        let value = event.target.value;
        this.props.AC_HANDLE_INPUT_CHANGE(name, value);
    }
    componentWillMount() {
        let configId = this.props.match.params.id;
        let formData = { id: configId }
        this.props.AC_VIEW_CONFIGURATION(formData);
    }
    back() {
        this.setState({ editStatus: true })
    }
    add() {
        this.setState((
            {
                addText: [...this.state.addText, {}]
            }
        ))
    }
    render() {
        const name = this.props.configReducer.configInfo.name;
        const slug = this.props.configReducer.configInfo.slug;
        const description = this.props.configReducer.configInfo.description;
        const status = this.props.configReducer.configInfo.status;
        if (this.state.editStatus) {
            return <Redirect to='/listConfiguration' />
        }
        return (
            <div className="container-fluid">
                <h3 class="page-title"><span class="page-title-icon bg-gradient-primary text-white me-2" style={{ marginLeft: '37px', marginTop: '47px' }}><i class="mdi mdi-comment-plus-outline"></i></span>Edit Configuration</h3>
                <div className="row">
                    <div>
                        <div className="card">
                            <div className="card-body">
                                <form className="forms-sample" id="editFaq">
                                    <div className="form-group">
                                        <label for="exampleInputUsername1">Name</label>
                                        <input type="text" autoComplete='off' placeholder="Configuration" id="name" value={name} onChange={this.handleInputChange} style={{ width: '400px' }} className="form-control" />
                                        {this.state.nameError ? <label className="mt-2" style={{ color: 'red' }}>Configuration is required</label> : ""}
                                        {this.state.nameCountError ? <label className="mt-2" style={{ color: 'red' }}>Configuration should be atleast 3 characters</label> : ""}
                                    </div>

                                    <div className="form-group" style={{ position: 'relative', bottom: '93px', left: '500px' }}>
                                        <label for="exampleInputUsername1">Slug</label>
                                        <input type="text" autoComplete='off' placeholder="Slug" id="slug" value={slug} onChange={this.handleInputChange} style={{ width: '400px' }} className="form-control" />
                                        {this.state.slugError ? <label className="mt-2" style={{ color: 'red' }}>Slug is required</label> : ""}
                                        {this.state.slugCountError ? <label className="mt-2" style={{ color: 'red' }}>Slug should be atleast 2 characters</label> : ""}
                                    </div>

                                    <div className="form-group" style={{ position: 'relative', bottom: '80px', width: '400px' }}>
                                        <label for="exampleInputUsername2">Description</label>
                                        <input type="text" autoComplete='off' placeholder="Description" id="description" value={description} onChange={this.handleInputChange} style={{ borderColor: this.state.color1 }} className="form-control" />
                                        {this.state.descriptionError ? <label className="mt-2" style={{ color: 'red' }}>Description is required</label> : ""}
                                        {this.state.descriptionCountError ? <label className="mt-2" style={{ color: 'red' }}>Description should be atleast 2 characters</label> : ""}
                                    </div>

                                    <div className="form-group" style={{ position: 'relative', bottom: '170px', width: '400px', left: '500px' }}>
                                        <label for="exampleInputUsername1">Status</label>
                                        <select className="form-control" id="status" style={{ outline: this.state.color2 }} onChange={this.handleInputChange} >
                                            <option value="">Select Status</option>
                                            <option value="true" selected={status == true}>Active</option>
                                            <option value="false" selected={status == false}>Inactive</option>
                                        </select>
                                        {this.state.statusError ? <label className="mt-2" style={{ color: 'red' }}>Status is required</label> : ""}
                                    </div>

                                    <div style={{ position: 'relative', bottom: '140px' }}>
                                        <button type="button" className="btn btn-gradient-primary me-2" style={{
                                            backgroundColor: 'blue',
                                            color: 'white',
                                            borderRadius: '2rem'
                                        }} onClick={this.validation}>Submit</button>
                                        <button type="button" className="btn btn-gradient-primary me-2" style={{
                                            backgroundColor: 'blue',
                                            color: 'white',
                                            borderRadius: '2rem'
                                        }} onClick={this.back}>Cancel</button>
                                    </div>

                                    <div style={{position:'relative',bottom:'100px'}}>
                                        <button type="button" className="btn btn-gradient-primary me-2" style={{
                                            backgroundColor: 'blue',
                                            color: 'white',
                                            borderRadius: '2rem'
                                        }} onClick={() => this.add()}>Add field</button>
                                        <div>
                                            {this.state.addText.map(() => (
                                                <div>
                                                    <input type="text" placeholder='Name' />
                                                    <input type="text" placeholder='Slug' />
                                                    <input type="text" placeholder='Description' />
                                                    <select className="form-control" style={{ borderColor: 'black', position: 'relative', left: '670px', bottom: '25px', width: '150px' }}>
                                                        <option value="">Select Status</option>
                                                        <option value="true" selected={status == true}>Active</option>
                                                        <option value="false" selected={status == false}>Inactive</option>
                                                    </select>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
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
        configReducer: state.CONFIGURATION_Reducer
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ AC_LIST_CONFIGURATION, AC_ADD_CONFIGURATION, AC_VIEW_CONFIGURATION, AC_HANDLE_INPUT_CHANGE }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(editConfiguration);