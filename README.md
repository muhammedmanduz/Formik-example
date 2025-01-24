# Formik

- React ekosisteminde formlar oluşturmayı ve yönetmeyi kolaylaştıran popüler bir JavaScript kütüphanesidir. Geliştiricilere, form durumlarını ve doğrulama işlemlerini daha etkili bir şekilde yönetme imkanı sunar.

- Öne çıkan özelliklerinden bazıları şunlardır:

- Durum Yönetimi: Formik, form veri girişlerini ve değişikliklerini izler.

Doğrulama: Yerleşik doğrulama desteği sunar ve isteğe bağlı olarak üçüncü parti doğrulama kütüphaneleriyle entegre olabilir.

Erişilebilirlik: Erişilebilir formlar oluşturmayı destekler.

Performans: Performansı optimize eder ve yeniden render işlemlerini minimuma indirir.

Formik, form oluşturma sürecini basitleştirir ve geliştiricilerin daha hızlı ve daha hatasız formlar oluşturmasına yardımcı olur. Kullanıcı dostu yapısı ve geniş topluluk desteği sayesinde React projelerinde sıkça tercih edilir.

-Formik ,Yup adlı bir JavaScript kütüphanesi ile entegre edilmiştir. Yup, değerlerin ve form verilerinin doğrulaması için kullanılan bir şema oluşturucudur2. Formik ile birlikte kullanmak, form doğrulamalarını daha basit ve verimli hale getirir.

Yup'un bazı temel özellikleri:

Şema Oluşturma: Değerlerin ve alanların doğrulaması için şemalar oluşturabilirsiniz.

API: React Hook Form ve Formik gibi popüler form yönetim kütüphaneleriyle uyumlu bir API sunar.

Doğrulama Mesajları: Hataların ve doğrulama mesajlarının yönetimini kolaylaştırır.

- Validasyon Şeması
- Yup kullanarak bir doğrulama şeması oluşturabiliriz.
- Şemalar, nesnelerin yapısını ve bu nesnelerin her bir alanı için geçerli doğrulama kurallarının tanıtılmasını sağlar

# Regex (Regular Expressions)

- Metinler içinde belirli desenleri tanımlamak ve eşleştirmek için kullanılan güçlü bir araçtır. Programlama ve metin işleme alanlarında yaygın olarak kullanılır. Regex kullanarak, belirli karakter dizilerini, desenleri veya kuralları tanımlayabilir ve bu desenlere uygun metinleri bulabilir, değiştirebilir veya çıkarabilirsiniz.

Regex Örnekleri:
Temel Desenler:

abc: "abc" karakter dizisini arar.

[a-z]: Küçük harfler arasında bir karakter arar.

[0-9]: 0 ile 9 arasındaki bir rakamı arar.

- Özel Karakterler:

- . (nokta): Herhangi bir karakteri temsil eder.

- \d: Bir rakamı temsil eder (0-9).

- \w: Bir harf, rakam veya alt çizgi (\_) karakterini temsil eder.

- \s: Boşluk karakterini temsil eder.

- Kuantifikatörler:

- \*: Sıfır veya daha fazla tekrar.

- +: Bir veya daha fazla tekrar.

- ?: Sıfır veya bir tekrar.

- {n}: N kez tekrar.

- {n,}: N veya daha fazla tekrar.

- {n,m}: En az N ve en fazla M kez tekrar.

- Gruplama ve Alternatifler:

- (abc): "abc" dizisini bir grup olarak tanımlar.

- a|b: "a" veya "b" karakterini arar.

- Regex Kullanım Örneği:
- Örneğin, bir e-posta adresini doğrulamak için bir regex ifadesi kullanabiliriz:

- regex

- ^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$
- Bu ifade, bir e-posta adresinin genel yapısını kontrol eder:

- ^: Başlangıcı belirtir.

- \w+: Bir veya daha fazla harf, rakam veya alt çizgi.

- @: "@" sembolü.

- [a-zA-Z_]+?: Bir veya daha fazla harf veya alt çizgi.

- \.: Nokta.

- [a-zA-Z]{2,3}: 2 veya 3 harften oluşan bir alan adı uzantısı.

- $: Sonu belirtir.

- Regex, metin işleme görevlerinde oldukça kullanışlıdır ve birçok programlama dili regex'i destekler

# Kullanılan teknılojiler

- react
- formik
- bootstrap-
