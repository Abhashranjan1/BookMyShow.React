import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Footer() {
  return (
    <div class="foot" style={{background:"black", color:"white"}}>
        <Container fluid>
            <Row style={{padding:"3%"}}>
                <Col xs={{offset:2, span: 4}}>
                <div class="col-lg-6 col-md-8 single-footer-widgets">
                        <h4>Quick Links</h4>
                        <ul>

                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Email</a></li>
                            <li><a href="#">WhatsApp</a></li>
                            <li><a href="#">Quick Book</a></li>
                            <li><a href="#">Resend Booking Confirmation</a></li>
                            <li><a href="#">24*7 Customer Care</a></li>
                            <li><a href="#">Write Us</a></li>
                        </ul>
                        </div>
                </Col>
                <Col xs={4}>
                <div class="col-lg-6 col-md-8 single-footer-widgets">
                        <h4>NewsLetter</h4>
                        <ul>
                            <li><a href="#">Movies Alert</a></li>
                            <li><a href="#">Notification</a></li>
                            <li><a href="#">Upcoming Movies</a></li>
                            <li><a href="#">WhatsApp</a></li>
                            
                        </ul>
                        </div>
                        
                </Col>
                <Col xs={12} style={{display:"flex", flexDirection:"row-reverse"}}>
                    <Button style={{background:"rgb(236, 94, 113)"}}>Contact Today!</Button>
                </Col>
            </Row>
            <Row style={{textAlign:"center", padding:"3%", background:"grey"}}>
                 <text>
                 Follow Us On Social Media
                </text>
                <Col>
                    <div class="container mt-5 mb-5 d-flex justify-content-center">
    <ul class="social-list">
        <li>
            <div class="maincard p-3">
                <div class="thecard">
                    <div class="thefront text-center py-4 facebook" >
                        <div class="social-icon"> <i class="fa fa-facebook fa-2x"></i> </div>
                    </div>
                    <div class="theback py-3 px-3 text-center facebook">
                        <div class="social-text mt-1"> <small class="font-weight-bold">Facebook</small>
                        
                         </div>
                    </div>
                </div>
            </div>
        </li>
        <li>
            <div class="maincard p-3">
                <div class="thecard">
                    <div class="thefront text-center py-4 instagram" src="./instagram.png" >
                        <div class="social-icon"> <i class="fa fa-instagram fa-2x"></i> </div>
                    </div>
                    <div class="theback py-3 px-3 text-center instagram">
                        <div class="social-text mt-1"> <small class="font-weight-bold">Instagram</small> </div>
                    </div>
                </div>
            </div>
        </li>
        <li>
            <div class="maincard p-3">
                <div class="thecard">
                    <div class="thefront text-center py-4 youtube">
                        <div class="social-icon"> <i class="fa fa-youtube fa-2x"></i> </div>
                    </div>
                    <div class="theback py-3 px-3 text-center youtube">
                        <div class="social-text mt-1"> <small class="font-weight-bold">Youtube</small> </div>
                    </div>
                </div>
            </div>
        </li>
        <li>
            <div class="maincard p-3">
                <div class="thecard">
                    <div class="thefront text-center py-4 whatsapp">
                        <div class="social-icon"> <i class="fa fa-whatsapp fa-2x"></i> </div>
                    </div>
                    <div class="theback py-3 px-3 text-center whatsapp">
                        <div class="social-text mt-1"> <small class="font-weight-bold">Whatsapp</small> </div>
                    </div>
                    </div>
                    </div>
                    </li>     
                   </ul>
                  </div>        
                </Col>
            </Row>
            </Container>
        <text class="text-center p-4">
        © Abhash Ranjan: @ 2021
         <a class="text-blue" href="https://www.shapeai.tech/">ShapeAi</a>
         </text>
    </div>
  );
}

export default Footer;