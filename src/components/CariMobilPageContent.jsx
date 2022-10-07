import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const iconOption = require("../assets/chevron-down.png");
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';
import './CariMobilPageContent.css'

export const CariMobilComp = ({handleSubmitFilter}) => {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("")
    const [status, setStatus] = useState(false);
    return (
        <Form className="form cari-mobil_form">
            <fieldset className="form-container flex">
                <Form.Group className="form-group">
                    <Form.Label className="form-label">Nama Mobil</Form.Label>
                    <Form.Control className="form-control" type="text" placeholder="Ketik nama/tipe mobil"
                    onChange={(event) => setName(event.target.value)}/>
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Label className="form-label">Kategori</Form.Label>
                    <Dropdown className="dropdown-select">
                        <Dropdown.Toggle className="form-select-flex form-control">
                            {category.length == 0 ? "Masukan Kapasitas Mobil" : category}
                            <img src={iconOption} className="option-icon" alt="select option"/>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item className="dropdown-option" onClick={() => setCategory("2 - 4 orang")}>
                                <b>2 - 4 orang</b></Dropdown.Item>
                            <Dropdown.Item className="dropdown-option" onClick={() => setCategory("4 - 6 orang")}>
                                <b>4 - 6 orang</b></Dropdown.Item>
                            <Dropdown.Item className="dropdown-option" onClick={() => setCategory("6 - 8 orang")}>
                                <b>6 - 8 orang</b></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Label className="form-label">Harga</Form.Label>
                    <Dropdown>
                        <Dropdown.Toggle className="form-select-flex form-control">
                            {price.length == 0 ? "Masukan Harga Sewa per Hari" : price}
                            <img src={iconOption} className="option-icon" alt="select option"/>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item className="dropdown-option" onClick={() => setPrice("< Rp. 400.000")}>
                                <b>&#60; Rp. 400.000</b></Dropdown.Item>
                            <Dropdown.Item className="dropdown-option" onClick={() => setPrice("Rp. 400.000 - Rp. 600.000")}>
                                <b>Rp. 400.000 - Rp. 600.000</b></Dropdown.Item>
                            <Dropdown.Item className="dropdown-option" onClick={() => setPrice("> Rp. 600.000")}>
                                <b>&#62; Rp. 600.000</b></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Label className="form-label">Status</Form.Label>
                    <Dropdown>
                        <Dropdown.Toggle className="form-select-flex form-control">
                            <b>{!status ? "Disewa": "Tidak Disewa"}</b>
                            <img src={iconOption} className="option-icon" alt="select option"/>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item className="dropdown-option" onClick={() => setStatus(false)}>
                                <b>Disewa</b></Dropdown.Item>
                            <Dropdown.Item className="dropdown-option" onClick={() => setStatus(true)}>
                                <b>Tidak Disewa</b></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Form.Group>
                <Button className="green-button form-button" type="button" 
                onClick={() => handleSubmitFilter({name, category, price, status})}
                >Cari Mobil</Button>
            </fieldset>
        </Form>
    )
}