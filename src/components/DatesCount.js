import React from 'react'
// import person from '../data'
import {Row,Col} from 'react-bootstrap'
const DatesCount = ({person}) => {
return (
        <Row className="justify-content-center my-2 dates-count">
            <Col sm="8" className="">
                لديك {person.length} مواعيد اليوم
            </Col>
        </Row>
)
}

export default DatesCount
