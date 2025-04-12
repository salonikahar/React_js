import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IoIosStarOutline, IoIosStar } from "react-icons/io";

function Review() {
    let proData = useParams();
    let [product, setProduct] = useState({});
    let [star, setStar] = useState([1, 2, 3, 4, 5]);
    let [reviewStar, setReviewStar] = useState(-1)

    useEffect(() => {

        getProduct()
    }, [setProduct])

    let getProduct = async () => {
        let proDetails = await fetch("http://localhost:3000/products/" + proData.ProductId)
        let data = await proDetails.json();
        setProduct(data)
    }

    return (
        <>
            <h3>{product.title} Review</h3>
            <form >
                <label>Enter Your Name :</label>
                <input type="text" name="name" />
                <div>
                    {star.map((v, i) => {
                        return (
                            // <IoIosStarOutline onMouseOver={() => setReviewStar(i + 1)} 
                            // style={{color : reviewStar> i ? 'yellow' : ""}} />
                            <span
                                key={i}
                                onMouseOver={() => setReviewStar(i + 1)}
                            >
                                {reviewStar > i ? <IoIosStar color="yellow" /> : <IoIosStarOutline color="gray" />}
                            </span>
                        );
                    })}

                </div>
            </form>
        </>
    )
}

export default Review
