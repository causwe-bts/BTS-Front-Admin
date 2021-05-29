import OrderSetCell from 'components/OrderSetCell.js';
import Router from 'next/router';
import {manage} from 'api/ordermanage';
import styles from './OrderRequestedCell.module.css';

export default function OrderRequestedCell(props){
    function accept(e) {
        manage(props.order._id, "Cooking")
        .then(()=>{
            Router.reload();
        })
    }
    function reject(e) {
        manage(props._id, "Received")
        .then(()=>{
            Router.reload();
        })
    }
    return (
        <div className={`container`}>
            <div className={`row`}>
                <div className={`col`}>
                    <OrderSetCell orderset={props.order} className={styles.order} key={props.order.orderer} />
                </div>
                <div className={`col`}>
                    <button className={`btn btn-success`} onClick={accept}>수락</button>
                    <button className={`btn btn-danger`} onClick={reject}>거절</button>
                </div>
            </div>
        </div>
    );
}