import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './feedItems.scss';

function FeedItems(props) {
    return (
        <div className="feedItems">
            <div className="feedItems__pro">
                <div className="feedItems__header">
                    <img className="feedItems__img" src={props.img} alt="" />
                    <div className="feedItems__acc">
                        <p className="feedItems__name">{props.name}</p>
                        <FontAwesomeIcon className="feedItems__icon" icon={props.star} />
                        <FontAwesomeIcon className="feedItems__icon" icon={props.star} />
                        <FontAwesomeIcon className="feedItems__icon" icon={props.star} />
                        <FontAwesomeIcon className="feedItems__icon" icon={props.star} />
                        <FontAwesomeIcon className="feedItems__icon" icon={props.star} />
                    </div>
                </div>
                <div className="feedItems__body">
                    <p className="feedItems__content">
                        {props.text}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FeedItems;