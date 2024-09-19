require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

exports.handler = async (event) => {
    try {
        const { amount } = JSON.parse(event.body);

        // Validate that amount is provided and is a number
        if (!amount || typeof amount !== 'number') {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Invalid amount provided' }),
            };
        }

        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'usd',
            payment_method_types: ['card'],
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ paymentIntent, }),
        }
    }
    catch (error) {
        console.error('Error creating payment intent:', error);

        return {
            status: 500,
            body: JSON.stringify({ error: 'Failed to create payment intent' }),
        }
    }
}