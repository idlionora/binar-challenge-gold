import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';
import { PencarianmuComp } from '../components/CariMobilPageContent';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import iconUsers from "../assets/users-icon.png";

const CariMobilConfirmed = () => {
    const {id} = useParams();
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false);
    const [carData, setCarData] = useState({
        name: "", category: "", price: ""})

    async function getCarDetail() {
        try {
            setIsLoading(true);
            const response = await axios.get(`https://bootcamp-rent-car.herokuapp.com/admin/car/${id}`);
            setCarData(response.data)
            console.log(response.data)
            setIsLoading(false)        
        } catch (error) {
            console.error(error.message);
            setIsError(true)
        }
    }
    useEffect(() => {
        getCarDetail()    
    }, []);

    return (
        <>  
            <Col md={{ span: 5, order: 2 }} className="car-detail_fetched">
                <div className='car-detail_border flex-column'>
                {!!isError ? <h3 style={{textAlign:"center"}}>Mohon maaf, data tidak dapat dimuat.</h3> :
                !!isLoading && <h3 style={{textAlign:"center"}}>Memuat data mobil, mohon tunggu sebentar...</h3>}
                {!isLoading && <>
                    <img src={carData.image} alt={carData.name} className="car-detail_img"/>
                    <h4 className="car-detail_name" style={{marginBottom: "2px"}}>{carData.name}</h4>
                    <div className="flex car-category_container">
                        <img src={iconUsers} className="car-detail_icon" alt="category"/>
                        <p className="car-detail_category">{carData.category}</p>
                    </div>
                    <div className="flex car-price_container">
                        <p>Total</p>
                        <p>Rp {carData.price.toLocaleString("id-ID")}</p>
                    </div>
                </>}
                </div>
            </Col>
            <Col md={{ span: 7, order: 1 }} className="car-detail_text">
                <div className='car-detail_border'>
                    <h3>Tentang Paket</h3>
                    <h4>Include</h4>
                    <ul className="car-detail_list">
                        <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                        <li>Sudah termasuk bensin selama 12 jam</li>
                        <li>Sudah termasuk Tiket Wisata</li>
                        <li>Sudah termasuk pajak</li>
                    </ul>
                    <h4>Exclude</h4>
                    <ul className="car-detail_list">
                        <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                        <li>Sudah termasuk bensin selama 12 jam</li>
                        <li>Sudah termasuk Tiket Wisata</li>
                    </ul>
                    <h4>Refund, Reschedule, Overtime</h4>
                    <ul className="car-detail_list" style={{marginBottom: 0}}>
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>Jika overtime lebih dari 12 jam akan ada tambahan </li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>Jika overtime lebih dari 12 jam akan ada tambahan </li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>Jika overtime lebih dari 12 jam akan ada tambahan </li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                    </ul>
                </div>
            </Col>
        </>
    )
}

const DetailMobil = () => {
    return (
        <>
            <header className='search-mode'/>
            <Container fluid className="site-container p-0 page-container">
                <Row className='cari-mobil_container'>
                    <PencarianmuComp/>
                </Row>
                <Row className='cari-mobil_tabs'>
                    <CariMobilConfirmed/>
                </Row>                
            </Container>
        </>
    )
}

export default DetailMobil;