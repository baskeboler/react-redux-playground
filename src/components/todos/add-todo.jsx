import React from 'react';
import {
  Button,
  FormControl,
  FormGroup,
  InputGroup,
  Row
} from 'react-bootstrap';
import * as Actions from '../../actions/actions';
import { connect } from 'react-redux';
import { WithContext as ReactTags } from 'react-tag-input';
import { getTags } from '../../selectors/index';

let InputGroupButton = InputGroup.Button;

const AddTodo = ({ addTodo, addTag, tagSuggestions }) => {
  let value;
  let tags = [];
  let suggestions = tagSuggestions;
  const handleAddition = tag =>
    tags.push({
      id: tags.length + 1,
      text: tag
    });
  const handleDelete = i => tags.splice(i, 1);
  const handleAddTodo = () => {
    tags.forEach(tag => addTag(tag.text));
    addTodo({ text: value, tags: tags.map(t => t.text) });
    suggestions = tagSuggestions;
  };

  return (
    <Row>
      <InputGroup>
        <FormControl
          type="text"
          onChange={e => (value = e.target.value)}
          placeholder="what needs to be done?"
        />
        <InputGroupButton>
          <Button onClick={handleAddTodo} bsStyle="primary">
            Add
          </Button>
        </InputGroupButton>
      </InputGroup>
      <FormGroup>
        <ReactTags
          tags={tags}
          handleAddition={handleAddition}
          handleDelete={handleDelete}
          suggestions={suggestions}
        />
      </FormGroup>
    </Row>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    addTodo: text => dispatch(Actions.addTodo(text)),
    addTag: text => dispatch(Actions.addTag(text))
  };
};
const mapStateToProps = state => {
  return {
    tagSuggestions: getTags(state)
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
