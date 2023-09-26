import React from "react";
import "./Header.scss";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const contacts = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    phone: "123-456-7890",
    sex: "male",
  },
  {
    id: 2,
    firstName: "Bruce",
    lastName: "Wayne",
    phone: "425-056-5264",
    sex: "male",
  },
  {
    id: 3,
    firstName: "Diana",
    lastName: "Smith",
    phone: "223-453-4321",
    sex: "female",
  },
  {
    id: 4,
    firstName: "Uiliam",
    lastName: "Shekspir",
    phone: "234-323-5432",
    sex: "male",
  },
  {
    id: 5,
    firstName: "Indiana",
    lastName: "Jonth",
    phone: "987-234-1299",
    sex: "female",
  },
  {
    id: 6,
    firstName: "Alica",
    lastName: "Walker",
    phone: "223-453-4321",
    sex: "female",
  },
];
const contactList = contacts.map((contact) => (
  <div className="kontakts">
    <tbody key={contacts.id}>
      <h3 className="h1"> {contact.id}</h3>
      <h2 className="h2"> {contact.firstName}</h2>
      <h2 className="h3"> {contact.lastName}</h2>
      <h2 className="h4"> {contact.phone}</h2>
      <h2 className="h5"> {contact.sex}</h2>
      <div className="btns">
        <button className="edit">Edit</button>
        <button className="delete">Delete</button>
      </div>
    </tbody>
  </div>
));

const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header>
      <div className="container">
        <div className="nav">
          <InputGroup size="lg" className="inpt">
            <Form.Control
              // onChange={(e) => setSearch(e.target.value)}
              aria-label="Default"
              placeholder="search..."
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
          <select name="Select" id="slct1">
            <option value="All">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <Button variant="primary" onClick={handleShow}>
            Open modal
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <label className="form-label" for="firstName">
                  Firstname
                </label>
                <input
                  className="form-control mb-3"
                  type="text"
                  id="firstName"
                  name="firstName"
                />
                <label className="form-label" for="lastName">
                  Lastname
                </label>
                <input
                  className="form-control mb-3"
                  type="text"
                  id="lastName"
                  name="lastName"
                />
                <label className="form-label" for="number">
                  Create your phone number
                </label>
                <input
                  className="form-control mb-3"
                  type="text"
                  id="number"
                  name="number"
                />
                <label className="form-label" for="sex">
                  sex
                </label>
                <select className="form-select mb-3" name="group" id="group">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <div className="container">
          <table className="table table-hover">
            <thead>
              <tr className="head-tab">
                <th scope="col">No</th>
                <th scope="col" className="tab1">
                  Firstname
                </th>
                <th scope="col" className="tab2">
                  Lastname
                </th>
                <th scope="col" className="tab3">
                  phone
                </th>
                <th scope="col" className="tab4">
                  Sex
                </th>
                <th scope="col" className="tab5">
                  Aaction
                </th>
              </tr>
            </thead>
          </table>
          {contactList}
        </div>
      </div>
    </header>
  );
};

export default Header;
