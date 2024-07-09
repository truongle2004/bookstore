import { createSlice } from '@reduxjs/toolkit'

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
      rating: {
        stars: 0,
        reviews: 0
      },
      images: [
        'https://cdn0.fahasa.com/media/catalog/product/c/h/chiasetutraitim-bia.jpg'
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
      rating: {
        stars: 4.8,
        reviews: 120
      },
      images: [
        'https://cdn0.fahasa.com/media/catalog/product/c/o/combo-9786043440287-9786044742250.jpg'
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
      rating: {
        stars: 4.5,
        reviews: 89
      },
      images: [
        'https://cdn0.fahasa.com/media/catalog/product/8/9/8934974203018_2.jpg'
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
      rating: {
        stars: 4.7,
        reviews: 95
      },
      images: [
        'https://cdn0.fahasa.com/media/catalog/product/8/9/8935210301758.jpg'
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
      rating: {
        stars: 4.6,
        reviews: 110
      },
      images: [
        'https://cdn0.fahasa.com/media/catalog/product/a/n/anhdaidienspkemqua_t07_800x800.jpg'
      ]
    }
  ]
}

export const userProductsSlice = createSlice({
  name: 'user_products',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (state.product.find(action.payload)) {
        state.products.push(action.payload)
      }
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      )
    }
  }
})

export const { addToCart, removeFromCart } = userProductsSlice.actions
export default userProductsSlice.reducer
