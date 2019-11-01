const request = require(`request`)

const foreCast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/e298fd1a7c38f7636072cda56526fe24/`+latitude+`,`+longitude +`?units=si`
    request({
        url,
        json: true
    }, (error, {body}={}) => {
        if (error) {
            callback(`Couldnt connect to web services.`, undefined);
        } else if (body.error) {
            callback(`there was some error . check the URL again .`, undefined)
        } else {
            const data = body

            callback(undefined,data)
        }

    })
}


module.exports = foreCast