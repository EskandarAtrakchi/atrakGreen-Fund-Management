// SPDX-License-Identifier: MIT

pragma solidity ^0.8.14;

contract FundCalculation {
    struct FundRecord {
        address investor;
        //"individual" or "institution"
        string investorType; 
        uint age;
        uint investmentAmount;
        uint riskLevel;
        uint expectedReturnRate;
        uint projectedReturns;
    }

    FundRecord[] public fundRecords;
    mapping(address => uint[]) public investorRecords;

    event FundRecordLogged(
        address indexed investor,
        string investorType,
        uint age,
        uint investmentAmount,
        uint riskLevel,
        uint expectedReturnRate,
        uint projectedReturns
    );

    function logFundRecord(
        string memory investorType,
        uint age,
        uint investmentAmount,
        uint riskLevel,
        uint expectedReturnRate,
        uint projectedReturns
    ) public {
        fundRecords.push(FundRecord(msg.sender, investorType, age, investmentAmount, riskLevel, expectedReturnRate, projectedReturns));
        uint recordId = fundRecords.length - 1;
        investorRecords[msg.sender].push(recordId);
        emit FundRecordLogged(msg.sender, investorType, age, investmentAmount, riskLevel, expectedReturnRate, projectedReturns);
    }

    function getFundRecord(uint index) public view returns (FundRecord memory) {
        require(index < fundRecords.length, "Fund record does not exist");
        return fundRecords[index];
    }

    function getInvestorRecords(address investor) public view returns (uint[] memory) {
        return investorRecords[investor];
    }
}
