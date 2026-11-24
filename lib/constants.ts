export const showroomPhone = '+919870368999'
export const showroomPhoneDisplay = '098703 68999'
export const whatsappNumber = '919870368999'

export const showroomAddress = 'Sector 18, Noida'
export const showroomHours = 'Open 11:30 AM – 7:30 PM'

export const instagramProfile = 'https://www.instagram.com/raghunandanjewellersnoida'
export const facebookProfile = 'https://www.facebook.com/raghunandnajewllersnoida/'
export const googleMapsLink = 'https://share.google/qITNy7u9iflZP3Akh'
// TODO: replace with your direct "write a review" link (Google Business Profile -> "Ask for reviews").
// Until then it opens the business listing, where customers can tap "Write a review".
export const googleReviewLink = googleMapsLink

export function whatsappLink(message: string) {
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
}

export function productEnquiryLink(product: { name: string; code: string }) {
    return whatsappLink(
        `Namaste Raghunandan Jewellers, I would like to enquire about:\n• ${product.name} (${product.code})\n\nPlease share the details.`,
    )
}