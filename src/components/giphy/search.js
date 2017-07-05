import React from 'react';
import {
  Button,
  Col,
  Form,
  FormControl,
  Glyphicon,
  Grid,
  InputGroup,
  Row,
  Thumbnail
} from 'react-bootstrap';
import Masonry from 'react-masonry-component';
import { selectGiphy, showModal } from '../../actions/actions';
import { connect } from 'react-redux';
import './giphy.css';
import { searchGiphy } from '../../services';

export class Giphy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      loading: false
    };
    this.val = '';
    Giphy.imageList = Giphy.imageList.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  // let val, images ;
  static imageList(imgs) {
    return (
      <Masonry updateOnEachImageLoad={true}>
        {imgs.map((image, i) =>
          <Thumbnail
            style={{
              display: 'block',
              backgroundColor: 'rgba(0,0,0,.1)',
              width: image.images.fixed_width.width,
              height: image.images.fixed_width.height
            }}
            src={image.images.fixed_width.url}
            onClick={() => this.props.select(image)}
            key={i}
          />
        )}
      </Masonry>
    );
  }

  handleSearch(e) {
    e.preventDefault();
    this.setState({
      loading: true,
      images: []
    });
    searchGiphy(this.val)
      .then(res => res.data)
      // .then(res => this.imageList(res))
      .then(imgs => {
        console.log(imgs);
        //images = imgs;
        this.setState({ images: imgs, loading: false });
        //imgs.forEach(i => images.push(i))
      });
  }

  render() {
    let imageGrid = Giphy.imageList(this.state.images);
    let loading = this.state.loading ? <Glyphicon glyph="refresh" /> : [];

    return (
      <Form onSubmit={this.handleSearch}>
        <InputGroup>
          <FormControl
            type="text"
            onChange={e => (this.val = e.target.value)}
          />
          <InputGroup.Button>
            <Button type="submit">Search</Button>
          </InputGroup.Button>
        </InputGroup>
        {loading}
        {imageGrid}
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showModal: message =>
      dispatch(
        showModal({
          type: 'information',
          title: 'information',
          message: message
        })
      ),
    select: image => dispatch(selectGiphy(image))
  };
};

export const GiphyContainer = connect(null, mapDispatchToProps)(Giphy);

export default () =>
  <Grid>
    <Row>
      <Col sm={10} smOffset={1}>
        <GiphyContainer />
      </Col>
    </Row>
  </Grid>;
