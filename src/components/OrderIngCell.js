import OrderSetCell from 'components/OrderSetCell.js';
import Router from 'next/router';
import {manage} from 'api/ordermanage';
import styles from './OrderIngCell.module.css';

export default function OrderIngCell(props){
    function received(e) {
        manage(props.order._id, "Received")
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
                    <button className={`btn btn-info`} onClick={received}>수령 처리</button>
                </div>
            </div>
        </div>
    );
}