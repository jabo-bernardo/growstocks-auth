# GrowStocks OAuth

This is a simple wrapper for [GrowStocks Auth API](https://growstocks.xyz)

---
Do you have a WebApp and are looking for a login system and don't want to handle passwords? GrowStocks OAuth to the rescue! You can now request access to the OAuth API to login your users (and read their GrowID and GrowStocks Pay Balance - if authorized by them)!

API Application Form: [Apply Here](https://auth.growstocks.xyz/user/developer)
Working Example: [Growrr Website](https://growrr.xyz/authorize/login)
Documentation: [Read Here](https://medium.com/@growstocks/growstocks-oauth-38297fb6be10)

---

## How to use
```js
const GSOAuth = require("growstocks-auth");
const auth = new GSOAuth({
    CLIENT_SECRET: YOUR_CLIENT_SECRET_HERE
});

```

## Using Express
```js

...

/* Authorizing */
router.get("/authorize/growstocks", async (req, res) => {

    const code = req.query.code;
    const ip = req.headers['cf-connecting-ip'] || req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    
    /*
        It is recommended to send the IP address to the GrowStocks Auth API when authorizing the user to make the process more secure.
    */
    let user = await auth.getUser(code, ip); 
    if(data.success == false) // Something went wrong while requesting on GrowStocks API
        return res.json(user); // Returns { success: false, response: <API RESPONSE> }
    let response = user.response; // Returns GrowStocks User

    console.log(response.getName())

});

/* Getting User Information */
router.get("/", async (req, res) => {

    const code = get.user.code.in.database;
    
    let user = await auth.getUser(code); 
    if(data.success == false) // Something went wrong while requesting on GrowStocks API
        return res.json(user); // Returns { success: false, response: <API RESPONSE> }
    let response = user.response; // Returns GrowStocks User

    console.log(response.getName())

});

...

```

## GrowStocks User Class
```js

// Properties
user._name;
user._email;
user._growid;
user._id;
user._balance;

// Methods
user.getName();
user.getEmail();
user.hasGrowID();
user.getGrowID();
user.hasBalance();
user.getBalance();
user.getID();

```

