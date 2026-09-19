# CA Wood katalogu

Statik export üçün hazırlanmış Next.js kataloq və WhatsApp lead səhifəsidir.

## İşə salmaq

`npm install` sonra `npm run dev`. İstehsal yoxlaması: `npm run build`. Statik nəticə `out/` qovluğuna çıxır.

## Məzmunun redaktəsi

- Brend, əlaqə, mətn: `content/site.ts`
- Məhsullar, kateqoriyalar, qiymətlər: `content/products.ts`
- `price` `null` olduqda məhsul kartında qiymət göstərilmir.

## Foto çəkilişi siyahısı

Hazırda `assets/photos/` yoxdur; buna görə bütün məhsul və Instagram sahələri `FOTO TODO` kimi işarələnib. Hər məhsul üçün neytral fon üzərində 3/4 bucaqdan bir foto və ağac teksturasının bir makro detalı çəkin. Əlavə olaraq: servis arabası interyerdə, servis lövhəsi süfrədə, ümumi mağaza/kolleksiya görünüşü. Fotoları `assets/photos/` qovluğuna əlavə edib `content/products.ts`-də yolunu yazın.

## Müştəridən dəqiqləşdiriləcək

- Ünvanın dəqiq yazılışı və xəritə pini
- Hansı əlaqə nömrəsinin əsas CTA olması
- Qiymətlər, ağac növləri, çatdırılma
- Topdan sifariş minimumu
- Loqo/markalama və oyma fərdiləşdirməsi
- Fəaliyyət ili, müştəri adları və rəylər
- Məhsul kateqoriyalarının dəqiq adları (highlight-lardakı qısaltmalar təsdiqlənməyib)
