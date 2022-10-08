import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import '../App.css';
import { BannerComp } from '../components/Header';
import { CariMobilComp, HasilPencarianComp, HasilPencarianTab } from '../components/CariMobilPageContent';


const CariMobil = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [chosenFilter, setChosenFilter] = useState({
    name: "", category: "", price: "", status: false});
  const [filteredData, setFilteredData] = useState([]);
  
  async function getCarData() {
    try {
      setIsLoading(true)
      const response = await axios.get('https://bootcamp-rent-car.herokuapp.com/admin/car');
      const dataWithImage = response.data.filter(item => item.image !== null);
      setFetchedData(dataWithImage);
      setFilteredData(dataWithImage);
      setIsLoading(false);
    } catch (error) {
      console.error(error.message);
      setIsError(true)
    }
  }
  useEffect(() => {
    getCarData()    
  }, []);

  function handleSubmitFilter(submittedFilter) {
    setChosenFilter(submittedFilter);
    setIsSearching(true);
  }

  function handleEditFilter() {
    setIsSearching(false);
    setChosenFilter({
      name: "", category: "", price: "", status: false});
  }

  useEffect(() => {
  // console.log("chosenFilter&isSearching; useEffect[chosenFilter]:", chosenFilter, "and", isSearching)
    const filterPass = chosenFilter;
    let carList = fetchedData;

    if (chosenFilter.name.length > 0){
      carList = carList.filter(
        carTab => carTab.name.toLowerCase().includes(
          filterPass.name.toLowerCase()
      ))
    }
    if (chosenFilter.category.length > 0){
      carList = carList.filter(
        carTab => carTab.category == filterPass.category)
    }

    if (chosenFilter.price.length > 0){
      if (chosenFilter.price == "< Rp. 400.000"){
        carList = carList.filter(carTab => carTab.price < 400000)
      } else if (chosenFilter.price == "> Rp. 600.000"){
        carList = carList.filter(carTab => carTab.price > 600000)
      } else { carList = carList.filter(
        carTab => carTab.price > 400000 && carTab.price < 600000)
      }
    }
    carList = carList.filter(carTab => carTab.status == filterPass.status)
    setFilteredData(carList)
  }, [chosenFilter])

  // useEffect(() => {
  //   //for testing
  //   console.log("filteredData; useEffect[filteredData]:", filteredData);
  // }, [filteredData])

    return (
      <>
        <header className={!!isSearching ? "search-mode" : ""}>
          {!isSearching && <BannerComp noButton/>}
        </header>
        <Container fluid className="site-container p-0 page-container">
          <Row className='cari-mobil_container'>
            {!isSearching ? 
            <CariMobilComp handleSubmitFilter={handleSubmitFilter}/> :
            <HasilPencarianComp handleEditFilter={handleEditFilter} chosenFilter={chosenFilter}/>}
          </Row>
          <Row className={`hasil-pencarian_container flex ${!!isSearching && "search-mode"}`}>
            {!!isError ? <h2 style={{textAlign:"center"}}>Mohon maaf, data tidak dapat dimuat.</h2> :
            !!isLoading && <h2 style={{textAlign:"center"}}>Memuat data mobil, mohon tunggu sebentar...</h2>}
            {filteredData.map(carTab => <HasilPencarianTab carData={carTab} key={carTab.id}/>)}
          </Row>
        </Container>
      </>
    )
  }

  export default CariMobil;