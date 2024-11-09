// Function to create an identity matrix of a given order
function Identity(order) {
    I = [];
    for (let i = 0; i < order; i++) {
        let identity = [];
        for (let j = 0; j < order; j++) {
            identity.push(i === j ? 1 : 0);
        }
        I.push(identity);
    }
    return I;
}

