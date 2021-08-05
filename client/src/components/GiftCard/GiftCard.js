import React, { useEffect, useState } from 'react';
import './GiftCard.css';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import { MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardText, MDBCardFooter, MDBTooltip } from 'mdbreact';
import { useStateValue } from '../StateProvider/StateProvider';
function GiftCard() {
    const [modalVisible, setModalVisible] = useState(false);
    const [value, setValue] = useState({
        image: '',
        title: '',
    })
    const amountError = () => {
        setValue({ ...value, Status: 'Out Of Stock' })
    }
    const [{ basket }, dispatch] = useStateValue()
    const [giftCardItems,setGiftCardItems]=useState();
    const addToBasket = (item, value) => {
        debugger
        setValue({ ...value, status: 'In Cart' })
        dispatch({
            type: 'ADD_TO_BASKET',
            payload: {
                amountError: amountError,
                arrName: 'GiftCards',
                items:giftCardItems,
                item: {
                    id: item.id,
                    title: item.title,
                    image: item.image,
                    price: item.price,
                    description: item.description,
                    amount: 1
                }
            }
        })
        debugger
    }
    function show(title, image) {
        setModalVisible(true);
        setValue({ title: title, image: image })
    }

    function hide() {
        setModalVisible(false);
    }
    useEffect(()=>{
        fetch("http://localhost:3000/GiftCards/getAllGiftCard", {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        "access-control-allow-origin": "*",
        },})
        .then(res=>res.json())
        .then((res)=> {
            setGiftCardItems(res) })
  },[])
    return (
        <>
            <section>
                <h2 className='h1-responsive font-weight-bold text-center my-5'>Our GiftCards</h2>
                <p className='grey-text text-center w-responsive mx-auto mb-5'>
                    For the holiday, for a birthday just for a day of sand, the ultimate gift for the lovers of your hearts .... because who doesn't like flowers ??
                </p>
                <div className="cards">
                    {giftCardItems && giftCardItems.map((i,index) => {
                        let image = require('../../image/GiftCards/' + `${i.image}`)
                        return (
                        <Card item={i} image={image.default} show={show} addToBasket={addToBasket} basket={basket} />
                        );
                    }
                    )}
                </div>
            </section>
            <Rodal width={600} height={625} visible={modalVisible} onClose={hide.bind(this)}>
                <div className="modal">
                    <h1 className="text-center">{value.title}</h1>
                    <img src={value.image} alt=""/>
                </div>
            </Rodal>
        </>

    )
}

export default GiftCard;

function Card(props) {
    const { item, image, show, basket, addToBasket } = props
    const [visible, setVisible] = useState(true);
    useEffect(() => {
    if (item.amount === 0) setVisible(false)
        basket.forEach(_item => item.id === _item.id && setVisible(false))
    }, [])

    return (
        <MDBCol lg='4' md='10' className='mb-lg-0 mb-4'>
            <MDBCard className="gift-wrap" wide ecommerce>
                <MDBCardImage
                    cascade
                    src={image}
                    top
                    alt=''
                />
                <MDBCardBody cascade className='text-center'>
                    <h5>{item.title}</h5>
                    <MDBCardText>{item.text}</MDBCardText>
                    <MDBCardFooter className='px-1'>
                        <span className='float-left font-weight-bold'>
                            <strong>${item.price}</strong>
                        </span>
                        <span className='float-right'>
                            <button className=" btn "
                                onClick={() => show(item.title, image)}>
                                <MDBTooltip domElement placement='top'>
                                    <i class="fas fa-eye"></i>
                                    <span >Quick Look</span>
                                </MDBTooltip>{' '}</button>
                            <button disabled={!visible} className="btn"
                                onClick={() => { setVisible(false); addToBasket(item) }} ><MDBTooltip domElement placement='top'>
                                    <i class="fas fa-shopping-cart"></i>
                                    <span>Add To Cart</span>
                                </MDBTooltip></button>
                        </span>
                    </MDBCardFooter>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    )
}