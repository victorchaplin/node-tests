const db = require('./db')

module.exports.handleSignup = (email, password) => {
    // Check if email already exists

    // Save the user to the database
    db.saveUser({email, password})

    // Send the welcome email
}