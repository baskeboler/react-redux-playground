import React from "react";
import {Button, FormControl, InputGroup} from "react-bootstrap";
import {Giphy} from "./search";

const Input = ({value, showModal, onselect, ref})=> {
    let currentValue = value;
    let giphy = () => {
        showModal(<Giphy select={(image) => {
            currentValue = image.images.original.url;
            onselect(currentValue);
        }}/>, () => {
            console.log('closing modal, getting selection');

        });
    };
    return (
        <InputGroup>
            <FormControl inputRef={ref} onChange={(e) => currentValue = e.target.value} value={currentValue}></FormControl>
            <InputGroup.Button>
                <Button onClick={giphy}>Giphy</Button>
            </InputGroup.Button>
        </InputGroup>
    )
};
export default Input;