import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Trash2, Edit2, RotateCw, X, ChevronRight, Package, DollarSign, Tag, Image as ImageIcon } from 'lucide-react';
import { useProducts } from '../context/ProductContext';
import { db } from '../lib/firebase';
import { collection, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';

export const AdminDashboard: React.FC = () => {
  const { products, loading } = useProducts();
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [syncing, setSyncing] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    price: 0,
    description: '',
    imageUrl: '',
    category: 'nhẫn',
    stock: 0,
    isGift: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingId) {
        const docRef = doc(db, 'products', editingId);
        await updateDoc(docRef, formData);
        setEditingId(null);
      } else {
        await addDoc(collection(db, 'products'), formData);
        setIsAdding(false);
      }
      setFormData({
        name: '',
        price: 0,
        description: '',
        imageUrl: '',
        category: 'nhẫn',
        stock: 0,
        isGift: false
      });
    } catch (error) {
      console.error("Error saving product:", error);
      alert("Lỗi khi lưu sản phẩm. Vui lòng kiểm tra quyền truy cập (Admin).");
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này?')) {
      try {
        await deleteDoc(doc(db, 'products', id));
      } catch (error) {
        alert("Lỗi khi xóa sản phẩm.");
      }
    }
  };

  const handleSyncFromPOS = async () => {
    setSyncing(true);
    try {
      // Mocking a sync call to our own API
      const response = await fetch('/api/sync-products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          products: [
            {
              id: 'pos-1',
              name: 'VÒNG TAY POS EXCLUSIVE',
              price: 1500,
              description: 'Sản phẩm đồng bộ từ hệ thống POS.',
              imageUrl: 'https://images.unsplash.com/photo-1573408339391-23bc36739df2?q=80&w=1000&auto=format&fit=crop',
              category: 'vòng tay',
              stock: 10,
              isGift: false
            }
          ]
        })
      });
      const data = await response.json();
      alert(data.message || data.error);
    } catch (error) {
      console.error("Sync error:", error);
    } finally {
      setSyncing(false);
    }
  };

  const handleSeedData = async () => {
    setSyncing(true);
    try {
      const { MOCK_PRODUCTS } = await import('../mockData');
      const response = await fetch('/api/sync-products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ products: MOCK_PRODUCTS })
      });
      const data = await response.json();
      alert("Đã khởi tạo dữ liệu mẫu thành công!");
    } catch (error) {
       console.error("Seed error:", error);
    } finally {
      setSyncing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/50 p-8 pt-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h1 className="text-4xl font-display font-bold tracking-tight text-black uppercase">
              Quản Lý <span className="text-gray-300 italic">Sản Phẩm</span>
            </h1>
            <p className="text-gray-500 mt-2 font-mono text-[10px] tracking-widest uppercase">Admin Panel</p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={handleSeedData}
              disabled={syncing}
              className="flex items-center gap-2 bg-white border border-gray-100 text-black px-6 py-3 rounded-full text-xs font-mono tracking-widest uppercase hover:bg-gray-50 transition-all shadow-sm"
            >
              Phục Hồi Dữ Liệu
            </button>
            <button 
              onClick={handleSyncFromPOS}
              disabled={syncing}
              className="flex items-center gap-2 bg-white border border-gray-100 text-black px-6 py-3 rounded-full text-xs font-mono tracking-widest uppercase hover:bg-gray-50 transition-all shadow-sm"
            >
              <RotateCw size={16} className={syncing ? 'animate-spin' : ''} />
              Đồng Bộ POS
            </button>
            <button 
              onClick={() => setIsAdding(true)}
              className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-xs font-mono tracking-widest uppercase hover:bg-gray-900 transition-all shadow-xl"
            >
              <Plus size={16} />
              Thêm Sản Phẩm
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {products.map((product) => (
              <motion.div 
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-50 group hover:shadow-md transition-all"
              >
                <div className="aspect-square rounded-xl overflow-hidden mb-4 bg-gray-50">
                  <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <div className="space-y-1 mb-4">
                  <div className="text-[10px] font-mono tracking-widest text-gray-400 uppercase">{product.category}</div>
                  <h3 className="text-lg font-medium tracking-tight text-black">{product.name}</h3>
                  <div className="text-lg font-mono font-bold text-amber-600">${product.price}</div>
                </div>
                <div className="flex gap-2 pt-4 border-t border-gray-50">
                  <button 
                    onClick={() => {
                      setEditingId(product.id);
                      setFormData({ ...product });
                    }}
                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-gray-50 text-gray-600 hover:bg-gray-100 transition-colors text-[10px] font-mono uppercase tracking-widest"
                  >
                    <Edit2 size={12} /> Sửa
                  </button>
                  <button 
                    onClick={() => handleDelete(product.id)}
                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-colors text-[10px] font-mono uppercase tracking-widest"
                  >
                    <Trash2 size={12} /> Xóa
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal for Add/Edit */}
      <AnimatePresence>
        {(isAdding || editingId) && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
              onClick={() => { setIsAdding(false); setEditingId(null); }}
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-2 right-2 bottom-2 w-full max-w-lg bg-white rounded-2xl z-[101] shadow-2xl overflow-hidden flex flex-col"
            >
              <div className="p-8 flex justify-between items-center border-b border-gray-50">
                <span className="text-xs font-mono tracking-widest text-gray-400 uppercase">{editingId ? 'Chỉnh Sửa' : 'Thêm Mới'} Sản Phẩm</span>
                <button onClick={() => { setIsAdding(false); setEditingId(null); }} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-8 space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-gray-400">Tên Sản Phẩm</label>
                  <input 
                    required
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-100 focus:border-black outline-none transition-colors font-sans"
                    placeholder="VD: Nhẫn Vàng Aurum"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-gray-400">Giá ($)</label>
                    <input 
                      required
                      type="number" 
                      value={formData.price}
                      onChange={(e) => setFormData({...formData, price: Number(e.target.value)})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-100 focus:border-black outline-none transition-colors font-mono"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-gray-400">Tồn Kho</label>
                    <input 
                      required
                      type="number" 
                      value={formData.stock}
                      onChange={(e) => setFormData({...formData, stock: Number(e.target.value)})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-100 focus:border-black outline-none transition-colors font-mono"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-gray-400">Danh Mục</label>
                  <select 
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-100 focus:border-black outline-none transition-colors bg-white font-sans"
                  >
                    <option value="nhẫn">Nhẫn</option>
                    <option value="vòng cổ">Vòng Cổ</option>
                    <option value="vòng tay">Vòng Tay</option>
                    <option value="bông tai">Bông Tai</option>
                    <option value="quà tặng">Quà Tặng</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-gray-400">URL Hình Ảnh</label>
                  <input 
                    required
                    type="text" 
                    value={formData.imageUrl}
                    onChange={(e) => setFormData({...formData, imageUrl: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-100 focus:border-black outline-none transition-colors font-sans text-xs"
                    placeholder="https://images.unsplash.com/..."
                  />
                  {formData.imageUrl && (
                    <div className="mt-2 aspect-video rounded-xl overflow-hidden border border-gray-50">
                      <img src={formData.imageUrl} alt="Preview" className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-gray-400">Mô Tả</label>
                  <textarea 
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-100 focus:border-black outline-none transition-colors font-sans text-sm resize-none"
                    placeholder="Mô tả chi tiết sản phẩm..."
                  />
                </div>

                <div className="flex items-center gap-2 py-4">
                  <input 
                    type="checkbox" 
                    id="isGift"
                    checked={formData.isGift}
                    onChange={(e) => setFormData({...formData, isGift: e.target.checked})}
                    className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black"
                  />
                  <label htmlFor="isGift" className="text-sm font-medium">Đánh dấu là quà tặng</label>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-black text-white py-4 rounded-xl font-mono text-xs tracking-[0.2em] uppercase hover:bg-gray-900 transition-all shadow-xl flex items-center justify-center gap-2"
                >
                  <ChevronRight size={16} />
                  {editingId ? 'Cập Nhật' : 'Lưu Sản Phẩm'}
                </button>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
