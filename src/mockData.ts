import { Product } from './types';

const ringsRaw = [
  {
    name: 'NHẪN VÀNG AURUM ETERNAL',
    price: 850,
    desc: 'Nhẫn vàng 18k nguyên khối với thiết kế tối giản và bề mặt đánh bóng cao. Vẻ đẹp vượt thời gian.',
    img: 'photo-1605100804763-247f67b3557e',
    stock: 12
  },
  {
    name: 'NHẪN KIM CƯƠNG CELESTIAL SOLITAIRE',
    price: 2400,
    desc: 'Kim cương thiên nhiên 1 carat cắt giác rực rỡ đính trên đai nhẫn bạch kim tinh khiết. Biểu tượng của tình yêu vĩnh cửu.',
    img: 'photo-1603561591411-07134e71a2a9',
    stock: 5
  },
  {
    name: 'NHẪN BẠCH KIM ODYSSEY BAND',
    price: 950,
    desc: 'Thiết kế nhẫn bạch kim hiện đại độc đáo dạng xoắn ốc vô tận mang phong cách kiến trúc khỏe khoắn.',
    img: 'photo-1598560917505-59a3ad559071',
    stock: 18
  },
  {
    name: 'NHẪN EMERALD VERDANT GRACE',
    price: 1850,
    desc: 'Đột phá thẩm mỹ với Ngọc Lục Bảo Zambia tự nhiên cắt giác ngọc lục bảo bao quanh bởi dải kim cương tấm lấp lánh.',
    img: 'photo-1602751584552-8ba73aad10e1',
    stock: 4
  },
  {
    name: 'NHẪN SAPPHIRE MIDNIGHT WAVE',
    price: 1650,
    desc: 'Sắc lam sâu thẳm từ Lam Ngọc Sri Lanka đính trên đai vàng trắng uốn lượn như những làn sóng đêm huyền thoại.',
    img: 'photo-1617038260897-41a1f14a8ca0',
    stock: 7
  },
  {
    name: 'NHẪN RUBY CRIMSON FIRE',
    price: 1950,
    desc: 'Hồng Ngọc Miến Điện tự nhiên sắc đỏ huyết bồ câu nguyên bản kết hợp đai vàng hồng đầy quyền lực quyến rũ.',
    img: 'photo-1589674781759-c21c37956a44',
    stock: 6
  },
  {
    name: 'NHẪN NGỌC TRAI LUMINA ESSENCE',
    price: 1100,
    desc: 'Ngọc trai nuôi biển Akoya Nhật Bản tròn tuyệt đối hội tụ sắc hồng óng ánh đính vàng 18k sang xịn.',
    img: 'photo-1601121141461-9d6647bca1ed',
    stock: 15
  },
  {
    name: 'NHẪN BẠC STERLING INFINITY',
    price: 180,
    desc: 'Thiết kế vô cực tối giản từ bạc Ý 925 cao cấp, hoàn hảo cho việc phối đeo chồng hàng ngày.',
    img: 'photo-1629224316810-9d8805b95e76',
    stock: 30
  },
  {
    name: 'NHẪN VÀNG HỒNG ROSE QUARTZ HALO',
    price: 520,
    desc: 'Thạch anh hồng thiên nhiên được bọc kiêu kỳ trong đai kim loại vàng hồng ngọt ngào đầy nữ tính.',
    img: 'photo-1543294001-f7cbfe92237e',
    stock: 22
  },
  {
    name: 'NHẪN OPAL AURA PRISM',
    price: 780,
    desc: 'Đá Opal Úc bảy màu huyền ảo thay sắc theo ánh sáng mặt trời, điểm xuyết kim cương tấm quý phái.',
    img: 'photo-1605100804763-247f67b3557e',
    stock: 9
  },
  {
    name: 'NHẪN AMETHYST GEODE GLOW',
    price: 490,
    desc: 'Mặt đá thạch anh tím tự nhiên thô mộc cá tính kết hợp gọng thô mạ vàng tinh xảo cho quý cô sành điệu.',
    img: 'photo-1602751584552-8ba73aad10e1',
    stock: 11
  },
  {
    name: 'NHẪN VÀNG TRẮNG HELIX SPIRAL',
    price: 900,
    desc: 'Hình xoắn ốc kép chế tác thủ công cao cấp bằng vàng trắng 14k tạo cảm quan chiều sâu vô cực.',
    img: 'photo-1619119069152-a2b331ebfc90',
    stock: 13
  },
  {
    name: 'NHẪN ĐÔI ETERNITY COMMITMENT',
    price: 1500,
    desc: 'Bộ đôi nhẫn cưới vàng 18k bóng mờ ghép đôi hoàn hảo, khắc họa lời thề nguyện sắc son cùng năm tháng.',
    img: 'photo-1598560917505-59a3ad559071',
    stock: 10
  },
  {
    name: 'NHẪN HOÀNG KIM DYNASTY SIGNET',
    price: 1350,
    desc: 'Nhẫn signet đúc nguyên khối vàng 18k với mặt vuông tinh giản chải xước đầy phong thái hoàng tộc.',
    img: 'photo-1605100804763-247f67b3557e',
    stock: 8
  },
  {
    name: 'NHẪN TITAN ĐEN CARBON SHADOW',
    price: 250,
    desc: 'Sự cứng cáp vượt trội của Titanium đen phối sợi carbon siêu nhẹ mang ngôn ngữ thiết kế tương lai.',
    img: 'photo-1573408339391-23bc36739df2',
    stock: 25
  },
  {
    name: 'NHẪN CITRINE SUNFLOWER GLOW',
    price: 680,
    desc: 'Đá thạch anh vàng phơi mình kiêu sa dưới dải cánh hoa vàng 14k tinh sảo, sưởi ấm mọi ánh nhìn.',
    img: 'photo-1543294001-f7cbfe92237e',
    stock: 14
  },
  {
    name: 'NHẪN KIM CƯƠNG ĐEN ECLIPSE',
    price: 2100,
    desc: 'Viên kim cương đen trung tâm cực quý đính sâu tinh tế trên đai titan đen huyền bí mờ đầy mị hoặc.',
    img: 'photo-1629224316810-9d8805b95e76',
    stock: 3
  },
  {
    name: 'NHẪN VÀNG CỔ ĐIỂN HERITAGE RING',
    price: 1250,
    desc: 'Tinh hoạ thiết kế thế kỷ 19 hoàng gia Châu Âu với chất liệu chế tác hoàn toàn từ vàng cổ 22k.',
    img: 'photo-1601121141461-9d6647bca1ed',
    stock: 6
  }
];

const necklacesRaw = [
  {
    name: 'VÒNG CỔ NGỌC TRAI LUNA',
    price: 1200,
    desc: 'Ngọc trai nuôi biển Nam Hải trên chuỗi dây vàng hồng tinh tế. Một nét hiện đại trên thiết kế cổ điển.',
    img: 'photo-1599643477877-530eb83abc8e',
    stock: 8
  },
  {
    name: 'DÂY CHUYỀN KIM CƯƠNG INFINITE LIGHT',
    price: 3200,
    desc: 'Sợi dây chuyền bạch kim đính viên kim cương giọt nước rực rỡ lấp lánh như giọt nắng ban mai.',
    img: 'photo-1602752275312-4740d21f589b',
    stock: 4
  },
  {
    name: 'VÒNG CỔ BẠCH KIM CELESTE',
    price: 2100,
    desc: 'Kiệt tác bạch kim nguyên khối uốn cong cổ điển ôm khít vòm cổ đính đá thiên thạch tinh tú lấp lánh.',
    img: 'photo-1515562141207-7a88fb7ce338',
    stock: 5
  },
  {
    name: 'MẶT DÂY CHUYỀN NGỌC LỤC BẢO EMERALD',
    price: 2450,
    desc: 'Mặt dây chuyền ngọc lục bảo tự nhiên thu hút vượng khí, chế tác tinh xảo bằng đai vàng Ý 18k quý phái.',
    img: 'photo-1627294626103-6251ef0cc9dc',
    stock: 6
  },
  {
    name: 'CHUỖI NGỌC TRAI TAHITI TRẦM ẤM',
    price: 4100,
    desc: 'Sự ấn tượng mạnh mẽ từ chuỗi ngọc trai Tahiti ánh đen xám bóng bẩy nhập khẩu trực tiếp từ vùng biển Polynesia.',
    img: 'photo-1599643477877-530eb83abc8e',
    stock: 3
  },
  {
    name: 'DÂY CHUYỀN CHOKER XÍCH VÀNG BẢN LỚN',
    price: 1450,
    desc: 'Cá tính đương đại với sợi xích vàng Ý bản lớn, ôm gọn tôn vóc dáng thanh tú cho các buổi tiệc thời thượng.',
    img: 'photo-1635767790041-90a9a4ade3e3',
    stock: 12
  },
  {
    name: 'DÂY CHUYỀN HỒNG NGỌC JULIET',
    price: 2200,
    desc: 'Hồng ngọc tự nhiên cắt vát hình trái tim bọc trong viền dây vàng hồng tinh tế, gợi phong cách Phục hưng lãng mạn.',
    img: 'photo-1602752275312-4740d21f589b',
    stock: 6
  },
  {
    name: 'LẮC CỔ MẶT TRĂNG MOONLIGHT PENDANT',
    price: 750,
    desc: 'Dây chuyền vàng mỏng kết hợp mặt trăng khuyết nạm kim cương tấm thu hút nguồn năng lượng dịu mát từ thiên nhiên.',
    img: 'photo-1512436991641-6745cdb1723f',
    stock: 15
  },
  {
    name: 'VÒNG CỔ STATEMENT EMPRESS GOLD',
    price: 3800,
    desc: 'Mẫu thiết kế bản lớn tráng lệ từ những phiến vàng 18k chạm trổ thủ công hoa văn di sản tinh thảo cực đỉnh.',
    img: 'photo-1515562141207-7a88fb7ce338',
    stock: 2
  },
  {
    name: 'DÂY CHUYỀN BẠC MINIMALIST BAR',
    price: 320,
    desc: 'Vẻ thanh lịch tối giản độc tôn từ thanh bạc Ý 925 chuốt xước bóng mờ, phù hợp cá tính đương đại năng động.',
    img: 'photo-1611085583191-a3b1a40ffd50',
    stock: 25
  },
  {
    name: 'CHUỖI ĐÁ EMERALD CHÂU PHI THÔ',
    price: 1600,
    desc: 'Cảm hứng nguyên bản châu Phi với chuỗi hạt đá lục bảo thô mài mịn, đính kết khóa vàng 18k bền chắc.',
    img: 'photo-1627294626103-6251ef0cc9dc',
    stock: 8
  },
  {
    name: 'MẶT DÂY THẠCH ANH KHÓI CHÚC PHÚC',
    price: 650,
    desc: 'Khối thạch anh khói tinh khiết mài vát cạnh bảo hộ tinh thần mang dây da dệt mộc mạc cá tính.',
    img: 'photo-1596944924616-7b38e7cfac36',
    stock: 14
  },
  {
    name: 'KHÓA CỔ VÀNG Ý MILANESE METALLIC',
    price: 2900,
    desc: 'Kiểu đan Milanese dệt mỏng ánh kim mịn hệt như lướt lụa mỏng bọc lấy cổ sang quý cực sang.',
    img: 'photo-1635767790041-90a9a4ade3e3',
    stock: 4
  },
  {
    name: 'DÂY CHUYỀN SỢI ĐÔI DUET GOLD CHARM',
    price: 880,
    desc: 'Hai dải dây mỏng so le xếp nếp ngẫu hứng ánh rực từ vàng hồng đính ngọc trai nước ngọt quyến rũ.',
    img: 'photo-1599643477877-530eb83abc8e',
    stock: 18
  },
  {
    name: 'CHUỖI VÒNG CỔ DI SẢN ROYAL LUXURY',
    price: 5500,
    desc: 'Kết tinh từ 88 viên ngọc trai ánh vàng South Sea tuyệt sắc mĩ miều đại diện phú quý tuyệt đối.',
    img: 'photo-1515562141207-7a88fb7ce338',
    stock: 1
  },
  {
    name: 'CHUỖI NGỌC BÍCH PHỈ THÚY CATSEYE',
    price: 3100,
    desc: 'Hào quang rạng rỡ sâu thẳm mang đậm sắc xanh di sản ngọc phỉ thúy hoàng tộc gắn móc khóa vàng ròng.',
    img: 'photo-1596944924616-7b38e7cfac36',
    stock: 5
  },
  {
    name: 'DÂY CHUYỀN LAM NGỌC ZENITH BLUE',
    price: 1150,
    desc: 'Đá lam ngọc Turquoise tự nhiên đại diện bầu trời tự do kết hợp dây chuyền vàng trắng 14k mảnh mai.',
    img: 'photo-1611085583191-a3b1a40ffd50',
    stock: 9
  },
  {
    name: 'VÒNG CỔ SỢI CÁP THÉP SPECTER DIAMOND',
    price: 1380,
    desc: 'Mô phỏng sợi cáp cơ học cá tính nạm kim cương tự nhiên 0.2 carat đầy chất nổi loạn xa xỉ.',
    img: 'photo-1635767790041-90a9a4ade3e3',
    stock: 11
  }
];

const braceletsRaw = [
  {
    name: 'VÒNG TAY SOLARIS CUFF',
    price: 450,
    desc: 'Vòng tay bạc sterling được chế tác thủ công với hình khối kiến trúc đương đại vững chãi.',
    img: 'photo-1611591437281-460bfbe1220a',
    stock: 25
  },
  {
    name: 'LẮC TAY KIM CƯƠNG TENNIS CLASSIC',
    price: 2900,
    desc: 'Một chuỗi lấp lánh liền mạch của hàng chục viên kim cương nạm viền vàng trắng 18k xa hoa quý tộc.',
    img: 'photo-1631557002016-107b7dc67878',
    stock: 6
  },
  {
    name: 'LẮC TAY MẮT XÍCH OBSIDIAN LINK',
    price: 320,
    desc: 'Mắt xích titan phủ rhodium đen mờ với khoá chốt cơ học độc bản từ Stripo.',
    img: 'photo-1573408339391-23bc36739df2',
    stock: 20
  },
  {
    name: 'VÒNG TAY BẢN DẸT AURELIA GLINT',
    price: 1100,
    desc: 'Thiết kế bề mặt vàng 14k phẳng lì cào sước dọc thu sáng mềm mại trang nhã lịch duyệt.',
    img: 'photo-1611591437281-460bfbe1220a',
    stock: 15
  },
  {
    name: 'LẮC TAY VÀNG HỒNG CHARM AMORE',
    price: 850,
    desc: 'Dây lắc tinh xảo với các mặt biểu tượng tình yêu bọc vàng hồng sang quý, cuốn hút nữ tính.',
    img: 'photo-1515562141207-7a88fb7ce338',
    stock: 16
  },
  {
    name: 'VÒNG TAY BẠC BRUTALIST HEAVY CUFF',
    price: 390,
    desc: 'Vệt búa rèn thủ công tạc hình dáng méo mó độc lạ phá cách từ bạc Ý nguyên chất đầm tay.',
    img: 'photo-1528659020436-b63920786cf7',
    stock: 10
  },
  {
    name: 'CÒNG TAY VÀNG LAPIS LAZULI OCEAN',
    price: 1750,
    desc: 'Lam đá xanh sẫm Lapis Lazuli thiên nhiên viền vàng 18k mang năng lượng đại tài cát lộc.',
    img: 'photo-1631557002016-107b7dc67878',
    stock: 7
  },
  {
    name: 'LẮC TAY NGỌC BÍCH CÁT TƯỜNG PHÚ QUÝ',
    price: 2200,
    desc: 'Đúc tạc hoàn mỹ từ khối ngọc bích thiên nhiên lục sắc bóng lộn mang biểu tượng an thái.',
    img: 'photo-1599643477877-530eb83abc8e',
    stock: 3
  },
  {
    name: 'VÒNG TAY VIỀN CỔ ĐIỂN HERITAGE BAROQUE',
    price: 1650,
    desc: 'Vàng ròng chạm rỗng chi tiết tinh xảo từ cảm quan nghệ thuật vương triều lộng lẫy uy nghiêm.',
    img: 'photo-1515562141207-7a88fb7ce338',
    stock: 5
  },
  {
    name: 'LẮC CHỈ ĐỎ KIM CƯƠNG TRIỆU TÀI',
    price: 420,
    desc: 'Chi tiết kim cương tròn 0.1 carat đính giữa dây bện lụa đỏ thủ công cầu may mắn hanh thông.',
    img: 'photo-1602751584552-8ba73aad10e1',
    stock: 35
  },
  {
    name: 'VÒNG TAY CHUỖI HẠT MÃ NÃO PHƯỢNG HOÀNG',
    price: 290,
    desc: 'Những viên mã não huyết mài tròn quyến rũ kết charm hình linh thú phượng hoàng mạ vàng cổ.',
    img: 'photo-1615655406736-b37c4fabf923',
    stock: 19
  },
  {
    name: 'LẮC TAY BẠC CUBA LINK KHỎE KHOẮN',
    price: 580,
    desc: 'Bền chắc tuyệt đối từ bạc sterling đan mắt xích to bản cá tính tôn dáng cổ tay phái mạnh.',
    img: 'photo-1573408339391-23bc36739df2',
    stock: 22
  },
  {
    name: 'VÒNG TAY THẠCH ANH TÓC VÀNG VƯƠNG GIẢ',
    price: 980,
    desc: 'Đá quý thạch anh ngậm kim sợi mảnh phản quang lấp lánh như bụi kim tuyến từ mỏ đá Brazil.',
    img: 'photo-1602752275312-4740d21f589b',
    stock: 12
  },
  {
    name: 'CÒNG TAY BẠCH KIM WAVE SLICK',
    price: 1550,
    desc: 'Đường lượn sóng bất đối xứng trên bề mặt tráng bạch kim gương siêu thực độc lạ đầy mỹ cảm.',
    img: 'photo-1528659020436-b63920786cf7',
    stock: 8
  },
  {
    name: 'LẮC NGỌC TRAI BAROQUE HOÀNG GIA',
    price: 720,
    desc: 'Tuyển lựa ngọc trai dị hình dị sắc phóng khoáng quý tộc mang phong vị tự do không gò bó.',
    img: 'photo-1599643477877-530eb83abc8e',
    stock: 14
  },
  {
    name: 'VÒNG TAY DA ĐAN ĐAN MÃ THÉP ITALY',
    price: 210,
    desc: 'Dây da bò nguyên tấm thuộc thảo mộc xâu ghép khóa chốt thép không gỉ thể thao sành điệu.',
    img: 'photo-1611591437281-460bfbe1220a',
    stock: 40
  },
  {
    name: 'LẮC KHỚP VÀNG KIM CƯƠNG ĐEN CHẤT CHƠI',
    price: 2600,
    desc: 'Cơ cấu chốt lò xo ẩn cao cấp lấp lánh vệt kim cương đen tinh tuyển thu hút nam tính trầm và cuốn.',
    img: 'photo-1631557002016-107b7dc67878',
    stock: 4
  },
  {
    name: 'VÒNG SAN HÔ ĐỎ KHÓA CỔ LINH HOẠT',
    price: 1400,
    desc: 'San hô đỏ lấy từ đáy biển Nhật Bản kết hợp cùng hạt bi vàng 18k đem lại vẻ đẹp cổ điển thanh nhã.',
    img: 'photo-1615655406736-b37c4fabf923',
    stock: 6
  }
];

const earringsRaw = [
  {
    name: 'BÔNG TAI CELESTIAL STUD',
    price: 600,
    desc: 'Kim cương cắt giác rực rỡ đặt trong khung bạch kim. Thiết kế để thu trọn ánh sáng từ mọi góc độ.',
    img: 'photo-1535633302713-102a4175359b',
    stock: 15
  },
  {
    name: 'KHUYÊN TAI NGỌC TRAI GIỌT NƯỚC LUNA',
    price: 850,
    desc: 'Đôi ngọc trai giọt nước rủ nhẹ trên xích vàng mang đến cái nhìn thanh tú nữ tính đầy dịu dàng quý cô.',
    img: 'photo-1588850561407-ed78c282e89b',
    stock: 11
  },
  {
    name: 'HOA TAI HOOPS VÀNG SỢI MẢNH BẢN RỘNG',
    price: 450,
    desc: 'Vòng khuyên tròn tinh giản vàng 18k mảnh dập tạo hình phồng nhẹ bẫng tự tin toả sáng ngày mới.',
    img: 'photo-1506630448388-4e683c67ddb0',
    stock: 19
  },
  {
    name: 'BÔNG TAI LỤC BẢO CASCADE HOOPS MỸ LỆ',
    price: 1950,
    desc: 'Khuyên tai sần xếp khía đính lục bảo thạch rực rỡ nạm dải kim cương lung linh.',
    img: 'photo-1635767790041-90a9a4ade3e3',
    stock: 5
  },
  {
    name: 'HOA TAI ĐÍNH NGỌC LỚN IMPERIAL GEMS',
    price: 1300,
    desc: 'Phong vị nữ hoàng với viên Ruby bồ câu đỏ rực ngự trị trung tâm viền ổ đá quý cổ kính.',
    img: 'photo-1630019852942-f89202989a59',
    stock: 6
  },
  {
    name: 'KHUYÊN TAI CHỈ BẠC THREAD STRAND SILK',
    price: 190,
    desc: 'Sợi xích cực mảnh luồn trực tiếp qua dái tai đung đưa nhẹ nhàng điệu đà trang điểm cho khuôn mặt.',
    img: 'photo-1635767790041-90a9a4ade3e3',
    stock: 28
  },
  {
    name: 'BÔNG TAI TUA RUA GALA CHANDELIER LỘNG LẪY',
    price: 3100,
    desc: 'Những tầng thác đổ pha lê và kim cương rực rỡ lấp loáng di chuyển theo nhịp chân sàn diễn khiêu vũ.',
    img: 'photo-1630019852942-f89202989a59',
    stock: 3
  },
  {
    name: 'KHUYÊN TAI THẠCH ANH HỒNG BLOSSOM',
    price: 380,
    desc: 'Thạch anh hồng thiên nhiên được chạm khắc hình nụ đào chúm chím căng mọng ngọt ngào.',
    img: 'photo-1535633302713-102a4175359b',
    stock: 24
  },
  {
    name: 'HOA TAI SAPPHIRE ĐẠI DƯƠNG DEEP BLUE',
    price: 1250,
    desc: 'Cảm hứng Lam ngọc xanh thăm thẩm từ đáy vực thẳm nạm chặt bằng vàng 18k sáng bóng.',
    img: 'photo-1605100804763-247f67b3557e',
    stock: 8
  },
  {
    name: 'BÔNG TAI ĐẤT SÉT THỦ CÔNG ĐỘC BẢN',
    price: 150,
    desc: 'Chế tạo hoàn toàn bằng tay của thợ thủ công Paris, mang hoa văn đất nung màu pastel mộc mạc.',
    img: 'photo-1629224316810-9d8805b95e76',
    stock: 14
  },
  {
    name: 'KHUYÊN TAI ĐÁ MẶT TRĂNG MYSTIC MOON',
    price: 520,
    desc: 'Hạt đá Mặt Trăng tự nhiên mang lớp óng ảo mờ xanh dương mơ màng rạng rỡ đầy chất thần tiên.',
    img: 'photo-1588850561407-ed78c282e89b',
    stock: 13
  },
  {
    name: 'BÔNG TAI KÉO CHỈ VÀNG KHÔNG GIAN KÉN',
    price: 770,
    desc: 'Sợi tơ vàng 14k quấn bện tổ kén tự do lạ mắt tôn vinh tư duy hội họa trừu tượng độc đáo.',
    img: 'photo-1635767790041-90a9a4ade3e3',
    stock: 12
  },
  {
    name: 'KHUYÊN KẸP BẠCH KIM HELIX CUFF',
    price: 350,
    desc: 'Cặp khuyên vành tai cá tính bọc mạ bạch kim láng mịn chống gỉ tạo phong cách năng động.',
    img: 'photo-1506630448388-4e683c67ddb0',
    stock: 32
  },
  {
    name: 'BÔNG TAI RUBY TRÁI TIM ĐỎ HUYỀN BÍ',
    price: 1450,
    desc: 'Hồng ngọc nạm góc cạnh hình trái tim lấp lánh biểu tượng mãnh liệt rực lôi cuốn quyến rũ.',
    img: 'photo-1630019852942-f89202989a59',
    stock: 4
  },
  {
    name: 'KHUYÊN TAI TRÒN MATTE INDUSTRIAL DARK',
    price: 280,
    desc: 'Màu kim đen mờ nam tính phù hợp giới mộ điệu thời trang phá cách tối giản hiện đại.',
    img: 'photo-1605100804763-247f67b3557e',
    stock: 21
  },
  {
    name: 'BÔNG NGỌC TRAI KEISHI VỎ SÒ THIÊN HUYÊN',
    price: 690,
    desc: 'Mỗi bông có một hình thù khác hẳn nhau do tính chất sinh trưởng độc đáo của ngọc ngọc bẹt tự nhiên.',
    img: 'photo-1588850561407-ed78c282e89b',
    stock: 16
  },
  {
    name: 'KHUYÊN KIM CƯƠNG ĐEN MINIMAL STUD',
    price: 950,
    desc: 'Nút stud đơng giản đính viên kim cương đen vát cạnh vuông vức tinh sảo bí hiểm sang sịn.',
    img: 'photo-1535633302713-102a4175359b',
    stock: 18
  },
  {
    name: 'BÔNG TAI ART DECO VINTAGE CHROME GLAM',
    price: 1100,
    desc: 'Thiết kế chải quạt phong cách hoàng tọc kinh điển nạm mảng kim cương chói lòa lộng lẫy.',
    img: 'photo-1630019852942-f89202989a59',
    stock: 7
  }
];

const giftsRaw = [
  {
    name: 'HỘP QUÀ - BỘ SƯU TẬP DI SẢN',
    price: 2500,
    desc: 'Bộ sưu tập được tuyển chọn từ những thiết kế biểu tượng nhất, đặt trong hộp lót nhung sang trọng đẳng cấp.',
    img: 'photo-1515562141207-7a88fb7ce338',
    stock: 5
  },
  {
    name: 'BỘ TRANG SỨC NHẪN & BÔNG TAI HARMONY LOVE',
    price: 1800,
    desc: 'Gồm nhẫn ngọc quý Akoya tinh thiết và đôi bông tai cùng kiểu đựng trong hộp nhung bọc hoa bất tử đỏ thắm.',
    img: 'photo-1512909006721-3d6018887383',
    stock: 6
  },
  {
    name: 'KÍNH MẮT PHI HÀNH GIA GỌNG MẠ VÀNG 18K',
    price: 650,
    desc: 'Vẻ điển trai sang cả với gọng kính mảnh mạ vàng chống loá bụi tốt phù hợp làm quà biếu doanh nhân.',
    img: 'photo-1607344645866-009c320c5ab8',
    stock: 10
  },
  {
    name: 'TRÂM CÀI TÓC PHƯỢNG HOÀNG CỔ TRANG',
    price: 980,
    desc: 'Chạm khắc tỉ mẩn xảo diệu hình chim phượng múa lượn gắn saphire giọt ngầm và chuỗi lắc vàng sang trọng.',
    img: 'photo-1515562141207-7a88fb7ce338',
    stock: 4
  },
  {
    name: 'ĐỒNG HỒ THẠCH ANH LUMINA SPECTER MINIMAL',
    price: 1450,
    desc: 'Mặt tinh thạch sapphire chống xước siêu tốt đai dây kim loại đan dệt tinh ảo thể hiện đỉnh cao lịch lãm.',
    img: 'photo-1523293182086-7651a899d37f',
    stock: 8
  },
  {
    name: 'VÍ DA CẦM TAY DỆT SỢI VÀNG CLASSY',
    price: 480,
    desc: 'Da dê núi thuộc thảo mộc thủ công siêu êm tay phối thêu sợi kim tuyến mịn lấp lánh sang điệu hoàng gia.',
    img: 'photo-1544816155-12df9643f363',
    stock: 12
  },
  {
    name: 'HỘP NHẠC GỖ SỒI CHẠM HOA THĂM CA',
    price: 350,
    desc: 'Thùng gỗ âm thanh vang ấm khắc điêu luyện phong cảnh vintage, quà tặng lãng mạn cho sinh nhật và kỷ niệm.',
    img: 'photo-1513201099475-e4b1ec12db05',
    stock: 15
  },
  {
    name: 'TRÂM CÀI ÁO CUNG ĐÌNH RUBY EMBLEM',
    price: 820,
    desc: 'Giúp nổi bật ve áo vest hay váy dạ tiệc của quý cô nạm một viên hồng ngọc sẫm huyết tinh anh cực sang.',
    img: 'photo-1515562141207-7a88fb7ce338',
    stock: 7
  },
  {
    name: 'SET NẾN THƠM ĐÀN HƯƠNG KÈM DÂY BẠC',
    price: 550,
    desc: 'Mùi gỗ hoàng đàn thư giãn nhẹ thanh khử mùi ấm áp kèm mặt phật ngọc bọc bạc may mắn hộ mệnh cát tường.',
    img: 'photo-1513829096999-4978602297af',
    stock: 20
  },
  {
    name: 'HỘP ĐỰNG ĐỒ TRANG SỨC VELVET ROYAL',
    price: 400,
    desc: 'Có khoá số đồng cổ, lớp khay chia tầng khoa học bọc vải nhung đỏ mượt ngăn tối đa ẩm xước báu vật.',
    img: 'photo-1512909006721-3d6018887383',
    stock: 14
  },
  {
    name: 'GƯƠNG SOI BỎ TÚI SƠN MÀI HOA SEN',
    price: 220,
    desc: 'Gương gập hai mặt sắc nét hoạ tiết hoa sen sơn mài rực rỡ mang đậm quốc hồn văn hoá Việt Nam tao nhã.',
    img: 'photo-1513201099475-e4b1ec12db05',
    stock: 25
  },
  {
    name: 'HỘP QUÀ ẤM CÚNG ENGRAVED CUSTOMIZED WOODEN',
    price: 1200,
    desc: 'Hộp gỗ thông dầu thơm khắc ảnh kỷ niệm mộc mạc đi kèm nhẫn tơ bạc đai kép ý nghĩa thâm tình.',
    img: 'photo-1549465220-1a8b9238cd48',
    stock: 9
  },
  {
    name: 'BÚT KÝ CAO CẤP GỌNG VÀNG PARKER CHỈ',
    price: 750,
    desc: 'Bút máy bơm pít tông sơn mài đen tuyền bóng lộn cài gọng vàng 18k nâng tầm đẳng cấp nét chữ ký vương giả.',
    img: 'photo-1607344645866-009c320c5ab8',
    stock: 18
  },
  {
    name: 'MÓC KHÓA PHA LÊ DIAMOND CHÀI XƯỚC',
    price: 180,
    desc: 'Cảm hứng khối đa diện rực sắc thuỷ tinh nạm bọc vòng thép mạ titan đen bền chắc sang trọng xịn sò.',
    img: 'photo-1549465220-1a8b9238cd48',
    stock: 30
  },
  {
    name: 'HỘP QUÀ LỤA TƠ TẰM HÀ ĐÔNG VẼ TAY',
    price: 880,
    desc: 'Sản phẩm tơ tằm nguyên bản mềm mịn tựa sương mai thêu hoạ tiết lá sen thuỷ mặc quý phái độc bản nâng niu.',
    img: 'photo-1544816155-12df9643f363',
    stock: 8
  },
  {
    name: 'TRÂM CÀI ÁO PEARL CROWN ĐÍNH KHÈ',
    price: 420,
    desc: 'Tái hiện vương miện hoàng gia Anh Quốc nhỏ xinh bằng ngọc trai mạ vàng trắng cho trang phục thêm điểm nhấn lịch thiệp.',
    img: 'photo-1515562141207-7a88fb7ce338',
    stock: 13
  },
  {
    name: 'BỘ SỨ CHÉN TRÀ HOÀNG GIA CHÂU ÂU',
    price: 1600,
    desc: 'Tuyển tuyển 1 ấm và 6 tách mạ vàng nguyên chất vẽ uốn sóng gốm quý thấu quang kiều diễm xa hoa bậc nhất.',
    img: 'photo-1513201099475-e4b1ec12db05',
    stock: 3
  },
  {
    name: 'KẸP CÀ VẠT BẠCH KIM EXECUTIVE ONYX',
    price: 320,
    desc: 'Chi tiết đá cự thạch Onyx đen tuyền huyền ảo đính trang nhã lịch lãm tôn vóc dáng bộ âu phục phong thái thành đạt.',
    img: 'photo-1607344645866-009c320c5ab8',
    stock: 16
  }
];

const createProductList = (raw: any[], category: string, startId: number, isGift = false): Product[] => {
  return raw.map((item, index) => ({
    id: String(startId + index),
    name: item.name,
    price: item.price,
    description: item.desc,
    imageUrl: `https://images.unsplash.com/${item.img}?q=80&w=800&auto=format&fit=crop`,
    category,
    stock: item.stock,
    isGift
  }));
};

export const MOCK_PRODUCTS: Product[] = [
  ...createProductList(ringsRaw, 'nhẫn', 1),
  ...createProductList(necklacesRaw, 'vòng cổ', 19),
  ...createProductList(braceletsRaw, 'vòng tay', 37),
  ...createProductList(earringsRaw, 'bông tai', 55),
  ...createProductList(giftsRaw, 'quà tặng', 73, true)
];
