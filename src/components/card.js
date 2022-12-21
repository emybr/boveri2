import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import  {data}  from './data';
import { Link } from "react-router-dom";


function BasicExample() {
    return (
        <div className='container tarjeta' >
            {data.map((item) => (
            <Card className='item' key={item.id} style={{ width: '18rem'} }>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                    <Card.Title className='item'>{item.nameProduct}</Card.Title>
                    <Card.Text className='item' >
                    {item.descripcion}
                    </Card.Text>
                    <Card.Text className='item' >
                    $ {item.price}
                    </Card.Text>
                    <Link to={`/comprar/comprar/${item.id}`}>
                        <Button  variant="primary">Detalle</Button>
                    </Link>
                </Card.Body>
            </Card>
            ))}
        </div>
    );
}


export default BasicExample;