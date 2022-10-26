import {Container, Row, Col, Alert, Figure, Button, Badge, Breadcrumb, Card, CardGroup} from 'react-bootstrap';

function App() {
  return (
    <div>
     
      <Container fluid style = {{marginTop : '15px'}}>
        <Row>
          <Col>
            <Alert variant="primary">
              Website React Bootstrap
            </Alert>
          </Col>

          <Col></Col>

          <Col md="auto">
            <Button variant="primary">Notifications <Badge bg="light" text="dark">9</Badge></Button>
            <Button variant="primary">Message <Badge bg="light" text="dark">19</Badge></Button>
          </Col>

          <Col md="auto">
            <Figure>
              <Figure.Image
                width={40}
                height={40}
                alt="Gambar"
                src="https://banner2.kisspng.com/20180420/kuq/kisspng-computer-icons-user-clip-art-my-vector-5ad9a348cd2ce1.8035052415242125528404.jpg"
              />
            </Figure>
          </Col>

          <Col xs lg="2">
            <h4>Andreas</h4>
          </Col>
        </Row>
        <Row >
          <Col ></Col>
          <Col sm={4}>
            <Breadcrumb style={{backgroundColor: '#e9ecef', padding: '5px'}}>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="">Berita</Breadcrumb.Item>
              <Breadcrumb.Item active>Bola</Breadcrumb.Item>
            </Breadcrumb>
          </Col>        
        </Row>


        <Row style={{marginTop : '15px'}} >
          <Col></Col>
          <Col md='auto'>
            <CardGroup>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/f7/ad/diego-godin-vs-thailand_l9viaa2o7afh19gjl6vnekbgq.jpg?t=-1214473334&w=1920&h=1362&quality=100" />
                <Card.Body>
                  <Card.Title>Diego Goding Ukir Rekor Spesial Lawan Thailand</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600" />
                <Card.Body>
                  <Card.Title>Neymar Bahas Kontrak Baru Di Paris Saint-German</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>

              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600" />
                <Card.Body>
                  <Card.Title>Inggris Mau Jadi Tim Terbaik Di Dunia</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>

              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600" />
                <Card.Body>
                  <Card.Title>Sani Rizki Fauzi Tegaskan Mental Pemain Timnas Indonesia</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </CardGroup>
          </Col>
          <Col></Col>

        </Row>
      </Container>
    </div>
  );
}

export default App;
