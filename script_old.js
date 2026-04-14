const products = [
  { id: 1, title: "Платье", description: "Платье. Размеры: S-XXL. Цвета: Разноцветные.", price: 41033, category: "Женская одежда", brand: "Chanel", discount: 4 },
  { id: 2, title: "Блузка", description: "Блузка. Размеры: S-XXL. Цвета: Разноцветные.", price: 97435, category: "Женская одежда", brand: "Levi's", discount: 43 },
  { id: 3, title: "Юбка", description: "Юбка. Размеры: S-XXL. Цвета: Разноцветные.", price: 7983, category: "Женская одежда", brand: "Supreme", discount: 49 },
  { id: 4, title: "Джинсы", description: "Джинсы. Размеры: S-XXL. Цвета: Разноцветные.", price: 41992, category: "Женская одежда", brand: "Levi's", discount: 24 },
  { id: 5, title: "Топ", description: "Топ. Размеры: S-XXL. Цвета: Разноцветные.", price: 48449, category: "Женская одежда", brand: "Louis Vuitton", discount: 25 },
  { id: 6, title: "Кардиган", description: "Кардиган. Размеры: S-XXL. Цвета: Разноцветные.", price: 24833, category: "Женская одежда", brand: "Puma", discount: 3 },
  { id: 7, title: "Шорты", description: "Шорты. Размеры: S-XXL. Цвета: Разноцветные.", price: 41766, category: "Женская одежда", brand: "Puma", discount: 47 },
  { id: 8, title: "Свитер", description: "Свитер. Размеры: S-XXL. Цвета: Разноцветные.", price: 33319, category: "Женская одежда", brand: "Asics", discount: 13 },
  { id: 9, title: "Леггинсы", description: "Леггинсы. Размеры: S-XXL. Цвета: Разноцветные.", price: 9050, category: "Женская одежда", brand: "Levi's", discount: 7 },
  { id: 10, title: "Пиджак", description: "Пиджак. Размеры: S-XXL. Цвета: Разноцветные.", price: 53284, category: "Женская одежда", brand: "Nike", discount: 30 },
  { id: 11, title: "Брюки", description: "Брюки. Размеры: S-XXL. Цвета: Разноцветные.", price: 95705, category: "Женская одежда", brand: "Asics", discount: 27 },
  { id: 12, title: "Куртка", description: "Куртка. Размеры: S-XXL. Цвета: Разноцветные.", price: 39819, category: "Женская одежда", brand: "Nike", discount: 8 },
  { id: 13, title: "Футболка", description: "Футболка. Размеры: S-XXL. Цвета: Разноцветные.", price: 18905, category: "Женская одежда", brand: "Supreme", discount: 3 },
  { id: 14, title: "Сарафан", description: "Сарафан. Размеры: S-XXL. Цвета: Разноцветные.", price: 44199, category: "Женская одежда", brand: "Chanel", discount: 38 },
  { id: 15, title: "Жакет", description: "Жакет. Размеры: S-XXL. Цвета: Разноцветные.", price: 88129, category: "Женская одежда", brand: "Louis Vuitton", discount: 7 },
  { id: 16, title: "Майка", description: "Майка. Размеры: S-XXL. Цвета: Разноцветные.", price: 50766, category: "Женская одежда", brand: "Balenciaga", discount: 13 },
  { id: 17, title: "Комбинезон", description: "Комбинезон. Размеры: S-XXL. Цвета: Разноцветные.", price: 76080, category: "Женская одежда", brand: "Off-White", discount: 13 },
  { id: 18, title: "Пончо", description: "Пончо. Размеры: S-XXL. Цвета: Разноцветные.", price: 89916, category: "Женская одежда", brand: "Gucci", discount: 41 },
  { id: 19, title: "Боди", description: "Боди. Размеры: S-XXL. Цвета: Разноцветные.", price: 33729, category: "Женская одежда", brand: "Nike", discount: 41 },
  { id: 20, title: "Туника", description: "Туника. Размеры: S-XXL. Цвета: Разноцветные.", price: 30362, category: "Женская одежда", brand: "Levi's", discount: 38 },
  { id: 21, title: "Шуба", description: "Шуба. Размеры: S-XXL. Цвета: Разноцветные.", price: 20119, category: "Женская одежда", brand: "Zara", discount: 48 },
  { id: 22, title: "Пальто", description: "Пальто. Размеры: S-XXL. Цвета: Разноцветные.", price: 72762, category: "Женская одежда", brand: "Chanel", discount: 2 },
  { id: 23, title: "Ветровка", description: "Ветровка. Размеры: S-XXL. Цвета: Разноцветные.", price: 39304, category: "Женская одежда", brand: "Asics", discount: 46 },
  { id: 24, title: "Купальник", description: "Купальник. Размеры: S-XXL. Цвета: Разноцветные.", price: 72217, category: "Женская одежда", brand: "Zara", discount: 0 },
  { id: 25, title: "Пижама", description: "Пижама. Размеры: S-XXL. Цвета: Разноцветные.", price: 36155, category: "Женская одежда", brand: "Supreme", discount: 40 },
  { id: 26, title: "Халат", description: "Халат. Размеры: S-XXL. Цвета: Разноцветные.", price: 27571, category: "Женская одежда", brand: "Supreme", discount: 20 },
  { id: 27, title: "Блейзер", description: "Блейзер. Размеры: S-XXL. Цвета: Разноцветные.", price: 14667, category: "Женская одежда", brand: "Balenciaga", discount: 32 },
  { id: 28, title: "Ромпер", description: "Ромпер. Размеры: S-XXL. Цвета: Разноцветные.", price: 81261, category: "Женская одежда", brand: "Asics", discount: 41 },
  { id: 29, title: "Кимоно", description: "Кимоно. Размеры: S-XXL. Цвета: Разноцветные.", price: 67275, category: "Женская одежда", brand: "H&M", discount: 45 },
  { id: 30, title: "Бодикон", description: "Бодикон. Размеры: S-XXL. Цвета: Разноцветные.", price: 87624, category: "Женская одежда", brand: "Nike", discount: 39 },
  { id: 31, title: "Свитшот", description: "Свитшот. Размеры: S-XXL. Цвета: Разноцветные.", price: 50466, category: "Женская одежда", brand: "Asics", discount: 49 },
  { id: 32, title: "Топ с бретелями", description: "Топ с бретелями. Размеры: S-XXL. Цвета: Разноцветные.", price: 21059, category: "Женская одежда", brand: "Reebok", discount: 11 },
  { id: 33, title: "Юбка мини", description: "Юбка мини. Размеры: S-XXL. Цвета: Разноцветные.", price: 63476, category: "Женская одежда", brand: "Louis Vuitton", discount: 17 },
  { id: 34, title: "Платье вечернее", description: "Платье вечернее. Размеры: S-XXL. Цвета: Разноцветные.", price: 87288, category: "Женская одежда", brand: "H&M", discount: 35 },
  { id: 35, title: "Брюки широкие", description: "Брюки широкие. Размеры: S-XXL. Цвета: Разноцветные.", price: 83496, category: "Женская одежда", brand: "Asics", discount: 37 },
  { id: 36, title: "Футболка с принтом", description: "Футболка с принтом. Размеры: S-XXL. Цвета: Разноцветные.", price: 73857, category: "Женская одежда", brand: "Reebok", discount: 35 },
  { id: 37, title: "Кардиган длинный", description: "Кардиган длинный. Размеры: S-XXL. Цвета: Разноцветные.", price: 99770, category: "Женская одежда", brand: "Adidas", discount: 50 },
  { id: 38, title: "Шорты укороченные", description: "Шорты укороченные. Размеры: S-XXL. Цвета: Разноцветные.", price: 89614, category: "Женская одежда", brand: "Off-White", discount: 29 },
  { id: 39, title: "Свитер с горлом", description: "Свитер с горлом. Размеры: S-XXL. Цвета: Разноцветные.", price: 4267, category: "Женская одежда", brand: "Off-White", discount: 49 },
  { id: 40, title: "Леггинсы с карманами", description: "Леггинсы с карманами. Размеры: S-XXL. Цвета: Разноцветные.", price: 17228, category: "Женская одежда", brand: "Levi's", discount: 36 },
  { id: 41, title: "Пиджак короткий", description: "Пиджак короткий. Размеры: S-XXL. Цвета: Разноцветные.", price: 94547, category: "Женская одежда", brand: "Prada", discount: 45 },
  { id: 42, title: "Брюки кожаные", description: "Брюки кожаные. Размеры: S-XXL. Цвета: Разноцветные.", price: 22897, category: "Женская одежда", brand: "Off-White", discount: 6 },
  { id: 43, title: "Футболка длинная", description: "Футболка длинная. Размеры: S-XXL. Цвета: Разноцветные.", price: 62797, category: "Женская одежда", brand: "H&M", discount: 10 },
  { id: 44, title: "Сарафан пляжный", description: "Сарафан пляжный. Размеры: S-XXL. Цвета: Разноцветные.", price: 73735, category: "Женская одежда", brand: "Louis Vuitton", discount: 6 },
  { id: 45, title: "Жакет кожаный", description: "Жакет кожаный. Размеры: S-XXL. Цвета: Разноцветные.", price: 75435, category: "Женская одежда", brand: "Adidas", discount: 49 },
  { id: 46, title: "Майка с вырезом", description: "Майка с вырезом. Размеры: S-XXL. Цвета: Разноцветные.", price: 56099, category: "Женская одежда", brand: "Chanel", discount: 31 },
  { id: 47, title: "Комбинезон рабочий", description: "Комбинезон рабочий. Размеры: S-XXL. Цвета: Разноцветные.", price: 59312, category: "Женская одежда", brand: "Asics", discount: 26 },
  { id: 48, title: "Пончо с капюшоном", description: "Пончо с капюшоном. Размеры: S-XXL. Цвета: Разноцветные.", price: 89153, category: "Женская одежда", brand: "Puma", discount: 14 },
  { id: 49, title: "Боди с кружевом", description: "Боди с кружевом. Размеры: S-XXL. Цвета: Разноцветные.", price: 88132, category: "Женская одежда", brand: "Louis Vuitton", discount: 38 },
  { id: 50, title: "Туника с рукавами", description: "Туника с рукавами. Размеры: S-XXL. Цвета: Разноцветные.", price: 78643, category: "Женская одежда", brand: "Supreme", discount: 1 },
  { id: 51, title: "Футболка", description: "Футболка. Размеры: S-XXL. Цвета: Разноцветные.", price: 47243, category: "Мужская одежда", brand: "Prada", discount: 33 },
  { id: 52, title: "Джинсы", description: "Джинсы. Размеры: S-XXL. Цвета: Разноцветные.", price: 50376, category: "Мужская одежда", brand: "Chanel", discount: 5 },
  { id: 53, title: "Рубашка", description: "Рубашка. Размеры: S-XXL. Цвета: Разноцветные.", price: 9352, category: "Мужская одежда", brand: "Prada", discount: 35 },
  { id: 54, title: "Худи", description: "Худи. Размеры: S-XXL. Цвета: Разноцветные.", price: 80340, category: "Мужская одежда", brand: "H&M", discount: 21 },
  { id: 55, title: "Шорты", description: "Шорты. Размеры: S-XXL. Цвета: Разноцветные.", price: 61965, category: "Мужская одежда", brand: "Zara", discount: 22 },
  { id: 56, title: "Куртка", description: "Куртка. Размеры: S-XXL. Цвета: Разноцветные.", price: 38541, category: "Мужская одежда", brand: "Asics", discount: 34 },
  { id: 57, title: "Брюки", description: "Брюки. Размеры: S-XXL. Цвета: Разноцветные.", price: 81127, category: "Мужская одежда", brand: "Chanel", discount: 13 },
  { id: 58, title: "Поло", description: "Поло. Размеры: S-XXL. Цвета: Разноцветные.", price: 7461, category: "Мужская одежда", brand: "Prada", discount: 15 },
  { id: 59, title: "Свитер", description: "Свитер. Размеры: S-XXL. Цвета: Разноцветные.", price: 96081, category: "Мужская одежда", brand: "Asics", discount: 44 },
  { id: 60, title: "Штаны", description: "Штаны. Размеры: S-XXL. Цвета: Разноцветные.", price: 49118, category: "Мужская одежда", brand: "Off-White", discount: 10 },
  { id: 61, title: "Костюм", description: "Костюм. Размеры: S-XXL. Цвета: Разноцветные.", price: 58672, category: "Мужская одежда", brand: "Adidas", discount: 5 },
  { id: 62, title: "Пиджак", description: "Пиджак. Размеры: S-XXL. Цвета: Разноцветные.", price: 11575, category: "Мужская одежда", brand: "Reebok", discount: 7 },
  { id: 63, title: "Брюки классические", description: "Брюки классические. Размеры: S-XXL. Цвета: Разноцветные.", price: 64265, category: "Мужская одежда", brand: "H&M", discount: 40 },
  { id: 64, title: "Футболка с принтом", description: "Футболка с принтом. Размеры: S-XXL. Цвета: Разноцветные.", price: 93886, category: "Мужская одежда", brand: "Asics", discount: 47 },
  { id: 65, title: "Шорты пляжные", description: "Шорты пляжные. Размеры: S-XXL. Цвета: Разноцветные.", price: 91833, category: "Мужская одежда", brand: "Nike", discount: 17 },
  { id: 66, title: "Куртка бомбер", description: "Куртка бомбер. Размеры: S-XXL. Цвета: Разноцветные.", price: 75652, category: "Мужская одежда", brand: "Levi's", discount: 39 },
  { id: 67, title: "Брюки джинсовые", description: "Брюки джинсовые. Размеры: S-XXL. Цвета: Разноцветные.", price: 48855, category: "Мужская одежда", brand: "Prada", discount: 43 },
  { id: 68, title: "Поло с карманом", description: "Поло с карманом. Размеры: S-XXL. Цвета: Разноцветные.", price: 98897, category: "Мужская одежда", brand: "Gucci", discount: 7 },
  { id: 69, title: "Свитер с воротом", description: "Свитер с воротом. Размеры: S-XXL. Цвета: Разноцветные.", price: 32687, category: "Мужская одежда", brand: "Adidas", discount: 22 },
  { id: 70, title: "Штаны cargo", description: "Штаны cargo. Размеры: S-XXL. Цвета: Разноцветные.", price: 53641, category: "Мужская одежда", brand: "H&M", discount: 48 },
  { id: 71, title: "Футболка длинная", description: "Футболка длинная. Размеры: S-XXL. Цвета: Разноцветные.", price: 98598, category: "Мужская одежда", brand: "Louis Vuitton", discount: 14 },
  { id: 72, title: "Джинсы узкие", description: "Джинсы узкие. Размеры: S-XXL. Цвета: Разноцветные.", price: 45040, category: "Мужская одежда", brand: "Asics", discount: 20 },
  { id: 73, title: "Рубашка клетчатая", description: "Рубашка клетчатая. Размеры: S-XXL. Цвета: Разноцветные.", price: 89506, category: "Мужская одежда", brand: "Supreme", discount: 22 },
  { id: 74, title: "Худи oversized", description: "Худи oversized. Размеры: S-XXL. Цвета: Разноцветные.", price: 87355, category: "Мужская одежда", brand: "Levi's", discount: 19 },
  { id: 75, title: "Шорты спортивные", description: "Шорты спортивные. Размеры: S-XXL. Цвета: Разноцветные.", price: 82078, category: "Мужская одежда", brand: "Asics", discount: 37 },
  { id: 76, title: "Куртка кожаная", description: "Куртка кожаная. Размеры: S-XXL. Цвета: Разноцветные.", price: 48302, category: "Мужская одежда", brand: "Balenciaga", discount: 26 },
  { id: 77, title: "Брюки широкие", description: "Брюки широкие. Размеры: S-XXL. Цвета: Разноцветные.", price: 97092, category: "Мужская одежда", brand: "H&M", discount: 43 },
  { id: 78, title: "Поло Ralph Lauren", description: "Поло Ralph Lauren. Размеры: S-XXL. Цвета: Разноцветные.", price: 68436, category: "Мужская одежда", brand: "Nike", discount: 24 },
  { id: 79, title: "Свитер кашемир", description: "Свитер кашемир. Размеры: S-XXL. Цвета: Разноцветные.", price: 3083, category: "Мужская одежда", brand: "Off-White", discount: 32 },
  { id: 80, title: "Штаны льняные", description: "Штаны льняные. Размеры: S-XXL. Цвета: Разноцветные.", price: 16248, category: "Мужская одежда", brand: "Puma", discount: 25 },
  { id: 81, title: "Футболка с V-вырезом", description: "Футболка с V-вырезом. Размеры: S-XXL. Цвета: Разноцветные.", price: 64414, category: "Мужская одежда", brand: "Prada", discount: 1 },
  { id: 82, title: "Джинсы рваные", description: "Джинсы рваные. Размеры: S-XXL. Цвета: Разноцветные.", price: 85004, category: "Мужская одежда", brand: "Zara", discount: 29 },
  { id: 83, title: "Рубашка linen", description: "Рубашка linen. Размеры: S-XXL. Цвета: Разноцветные.", price: 94977, category: "Мужская одежда", brand: "Adidas", discount: 12 },
  { id: 84, title: "Худи с капюшоном", description: "Худи с капюшоном. Размеры: S-XXL. Цвета: Разноцветные.", price: 75140, category: "Мужская одежда", brand: "Puma", discount: 4 },
  { id: 85, title: "Шорты chino", description: "Шорты chino. Размеры: S-XXL. Цвета: Разноцветные.", price: 42765, category: "Мужская одежда", brand: "Gucci", discount: 34 },
  { id: 86, title: "Куртка trench", description: "Куртка trench. Размеры: S-XXL. Цвета: Разноцветные.", price: 51511, category: "Мужская одежда", brand: "Supreme", discount: 16 },
  { id: 87, title: "Брюки slim fit", description: "Брюки slim fit. Размеры: S-XXL. Цвета: Разноцветные.", price: 8287, category: "Мужская одежда", brand: "Adidas", discount: 19 },
  { id: 88, title: "Поло pique", description: "Поло pique. Размеры: S-XXL. Цвета: Разноцветные.", price: 46964, category: "Мужская одежда", brand: "Louis Vuitton", discount: 44 },
  { id: 89, title: "Свитер crew neck", description: "Свитер crew neck. Размеры: S-XXL. Цвета: Разноцветные.", price: 33124, category: "Мужская одежда", brand: "Nike", discount: 41 },
  { id: 90, title: "Штаны relaxed", description: "Штаны relaxed. Размеры: S-XXL. Цвета: Разноцветные.", price: 20837, category: "Мужская одежда", brand: "Prada", discount: 39 },
  { id: 91, title: "Кроссовки", description: "Кроссовки. Размеры: S-XXL. Цвета: Разноцветные.", price: 61826, category: "Женская обувь", brand: "Puma", discount: 14 },
  { id: 92, title: "Ботинки", description: "Ботинки. Размеры: S-XXL. Цвета: Разноцветные.", price: 15916, category: "Женская обувь", brand: "Adidas", discount: 43 },
  { id: 93, title: "Туфли", description: "Туфли. Размеры: S-XXL. Цвета: Разноцветные.", price: 66070, category: "Женская обувь", brand: "Levi's", discount: 36 },
  { id: 94, title: "Сандалии", description: "Сандалии. Размеры: S-XXL. Цвета: Разноцветные.", price: 28486, category: "Женская обувь", brand: "Levi's", discount: 24 },
  { id: 95, title: "Балетки", description: "Балетки. Размеры: S-XXL. Цвета: Разноцветные.", price: 56070, category: "Женская обувь", brand: "Balenciaga", discount: 50 },
  { id: 96, title: "Сапоги", description: "Сапоги. Размеры: S-XXL. Цвета: Разноцветные.", price: 24060, category: "Женская обувь", brand: "Chanel", discount: 46 },
  { id: 97, title: "Кеды", description: "Кеды. Размеры: S-XXL. Цвета: Разноцветные.", price: 13703, category: "Женская обувь", brand: "Balenciaga", discount: 31 },
  { id: 98, title: "Лоферы", description: "Лоферы. Размеры: S-XXL. Цвета: Разноцветные.", price: 21946, category: "Женская обувь", brand: "Prada", discount: 26 },
  { id: 99, title: "Мюли", description: "Мюли. Размеры: S-XXL. Цвета: Разноцветные.", price: 4117, category: "Женская обувь", brand: "Asics", discount: 3 },
  { id: 100, title: "Эспадрильи", description: "Эспадрильи. Размеры: S-XXL. Цвета: Разноцветные.", price: 69084, category: "Женская обувь", brand: "Zara", discount: 25 },
  { id: 101, title: "Кроссовки", description: "Кроссовки. Размеры: S-XXL. Цвета: Разноцветные.", price: 8985, category: "Мужская обувь", brand: "Chanel", discount: 6 },
  { id: 102, title: "Ботинки", description: "Ботинки. Размеры: S-XXL. Цвета: Разноцветные.", price: 91478, category: "Мужская обувь", brand: "Gucci", discount: 9 },
  { id: 103, title: "Туфли", description: "Туфли. Размеры: S-XXL. Цвета: Разноцветные.", price: 8507, category: "Мужская обувь", brand: "Asics", discount: 29 },
  { id: 104, title: "Сандалии", description: "Сандалии. Размеры: S-XXL. Цвета: Разноцветные.", price: 86892, category: "Мужская обувь", brand: "Zara", discount: 21 },
  { id: 105, title: "Балетки", description: "Балетки. Размеры: S-XXL. Цвета: Разноцветные.", price: 15104, category: "Мужская обувь", brand: "Chanel", discount: 23 },
  { id: 106, title: "Сапоги", description: "Сапоги. Размеры: S-XXL. Цвета: Разноцветные.", price: 41430, category: "Мужская обувь", brand: "Chanel", discount: 33 },
  { id: 107, title: "Кеды", description: "Кеды. Размеры: S-XXL. Цвета: Разноцветные.", price: 60651, category: "Мужская обувь", brand: "Louis Vuitton", discount: 19 },
  { id: 108, title: "Лоферы", description: "Лоферы. Размеры: S-XXL. Цвета: Разноцветные.", price: 37545, category: "Мужская обувь", brand: "Asics", discount: 46 },
  { id: 109, title: "Мюли", description: "Мюли. Размеры: S-XXL. Цвета: Разноцветные.", price: 95662, category: "Мужская обувь", brand: "Asics", discount: 18 },
  { id: 110, title: "Эспадрильи", description: "Эспадрильи. Размеры: S-XXL. Цвета: Разноцветные.", price: 91625, category: "Мужская обувь", brand: "Off-White", discount: 35 },
  { id: 111, title: "Сумка", description: "Сумка. Размеры: S-XXL. Цвета: Разноцветные.", price: 34595, category: "Женские аксессуары", brand: "Zara", discount: 16 },
  { id: 112, title: "Шарф", description: "Шарф. Размеры: S-XXL. Цвета: Разноцветные.", price: 27415, category: "Женские аксессуары", brand: "Levi's", discount: 42 },
  { id: 113, title: "Колье", description: "Колье. Размеры: S-XXL. Цвета: Разноцветные.", price: 93054, category: "Женские аксессуары", brand: "Off-White", discount: 18 },
  { id: 114, title: "Серьги", description: "Серьги. Размеры: S-XXL. Цвета: Разноцветные.", price: 12278, category: "Женские аксессуары", brand: "Zara", discount: 29 },
  { id: 115, title: "Ремень", description: "Ремень. Размеры: S-XXL. Цвета: Разноцветные.", price: 18516, category: "Женские аксессуары", brand: "Chanel", discount: 5 },
  { id: 116, title: "Шляпа", description: "Шляпа. Размеры: S-XXL. Цвета: Разноцветные.", price: 74548, category: "Женские аксессуары", brand: "Prada", discount: 12 },
  { id: 117, title: "Очки", description: "Очки. Размеры: S-XXL. Цвета: Разноцветные.", price: 55557, category: "Женские аксессуары", brand: "Gucci", discount: 31 },
  { id: 118, title: "Кошелек", description: "Кошелек. Размеры: S-XXL. Цвета: Разноцветные.", price: 54315, category: "Женские аксессуары", brand: "Asics", discount: 15 },
  { id: 119, title: "Браслет", description: "Браслет. Размеры: S-XXL. Цвета: Разноцветные.", price: 15653, category: "Женские аксессуары", brand: "Levi's", discount: 8 },
  { id: 120, title: "Перчатки", description: "Перчатки. Размеры: S-XXL. Цвета: Разноцветные.", price: 70074, category: "Женские аксессуары", brand: "Gucci", discount: 4 },
  { id: 121, title: "Клатч", description: "Клатч. Размеры: S-XXL. Цвета: Разноцветные.", price: 30959, category: "Женские аксессуары", brand: "Adidas", discount: 9 },
  { id: 122, title: "Платок", description: "Платок. Размеры: S-XXL. Цвета: Разноцветные.", price: 58591, category: "Женские аксессуары", brand: "Reebok", discount: 36 },
  { id: 123, title: "Брошь", description: "Брошь. Размеры: S-XXL. Цвета: Разноцветные.", price: 67245, category: "Женские аксессуары", brand: "Prada", discount: 30 },
  { id: 124, title: "Клипсы", description: "Клипсы. Размеры: S-XXL. Цвета: Разноцветные.", price: 20598, category: "Женские аксессуары", brand: "Supreme", discount: 0 },
  { id: 125, title: "Пояс", description: "Пояс. Размеры: S-XXL. Цвета: Разноцветные.", price: 97969, category: "Женские аксессуары", brand: "Puma", discount: 38 },
  { id: 126, title: "Кепка", description: "Кепка. Размеры: S-XXL. Цвета: Разноцветные.", price: 18473, category: "Женские аксессуары", brand: "Puma", discount: 26 },
  { id: 127, title: "Очки для чтения", description: "Очки для чтения. Размеры: S-XXL. Цвета: Разноцветные.", price: 32687, category: "Женские аксессуары", brand: "Louis Vuitton", discount: 13 },
  { id: 128, title: "Кошелек с цепочкой", description: "Кошелек с цепочкой. Размеры: S-XXL. Цвета: Разноцветные.", price: 33301, category: "Женские аксессуары", brand: "Levi's", discount: 5 },
  { id: 129, title: "Кольцо", description: "Кольцо. Размеры: S-XXL. Цвета: Разноцветные.", price: 24979, category: "Женские аксессуары", brand: "Balenciaga", discount: 25 },
  { id: 130, title: "Варежки", description: "Варежки. Размеры: S-XXL. Цвета: Разноцветные.", price: 34245, category: "Женские аксессуары", brand: "Zara", discount: 8 },
  { id: 131, title: "Сумка рюкзак", description: "Сумка рюкзак. Размеры: S-XXL. Цвета: Разноцветные.", price: 11154, category: "Женские аксессуары", brand: "Levi's", discount: 15 },
  { id: 132, title: "Шарф кашемир", description: "Шарф кашемир. Размеры: S-XXL. Цвета: Разноцветные.", price: 35546, category: "Женские аксессуары", brand: "Reebok", discount: 48 },
  { id: 133, title: "Кулон", description: "Кулон. Размеры: S-XXL. Цвета: Разноцветные.", price: 9810, category: "Женские аксессуары", brand: "Zara", discount: 39 },
  { id: 134, title: "Серьги с камнями", description: "Серьги с камнями. Размеры: S-XXL. Цвета: Разноцветные.", price: 64793, category: "Женские аксессуары", brand: "Nike", discount: 36 },
  { id: 135, title: "Ремень с пряжкой", description: "Ремень с пряжкой. Размеры: S-XXL. Цвета: Разноцветные.", price: 6169, category: "Женские аксессуары", brand: "Asics", discount: 34 },
  { id: 136, title: "Ремень", description: "Ремень. Размеры: S-XXL. Цвета: Разноцветные.", price: 18328, category: "Мужские аксессуары", brand: "Adidas", discount: 32 },
  { id: 137, title: "Часы", description: "Часы. Размеры: S-XXL. Цвета: Разноцветные.", price: 43943, category: "Мужские аксессуары", brand: "Chanel", discount: 18 },
  { id: 138, title: "Кошелек", description: "Кошелек. Размеры: S-XXL. Цвета: Разноцветные.", price: 53409, category: "Мужские аксессуары", brand: "H&M", discount: 15 },
  { id: 139, title: "Очки", description: "Очки. Размеры: S-XXL. Цвета: Разноцветные.", price: 41495, category: "Мужские аксессуары", brand: "Balenciaga", discount: 16 },
  { id: 140, title: "Шарф", description: "Шарф. Размеры: S-XXL. Цвета: Разноцветные.", price: 85855, category: "Мужские аксессуары", brand: "Louis Vuitton", discount: 17 },
  { id: 141, title: "Перчатки", description: "Перчатки. Размеры: S-XXL. Цвета: Разноцветные.", price: 70619, category: "Мужские аксессуары", brand: "Gucci", discount: 1 },
  { id: 142, title: "Браслет", description: "Браслет. Размеры: S-XXL. Цвета: Разноцветные.", price: 40049, category: "Мужские аксессуары", brand: "H&M", discount: 29 },
  { id: 143, title: "Ключница", description: "Ключница. Размеры: S-XXL. Цвета: Разноцветные.", price: 11337, category: "Мужские аксессуары", brand: "Chanel", discount: 44 },
  { id: 144, title: "Шляпа", description: "Шляпа. Размеры: S-XXL. Цвета: Разноцветные.", price: 12715, category: "Мужские аксессуары", brand: "Gucci", discount: 47 },
  { id: 145, title: "Запонки", description: "Запонки. Размеры: S-XXL. Цвета: Разноцветные.", price: 6109, category: "Мужские аксессуары", brand: "Louis Vuitton", discount: 13 },
  { id: 146, title: "Портмоне", description: "Портмоне. Размеры: S-XXL. Цвета: Разноцветные.", price: 57897, category: "Мужские аксессуары", brand: "Puma", discount: 29 },
  { id: 147, title: "Часы наручные", description: "Часы наручные. Размеры: S-XXL. Цвета: Разноцветные.", price: 88602, category: "Мужские аксессуары", brand: "Nike", discount: 4 },
  { id: 148, title: "Кошелек с RFID", description: "Кошелек с RFID. Размеры: S-XXL. Цвета: Разноцветные.", price: 64297, category: "Мужские аксессуары", brand: "Prada", discount: 43 },
  { id: 149, title: "Очки для чтения", description: "Очки для чтения. Размеры: S-XXL. Цвета: Разноцветные.", price: 11495, category: "Мужские аксессуары", brand: "Adidas", discount: 18 },
  { id: 150, title: "Шарф шерстяной", description: "Шарф шерстяной. Размеры: S-XXL. Цвета: Разноцветные.", price: 7082, category: "Мужские аксессуары", brand: "Asics", discount: 16 },
  { id: 151, title: "Перчатки кожаные", description: "Перчатки кожаные. Размеры: S-XXL. Цвета: Разноцветные.", price: 39176, category: "Мужские аксессуары", brand: "Zara", discount: 23 },
  { id: 152, title: "Браслет кожаный", description: "Браслет кожаный. Размеры: S-XXL. Цвета: Разноцветные.", price: 14331, category: "Мужские аксессуары", brand: "Asics", discount: 5 },
  { id: 153, title: "Ключница с цепью", description: "Ключница с цепью. Размеры: S-XXL. Цвета: Разноцветные.", price: 68717, category: "Мужские аксессуары", brand: "H&M", discount: 4 },
  { id: 154, title: "Шляпа fedora", description: "Шляпа fedora. Размеры: S-XXL. Цвета: Разноцветные.", price: 3120, category: "Мужские аксессуары", brand: "H&M", discount: 20 },
  { id: 155, title: "Запонки золотые", description: "Запонки золотые. Размеры: S-XXL. Цвета: Разноцветные.", price: 58290, category: "Мужские аксессуары", brand: "Gucci", discount: 10 },
  { id: 156, title: "Ремень с пряжкой", description: "Ремень с пряжкой. Размеры: S-XXL. Цвета: Разноцветные.", price: 63429, category: "Мужские аксессуары", brand: "Prada", discount: 34 },
  { id: 157, title: "Часы кварцевые", description: "Часы кварцевые. Размеры: S-XXL. Цвета: Разноцветные.", price: 18872, category: "Мужские аксессуары", brand: "Reebok", discount: 4 },
  { id: 158, title: "Кошелек с отделениями", description: "Кошелек с отделениями. Размеры: S-XXL. Цвета: Разноцветные.", price: 19020, category: "Мужские аксессуары", brand: "Zara", discount: 30 },
  { id: 159, title: "Очки polarized", description: "Очки polarized. Размеры: S-XXL. Цвета: Разноцветные.", price: 11874, category: "Мужские аксессуары", brand: "Prada", discount: 3 },
  { id: 160, title: "Шарф шелковый", description: "Шарф шелковый. Размеры: S-XXL. Цвета: Разноцветные.", price: 53602, category: "Мужские аксессуары", brand: "Reebok", discount: 41 },
  { id: 161, title: "Ремень с пряжкой", description: "Ремень с пряжкой. Размеры: S-XXL. Цвета: Разноцветные.", price: 5997, category: "Мужские аксессуары", brand: "Gucci", discount: 2 },
  { id: 162, title: "Часы", description: "Часы. Размеры: S-XXL. Цвета: Разноцветные.", price: 40373, category: "Мужские аксессуары", brand: "Balenciaga", discount: 18 },
  { id: 163, title: "Кольцо", description: "Кольцо. Размеры: S-XXL. Цвета: Разноцветные.", price: 74158, category: "Женские аксессуары", brand: "Reebok", discount: 23 },
  { id: 164, title: "Лоферы", description: "Лоферы. Размеры: S-XXL. Цвета: Разноцветные.", price: 67168, category: "Женская обувь", brand: "Adidas", discount: 4 },
  { id: 165, title: "Свитер кашемир", description: "Свитер кашемир. Размеры: S-XXL. Цвета: Разноцветные.", price: 80346, category: "Мужская одежда", brand: "H&M", discount: 15 },
  { id: 166, title: "Мюли", description: "Мюли. Размеры: S-XXL. Цвета: Разноцветные.", price: 10714, category: "Женская обувь", brand: "Chanel", discount: 21 },
  { id: 167, title: "Мюли", description: "Мюли. Размеры: S-XXL. Цвета: Разноцветные.", price: 53346, category: "Женская обувь", brand: "Louis Vuitton", discount: 5 },
  { id: 168, title: "Перчатки кожаные", description: "Перчатки кожаные. Размеры: S-XXL. Цвета: Разноцветные.", price: 52699, category: "Мужские аксессуары", brand: "Reebok", discount: 29 },
  { id: 169, title: "Кеды", description: "Кеды. Размеры: S-XXL. Цвета: Разноцветные.", price: 75733, category: "Мужская обувь", brand: "Chanel", discount: 35 },
  { id: 170, title: "Балетки", description: "Балетки. Размеры: S-XXL. Цвета: Разноцветные.", price: 98113, category: "Женская обувь", brand: "Prada", discount: 0 },
  { id: 171, title: "Штаны", description: "Штаны. Размеры: S-XXL. Цвета: Разноцветные.", price: 56933, category: "Мужская одежда", brand: "Prada", discount: 3 },
  { id: 172, title: "Штаны", description: "Штаны. Размеры: S-XXL. Цвета: Разноцветные.", price: 18062, category: "Мужская одежда", brand: "Balenciaga", discount: 31 },
  { id: 173, title: "Балетки", description: "Балетки. Размеры: S-XXL. Цвета: Разноцветные.", price: 47103, category: "Женская обувь", brand: "Chanel", discount: 48 },
  { id: 174, title: "Эспадрильи", description: "Эспадрильи. Размеры: S-XXL. Цвета: Разноцветные.", price: 52234, category: "Мужская обувь", brand: "Gucci", discount: 35 },
  { id: 175, title: "Платье вечернее", description: "Платье вечернее. Размеры: S-XXL. Цвета: Разноцветные.", price: 73895, category: "Женская одежда", brand: "Gucci", discount: 49 },
  { id: 176, title: "Брюки классические", description: "Брюки классические. Размеры: S-XXL. Цвета: Разноцветные.", price: 28808, category: "Мужская одежда", brand: "Gucci", discount: 24 },
  { id: 177, title: "Ботинки", description: "Ботинки. Размеры: S-XXL. Цвета: Разноцветные.", price: 71680, category: "Мужская обувь", brand: "Louis Vuitton", discount: 50 },
  { id: 178, title: "Ремень с пряжкой", description: "Ремень с пряжкой. Размеры: S-XXL. Цвета: Разноцветные.", price: 13882, category: "Мужские аксессуары", brand: "Asics", discount: 32 },
  { id: 179, title: "Запонки золотые", description: "Запонки золотые. Размеры: S-XXL. Цвета: Разноцветные.", price: 66802, category: "Мужские аксессуары", brand: "Louis Vuitton", discount: 28 },
  { id: 180, title: "Портмоне", description: "Портмоне. Размеры: S-XXL. Цвета: Разноцветные.", price: 78970, category: "Мужские аксессуары", brand: "Prada", discount: 48 },
  { id: 181, title: "Ботинки", description: "Ботинки. Размеры: S-XXL. Цвета: Разноцветные.", price: 54989, category: "Женская обувь", brand: "Reebok", discount: 37 },
  { id: 182, title: "Запонки золотые", description: "Запонки золотые. Размеры: S-XXL. Цвета: Разноцветные.", price: 38642, category: "Мужские аксессуары", brand: "Chanel", discount: 27 },
  { id: 183, title: "Купальник", description: "Купальник. Размеры: S-XXL. Цвета: Разноцветные.", price: 49924, category: "Женская одежда", brand: "Reebok", discount: 1 },
  { id: 184, title: "Ботинки", description: "Ботинки. Размеры: S-XXL. Цвета: Разноцветные.", price: 11535, category: "Мужская обувь", brand: "Balenciaga", discount: 4 },
  { id: 185, title: "Очки", description: "Очки. Размеры: S-XXL. Цвета: Разноцветные.", price: 52835, category: "Женские аксессуары", brand: "Asics", discount: 47 },
  { id: 186, title: "Туфли", description: "Туфли. Размеры: S-XXL. Цвета: Разноцветные.", price: 55485, category: "Женская обувь", brand: "Zara", discount: 17 },
  { id: 187, title: "Лоферы", description: "Лоферы. Размеры: S-XXL. Цвета: Разноцветные.", price: 30453, category: "Мужская обувь", brand: "Adidas", discount: 26 },
  { id: 188, title: "Сапоги", description: "Сапоги. Размеры: S-XXL. Цвета: Разноцветные.", price: 44042, category: "Женская обувь", brand: "Levi's", discount: 31 },
  { id: 189, title: "Ботинки", description: "Ботинки. Размеры: S-XXL. Цвета: Разноцветные.", price: 30089, category: "Мужская обувь", brand: "Gucci", discount: 30 },
  { id: 190, title: "Кеды", description: "Кеды. Размеры: S-XXL. Цвета: Разноцветные.", price: 78211, category: "Мужская обувь", brand: "Prada", discount: 48 },
  { id: 191, title: "Ботинки", description: "Ботинки. Размеры: S-XXL. Цвета: Разноцветные.", price: 70500, category: "Женская обувь", brand: "Chanel", discount: 22 },
  { id: 192, title: "Футболка с принтом", description: "Футболка с принтом. Размеры: S-XXL. Цвета: Разноцветные.", price: 80536, category: "Женская одежда", brand: "Zara", discount: 49 },
  { id: 193, title: "Футболка длинная", description: "Футболка длинная. Размеры: S-XXL. Цвета: Разноцветные.", price: 50603, category: "Мужская одежда", brand: "Adidas", discount: 4 },
  { id: 194, title: "Брюки", description: "Брюки. Размеры: S-XXL. Цвета: Разноцветные.", price: 84396, category: "Женская одежда", brand: "H&M", discount: 14 },
  { id: 195, title: "Кроссовки", description: "Кроссовки. Размеры: S-XXL. Цвета: Разноцветные.", price: 18036, category: "Мужская обувь", brand: "Zara", discount: 26 },
  { id: 196, title: "Ключница", description: "Ключница. Размеры: S-XXL. Цвета: Разноцветные.", price: 22410, category: "Мужские аксессуары", brand: "Prada", discount: 45 },
  { id: 197, title: "Ботинки", description: "Ботинки. Размеры: S-XXL. Цвета: Разноцветные.", price: 97979, category: "Мужская обувь", brand: "Zara", discount: 21 },
  { id: 198, title: "Худи", description: "Худи. Размеры: S-XXL. Цвета: Разноцветные.", price: 24719, category: "Мужская одежда", brand: "Balenciaga", discount: 10 },
  { id: 199, title: "Эспадрильи", description: "Эспадрильи. Размеры: S-XXL. Цвета: Разноцветные.", price: 70171, category: "Женская обувь", brand: "H&M", discount: 47 },
  { id: 200, title: "Колье", description: "Колье. Размеры: S-XXL. Цвета: Разноцветные.", price: 21643, category: "Женские аксессуары", brand: "Chanel", discount: 25 },
  { id: 201, title: "Ремень с пряжкой", description: "Ремень с пряжкой. Размеры: S-XXL. Цвета: Разноцветные.", price: 84838, category: "Женские аксессуары", brand: "Levi's", discount: 42 },
  { id: 202, title: "Туфли", description: "Туфли. Размеры: S-XXL. Цвета: Разноцветные.", price: 55834, category: "Мужская обувь", brand: "Chanel", discount: 13 },
  { id: 203, title: "Ботинки", description: "Ботинки. Размеры: S-XXL. Цвета: Разноцветные.", price: 74989, category: "Мужская обувь", brand: "Off-White", discount: 20 },
  { id: 204, title: "Кулон", description: "Кулон. Размеры: S-XXL. Цвета: Разноцветные.", price: 55575, category: "Женские аксессуары", brand: "Nike", discount: 23 },
  { id: 205, title: "Комбинезон рабочий", description: "Комбинезон рабочий. Размеры: S-XXL. Цвета: Разноцветные.", price: 93105, category: "Женская одежда", brand: "Adidas", discount: 46 },
  { id: 206, title: "Поло", description: "Поло. Размеры: S-XXL. Цвета: Разноцветные.", price: 12436, category: "Мужская одежда", brand: "Gucci", discount: 3 },
  { id: 207, title: "Леггинсы", description: "Леггинсы. Размеры: S-XXL. Цвета: Разноцветные.", price: 32191, category: "Женская одежда", brand: "Adidas", discount: 20 },
  { id: 208, title: "Сумка", description: "Сумка. Размеры: S-XXL. Цвета: Разноцветные.", price: 48625, category: "Женские аксессуары", brand: "Louis Vuitton", discount: 12 },
  { id: 209, title: "Кеды", description: "Кеды. Размеры: S-XXL. Цвета: Разноцветные.", price: 87671, category: "Женская обувь", brand: "Nike", discount: 27 },
  { id: 210, title: "Ремень с пряжкой", description: "Ремень с пряжкой. Размеры: S-XXL. Цвета: Разноцветные.", price: 15565, category: "Мужские аксессуары", brand: "Levi's", discount: 42 },
  { id: 211, title: "Ремень", description: "Ремень. Размеры: S-XXL. Цвета: Разноцветные.", price: 3167, category: "Женские аксессуары", brand: "Zara", discount: 20 },
  { id: 212, title: "Мюли", description: "Мюли. Размеры: S-XXL. Цвета: Разноцветные.", price: 83705, category: "Женская обувь", brand: "Reebok", discount: 15 },
  { id: 213, title: "Футболка с принтом", description: "Футболка с принтом. Размеры: S-XXL. Цвета: Разноцветные.", price: 47447, category: "Мужская одежда", brand: "Gucci", discount: 39 },
  { id: 214, title: "Шляпа", description: "Шляпа. Размеры: S-XXL. Цвета: Разноцветные.", price: 59153, category: "Женские аксессуары", brand: "Off-White", discount: 45 },
  { id: 215, title: "Браслет кожаный", description: "Браслет кожаный. Размеры: S-XXL. Цвета: Разноцветные.", price: 57631, category: "Мужские аксессуары", brand: "Gucci", discount: 25 },
  { id: 216, title: "Балетки", description: "Балетки. Размеры: S-XXL. Цвета: Разноцветные.", price: 42907, category: "Женская обувь", brand: "Prada", discount: 41 },
  { id: 217, title: "Костюм", description: "Костюм. Размеры: S-XXL. Цвета: Разноцветные.", price: 78487, category: "Мужская одежда", brand: "Supreme", discount: 27 },
  { id: 218, title: "Рубашка клетчатая", description: "Рубашка клетчатая. Размеры: S-XXL. Цвета: Разноцветные.", price: 25216, category: "Мужская одежда", brand: "Louis Vuitton", discount: 24 },
  { id: 219, title: "Шарф", description: "Шарф. Размеры: S-XXL. Цвета: Разноцветные.", price: 91886, category: "Мужские аксессуары", brand: "Zara", discount: 9 },
  { id: 220, title: "Эспадрильи", description: "Эспадрильи. Размеры: S-XXL. Цвета: Разноцветные.", price: 30266, category: "Мужская обувь", brand: "Adidas", discount: 4 },
  { id: 221, title: "Туфли", description: "Туфли. Размеры: S-XXL. Цвета: Разноцветные.", price: 44022, category: "Женская обувь", brand: "Adidas", discount: 31 },
  { id: 222, title: "Боди", description: "Боди. Размеры: S-XXL. Цвета: Разноцветные.", price: 45584, category: "Женская одежда", brand: "Supreme", discount: 27 },
  { id: 223, title: "Сапоги", description: "Сапоги. Размеры: S-XXL. Цвета: Разноцветные.", price: 11854, category: "Мужская обувь", brand: "Zara", discount: 39 },
  { id: 224, title: "Шарф шелковый", description: "Шарф шелковый. Размеры: S-XXL. Цвета: Разноцветные.", price: 47066, category: "Мужские аксессуары", brand: "Supreme", discount: 15 },
  { id: 225, title: "Кроссовки", description: "Кроссовки. Размеры: S-XXL. Цвета: Разноцветные.", price: 55412, category: "Мужская обувь", brand: "Chanel", discount: 31 },
  { id: 226, title: "Свитшот", description: "Свитшот. Размеры: S-XXL. Цвета: Разноцветные.", price: 51965, category: "Женская одежда", brand: "Levi's", discount: 2 },
  { id: 227, title: "Брошь", description: "Брошь. Размеры: S-XXL. Цвета: Разноцветные.", price: 6929, category: "Женские аксессуары", brand: "Nike", discount: 31 },
  { id: 228, title: "Перчатки", description: "Перчатки. Размеры: S-XXL. Цвета: Разноцветные.", price: 53969, category: "Мужские аксессуары", brand: "Adidas", discount: 6 },
  { id: 229, title: "Свитер", description: "Свитер. Размеры: S-XXL. Цвета: Разноцветные.", price: 99845, category: "Мужская одежда", brand: "Reebok", discount: 17 },
  { id: 230, title: "Портмоне", description: "Портмоне. Размеры: S-XXL. Цвета: Разноцветные.", price: 14121, category: "Мужские аксессуары", brand: "Nike", discount: 16 },
  { id: 231, title: "Штаны cargo", description: "Штаны cargo. Размеры: S-XXL. Цвета: Разноцветные.", price: 83477, category: "Мужская одежда", brand: "Balenciaga", discount: 7 },
  { id: 232, title: "Футболка длинная", description: "Футболка длинная. Размеры: S-XXL. Цвета: Разноцветные.", price: 87951, category: "Мужская одежда", brand: "Off-White", discount: 22 },
  { id: 233, title: "Куртка", description: "Куртка. Размеры: S-XXL. Цвета: Разноцветные.", price: 36120, category: "Мужская одежда", brand: "Puma", discount: 21 },
  { id: 234, title: "Пальто", description: "Пальто. Размеры: S-XXL. Цвета: Разноцветные.", price: 94528, category: "Женская одежда", brand: "Nike", discount: 23 },
  { id: 235, title: "Ботинки", description: "Ботинки. Размеры: S-XXL. Цвета: Разноцветные.", price: 5991, category: "Мужская обувь", brand: "Balenciaga", discount: 16 },
  { id: 236, title: "Свитер кашемир", description: "Свитер кашемир. Размеры: S-XXL. Цвета: Разноцветные.", price: 93056, category: "Мужская одежда", brand: "Levi's", discount: 3 },
  { id: 237, title: "Туфли", description: "Туфли. Размеры: S-XXL. Цвета: Разноцветные.", price: 74526, category: "Женская обувь", brand: "Reebok", discount: 28 },
  { id: 238, title: "Лоферы", description: "Лоферы. Размеры: S-XXL. Цвета: Разноцветные.", price: 31586, category: "Мужская обувь", brand: "H&M", discount: 44 },
  { id: 239, title: "Кроссовки", description: "Кроссовки. Размеры: S-XXL. Цвета: Разноцветные.", price: 74624, category: "Женская обувь", brand: "Levi's", discount: 0 },
  { id: 240, title: "Поло с карманом", description: "Поло с карманом. Размеры: S-XXL. Цвета: Разноцветные.", price: 76881, category: "Мужская одежда", brand: "Levi's", discount: 22 },
  { id: 241, title: "Шарф шелковый", description: "Шарф шелковый. Размеры: S-XXL. Цвета: Разноцветные.", price: 31455, category: "Мужские аксессуары", brand: "Reebok", discount: 39 },
  { id: 242, title: "Ремень с пряжкой", description: "Ремень с пряжкой. Размеры: S-XXL. Цвета: Разноцветные.", price: 67797, category: "Женские аксессуары", brand: "Prada", discount: 11 },
  { id: 243, title: "Ботинки", description: "Ботинки. Размеры: S-XXL. Цвета: Разноцветные.", price: 31470, category: "Мужская обувь", brand: "Balenciaga", discount: 13 },
  { id: 244, title: "Сапоги", description: "Сапоги. Размеры: S-XXL. Цвета: Разноцветные.", price: 14033, category: "Женская обувь", brand: "Reebok", discount: 4 },
  { id: 245, title: "Браслет", description: "Браслет. Размеры: S-XXL. Цвета: Разноцветные.", price: 89582, category: "Мужские аксессуары", brand: "Prada", discount: 3 },
  { id: 246, title: "Сапоги", description: "Сапоги. Размеры: S-XXL. Цвета: Разноцветные.", price: 47214, category: "Мужская обувь", brand: "Adidas", discount: 16 },
  { id: 247, title: "Штаны relaxed", description: "Штаны relaxed. Размеры: S-XXL. Цвета: Разноцветные.", price: 95947, category: "Мужская одежда", brand: "Adidas", discount: 12 },
  { id: 248, title: "Часы", description: "Часы. Размеры: S-XXL. Цвета: Разноцветные.", price: 51074, category: "Мужские аксессуары", brand: "Adidas", discount: 26 },
  { id: 249, title: "Блейзер", description: "Блейзер. Размеры: S-XXL. Цвета: Разноцветные.", price: 73336, category: "Женская одежда", brand: "Supreme", discount: 4 },
  { id: 250, title: "Серьги с камнями", description: "Серьги с камнями. Размеры: S-XXL. Цвета: Разноцветные.", price: 91431, category: "Женские аксессуары", brand: "H&M", discount: 7 },
  { id: 251, title: "Часы наручные", description: "Часы наручные. Размеры: S-XXL. Цвета: Разноцветные.", price: 55249, category: "Мужские аксессуары", brand: "Levi's", discount: 32 },
  { id: 252, title: "Шарф шерстяной", description: "Шарф шерстяной. Размеры: S-XXL. Цвета: Разноцветные.", price: 68478, category: "Мужские аксессуары", brand: "Nike", discount: 23 },
  { id: 253, title: "Кроссовки", description: "Кроссовки. Размеры: S-XXL. Цвета: Разноцветные.", price: 34264, category: "Мужская обувь", brand: "Asics", discount: 26 },
  { id: 254, title: "Балетки", description: "Балетки. Размеры: S-XXL. Цвета: Разноцветные.", price: 40997, category: "Мужская обувь", brand: "Zara", discount: 36 },
  { id: 255, title: "Сандалии", description: "Сандалии. Размеры: S-XXL. Цвета: Разноцветные.", price: 99141, category: "Мужская обувь", brand: "Chanel", discount: 20 },
  { id: 256, title: "Брюки", description: "Брюки. Размеры: S-XXL. Цвета: Разноцветные.", price: 25914, category: "Мужская одежда", brand: "Gucci", discount: 16 },
  { id: 257, title: "Поло", description: "Поло. Размеры: S-XXL. Цвета: Разноцветные.", price: 61320, category: "Мужская одежда", brand: "Zara", discount: 39 },
  { id: 258, title: "Лоферы", description: "Лоферы. Размеры: S-XXL. Цвета: Разноцветные.", price: 86401, category: "Мужская обувь", brand: "Puma", discount: 47 },
  { id: 259, title: "Джинсы", description: "Джинсы. Размеры: S-XXL. Цвета: Разноцветные.", price: 63303, category: "Женская одежда", brand: "Louis Vuitton", discount: 18 },
  { id: 260, title: "Мюли", description: "Мюли. Размеры: S-XXL. Цвета: Разноцветные.", price: 86130, category: "Женская обувь", brand: "H&M", discount: 19 },
  { id: 261, title: "Мюли", description: "Мюли. Размеры: S-XXL. Цвета: Разноцветные.", price: 24791, category: "Женская обувь", brand: "Asics", discount: 43 },
  { id: 262, title: "Эспадрильи", description: "Эспадрильи. Размеры: S-XXL. Цвета: Разноцветные.", price: 83298, category: "Мужская обувь", brand: "Nike", discount: 13 },
  { id: 263, title: "Эспадрильи", description: "Эспадрильи. Размеры: S-XXL. Цвета: Разноцветные.", price: 38350, category: "Женская обувь", brand: "Louis Vuitton", discount: 6 },
  { id: 264, title: "Часы кварцевые", description: "Часы кварцевые. Размеры: S-XXL. Цвета: Разноцветные.", price: 10564, category: "Мужские аксессуары", brand: "Off-White", discount: 46 },
  { id: 265, title: "Сапоги", description: "Сапоги. Размеры: S-XXL. Цвета: Разноцветные.", price: 56050, category: "Мужская обувь", brand: "Asics", discount: 42 },
  { id: 266, title: "Сумка", description: "Сумка. Размеры: S-XXL. Цвета: Разноцветные.", price: 9236, category: "Женские аксессуары", brand: "Levi's", discount: 7 },
  { id: 267, title: "Комбинезон", description: "Комбинезон. Размеры: S-XXL. Цвета: Разноцветные.", price: 82751, category: "Женская одежда", brand: "Nike", discount: 13 },
  { id: 268, title: "Сандалии", description: "Сандалии. Размеры: S-XXL. Цвета: Разноцветные.", price: 58934, category: "Женская обувь", brand: "Supreme", discount: 14 },
  { id: 269, title: "Балетки", description: "Балетки. Размеры: S-XXL. Цвета: Разноцветные.", price: 72477, category: "Мужская обувь", brand: "Puma", discount: 20 },
  { id: 270, title: "Футболка с V-вырезом", description: "Футболка с V-вырезом. Размеры: S-XXL. Цвета: Разноцветные.", price: 95576, category: "Мужская одежда", brand: "Prada", discount: 34 },
  { id: 271, title: "Свитер", description: "Свитер. Размеры: S-XXL. Цвета: Разноцветные.", price: 96086, category: "Женская одежда", brand: "Nike", discount: 40 },
  { id: 272, title: "Ботинки", description: "Ботинки. Размеры: S-XXL. Цвета: Разноцветные.", price: 57971, category: "Мужская обувь", brand: "Louis Vuitton", discount: 17 },
  { id: 273, title: "Шорты", description: "Шорты. Размеры: S-XXL. Цвета: Разноцветные.", price: 34868, category: "Женская одежда", brand: "Gucci", discount: 48 },
  { id: 274, title: "Пальто", description: "Пальто. Размеры: S-XXL. Цвета: Разноцветные.", price: 48950, category: "Женская одежда", brand: "Zara", discount: 18 },
  { id: 275, title: "Леггинсы с карманами", description: "Леггинсы с карманами. Размеры: S-XXL. Цвета: Разноцветные.", price: 57953, category: "Женская одежда", brand: "Nike", discount: 15 },
  { id: 276, title: "Ромпер", description: "Ромпер. Размеры: S-XXL. Цвета: Разноцветные.", price: 80354, category: "Женская одежда", brand: "Supreme", discount: 28 },
  { id: 277, title: "Сапоги", description: "Сапоги. Размеры: S-XXL. Цвета: Разноцветные.", price: 50962, category: "Женская обувь", brand: "Supreme", discount: 34 },
  { id: 278, title: "Брюки классические", description: "Брюки классические. Размеры: S-XXL. Цвета: Разноцветные.", price: 51721, category: "Мужская одежда", brand: "H&M", discount: 45 },
  { id: 279, title: "Очки", description: "Очки. Размеры: S-XXL. Цвета: Разноцветные.", price: 22273, category: "Женские аксессуары", brand: "Supreme", discount: 16 },
  { id: 280, title: "Очки", description: "Очки. Размеры: S-XXL. Цвета: Разноцветные.", price: 26326, category: "Мужские аксессуары", brand: "Chanel", discount: 3 },
  { id: 281, title: "Кошелек с отделениями", description: "Кошелек с отделениями. Размеры: S-XXL. Цвета: Разноцветные.", price: 35510, category: "Мужские аксессуары", brand: "Prada", discount: 29 },
  { id: 282, title: "Кошелек с RFID", description: "Кошелек с RFID. Размеры: S-XXL. Цвета: Разноцветные.", price: 82422, category: "Мужские аксессуары", brand: "Supreme", discount: 1 },
  { id: 283, title: "Кошелек с RFID", description: "Кошелек с RFID. Размеры: S-XXL. Цвета: Разноцветные.", price: 86457, category: "Мужские аксессуары", brand: "Zara", discount: 46 },
  { id: 284, title: "Сапоги", description: "Сапоги. Размеры: S-XXL. Цвета: Разноцветные.", price: 37019, category: "Мужская обувь", brand: "Puma", discount: 35 },
  { id: 285, title: "Шарф", description: "Шарф. Размеры: S-XXL. Цвета: Разноцветные.", price: 38731, category: "Женские аксессуары", brand: "Puma", discount: 30 },
  { id: 286, title: "Запонки", description: "Запонки. Размеры: S-XXL. Цвета: Разноцветные.", price: 80445, category: "Мужские аксессуары", brand: "Off-White", discount: 30 },
  { id: 287, title: "Ветровка", description: "Ветровка. Размеры: S-XXL. Цвета: Разноцветные.", price: 32815, category: "Женская одежда", brand: "Supreme", discount: 7 },
  { id: 288, title: "Туника", description: "Туника. Размеры: S-XXL. Цвета: Разноцветные.", price: 51491, category: "Женская одежда", brand: "Chanel", discount: 9 },
  { id: 289, title: "Туфли", description: "Туфли. Размеры: S-XXL. Цвета: Разноцветные.", price: 62403, category: "Женская обувь", brand: "Balenciaga", discount: 48 },
  { id: 290, title: "Свитер кашемир", description: "Свитер кашемир. Размеры: S-XXL. Цвета: Разноцветные.", price: 10600, category: "Мужская одежда", brand: "Balenciaga", discount: 43 },
  { id: 291, title: "Балетки", description: "Балетки. Размеры: S-XXL. Цвета: Разноцветные.", price: 56250, category: "Мужская обувь", brand: "Louis Vuitton", discount: 5 },
  { id: 292, title: "Брошь", description: "Брошь. Размеры: S-XXL. Цвета: Разноцветные.", price: 36910, category: "Женские аксессуары", brand: "Off-White", discount: 27 },
  { id: 293, title: "Боди", description: "Боди. Размеры: S-XXL. Цвета: Разноцветные.", price: 19516, category: "Женская одежда", brand: "H&M", discount: 8 },
  { id: 294, title: "Джинсы узкие", description: "Джинсы узкие. Размеры: S-XXL. Цвета: Разноцветные.", price: 58504, category: "Мужская одежда", brand: "Balenciaga", discount: 4 },
  { id: 295, title: "Кроссовки", description: "Кроссовки. Размеры: S-XXL. Цвета: Разноцветные.", price: 42041, category: "Женская обувь", brand: "Chanel", discount: 17 },
  { id: 296, title: "Браслет", description: "Браслет. Размеры: S-XXL. Цвета: Разноцветные.", price: 60051, category: "Мужские аксессуары", brand: "Louis Vuitton", discount: 30 },
  { id: 297, title: "Свитер crew neck", description: "Свитер crew neck. Размеры: S-XXL. Цвета: Разноцветные.", price: 34858, category: "Мужская одежда", brand: "Off-White", discount: 34 },
  { id: 298, title: "Поло", description: "Поло. Размеры: S-XXL. Цвета: Разноцветные.", price: 92749, category: "Мужская одежда", brand: "Reebok", discount: 5 },
  { id: 299, title: "Балетки", description: "Балетки. Размеры: S-XXL. Цвета: Разноцветные.", price: 96642, category: "Мужская обувь", brand: "Puma", discount: 34 },
  { id: 300, title: "Лоферы", description: "Лоферы. Размеры: S-XXL. Цвета: Разноцветные.", price: 95385, category: "Мужская обувь", brand: "Louis Vuitton", discount: 2 },
];

let currentCategory = "all";

const cart = new Map();
const productGrid = document.getElementById("productGrid");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");
const cartItems = document.getElementById("cartItems");
const cartPanel = document.getElementById("cartPanel");
const overlay = document.getElementById("overlay");
const cartToggle = document.getElementById("cartToggle");
const closeCart = document.getElementById("closeCart");
const checkoutBtn = document.getElementById("checkoutBtn");

function formatPrice(value) {
  return value.toLocaleString("ru-RU");
}

function getProductImages(product) {
  const brand = product.brand.toLowerCase();
  const title = product.title.toLowerCase().replace(/[^a-z0-9 ]/g, "");
  const keyword = `${brand} ${title}`;
  return Array.from({ length: 4 }, (_, i) => `https://source.unsplash.com/400x400/?${encodeURIComponent(keyword)}&sig=${product.id * 4 + i}`);
}

function renderProducts() {
  const filteredProducts = currentCategory === "all" ? products : products.filter(product => product.category === currentCategory);
  productGrid.innerHTML = filteredProducts.map(product => {
    const discountedPrice = product.discount ? Math.round(product.price * (1 - product.discount / 100)) : product.price;
    const priceHtml = product.discount ? 
      `<div class="price"><span class="old-price">${formatPrice(product.price)} ₸</span> <span class="new-price">${formatPrice(discountedPrice)} ₸</span> <span class="discount-badge">-${product.discount}%</span></div>` :
      `<div class="price">${formatPrice(product.price)} ₸</div>`;
    const images = getProductImages(product);
    return `
    <article class="card">
      <div class="image-wrapper">
        <img class="main-image" src="${images[0]}" alt="${product.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x400?text=No+Image'" />
        <div class="image-grid">
          ${images.slice(1, 4).map((src, idx) => `
            <img src="${src}" alt="${product.title} фото ${idx + 2}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x400?text=No+Image'" />
          `).join("")}
        </div>
      </div>
      <div class="card-body">
        <h3 class="card-title">${product.brand} ${product.title}</h3>
        ${priceHtml}
        <p class="description">${product.description}</p>
        <button class="add-to-cart" data-id="${product.id}">Добавить в корзину</button>
      </div>
    </article>`;
  }).join("");
}

// Cart functions
cartToggle.addEventListener("click", () => {
  cartPanel.classList.add("open");
  overlay.classList.add("active");
});

closeCart.addEventListener("click", () => {
  cartPanel.classList.remove("open");
  overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
  cartPanel.classList.remove("open");
  overlay.classList.remove("active");
});

function updateCart() {
  cartCount.textContent = cart.size;
  cartTotal.textContent = formatPrice(Array.from(cart.values()).reduce((sum, item) => sum + item.price * item.quantity, 0));
  cartItems.innerHTML = Array.from(cart.entries()).map(([id, item]) => `
    <div class="cart-item">
      <img src="${getProductImages(products.find(p => p.id == id))[0]}" alt="${item.title}" />
      <div>
        <h4>${item.title}</h4>
        <p>${formatPrice(item.price)} ₸ x ${item.quantity}</p>
      </div>
      <button class="remove-item" data-id="${id}">Удалить</button>
    </div>
  `).join("");
}

productGrid.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-to-cart")) {
    const id = e.target.dataset.id;
    const product = products.find(p => p.id == id);
    if (cart.has(id)) {
      cart.get(id).quantity++;
    } else {
      cart.set(id, { ...product, quantity: 1 });
    }
    updateCart();
  }
});

cartItems.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-item")) {
    const id = e.target.dataset.id;
    cart.delete(id);
    updateCart();
  }
});

checkoutBtn.addEventListener("click", () => {
  alert("Заказ оформлен!");
  cart.clear();
  updateCart();
});

function filterProducts(category) {
  currentCategory = category;
  renderProducts();
}

// Initial render
renderProducts();
updateCart();
