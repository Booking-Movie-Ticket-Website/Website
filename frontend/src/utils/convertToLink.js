function convertToLink(name) {
    return name.toLowerCase().replace(/\s/g, '-');
}

export default convertToLink;
