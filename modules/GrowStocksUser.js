class GrowStocksUser {

    /**
     * 
     * @param {String} name 
     * @param {String} email 
     * @param {String} growid 
     */
    constructor(name, email, growid, id, balance = null) {
        this._name = name;
        this._email = email;
        this._growid = growid;
        this._id = id;
        this._balance = balance;
    }

    /**
     * 
     * Checks if the user has GrowID
     * 
     * @returns Boolean
     */
    hasGrowID() {
        return this.growid !== null;
    }

    /**
     * 
     * Gets the user's GrowID
     * 
     * @returns String
     */
    getGrowID() {
        return this._growid;
    }

    /**
     * 
     * Gets the user's Email
     * 
     * @returns String
     */
    getEmail() {
        return this._email;
    }

    /**
     * 
     * Gets the user's GrowStocks ID
     * 
     * @returns Number
     */
    getID() {
        return this._id;
    }

    /**
     * 
     * Gets the user's balance
     * 
     * @returns Number
     */
    getBalance() {
        return this._balance;
    }

    /**
     * 
     * Checks if the user has GS Pay Scope
     * 
     * @returns Boolean
     */
    hasBalance() {
        return this._balance != null;
    }

    /**
     * 
     * Gets the user's GrowStocks Website Name
     * 
     * @returns String
     */
    getName() {
        return this._name;
    }

}

module.exports = GrowStocksUser;