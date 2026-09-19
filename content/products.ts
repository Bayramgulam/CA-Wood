export type Product = { id: string; name: string; category: string; image: null; alt: string; price?: number | null; description?: string };
export const categories = ['Hamısı', 'Servis qabları', 'Kəsmə lövhələri', 'Servis arabaları', 'Masaüstü'];
export const products: Product[] = [
 {id:'qabi-01',name:'Taxta servis qabı',category:'Servis qabları',image:null,alt:'Taxta servis qabı — foto TODO'},
 {id:'qabi-02',name:'Dairəvi taxta boşqab',category:'Servis qabları',image:null,alt:'Dairəvi taxta boşqab — foto TODO'},
 {id:'lohvə-01',name:'Kəsmə lövhəsi',category:'Kəsmə lövhələri',image:null,alt:'Taxta kəsmə lövhəsi — foto TODO'},
 {id:'lohvə-02',name:'Saplı servis lövhəsi',category:'Kəsmə lövhələri',image:null,alt:'Saplı taxta servis lövhəsi — foto TODO'},
 {id:'araba-01',name:'Servis arabası',category:'Servis arabaları',image:null,alt:'Taxta servis arabası — foto TODO'},
 {id:'masa-01',name:'Qatlana bilən stend',category:'Masaüstü',image:null,alt:'Qatlana bilən taxta stend — foto TODO'},
];
