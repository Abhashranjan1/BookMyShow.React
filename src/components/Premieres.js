import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function Premieres() {
  return (
    <div style={{background:"rgb(43, 49, 72)", padding:"5%"}}>
        <h2 style={{color:"white"}}>Premieres</h2>
        <Carousel indicators={false} variant="dark">
            <Carousel.Item >
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src="./chehra.png" src="./chehra.png" alt="Card image" style={{height:"300px", width:"350px"}} />
                        <Card.Body>
                        <Card.Title>CHEHRE</Card.Title>
                        <Card.Text>Most viewed
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="./movies.png" src="./movies.png" alt="Card image" style={{height:"300px", width:"350px"}} />
                        <Card.Body>
                        <Card.Title>TERA MASOOM CHEHRE</Card.Title>
                        <Card.Text>Most viewed
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="./chehra.png" src="./chehra.png" alt="Card image" style={{height:"300px", width:"350px"}} />
                        <Card.Body>
                        <Card.Title>CHEHRE</Card.Title>
                        <Card.Text>Most viewed
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Carousel.Item>
            <Carousel.Item >
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src="./movies.png" src="./movies.png" alt="Card image" style={{height:"300px", width:"350px"}} />
                        <Card.Body>
                        <Card.Title>TERA MASOOM CHEHRE</Card.Title>
                        <Card.Text>Most viewed
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="./movies.png" src="./movies.png" alt="Card image" style={{height:"300px", width:"350px"}} />
                        <Card.Body>
                        <Card.Title>TERA MASOOM CHEHRE</Card.Title>
                        <Card.Text>Most viewed
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="./chehra.png" src="./chehra.png" alt="Card image" style={{height:"300px", width:"350px"}} />
                        <Card.Body>
                        <Card.Title>CHEHRE</Card.Title>
                        <Card.Text>Most viewed
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default Premieres;
