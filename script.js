const products = [
  { id: 1, title: "Платье", description: "Платье. Размеры: S-XXL. Цвета: Разноцветные.", price: 58716, category: "Женская одежда", brand: "Off-White", discount: 18 },
  { id: 2, title: "Блузка", description: "Блузка. Размеры: S-XXL. Цвета: Разноцветные.", price: 66619, category: "Женская одежда", brand: "Zara", discount: 35 },
  { id: 3, title: "Юбка", description: "Юбка. Размеры: S-XXL. Цвета: Разноцветные.", price: 32792, category: "Женская одежда", brand: "Levi's", discount: 40 },
  { id: 4, title: "Джинсы", description: "Джинсы. Размеры: S-XXL. Цвета: Разноцветные.", price: 23610, category: "Женская одежда", brand: "Asics", discount: 21 },
  { id: 5, title: "Топ", description: "Топ. Размеры: S-XXL. Цвета: Разноцветные.", price: 44389, category: "Женская одежда", brand: "Balenciaga", discount: 35 },
  { id: 6, title: "Кардиган", description: "Кардиган. Размеры: S-XXL. Цвета: Разноцветные.", price: 83104, category: "Женская одежда", brand: "Nike", discount: 30 },
  { id: 7, title: "Шорты", description: "Шорты. Размеры: S-XXL. Цвета: Разноцветные.", price: 78436, category: "Женская одежда", brand: "Supreme", discount: 22 },
  { id: 8, title: "Свитер", description: "Свитер. Размеры: S-XXL. Цвета: Разноцветные.", price: 49493, category: "Женская одежда", brand: "Chanel", discount: 19 },
  { id: 9, title: "Леггинсы", description: "Леггинсы. Размеры: S-XXL. Цвета: Разноцветные.", price: 9832, category: "Женская одежда", brand: "Nike", discount: 5 },
  { id: 10, title: "Пиджак", description: "Пиджак. Размеры: S-XXL. Цвета: Разноцветные.", price: 2221, category: "Женская одежда", brand: "Prada", discount: 10 },
  { id: 11, title: "Брюки", description: "Брюки. Размеры: S-XXL. Цвета: Разноцветные.", price: 59033, category: "Женская одежда", brand: "Gucci", discount: 24 },
  { id: 12, title: "Куртка", description: "Куртка. Размеры: S-XXL. Цвета: Разноцветные.", price: 50955, category: "Женская одежда", brand: "Nike", discount: 45 },
  { id: 13, title: "Футболка", description: "Футболка. Размеры: S-XXL. Цвета: Разноцветные.", price: 13116, category: "Женская одежда", brand: "Supreme", discount: 31 },
  { id: 14, title: "Сарафан", description: "Сарафан. Размеры: S-XXL. Цвета: Разноцветные.", price: 77461, category: "Женская одежда", brand: "Asics", discount: 18 },
  { id: 15, title: "Жакет", description: "Жакет. Размеры: S-XXL. Цвета: Разноцветные.", price: 23420, category: "Женская одежда", brand: "Adidas", discount: 45 },
  { id: 16, title: "Майка", description: "Майка. Размеры: S-XXL. Цвета: Разноцветные.", price: 73130, category: "Женская одежда", brand: "Balenciaga", discount: 13 },
  { id: 17, title: "Комбинезон", description: "Комбинезон. Размеры: S-XXL. Цвета: Разноцветные.", price: 65998, category: "Женская одежда", brand: "Zara", discount: 29 },
  { id: 18, title: "Пончо", description: "Пончо. Размеры: S-XXL. Цвета: Разноцветные.", price: 62518, category: "Женская одежда", brand: "Nike", discount: 7 },
  { id: 19, title: "Боди", description: "Боди. Размеры: S-XXL. Цвета: Разноцветные.", price: 80556, category: "Женская одежда", brand: "Off-White", discount: 21 },
  { id: 20, title: "Туника", description: "Туника. Размеры: S-XXL. Цвета: Разноцветные.", price: 43222, category: "Женская одежда", brand: "H&M", discount: 10 },
  { id: 21, title: "Шуба", description: "Шуба. Размеры: S-XXL. Цвета: Разноцветные.", price: 48511, category: "Женская одежда", brand: "Reebok", discount: 18 },
  { id: 22, title: "Пальто", description: "Пальто. Размеры: S-XXL. Цвета: Разноцветные.", price: 48328, category: "Женская одежда", brand: "Gucci", discount: 41 },
  { id: 23, title: "Ветровка", description: "Ветровка. Размеры: S-XXL. Цвета: Разноцветные.", price: 47368, category: "Женская одежда", brand: "Prada", discount: 38 },
  { id: 24, title: "Купальник", description: "Купальник. Размеры: S-XXL. Цвета: Разноцветные.", price: 57550, category: "Женская одежда", brand: "Nike", discount: 1 },
  { id: 25, title: "Пижама", description: "Пижама. Размеры: S-XXL. Цвета: Разноцветные.", price: 48362, category: "Женская одежда", brand: "Asics", discount: 40 },
  { id: 26, title: "Халат", description: "Халат. Размеры: S-XXL. Цвета: Разноцветные.", price: 53507, category: "Женская одежда", brand: "H&M", discount: 19 },
  { id: 27, title: "Блейзер", description: "Блейзер. Размеры: S-XXL. Цвета: Разноцветные.", price: 97546, category: "Женская одежда", brand: "Adidas", discount: 1 },
  { id: 28, title: "Ромпер", description: "Ромпер. Размеры: S-XXL. Цвета: Разноцветные.", price: 46043, category: "Женская одежда", brand: "Zara", discount: 32 },
  { id: 29, title: "Кимоно", description: "Кимоно. Размеры: S-XXL. Цвета: Разноцветные.", price: 8222, category: "Женская одежда", brand: "Nike", discount: 42 },
  { id: 30, title: "Бодикон", description: "Бодикон. Размеры: S-XXL. Цвета: Разноцветные.", price: 31398, category: "Женская одежда", brand: "Levi's", discount: 19 },
  { id: 31, title: "Свитшот", description: "Свитшот. Размеры: S-XXL. Цвета: Разноцветные.", price: 4717, category: "Женская одежда", brand: "Chanel", discount: 14 },
  { id: 32, title: "Топ с бретелями", description: "Топ с бретелями. Размеры: S-XXL. Цвета: Разноцветные.", price: 13286, category: "Женская одежда", brand: "Chanel", discount: 29 },
  { id: 33, title: "Юбка мини", description: "Юбка мини. Размеры: S-XXL. Цвета: Разноцветные.", price: 12997, category: "Женская одежда", brand: "Chanel", discount: 39 },
  { id: 34, title: "Платье вечернее", description: "Платье вечернее. Размеры: S-XXL. Цвета: Разноцветные.", price: 95663, category: "Женская одежда", brand: "Reebok", discount: 49 },
  { id: 35, title: "Брюки широкие", description: "Брюки широкие. Размеры: S-XXL. Цвета: Разноцветные.", price: 5785, category: "Женская одежда", brand: "Adidas", discount: 49 },
  { id: 36, title: "Футболка с принтом", description: "Футболка с принтом. Размеры: S-XXL. Цвета: Разноцветные.", price: 95523, category: "Женская одежда", brand: "Puma", discount: 7 },
  { id: 37, title: "Кардиган длинный", description: "Кардиган длинный. Размеры: S-XXL. Цвета: Разноцветные.", price: 82309, category: "Женская одежда", brand: "Gucci", discount: 49 },
  { id: 38, title: "Шорты укороченные", description: "Шорты укороченные. Размеры: S-XXL. Цвета: Разноцветные.", price: 64774, category: "Женская одежда", brand: "Louis Vuitton", discount: 24 },
  { id: 39, title: "Свитер с горлом", description: "Свитер с горлом. Размеры: S-XXL. Цвета: Разноцветные.", price: 32025, category: "Женская одежда", brand: "Gucci", discount: 28 },
  { id: 40, title: "Леггинсы с карманами", description: "Леггинсы с карманами. Размеры: S-XXL. Цвета: Разноцветные.", price: 90067, category: "Женская одежда", brand: "Off-White", discount: 41 },
  { id: 41, title: "Пиджак короткий", description: "Пиджак короткий. Размеры: S-XXL. Цвета: Разноцветные.", price: 8786, category: "Женская одежда", brand: "Louis Vuitton", discount: 14 },
  { id: 42, title: "Брюки кожаные", description: "Брюки кожаные. Размеры: S-XXL. Цвета: Разноцветные.", price: 77171, category: "Женская одежда", brand: "Adidas", discount: 22 },
  { id: 43, title: "Футболка длинная", description: "Футболка длинная. Размеры: S-XXL. Цвета: Разноцветные.", price: 88162, category: "Женская одежда", brand: "Reebok", discount: 31 },
  { id: 44, title: "Сарафан пляжный", description: "Сарафан пляжный. Размеры: S-XXL. Цвета: Разноцветные.", price: 72899, category: "Женская одежда", brand: "Prada", discount: 2 },
  { id: 45, title: "Жакет кожаный", description: "Жакет кожаный. Размеры: S-XXL. Цвета: Разноцветные.", price: 53399, category: "Женская одежда", brand: "Balenciaga", discount: 16 },
  { id: 46, title: "Майка с вырезом", description: "Майка с вырезом. Размеры: S-XXL. Цвета: Разноцветные.", price: 86134, category: "Женская одежда", brand: "Zara", discount: 9 },
  { id: 47, title: "Комбинезон рабочий", description: "Комбинезон рабочий. Размеры: S-XXL. Цвета: Разноцветные.", price: 70956, category: "Женская одежда", brand: "Levi's", discount: 15 },
  { id: 48, title: "Пончо с капюшоном", description: "Пончо с капюшоном. Размеры: S-XXL. Цвета: Разноцветные.", price: 12781, category: "Женская одежда", brand: "Supreme", discount: 25 },
  { id: 49, title: "Боди с кружевом", description: "Боди с кружевом. Размеры: S-XXL. Цвета: Разноцветные.", price: 52293, category: "Женская одежда", brand: "Levi's", discount: 47 },
  { id: 50, title: "Туника с рукавами", description: "Туника с рукавами. Размеры: S-XXL. Цвета: Разноцветные.", price: 76492, category: "Женская одежда", brand: "Puma", discount: 9 },
  { id: 51, title: "Футболка", description: "Футболка. Размеры: S-XXL. Цвета: Разноцветные.", price: 69537, category: "Мужская одежда", brand: "Levi's", discount: 15 },
  { id: 52, title: "Джинсы", description: "Джинсы. Размеры: S-XXL. Цвета: Разноцветные.", price: 23917, category: "Мужская одежда", brand: "Louis Vuitton", discount: 10 },
  { id: 53, title: "Рубашка", description: "Рубашка. Размеры: S-XXL. Цвета: Разноцветные.", price: 93929, category: "Мужская одежда", brand: "Balenciaga", discount: 33 },
  { id: 54, title: "Худи", description: "Худи. Размеры: S-XXL. Цвета: Разноцветные.", price: 81063, category: "Мужская одежда", brand: "Off-White", discount: 47 },
  { id: 55, title: "Шорты", description: "Шорты. Размеры: S-XXL. Цвета: Разноцветные.", price: 60635, category: "Мужская одежда", brand: "Louis Vuitton", discount: 38 },
  { id: 56, title: "Куртка", description: "Куртка. Размеры: S-XXL. Цвета: Разноцветные.", price: 45291, category: "Мужская одежда", brand: "Off-White", discount: 40 },
  { id: 57, title: "Брюки", description: "Брюки. Размеры: S-XXL. Цвета: Разноцветные.", price: 32911, category: "Мужская одежда", brand: "Levi's", discount: 23 },
  { id: 58, title: "Поло", description: "Поло. Размеры: S-XXL. Цвета: Разноцветные.", price: 69166, category: "Мужская одежда", brand: "Adidas", discount: 11 },
  { id: 59, title: "Свитер", description: "Свитер. Размеры: S-XXL. Цвета: Разноцветные.", price: 98483, category: "Мужская одежда", brand: "Puma", discount: 49 },
  { id: 60, title: "Штаны", description: "Штаны. Размеры: S-XXL. Цвета: Разноцветные.", price: 90688, category: "Мужская одежда", brand: "Levi's", discount: 12 },
  { id: 61, title: "Костюм", description: "Костюм. Размеры: S-XXL. Цвета: Разноцветные.", price: 87019, category: "Мужская одежда", brand: "H&M", discount: 5 },
  { id: 62, title: "Пиджак", description: "Пиджак. Размеры: S-XXL. Цвета: Разноцветные.", price: 56840, category: "Мужская одежда", brand: "Asics", discount: 3 },
  { id: 63, title: "Брюки классические", description: "Брюки классические. Размеры: S-XXL. Цвета: Разноцветные.", price: 85137, category: "Мужская одежда", brand: "H&M", discount: 39 },
  { id: 64, title: "Футболка с принтом", description: "Футболка с принтом. Размеры: S-XXL. Цвета: Разноцветные.", price: 73700, category: "Мужская одежда", brand: "Louis Vuitton", discount: 43 },
  { id: 65, title: "Шорты пляжные", description: "Шорты пляжные. Размеры: S-XXL. Цвета: Разноцветные.", price: 40250, category: "Мужская одежда", brand: "Louis Vuitton", discount: 24 },
  { id: 66, title: "Куртка бомбер", description: "Куртка бомбер. Размеры: S-XXL. Цвета: Разноцветные.", price: 19812, category: "Мужская одежда", brand: "Gucci", discount: 25 },
  { id: 67, title: "Брюки джинсовые", description: "Брюки джинсовые. Размеры: S-XXL. Цвета: Разноцветные.", price: 90856, category: "Мужская одежда", brand: "Gucci", discount: 12 },
  { id: 68, title: "Поло с карманом", description: "Поло с карманом. Размеры: S-XXL. Цвета: Разноцветные.", price: 10672, category: "Мужская одежда", brand: "Asics", discount: 4 },
  { id: 69, title: "Свитер с воротом", description: "Свитер с воротом. Размеры: S-XXL. Цвета: Разноцветные.", price: 65310, category: "Мужская одежда", brand: "Balenciaga", discount: 22 },
  { id: 70, title: "Штаны cargo", description: "Штаны cargo. Размеры: S-XXL. Цвета: Разноцветные.", price: 20835, category: "Мужская одежда", brand: "Chanel", discount: 20 },
  { id: 71, title: "Футболка длинная", description: "Футболка длинная. Размеры: S-XXL. Цвета: Разноцветные.", price: 98014, category: "Мужская одежда", brand: "Chanel", discount: 27 },
  { id: 72, title: "Джинсы узкие", description: "Джинсы узкие. Размеры: S-XXL. Цвета: Разноцветные.", price: 4846, category: "Мужская одежда", brand: "Zara", discount: 0 },
  { id: 73, title: "Рубашка клетчатая", description: "Рубашка клетчатая. Размеры: S-XXL. Цвета: Разноцветные.", price: 78087, category: "Мужская одежда", brand: "Off-White", discount: 33 },
  { id: 74, title: "Худи oversized", description: "Худи oversized. Размеры: S-XXL. Цвета: Разноцветные.", price: 36898, category: "Мужская одежда", brand: "Balenciaga", discount: 10 },
  { id: 75, title: "Шорты спортивные", description: "Шорты спортивные. Размеры: S-XXL. Цвета: Разноцветные.", price: 59808, category: "Мужская одежда", brand: "Zara", discount: 49 },
  { id: 76, title: "Куртка кожаная", description: "Куртка кожаная. Размеры: S-XXL. Цвета: Разноцветные.", price: 62397, category: "Мужская одежда", brand: "Puma", discount: 49 },
  { id: 77, title: "Брюки широкие", description: "Брюки широкие. Размеры: S-XXL. Цвета: Разноцветные.", price: 51993, category: "Мужская одежда", brand: "Puma", discount: 10 },
  { id: 78, title: "Поло Ralph Lauren", description: "Поло Ralph Lauren. Размеры: S-XXL. Цвета: Разноцветные.", price: 37497, category: "Мужская одежда", brand: "H&M", discount: 12 },
  { id: 79, title: "Свитер кашемир", description: "Свитер кашемир. Размеры: S-XXL. Цвета: Разноцветные.", price: 16040, category: "Мужская одежда", brand: "Louis Vuitton", discount: 24 },
  { id: 80, title: "Штаны льняные", description: "Штаны льняные. Размеры: S-XXL. Цвета: Разноцветные.", price: 24153, category: "Мужская одежда", brand: "Supreme", discount: 41 },
  { id: 81, title: "Футболка с V-вырезом", description: "Футболка с V-вырезом. Размеры: S-XXL. Цвета: Разноцветные.", price: 85121, category: "Мужская одежда", brand: "Zara", discount: 25 },
  { id: 82, title: "Джинсы рваные", description: "Джинсы рваные. Размеры: S-XXL. Цвета: Разноцветные.", price: 67360, category: "Мужская одежда", brand: "Zara", discount: 3 },
  { id: 83, title: "Рубашка linen", description: "Рубашка linen. Размеры: S-XXL. Цвета: Разноцветные.", price: 35996, category: "Мужская одежда", brand: "Zara", discount: 9 },
  { id: 84, title: "Худи с капюшоном", description: "Худи с капюшоном. Размеры: S-XXL. Цвета: Разноцветные.", price: 4995, category: "Мужская одежда", brand: "Levi's", discount: 50 },
  { id: 85, title: "Шорты chino", description: "Шорты chino. Размеры: S-XXL. Цвета: Разноцветные.", price: 79429, category: "Мужская одежда", brand: "Adidas", discount: 1 },
  { id: 86, title: "Куртка trench", description: "Куртка trench. Размеры: S-XXL. Цвета: Разноцветные.", price: 10625, category: "Мужская одежда", brand: "Louis Vuitton", discount: 28 },
  { id: 87, title: "Брюки slim fit", description: "Брюки slim fit. Размеры: S-XXL. Цвета: Разноцветные.", price: 82130, category: "Мужская одежда", brand: "Off-White", discount: 44 },
  { id: 88, title: "Поло pique", description: "Поло pique. Размеры: S-XXL. Цвета: Разноцветные.", price: 80058, category: "Мужская одежда", brand: "Off-White", discount: 1 },
  { id: 89, title: "Свитер crew neck", description: "Свитер crew neck. Размеры: S-XXL. Цвета: Разноцветные.", price: 66657, category: "Мужская одежда", brand: "Supreme", discount: 20 },
  { id: 90, title: "Штаны relaxed", description: "Штаны relaxed. Размеры: S-XXL. Цвета: Разноцветные.", price: 68862, category: "Мужская одежда", brand: "Reebok", discount: 28 },
  { id: 91, title: "Кроссовки", description: "Кроссовки. Размеры: S-XXL. Цвета: Разноцветные.", price: 11911, category: "Женская обувь", brand: "Nike", discount: 24 },
  { id: 92, title: "Ботинки", description: "Ботинки. Размеры: S-XXL. Цвета: Разноцветные.", price: 33942, category: "Женская обувь", brand: "Balenciaga", discount: 9 },
  { id: 93, title: "Туфли", description: "Туфли. Размеры: S-XXL. Цвета: Разноцветные.", price: 86270, category: "Женская обувь", brand: "Reebok", discount: 3 },
  { id: 94, title: "Сандалии", description: "Сандалии. Размеры: S-XXL. Цвета: Разноцветные.", price: 81014, category: "Женская обувь", brand: "Off-White", discount: 38 },
  { id: 95, title: "Балетки", description: "Балетки. Размеры: S-XXL. Цвета: Разноцветные.", price: 73411, category: "Женская обувь", brand: "H&M", discount: 16 },
  { id: 96, title: "Сапоги", description: "Сапоги. Размеры: S-XXL. Цвета: Разноцветные.", price: 45214, category: "Женская обувь", brand: "Supreme", discount: 50 },
  { id: 97, title: "Кеды", description: "Кеды. Размеры: S-XXL. Цвета: Разноцветные.", price: 21705, category: "Женская обувь", brand: "Prada", discount: 18 },
  { id: 98, title: "Лоферы", description: "Лоферы. Размеры: S-XXL. Цвета: Разноцветные.", price: 47425, category: "Женская обувь", brand: "Reebok", discount: 19 },
  { id: 99, title: "Мюли", description: "Мюли. Размеры: S-XXL. Цвета: Разноцветные.", price: 57397, category: "Женская обувь", brand: "Adidas", discount: 37 },
  { id: 100, title: "Эспадрильи", description: "Эспадрильи. Размеры: S-XXL. Цвета: Разноцветные.", price: 66500, category: "Женская обувь", brand: "Levi's", discount: 34 },
  { id: 101, title: "Кроссовки", description: "Кроссовки. Размеры: S-XXL. Цвета: Разноцветные.", price: 13624, category: "Мужская обувь", brand: "Prada", discount: 23 },
  { id: 102, title: "Ботинки", description: "Ботинки. Размеры: S-XXL. Цвета: Разноцветные.", price: 2098, category: "Мужская обувь", brand: "Adidas", discount: 39 },
  { id: 103, title: "Туфли", description: "Туфли. Размеры: S-XXL. Цвета: Разноцветные.", price: 84785, category: "Мужская обувь", brand: "H&M", discount: 28 },
  { id: 104, title: "Сандалии", description: "Сандалии. Размеры: S-XXL. Цвета: Разноцветные.", price: 69099, category: "Мужская обувь", brand: "Reebok", discount: 15 },
  { id: 105, title: "Балетки", description: "Балетки. Размеры: S-XXL. Цвета: Разноцветные.", price: 73262, category: "Мужская обувь", brand: "Chanel", discount: 22 },
  { id: 106, title: "Сапоги", description: "Сапоги. Размеры: S-XXL. Цвета: Разноцветные.", price: 22618, category: "Мужская обувь", brand: "Levi's", discount: 43 },
  { id: 107, title: "Кеды", description: "Кеды. Размеры: S-XXL. Цвета: Разноцветные.", price: 45092, category: "Мужская обувь", brand: "Asics", discount: 14 },
  { id: 108, title: "Лоферы", description: "Лоферы. Размеры: S-XXL. Цвета: Разноцветные.", price: 70051, category: "Мужская обувь", brand: "Zara", discount: 31 },
  { id: 109, title: "Мюли", description: "Мюли. Размеры: S-XXL. Цвета: Разноцветные.", price: 72007, category: "Мужская обувь", brand: "Nike", discount: 1 },
  { id: 110, title: "Эспадрильи", description: "Эспадрильи. Размеры: S-XXL. Цвета: Разноцветные.", price: 13194, category: "Мужская обувь", brand: "Gucci", discount: 40 },
  { id: 111, title: "Сумка", description: "Сумка. Размеры: S-XXL. Цвета: Разноцветные.", price: 27311, category: "Женские аксессуары", brand: "Prada", discount: 21 },
  { id: 112, title: "Шарф", description: "Шарф. Размеры: S-XXL. Цвета: Разноцветные.", price: 74003, category: "Женские аксессуары", brand: "Louis Vuitton", discount: 19 },
  { id: 113, title: "Колье", description: "Колье. Размеры: S-XXL. Цвета: Разноцветные.", price: 2788, category: "Женские аксессуары", brand: "Reebok", discount: 0 },
  { id: 114, title: "Серьги", description: "Серьги. Размеры: S-XXL. Цвета: Разноцветные.", price: 30657, category: "Женские аксессуары", brand: "Gucci", discount: 4 },
  { id: 115, title: "Ремень", description: "Ремень. Размеры: S-XXL. Цвета: Разноцветные.", price: 67885, category: "Женские аксессуары", brand: "Chanel", discount: 36 },
  { id: 116, title: "Шляпа", description: "Шляпа. Размеры: S-XXL. Цвета: Разноцветные.", price: 39521, category: "Женские аксессуары", brand: "Nike", discount: 12 },
  { id: 117, title: "Очки", description: "Очки. Размеры: S-XXL. Цвета: Разноцветные.", price: 85323, category: "Женские аксессуары", brand: "Prada", discount: 44 },
  { id: 118, title: "Кошелек", description: "Кошелек. Размеры: S-XXL. Цвета: Разноцветные.", price: 81414, category: "Женские аксессуары", brand: "Balenciaga", discount: 2 },
  { id: 119, title: "Браслет", description: "Браслет. Размеры: S-XXL. Цвета: Разноцветные.", price: 94317, category: "Женские аксессуары", brand: "Prada", discount: 23 },
  { id: 120, title: "Перчатки", description: "Перчатки. Размеры: S-XXL. Цвета: Разноцветные.", price: 32425, category: "Женские аксессуары", brand: "Off-White", discount: 3 },
  { id: 121, title: "Клатч", description: "Клатч. Размеры: S-XXL. Цвета: Разноцветные.", price: 13012, category: "Женские аксессуары", brand: "Puma", discount: 6 },
  { id: 122, title: "Платок", description: "Платок. Размеры: S-XXL. Цвета: Разноцветные.", price: 62697, category: "Женские аксессуары", brand: "Zara", discount: 2 },
  { id: 123, title: "Брошь", description: "Брошь. Размеры: S-XXL. Цвета: Разноцветные.", price: 26581, category: "Женские аксессуары", brand: "Adidas", discount: 8 },
  { id: 124, title: "Клипсы", description: "Клипсы. Размеры: S-XXL. Цвета: Разноцветные.", price: 77964, category: "Женские аксессуары", brand: "Asics", discount: 1 },
  { id: 125, title: "Пояс", description: "Пояс. Размеры: S-XXL. Цвета: Разноцветные.", price: 76574, category: "Женские аксессуары", brand: "Nike", discount: 0 },
  { id: 126, title: "Кепка", description: "Кепка. Размеры: S-XXL. Цвета: Разноцветные.", price: 74277, category: "Женские аксессуары", brand: "Supreme", discount: 31 },
  { id: 127, title: "Очки для чтения", description: "Очки для чтения. Размеры: S-XXL. Цвета: Разноцветные.", price: 59193, category: "Женские аксессуары", brand: "Chanel", discount: 1 },
  { id: 128, title: "Кошелек с цепочкой", description: "Кошелек с цепочкой. Размеры: S-XXL. Цвета: Разноцветные.", price: 45312, category: "Женские аксессуары", brand: "Adidas", discount: 41 },
  { id: 129, title: "Кольцо", description: "Кольцо. Размеры: S-XXL. Цвета: Разноцветные.", price: 9977, category: "Женские аксессуары", brand: "Zara", discount: 17 },
  { id: 130, title: "Варежки", description: "Варежки. Размеры: S-XXL. Цвета: Разноцветные.", price: 51492, category: "Женские аксессуары", brand: "Reebok", discount: 12 },
  { id: 131, title: "Сумка рюкзак", description: "Сумка рюкзак. Размеры: S-XXL. Цвета: Разноцветные.", price: 59265, category: "Женские аксессуары", brand: "Supreme", discount: 10 },
  { id: 132, title: "Шарф кашемир", description: "Шарф кашемир. Размеры: S-XXL. Цвета: Разноцветные.", price: 46200, category: "Женские аксессуары", brand: "Puma", discount: 20 },
  { id: 133, title: "Кулон", description: "Кулон. Размеры: S-XXL. Цвета: Разноцветные.", price: 80736, category: "Женские аксессуары", brand: "Reebok", discount: 48 },
  { id: 134, title: "Серьги с камнями", description: "Серьги с камнями. Размеры: S-XXL. Цвета: Разноцветные.", price: 9486, category: "Женские аксессуары", brand: "Zara", discount: 3 },
  { id: 135, title: "Ремень с пряжкой", description: "Ремень с пряжкой. Размеры: S-XXL. Цвета: Разноцветные.", price: 46483, category: "Женские аксессуары", brand: "Zara", discount: 10 },
  { id: 136, title: "Ремень", description: "Ремень. Размеры: S-XXL. Цвета: Разноцветные.", price: 6657, category: "Мужские аксессуары", brand: "Asics", discount: 48 },
  { id: 137, title: "Часы", description: "Часы. Размеры: S-XXL. Цвета: Разноцветные.", price: 84083, category: "Мужские аксессуары", brand: "Adidas", discount: 24 },
  { id: 138, title: "Кошелек", description: "Кошелек. Размеры: S-XXL. Цвета: Разноцветные.", price: 86579, category: "Мужские аксессуары", brand: "Asics", discount: 45 },
  { id: 139, title: "Очки", description: "Очки. Размеры: S-XXL. Цвета: Разноцветные.", price: 76725, category: "Мужские аксессуары", brand: "Chanel", discount: 16 },
  { id: 140, title: "Шарф", description: "Шарф. Размеры: S-XXL. Цвета: Разноцветные.", price: 2914, category: "Мужские аксессуары", brand: "Gucci", discount: 47 },
  { id: 141, title: "Перчатки", description: "Перчатки. Размеры: S-XXL. Цвета: Разноцветные.", price: 41479, category: "Мужские аксессуары", brand: "Levi's", discount: 40 },
  { id: 142, title: "Браслет", description: "Браслет. Размеры: S-XXL. Цвета: Разноцветные.", price: 29200, category: "Мужские аксессуары", brand: "Prada", discount: 50 },
  { id: 143, title: "Ключница", description: "Ключница. Размеры: S-XXL. Цвета: Разноцветные.", price: 23173, category: "Мужские аксессуары", brand: "Reebok", discount: 45 },
  { id: 144, title: "Шляпа", description: "Шляпа. Размеры: S-XXL. Цвета: Разноцветные.", price: 46588, category: "Мужские аксессуары", brand: "Adidas", discount: 3 },
  { id: 145, title: "Запонки", description: "Запонки. Размеры: S-XXL. Цвета: Разноцветные.", price: 77702, category: "Мужские аксессуары", brand: "Prada", discount: 13 },
  { id: 146, title: "Портмоне", description: "Портмоне. Размеры: S-XXL. Цвета: Разноцветные.", price: 62682, category: "Мужские аксессуары", brand: "Chanel", discount: 10 },
  { id: 147, title: "Часы наручные", description: "Часы наручные. Размеры: S-XXL. Цвета: Разноцветные.", price: 31917, category: "Мужские аксессуары", brand: "Nike", discount: 11 },
  { id: 148, title: "Кошелек с RFID", description: "Кошелек с RFID. Размеры: S-XXL. Цвета: Разноцветные.", price: 9693, category: "Мужские аксессуары", brand: "Reebok", discount: 32 },
  { id: 149, title: "Очки для чтения", description: "Очки для чтения. Размеры: S-XXL. Цвета: Разноцветные.", price: 59268, category: "Мужские аксессуары", brand: "Levi's", discount: 33 },
  { id: 150, title: "Шарф шерстяной", description: "Шарф шерстяной. Размеры: S-XXL. Цвета: Разноцветные.", price: 15012, category: "Мужские аксессуары", brand: "H&M", discount: 35 },
  { id: 151, title: "Перчатки кожаные", description: "Перчатки кожаные. Размеры: S-XXL. Цвета: Разноцветные.", price: 15685, category: "Мужские аксессуары", brand: "Zara", discount: 42 },
  { id: 152, title: "Браслет кожаный", description: "Браслет кожаный. Размеры: S-XXL. Цвета: Разноцветные.", price: 97213, category: "Мужские аксессуары", brand: "Puma", discount: 17 },
  { id: 153, title: "Ключница с цепью", description: "Ключница с цепью. Размеры: S-XXL. Цвета: Разноцветные.", price: 48229, category: "Мужские аксессуары", brand: "Levi's", discount: 27 },
  { id: 154, title: "Шляпа fedora", description: "Шляпа fedora. Размеры: S-XXL. Цвета: Разноцветные.", price: 84930, category: "Мужские аксессуары", brand: "Supreme", discount: 36 },
  { id: 155, title: "Запонки золотые", description: "Запонки золотые. Размеры: S-XXL. Цвета: Разноцветные.", price: 83157, category: "Мужские аксессуары", brand: "Off-White", discount: 0 },
  { id: 156, title: "Ремень с пряжкой", description: "Ремень с пряжкой. Размеры: S-XXL. Цвета: Разноцветные.", price: 27381, category: "Мужские аксессуары", brand: "Puma", discount: 25 },
  { id: 157, title: "Часы кварцевые", description: "Часы кварцевые. Размеры: S-XXL. Цвета: Разноцветные.", price: 14331, category: "Мужские аксессуары", brand: "Balenciaga", discount: 1 },
  { id: 158, title: "Кошелек с отделениями", description: "Кошелек с отделениями. Размеры: S-XXL. Цвета: Разноцветные.", price: 41135, category: "Мужские аксессуары", brand: "Balenciaga", discount: 35 },
  { id: 159, title: "Очки polarized", description: "Очки polarized. Размеры: S-XXL. Цвета: Разноцветные.", price: 7728, category: "Мужские аксессуары", brand: "H&M", discount: 31 },
  { id: 160, title: "Шарф шелковый", description: "Шарф шелковый. Размеры: S-XXL. Цвета: Разноцветные.", price: 66165, category: "Мужские аксессуары", brand: "Adidas", discount: 16 },
  { id: 161, title: "Лоферы", description: "Лоферы. Размеры: S-XXL. Цвета: Разноцветные.", price: 83478, category: "Женская обувь", brand: "H&M", discount: 36 },
  { id: 162, title: "Эспадрильи", description: "Эспадрильи. Размеры: S-XXL. Цвета: Разноцветные.", price: 67062, category: "Мужская обувь", brand: "Puma", discount: 18 },
  { id: 163, title: "Ботинки", description: "Ботинки. Размеры: S-XXL. Цвета: Разноцветные.", price: 41888, category: "Женская обувь", brand: "Balenciaga", discount: 6 },
  { id: 164, title: "Браслет", description: "Браслет. Размеры: S-XXL. Цвета: Разноцветные.", price: 50063, category: "Женские аксессуары", brand: "Supreme", discount: 19 },
  { id: 165, title: "Пиджак короткий", description: "Пиджак короткий. Размеры: S-XXL. Цвета: Разноцветные.", price: 53820, category: "Женская одежда", brand: "Adidas", discount: 27 },
  { id: 166, title: "Ключница", description: "Ключница. Размеры: S-XXL. Цвета: Разноцветные.", price: 81683, category: "Мужские аксессуары", brand: "Off-White", discount: 30 },
  { id: 167, title: "Кеды", description: "Кеды. Размеры: S-XXL. Цвета: Разноцветные.", price: 83664, category: "Мужская обувь", brand: "Reebok", discount: 0 },
  { id: 168, title: "Брошь", description: "Брошь. Размеры: S-XXL. Цвета: Разноцветные.", price: 50695, category: "Женские аксессуары", brand: "Asics", discount: 8 },
  { id: 169, title: "Ключница", description: "Ключница. Размеры: S-XXL. Цвета: Разноцветные.", price: 6217, category: "Мужские аксессуары", brand: "Gucci", discount: 27 },
  { id: 170, title: "Кроссовки", description: "Кроссовки. Размеры: S-XXL. Цвета: Разноцветные.", price: 78676, category: "Мужская обувь", brand: "Asics", discount: 41 },
  { id: 171, title: "Сарафан пляжный", description: "Сарафан пляжный. Размеры: S-XXL. Цвета: Разноцветные.", price: 1523, category: "Женская одежда", brand: "Asics", discount: 31 },
  { id: 172, title: "Часы кварцевые", description: "Часы кварцевые. Размеры: S-XXL. Цвета: Разноцветные.", price: 46935, category: "Мужские аксессуары", brand: "Asics", discount: 46 },
  { id: 173, title: "Клипсы", description: "Клипсы. Размеры: S-XXL. Цвета: Разноцветные.", price: 96459, category: "Женские аксессуары", brand: "Gucci", discount: 46 },
  { id: 174, title: "Джинсы рваные", description: "Джинсы рваные. Размеры: S-XXL. Цвета: Разноцветные.", price: 55593, category: "Мужская одежда", brand: "Louis Vuitton", discount: 8 },
  { id: 175, title: "Очки", description: "Очки. Размеры: S-XXL. Цвета: Разноцветные.", price: 71926, category: "Мужские аксессуары", brand: "Reebok", discount: 22 },
  { id: 176, title: "Брюки кожаные", description: "Брюки кожаные. Размеры: S-XXL. Цвета: Разноцветные.", price: 84324, category: "Женская одежда", brand: "Zara", discount: 13 },
  { id: 177, title: "Ботинки", description: "Ботинки. Размеры: S-XXL. Цвета: Разноцветные.", price: 73887, category: "Мужская обувь", brand: "Louis Vuitton", discount: 0 },
  { id: 178, title: "Свитер", description: "Свитер. Размеры: S-XXL. Цвета: Разноцветные.", price: 80785, category: "Женская одежда", brand: "Adidas", discount: 22 },
  { id: 179, title: "Ботинки", description: "Ботинки. Размеры: S-XXL. Цвета: Разноцветные.", price: 17085, category: "Мужская обувь", brand: "Off-White", discount: 38 },
  { id: 180, title: "Сапоги", description: "Сапоги. Размеры: S-XXL. Цвета: Разноцветные.", price: 21844, category: "Женская обувь", brand: "Balenciaga", discount: 39 },
  { id: 181, title: "Платок", description: "Платок. Размеры: S-XXL. Цвета: Разноцветные.", price: 14915, category: "Женские аксессуары", brand: "H&M", discount: 32 },
  { id: 182, title: "Пиджак короткий", description: "Пиджак короткий. Размеры: S-XXL. Цвета: Разноцветные.", price: 56324, category: "Женская одежда", brand: "Louis Vuitton", discount: 13 },
  { id: 183, title: "Футболка с принтом", description: "Футболка с принтом. Размеры: S-XXL. Цвета: Разноцветные.", price: 17466, category: "Женская одежда", brand: "Prada", discount: 17 },
  { id: 184, title: "Клипсы", description: "Клипсы. Размеры: S-XXL. Цвета: Разноцветные.", price: 27609, category: "Женские аксессуары", brand: "Adidas", discount: 30 },
  { id: 185, title: "Куртка кожаная", description: "Куртка кожаная. Размеры: S-XXL. Цвета: Разноцветные.", price: 14729, category: "Мужская одежда", brand: "Reebok", discount: 10 },
  { id: 186, title: "Портмоне", description: "Портмоне. Размеры: S-XXL. Цвета: Разноцветные.", price: 91549, category: "Мужские аксессуары", brand: "Asics", discount: 7 },
  { id: 187, title: "Кулон", description: "Кулон. Размеры: S-XXL. Цвета: Разноцветные.", price: 31931, category: "Женские аксессуары", brand: "Off-White", discount: 9 },
  { id: 188, title: "Штаны cargo", description: "Штаны cargo. Размеры: S-XXL. Цвета: Разноцветные.", price: 66949, category: "Мужская одежда", brand: "Off-White", discount: 38 },
  { id: 189, title: "Леггинсы с карманами", description: "Леггинсы с карманами. Размеры: S-XXL. Цвета: Разноцветные.", price: 56605, category: "Женская одежда", brand: "Balenciaga", discount: 12 },
  { id: 190, title: "Мюли", description: "Мюли. Размеры: S-XXL. Цвета: Разноцветные.", price: 86059, category: "Женская обувь", brand: "Levi's", discount: 18 },
  { id: 191, title: "Боди", description: "Боди. Размеры: S-XXL. Цвета: Разноцветные.", price: 58379, category: "Женская одежда", brand: "H&M", discount: 22 },
  { id: 192, title: "Ботинки", description: "Ботинки. Размеры: S-XXL. Цвета: Разноцветные.", price: 39744, category: "Мужская обувь", brand: "Off-White", discount: 48 },
  { id: 193, title: "Кошелек с RFID", description: "Кошелек с RFID. Размеры: S-XXL. Цвета: Разноцветные.", price: 74527, category: "Мужские аксессуары", brand: "Adidas", discount: 15 },
  { id: 194, title: "Кошелек с цепочкой", description: "Кошелек с цепочкой. Размеры: S-XXL. Цвета: Разноцветные.", price: 90860, category: "Женские аксессуары", brand: "Gucci", discount: 1 },
  { id: 195, title: "Эспадрильи", description: "Эспадрильи. Размеры: S-XXL. Цвета: Разноцветные.", price: 80631, category: "Женская обувь", brand: "Off-White", discount: 24 },
  { id: 196, title: "Майка с вырезом", description: "Майка с вырезом. Размеры: S-XXL. Цвета: Разноцветные.", price: 45009, category: "Женская одежда", brand: "Off-White", discount: 6 },
  { id: 197, title: "Рубашка", description: "Рубашка. Размеры: S-XXL. Цвета: Разноцветные.", price: 44723, category: "Мужская одежда", brand: "Balenciaga", discount: 2 },
  { id: 198, title: "Кроссовки", description: "Кроссовки. Размеры: S-XXL. Цвета: Разноцветные.", price: 27486, category: "Женская обувь", brand: "Levi's", discount: 41 },
  { id: 199, title: "Запонки золотые", description: "Запонки золотые. Размеры: S-XXL. Цвета: Разноцветные.", price: 41490, category: "Мужские аксессуары", brand: "Puma", discount: 0 },
  { id: 200, title: "Мюли", description: "Мюли. Размеры: S-XXL. Цвета: Разноцветные.", price: 64341, category: "Женская обувь", brand: "Puma", discount: 18 },
  { id: 201, title: "Балетки", description: "Балетки. Размеры: S-XXL. Цвета: Разноцветные.", price: 2218, category: "Мужская обувь", brand: "H&M", discount: 43 },
  { id: 202, title: "Кошелек", description: "Кошелек. Размеры: S-XXL. Цвета: Разноцветные.", price: 37631, category: "Мужские аксессуары", brand: "Puma", discount: 24 },
  { id: 203, title: "Балетки", description: "Балетки. Размеры: S-XXL. Цвета: Разноцветные.", price: 42597, category: "Мужская обувь", brand: "Supreme", discount: 34 },
  { id: 204, title: "Лоферы", description: "Лоферы. Размеры: S-XXL. Цвета: Разноцветные.", price: 1411, category: "Мужская обувь", brand: "Puma", discount: 12 },
  { id: 205, title: "Поло Ralph Lauren", description: "Поло Ralph Lauren. Размеры: S-XXL. Цвета: Разноцветные.", price: 47043, category: "Мужская одежда", brand: "Asics", discount: 30 },
  { id: 206, title: "Ремень с пряжкой", description: "Ремень с пряжкой. Размеры: S-XXL. Цвета: Разноцветные.", price: 88226, category: "Женские аксессуары", brand: "Off-White", discount: 0 },
  { id: 207, title: "Балетки", description: "Балетки. Размеры: S-XXL. Цвета: Разноцветные.", price: 86306, category: "Мужская обувь", brand: "Asics", discount: 40 },
  { id: 208, title: "Запонки золотые", description: "Запонки золотые. Размеры: S-XXL. Цвета: Разноцветные.", price: 63588, category: "Мужские аксессуары", brand: "Levi's", discount: 3 },
  { id: 209, title: "Шуба", description: "Шуба. Размеры: S-XXL. Цвета: Разноцветные.", price: 83901, category: "Женская одежда", brand: "Supreme", discount: 14 },
  { id: 210, title: "Ботинки", description: "Ботинки. Размеры: S-XXL. Цвета: Разноцветные.", price: 47873, category: "Мужская обувь", brand: "Supreme", discount: 28 },
  { id: 211, title: "Шляпа", description: "Шляпа. Размеры: S-XXL. Цвета: Разноцветные.", price: 5603, category: "Женские аксессуары", brand: "Nike", discount: 11 },
  { id: 212, title: "Лоферы", description: "Лоферы. Размеры: S-XXL. Цвета: Разноцветные.", price: 60722, category: "Мужская обувь", brand: "Nike", discount: 33 },
  { id: 213, title: "Балетки", description: "Балетки. Размеры: S-XXL. Цвета: Разноцветные.", price: 44749, category: "Женская обувь", brand: "Chanel", discount: 46 },
  { id: 214, title: "Серьги", description: "Серьги. Размеры: S-XXL. Цвета: Разноцветные.", price: 82018, category: "Женские аксессуары", brand: "H&M", discount: 2 },
  { id: 215, title: "Мюли", description: "Мюли. Размеры: S-XXL. Цвета: Разноцветные.", price: 14692, category: "Мужская обувь", brand: "Zara", discount: 1 },
  { id: 216, title: "Ключница", description: "Ключница. Размеры: S-XXL. Цвета: Разноцветные.", price: 17095, category: "Мужские аксессуары", brand: "Puma", discount: 14 },
  { id: 217, title: "Портмоне", description: "Портмоне. Размеры: S-XXL. Цвета: Разноцветные.", price: 2281, category: "Мужские аксессуары", brand: "Zara", discount: 24 },
  { id: 218, title: "Свитшот", description: "Свитшот. Размеры: S-XXL. Цвета: Разноцветные.", price: 33750, category: "Женская одежда", brand: "Zara", discount: 29 },
  { id: 219, title: "Худи", description: "Худи. Размеры: S-XXL. Цвета: Разноцветные.", price: 16381, category: "Мужская одежда", brand: "Off-White", discount: 33 },
  { id: 220, title: "Часы наручные", description: "Часы наручные. Размеры: S-XXL. Цвета: Разноцветные.", price: 50596, category: "Мужские аксессуары", brand: "Gucci", discount: 0 },
  { id: 221, title: "Сумка рюкзак", description: "Сумка рюкзак. Размеры: S-XXL. Цвета: Разноцветные.", price: 34408, category: "Женские аксессуары", brand: "Supreme", discount: 9 },
  { id: 222, title: "Мюли", description: "Мюли. Размеры: S-XXL. Цвета: Разноцветные.", price: 50285, category: "Мужская обувь", brand: "Chanel", discount: 29 },
  { id: 223, title: "Браслет", description: "Браслет. Размеры: S-XXL. Цвета: Разноцветные.", price: 15504, category: "Женские аксессуары", brand: "Reebok", discount: 43 },
  { id: 224, title: "Пиджак", description: "Пиджак. Размеры: S-XXL. Цвета: Разноцветные.", price: 97247, category: "Мужская одежда", brand: "Prada", discount: 7 },
  { id: 225, title: "Свитер", description: "Свитер. Размеры: S-XXL. Цвета: Разноцветные.", price: 6548, category: "Женская одежда", brand: "Adidas", discount: 28 },
  { id: 226, title: "Брюки классические", description: "Брюки классические. Размеры: S-XXL. Цвета: Разноцветные.", price: 57708, category: "Мужская одежда", brand: "Louis Vuitton", discount: 23 },
  { id: 227, title: "Шляпа", description: "Шляпа. Размеры: S-XXL. Цвета: Разноцветные.", price: 33610, category: "Мужские аксессуары", brand: "H&M", discount: 16 },
  { id: 228, title: "Серьги", description: "Серьги. Размеры: S-XXL. Цвета: Разноцветные.", price: 52775, category: "Женские аксессуары", brand: "Levi's", discount: 23 },
  { id: 229, title: "Лоферы", description: "Лоферы. Размеры: S-XXL. Цвета: Разноцветные.", price: 83152, category: "Мужская обувь", brand: "Louis Vuitton", discount: 40 },
  { id: 230, title: "Шляпа", description: "Шляпа. Размеры: S-XXL. Цвета: Разноцветные.", price: 63637, category: "Мужские аксессуары", brand: "Levi's", discount: 7 },
  { id: 231, title: "Лоферы", description: "Лоферы. Размеры: S-XXL. Цвета: Разноцветные.", price: 79023, category: "Мужская обувь", brand: "Adidas", discount: 37 },
  { id: 232, title: "Перчатки", description: "Перчатки. Размеры: S-XXL. Цвета: Разноцветные.", price: 75078, category: "Женские аксессуары", brand: "Zara", discount: 9 },
  { id: 233, title: "Комбинезон", description: "Комбинезон. Размеры: S-XXL. Цвета: Разноцветные.", price: 72799, category: "Женская одежда", brand: "Nike", discount: 28 },
  { id: 234, title: "Халат", description: "Халат. Размеры: S-XXL. Цвета: Разноцветные.", price: 52341, category: "Женская одежда", brand: "Supreme", discount: 34 },
  { id: 235, title: "Ботинки", description: "Ботинки. Размеры: S-XXL. Цвета: Разноцветные.", price: 61718, category: "Женская обувь", brand: "Off-White", discount: 4 },
  { id: 236, title: "Пиджак короткий", description: "Пиджак короткий. Размеры: S-XXL. Цвета: Разноцветные.", price: 88401, category: "Женская одежда", brand: "Gucci", discount: 24 },
  { id: 237, title: "Мюли", description: "Мюли. Размеры: S-XXL. Цвета: Разноцветные.", price: 87189, category: "Женская обувь", brand: "Reebok", discount: 14 },
  { id: 238, title: "Туфли", description: "Туфли. Размеры: S-XXL. Цвета: Разноцветные.", price: 34844, category: "Мужская обувь", brand: "Asics", discount: 16 },
  { id: 239, title: "Эспадрильи", description: "Эспадрильи. Размеры: S-XXL. Цвета: Разноцветные.", price: 53050, category: "Мужская обувь", brand: "Prada", discount: 12 },
  { id: 240, title: "Поло", description: "Поло. Размеры: S-XXL. Цвета: Разноцветные.", price: 79419, category: "Мужская одежда", brand: "Chanel", discount: 12 },
  { id: 241, title: "Кошелек", description: "Кошелек. Размеры: S-XXL. Цвета: Разноцветные.", price: 48463, category: "Женские аксессуары", brand: "Zara", discount: 22 },
  { id: 242, title: "Туфли", description: "Туфли. Размеры: S-XXL. Цвета: Разноцветные.", price: 45970, category: "Мужская обувь", brand: "H&M", discount: 50 },
  { id: 243, title: "Кепка", description: "Кепка. Размеры: S-XXL. Цвета: Разноцветные.", price: 27434, category: "Женские аксессуары", brand: "Supreme", discount: 32 },
  { id: 244, title: "Кимоно", description: "Кимоно. Размеры: S-XXL. Цвета: Разноцветные.", price: 87108, category: "Женская одежда", brand: "Reebok", discount: 2 },
  { id: 245, title: "Перчатки", description: "Перчатки. Размеры: S-XXL. Цвета: Разноцветные.", price: 88449, category: "Женские аксессуары", brand: "Asics", discount: 33 },
  { id: 246, title: "Шляпа", description: "Шляпа. Размеры: S-XXL. Цвета: Разноцветные.", price: 89774, category: "Женские аксессуары", brand: "Zara", discount: 34 },
  { id: 247, title: "Кроссовки", description: "Кроссовки. Размеры: S-XXL. Цвета: Разноцветные.", price: 25871, category: "Женская обувь", brand: "Puma", discount: 14 },
  { id: 248, title: "Кроссовки", description: "Кроссовки. Размеры: S-XXL. Цвета: Разноцветные.", price: 72286, category: "Женская обувь", brand: "Zara", discount: 37 },
  { id: 249, title: "Кулон", description: "Кулон. Размеры: S-XXL. Цвета: Разноцветные.", price: 72785, category: "Женские аксессуары", brand: "Zara", discount: 12 },
  { id: 250, title: "Мюли", description: "Мюли. Размеры: S-XXL. Цвета: Разноцветные.", price: 78648, category: "Женская обувь", brand: "Chanel", discount: 13 },
  { id: 251, title: "Шарф", description: "Шарф. Размеры: S-XXL. Цвета: Разноцветные.", price: 64763, category: "Мужские аксессуары", brand: "Chanel", discount: 1 },
  { id: 252, title: "Мюли", description: "Мюли. Размеры: S-XXL. Цвета: Разноцветные.", price: 86444, category: "Мужская обувь", brand: "Louis Vuitton", discount: 1 },
  { id: 253, title: "Сапоги", description: "Сапоги. Размеры: S-XXL. Цвета: Разноцветные.", price: 14669, category: "Женская обувь", brand: "H&M", discount: 4 },
  { id: 254, title: "Сапоги", description: "Сапоги. Размеры: S-XXL. Цвета: Разноцветные.", price: 4267, category: "Мужская обувь", brand: "Nike", discount: 13 },
  { id: 255, title: "Сумка рюкзак", description: "Сумка рюкзак. Размеры: S-XXL. Цвета: Разноцветные.", price: 94956, category: "Женские аксессуары", brand: "Levi's", discount: 39 },
  { id: 256, title: "Футболка", description: "Футболка. Размеры: S-XXL. Цвета: Разноцветные.", price: 94332, category: "Мужская одежда", brand: "Levi's", discount: 13 },
  { id: 257, title: "Жакет кожаный", description: "Жакет кожаный. Размеры: S-XXL. Цвета: Разноцветные.", price: 23911, category: "Женская одежда", brand: "Off-White", discount: 6 },
  { id: 258, title: "Кроссовки", description: "Кроссовки. Размеры: S-XXL. Цвета: Разноцветные.", price: 72947, category: "Мужская обувь", brand: "Off-White", discount: 30 },
  { id: 259, title: "Кроссовки", description: "Кроссовки. Размеры: S-XXL. Цвета: Разноцветные.", price: 62058, category: "Мужская обувь", brand: "H&M", discount: 40 },
  { id: 260, title: "Шляпа", description: "Шляпа. Размеры: S-XXL. Цвета: Разноцветные.", price: 17199, category: "Женские аксессуары", brand: "Gucci", discount: 44 },
  { id: 261, title: "Балетки", description: "Балетки. Размеры: S-XXL. Цвета: Разноцветные.", price: 61489, category: "Женская обувь", brand: "Adidas", discount: 46 },
  { id: 262, title: "Шарф шелковый", description: "Шарф шелковый. Размеры: S-XXL. Цвета: Разноцветные.", price: 13566, category: "Мужские аксессуары", brand: "Chanel", discount: 37 },
  { id: 263, title: "Очки", description: "Очки. Размеры: S-XXL. Цвета: Разноцветные.", price: 19200, category: "Женские аксессуары", brand: "Zara", discount: 25 },
  { id: 264, title: "Клипсы", description: "Клипсы. Размеры: S-XXL. Цвета: Разноцветные.", price: 75135, category: "Женские аксессуары", brand: "Reebok", discount: 10 },
  { id: 265, title: "Свитер кашемир", description: "Свитер кашемир. Размеры: S-XXL. Цвета: Разноцветные.", price: 53222, category: "Мужская одежда", brand: "Supreme", discount: 21 },
  { id: 266, title: "Балетки", description: "Балетки. Размеры: S-XXL. Цвета: Разноцветные.", price: 35803, category: "Женская обувь", brand: "Levi's", discount: 8 },
  { id: 267, title: "Кольцо", description: "Кольцо. Размеры: S-XXL. Цвета: Разноцветные.", price: 97212, category: "Женские аксессуары", brand: "H&M", discount: 1 },
  { id: 268, title: "Поло Ralph Lauren", description: "Поло Ralph Lauren. Размеры: S-XXL. Цвета: Разноцветные.", price: 63058, category: "Мужская одежда", brand: "Prada", discount: 25 },
  { id: 269, title: "Кулон", description: "Кулон. Размеры: S-XXL. Цвета: Разноцветные.", price: 96886, category: "Женские аксессуары", brand: "Asics", discount: 14 },
  { id: 270, title: "Ботинки", description: "Ботинки. Размеры: S-XXL. Цвета: Разноцветные.", price: 84860, category: "Мужская обувь", brand: "Levi's", discount: 50 },
  { id: 271, title: "Ботинки", description: "Ботинки. Размеры: S-XXL. Цвета: Разноцветные.", price: 25338, category: "Мужская обувь", brand: "Supreme", discount: 34 },
  { id: 272, title: "Туфли", description: "Туфли. Размеры: S-XXL. Цвета: Разноцветные.", price: 91178, category: "Женская обувь", brand: "Supreme", discount: 45 },
  { id: 273, title: "Шарф", description: "Шарф. Размеры: S-XXL. Цвета: Разноцветные.", price: 1395, category: "Женские аксессуары", brand: "Prada", discount: 12 },
  { id: 274, title: "Эспадрильи", description: "Эспадрильи. Размеры: S-XXL. Цвета: Разноцветные.", price: 90628, category: "Женская обувь", brand: "Levi's", discount: 5 },
  { id: 275, title: "Туфли", description: "Туфли. Размеры: S-XXL. Цвета: Разноцветные.", price: 28153, category: "Мужская обувь", brand: "Off-White", discount: 2 },
  { id: 276, title: "Кошелек с RFID", description: "Кошелек с RFID. Размеры: S-XXL. Цвета: Разноцветные.", price: 72157, category: "Мужские аксессуары", brand: "H&M", discount: 26 },
  { id: 277, title: "Часы", description: "Часы. Размеры: S-XXL. Цвета: Разноцветные.", price: 47755, category: "Мужские аксессуары", brand: "Zara", discount: 4 },
  { id: 278, title: "Джинсы", description: "Джинсы. Размеры: S-XXL. Цвета: Разноцветные.", price: 4860, category: "Женская одежда", brand: "Supreme", discount: 16 },
  { id: 279, title: "Поло Ralph Lauren", description: "Поло Ralph Lauren. Размеры: S-XXL. Цвета: Разноцветные.", price: 72500, category: "Мужская одежда", brand: "Asics", discount: 6 },
  { id: 280, title: "Очки", description: "Очки. Размеры: S-XXL. Цвета: Разноцветные.", price: 87003, category: "Женские аксессуары", brand: "Gucci", discount: 32 },
  { id: 281, title: "Перчатки кожаные", description: "Перчатки кожаные. Размеры: S-XXL. Цвета: Разноцветные.", price: 65368, category: "Мужские аксессуары", brand: "Puma", discount: 20 },
  { id: 282, title: "Лоферы", description: "Лоферы. Размеры: S-XXL. Цвета: Разноцветные.", price: 16841, category: "Мужская обувь", brand: "Chanel", discount: 27 },
  { id: 283, title: "Ремень с пряжкой", description: "Ремень с пряжкой. Размеры: S-XXL. Цвета: Разноцветные.", price: 95516, category: "Женские аксессуары", brand: "H&M", discount: 32 },
  { id: 284, title: "Шарф кашемир", description: "Шарф кашемир. Размеры: S-XXL. Цвета: Разноцветные.", price: 88893, category: "Женские аксессуары", brand: "Adidas", discount: 12 },
  { id: 285, title: "Футболка с принтом", description: "Футболка с принтом. Размеры: S-XXL. Цвета: Разноцветные.", price: 56331, category: "Мужская одежда", brand: "Off-White", discount: 16 },
  { id: 286, title: "Перчатки", description: "Перчатки. Размеры: S-XXL. Цвета: Разноцветные.", price: 16540, category: "Женские аксессуары", brand: "H&M", discount: 45 },
  { id: 287, title: "Ремень с пряжкой", description: "Ремень с пряжкой. Размеры: S-XXL. Цвета: Разноцветные.", price: 85273, category: "Мужские аксессуары", brand: "Adidas", discount: 29 },
  { id: 288, title: "Юбка", description: "Юбка. Размеры: S-XXL. Цвета: Разноцветные.", price: 11008, category: "Женская одежда", brand: "Supreme", discount: 21 },
  { id: 289, title: "Лоферы", description: "Лоферы. Размеры: S-XXL. Цвета: Разноцветные.", price: 7446, category: "Мужская обувь", brand: "Gucci", discount: 36 },
  { id: 290, title: "Худи oversized", description: "Худи oversized. Размеры: S-XXL. Цвета: Разноцветные.", price: 12576, category: "Мужская одежда", brand: "Supreme", discount: 35 },
  { id: 291, title: "Ключница с цепью", description: "Ключница с цепью. Размеры: S-XXL. Цвета: Разноцветные.", price: 50439, category: "Мужские аксессуары", brand: "Nike", discount: 14 },
  { id: 292, title: "Туфли", description: "Туфли. Размеры: S-XXL. Цвета: Разноцветные.", price: 78176, category: "Женская обувь", brand: "Chanel", discount: 43 },
  { id: 293, title: "Кольцо", description: "Кольцо. Размеры: S-XXL. Цвета: Разноцветные.", price: 3553, category: "Женские аксессуары", brand: "Louis Vuitton", discount: 42 },
  { id: 294, title: "Лоферы", description: "Лоферы. Размеры: S-XXL. Цвета: Разноцветные.", price: 43039, category: "Мужская обувь", brand: "H&M", discount: 11 },
  { id: 295, title: "Футболка с принтом", description: "Футболка с принтом. Размеры: S-XXL. Цвета: Разноцветные.", price: 29967, category: "Мужская одежда", brand: "H&M", discount: 24 },
  { id: 296, title: "Шляпа", description: "Шляпа. Размеры: S-XXL. Цвета: Разноцветные.", price: 33428, category: "Женские аксессуары", brand: "Gucci", discount: 39 },
  { id: 297, title: "Очки", description: "Очки. Размеры: S-XXL. Цвета: Разноцветные.", price: 20609, category: "Мужские аксессуары", brand: "Chanel", discount: 8 },
  { id: 298, title: "Кроссовки", description: "Кроссовки. Размеры: S-XXL. Цвета: Разноцветные.", price: 52979, category: "Женская обувь", brand: "Puma", discount: 36 },
  { id: 299, title: "Сандалии", description: "Сандалии. Размеры: S-XXL. Цвета: Разноцветные.", price: 83094, category: "Женская обувь", brand: "Nike", discount: 16 },
  { id: 300, title: "Туника с рукавами", description: "Туника с рукавами. Размеры: S-XXL. Цвета: Разноцветные.", price: 82154, category: "Женская одежда", brand: "Prada", discount: 49 },
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
