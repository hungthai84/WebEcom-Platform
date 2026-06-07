import { Product } from './types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'NHẪN VÀNG AURUM ETERNAL',
    price: 850,
    description: 'Nhẫn vàng 18k nguyên khối với thiết kế tối giản và bề mặt đánh bóng cao. Vẻ đẹp vượt thời gian.',
    imageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop',
    category: 'nhẫn',
    stock: 12,
    isGift: false
  },
  {
    id: '2',
    name: 'VÒNG CỔ NGỌC TRAI LUNA',
    price: 1200,
    description: 'Ngọc trai nuôi biển Nam Hải trên chuỗi dây vàng hồng tinh tế. Một nét hiện đại trên thiết kế cổ điển.',
    imageUrl: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1000&auto=format&fit=crop',
    category: 'vòng cổ',
    stock: 8,
    isGift: false
  },
  {
    id: '3',
    name: 'VÒNG TAY SOLARIS CUFF',
    price: 450,
    description: 'Vòng tay bạc sterling được chế tác thủ công với hình khối kiến trúc.',
    imageUrl: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop',
    category: 'vòng tay',
    stock: 25,
    isGift: false
  },
  {
    id: '4',
    name: 'BÔNG TAI CELESTIAL STUD',
    price: 600,
    description: 'Kim cương cắt giác rực rỡ đặt trong khung bạch kim. Thiết kế để thu trọn ánh sáng từ mọi góc độ.',
    imageUrl: 'https://images.unsplash.com/photo-1535633302713-102a4175359b?q=80&w=1000&auto=format&fit=crop',
    category: 'bông tai',
    stock: 15,
    isGift: false
  },
  {
    id: '5',
    name: 'HỘP QUÀ - BỘ SƯU TẬP DI SẢN',
    price: 2500,
    description: 'Bộ sưu tập được tuyển chọn từ những thiết kế biểu tượng nhất, đặt trong hộp lót nhung sang trọng.',
    imageUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop',
    category: 'quà tặng',
    stock: 5,
    isGift: true
  },
  {
    id: '6',
    name: 'VÒNG TAY MẮT XÍCH OBSIDIAN',
    price: 320,
    description: 'Mắt xích rhodium đen mờ với khóa công nghiệp được chế tác chính xác.',
    imageUrl: 'https://images.unsplash.com/photo-1573408339391-23bc36739df2?q=80&w=1000&auto=format&fit=crop',
    category: 'vòng tay',
    stock: 20,
    isGift: false
  }
];
