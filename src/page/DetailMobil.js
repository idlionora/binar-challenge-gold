import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import '../App.css';
import { PencarianmuComp } from '../components/CariMobilPageContent';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const CariMobilConfirmed = () => {
    const {id} = useParams();
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false);
    const [carData, setCarData] = useState({})

    async function getCarDetail() {
        try {
            setIsLoading(true);
            const response = await axios.get(`https://bootcamp-rent-car.herokuapp.com/admin/car/${id}`);
            setCarData(response)
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
        <div>
            <h1>Detail Mobil {id}</h1>
        </div>
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
                <Row className='hasil-pencarian_container flex detail-mode'>
                    <CariMobilConfirmed/>
                </Row>                
            </Container>
        </>
    )
}

export default DetailMobil;