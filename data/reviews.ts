export type Review = {
    name: string
    text: string
    rating: 1 | 2 | 3 | 4 | 5
}

// ⚠️ PLACEHOLDERS — NOT REAL REVIEWS.
// Replace each entry with a genuine customer review (copy the text from your Google Business Profile
// with the customer's permission) BEFORE publishing the site. Showing invented reviews to
// customers is misleading and can breach Google's policies and consumer-protection rules.
export const reviews: Review[] = [
    {
        name: 'Nishkarsh Gautam',
        rating: 5,
        text: 'Highly recommended boutique place to for all time jewellry purchase for Gold and silver! Unique and ethnic traditional designs and variety for wedding or any other event! Best legacy jewellers in Noida.',
    },
    {
        name: 'Priyanka Sharma',
        rating: 5,
        text: 'I had purchased a ring from them in 2021. Recently, when I needed money, I returned the ring, and they refunded the amount quickly and without any hassle. I highly recommend everyone to shop from them they are truly genuine and have a very cooperative staff...',
    },
    {
        name: 'Rashmi Singh',
        rating: 5,
        text: 'Amazing work style and excellent quality in service and products....',
    },
]