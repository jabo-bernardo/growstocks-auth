class GrowStocksUser {

    /**
     * 
     * @param {String} name 
     * @param {String} email 
     * @param {String} growid 
     */
    constructor(name, email, growid) {
        this._name = name;
        this._email = email;
        this._growid = growid;
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
     * Gets the user's GrowStocks Website Name
     * 
     * @returns String
     */
    getName() {
        return this._name;
    }

}

module.exports = GrowStocksUser;