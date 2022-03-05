import styled from "styled-components";


const Container = styled.div`
display:grid;
grid-template-rows: repeat(5, 150px);
margin: 4rem;
padding: 20px;
align-items:center;
justify-content:center;
`
const Row = styled.div`
display:grid;
grid-template-columns: repeat(5, 150px);
margin: 5px;
padding: 20px;
`

interface ICol {
text?: string;
}

const Col = styled.span`
border-radius:15px;
border: 1px solid ${props => props.theme.accentColor};
margin: 5px;
padding: 30px;
width: 100px;
height: 100px;
text-align: center;
font-size:2rem;
`

export function Wordle() {
    return (
        <Container>
            <Row>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
            </Row>
        </Container>
    )
}
    