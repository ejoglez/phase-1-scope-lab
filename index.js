var customerName = "bob";

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
}

function setBestCustomer(){
    bestCustomer = "not bob"

    return bestCustomer;
}

function overwriteBestCustomer(){
    var newBestCustomer = "maybe bob";

    bestCustomer = newBestCustomer;
    return newBestCustomer;
}

const leastFavoriteCustomer = "Bob";

function changeLeastFavoriteCustomer(){
    var newLeastFavoriteCustomer = "not bob"

    leastFavoriteCustomer = newLeastFavoriteCustomer;
    
    return newLeastFavoriteCustomer;
}