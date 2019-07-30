import React, { Component } from "react";
import {
 Button,
 Card,
 CardBody,
 Col,
 FormGroup,
 Input,
 Label,
 Row,
} from "reactstrap";
import Footer from './Footer';
import SubNav from './Subnav';


class Profile extends Component {
 constructor(props) {
   super(props);
   this.state = {
     currentUser: null,
     isEdit: false,
     name: '',
     date_of_birth: '',
     cell_phone: '',
     address: '',
     avatar_url: '',
     email: ''
   };
 }
 componentDidMount() {
   this.fetchingUser()
 }
 sendingUpdateProfile = async (e) => {
   e.preventDefault()
   if (this.state.cell_phone.length < 10 || this.state.cell_phone.length > 11){
     alert("Check your cell phone number")
     return
   } else {
   const sending = {
     "name": this.state.name,
     "date_of_birth": this.state.date_of_birth,
     "cell_phone": this.state.cell_phone,
     "address": this.state.address,
     "avatar_url": this.state.avatar_url,
   }
   const url = 'https://pet-shop-final-project.herokuapp.com/editprofile'
   let response = await fetch(url, {
     method : 'POST',
     body : JSON.stringify(sending),
     headers: new Headers({
       'Authorization': `Token ${localStorage.getItem('token')}`,
       'Content-Type': 'application/json'
     }),
   })
   const result = await response.json()
   if (result.status==='ok') {
     this.fetchingUser()
   }
   else {
     alert("There an error while updating your profile, please check your input again")
   }
 }
}
fetchingUser = async () => {
    const url = 'https://pet-shop-final-project.herokuapp.com/profile'
    let response = await fetch(url, {
      headers: new Headers({
        'Authorization': `Token ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      }),
    })
    const result = await response.json()
    this.setState({
      currentUser: result,
      name: result.name,
      date_of_birth: result.date_of_birth,
      cell_phone: result.cell_phone,
      address: result.address,
      email: result.email,
      avatar_url: result.avatar_url
    })
  }
  toggleEdit = (e) => {
    e.preventDefault()
    this.setState({ isEdit: !this.state.isEdit })
  }
  handleOnChangeGeneral = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState({ [name]: value })
  }
  render() {
    return (
      <>
      <SubNav />
      <div className="animated fadeIn" style={{minWidth:"300px"}}>
        {this.state.currentUser !== null &&
          <Row className="mt-5">
            <Col xs="12" md="2">
            </Col>
            {!this.state.isEdit &&
              <Col xs="12" md="8">
                <Card className='shadow'>
                  <CardBody>
                    <Row>
                      <Col xs="12" md="4" >
                        <div style={{ display: "flex", justifyContent: "center" }}>
                          <img className="img-rounded img-responsive mb-5" src={this.state.currentUser.avatar_url} height="200px" alt="" />
                        </div>
                      </Col>
                      <Col xs="12" md="8">
                        <h1 className="mb-5">Profile</h1>
                        <p><span className="h6">Display name: </span> <b style={{ color: "blue" }}>{this.state.currentUser.name}</b></p>
                        <p><span className="h6">Email: </span>  {this.state.currentUser.email}</p>
                        <br />
                        <p><span className="h6">DOB: </span>  {this.state.currentUser.date_of_birth} </p>
                        <p><span className="h6">Cell Phone: </span>  {this.state.currentUser.cell_phone}</p>
                        <p><span className="h6">Address: </span>  {this.state.currentUser.address}</p>
                        <br />
                        <Button className="mr-2 shadow" size="sm" color="primary" onClick={(e) => this.toggleEdit(e)}><i className="fa fa-dot-circle-o"></i> Update profile</Button>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            }
            {this.state.isEdit &&
              <Col xs="12" md="8">
                <Card className='shadow'>
                  <CardBody>
                  <Row>
                  <Col xs="12" md="4" >
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <img className="img-rounded img-responsive mb-5" src={this.state.currentUser.avatar_url} height="180px" alt="" />
                    </div>
                  </Col>
                  <Col xs="12" md="8">
                    <h1 className="mb-5">Profile</h1>
                    <FormGroup row>
                      <Col md="4">
                        <Label htmlFor="text-input"><span className="h6">Name:</span></Label>
                      </Col>
                      <Col xs="12" md="6">
                        <Input type="text" id="text-input" name="name" value={this.state.name} onChange={(e) => this.handleOnChangeGeneral(e)} />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="4">
                        <Label htmlFor="text-input"><span className="h6">Email:</span></Label>
                      </Col>
                      <Col xs="12" md="6">
                        <Input type="text" id="text-input" name="email" value={this.state.email} onChange={(e) => this.handleOnChangeGeneral(e)} />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="4">
                        <Label htmlFor="text-input"><span className="h6">DOB:</span></Label>
                      </Col>
                      <Col xs="12" md="6">
                        <Input type="date" id="text-input" name="date_of_birth" value={this.state.date_of_birth} onChange={(e) => this.handleOnChangeGeneral(e)} />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="4">
                        <Label htmlFor="text-input"><span className="h6">Cell Phone:</span></Label>
                      </Col>
                      <Col xs="12" md="6">
                        <Input type="text" id="text-input" name="cell_phone" min={10} max={11} value={this.state.cell_phone} onChange={(e) => this.handleOnChangeGeneral(e)} />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="4">
                        <Label htmlFor="text-input"><span className="h6">Address:</span></Label>
                      </Col>
                      <Col xs="12" md="6">
                        <Input type="text" id="text-input" name="address" value={this.state.address} onChange={(e) => this.handleOnChangeGeneral(e)} />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="4">
                        <Label htmlFor="text-input"><span className="h6">Avatar Image:</span></Label>
                      </Col>
                      <Col xs="12" md="6">
                        <Input type="text" id="text-input" name="avatar_url" onChange={(e) => this.handleOnChangeGeneral(e)} />
                      </Col>
                    </FormGroup>
                    <br />
                    <Button className="mr-2 shadow" size="sm" color="danger" onClick={(e) => this.toggleEdit(e)}><i className="fa fa-dot-circle-o"></i> Cancel</Button>
                    <Button className="mr-2 shadow" size="sm" color="primary" type="submit" onClick={(e)=>this.sendingUpdateProfile(e)}><i className="fa fa-dot-circle-o"></i> Update </Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        }
        <Col xs="12" md="2">
        </Col>
      </Row>
    }
  </div>
  <Footer />
  </>
);
}
}
export default Profile;