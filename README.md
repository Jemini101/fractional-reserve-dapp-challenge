# fractional-reserve-dapp-challenge
A `Solidity` & `Node.js` challenge to recreate the legacy financial system on ethereum.

## Getting started
You will need to install the following tools:
- [Git](https://github.com/git-guides/install-git)
- [Node.js](https://nodejs.org/en/download) 
- [Hardhat](https://hardhat.org/tutorial/setting-up-the-environment)

After you have installed these tools, you can fork and clone the repository. I recommend creating a boilerplate hardhat project by following the instructions [here](https://hardhat.org/tutorial/creating-a-new-hardhat-project). 

The contracts should be written in `Solidity` with the `Node.js` part being done in either `JavaScript` or `TypeScript`. 

## The challenge
The traditional banking system uses something called fractional reserve banking. Fractional reserve banking allows banks to issue credit with money that does not exist, but with a set reserve ratio e.g. 10%. For example, a bank could issue $100 worth of loans to somebody for every $10 they receive in deposits. This system creates the phenomenon of "bank runs", a situation where too many depositors try to withdraw at once, exposing the insolvency of the bank. 

In this project we will recreate the system by allowing depositors to deposit their `ETH` in exchange for `BETH` (bank `ETH`), an ERC20 token representing their `ETH` deposit. Depositors are able to withdraw their deposit at anytime by redeeming the `BETH` token for `ETH` at a 1:1 ratio, provided that their is enough `ETH` in the contract to cover their deposit. 

Borrowers are able to borrow `BETH` with the approval of the banker key. This banker key is able to issue `BETH` to a borrower provided it meets the reserve ratio requirement of 10% e.g. if there is 10 `ETH` deposited into the contract, the banker can loan out up to 100 `BETH`. Borrowers should have their debt balances stored in the contract and they should be able to repay the debt by sending `ETH` or `BETH` into the contract. 

If too many `BETH` holders try to redeem their tokens for `ETH`, it will create a bank run whereby the holder will be unable to redeem their full balance of `BETH` for `ETH`. 

## Bonus challenges

### Interest on deposits and loans 
Depositors should be rewarded for saving their `ETH` with the bank contract and borrowers should have to pay interest on their loans. Figuring out an efficient way to add interest to loans and deposits would be a great addition to the project. 

### Account freezing
Traditional banks often freeze their customers accounts, ostensibly for suspicious activity. We should be able to do that in the smart contract too. 
