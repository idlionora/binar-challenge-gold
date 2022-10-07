import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import '../App.css';
import { BannerComp } from '../components/Header';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { CariMobilComp } from '../components/CariMobilPageContent';


const CariMobil = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [chosenFilter, setChosenFilter] = useState({});
  const [filteredData, setFilteredData] = useState([]);
  
  async function getCarData() {
    try {
      setIsLoading(true)
      const response = await axios.get('https://bootcamp-rent-car.herokuapp.com/admin/car');
      const dataWithImage = response.data.filter(item => item.image !== null);
      setFetchedData(dataWithImage);
      setFilteredData(dataWithImage);
      setIsLoading(false);
      console.log(dataWithImage);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getCarData()    
  }, []);  

  const handleSubmitFilter = (submittedFilter) => {
    setChosenFilter(submittedFilter);
    setIsSearching(true);
  }

  useEffect(() => {
    console.log(chosenFilter, isSearching)

  }, [chosenFilter])

    return (
      <>
        <header>
          <BannerComp noButton/>
        </header>
        <Container fluid className="site-container p-0 page-container">
          <Row className='cari-mobil_container'>
            <CariMobilComp handleSubmitFilter={handleSubmitFilter}/>
          </Row>
        </Container>
      </>
    )
  }

  export default CariMobil;