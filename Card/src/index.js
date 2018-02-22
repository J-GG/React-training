import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import cards from "./data.js";


class Card extends React.Component {

    constructor(props) {
        super(props);
        this.toggleLike = this.toggleLike.bind(this);
        this.state = {
            nbLikes: props.nbLikes,
            isLiked: props.isLiked,
            isCommentsOpen: false
        };
    }

    toggleLike() {
        if (this.state.isLiked) {
            this.setState({
                nbLikes: this.state.nbLikes - 1,
                isLiked: false
            });
        } else {
            this.setState({
                nbLikes: this.state.nbLikes + 1,
                isLiked: true
            });
        }
    }

    render() {
        let likePicture = this.state.isLiked ? "http://i.imgur.com/rzmv6N6.png" : "http://i.imgur.com/iPhyYk7.png";

        return (
            <div className="card">
                <img src={this.props.image} className="card-image" alt="Card"/>
                <div className="card-body">
                    <div className="card-date">{this.props.date}</div>
                    <div className="card-content">
                        <h1 className="card-title">{this.props.title}</h1>
                        <div className="card-abstract">{this.props.abstract}</div>
                    </div>
                    <div className="card-footer">
                        <div className="card-author">
                            <img className="card-author--picture" src={this.props.authorPicture} alt="author"/>
                            <div className="card-author--name">{this.props.author}</div>
                            <div className="card-time">{this.props.time} min.</div>
                        </div>
                        <div className="card-buttons">
                            <div className="card-like-button">
                                <img className="card-buttons--picture" src={likePicture} alt="heart" onClick={this.toggleLike}/> {this.state.nbLikes}
                            </div>
                            |
                            <div className="card-comment-button">
                                <label htmlFor={"show-comments-" + this.props.id}>
                                    <img className="card-buttons--picture" src="http://i.imgur.com/w9zMniq.png" alt="comment"/> {this.props.comments.length}
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <div className="list-card">
        {
            cards.map((card, index) =>
                <Card
                    key={index}
                    id={index}
                    date={card.date}
                    image={card.image}
                    title={card.title}
                    abstract={card.abstract}
                    author={card.author}
                    authorPicture={card.authorPicture}
                    time={card.time}
                    nbLikes={card.nbLikes}
                    isLiked={card.isLiked}
                    comments={card.comments}
                />
            )
        }
    </div>,
    document.getElementById('root')
);
