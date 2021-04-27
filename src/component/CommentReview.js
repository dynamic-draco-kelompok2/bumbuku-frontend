import React from 'react'
import { Row, Col } from "react-bootstrap";
import { RatingStar } from "rating-star";

function CommentReview(props) {
    return (
        <>
        {props.item.map(item => (
            <Col key={item._id} xs={11} className="mt-3 px-3">
            <Row>
                <Col xs={12} lg={2}>
                    <div className="tw-font-bold tw-font-opensans tw-mt-2 tw-text-base">{item.username}</div>
                </Col>
                <Col xs={12} lg={9}>
                    <RatingStar
                        clickable={false}
                        maxScore={5}
                        id={item._id}
                        rating={parseInt(item.rating)}
                        classname=""
                    />
                    <div className="tw-font-opensans ml-3 mt-3">{item.comment}</div>
                </Col>
            </Row>
            <div className="linePlaceOrder"></div>
            </Col>
        ))}
        
        </>
    )
}

export default CommentReview
