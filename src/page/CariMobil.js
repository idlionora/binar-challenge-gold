import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const iconOption = require("../assets/chevron-down.png")
import { Container, Row } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import '../App.css';
import { BannerComp } from '../components/Header';



const CariMobilComp = () => {
    return (
        <Form className="form cari-mobil_form">
          <fieldset className="form-container flex">
            <Form.Group className="form-group">
              <Form.Label className="form-label">Nama Mobil</Form.Label>
              <Form.Control className="form-control" type="text" placeholder="Ketik nama/tipe mobil"/>
            </Form.Group>
            <Form.Group className="form-group">
              <Form.Label className="form-label">Kategori</Form.Label>
              <Dropdown className="dropdown-select">
                <Dropdown.Toggle className="form-select-flex form-control">
                  Masukan Kapasitas Mobil
                  <img src={iconOption} className="option-icon" alt="select option"/>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item className="dropdown-option"><b>2 - 4 orang</b></Dropdown.Item>
                    <Dropdown.Item className="dropdown-option"><b>4 - 6 orang</b></Dropdown.Item>
                    <Dropdown.Item className="dropdown-option"><b>6 - 8 orang</b></Dropdown.Item>
                  </Dropdown.Menu>
              </Dropdown>
            </Form.Group>
            <Form.Group className="form-group">
              <Form.Label className="form-label">Harga</Form.Label>
              <Dropdown>
                <Dropdown.Toggle className="form-select-flex form-control">
                  Masukan Harga Sewa per Hari
                  <img src={iconOption} className="option-icon" alt="select option"/>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item className="dropdown-option"><b>&#60; Rp. 400.000</b></Dropdown.Item>
                    <Dropdown.Item className="dropdown-option"><b>Rp. 400.000 - Rp. 600.000</b></Dropdown.Item>
                    <Dropdown.Item className="dropdown-option"><b>&#62; Rp. 600.000</b></Dropdown.Item>
                  </Dropdown.Menu>
              </Dropdown>
            </Form.Group>
            <Form.Group className="form-group">
              <Form.Label className="form-label">Status</Form.Label>
              <Dropdown>
                <Dropdown.Toggle className="form-select-flex form-control">
                  <b>Disewa</b>
                  <img src={iconOption} className="option-icon" alt="select option"/>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item className="dropdown-option"><b>Disewa</b></Dropdown.Item>
                    <Dropdown.Item className="dropdown-option"><b>Tidak Disewa</b></Dropdown.Item>
                  </Dropdown.Menu>
              </Dropdown>
            </Form.Group>
            <Button className="green-button form-button" type="button">Cari Mobil</Button>
          </fieldset>
        </Form>
    )
}

const CariMobil = () => {
    return (
      <>
        <header>
          <BannerComp noButton/>
        </header>
        <Container fluid className="site-container p-0 page-container">
          <Row className='cari-mobil_container'>
            <CariMobilComp/>
          </Row>
        </Container>
      </>
    )
  }

  export default CariMobil;