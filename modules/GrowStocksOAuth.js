/**
 * Package Imports
 */
const request = require("request");

/**
 * Modules
 */
const GrowStocksUser = require("./GrowStocksUser");


/**
 * GrowStocks API
 */
const gsBaseUrl = "https://api.growstocks.xyz/v1";

/**
 * GS OAuth Object
 */
class GrowStocksOAuth {

    /**
     * 
     * @param {Object} options
     */
    constructor(options) {
        this.CLIENT_SECRET = options.CLIENT_SECRET;
    }

    /**
     * 
     * Retrieves a user via token
     * 
     * @param {String} code 
     */
    async getUser(code, ip = null) {
        if(!code) return { success: false, response: "Invalid Code" };
        if(!this.CLIENT_SECRET) return { success: false, response: "Invalid Client Secret" };
        const data = await POST(`${gsBaseUrl}/auth/user`, {
            secret: this.CLIENT_SECRET,
            token: code,
            ip: ip
        });
        if(!data.success) return { success: false, response: data.reason };
        return { success: true, response: new GrowStocksUser(data.user.name, data.user.email, data.user.growid, data.user.id, data.user.balance) };
    }

}

/**
 * 
 * Helper Function
 * Async request
 * Get data from API via POST request
 * Uses request module
 * 
 * @param {String} url 
 * @param {String} data 
 */
const POST = (url, data) => {
    return new Promise((resolve, reject) => {
        request.post(url, { form: data }, (err, resp, body) => {
            if(err)
                reject(err);
            resolve(JSON.parse(body));
        });
    });
}

module.exports = GrowStocksOAuth;