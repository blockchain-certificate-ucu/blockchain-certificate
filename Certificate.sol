pragma solidity ^0.4.25;

contract Certificate {
    struct User {
        uint id;
        string fullname;
    }
    
    string public title;
    uint public id;
    User public recepient;
    string public date;
    address public givenBy;
    
    constructor(string _title, uint _id, uint userId, string username, string _date) public {
        title = _title;
        id = _id;
        recepient = User(userId, username);
        date = _date;
        givenBy = msg.sender;
    }
}

contract CertificateFactory {
    event CertificateCreated(address certificateAddress);
    
    mapping(uint => address) public CertificateList;
    
    function createCertificate(string title, uint id, uint userId, string username, string date) public {
        address newCertificate = new Certificate(title, id, userId, username, date);
        CertificateList[id] = newCertificate;
        emit CertificateCreated(newCertificate);
    }
}
