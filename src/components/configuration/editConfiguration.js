import React, { Component } from "react";
import { EditorState,ContentState } from 'draft-js';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Swal from "sweetalert";
import draftToHtml from 'draftjs-to-html';
import Parser from "html-react-parser";
import htmlToDraft from 'html-to-draftjs';
import { Redirect } from 'react-router-dom';
import { AC_ADD_CONFIGURATION, AC_LIST_CONFIGURATION, AC_EDIT_CONFIGURATION, AC_VIEW_CONFIGURATION, AC_HANDLE_INPUT_CHANGE } from '../actions/config';
// import { AC_ADD_OPTION,AC_LIST_OPTION,AC_DELETE_OPTION,AC_VIEW_OPTION,AC_HANDLE_INPUT_CHANGE_OPT,AC_EDIT_OPTION } from '../action/option';

class EditConfiguration extends Component {
  constructor(props) {
    super(props);
    const html = '<p></p>';
    const contentBlock = htmlToDraft(html);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
      const editorState = EditorState.createWithContent(contentState);
      this.state = {
        name: "",
        slug: "",
        description: "",
        status:'',
        nameError: false,
        slugError: false,
        descriptionError: false,
        status:false,
        viewStatus: false,
        editorState,
        show:false,
        shows:false,
        showss:false,
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
        showtable:true,
        isChecked: false,
        ischeck:true,

      }
    }
    this.validletter = this.validletter.bind(this);
    this.change = this.change.bind(this);
    this.edit = this.edit.bind(this);
    this.editorContent = this.editorContent.bind(this);
    this.cancelletter = this.cancelletter.bind(this);
    this.show = this.show.bind(this);
    this.valid = this.valid.bind(this);
    this.add = this.add.bind(this);
    this.delete = this.delete.bind(this);
    this.editoption = this.editoption.bind(this);
    this.valids = this.valids.bind(this);
    this.adds= this.adds.bind(this);
    this.viewoption= this.viewoption.bind(this);
    this.cancels= this.cancels.bind(this);
    this.cancel= this.cancel.bind(this);
    this.validsts= this.validsts.bind(this);
    
  }
  componentDidMount(){
    this.props.AC_LIST_OPTION();
}

cancel(){
  this.setState({show:false,shows:false,showss:false});
}
cancels(){
  this.setState({show:true,shows:false,showss:false});
}

viewoption(event){
  var idopt= event.target.id;
  var formdata={
    id:idopt
  }
  this.props.AC_LIST_OPTION();
  this.props.AC_VIEW_OPTION(formdata);
  this.props.AC_LIST_OPTION();
  this.setState({show:false,showss:true,shows:false});
}

adds(){
  const id   = this.props.Option_Reducer.optionInfo.id;
  const conid  =this.props.ConfigurationReducer.configurationInfo.id;
  const names    = this.props.Option_Reducer.optionInfo.name;
  const slugs    = this.props.Option_Reducer.optionInfo.slug;
  const sorts    = this.props.Option_Reducer.optionInfo.sort;
  const descriptions=this.props.Option_Reducer.optionInfo.description;
  const statuss   = this.props.Option_Reducer.optionInfo.status;

  let formData={
      id:id,
      conid:conid,
      name:names,
      slug:slugs,
      sort:sorts,
      description:descriptions,
      status:statuss
  }
  this.props.AC_LIST_OPTION();
  this.props.AC_EDIT_OPTION(formData);  
  this.props.AC_LIST_OPTION();
  
  Swal("Done", "successfully Updated", "success");
  this.setState({show:true,shows:false,showss:false});

}
valids(event){
  var name=event.target.id;
  var value=event.target.value;
  this.props.AC_HANDLE_INPUT_CHANGE_OPT(name,value)
  
  if(name=='name')
  {
      if(value){
     
        this.setState({nameoptError:false})
      }
      else{
        this.setState({nameoptError:true})
      }
    }
    if(name=='slug')
    {
        if(value){
     
          this.setState({slugoptError:false})
        }
        else{
          this.setState({slugoptError:true})
        }
    }
    if(name=='sort')
    {
        if(value){
     
          this.setState({sortoptError:false})
        }
        else{
          this.setState({sortoptError:true})
        }
    }
    if(name=='description')
    {
      if(value){
     
        this.setState({descriptionoptError:false})
      }
      else{
        this.setState({descriptionoptError:true})
      }
    }
   
}
validsts(event){
  var name=event.target.id;
  var val=event.target.checked;
  var value;
  if(val=='true'){
    value='Active';
  }
  else{
    value='Inactive';
  }
  this.props.AC_HANDLE_INPUT_CHANGE_OPT(name,value)
}
editoption(event){
  var idopt= event.target.id;
  var formdata={
    id:idopt
  }
  this.props.AC_LIST_OPTION();
  this.props.AC_VIEW_OPTION(formdata);
  this.props.AC_LIST_OPTION();
  this.setState({show:false,shows:true,showss:false});

}

  add()
  {
      const nameopt=this.nameopt2(this.state.nameopt)
      const slugopt=this.slugopt2(this.state.slugopt)
      const sortopt=this.sortopt2(this.state.sortopt)
      const descriptionopt=this.descriptionopt2(this.state.descriptionopt)
      const statusopt=this.statusopt2(this.state.isChecked)
      const conid=this.conid2(this.props.ConfigurationReducer.configurationInfo.id);
      const sts=this.state.isChecked?'Active':'Inactive';
      console.log("+++++_",sts);

        if(nameopt && slugopt && sortopt && descriptionopt && statusopt && conid)
        {
            var formData={
                conid:this.props.ConfigurationReducer.configurationInfo.id,
                name:this.state.nameopt,
                slug:this.state.slugopt,
                sort:this.state.sortopt,
                description:this.state.descriptionopt,
                status:sts,
            }
            this.props.AC_LIST_OPTION();
            this.props.AC_ADD_OPTION(formData);
            // this.setState({nameopt:"",slugopt:"",sortopt:"",descriptionopt:"",statusopt:""});
            
            this.props.AC_LIST_OPTION();
            Swal("Done", "successfully Added", "success");
            this.setState({showtable:true});
            this.resetForm();

        }   
  }
  resetForm = () => {
    this.setState({
        ...this.state,
        nameopt:'',
        slugopt:'',
        sortopt:'',
        descriptionopt:'',
        isChecked:false,
    })
 }
  conid2(conid1){
    return true
  }

  nameopt2(nameopt1){
    if(nameopt1){
              this.setState({nameoptError:false})
              return true
          }
          else{
              this.setState({nameoptError:true})
              return false
          }
      }

      nameopt2(nameopt1){
      if(nameopt1){
                this.setState({nameoptError:false})
                return true
            }
            else{
                this.setState({nameoptError:true})
                return false
            }
        }
        slugopt2(slugopt1){
          if(slugopt1){
              this.setState({slugoptError:false})
              return true
          }
          else{
              this.setState({slugoptError:true})
              return false
          }
      }
      sortopt2(sortopt1){
        if(sortopt1){
            this.setState({sortoptError:false})
            return true
        }
        else{
            this.setState({sortoptError:true})
            return false
        }
    }
    descriptionopt2(descriptionopt1){
      if(descriptionopt1){
          this.setState({descriptionoptError:false})
          return true
      }
      else{
          this.setState({descriptionoptError:true})
          return false
      }
  } 
  statusopt2(statusopt1){
          
              return true
         
  }

  valid(event){
    var id=event.target.id;
    var value=event.target.value;
    console.log("=-=statusopt-=-",event.target.checked);
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
      this.setState({isChecked: !this.state.isChecked});
    }
  }
 

  sta(statuss){
    if(statuss=='Active'){
      this.setState({isCheck:true});
    }else{
      this.setState({isCheck:false});
    }
  }

  show(){
    this.setState({show:true,shows:false,showss:false});
  }
  UNSAFE_componentWillMount() {

    console.log('-=nm,csnmcncnd-=-=-', this.props.match.params.id);
    console.log('-=nm,csnmcncnd-=-=-', this.props);
    let letterId = this.props.match.params.id;
    let formdata = {
      slug: letterId
    }

    this.props.AC_VIEW_CONFIGURATION(formdata);
    setTimeout(() => {
      this.editorContent();
    }, 500);

    

  }

  cancelletter(event){
    this.setState({viewStatus:true})
  }

  editorContent(){
    const description = this.props.ConfigurationReducer.configurationInfo.description;
    console.log('-=-=descp=-=',description);
    const html = '<p>'+description+'</p>';
    const contentBlock = htmlToDraft(html);
    const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
    const editorState = EditorState.createWithContent(contentState);
    this.setState({editorState});

  }

  validletter() {
    const name = this.props.ConfigurationReducer.configurationInfo.name;
    const slug = this.props.ConfigurationReducer.configurationInfo.slug;
    //const description = this.props.PageReducer.pageInfo.description;
    const description = this.state.description;
    const status = this.props.ConfigurationReducer.configurationInfo.status;
    const id = this.props.ConfigurationReducer.configurationInfo.id;
    let configurationData = {
      name: name,
      slug: slug,
      description: description,
      status:status,
      id: id
    }
    console.log("=-=-des -0-0-0-0-0-0-0-0 formdata", configurationData);
    this.props.AC_LIST_CONFIGURATION();
    this.props.AC_EDIT_CONFIGURATION(configurationData);
    this.props.AC_LIST_CONFIGURATION();
    Swal("Done🙂", "successfully Updated", "success");
    this.setState({viewStatus:true})
  }


  edit() {
    var pagval = this.state.editorState.getCurrentContent().getPlainText();

    if (pagval) {

      this.setState({ description: pagval, descriptionError: false })
    }
    else {
      this.setState({ description: pagval, descriptionError: true })
    }

  }


  //   console.log("=-=-=description-=-=-",this.state.description);
  // // }
  onEditorStateChange = (editorState) => {
    console.log("-=-=-=-editorState-=-=-", editorState);
    this.setState({
      editorState
    });

  }
  change(event) {
    let name = event.target.id;
    let value = event.target.value;
    console.log("name", name);
    console.log("value", value);

    this.props.AC_HANDLE_INPUT_CHANGE(name, value)

    if(name == "name"){
      if(value){
     
        this.setState({name:value,nameError:false})
      }
      else{
        this.setState({name:value,nameError:true})
      }
      }

      if(name == "slug"){
        if(value){
        
          this.setState({slug:value,slugError:false})
        }
        else{
          this.setState({slug:value,slugError:true})
        }
      }
      if(name == "status"){
        if(value){
        
          this.setState({status:value,statusError:false})
        }
        else{
          this.setState({status:value,statusError:true})
        }
      }
  }

  delete(event){
    var del=event.target.id;
        var formdata={
            id:del
        }
        console.log("=-=del-=/",formdata)
        Swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
            })
            .then((willDelete) => {
            if (willDelete) {
                this.props.AC_LIST_OPTION();
                this.props.AC_DELETE_OPTION(formdata);
                this.props.AC_LIST_OPTION();
                Swal("Poof! Your file has been deleted!", {
                icon: "success",
                });
            } else {
              Swal("Done", "Your file is safe!", "success");
            }
            });
    }


  
  render() {

    if(this.state.viewStatus) {
      return <Redirect to={'/listconfiguration'} />
    }
    
    const name    = this.props.ConfigurationReducer.configurationInfo.name;
    const slug = this.props.ConfigurationReducer.configurationInfo.slug;
    const status  = this.props.ConfigurationReducer.configurationInfo.status;

    const names    = this.props.Option_Reducer.optionInfo.name;
    console.log("=-=-=names-",names);
    const slugs    = this.props.Option_Reducer.optionInfo.slug;
    const sorts    = this.props.Option_Reducer.optionInfo.sort;
    const descriptions    = this.props.Option_Reducer.optionInfo.description;
    const statuss   = this.props.Option_Reducer.optionInfo.status;

    var option=this.props.Option_Reducer.optionList;
    var conid = this.props.ConfigurationReducer.configurationInfo.id;
    // var optid = this.props.Option_Reducer.optionInfo;
    console.log("=-=-=conidconidconid-=-=-",conid);
    // console.log("=-=-=optidoptidoptidconidconidconid-=-=-",optid);

        var result=[];
        var id=1;
        if(option){
			for(var i=0;i<option.length;i++){
          const optid=option[i].conid;
          if(conid==optid)
                {
                  result.push(
                    <tr key={i}>
                        <td>{id++}</td>
                        <td>{option[i].name}</td>
                        <a  class="edit" title="edit" data-toggle="tooltip"><td id={option[i]._id} onClick={this.editoption} style={{cursor:'pointer',color:'black'}}>{option[i].slug}</td></a>
                        <td>{option[i].sort}</td>
                        <td ><p style={{width:'250px',whiteSpace:'nowrap',overflow:"hidden",textOverflow:'ellipsis'}}>{Parser(option[i].description)}</p></td>
                        <td >{option[i].status}</td>
                        <td>
                            <a class="view"   title="view" data-toggle="tooltip"><i  id={option[i]._id}  onClick={this.viewoption} class="fas fa-eye" style={{marginRight : '15px',cursor:'pointer',color:"#704f89"}}></i></a>
                            <a class="edit"   title="edit" data-toggle="tooltip"><i  id={option[i]._id} onClick={this.editoption} class="fas fa-edit" style={{marginRight : '15px',cursor:'pointer',color:"#704f89"}} ></i></a>
                            <a class="delete" title="Delete" data-toggle="tooltip"><i id={option[i]._id}  onClick={this.delete} class="far fa-trash-alt" style={{cursor:'pointer',color:"#704f89"}}></i></a>
                        </td>
                    </tr>
                  )
                }
            }
        }

    return (
      <>
 <div class="container-fluid" >
                <div class="content-header">
                    <div class="container-fluid">
                        <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0" style={{fontWeight:'bold',color:'#704f89'}}>CONFIGURATION</h1>
                        </div>
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item" style={{color : '#704f89'}}><a >Home</a></li>
                            <li class="breadcrumb-item active"  >Edit Configuration</li>
                            </ol>
                        </div>
                        </div>
                    </div>
                </div>
            <div class="col-md-12">
            
            <div class="card card-primary"  style={{border:'solid 1px #704f89',borderRadius:'8px'}}>
              <div class="card-header"  style={{backgroundColor : '#704f89'}}>
                <h2 class="card-title">EDIT CONFIGURATION</h2>
              </div>
                <form id="quickForm" autoComplete="off">
                <div class="card-body">
                  <div class="form-group">
                  <label for="exampleInputEmail1">Name</label>
                  
              <input type="email" className="form-control" id="name" value={name} onChange={this.change} placeholder="Enter Your Title" />
                    {this.state.nameError?<label style={{color:'red'}}>Name is required**</label>:""}
                  </div>
                  <div class="form-group">
                  <label for="exampleInputEmail1">Slug</label>
              <input type="email" className="form-control" id="slug" value={slug} onChange={this.change} placeholder="Enter Your Slug" />
                    {this.state.slugError?<label style={{color:'red'}}>Slug is required**</label>:""}
                  </div>
                  <div>
                  <label for="exampleInputPassword1" >Description</label>
                  <Editor id="description" toolbarClassName="toolbarClassName" wrapperClassName="wrapperClassName" onEditorStateChange={this.onEditorStateChange} editorState={this.state.editorState} editorClassName="editorClassName" onChange={this.edit} placeholder="Enter the Description" />
                    {this.state.descriptionError?<label style={{color:'red'}}>Message is required**</label>:""}
                  </div>    
                  <div>
                  <label for="formGroupExampleInput2">Status </label>
                    <select class="form-control" value={status} id="status" onChange={this.change} >
                    <option value="NotSelected" >--select status--</option>
                    <option  value="Active" selected={status == 'Active' } >Active</option>
                    <option value="Inactive" selected={status == 'Inactive' } >Inactive</option>  
                  </select>
                    {this.state.statusError?<label style={{color:'red'}}>Status is required**</label>:""}
                  </div>  
                </div>
               
                <div class="card-footer">
                    <button type="button" class="btn btn-secondary" onClick={this.cancelletter} style={{marginRight:'75px',backgroundColor:'#B378D3'}}>Cancel</button>
                    <input type="button" value="Update" style={{backgroundColor : '#704f89' ,borderColor:'#704f89'}} onClick={this.validletter} class="btn btn-primary" />
                </div>
              </form>
              </div>
              </div>
              </div>

              <div class="container-fluid" >
              <div class="form-group">
              <div class="row" >                
              <div class="col-md-12 bg-light text-right">
                <input type="button" value="Add Option" onClick={this.show} style={{backgroundColor : '#704f89' ,borderColor:'#704f89',right:'100px'}}  class=" btn btn-primary" />
              </div>
              </div>
              </div>
              </div>


              <div>
              {this.state.show?

              <div class="container-fluid" >
              <div class="col-md-12">
              <div class="card card-primary"  style={{border:'solid 1px #704f89',borderRadius:'8px'}}>
              <div class="card-header"  style={{backgroundColor : '#704f89'}}>
                 <h2 class="card-title">ADD OPTION</h2>
              </div>     
              <form id="quickForm" autoComplete="off"> 
              <div class="card-body container">
              <div class="form-row">
                  <div class="col-2">
                    <label for="exampleInputEmail1">Name</label>
                  </div>
                  <div class="col-2">
                    <label for="exampleInputEmail1">Slug</label>
                  </div>
                  <div class="col-2">
                    <label for="exampleInputEmail1">Sort</label>
                  </div>
                  <div class="col-2">
                    <label for="exampleInputEmail1">Description</label>
                  </div>
                  <div class="col-2">
                    <label for="exampleInputEmail1">Status</label>
                  </div>
                  <div class="col-2">
                  {/* <input type="button"className="btn btn-primary" style={{backgroundColor : '#704f89' ,borderColor:'#704f89'}} value="Add" onClick={this.add}/> */}
                  </div>
                  </div>

                  <div class="form-row">
                  <div class="form-group col-2">
                    <input className="form-control" type="text" name="nameopt" id="nameopt" placeholder="Enter Your Name" onChange={this.valid} />
                  </div>
                  <div class="form-group col-2">
                    <input className="form-control" type="text" name="slugopt" id="slugopt" placeholder="Enter Your Slug" onChange={this.valid} />
                  </div>
                  <div class="form-group col-2">
                    <input className="form-control" type="text" name="sortopt" id="sortopt" placeholder="Enter Your Sort" onChange={this.valid} />
                  </div>
                  <div class="form-group col-2">
                    <input className="form-control" type="text" name="descriptionopt" id="descriptionopt" placeholder="Enter Your Description" onChange={this.valid} />
                  </div>
                  <div class="form-group col-2">
                    <input style={{marginLeft:'18px',cursor:'pointer'}} checked={this.state.isChecked} class="apple-switch" id="statusopt" type="checkbox" onChange={this.valid}></input>
                  </div>
                  <div class="form-group col-2">
                  <input type="button"className="btn btn-primary" style={{backgroundColor : '#704f89' ,borderColor:'#704f89',marginRight:'9px',width:'72px'}} value="Add" onClick={this.add}/>
                  <input type="button" className="btn btn-primary" style={{backgroundColor : '#B378D3' ,borderColor:'#704f89'}} value="Cancel" onClick={this.cancel}/>
                  </div>
                  </div>

                  <div class="form-row">
                  <div class="col-2">
                    {this.state.nameoptError?<label style={{color:'red',fontSize:'15px'}}>Name is required**</label>:""}
                  </div>
                  <div class="col-2">
                    {this.state.slugoptError?<label style={{color:'red',fontSize:'15px'}}>Slug is required**</label>:""}
                  </div>
                  <div class="col-2">
                    {this.state.sortoptError?<label style={{color:'red',fontSize:'15px'}}>Sort is required**</label>:""}
                  </div>
                  <div class="col-2">
                    {this.state.descriptionoptError?<label style={{color:'red',fontSize:'15px'}}>Description is required*</label>:""}
                  </div>
                  <div class="col-2">
                    {this.state.statusoptError?<label style={{color:'red',fontSize:'15px'}}>Status is required**</label>:""}
                  </div>
                  <div class="col-2">
                  {/* <input type="button"className="btn btn-primary" style={{backgroundColor : '#704f89' ,borderColor:'#704f89'}} value="Add" onClick={this.add}/> */}
                  </div>
                  </div>

                  </div>
                </form>
                </div>
                </div>
                </div>
                :""}
                </div>

                <div>
              {this.state.shows?

              <div class="container-fluid" >
              <div class="col-md-12">
              <div class="card card-primary"  style={{border:'solid 1px #704f89',borderRadius:'8px'}}>
              <div class="card-header"  style={{backgroundColor : '#704f89'}}>
                 <h2 class="card-title">EDIT OPTION</h2>
              </div>     
              <form id="quickForm" autoComplete="off"> 
              <div class="card-body container">
              <div class="row">
                  <div class="col-2">
                    <label for="exampleInputEmail1">Name</label>
                  </div>
                  <div class="col-2">
                    <label for="exampleInputEmail1">Slug</label>
                  </div>
                  <div class="col-2">
                    <label for="exampleInputEmail1">Sort</label>
                  </div>
                  <div class="col-2">
                    <label for="exampleInputEmail1">Description</label>
                  </div>
                  <div class="col-2">
                    <label for="exampleInputEmail1">Status</label>
                  </div>
                  <div class="col-2">
                  {/* <input type="button"className="btn btn-primary" style={{backgroundColor : '#704f89' ,borderColor:'#704f89'}} value="Add" onClick={this.add}/> */}
                  </div>
                  </div>

                  <div class="row">
                  <div class="form-group col-2">
                    <input className="form-control" type="text" value={names} id="name" placeholder="Enter Your Name" onChange={this.valids} />
                  </div>
                  <div class="form-group col-2">
                    <input className="form-control" type="text" value={slugs} id="slug" placeholder="Enter Your Slug" onChange={this.valids} />
                  </div>
                  <div class="form-group col-2">
                    <input className="form-control" type="text" value={sorts} id="sort" placeholder="Enter Your Sort" onChange={this.valids} />
                  </div>
                  <div class="form-group col-2">
                    <input className="form-control" type="text" value={descriptions} id="description" placeholder="Enter Your Description" onChange={this.valids} />
                  </div>
                  <div class="form-group col-2">
                    <input style={{marginLeft:'18px',cursor:'pointer'}}  checked={statuss=='Active'?true:false} class="apple-switch" id="status" type="checkbox" onChange={this.validsts}></input>
                  </div>
                  <div class="form-group col-2">
                  <input type="button" className="btn btn-primary" style={{backgroundColor : '#704f89' ,borderColor:'#704f89',marginRight:'9px',width:'72px'}} value="Update" onClick={this.adds}/>
                  <input type="button" className="btn btn-primary" style={{backgroundColor : '#B378D3' ,borderColor:'#704f89'}} value="Cancel" onClick={this.cancels}/>
                  </div>
                  </div>

                  <div class="row">
                  <div class="col-2">
                    {this.state.nameoptError?<label style={{color:'red',fontSize:'15px'}}>Name is required**</label>:""}
                  </div>
                  <div class="col-2">
                    {this.state.slugoptError?<label style={{color:'red',fontSize:'15px'}}>Slug is required**</label>:""}
                  </div>
                  <div class="col-2">
                    {this.state.sortoptError?<label style={{color:'red',fontSize:'15px'}}>Sort is required**</label>:""}
                  </div>
                  <div class="col-2">
                    {this.state.descriptionoptError?<label style={{color:'red',fontSize:'15px'}}>Description is required*</label>:""}
                  </div>
                  <div class="col-2">
                    {this.state.statusoptError?<label style={{color:'red',fontSize:'15px'}}>Status is required**</label>:""}
                  </div>
                  <div class="col-2">
                  {/* <input type="button"className="btn btn-primary" style={{backgroundColor : '#704f89' ,borderColor:'#704f89'}} value="Add" onClick={this.add}/> */}
                  </div>
                  </div>

                  </div>
                </form>
                </div>
                </div>
                </div>
                :""}
                </div>

                <div>
              {this.state.showss?

              <div class="container-fluid" >
              <div class="col-md-12">
              <div class="card card-primary"  style={{border:'solid 1px #704f89',borderRadius:'8px'}}>
              <div class="card-header"  style={{backgroundColor : '#704f89'}}>
                 <h2 class="card-title">VIEW OPTION</h2>
              </div>     
              <form id="quickForm" autoComplete="off"> 
              <div class="card-body container">
              <div class="row">
                  <div class="col-2">
                    <label for="exampleInputEmail1">Name</label>
                  </div>
                  <div class="col-2">
                    <label for="exampleInputEmail1">Slug</label>
                  </div>
                  <div class="col-2">
                    <label for="exampleInputEmail1">Sort</label>
                  </div>
                  <div class="col-2">
                    <label for="exampleInputEmail1">Description</label>
                  </div>
                  <div class="col-2">
                    <label for="exampleInputEmail1">Status</label>
                  </div>
                  <div class="col-2">
                  {/* <input type="button"className="btn btn-primary" style={{backgroundColor : '#704f89' ,borderColor:'#704f89'}} value="Add" onClick={this.add}/> */}
                  </div>
                  </div>

                  <div class="row">
                  <div class="form-group col-2">
                    <input className="form-control" type="text" disabled={true} value={names} id="name" placeholder="Enter Your Name" />
                  </div>
                  <div class="form-group col-2">
                    <input className="form-control" type="text" disabled={true} value={slugs} id="slug" placeholder="Enter Your Slug"  />
                  </div>
                  <div class="form-group col-2">
                    <input className="form-control" type="text" disabled={true} value={sorts} id="sort" placeholder="Enter Your Sort"  />
                  </div>
                  <div class="form-group col-2">
                    <input className="form-control" type="text" disabled={true} value={descriptions} id="description" placeholder="Enter Your Description"  />
                  </div>
                  <div class="form-group col-2">
                    <input style={{marginLeft:'18px'}} disabled={true} checked={statuss=='Active'?true:false} class="apple-switch" id="status" type="checkbox" ></input>
                  </div>
                  <div class="form-group col-2">
                  <input type="button" className="btn btn-primary" style={{backgroundColor : '#704f89' ,borderColor:'#704f89'}} value="Cancel" onClick={this.cancels}/>
                  </div>
                  </div>

                  </div>
                </form>
                </div>
                </div>
                </div>
                :""}
                </div>

                <div>
              {this.state.showtable?

              <div class="container-fluid" >
              <div class="col-md-12">
              <div class="card card-primary"  style={{border:'solid 1px #704f89',borderRadius:'8px'}}>
              <div class="card-header"  style={{backgroundColor : '#704f89'}}>
                 <h2 class="card-title">TABLES</h2>
              </div>         
              <div class="card-body" >
                                <div class="table-wrapper"style={{border:'solid 1px gray'}}>
                                    <div class="table-title">
                                    <table class="table table-striped table-hover">
                                        <thead >
                                            <tr>
                                                <th>S.No</th>
                                                <th>Name</th>
                                                <th>Slug</th>
                                                <th>Sort</th>
                                                <th>Description</th>
                                                <th>Status</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {result}
                                        </tbody>
                                    </table>
                                </div>
            
                            </div>
                        </div>
                </div>
                </div>
                </div>
                :""}
                </div>

               
                

      
      </>
    );
  }
}


function mapStateToProps(state) {
  console.log('-=-=action letter=-=-=', state);

  return {
    ConfigurationReducer:state.Configuration_Reducer,
    Option_Reducer:state.Option_Reducer

}
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ AC_ADD_CONFIGURATION, AC_LIST_CONFIGURATION, AC_EDIT_CONFIGURATION, AC_VIEW_CONFIGURATION, AC_HANDLE_INPUT_CHANGE,AC_ADD_OPTION,AC_LIST_OPTION,AC_DELETE_OPTION,AC_VIEW_OPTION,AC_HANDLE_INPUT_CHANGE_OPT,AC_EDIT_OPTION }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EditConfiguration)