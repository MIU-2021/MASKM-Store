import {postReviewForproduct} from "../../../services/Reviews.Services";

let selectedStar=0;
let boxtext="";
let productid = 0;
class ReviewForm extends React.Component {

    constructor(props) {
        {console.log()}
        super(props);
        this.state = {
            label: null,
            hoverStar: 0,
            selectedStar: 4,
        };
    }


    handleClick() {
        let datas1 = {comment: boxtext, stars: selectedStar};
        postReviewForproduct(datas1 , productid  ).then(response => {
            //console.log("review return",response);
            //setData(response);
            //setLoading(false);
            //return response.data;
        }).catch((error) => {
            console.log(error);
        });
    }

    renderStar(item, index) {
        let hoverClass = index <= this.state.hoverStar ? 'hover' : '';
        let selectedClass = index <= this.state.selectedStar ? 'selected' : '';
        return <div class="star-wrapper" onClick={() => this.setState({ selectedStar: index })}>
            <svg onMouseEnter={() => this.setState({ hoverStar: index, label: item })} class={`rating-star ${hoverClass} ${selectedClass}`} onMouseLeave={() => this.setState({ hoverStar: null, label: null })} viewBox="0 0 24 24"><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path>
                {selectedStar = this.state.selectedStar}
            </svg>
            <div class="label-wrapper">
                <div class={`star-label ${this.state.label != null && index == this.state.hoverStar && 'visible'}`}>{this.state.label}</div>
            </div>
        </div>
    }

    renderStars() {
        productid = this.props.productid;
        return ['Terrible!','Bad...','Good.','Great...','Excelent!'].map( (item, index) => {
                return this.renderStar(item, index + 1);
            }
        );
    }


    render() {
        return (
            <div class=" reviewboxsubmit main-wrapper">

                {this.renderStars()}
                <form>
                    <label class="review-label" for="review">
                        What do you think about this product?
                    </label>
                    <textarea onChange={(e) => boxtext = e.target.value } id="review" rows={10} type="text" class="review-input"/>

                </form>
                <button className="review-button" onClick={this.handleClick}>Send Review</button>
            </div>
        );
    }
}

//Render App

export default ReviewForm
