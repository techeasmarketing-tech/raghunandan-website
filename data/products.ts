export type Product = {
    name: string
    code: string
    image: string
    category: string
}

// Order matters: app/page.tsx references products by index (instagramReels.productIndex).
export const products: Product[] = [
    { name: 'The Ananya Necklace', code: 'RN-NK-024', image: '/images/necklace.png', category: 'Necklaces' },
    { name: 'Kundan Bloom Studs', code: 'RN-ER-018', image: '/images/Earrings.png', category: 'Earrings' },
    { name: 'Meera Gold Bangle', code: 'RN-BG-011', image: '/images/bangles.png', category: 'Bangles' },
    { name: 'Bridal Heritage Necklace', code: 'RN-BR-021', image: '/images/Bridal.png', category: 'Bridal' },
    { name: 'Emerald Garden Jhumkas', code: 'RN-ER-032', image: '/images/Earrings.png', category: 'Earrings' },
    { name: 'Temple Gold Pendant', code: 'RN-PD-014', image: '/images/religious-idols.png', category: 'Religious Idols & Murti' },
    { name: 'Regal Kundan Brooch', code: 'RN-BR-008', image: '/images/Brooch.png', category: 'Brooch' },
    { name: 'Maharani Gold Kada', code: 'RN-KD-019', image: '/images/gold.png', category: 'Gold' },
    { name: 'Rang Mahal Heritage Set', code: 'RN-TS-026', image: '/images/treditional.png', category: 'Traditional' },
]