export default function (e) {

    //check if e even exists
    if (e === null) {
        return false;
    }

    //if this doesn't exist it probably isn't a keypress
    if(typeof e.which === 'undefined') {
        return false;
    }

    if(e.which !== 13 ) {
        return false;
    }

    //if it makes it here it was probably enter
    return true;

};