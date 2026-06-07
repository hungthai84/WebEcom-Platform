import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, Sparkles, CheckCircle2, Phone, User, Compass } from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '09:00',
    service: 'jewelry-styling',
    note: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date) {
      alert('Vui lòng điền đầy đủ thông tin bắt buộc.');
      return;
    }
    
    // Save to localStorage
    const savedAppointments = JSON.parse(localStorage.getItem('skinova_appointments') || '[]');
    const newAppointment = {
      ...formData,
      id: String(Date.now()),
      createdAt: new Date().toISOString()
    };
    savedAppointments.push(newAppointment);
    localStorage.setItem('skinova_appointments', JSON.stringify(savedAppointments));

    setIsSuccess(true);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      date: '',
      time: '09:00',
      service: 'jewelry-styling',
      note: ''
    });
    setIsSuccess(false);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-lg bg-white/95 backdrop-blur-xl border border-white/20 rounded-[32px] overflow-hidden shadow-2xl z-10 p-8 md:p-10 font-sans"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-black transition-colors"
            >
              <X size={20} />
            </button>

            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-[10px] font-mono tracking-[0.3em] uppercase text-purple-600 mb-2">
                    <Sparkles size={12} className="animate-pulse" />
                    <span>Skinova Luxury Experience</span>
                  </div>
                  <h3 className="text-3xl font-display font-medium text-black">
                    Đặt Lịch Hẹn Tư Vấn
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Trải nghiệm cá nhân hóa chuyên sâu từ chăm sóc tế bào da gốc đến thiết kế trang sức độc bản.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-[10px] font-mono tracking-widest text-gray-400 uppercase mb-1 ml-1 required">
                      Họ và Tên *
                    </label>
                    <div className="relative flex items-center bg-gray-50 border border-gray-100 focus-within:border-purple-600 focus-within:bg-white rounded-2xl p-3 transition-all">
                      <User size={16} className="text-gray-400 mr-3" />
                      <input
                        type="text"
                        required
                        placeholder="Nguyễn Văn A"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-transparent border-none outline-none text-sm w-full text-black placeholder-gray-400 font-sans"
                      />
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label className="block text-[10px] font-mono tracking-widest text-gray-400 uppercase mb-1 ml-1 required">
                      Số Điện Thoại *
                    </label>
                    <div className="relative flex items-center bg-gray-50 border border-gray-100 focus-within:border-purple-600 focus-within:bg-white rounded-2xl p-3 transition-all">
                      <Phone size={16} className="text-gray-400 mr-3" />
                      <input
                        type="tel"
                        required
                        placeholder="0912 345 678"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-transparent border-none outline-none text-sm w-full text-black placeholder-gray-400 font-sans"
                      />
                    </div>
                  </div>

                  {/* Choice of Service */}
                  <div>
                    <label className="block text-[10px] font-mono tracking-widest text-gray-400 uppercase mb-1 ml-1">
                      Dịch vụ yêu cầu
                    </label>
                    <div className="relative flex items-center bg-gray-50 border border-gray-100 focus-within:border-purple-600 focus-within:bg-white rounded-2xl p-3 transition-all">
                      <Compass size={16} className="text-gray-400 mr-3 shrink-0" />
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="bg-transparent border-none outline-none text-sm w-full text-black placeholder-gray-400 font-sans cursor-pointer focus:ring-0"
                      >
                        <option value="skin-analysis">Liệu trình Thải độc & Điều trị Mụn SKINOVA</option>
                        <option value="skin-therapy">Trị liệu Sáng mịn Da Toàn diện (Glow Therapy)</option>
                        <option value="jewelry-styling">Tư vấn Phối Đồ & Thử Trang Sức Kim Cương</option>
                        <option value="ring-fitting">Thiết Kế & Đo Size Nhẫn Cưới Thiết Kế</option>
                      </select>
                    </div>
                  </div>

                  {/* Date & Time Slot */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono tracking-widest text-gray-400 uppercase mb-1 ml-1 required">
                        Chọn Ngày Hẹn *
                      </label>
                      <div className="relative flex items-center bg-gray-50 border border-gray-100 focus-within:border-purple-600 focus-within:bg-white rounded-2xl p-3 transition-all">
                        <Calendar size={16} className="text-gray-400 mr-3 shrink-0" />
                        <input
                          type="date"
                          required
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="bg-transparent border-none outline-none text-sm w-full text-black placeholder-gray-400 font-sans cursor-pointer"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono tracking-widest text-gray-400 uppercase mb-1 ml-1">
                        Chọn Giờ Hẹn
                      </label>
                      <div className="relative flex items-center bg-gray-50 border border-gray-100 focus-within:border-purple-600 focus-within:bg-white rounded-2xl p-3 transition-all">
                        <Clock size={16} className="text-gray-400 mr-3 shrink-0" />
                        <select
                          value={formData.time}
                          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                          className="bg-transparent border-none outline-none text-sm w-full text-black placeholder-gray-400 font-sans cursor-pointer"
                        >
                          <option value="09:00">09:00 AM</option>
                          <option value="10:30">10:30 AM</option>
                          <option value="13:30">01:30 PM</option>
                          <option value="15:00">03:00 PM</option>
                          <option value="16:30">04:30 PM</option>
                          <option value="18:00">06:00 PM</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Notes input */}
                  <div>
                    <label className="block text-[10px] font-mono tracking-widest text-gray-400 uppercase mb-1 ml-1">
                      Ghi chú thêm
                    </label>
                    <textarea
                      placeholder="Ghi chú về tình trạng da của bạn, hoặc dòng trang sức bạn quan tâm..."
                      value={formData.note}
                      onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                      className="bg-gray-50 border border-gray-100 focus:border-purple-600 focus:bg-white rounded-2xl p-3 text-sm w-full h-20 text-black placeholder-gray-400 font-sans outline-none resize-none transition-all"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-2xl py-4 text-xs font-mono tracking-widest uppercase hover:opacity-90 active:scale-98 transition-all shadow-lg font-bold"
                >
                  Xác Nhận Đăng Ký Lịch Hẹn ↗
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 space-y-6 flex flex-col items-center justify-center font-sans"
              >
                <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center shadow-inner">
                  <CheckCircle2 size={36} className="animate-bounce" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl font-display font-bold text-black uppercase tracking-tight">Đăng Ký Thành Công!</h3>
                  <p className="text-sm text-gray-500 max-w-sm mx-auto leading-relaxed">
                    Cảm ơn <span className="font-semibold text-black">{formData.name}</span>. Yêu cầu đặt lịch của bạn vào ngày <span className="font-semibold text-black">{formData.date}</span> lúc <span className="font-semibold text-black">{formData.time}</span> đã được ghi nhận thành công!
                  </p>
                </div>

                <div className="p-4 bg-purple-50/50 rounded-2xl text-[11px] text-purple-700 font-medium max-w-sm text-center leading-normal">
                  Chuyên viên tư vấn của SKINOVA sẽ liên hệ trực tiếp với bạn qua số điện thoại <span className="underline">{formData.phone}</span> để xác nhận trong vòng 15 phút.
                </div>

                <button
                  onClick={handleClose}
                  className="bg-black text-white rounded-full px-10 py-3 text-xs font-mono tracking-widest uppercase hover:bg-gray-900 transition-all shadow-md mt-4"
                >
                  Đóng Cửa Sổ
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
