import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const initialState = {
  products: [
    {
      id: '1436',
      title: 'Hoa Học Trò - Số 1436',
      publisher: 'BÁO TIỀN PHONG',
      publishedBy: 'Báo Sinh Viên VN - Hoa Học Trò',
      author: 'Nhiều Tác Giả',
      coverType: 'Bìa Mềm',
      price: 19000,
      originalPrice: 20000,
      discount: '-5%',
      currency: '₫',
      images: [
        'https://cdn0.fahasa.com/media/catalog/product/c/h/chiasetutraitim-bia.jpg'
      ],
      publishingYear: 2004,
      supplier: 'FIRST NEWS',
      language: 'Tiếng Việt',
      packagingSize: '20.5 x 14.5 x 1.6 cm',
      numberOfPages: 340,
      aboutTheAuthor: `Philip Parker sinh năm 1965 tại Liverpool, học chuyên ngành lịch sử tại Trinity Hall và Cambridge. Ông là một tác giả và sử gia chuyên về các hệ thống chính trị và quân sự thời cổ đại và trung cổ.
Các cuốn sách của Philp Parker đã ra mắt bạn đọc gồm: “World History”; “Eyewitness Companion Guide to World History”; “The Northmen’s Fury: A History of the Viking World”; “A History of Britain in Maps”... Ngoài ra, ông còn biên tập và tham gia xuất bản các tác phẩm lịch sử.`,
      description: `Tại sao những sự kiện đó lại xảy ra? Chúng có mầm mống từ bao giờ? Các vấn đề tương tự trong quá khứ đã bắt nguồn như thế nào và loài người đã đối mặt ra sao? Có cách nào để hiểu từng vấn đề nhức nhối đương thời dưới con mắt rộng mở và tỏ tường hơn?

“Lịch sử thế giới” (tựa gốc: “World History”) của Philip Parker là ấn phẩm hứa hẹn đáp ứng được nhu cầu đó. Sách như một bách khoa toàn thư lịch sử đồ sộ, trình bày những diễn biến quan trọng nhất của từng quốc gia, dân tộc và từng nền văn minh theo dòng thời gian suốt 5, 6 triệu năm. Qua đó, cuốn sách giúp bạn đọc hiểu những đường nét cơ bản của lịch sử loài người - những điều đã và đang định hình nên hiện tại và cả tương lai chúng ta.`,
      rating: 4,
      comment: [
        {
          username: 'BookLover123',
          date: '2024-07-10',
          rating: 5,
          comment:
            'An incredible read! The author\'s deep understanding of history shines through every page. Highly recommend!'
        },
        {
          username: 'HistoryBuff89',
          date: '2024-07-11',
          rating: 4,
          comment:
            'Very informative and well-written. A must-read for anyone interested in ancient and medieval politics and military systems.'
        },
        {
          username: 'CasualReader56',
          date: '2024-07-12',
          rating: 3,
          comment:
            'The book was good, but some sections were a bit dense for my taste. Overall, a worthwhile read.'
        },
        {
          username: 'Scholar2024',
          date: '2024-07-12',
          rating: 5,
          comment:
            'An outstanding work of historical scholarship. The maps and illustrations are particularly helpful.'
        },
        {
          username: 'LiteraryCritic01',
          date: '2024-07-13',
          rating: 4,
          comment:
            'Philip Parker\'s writing is both engaging and insightful. I learned a lot about the Viking world. Highly recommended.'
        }
      ]
    },
    {
      id: '1437',
      title: 'Dế Mèn Phiêu Lưu Ký',
      publisher: 'Kim Đồng',
      publishedBy: 'Nhà Xuất Bản Kim Đồng',
      author: 'Tô Hoài',
      coverType: 'Bìa Cứng',
      price: 50000,
      originalPrice: 55000,
      discount: '-9%',
      currency: '₫',
      images: [
        'https://cdn0.fahasa.com/media/catalog/product/c/o/combo-9786043440287-9786044742250.jpg'
      ],
      publishingYear: 1941,
      supplier: 'NXB Kim Đồng',
      language: 'Tiếng Việt',
      packagingSize: '20.5 x 14.5 x 1.6 cm',
      numberOfPages: 240,
      aboutTheAuthor:
        'Tô Hoài (1920 - 2014) là một nhà văn nổi tiếng của Việt Nam. Ông được biết đến nhiều nhất với tác phẩm "Dế Mèn Phiêu Lưu Ký" – một truyện dài thiếu nhi rất nổi tiếng. Tô Hoài còn viết nhiều tác phẩm khác về cuộc sống và văn hóa của người Việt.',
      description:
        'Dế Mèn Phiêu Lưu Ký là một trong những tác phẩm văn học thiếu nhi nổi tiếng nhất của Việt Nam, kể về cuộc phiêu lưu của Dế Mèn, một chú dế có tinh thần dũng cảm và lòng nhân ái. Cuốn sách không chỉ là một câu chuyện hấp dẫn mà còn chứa đựng nhiều bài học quý giá về cuộc sống và tình bạn.',
      rating: 4.5,
      comment: [
        {
          username: 'AdventureSeeker',
          date: '2024-07-14',
          rating: 5,
          comment:
            'A timeless classic that every child should read. Tô Hoài’s storytelling is enchanting and full of life lessons.'
        },
        {
          username: 'ChildhoodMemories',
          date: '2024-07-15',
          rating: 4,
          comment:
            'Brings back wonderful memories of my childhood. A great read for both kids and adults.'
        }
      ]
    },
    {
      id: '1438',
      title: 'Tắt Đèn',
      publisher: 'NXB Trẻ',
      publishedBy: 'Nhà Xuất Bản Trẻ',
      author: 'Ngô Tất Tố',
      coverType: 'Bìa Mềm',
      price: 40000,
      originalPrice: 45000,
      discount: '-11%',
      currency: '₫',
      images: [
        'https://cdn0.fahasa.com/media/catalog/product/8/9/8934974203018_2.jpg'
      ],
      publishingYear: 1939,
      supplier: 'NXB Trẻ',
      language: 'Tiếng Việt',
      packagingSize: '18 x 12 x 1.5 cm',
      numberOfPages: 200,
      aboutTheAuthor:
        'Ngô Tất Tố (1894 - 1954) là một nhà văn, nhà báo nổi tiếng của Việt Nam. Ông là một trong những nhà văn tiêu biểu của văn học hiện thực phê phán. Các tác phẩm của Ngô Tất Tố thường phản ánh sâu sắc hiện thực xã hội Việt Nam thời kỳ trước cách mạng.',
      description:
        'Tắt Đèn là một tiểu thuyết hiện thực phê phán nổi tiếng của Ngô Tất Tố, kể về cuộc sống cực khổ của người nông dân dưới ách thống trị của thực dân và phong kiến. Tác phẩm là bức tranh chân thực về xã hội Việt Nam thời kỳ đó, và là lời kêu gọi đấu tranh cho quyền lợi của người lao động.',
      rating: 4.2,
      comment: [
        {
          username: 'RealistReader',
          date: '2024-07-16',
          rating: 4,
          comment:
            'A powerful depiction of the struggles faced by Vietnamese peasants. Ngô Tất Tố’s writing is both poignant and insightful.'
        },
        {
          username: 'HistoryLover',
          date: '2024-07-17',
          rating: 5,
          comment:
            'An important piece of Vietnamese literature that sheds light on the harsh realities of the past. A must-read for those interested in history.'
        }
      ]
    },
    {
      id: '1439',
      title: 'Số Đỏ',
      publisher: 'NXB Văn Học',
      publishedBy: 'Nhà Xuất Bản Văn Học',
      author: 'Vũ Trọng Phụng',
      coverType: 'Bìa Mềm',
      price: 60000,
      originalPrice: 65000,
      discount: '-8%',
      currency: '₫',
      images: [
        'https://cdn0.fahasa.com/media/catalog/product/8/9/8935210301758.jpg'
      ],
      publishingYear: 1936,
      supplier: 'NXB Văn Học',
      language: 'Tiếng Việt',
      packagingSize: '20 x 14 x 2 cm',
      numberOfPages: 320,
      aboutTheAuthor:
        'Vũ Trọng Phụng (1912 - 1939) là một nhà văn, nhà báo nổi tiếng của Việt Nam. Ông được coi là một trong những nhà văn hiện thực xuất sắc nhất của văn học Việt Nam thế kỷ 20. Tác phẩm của Vũ Trọng Phụng thường mang tính chất châm biếm, phê phán xã hội.',
      description:
        'Số Đỏ là một trong những tác phẩm tiêu biểu nhất của Vũ Trọng Phụng. Cuốn sách kể về cuộc đời của Xuân Tóc Đỏ, một nhân vật từ tầng lớp dưới cùng của xã hội vươn lên nhờ sự xảo quyệt và may mắn. Tác phẩm là một sự châm biếm sắc bén về xã hội Việt Nam thời kỳ đó.',
      rating: 4.7,
      comment: [
        {
          username: 'SatireLover',
          date: '2024-07-18',
          rating: 5,
          comment:
            'A brilliant satire that highlights the absurdities of society. Vũ Trọng Phụng’s wit and humor are unparalleled.'
        },
        {
          username: 'ClassicReader',
          date: '2024-07-19',
          rating: 4.5,
          comment:
            'A classic that remains relevant to this day. The characters and plot are both entertaining and thought-provoking.'
        }
      ]
    },
    {
      id: '1440',
      title: 'Chí Phèo',
      publisher: 'NXB Lao Động',
      publishedBy: 'Nhà Xuất Bản Lao Động',
      author: 'Nam Cao',
      coverType: 'Bìa Cứng',
      price: 70000,
      originalPrice: 75000,
      discount: '-7%',
      currency: '₫',
      images: [
        'https://cdn0.fahasa.com/media/catalog/product/a/n/anhdaidienspkemqua_t07_800x800.jpg'
      ],
      publishingYear: 1941,
      supplier: 'NXB Lao Động',
      language: 'Tiếng Việt',
      packagingSize: '21 x 14.5 x 2 cm',
      numberOfPages: 280,
      aboutTheAuthor:
        'Nam Cao (1915 - 1951) là một trong những nhà văn lớn của văn học Việt Nam hiện đại. Ông được biết đến nhiều nhất với tác phẩm "Chí Phèo", một câu chuyện hiện thực phê phán về cuộc đời của người nông dân Việt Nam dưới ách áp bức.',
      description:
        'Chí Phèo là một tác phẩm nổi tiếng của Nam Cao, kể về cuộc đời đầy bi kịch của Chí Phèo, một nông dân bị xã hội đẩy vào con đường tội lỗi. Tác phẩm là một sự phê phán mạnh mẽ về xã hội phong kiến và những bất công mà người nông dân phải chịu đựng.',
      rating: 4.8,
      comment: [
        {
          username: 'LiteraryGiant',
          date: '2024-07-20',
          rating: 5,
          comment:
            'An outstanding piece of literature that captures the plight of the common man. Nam Cao’s writing is both powerful and moving.'
        },
        {
          username: 'SocietyCritic',
          date: '2024-07-21',
          rating: 4.5,
          comment:
            'A searing critique of social injustice. Chí Phèo’s story is heart-wrenching and thought-provoking.'
        }
      ]
    }
  ]
}

export const ListProductsSlice = createSlice({
  name: 'user_products',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (!state.product.find(action.payload)) {
        state.products.push(action.payload)
      } else {
        toast.error('product exists in cart')
      }
    },
    removeAnItemFromCart: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      )
    },
    removeAllItems: (state) => {
      state.products = []
    }
  }
})

export const { addToCart, removeAnItemFromCart, removeAllItems } =
  ListProductsSlice.actions
export default ListProductsSlice.reducer
