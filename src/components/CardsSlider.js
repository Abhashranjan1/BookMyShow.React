import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function CardsSlider() {
  return (
    <div style={{background:"grey", padding:"5%"}}>
        <Carousel indicators={false} >
            <Carousel.Item >
                <CardGroup style={{display:"flex", gap:"40px", justifyContent:"space-around"}}>
                    <Card className="bg-light text-white" style={{height:"300px", width:"300px"}}>
                        <Card.Img src="./chehra.png" alt="Card image" style={{height:"300px", width:"350px"}}/>
                        <Card.ImgOverlay>
                            <Card.Title>CHEHRE</Card.Title>
                            <Card.Text>Most Watched
                            </Card.Text>
                            <Card.Text>Just updated</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="bg-light text-black" style={{height:"300px", width:"300px"}}>
                        <Card.Img src="./movies.png" alt="Card image" style={{height:"300px", width:"350px"}}/>
                        <Card.ImgOverlay>
                            <Card.Title>TERA MASOOM CHEHRA</Card.Title>
                            <Card.Text>
                            </Card.Text> 
                            <Card.Text>Just updated</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="bg-dark text-white" style={{height:"300px", width:"300px"}}>
                        <Card.Img src="./movies.png" alt="Card image" style={{height:"300px", width:"350px"}}/>
                        <Card.ImgOverlay>
                            <Card.Title>TERA MASOOM CHEHRA</Card.Title>
                            <Card.Text>
                            </Card.Text>
                            <Card.Text>Just updated</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </CardGroup>
            </Carousel.Item>
            <Carousel.Item>
                <CardGroup style={{display:"flex", gap:"40px", justifyContent:"space-around"}}>
                    <Card className="bg-dark text-white" style={{height:"300px", width:"300px"}}>
                        <Card.Img src="./chehra.png" alt="Card image" style={{height:"300px", width:"350px"}}/>
                        <Card.ImgOverlay>
                            <Card.Title>CHEHRE</Card.Title>
                            <Card.Text>
                            </Card.Text>
                            <Card.Text>Just updated</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="bg-dark text-white" style={{height:"300px", width:"300px"}}>
                        <Card.Img src="./movies.png" alt="Card image" style={{height:"300px", width:"350px"}}/>
                        <Card.ImgOverlay>
                            <Card.Title>TERA MASOOM CHEHRA</Card.Title>
                            <Card.Text>
                            </Card.Text>
                            <Card.Text>Just updated</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="bg-dark text-white" style={{height:"300px", width:"300px"}}>
                        <Card.Img src="./movies.png" alt="Card image" style={{height:"300px", width:"350px"}}/>
                        <Card.ImgOverlay>
                            <Card.Title>TERA MASOOM CHEHRA</Card.Title>
                            <Card.Text>
                            </Card.Text>
                            <Card.Text>Just updated</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </CardGroup>
            </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default CardsSlider;
