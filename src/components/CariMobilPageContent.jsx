import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './CariMobilPageContent.css'
import iconOption from '../assets/chevron-down.png';
import iconCheckCircle from "../assets/check-circle-status.png"

export const CariMobilComp = ({handleSubmitFilter}) => {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("")
    const [status, setStatus] = useState(false);
    return (
        <Form className="cari-mobil_form">
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

export const HasilPencarianComp = ({chosenFilter, handleEditFilter}) => {
    return (
        <Form className="cari-mobil_form search-mode_form">
            <p className="search-mode_title">Hasil Pencarian</p>
            <fieldset className="form-container flex">
            <Form.Group className="form-group">
                <Form.Label className="form-label">Nama Mobil</Form.Label>
                <div className="search-mode_tab">{chosenFilter.name}</div>
            </Form.Group>
            <Form.Group className="form-group">
                <Form.Label className="form-label">Kategori</Form.Label>
                <div className="search-mode_tab">{chosenFilter.category}</div>
            </Form.Group>
            <Form.Group className="form-group">
                <Form.Label className="form-label">Harga</Form.Label>
                <div className="search-mode_tab">{chosenFilter.price}</div>
            </Form.Group>
            <Form.Group className="form-group">
                <Form.Label className="form-label">Status</Form.Label>
                <div className="search-mode_tab">
                    {!chosenFilter.status ? "Disewakan": "Tidak Disewa"}
                    {!chosenFilter.status && <img src={iconCheckCircle} alt="Disewakan" className="check-status-img"/>}
                </div>
            </Form.Group>
            <button type="button" className="search-mode_button"
            onClick={() => handleEditFilter()}><b>Edit</b></button>
            </fieldset>
        </Form>
    )
}

export const PencarianmuComp = () => {
    return (
        <Form className="cari-mobil_form search-mode_form disable">
            <p className="search-mode_title">Pencarianmu</p>
            <fieldset className="form-container flex">
                <Form.Group className="form-group">
                    <Form.Label className="form-label">Nama Mobil</Form.Label>
                    <div className="search-mode_tab"></div>
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Label className="form-label">Kategori</Form.Label>
                    <div className="search-mode_tab"></div>
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Label className="form-label">Harga</Form.Label>
                    <div className="search-mode_tab"></div>
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Label className="form-label">Status</Form.Label>
                    <div className="search-mode_tab"></div>
                </Form.Group>
            </fieldset>
        </Form>

    )
}

export const HasilPencarianTab = ({carData}) => {
    const navigate = useNavigate()
    return (
        <div className="hasil-pencarian_tab flex-column">
            <div className="hasil-pencarian_pic">
                <img src={carData.image} alt={carData.name} className="hasil-pencarian_img" />
            </div>
            <div className="hasil-pencarian_text">
                <p className="hasil-pencarian_name">{carData.name}</p>
                <p className="hasil-pencarian_price">Rp {carData.price.toLocaleString("id-ID")} / hari</p>
                <p className="hasil-pencarian_desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Button className="green-button hasil-pencarian_button"
                onClick={() => navigate(`/detail-mobil/${carData.id}`, {replace: true})}>Pilih Mobil</Button></div>
        </div>
    )
}