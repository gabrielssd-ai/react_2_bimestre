import { Col, Row, Table } from 'react-bootstrap'
import Pagina from '../components/Pagina'

export default function page() {

    const carros = ["HB20", "Palio", "Civic", "Argo", "Onix"]

    


    return (
        <Pagina titulo="Listas">

            <Row>
                <Col>
                    {carros.map(carro => {
                        return <p>{carro}</p>
                    })}
                </Col>
                <Col>
                    <ul>
                        {carros.map(carro => {
                            return <li>{carro}</li>
                        })}
                    </ul>
                </Col>
            </Row>

            <Row>
                <Table striped bordered hover>
                    <thead className="table-primary">
                        <tr>
                            <th>Carro</th>
                        </tr>
                    </thead>
                    <tbody>
                        {carros.map(carro => {
                            return (
                                <tr>
                                    <td>{carro}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>

            </Row>




        </Pagina>
    )
}
