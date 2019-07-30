import React, {useState} from "react";
import { Container,
  Row,
  Col,
  Button,
  FormGroup,
  Input,
  Form,
  Modal } from "reactstrap";
import Footer from './Footer';
import SubNav from './Subnav';
import useForm from './UseForm'
import validate from './CreateProductValidateRules';


function CreateProduct() {
  const [modal, setModal] = useState(false);
  const postToDB = async () => {

    const response = await fetch(`https://pet-shop-final-project.herokuapp.com/create_product`, {
      method: "POST",
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Authorization': `Token ${localStorage.getItem("token")}`
      },
      body: JSON.stringify(inputs)
    })

    const jsonData = await response.json()
    if (jsonData.success) {
      toggleModal()
    }
    else alert ("fail")
  };
  const {inputs, errors, handleInputChange, handleSubmit} = useForm(postToDB, validate);

  const toggleModal = () => {
      setModal(!modal);
  };

  return (
    <>     
<SubNav/>
    <div className="page-header">
    <div className="filter" />
      <Container className="mt-5" style={{zIndex:1}}>
        <Col><h1 className="text-white">Create Post</h1></Col>
        <Form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-sm-7 col-md-7">
            <Row>
            <Col>
              <FormGroup className={`form ${errors.name && 'has-danger'}`} >
              <h6 className="text-white">
                    Product Name <span className="icon-danger">*</span>
                  </h6>
                  <div className="border-input input-group">
                    <Input
                      name="name"
                      onChange={handleInputChange} 
                      value={inputs.name || ""}
                      placeholder="enter Product Name..."
                      type="text"
                      className="border-input form-control"
                    />
                  </div>
                  {errors.name && (
                  <p className="help text-danger font-weight-bold">{errors.name}</p>
                )}
                </FormGroup>
              </Col>
              <Col>
              <FormGroup className={`form ${errors.price && 'has-danger'}`} >
              <h6 className="text-white">
                    Price <span className="icon-danger">*</span>
                  </h6>
                  <div className="border-input input-group">
                    <Input
                      name="price"
                      onChange={handleInputChange} 
                      value={inputs.price || ""}
                      placeholder="enter price..."
                      type="number"
                      className="border-input form-control"
                    />
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <i className="fa fa-dollar" />
                      </span>
                    </div>
                  </div>
                  {errors.price && (
                  <p className="help text-danger font-weight-bold">{errors.price}</p>
                )}
                </FormGroup>
              </Col>
              </Row>
              <Row>
              <Col>
              <FormGroup className={`form ${errors.category && 'has-danger'}`}>
                <h6 for="exampleSelect1" className="text-white">Category <span className="icon-danger"> *</span></h6>
                <Input 
                  name="category"
                  onChange={handleInputChange} 
                  value={inputs.category || ""}
                  type="select"  
                  id="exampleSelect1"
                  >
                  <option value ="">Select</option>
                  <option>Foods</option>
                  <option>Toys</option>
                  <option>Walk-Ropes</option>
                  <option>Utensils</option>
                  <option>Training</option>
                  <option>Beds-Mattresses-Cat-Trees</option>
                  <option>Cages-Bags-Fences</option>
                  <option>Cosmetics</option>
                  <option>Costumes</option>
                  <option>Grooming-Tools</option>
                  <option>Heath-Cares-Cat-Sands</option>
                  <option>Walk-Your-Pet</option>
                  <option>Grooming-Services</option>
                  <option>Pet-Hotels</option>
                  <option>Matchmaking-Services</option>
                  <option>Training-For-Pet</option>
                  <option>Carrer-Courses</option>
                  <option>Puppies</option>
                  <option>Kittens</option>
                </Input>
                {errors.category && (
                  <p className="help text-danger font-weight-bold">{errors.category}</p>
                )}
              </FormGroup>
              </Col>
              <Col>
              <FormGroup className={`form ${errors.pet_size && 'has-danger'}`} >
                <h6 for="exampleSelect2" className="text-white">Pet Size <span className="icon-danger"> *</span></h6>
                <Input 
                  name="pet_size"
                  onChange={handleInputChange} 
                  value={inputs.pet_size || ""}
                  type="select" 
                  id="exampleSelect2">
                  <option value ="">Select</option>
                  <option>XS</option>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                  <option>All</option>
                </Input>
                {errors.pet_size && (
                  <p className="help text-danger font-weight-bold">{errors.pet_size}</p>
                )}
              </FormGroup>
              </Col>
              </Row>
              <div className="form-group mt-1 mb-5">
                <h6 className="text-white">Description</h6>
                <textarea
                  name="description"
                  onChange={handleInputChange} 
                  value={inputs.description || ""}
                  maxLength={250}
                  placeholder="enter the description ..."
                  rows={8}
                  className="textarea-limited form-control"
                  defaultValue={""}
                />
              </div>
            </div>
                  <div className="col-sm-5 col-md-5">
              <h6 className="text-white">Product Image</h6>
              <div className="fileinput text-center mb-2">
                <img
                  style={{width:"200px"}}
                  src="https://camo.githubusercontent.com/d1b266fad8e2d9abd4a033a02a68f98e5ca53509/68747470733a2f2f6d61726b6574696e676465636f6e746575646f2e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031372f30362f7468756d626e61696c2e706e67"
                  alt="..."
                />
                <Input
                  name="imageUrl"
                  onChange={handleInputChange} 
                  value={inputs.imageUrl || ""}
                  placeholder="enter the image url here..."
                  type="text"
                  className="border-input form-control"
                />
                <div className="thumbnail">
                </div>
              </div>
            </div>
          </div>
          <Row>
              <Button
                type="submit"
                className="btn-round btn btn-info btn-block"
              >
                Save &amp; Publish
              </Button>
              <Modal isOpen={modal}  toggle={() => toggleModal()}>
                <div className="modal-header">
                  <button
                    aria-label="Close"
                    className="close"
                    type="button"
                    onClick={toggleModal}
                  >
                    <span aria-hidden={true}>×</span>
                  </button>
                  <h5
                    className="modal-title text-center"
                    id="exampleModalLabel"
                  >
                    Modal title
                  </h5>
                </div>
                <div className="modal-body">
                  Your product has successfully uploaded
                </div>
                <div className="modal-footer">
                  <div className="left-side">
                    <Button
                      className="btn-link"
                      color="default"
                      type="button"
                      onClick={() => toggleModal()}
                    >
                      Push more products
                    </Button>
                  </div>
                  <div className="divider" />
                </div>
              </Modal>
          </Row>
        </Form>
      </Container>
    </div>
    <Footer />
    </>
  );
}

export default CreateProduct;
