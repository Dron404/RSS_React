import React from 'react';
import { IPriduct } from '../Types/interfaces';
import { Image } from 'antd';
import styled from './styled';
import { Link } from 'react-router-dom';
import { ReactComponent as Like } from '../assets/like.svg';

const rateColor = ['black', 'red', '#E35049', '#E5D751', '#74F272', '#00F509'];

class ProductCard extends React.Component<{ data: IPriduct }> {
  state: {
    liked: boolean;
    hover: boolean;
  };

  constructor(props: { data: IPriduct }) {
    super(props);
    this.state = {
      liked: false,
      hover: false,
    };
  }

  likeHandler = () => this.setState({ liked: !this.state.liked });
  hoverHandler = () => {
    this.setState({ hover: !this.state.hover });
  };
  boxShadow() {
    return this.state.hover ? { boxShadow: '2px 10px 8px 0px rgba(34, 60, 80, 0.2)' } : {};
  }
  render() {
    return (
      <div
        style={{
          ...styled.productWrapper,
          flexDirection: 'column',
          ...this.boxShadow(),
        }}
        onMouseEnter={this.hoverHandler}
        onMouseLeave={this.hoverHandler}
      >
        <Image src={this.props.data.image} width={'40%'} height={'60%'} />
        <div style={styled.productPrice}>{`${this.props.data.price}$`}</div>
        <div style={styled.productInfo}>
          <div style={styled.productName}>{this.props.data.title}</div>
          <div style={styled.productText}>
            Category: <Link to="">{` ${this.props.data.category}`}</Link>
          </div>
          <div
            style={{
              ...styled.productText,
            }}
          >
            Raiting:
            <span style={{ color: `${rateColor[Math.floor(this.props.data.rating.rate)]}` }}>
              {` ${this.props.data.rating.rate}`}
            </span>
          </div>
          <Like
            style={styled.like}
            fill={this.state.liked ? '#FF7979' : '#808080'}
            height={25}
            width={25}
            onClick={this.likeHandler}
          />
        </div>
      </div>
    );
  }
}

export default ProductCard;
