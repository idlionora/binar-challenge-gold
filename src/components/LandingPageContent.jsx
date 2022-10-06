import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
const iconDropdown = require("../assets/dropdown.png")
import './LandingPageContent.css';
import { CarouselComp } from "./Carousel";
import { useNavigate } from 'react-router-dom';


const ChecklistComp = (props) => {
    return (
        <div className="checklist flex">
            <div className="check-circle flex">
                <img src={require("../assets/checklist.png")} alt="Checklist" className="check-pic" /> 
            </div>
            <p>{props.content}</p>            
        </div>
    )
}

const iconThumb = require("../assets/icon_thumb.png");
const iconPrice = require("../assets/icon_price.png");
const iconHrs = require("../assets/icon_24hrs.png");
const iconProfessional = require("../assets/icon_professional.png");  

const CardComp = (props) => {  
    return (
        <Card className="why-card p-4">
                <img src={props.iconSource} alt={props.title} className="why-card_icon" />
            <Card.Body className="why-card_text p-0">
                <Card.Title className="card-title">{props.title}</Card.Title>
                <Card.Text>{props.content}</Card.Text> 
            </Card.Body>
        </Card>
    )
}

const DropdownComp = (props) => {
    return (
        <Dropdown>
            <Dropdown.Toggle className="dropdown-question">
                {props.title}
                <img src={iconDropdown} className="dropdown-icon" alt="dropdown"/>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-answer">
                <Dropdown.ItemText>
                    {props.content}
                </Dropdown.ItemText>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export const LandingPageComp = () => {
    const navigate = useNavigate();
    return (
        <>
        <Container fluid className="site-container p-0">
            <Row id="our_services">
                <Col md={6} className="service-pic_container flex-column">
                    <div className="service-pic">
                    <img src={require("../assets/service-img.png")} alt="Happy Girl" id="service-img" />                   
                    </div>
                </Col>
                <Col md={6} className="service-text_container flex-column">
                    <div className="service-text">
                        <h2>Best Car Rental for any kind of trip in (Lokasimu)!</h2>
                        <p className="desc">Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                        <div className="checklist_container flex-column">
                            <ChecklistComp content="Sewa Mobil Dengan Supir di Bali 12 Jam"/>
                            <ChecklistComp content="Sewa Mobil Lepas Kunci di Bali 24 Jam"/>
                            <ChecklistComp content="Sewa Mobil Jangka Panjang Bulanan"/>
                            <ChecklistComp content="Gratis Antar - Jemput Mobil di Bandara"/>
                            <ChecklistComp content="Layanan Airport Transfer / Drop In Out"/>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row id="why_us">
                <h2>Why Us?</h2>
                <p className="desc">Mengapa harus pilih Binar Car Rental?</p>
                <div className="flex why-card_container">    
                    <CardComp iconSource={iconThumb} title="Mobil Lengkap"
                    content="Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat"/>
                    <CardComp iconSource={iconPrice} title="Harga Murah"
                    content="Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain"/>
                    <CardComp iconSource={iconHrs} title="Layanan 24 Jam"
                    content="Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu"/>
                    <CardComp iconSource={iconProfessional} title="Sopir Profesional"
                    content="Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu"/>
                </div> 
            </Row>
        </Container>
        <div id="testimonial">
            <div className="testimonial-text">
                <h2>Testimonial</h2>
                <p className="desc">Berbagai review positif dari para pelanggan kami</p>
            </div>
            <CarouselComp/>
        </div>
        <Container fluid className="site-container p-0">
            <Row id="rent_now">
                <div className="jumbocard flex-column">
                    <h2>Sewa Mobil di (Lokasimu) Sekarang</h2>
                    <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Button className="mulai-sewa green-button"
                    onClick={()=>{navigate("/cari-mobil")}}>Mulai Sewa Mobil</Button>
                </div>
            </Row>
            <Row id="faq">
                <Col md={4} className="answer-text">
                    <h2> Frequently Asked Question</h2>
                    <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </Col>
                <Col md={8} className="answer-column flex">
                    <div className="dropdown_container flex-column">
                        <DropdownComp 
                        title="Apa saja syarat yang dibutuhkan?"
                        content="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                        />
                        <DropdownComp 
                        title="Berapa hari minimal sewa mobil lepas kunci?"
                        content="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Et harum quidem rerum facilis est et expedita distinctio."
                        />
                        <DropdownComp 
                        title="Berapa hari sebelumnya sabaiknya booking sewa mobil?"
                        content="Ut dictum eleifend lectus, et placerat tortor sagittis et. Vivamus interdum dui metus, sed pretium velit congue eget. Curabitur cursus libero ac lorem placerat sagittis. Curabitur rutrum nulla augue, volutpat lobortis massa fermentum eu."
                        />
                        <DropdownComp 
                        title="Apakah Ada biaya antar-jemput?"
                        content="Fusce nec mollis ligula. Morbi nulla ligula, scelerisque quis viverra ac, sagittis id justo. Donec venenatis turpis eu laoreet bibendum. Maecenas non cursus dolor."
                        />
                        <DropdownComp 
                        title="Bagaimana jika terjadi kecelakaan"
                        content="Donec faucibus scelerisque magna non pellentesque. Mauris auctor dapibus erat, sed facilisis magna lobortis ut. Etiam in nulla in eros gravida pellentesque. Fusce interdum nunc in dapibus congue."
                        />
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}