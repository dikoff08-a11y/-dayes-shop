const products = [
  { id: 1, title: "Платье", description: "Платье. Размеры: S-XXL. Цвета: Разноцветные.", price: 45061, category: "Женская одежда", brand: "Off-White", discount: 29 },
  { id: 2, title: "Блузка", description: "Блузка. Размеры: S-XXL. Цвета: Разноцветные.", price: 70759, category: "Женская одежда", brand: "Gucci", discount: 30 },
  { id: 3, title: "Юбка", description: "Юбка. Размеры: S-XXL. Цвета: Разноцветные.", price: 89610, category: "Женская одежда", brand: "Louis Vuitton", discount: 28 },
  { id: 4, title: "Джинсы", description: "Джинсы. Размеры: S-XXL. Цвета: Разноцветные.", price: 76635, category: "Женская одежда", brand: "Off-White", discount: 14 },
  { id: 5, title: "Топ", description: "Топ. Размеры: S-XXL. Цвета: Разноцветные.", price: 78614, category: "Женская одежда", brand: "Levi's", discount: 37 },
  { id: 6, title: "Кардиган", description: "Кардиган. Размеры: S-XXL. Цвета: Разноцветные.", price: 54225, category: "Женская одежда", brand: "Gucci", discount: 44 },
  { id: 7, title: "Шорты", description: "Шорты. Размеры: S-XXL. Цвета: Разноцветные.", price: 37758, category: "Женская одежда", brand: "Balenciaga", discount: 49 },
  { id: 8, title: "Свитер", description: "Свитер. Размеры: S-XXL. Цвета: Разноцветные.", price: 17581, category: "Женская одежда", brand: "Gucci", discount: 37 },
  { id: 9, title: "Леггинсы", description: "Леггинсы. Размеры: S-XXL. Цвета: Разноцветные.", price: 71216, category: "Женская одежда", brand: "Gucci", discount: 46 },
  { id: 10, title: "Пиджак", description: "Пиджак. Размеры: S-XXL. Цвета: Разноцветные.", price: 68206, category: "Женская одежда", brand: "Supreme", discount: 2 },
  { id: 11, title: "Брюки", description: "Брюки. Размеры: S-XXL. Цвета: Разноцветные.", price: 85569, category: "Женская одежда", brand: "Nike", discount: 27 },
  { id: 12, title: "Куртка", description: "Куртка. Размеры: S-XXL. Цвета: Разноцветные.", price: 64016, category: "Женская одежда", brand: "Off-White", discount: 40 },
  { id: 13, title: "Футболка", description: "Футболка. Размеры: S-XXL. Цвета: Разноцветные.", price: 65675, category: "Женская одежда", brand: "Zara", discount: 43 },
  { id: 14, title: "Сарафан", description: "Сарафан. Размеры: S-XXL. Цвета: Разноцветные.", price: 27670, category: "Женская одежда", brand: "Puma", discount: 41 },
  { id: 15, title: "Жакет", description: "Жакет. Размеры: S-XXL. Цвета: Разноцветные.", price: 45269, category: "Женская одежда", brand: "Zara", discount: 11 },
  { id: 16, title: "Майка", description: "Майка. Размеры: S-XXL. Цвета: Разноцветные.", price: 81440, category: "Женская одежда", brand: "Off-White", discount: 47 },
  { id: 17, title: "Комбинезон", description: "Комбинезон. Размеры: S-XXL. Цвета: Разноцветные.", price: 12408, category: "Женская одежда", brand: "Nike", discount: 39 },
  { id: 18, title: "Пончо", description: "Пончо. Размеры: S-XXL. Цвета: Разноцветные.", price: 54566, category: "Женская одежда", brand: "Levi's", discount: 11 },
  { id: 19, title: "Боди", description: "Боди. Размеры: S-XXL. Цвета: Разноцветные.", price: 6967, category: "Женская одежда", brand: "Zara", discount: 45 },
  { id: 20, title: "Туника", description: "Туника. Размеры: S-XXL. Цвета: Разноцветные.", price: 70460, category: "Женская одежда", brand: "Adidas", discount: 24 },
  { id: 21, title: "Шуба", description: "Шуба. Размеры: S-XXL. Цвета: Разноцветные.", price: 5457, category: "Женская одежда", brand: "Gucci", discount: 37 },
  { id: 22, title: "Пальто", description: "Пальто. Размеры: S-XXL. Цвета: Разноцветные.", price: 2591, category: "Женская одежда", brand: "Off-White", discount: 4 },
  { id: 23, title: "Ветровка", description: "Ветровка. Размеры: S-XXL. Цвета: Разноцветные.", price: 35601, category: "Женская одежда", brand: "Puma", discount: 17 },
  { id: 24, title: "Купальник", description: "Купальник. Размеры: S-XXL. Цвета: Разноцветные.", price: 36127, category: "Женская одежда", brand: "Supreme", discount: 21 },
  { id: 25, title: "Пижама", description: "Пижама. Размеры: S-XXL. Цвета: Разноцветные.", price: 45226, category: "Женская одежда", brand: "Reebok", discount: 43 },
  { id: 26, title: "Халат", description: "Халат. Размеры: S-XXL. Цвета: Разноцветные.", price: 54693, category: "Женская одежда", brand: "Puma", discount: 45 },
  { id: 27, title: "Блейзер", description: "Блейзер. Размеры: S-XXL. Цвета: Разноцветные.", price: 24649, category: "Женская одежда", brand: "Louis Vuitton", discount: 5 },
  { id: 28, title: "Ромпер", description: "Ромпер. Размеры: S-XXL. Цвета: Разноцветные.", price: 24453, category: "Женская одежда", brand: "Reebok", discount: 10 },
  { id: 29, title: "Кимоно", description: "Кимоно. Размеры: S-XXL. Цвета: Разноцветные.", price: 60396, category: "Женская одежда", brand: "Balenciaga", discount: 30 },
  { id: 30, title: "Бодикон", description: "Бодикон. Размеры: S-XXL. Цвета: Разноцветные.", price: 73990, category: "Женская одежда", brand: "Asics", discount: 27 },
  { id: 31, title: "Свитшот", description: "Свитшот. Размеры: S-XXL. Цвета: Разноцветные.", price: 28847, category: "Женская одежда", brand: "Louis Vuitton", discount: 0 },
  { id: 32, title: "Топ с бретелями", description: "Топ с бретелями. Размеры: S-XXL. Цвета: Разноцветные.", price: 35405, category: "Женская одежда", brand: "Supreme", discount: 10 },
  { id: 33, title: "Юбка мини", description: "Юбка мини. Размеры: S-XXL. Цвета: Разноцветные.", price: 60943, category: "Женская одежда", brand: "Nike", discount: 37 },
  { id: 34, title: "Платье вечернее", description: "Платье вечернее. Размеры: S-XXL. Цвета: Разноцветные.", price: 62248, category: "Женская одежда", brand: "Nike", discount: 5 },
  { id: 35, title: "Брюки широкие", description: "Брюки широкие. Размеры: S-XXL. Цвета: Разноцветные.", price: 59055, category: "Женская одежда", brand: "Louis Vuitton", discount: 6 },
  { id: 36, title: "Футболка с принтом", description: "Футболка с принтом. Размеры: S-XXL. Цвета: Разноцветные.", price: 24706, category: "Женская одежда", brand: "Reebok", discount: 25 },
  { id: 37, title: "Кардиган длинный", description: "Кардиган длинный. Размеры: S-XXL. Цвета: Разноцветные.", price: 70329, category: "Женская одежда", brand: "H&M", discount: 36 },
  { id: 38, title: "Шорты укороченные", description: "Шорты укороченные. Размеры: S-XXL. Цвета: Разноцветные.", price: 81217, category: "Женская одежда", brand: "Gucci", discount: 24 },
  { id: 39, title: "Свитер с горлом", description: "Свитер с горлом. Размеры: S-XXL. Цвета: Разноцветные.", price: 41297, category: "Женская одежда", brand: "Prada", discount: 43 },
  { id: 40, title: "Леггинсы с карманами", description: "Леггинсы с карманами. Размеры: S-XXL. Цвета: Разноцветные.", price: 34742, category: "Женская одежда", brand: "Louis Vuitton", discount: 16 },
  { id: 41, title: "Пиджак короткий", description: "Пиджак короткий. Размеры: S-XXL. Цвета: Разноцветные.", price: 92121, category: "Женская одежда", brand: "Off-White", discount: 25 },
  { id: 42, title: "Брюки кожаные", description: "Брюки кожаные. Размеры: S-XXL. Цвета: Разноцветные.", price: 72517, category: "Женская одежда", brand: "Asics", discount: 42 },
  { id: 43, title: "Футболка длинная", description: "Футболка длинная. Размеры: S-XXL. Цвета: Разноцветные.", price: 21049, category: "Женская одежда", brand: "Levi's", discount: 15 },
  { id: 44, title: "Сарафан пляжный", description: "Сарафан пляжный. Размеры: S-XXL. Цвета: Разноцветные.", price: 1968, category: "Женская одежда", brand: "Asics", discount: 32 },
  { id: 45, title: "Жакет кожаный", description: "Жакет кожаный. Размеры: S-XXL. Цвета: Разноцветные.", price: 65875, category: "Женская одежда", brand: "Balenciaga", discount: 35 },
  { id: 46, title: "Майка с вырезом", description: "Майка с вырезом. Размеры: S-XXL. Цвета: Разноцветные.", price: 26673, category: "Женская одежда", brand: "Supreme", discount: 0 },
  { id: 47, title: "Комбинезон рабочий", description: "Комбинезон рабочий. Размеры: S-XXL. Цвета: Разноцветные.", price: 45002, category: "Женская одежда", brand: "Louis Vuitton", discount: 25 },
  { id: 48, title: "Пончо с капюшоном", description: "Пончо с капюшоном. Размеры: S-XXL. Цвета: Разноцветные.", price: 67552, category: "Женская одежда", brand: "Nike", discount: 0 },
  { id: 49, title: "Боди с кружевом", description: "Боди с кружевом. Размеры: S-XXL. Цвета: Разноцветные.", price: 34653, category: "Женская одежда", brand: "Balenciaga", discount: 17 },
  { id: 50, title: "Туника с рукавами", description: "Туника с рукавами. Размеры: S-XXL. Цвета: Разноцветные.", price: 38481, category: "Женская одежда", brand: "Balenciaga", discount: 23 },
  { id: 51, title: "Футболка", description: "Футболка. Размеры: S-XXL. Цвета: Разноцветные.", price: 92429, category: "Мужская одежда", brand: "Balenciaga", discount: 46 },
  { id: 52, title: "Джинсы", description: "Джинсы. Размеры: S-XXL. Цвета: Разноцветные.", price: 9790, category: "Мужская одежда", brand: "Chanel", discount: 48 },
  { id: 53, title: "Рубашка", description: "Рубашка. Размеры: S-XXL. Цвета: Разноцветные.", price: 46087, category: "Мужская одежда", brand: "Puma", discount: 19 },
  { id: 54, title: "Худи", description: "Худи. Размеры: S-XXL. Цвета: Разноцветные.", price: 38902, category: "Мужская одежда", brand: "Levi's", discount: 40 },
  { id: 55, title: "Шорты", description: "Шорты. Размеры: S-XXL. Цвета: Разноцветные.", price: 6894, category: "Мужская одежда", brand: "Louis Vuitton", discount: 31 },
  { id: 56, title: "Куртка", description: "Куртка. Размеры: S-XXL. Цвета: Разноцветные.", price: 39936, category: "Мужская одежда", brand: "Off-White", discount: 24 },
  { id: 57, title: "Брюки", description: "Брюки. Размеры: S-XXL. Цвета: Разноцветные.", price: 23351, category: "Мужская одежда", brand: "Gucci", discount: 16 },
  { id: 58, title: "Поло", description: "Поло. Размеры: S-XXL. Цвета: Разноцветные.", price: 79852, category: "Мужская одежда", brand: "Supreme", discount: 39 },
  { id: 59, title: "Свитер", description: "Свитер. Размеры: S-XXL. Цвета: Разноцветные.", price: 91048, category: "Мужская одежда", brand: "Levi's", discount: 25 },
  { id: 60, title: "Штаны", description: "Штаны. Размеры: S-XXL. Цвета: Разноцветные.", price: 6160, category: "Мужская одежда", brand: "Adidas", discount: 24 },
  { id: 61, title: "Костюм", description: "Костюм. Размеры: S-XXL. Цвета: Разноцветные.", price: 55445, category: "Мужская одежда", brand: "Off-White", discount: 11 },
  { id: 62, title: "Пиджак", description: "Пиджак. Размеры: S-XXL. Цвета: Разноцветные.", price: 88899, category: "Мужская одежда", brand: "Prada", discount: 3 },
  { id: 63, title: "Брюки классические", description: "Брюки классические. Размеры: S-XXL. Цвета: Разноцветные.", price: 67237, category: "Мужская одежда", brand: "Gucci", discount: 23 },
  { id: 64, title: "Футболка с принтом", description: "Футболка с принтом. Размеры: S-XXL. Цвета: Разноцветные.", price: 70566, category: "Мужская одежда", brand: "Supreme", discount: 24 },
  { id: 65, title: "Шорты пляжные", description: "Шорты пляжные. Размеры: S-XXL. Цвета: Разноцветные.", price: 61817, category: "Мужская одежда", brand: "Louis Vuitton", discount: 25 },
  { id: 66, title: "Куртка бомбер", description: "Куртка бомбер. Размеры: S-XXL. Цвета: Разноцветные.", price: 80468, category: "Мужская одежда", brand: "Supreme", discount: 26 },
  { id: 67, title: "Брюки джинсовые", description: "Брюки джинсовые. Размеры: S-XXL. Цвета: Разноцветные.", price: 72843, category: "Мужская одежда", brand: "Puma", discount: 34 },
  { id: 68, title: "Поло с карманом", description: "Поло с карманом. Размеры: S-XXL. Цвета: Разноцветные.", price: 22347, category: "Мужская одежда", brand: "Balenciaga", discount: 40 },
  { id: 69, title: "Свитер с воротом", description: "Свитер с воротом. Размеры: S-XXL. Цвета: Разноцветные.", price: 42552, category: "Мужская одежда", brand: "Off-White", discount: 28 },
  { id: 70, title: "Штаны cargo", description: "Штаны cargo. Размеры: S-XXL. Цвета: Разноцветные.", price: 85052, category: "Мужская одежда", brand: "Asics", discount: 36 },
  { id: 71, title: "Футболка длинная", description: "Футболка длинная. Размеры: S-XXL. Цвета: Разноцветные.", price: 71656, category: "Мужская одежда", brand: "Balenciaga", discount: 2 },
  { id: 72, title: "Джинсы узкие", description: "Джинсы узкие. Размеры: S-XXL. Цвета: Разноцветные.", price: 18185, category: "Мужская одежда", brand: "Louis Vuitton", discount: 16 },
  { id: 73, title: "Рубашка клетчатая", description: "Рубашка клетчатая. Размеры: S-XXL. Цвета: Разноцветные.", price: 10568, category: "Мужская одежда", brand: "Supreme", discount: 43 },
  { id: 74, title: "Худи oversized", description: "Худи oversized. Размеры: S-XXL. Цвета: Разноцветные.", price: 12323, category: "Мужская одежда", brand: "Zara", discount: 12 },
  { id: 75, title: "Шорты спортивные", description: "Шорты спортивные. Размеры: S-XXL. Цвета: Разноцветные.", price: 46736, category: "Мужская одежда", brand: "Levi's", discount: 32 },
  { id: 76, title: "Куртка кожаная", description: "Куртка кожаная. Размеры: S-XXL. Цвета: Разноцветные.", price: 64911, category: "Мужская одежда", brand: "Nike", discount: 47 },
  { id: 77, title: "Брюки широкие", description: "Брюки широкие. Размеры: S-XXL. Цвета: Разноцветные.", price: 4290, category: "Мужская одежда", brand: "Louis Vuitton", discount: 33 },
  { id: 78, title: "Поло Ralph Lauren", description: "Поло Ralph Lauren. Размеры: S-XXL. Цвета: Разноцветные.", price: 39387, category: "Мужская одежда", brand: "H&M", discount: 42 },
  { id: 79, title: "Свитер кашемир", description: "Свитер кашемир. Размеры: S-XXL. Цвета: Разноцветные.", price: 53526, category: "Мужская одежда", brand: "Adidas", discount: 26 },
  { id: 80, title: "Штаны льняные", description: "Штаны льняные. Размеры: S-XXL. Цвета: Разноцветные.", price: 7245, category: "Мужская одежда", brand: "Gucci", discount: 26 },
  { id: 81, title: "Футболка с V-вырезом", description: "Футболка с V-вырезом. Размеры: S-XXL. Цвета: Разноцветные.", price: 48628, category: "Мужская одежда", brand: "Gucci", discount: 48 },
  { id: 82, title: "Джинсы рваные", description: "Джинсы рваные. Размеры: S-XXL. Цвета: Разноцветные.", price: 13445, category: "Мужская одежда", brand: "Gucci", discount: 11 },
  { id: 83, title: "Рубашка linen", description: "Рубашка linen. Размеры: S-XXL. Цвета: Разноцветные.", price: 91655, category: "Мужская одежда", brand: "Adidas", discount: 41 },
  { id: 84, title: "Худи с капюшоном", description: "Худи с капюшоном. Размеры: S-XXL. Цвета: Разноцветные.", price: 89660, category: "Мужская одежда", brand: "Louis Vuitton", discount: 1 },
  { id: 85, title: "Шорты chino", description: "Шорты chino. Размеры: S-XXL. Цвета: Разноцветные.", price: 80366, category: "Мужская одежда", brand: "Puma", discount: 7 },
  { id: 86, title: "Куртка trench", description: "Куртка trench. Размеры: S-XXL. Цвета: Разноцветные.", price: 13802, category: "Мужская одежда", brand: "Puma", discount: 31 },
  { id: 87, title: "Брюки slim fit", description: "Брюки slim fit. Размеры: S-XXL. Цвета: Разноцветные.", price: 47444, category: "Мужская одежда", brand: "Nike", discount: 16 },
  { id: 88, title: "Поло pique", description: "Поло pique. Размеры: S-XXL. Цвета: Разноцветные.", price: 31409, category: "Мужская одежда", brand: "Nike", discount: 42 },
  { id: 89, title: "Свитер crew neck", description: "Свитер crew neck. Размеры: S-XXL. Цвета: Разноцветные.", price: 2651, category: "Мужская одежда", brand: "Asics", discount: 4 },
  { id: 90, title: "Штаны relaxed", description: "Штаны relaxed. Размеры: S-XXL. Цвета: Разноцветные.", price: 94314, category: "Мужская одежда", brand: "Supreme", discount: 8 },
  { id: 91, title: "Кроссовки", description: "Кроссовки. Размеры: S-XXL. Цвета: Разноцветные.", price: 62487, category: "Женская обувь", brand: "Off-White", discount: 45 },
  { id: 92, title: "Ботинки", description: "Ботинки. Размеры: S-XXL. Цвета: Разноцветные.", price: 39891, category: "Женская обувь", brand: "Gucci", discount: 49 },
  { id: 93, title: "Туфли", description: "Туфли. Размеры: S-XXL. Цвета: Разноцветные.", price: 22854, category: "Женская обувь", brand: "Asics", discount: 20 },
  { id: 94, title: "Сандалии", description: "Сандалии. Размеры: S-XXL. Цвета: Разноцветные.", price: 15697, category: "Женская обувь", brand: "Zara", discount: 26 },
  { id: 95, title: "Балетки", description: "Балетки. Размеры: S-XXL. Цвета: Разноцветные.", price: 34215, category: "Женская обувь", brand: "Asics", discount: 3 },
  { id: 96, title: "Сапоги", description: "Сапоги. Размеры: S-XXL. Цвета: Разноцветные.", price: 62336, category: "Женская обувь", brand: "Gucci", discount: 39 },
  { id: 97, title: "Кеды", description: "Кеды. Размеры: S-XXL. Цвета: Разноцветные.", price: 71511, category: "Женская обувь", brand: "H&M", discount: 9 },
  { id: 98, title: "Лоферы", description: "Лоферы. Размеры: S-XXL. Цвета: Разноцветные.", price: 32545, category: "Женская обувь", brand: "Reebok", discount: 8 },
  { id: 99, title: "Мюли", description: "Мюли. Размеры: S-XXL. Цвета: Разноцветные.", price: 47419, category: "Женская обувь", brand: "Levi's", discount: 15 },
  { id: 100, title: "Эспадрильи", description: "Эспадрильи. Размеры: S-XXL. Цвета: Разноцветные.", price: 78419, category: "Женская обувь", brand: "Nike", discount: 26 },
  { id: 101, title: "Кроссовки", description: "Кроссовки. Размеры: S-XXL. Цвета: Разноцветные.", price: 52054, category: "Мужская обувь", brand: "Chanel", discount: 24 },
  { id: 102, title: "Ботинки", description: "Ботинки. Размеры: S-XXL. Цвета: Разноцветные.", price: 13464, category: "Мужская обувь", brand: "Chanel", discount: 26 },
  { id: 103, title: "Туфли", description: "Туфли. Размеры: S-XXL. Цвета: Разноцветные.", price: 17685, category: "Мужская обувь", brand: "Levi's", discount: 3 },
  { id: 104, title: "Сандалии", description: "Сандалии. Размеры: S-XXL. Цвета: Разноцветные.", price: 67580, category: "Мужская обувь", brand: "Asics", discount: 2 },
  { id: 105, title: "Балетки", description: "Балетки. Размеры: S-XXL. Цвета: Разноцветные.", price: 36451, category: "Мужская обувь", brand: "Supreme", discount: 35 },
  { id: 106, title: "Сапоги", description: "Сапоги. Размеры: S-XXL. Цвета: Разноцветные.", price: 82054, category: "Мужская обувь", brand: "Balenciaga", discount: 44 },
  { id: 107, title: "Кеды", description: "Кеды. Размеры: S-XXL. Цвета: Разноцветные.", price: 66767, category: "Мужская обувь", brand: "Puma", discount: 35 },
  { id: 108, title: "Лоферы", description: "Лоферы. Размеры: S-XXL. Цвета: Разноцветные.", price: 84035, category: "Мужская обувь", brand: "Reebok", discount: 14 },
  { id: 109, title: "Мюли", description: "Мюли. Размеры: S-XXL. Цвета: Разноцветные.", price: 80678, category: "Мужская обувь", brand: "Puma", discount: 43 },
  { id: 110, title: "Эспадрильи", description: "Эспадрильи. Размеры: S-XXL. Цвета: Разноцветные.", price: 34921, category: "Мужская обувь", brand: "Reebok", discount: 30 },
  { id: 111, title: "Сумка", description: "Сумка. Размеры: S-XXL. Цвета: Разноцветные.", price: 87625, category: "Женские аксессуары", brand: "Reebok", discount: 23 },
  { id: 112, title: "Шарф", description: "Шарф. Размеры: S-XXL. Цвета: Разноцветные.", price: 3463, category: "Женские аксессуары", brand: "Nike", discount: 44 },
  { id: 113, title: "Колье", description: "Колье. Размеры: S-XXL. Цвета: Разноцветные.", price: 14682, category: "Женские аксессуары", brand: "Asics", discount: 48 },
  { id: 114, title: "Серьги", description: "Серьги. Размеры: S-XXL. Цвета: Разноцветные.", price: 1403, category: "Женские аксессуары", brand: "Louis Vuitton", discount: 12 },
  { id: 115, title: "Ремень", description: "Ремень. Размеры: S-XXL. Цвета: Разноцветные.", price: 55513, category: "Женские аксессуары", brand: "Levi's", discount: 11 },
  { id: 116, title: "Шляпа", description: "Шляпа. Размеры: S-XXL. Цвета: Разноцветные.", price: 58251, category: "Женские аксессуары", brand: "H&M", discount: 41 },
  { id: 117, title: "Очки", description: "Очки. Размеры: S-XXL. Цвета: Разноцветные.", price: 94367, category: "Женские аксессуары", brand: "Balenciaga", discount: 16 },
  { id: 118, title: "Кошелек", description: "Кошелек. Размеры: S-XXL. Цвета: Разноцветные.", price: 28879, category: "Женские аксессуары", brand: "Reebok", discount: 23 },
  { id: 119, title: "Браслет", description: "Браслет. Размеры: S-XXL. Цвета: Разноцветные.", price: 91393, category: "Женские аксессуары", brand: "Zara", discount: 19 },
  { id: 120, title: "Перчатки", description: "Перчатки. Размеры: S-XXL. Цвета: Разноцветные.", price: 72947, category: "Женские аксессуары", brand: "Zara", discount: 29 },
  { id: 121, title: "Клатч", description: "Клатч. Размеры: S-XXL. Цвета: Разноцветные.", price: 13185, category: "Женские аксессуары", brand: "Reebok", discount: 25 },
  { id: 122, title: "Платок", description: "Платок. Размеры: S-XXL. Цвета: Разноцветные.", price: 57386, category: "Женские аксессуары", brand: "Levi's", discount: 20 },
  { id: 123, title: "Брошь", description: "Брошь. Размеры: S-XXL. Цвета: Разноцветные.", price: 26008, category: "Женские аксессуары", brand: "Adidas", discount: 22 },
  { id: 124, title: "Клипсы", description: "Клипсы. Размеры: S-XXL. Цвета: Разноцветные.", price: 26759, category: "Женские аксессуары", brand: "Zara", discount: 3 },
  { id: 125, title: "Пояс", description: "Пояс. Размеры: S-XXL. Цвета: Разноцветные.", price: 97987, category: "Женские аксессуары", brand: "Asics", discount: 49 },
  { id: 126, title: "Кепка", description: "Кепка. Размеры: S-XXL. Цвета: Разноцветные.", price: 80018, category: "Женские аксессуары", brand: "Puma", discount: 12 },
  { id: 127, title: "Очки для чтения", description: "Очки для чтения. Размеры: S-XXL. Цвета: Разноцветные.", price: 14622, category: "Женские аксессуары", brand: "Levi's", discount: 22 },
  { id: 128, title: "Кошелек с цепочкой", description: "Кошелек с цепочкой. Размеры: S-XXL. Цвета: Разноцветные.", price: 20989, category: "Женские аксессуары", brand: "Louis Vuitton", discount: 6 },
  { id: 129, title: "Кольцо", description: "Кольцо. Размеры: S-XXL. Цвета: Разноцветные.", price: 54423, category: "Женские аксессуары", brand: "Nike", discount: 31 },
  { id: 130, title: "Варежки", description: "Варежки. Размеры: S-XXL. Цвета: Разноцветные.", price: 64464, category: "Женские аксессуары", brand: "Chanel", discount: 10 },
  { id: 131, title: "Сумка рюкзак", description: "Сумка рюкзак. Размеры: S-XXL. Цвета: Разноцветные.", price: 43871, category: "Женские аксессуары", brand: "Adidas", discount: 3 },
  { id: 132, title: "Шарф кашемир", description: "Шарф кашемир. Размеры: S-XXL. Цвета: Разноцветные.", price: 95510, category: "Женские аксессуары", brand: "Chanel", discount: 46 },
  { id: 133, title: "Кулон", description: "Кулон. Размеры: S-XXL. Цвета: Разноцветные.", price: 61124, category: "Женские аксессуары", brand: "Puma", discount: 45 },
  { id: 134, title: "Серьги с камнями", description: "Серьги с камнями. Размеры: S-XXL. Цвета: Разноцветные.", price: 12932, category: "Женские аксессуары", brand: "Supreme", discount: 10 },
  { id: 135, title: "Ремень с пряжкой", description: "Ремень с пряжкой. Размеры: S-XXL. Цвета: Разноцветные.", price: 42380, category: "Женские аксессуары", brand: "H&M", discount: 21 },
  { id: 136, title: "Ремень", description: "Ремень. Размеры: S-XXL. Цвета: Разноцветные.", price: 68881, category: "Мужские аксессуары", brand: "Gucci", discount: 1 },
  { id: 137, title: "Часы", description: "Часы. Размеры: S-XXL. Цвета: Разноцветные.", price: 11731, category: "Мужские аксессуары", brand: "Reebok", discount: 26 },
  { id: 138, title: "Кошелек", description: "Кошелек. Размеры: S-XXL. Цвета: Разноцветные.", price: 95532, category: "Мужские аксессуары", brand: "Puma", discount: 27 },
  { id: 139, title: "Очки", description: "Очки. Размеры: S-XXL. Цвета: Разноцветные.", price: 17638, category: "Мужские аксессуары", brand: "Nike", discount: 7 },
  { id: 140, title: "Шарф", description: "Шарф. Размеры: S-XXL. Цвета: Разноцветные.", price: 66587, category: "Мужские аксессуары", brand: "Nike", discount: 29 },
  { id: 141, title: "Перчатки", description: "Перчатки. Размеры: S-XXL. Цвета: Разноцветные.", price: 9711, category: "Мужские аксессуары", brand: "Supreme", discount: 42 },
  { id: 142, title: "Браслет", description: "Браслет. Размеры: S-XXL. Цвета: Разноцветные.", price: 69527, category: "Мужские аксессуары", brand: "Chanel", discount: 48 },
  { id: 143, title: "Ключница", description: "Ключница. Размеры: S-XXL. Цвета: Разноцветные.", price: 71636, category: "Мужские аксессуары", brand: "Adidas", discount: 21 },
  { id: 144, title: "Шляпа", description: "Шляпа. Размеры: S-XXL. Цвета: Разноцветные.", price: 51595, category: "Мужские аксессуары", brand: "Reebok", discount: 36 },
  { id: 145, title: "Запонки", description: "Запонки. Размеры: S-XXL. Цвета: Разноцветные.", price: 80163, category: "Мужские аксессуары", brand: "Gucci", discount: 15 },
  { id: 146, title: "Портмоне", description: "Портмоне. Размеры: S-XXL. Цвета: Разноцветные.", price: 68206, category: "Мужские аксессуары", brand: "Prada", discount: 39 },
  { id: 147, title: "Часы наручные", description: "Часы наручные. Размеры: S-XXL. Цвета: Разноцветные.", price: 69400, category: "Мужские аксессуары", brand: "Chanel", discount: 37 },
  { id: 148, title: "Кошелек с RFID", description: "Кошелек с RFID. Размеры: S-XXL. Цвета: Разноцветные.", price: 14277, category: "Мужские аксессуары", brand: "Gucci", discount: 44 },
  { id: 149, title: "Очки для чтения", description: "Очки для чтения. Размеры: S-XXL. Цвета: Разноцветные.", price: 55553, category: "Мужские аксессуары", brand: "Prada", discount: 39 },
  { id: 150, title: "Шарф шерстяной", description: "Шарф шерстяной. Размеры: S-XXL. Цвета: Разноцветные.", price: 66323, category: "Мужские аксессуары", brand: "Zara", discount: 36 },
  { id: 151, title: "Перчатки кожаные", description: "Перчатки кожаные. Размеры: S-XXL. Цвета: Разноцветные.", price: 71651, category: "Мужские аксессуары", brand: "Reebok", discount: 23 },
  { id: 152, title: "Браслет кожаный", description: "Браслет кожаный. Размеры: S-XXL. Цвета: Разноцветные.", price: 98711, category: "Мужские аксессуары", brand: "Gucci", discount: 24 },
  { id: 153, title: "Ключница с цепью", description: "Ключница с цепью. Размеры: S-XXL. Цвета: Разноцветные.", price: 26783, category: "Мужские аксессуары", brand: "Zara", discount: 50 },
  { id: 154, title: "Шляпа fedora", description: "Шляпа fedora. Размеры: S-XXL. Цвета: Разноцветные.", price: 34363, category: "Мужские аксессуары", brand: "Puma", discount: 28 },
  { id: 155, title: "Запонки золотые", description: "Запонки золотые. Размеры: S-XXL. Цвета: Разноцветные.", price: 56632, category: "Мужские аксессуары", brand: "Chanel", discount: 13 },
  { id: 156, title: "Ремень с пряжкой", description: "Ремень с пряжкой. Размеры: S-XXL. Цвета: Разноцветные.", price: 63438, category: "Мужские аксессуары", brand: "Prada", discount: 8 },
  { id: 157, title: "Часы кварцевые", description: "Часы кварцевые. Размеры: S-XXL. Цвета: Разноцветные.", price: 1626, category: "Мужские аксессуары", brand: "Reebok", discount: 22 },
  { id: 158, title: "Кошелек с отделениями", description: "Кошелек с отделениями. Размеры: S-XXL. Цвета: Разноцветные.", price: 1721, category: "Мужские аксессуары", brand: "Louis Vuitton", discount: 47 },
  { id: 159, title: "Очки polarized", description: "Очки polarized. Размеры: S-XXL. Цвета: Разноцветные.", price: 31014, category: "Мужские аксессуары", brand: "Reebok", discount: 40 },
  { id: 160, title: "Шарф шелковый", description: "Шарф шелковый. Размеры: S-XXL. Цвета: Разноцветные.", price: 4994, category: "Мужские аксессуары", brand: "Reebok", discount: 2 },
  { id: 161, title: "Запонки", description: "Запонки. Размеры: S-XXL. Цвета: Разноцветные.", price: 58433, category: "Мужские аксессуары", brand: "Levi's", discount: 31 },
  { id: 162, title: "Балетки", description: "Балетки. Размеры: S-XXL. Цвета: Разноцветные.", price: 43894, category: "Женская обувь", brand: "Off-White", discount: 39 },
  { id: 163, title: "Шарф", description: "Шарф. Размеры: S-XXL. Цвета: Разноцветные.", price: 77464, category: "Женские аксессуары", brand: "Prada", discount: 34 },
  { id: 164, title: "Лоферы", description: "Лоферы. Размеры: S-XXL. Цвета: Разноцветные.", price: 44017, category: "Женская обувь", brand: "Off-White", discount: 16 },
  { id: 165, title: "Ботинки", description: "Ботинки. Размеры: S-XXL. Цвета: Разноцветные.", price: 11896, category: "Мужская обувь", brand: "Gucci", discount: 15 },
  { id: 166, title: "Кроссовки", description: "Кроссовки. Размеры: S-XXL. Цвета: Разноцветные.", price: 5889, category: "Женская обувь", brand: "Off-White", discount: 50 },
  { id: 167, title: "Куртка бомбер", description: "Куртка бомбер. Размеры: S-XXL. Цвета: Разноцветные.", price: 62880, category: "Мужская одежда", brand: "Off-White", discount: 31 },
  { id: 168, title: "Эспадрильи", description: "Эспадрильи. Размеры: S-XXL. Цвета: Разноцветные.", price: 53591, category: "Женская обувь", brand: "Adidas", discount: 11 },
  { id: 169, title: "Рубашка клетчатая", description: "Рубашка клетчатая. Размеры: S-XXL. Цвета: Разноцветные.", price: 72163, category: "Мужская одежда", brand: "Levi's", discount: 10 },
  { id: 170, title: "Худи", description: "Худи. Размеры: S-XXL. Цвета: Разноцветные.", price: 43159, category: "Мужская одежда", brand: "Adidas", discount: 48 },
  { id: 171, title: "Кеды", description: "Кеды. Размеры: S-XXL. Цвета: Разноцветные.", price: 37988, category: "Женская обувь", brand: "Chanel", discount: 45 },
  { id: 172, title: "Часы наручные", description: "Часы наручные. Размеры: S-XXL. Цвета: Разноцветные.", price: 96508, category: "Мужские аксессуары", brand: "Prada", discount: 31 },
  { id: 173, title: "Часы", description: "Часы. Размеры: S-XXL. Цвета: Разноцветные.", price: 59043, category: "Мужские аксессуары", brand: "Supreme", discount: 19 },
  { id: 174, title: "Худи с капюшоном", description: "Худи с капюшоном. Размеры: S-XXL. Цвета: Разноцветные.", price: 7949, category: "Мужская одежда", brand: "Zara", discount: 12 },
  { id: 175, title: "Ромпер", description: "Ромпер. Размеры: S-XXL. Цвета: Разноцветные.", price: 99697, category: "Женская одежда", brand: "Prada", discount: 26 },
  { id: 176, title: "Кеды", description: "Кеды. Размеры: S-XXL. Цвета: Разноцветные.", price: 44134, category: "Мужская обувь", brand: "Reebok", discount: 37 },
  { id: 177, title: "Мюли", description: "Мюли. Размеры: S-XXL. Цвета: Разноцветные.", price: 87722, category: "Мужская обувь", brand: "Adidas", discount: 45 },
  { id: 178, title: "Сандалии", description: "Сандалии. Размеры: S-XXL. Цвета: Разноцветные.", price: 66596, category: "Женская обувь", brand: "Off-White", discount: 28 },
  { id: 179, title: "Эспадрильи", description: "Эспадрильи. Размеры: S-XXL. Цвета: Разноцветные.", price: 14610, category: "Мужская обувь", brand: "Balenciaga", discount: 15 },
  { id: 180, title: "Шорты спортивные", description: "Шорты спортивные. Размеры: S-XXL. Цвета: Разноцветные.", price: 77406, category: "Мужская одежда", brand: "Prada", discount: 0 },
  { id: 181, title: "Ремень с пряжкой", description: "Ремень с пряжкой. Размеры: S-XXL. Цвета: Разноцветные.", price: 76463, category: "Мужские аксессуары", brand: "Nike", discount: 0 },
  { id: 182, title: "Ремень", description: "Ремень. Размеры: S-XXL. Цвета: Разноцветные.", price: 54376, category: "Мужские аксессуары", brand: "Prada", discount: 50 },
  { id: 183, title: "Шляпа", description: "Шляпа. Размеры: S-XXL. Цвета: Разноцветные.", price: 4370, category: "Женские аксессуары", brand: "Levi's", discount: 41 },
  { id: 184, title: "Сапоги", description: "Сапоги. Размеры: S-XXL. Цвета: Разноцветные.", price: 34944, category: "Мужская обувь", brand: "Zara", discount: 6 },
  { id: 185, title: "Штаны relaxed", description: "Штаны relaxed. Размеры: S-XXL. Цвета: Разноцветные.", price: 24282, category: "Мужская одежда", brand: "Prada", discount: 0 },
  { id: 186, title: "Поло с карманом", description: "Поло с карманом. Размеры: S-XXL. Цвета: Разноцветные.", price: 35431, category: "Мужская одежда", brand: "Prada", discount: 18 },
  { id: 187, title: "Куртка", description: "Куртка. Размеры: S-XXL. Цвета: Разноцветные.", price: 91702, category: "Женская одежда", brand: "Gucci", discount: 48 },
  { id: 188, title: "Часы наручные", description: "Часы наручные. Размеры: S-XXL. Цвета: Разноцветные.", price: 32280, category: "Мужские аксессуары", brand: "Louis Vuitton", discount: 50 },
  { id: 189, title: "Лоферы", description: "Лоферы. Размеры: S-XXL. Цвета: Разноцветные.", price: 36073, category: "Мужская обувь", brand: "Off-White", discount: 21 },
  { id: 190, title: "Ремень с пряжкой", description: "Ремень с пряжкой. Размеры: S-XXL. Цвета: Разноцветные.", price: 86195, category: "Женские аксессуары", brand: "Prada", discount: 34 },
  { id: 191, title: "Кроссовки", description: "Кроссовки. Размеры: S-XXL. Цвета: Разноцветные.", price: 13833, category: "Мужская обувь", brand: "Puma", discount: 9 },
  { id: 192, title: "Шуба", description: "Шуба. Размеры: S-XXL. Цвета: Разноцветные.", price: 65227, category: "Женская одежда", brand: "Louis Vuitton", discount: 33 },
  { id: 193, title: "Шляпа", description: "Шляпа. Размеры: S-XXL. Цвета: Разноцветные.", price: 55171, category: "Женские аксессуары", brand: "Chanel", discount: 32 },
  { id: 194, title: "Ботинки", description: "Ботинки. Размеры: S-XXL. Цвета: Разноцветные.", price: 51479, category: "Женская обувь", brand: "Nike", discount: 17 },
  { id: 195, title: "Кошелек с цепочкой", description: "Кошелек с цепочкой. Размеры: S-XXL. Цвета: Разноцветные.", price: 5024, category: "Женские аксессуары", brand: "Chanel", discount: 49 },
  { id: 196, title: "Кеды", description: "Кеды. Размеры: S-XXL. Цвета: Разноцветные.", price: 80889, category: "Женская обувь", brand: "Louis Vuitton", discount: 2 },
  { id: 197, title: "Кеды", description: "Кеды. Размеры: S-XXL. Цвета: Разноцветные.", price: 84613, category: "Женская обувь", brand: "Levi's", discount: 13 },
  { id: 198, title: "Худи", description: "Худи. Размеры: S-XXL. Цвета: Разноцветные.", price: 7047, category: "Мужская одежда", brand: "Supreme", discount: 50 },
  { id: 199, title: "Бодикон", description: "Бодикон. Размеры: S-XXL. Цвета: Разноцветные.", price: 8039, category: "Женская одежда", brand: "Prada", discount: 44 },
  { id: 200, title: "Сапоги", description: "Сапоги. Размеры: S-XXL. Цвета: Разноцветные.", price: 20103, category: "Женская обувь", brand: "Levi's", discount: 38 },
  { id: 201, title: "Варежки", description: "Варежки. Размеры: S-XXL. Цвета: Разноцветные.", price: 66219, category: "Женские аксессуары", brand: "Prada", discount: 14 },
  { id: 202, title: "Шарф кашемир", description: "Шарф кашемир. Размеры: S-XXL. Цвета: Разноцветные.", price: 34285, category: "Женские аксессуары", brand: "Louis Vuitton", discount: 36 },
  { id: 203, title: "Кеды", description: "Кеды. Размеры: S-XXL. Цвета: Разноцветные.", price: 63417, category: "Женская обувь", brand: "Balenciaga", discount: 40 },
  { id: 204, title: "Сандалии", description: "Сандалии. Размеры: S-XXL. Цвета: Разноцветные.", price: 69898, category: "Женская обувь", brand: "Chanel", discount: 1 },
  { id: 205, title: "Лоферы", description: "Лоферы. Размеры: S-XXL. Цвета: Разноцветные.", price: 67244, category: "Мужская обувь", brand: "Reebok", discount: 22 },
  { id: 206, title: "Варежки", description: "Варежки. Размеры: S-XXL. Цвета: Разноцветные.", price: 12738, category: "Женские аксессуары", brand: "Levi's", discount: 48 },
  { id: 207, title: "Сумка", description: "Сумка. Размеры: S-XXL. Цвета: Разноцветные.", price: 41305, category: "Женские аксессуары", brand: "Levi's", discount: 19 },
  { id: 208, title: "Кольцо", description: "Кольцо. Размеры: S-XXL. Цвета: Разноцветные.", price: 49033, category: "Женские аксессуары", brand: "Zara", discount: 32 },
  { id: 209, title: "Кроссовки", description: "Кроссовки. Размеры: S-XXL. Цвета: Разноцветные.", price: 29538, category: "Мужская обувь", brand: "Zara", discount: 21 },
  { id: 210, title: "Футболка длинная", description: "Футболка длинная. Размеры: S-XXL. Цвета: Разноцветные.", price: 21797, category: "Мужская одежда", brand: "Supreme", discount: 35 },
  { id: 211, title: "Шорты пляжные", description: "Шорты пляжные. Размеры: S-XXL. Цвета: Разноцветные.", price: 69583, category: "Мужская одежда", brand: "Chanel", discount: 10 },
  { id: 212, title: "Часы", description: "Часы. Размеры: S-XXL. Цвета: Разноцветные.", price: 34852, category: "Мужские аксессуары", brand: "Puma", discount: 38 },
  { id: 213, title: "Кеды", description: "Кеды. Размеры: S-XXL. Цвета: Разноцветные.", price: 75165, category: "Женская обувь", brand: "Nike", discount: 29 },
  { id: 214, title: "Сапоги", description: "Сапоги. Размеры: S-XXL. Цвета: Разноцветные.", price: 48409, category: "Женская обувь", brand: "Louis Vuitton", discount: 18 },
  { id: 215, title: "Платье вечернее", description: "Платье вечернее. Размеры: S-XXL. Цвета: Разноцветные.", price: 74404, category: "Женская одежда", brand: "Balenciaga", discount: 15 },
  { id: 216, title: "Шарф шелковый", description: "Шарф шелковый. Размеры: S-XXL. Цвета: Разноцветные.", price: 33132, category: "Мужские аксессуары", brand: "Balenciaga", discount: 15 },
  { id: 217, title: "Очки", description: "Очки. Размеры: S-XXL. Цвета: Разноцветные.", price: 93914, category: "Женские аксессуары", brand: "Levi's", discount: 40 },
  { id: 218, title: "Платок", description: "Платок. Размеры: S-XXL. Цвета: Разноцветные.", price: 27928, category: "Женские аксессуары", brand: "Puma", discount: 24 },
  { id: 219, title: "Портмоне", description: "Портмоне. Размеры: S-XXL. Цвета: Разноцветные.", price: 25183, category: "Мужские аксессуары", brand: "Supreme", discount: 8 },
  { id: 220, title: "Жакет кожаный", description: "Жакет кожаный. Размеры: S-XXL. Цвета: Разноцветные.", price: 42930, category: "Женская одежда", brand: "Levi's", discount: 2 },
  { id: 221, title: "Варежки", description: "Варежки. Размеры: S-XXL. Цвета: Разноцветные.", price: 7966, category: "Женские аксессуары", brand: "Zara", discount: 46 },
  { id: 222, title: "Сандалии", description: "Сандалии. Размеры: S-XXL. Цвета: Разноцветные.", price: 90818, category: "Женская обувь", brand: "Louis Vuitton", discount: 44 },
  { id: 223, title: "Серьги с камнями", description: "Серьги с камнями. Размеры: S-XXL. Цвета: Разноцветные.", price: 96608, category: "Женские аксессуары", brand: "Asics", discount: 26 },
  { id: 224, title: "Кеды", description: "Кеды. Размеры: S-XXL. Цвета: Разноцветные.", price: 7628, category: "Женская обувь", brand: "Levi's", discount: 3 },
  { id: 225, title: "Шорты укороченные", description: "Шорты укороченные. Размеры: S-XXL. Цвета: Разноцветные.", price: 38626, category: "Женская одежда", brand: "Levi's", discount: 34 },
  { id: 226, title: "Шорты chino", description: "Шорты chino. Размеры: S-XXL. Цвета: Разноцветные.", price: 90198, category: "Мужская одежда", brand: "Puma", discount: 38 },
  { id: 227, title: "Ботинки", description: "Ботинки. Размеры: S-XXL. Цвета: Разноцветные.", price: 10490, category: "Женская обувь", brand: "Chanel", discount: 19 },
  { id: 228, title: "Балетки", description: "Балетки. Размеры: S-XXL. Цвета: Разноцветные.", price: 8630, category: "Женская обувь", brand: "Levi's", discount: 50 },
  { id: 229, title: "Брюки классические", description: "Брюки классические. Размеры: S-XXL. Цвета: Разноцветные.", price: 55159, category: "Мужская одежда", brand: "Asics", discount: 43 },
  { id: 230, title: "Туника", description: "Туника. Размеры: S-XXL. Цвета: Разноцветные.", price: 13658, category: "Женская одежда", brand: "Balenciaga", discount: 29 },
  { id: 231, title: "Сандалии", description: "Сандалии. Размеры: S-XXL. Цвета: Разноцветные.", price: 78286, category: "Мужская обувь", brand: "Off-White", discount: 1 },
  { id: 232, title: "Худи", description: "Худи. Размеры: S-XXL. Цвета: Разноцветные.", price: 64148, category: "Мужская одежда", brand: "Adidas", discount: 47 },
  { id: 233, title: "Сандалии", description: "Сандалии. Размеры: S-XXL. Цвета: Разноцветные.", price: 10580, category: "Мужская обувь", brand: "Reebok", discount: 24 },
  { id: 234, title: "Платье", description: "Платье. Размеры: S-XXL. Цвета: Разноцветные.", price: 61279, category: "Женская одежда", brand: "Balenciaga", discount: 28 },
  { id: 235, title: "Шорты", description: "Шорты. Размеры: S-XXL. Цвета: Разноцветные.", price: 18123, category: "Мужская одежда", brand: "Levi's", discount: 6 },
  { id: 236, title: "Сапоги", description: "Сапоги. Размеры: S-XXL. Цвета: Разноцветные.", price: 69361, category: "Женская обувь", brand: "H&M", discount: 34 },
  { id: 237, title: "Кольцо", description: "Кольцо. Размеры: S-XXL. Цвета: Разноцветные.", price: 49511, category: "Женские аксессуары", brand: "Zara", discount: 19 },
  { id: 238, title: "Кроссовки", description: "Кроссовки. Размеры: S-XXL. Цвета: Разноцветные.", price: 29254, category: "Женская обувь", brand: "Puma", discount: 8 },
  { id: 239, title: "Сандалии", description: "Сандалии. Размеры: S-XXL. Цвета: Разноцветные.", price: 7617, category: "Женская обувь", brand: "Asics", discount: 37 },
  { id: 240, title: "Пижама", description: "Пижама. Размеры: S-XXL. Цвета: Разноцветные.", price: 89709, category: "Женская одежда", brand: "Levi's", discount: 32 },
  { id: 241, title: "Пончо с капюшоном", description: "Пончо с капюшоном. Размеры: S-XXL. Цвета: Разноцветные.", price: 48734, category: "Женская одежда", brand: "Off-White", discount: 29 },
  { id: 242, title: "Шарф шерстяной", description: "Шарф шерстяной. Размеры: S-XXL. Цвета: Разноцветные.", price: 51934, category: "Мужские аксессуары", brand: "Balenciaga", discount: 21 },
  { id: 243, title: "Кеды", description: "Кеды. Размеры: S-XXL. Цвета: Разноцветные.", price: 8663, category: "Женская обувь", brand: "Prada", discount: 50 },
  { id: 244, title: "Куртка", description: "Куртка. Размеры: S-XXL. Цвета: Разноцветные.", price: 5140, category: "Мужская одежда", brand: "Asics", discount: 2 },
  { id: 245, title: "Платье вечернее", description: "Платье вечернее. Размеры: S-XXL. Цвета: Разноцветные.", price: 5434, category: "Женская одежда", brand: "Reebok", discount: 44 },
  { id: 246, title: "Сумка рюкзак", description: "Сумка рюкзак. Размеры: S-XXL. Цвета: Разноцветные.", price: 43708, category: "Женские аксессуары", brand: "Supreme", discount: 25 },
  { id: 247, title: "Эспадрильи", description: "Эспадрильи. Размеры: S-XXL. Цвета: Разноцветные.", price: 27929, category: "Мужская обувь", brand: "Off-White", discount: 42 },
  { id: 248, title: "Свитер кашемир", description: "Свитер кашемир. Размеры: S-XXL. Цвета: Разноцветные.", price: 9771, category: "Мужская одежда", brand: "Off-White", discount: 39 },
  { id: 249, title: "Купальник", description: "Купальник. Размеры: S-XXL. Цвета: Разноцветные.", price: 28078, category: "Женская одежда", brand: "Nike", discount: 40 },
  { id: 250, title: "Лоферы", description: "Лоферы. Размеры: S-XXL. Цвета: Разноцветные.", price: 92601, category: "Женская обувь", brand: "Levi's", discount: 49 },
  { id: 251, title: "Часы кварцевые", description: "Часы кварцевые. Размеры: S-XXL. Цвета: Разноцветные.", price: 93889, category: "Мужские аксессуары", brand: "Gucci", discount: 26 },
  { id: 252, title: "Футболка", description: "Футболка. Размеры: S-XXL. Цвета: Разноцветные.", price: 59416, category: "Мужская одежда", brand: "Asics", discount: 48 },
  { id: 253, title: "Шорты chino", description: "Шорты chino. Размеры: S-XXL. Цвета: Разноцветные.", price: 72484, category: "Мужская одежда", brand: "Levi's", discount: 33 },
  { id: 254, title: "Шляпа", description: "Шляпа. Размеры: S-XXL. Цвета: Разноцветные.", price: 88776, category: "Мужские аксессуары", brand: "Zara", discount: 28 },
  { id: 255, title: "Перчатки", description: "Перчатки. Размеры: S-XXL. Цвета: Разноцветные.", price: 43450, category: "Мужские аксессуары", brand: "Levi's", discount: 21 },
  { id: 256, title: "Свитер с воротом", description: "Свитер с воротом. Размеры: S-XXL. Цвета: Разноцветные.", price: 81177, category: "Мужская одежда", brand: "H&M", discount: 38 },
  { id: 257, title: "Сандалии", description: "Сандалии. Размеры: S-XXL. Цвета: Разноцветные.", price: 51285, category: "Мужская обувь", brand: "Puma", discount: 45 },
  { id: 258, title: "Ботинки", description: "Ботинки. Размеры: S-XXL. Цвета: Разноцветные.", price: 85718, category: "Женская обувь", brand: "H&M", discount: 15 },
  { id: 259, title: "Свитер с горлом", description: "Свитер с горлом. Размеры: S-XXL. Цвета: Разноцветные.", price: 31040, category: "Женская одежда", brand: "Prada", discount: 10 },
  { id: 260, title: "Кепка", description: "Кепка. Размеры: S-XXL. Цвета: Разноцветные.", price: 33764, category: "Женские аксессуары", brand: "Puma", discount: 25 },
  { id: 261, title: "Запонки", description: "Запонки. Размеры: S-XXL. Цвета: Разноцветные.", price: 65554, category: "Мужские аксессуары", brand: "Adidas", discount: 41 },
  { id: 262, title: "Штаны", description: "Штаны. Размеры: S-XXL. Цвета: Разноцветные.", price: 94071, category: "Мужская одежда", brand: "Zara", discount: 39 },
  { id: 263, title: "Сумка", description: "Сумка. Размеры: S-XXL. Цвета: Разноцветные.", price: 93831, category: "Женские аксессуары", brand: "Balenciaga", discount: 37 },
  { id: 264, title: "Очки", description: "Очки. Размеры: S-XXL. Цвета: Разноцветные.", price: 13788, category: "Мужские аксессуары", brand: "Supreme", discount: 43 },
  { id: 265, title: "Штаны relaxed", description: "Штаны relaxed. Размеры: S-XXL. Цвета: Разноцветные.", price: 64209, category: "Мужская одежда", brand: "Louis Vuitton", discount: 22 },
  { id: 266, title: "Очки", description: "Очки. Размеры: S-XXL. Цвета: Разноцветные.", price: 71775, category: "Женские аксессуары", brand: "Chanel", discount: 39 },
  { id: 267, title: "Очки", description: "Очки. Размеры: S-XXL. Цвета: Разноцветные.", price: 77859, category: "Мужские аксессуары", brand: "Chanel", discount: 42 },
  { id: 268, title: "Колье", description: "Колье. Размеры: S-XXL. Цвета: Разноцветные.", price: 90853, category: "Женские аксессуары", brand: "Puma", discount: 50 },
  { id: 269, title: "Сандалии", description: "Сандалии. Размеры: S-XXL. Цвета: Разноцветные.", price: 67405, category: "Мужская обувь", brand: "Off-White", discount: 41 },
  { id: 270, title: "Рубашка", description: "Рубашка. Размеры: S-XXL. Цвета: Разноцветные.", price: 24870, category: "Мужская одежда", brand: "Nike", discount: 37 },
  { id: 271, title: "Сумка", description: "Сумка. Размеры: S-XXL. Цвета: Разноцветные.", price: 15434, category: "Женские аксессуары", brand: "Adidas", discount: 14 },
  { id: 272, title: "Браслет", description: "Браслет. Размеры: S-XXL. Цвета: Разноцветные.", price: 61526, category: "Женские аксессуары", brand: "Nike", discount: 13 },
  { id: 273, title: "Шарф", description: "Шарф. Размеры: S-XXL. Цвета: Разноцветные.", price: 8319, category: "Мужские аксессуары", brand: "Levi's", discount: 32 },
  { id: 274, title: "Шляпа", description: "Шляпа. Размеры: S-XXL. Цвета: Разноцветные.", price: 60362, category: "Мужские аксессуары", brand: "Zara", discount: 23 },
  { id: 275, title: "Кимоно", description: "Кимоно. Размеры: S-XXL. Цвета: Разноцветные.", price: 42004, category: "Женская одежда", brand: "Puma", discount: 35 },
  { id: 276, title: "Ветровка", description: "Ветровка. Размеры: S-XXL. Цвета: Разноцветные.", price: 87169, category: "Женская одежда", brand: "Zara", discount: 37 },
  { id: 277, title: "Рубашка клетчатая", description: "Рубашка клетчатая. Размеры: S-XXL. Цвета: Разноцветные.", price: 97859, category: "Мужская одежда", brand: "Prada", discount: 3 },
  { id: 278, title: "Мюли", description: "Мюли. Размеры: S-XXL. Цвета: Разноцветные.", price: 63917, category: "Мужская обувь", brand: "Puma", discount: 19 },
  { id: 279, title: "Куртка кожаная", description: "Куртка кожаная. Размеры: S-XXL. Цвета: Разноцветные.", price: 43673, category: "Мужская одежда", brand: "Louis Vuitton", discount: 6 },
  { id: 280, title: "Эспадрильи", description: "Эспадрильи. Размеры: S-XXL. Цвета: Разноцветные.", price: 18558, category: "Мужская обувь", brand: "Adidas", discount: 28 },
  { id: 281, title: "Сандалии", description: "Сандалии. Размеры: S-XXL. Цвета: Разноцветные.", price: 3467, category: "Мужская обувь", brand: "Supreme", discount: 34 },
  { id: 282, title: "Туника", description: "Туника. Размеры: S-XXL. Цвета: Разноцветные.", price: 3677, category: "Женская одежда", brand: "Supreme", discount: 0 },
  { id: 283, title: "Браслет кожаный", description: "Браслет кожаный. Размеры: S-XXL. Цвета: Разноцветные.", price: 19941, category: "Мужские аксессуары", brand: "Off-White", discount: 43 },
  { id: 284, title: "Сандалии", description: "Сандалии. Размеры: S-XXL. Цвета: Разноцветные.", price: 49661, category: "Мужская обувь", brand: "Louis Vuitton", discount: 11 },
  { id: 285, title: "Пиджак", description: "Пиджак. Размеры: S-XXL. Цвета: Разноцветные.", price: 78884, category: "Женская одежда", brand: "Balenciaga", discount: 31 },
  { id: 286, title: "Ботинки", description: "Ботинки. Размеры: S-XXL. Цвета: Разноцветные.", price: 30402, category: "Женская обувь", brand: "H&M", discount: 26 },
  { id: 287, title: "Ключница с цепью", description: "Ключница с цепью. Размеры: S-XXL. Цвета: Разноцветные.", price: 81045, category: "Мужские аксессуары", brand: "Prada", discount: 17 },
  { id: 288, title: "Шорты", description: "Шорты. Размеры: S-XXL. Цвета: Разноцветные.", price: 55359, category: "Женская одежда", brand: "Gucci", discount: 11 },
  { id: 289, title: "Шляпа", description: "Шляпа. Размеры: S-XXL. Цвета: Разноцветные.", price: 2152, category: "Женские аксессуары", brand: "Nike", discount: 27 },
  { id: 290, title: "Пальто", description: "Пальто. Размеры: S-XXL. Цвета: Разноцветные.", price: 22101, category: "Женская одежда", brand: "Asics", discount: 37 },
  { id: 291, title: "Свитер crew neck", description: "Свитер crew neck. Размеры: S-XXL. Цвета: Разноцветные.", price: 90069, category: "Мужская одежда", brand: "Off-White", discount: 21 },
  { id: 292, title: "Кеды", description: "Кеды. Размеры: S-XXL. Цвета: Разноцветные.", price: 63081, category: "Мужская обувь", brand: "Supreme", discount: 11 },
  { id: 293, title: "Джинсы рваные", description: "Джинсы рваные. Размеры: S-XXL. Цвета: Разноцветные.", price: 24948, category: "Мужская одежда", brand: "Levi's", discount: 11 },
  { id: 294, title: "Балетки", description: "Балетки. Размеры: S-XXL. Цвета: Разноцветные.", price: 63887, category: "Женская обувь", brand: "Louis Vuitton", discount: 38 },
  { id: 295, title: "Шуба", description: "Шуба. Размеры: S-XXL. Цвета: Разноцветные.", price: 82536, category: "Женская одежда", brand: "Reebok", discount: 8 },
  { id: 296, title: "Пиджак", description: "Пиджак. Размеры: S-XXL. Цвета: Разноцветные.", price: 98684, category: "Мужская одежда", brand: "H&M", discount: 11 },
  { id: 297, title: "Кольцо", description: "Кольцо. Размеры: S-XXL. Цвета: Разноцветные.", price: 56922, category: "Женские аксессуары", brand: "Zara", discount: 39 },
  { id: 298, title: "Худи oversized", description: "Худи oversized. Размеры: S-XXL. Цвета: Разноцветные.", price: 49241, category: "Мужская одежда", brand: "Puma", discount: 24 },
  { id: 299, title: "Сандалии", description: "Сандалии. Размеры: S-XXL. Цвета: Разноцветные.", price: 1613, category: "Мужская обувь", brand: "Adidas", discount: 17 },
  { id: 300, title: "Жакет кожаный", description: "Жакет кожаный. Размеры: S-XXL. Цвета: Разноцветные.", price: 34119, category: "Женская одежда", brand: "Off-White", discount: 49 },
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
