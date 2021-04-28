import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom'
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from 'react-helmet'
import { Container, Row, Col, Button, Toast, Spinner, Form } from "react-bootstrap";
import { RatingStar } from "rating-star";

// import { postComment } from '../redux/actions/commentproduk.actions';
// import { putBumbuById } from '../redux/actions/bumbuproduk.actions';
import { deleteReview, getReviewByID } from '../redux/actions/review.action';

function ReviewProdukPage() {
    let { id } = useParams();
	const history = useHistory();
	const dispatch = useDispatch();
    const review = useSelector((state) => state.handleReview);
    const reviewByID = useSelector((state) => state.handleReview.dataByID);
    // const dataReviewByID = review.data[review.data.findIndex(item => item._id === id)];
    const [rating, setRating] = React.useState(0);
	const [alert, setAlert] = useState({
		rating: "d-none",
		review: "d-none",
		status: false
	})

    const [show, setShow] = useState({
        valid: false,
        title: "",
        text: "",
    });

    const onRatingChange = (score) => {
        setRating(score);
		setAlert({...alert, rating: "d-none"});
      };

	const handleReview = (e) => {
		e.preventDefault();
		if(rating === 0){
			setAlert({...alert, rating: ""});
		}
		else if(e.target.reviewWord.value.split(" ").length < 3 ){
			setAlert({...alert, review: ""});
		}
		else{
			const dataComment = {
				bumbuProduk_id: reviewByID.bumbuProduk_id._id,
				username: JSON.parse(localStorage.payload).name,
				comment: e.target.reviewWord.value,
				rating: rating
			}

			const dataBumbu = {
				overal_star: ((reviewByID.bumbuProduk_id.overal_star * reviewByID.bumbuProduk_id.total_review) + rating) / (reviewByID.bumbuProduk_id.total_review+1),
				total_review: reviewByID.bumbuProduk_id.total_review + 1
			}

			dispatch(deleteReview(reviewByID._id, setShow, dataComment, reviewByID.bumbuProduk_id._id, dataBumbu));
			setAlert({...alert, status: true})
		}
	}

	if(reviewByID === ""){
		history.push('/');
	}

	useEffect(() => {
		dispatch(getReviewByID(id));
	}, [dispatch, id])

    return (
        <>
        <Helmet>
			<meta charSet="utf-8"/>
			<title>Bumbuku - Review Product</title>
			<meta name="description" content="about"/>
      	</Helmet>
        {review.isLoadingByID === true || reviewByID === "" ?
            <div className="tw-w-screen tw-h-screen tw-bg-black tw-opacity-50 tw-fixed tw-top-0 tw-left-0 hidden md:flex tw-z-30">
                <div className="h-100 d-flex align-items-center justify-content-center">
					<Spinner className="" animation="border" variant="warning"/>
                </div>
            </div>
        :
        <Container className="h-footer">
            <Row className="d-flex justify-content-center">
				<Toast className="my-toast" onClose={() => setShow({...show,valid:false})} show={show.valid} delay={9000} autohide>
				<Toast.Header className="tw-bg-base text-white">
					<img
					src="holder.js/20x20?text=%20"
					className="rounded mr-2"
					alt=""
					/>
					<strong className="mr-auto">{show.title}</strong>
				</Toast.Header>
				<Toast.Body className="f-bold">{show.text}</Toast.Body>
				</Toast>
            </Row>
            <Row className="mx-2 tw-mt-10 tw-mb-10">
                <Col xs={12} lg={6}>
					<img
						src={reviewByID.bumbuProduk_id.image}
						alt="gambar"
						className="tw-rounded tw-w-full tw-h-48 tw-object-cover md:tw-h-96 lg:tw-max-w-md lg:tw-h-72"
					/>
				</Col>
				<Col xs={12} lg={6}>
					<div>
						<h3 className="tw-font-opensans tw-pt-2 tw-mb-1 tw-font-bold">
							{reviewByID.bumbuProduk_id.name}
						</h3>
					</div>
					<div className="tw-flex tw-flex-col tw-border-t tw-border-grey tw-mt-4 tw-py-2">
						<span className="tw-font-opensans tw-font-bold">
							Description:
						</span>
						<span className="tw-font-opensans">
							{reviewByID.bumbuProduk_id.description}
						</span>
					</div>
				</Col>
				{alert.status ? 
				<Col xs={12} className="mt-3">
					Terima kasih telah memberi review
				</Col>
				:
				
				<Col xs={12} className="mt-3">
					<div className="tw-font-opensans tw-pt-2 tw-mb-1 tw-font-bold">
						Rating
					</div>

					<RatingStar
						clickable
						maxScore={5}
						id="123"
						rating={rating}
						onRatingChange={onRatingChange}
					/>

					<div className={`text-danger ${alert.rating}`}>
						Silahkan berikan rating
					</div>

					<div className="tw-font-opensans tw-pt-2 tw-mb-1 tw-font-bold mt-3">
						Review
					</div>
					<Form onSubmit={(e) => handleReview(e, )}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control required 
                          className="rounded-3xl" 
                          type="text" 
                          placeholder="Tulis review anda untuk produk ini"
                          name="reviewWord"/>
                    </Form.Group>
					<div className={`text-danger ${alert.review}`}>
						Silahkan berikan review minimal 3 kata
					</div>
					<Button type="submit" variant="primary" className="mt-3 tw-bg-base tw-border-base tw-shadow-base">
                        Submit
                    </Button>
					</Form>
				</Col>
				}
            </Row>
        </Container>
        }
        </>
    )
}

export default ReviewProdukPage
