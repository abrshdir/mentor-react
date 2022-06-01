import React, {Component} from 'react';
// import {Modal} from "bootstrap";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

class BaseDialog extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {/*<Modal>*/}
                {/*    <Modal.Header closeButton>*/}
                {/*        <Modal.Title>Modal title</Modal.Title>*/}
                {/*    </Modal.Header>*/}

                {/*    <Modal.Body>*/}
                {/*        <p>Modal body text goes here.</p>*/}
                {/*    </Modal.Body>*/}

                {/*    <Modal.Footer>*/}
                {/*        <Button variant="secondary">Close</Button>*/}
                {/*        <Button variant="primary">Save changes</Button>*/}
                {/*    </Modal.Footer>*/}
                {/*</Modal>*/}
                <Modal toggle={function noRefCheck(){}}>
                    <ModalHeader toggle={function noRefCheck(){}}>
                        Modal title
                    </ModalHeader>
                    <ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            color="primary"
                            onClick={function noRefCheck(){}}
                        >
                            Do Something
                        </Button>
                        {' '}
                        <Button onClick={function noRefCheck(){}}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default BaseDialog;
