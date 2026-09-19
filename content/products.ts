export type Product = { id: string; name: string; category: string; image: string | null; alt: string; price?: number | null; description?: string };
export const categories = ['Hamısı', 'Servis qabları', 'Kəsmə lövhələri', 'Servis arabaları', 'Masaüstü'];
export const products: Product[] = [
 {id:'qabi-01',name:'Taxta servis qabı',category:'Servis qabları',image:'/assets/photos/bowls.jpg',alt:'Taxta servis qabları'},
 {id:'qabi-02',name:'Dairəvi taxta boşqab',category:'Servis qabları',image:'/assets/photos/bowls.jpg',alt:'Təbii teksturalı taxta qablar'},
 {id:'lohvə-01',name:'Kəsmə lövhəsi',category:'Kəsmə lövhələri',image:'/assets/photos/board.jpg',alt:'Taxta kəsmə lövhəsi'},
 {id:'lohvə-02',name:'Saplı servis lövhəsi',category:'Kəsmə lövhələri',image:'/assets/photos/board-detail.jpg',alt:'Taxta servis lövhəsi'},
 {id:'araba-01',name:'Servis arabası',category:'Servis arabaları',image:'/assets/photos/texture.jpg',alt:'Taxta teksturası'},
 {id:'masa-01',name:'Qatlana bilən stend',category:'Masaüstü',image:'/assets/photos/board.jpg',alt:'Taxta masaüstü aksessuarı'},
];
