import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AC_LIST_CONFIGURATION, AC_ADD_CONFIGURATION, AC_VIEW_CONFIGURATION, AC_HANDLE_INPUT_CHANGE } from '../actions/config';
import { Redirect } from 'react-router-dom';
import swal from 'sweetalert';
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

            show: false,

            nameopt:"",
                slugopt:"",
                sortopt:"",
                descriptionopt:"",
                statusopt:"",
                nameoptError:false,
                slugoptError:false,
                sortoptError:false,
                descriptionoptError:false,
                statusoptError:false,

        }
        this.validation = this.validation.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.back = this.back.bind(this);
        this.show = this.show.bind(this);
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

    valid(event){
        var id=event.target.id;
        var value=event.target.value;
        console.log("=-=statusopt-=-",event);
        console.log("=-=statusopt  value-=-",value);
    
    
      
        if(id=='nameopt')
        {
            this.setState({nameopt:value,nameoptError:false})
        }
        if(id=='slugopt')
        {
            this.setState({slugopt:value,slugoptError:false})
        }
        if(id=='sortopt')
        {
            this.setState({sortopt:value,sortoptError:false})
        }
        if(id=='descriptionopt')
        {
          this.setState({descriptionopt:value,descriptionoptError:false})
        }
        if(id=='statusopt'){
            this.setState({statusopt:value,statusoptError:false})
            console.log("=-=statusopt-=-",value);
        }
      }

      add()
    {
        const nameopt=this.nameopt2(this.state.nameopt)
        const slugopt=this.slugopt2(this.state.slugopt)
        const sortopt=this.sortopt2(this.state.sortopt)
        const descriptionopt=this.descriptionopt2(this.state.descriptionopt)
        const statusopt=this.statusopt2(this.state.statusopt)
        const conid=this.conid2(this.props.configurationsReducer.configurationInfo.id);
  
          if(nameopt && slugopt && sortopt && descriptionopt && statusopt && conid)
          {
              var formData={
                  conid:this.props.configurationsReducer.configurationInfo.id,
                  name:this.state.nameopt,
                  slug:this.state.slugopt,
                  sort:this.state.sortopt,
                  description:this.state.descriptionopt,
                  status:this.state.statusopt,
              }
              this.props.AC_LIST_OPTION();
              this.props.AC_ADD_OPTION(formData);
              this.setState({nameopt:"",slugopt:"",sortopt:"",descriptionopt:"",statusopt:""});
              this.props.AC_LIST_OPTION();
              swal("Done", "successfully Added", "success");
              this.setState({showtable:true});  
  
          }   
    }

    show() {
        this.setState({ show: true })
    }
    render() {
        const name = this.props.configReducer.configInfo.name;
        const slug = this.props.configReducer.configInfo.slug;
        const description = this.props.configReducer.configInfo.description;
        const status = this.props.configReducer.configInfo.status;
        if (this.state.editStatus) {
            return <Redirect to='/listConfiguration' />
        }

        // var result=[];
        // var id=1;
        // if(option){
		// 	for(var i=0;i<option.length;i++){
        //   const optid=option[i].conid;
        //   if(conid==optid)
        //         {
        //           result.push(
        //             <tr key={i}>
        //                 <td>{id++}</td>
        //                 <td>{option[i].name}</td>
        //                 <td>{option[i].slug}</td>
        //                 <td>{option[i].sort}</td>
        //                 <td>{option[i].description}</td>
        //                 <td >{option[i].status}</td>
        //                 <td>
        //                     {/* <a class="view"   title="view" data-toggle="tooltip"><i  id={option[i]._id}  onClick={this.viewoption} class="fas fa-eye" style={{marginRight : '15px',cursor:'pointer',color:"#704f89"}}></i></a>
        //                     <a class="edit"   title="edit" data-toggle="tooltip"><i  id={option[i]._id} onClick={this.editoption} class="fas fa-edit" style={{marginRight : '15px',cursor:'pointer',color:"#704f89"}} ></i></a> */}
        //                     <a class="delete" title="Delete" data-toggle="tooltip"><i id={option[i]._id}  onClick={this.delete} class="far fa-trash-alt" style={{cursor:'pointer',color:"#704f89"}}></i></a>
        //                 </td>
        //             </tr>
        //           )
        //         }
        //     }
        // }
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


                                    <div class="container-fluid" >
                                        <button type="button" onClick={this.show} style={{ backgroundColor: 'blue', color: "white" }} className=" btn btn-primary">Add option</button>
                                    </div>


                                    <div>
                                        {this.state.show ?

                                            <div class="container-fluid" >
                                                <h3 class="page-title"><span class="page-title-icon bg-gradient-primary text-white me-2" style={{ marginLeft: '37px', marginTop: '47px' }}><i class="mdi mdi-comment-plus-outline"></i></span>Add Options</h3>
                                                <form id="quickForm" autoComplete="off">
                                                    <div class="card-body">
                                                        <table>
                                                            <tr>
                                                                <td><label>Name</label></td>
                                                                <td><label>Slug</label></td>
                                                                <td><label>Sort</label></td>
                                                                <td><label>Description</label></td>
                                                                <td><label>Status </label></td>
                                                                <td>&nbsp;</td>
                                                            </tr>
                                                            <tr>


                                                                <td><div class="form-group"><input className="form-control" type="text" name="nameopt" id="nameopt" placeholder="Enter Your Name" onChange={this.valid} /></div></td>
                                                                <td><div class="form-group"><input className="form-control" type="text" name="slugopt" id="slugopt" placeholder="Enter Your Slug" onChange={this.valid} /></div></td>
                                                                <td><div class="form-group"><input className="form-control" type="text" name="sortopt" id="sortopt" placeholder="Enter Your Sort" onChange={this.valid} /></div></td>
                                                                <td><div class="form-group"><input className="form-control" type="text" name="descriptionopt" id="descriptionopt" placeholder="Enter Your Description" onClick={this.valid} /></div></td>
                                                                <td><div class="form-group" style={{ width: '86px' }}><input style={{ marginLeft: '18px', cursor: 'pointer' }} unchecked class="apple-switch" id="statusopt" type="checkbox" onChange={this.valid}></input> </div></td>
                                                                <td><div class="form-group"><input type="button" className="btn btn-primary" style={{ backgroundColor: "blue", color: "white" }} value="Add" onClick={this.add} /></div></td>
                                                            </tr>
                                                            <tr>
                                                                <td><div>{this.state.nameoptError ? <label style={{ color: 'red' }}>Name is required*</label> : ""}</div></td>
                                                                <td><div >{this.state.slugoptError ? <label style={{ color: 'red' }}>Slug is required*</label> : ""}</div></td>
                                                                <td><div >{this.state.sortoptError ? <label style={{ color: 'red' }}>Sort is required*</label> : ""}</div></td>
                                                                <td><div >{this.state.descriptionoptError ? <label style={{ color: 'red' }}>Description is required*</label> : ""}</div></td>
                                                                <td><div >{this.state.statusoptError ? <label style={{ color: 'red' }}>Status is required**</label> : ""}</div></td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </form>
                                            </div>
                                            : ""}
                                    </div>
                                    <div>
                                        {this.state.showtable ?

                                            <div class="container-fluid" >
                                                <div class="col-md-12">
                                                    <div class="card card-primary" style={{ border: 'BLACK', borderRadius: '8px' }}>
                                                        <div class="card-header" style={{ backgroundColor: '' }}>
                                                            <h2 class="card-title">options</h2>
                                                        </div>
                                                        <div class="card-body" >
                                                            <div class="table-wrapper" style={{ border: 'solid 1px gray' }}>
                                                                <div class="table-title">
                                                                    <table class="table table-striped table-hover">
                                                                        <thead >
                                                                            <tr>
                                                                                <th >S.No</th>
                                                                                <th>Name</th>
                                                                                <th>Slug</th>
                                                                                <th>Sort</th>
                                                                                <th>Description</th>
                                                                                <th>Status</th>
                                                                                <th>Actions</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            {/* {result} */}
                                                                        </tbody>
                                                                    </table>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            : ""}
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