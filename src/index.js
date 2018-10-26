const wasKeypressEnter = e => {
    return wasKeypress(e, 13);
};

export const wasKeypress = (e, value) => {

    //check if e even exists
    if (e === null) {
        return false;
    }

    //if this doesn't exist it probably isn't a keypress
    if(typeof e.which === 'undefined') {
        console.log('i am so undefined right now');
        return false;
    }

    if(e.which !== value ) {
        return false;
    }

    //if it makes it here it was probably enter
    return true;
};

export default wasKeypressEnter;