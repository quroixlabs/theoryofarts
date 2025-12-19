import { motion } from 'motion/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import MobileNav from './MobileNav';

export default function GalleryPage() {
  const navigate = useNavigate();
  const [hoveredWork, setHoveredWork] = useState<number | null>(null);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  // --------------------------------------
  // MASTER WORKS (Corrected)
  // --------------------------------------
  const masterworks = [
    { id: 1, title: 'Nature', image: '/assets/Nature.jpg' },
    { id: 2, title: 'Bint', image: '/assets/Bint.jpg' },
    { id: 3, title: 'Sorrow', image: '/assets/Old.jpg' },
    { id: 4, title: 'She', image: '/assets/SHE.jpg' },
    { id: 5, title: 'Age', image: '/assets/Age.jpg' },
    { id: 6, title: 'Mother', image: '/assets/Mother.jpg' },
    { id: 7, title: 'Sai Pallavi', image: '/assets/Saipallavi.jpg' },
  ];

  const artForSale = [
    {
      id: 1,
      title: 'Sorrow',
      price: '₹56,000',
      dimensions: '15" × 18"',
      framedDimensions: 'With frame: 19" × 23"',
      image: '/assets/Old.jpg',
    },
    {
      id: 2,
      title: 'Age',
      price: '₹800',
      dimensions: '18" × 24"',
      framedDimensions: '',
      image: '/assets/Age.jpg',
    },
    {
      id: 3,
      title: 'She',
      price: '₹440',
      dimensions: '18" × 24"',
      framedDimensions: '',
      image: '/assets/SHE.jpg',
    },
    {
      id: 4,
      title: 'Nature',
      price: '₹24,000',
      dimensions: '11" × 16"',
      framedDimensions: 'With frame: 15" × 20"',
      soldOut: true,
      image: '/assets/Nature.jpg',
    },
    {
      id: 5,
      title: 'Bint',
      price: '₹2,500',
      dimensions: '8" × 11"',
      framedDimensions: '',
      image: '/assets/Bint.jpg',
    },
    {
      id: 6,
      title: 'Mother',
      price: '₹32,000',
      dimensions: '11" × 16"',
      framedDimensions: 'With frame: 15" × 20"',
      image: '/assets/Mother.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-[#000100]">
      {/* Navigation Header */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-[#000100]/95 backdrop-blur-sm border-b border-[#B6B6B4]/20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border border-[#B6B6B4]/40">
              <img
                src="/assets/Logo.jpg"
                alt="Logo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            <button
              onClick={() => navigate('/')}
              className="text-xl md:text-2xl text-[#B6B6B4] tracking-wider hover:opacity-80 transition-opacity"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Theory of Arts
            </button>
          </div>

          <MobileNav currentPage="gallery" />
        </div>
      </motion.header>

      {/* Page Title */}
      <section className="pt-32 pb-16 px-6">
        <motion.div
          className="max-w-7xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="text-5xl md:text-7xl text-[#B6B6B4] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Gallery
          </h1>
          <div className="w-24 h-px bg-[#B6B6B4] mx-auto mt-6" />
        </motion.div>
      </section>

      {/* Masterworks Showcase */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl md:text-5xl text-[#F5F5F5] mb-12 text-center"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Masterworks Collection
          </motion.h2>

          <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
            <Masonry gutter="24px">
              {masterworks.map((work, index) => (
                <motion.div
                  key={work.id}
                  className="relative group cursor-pointer overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredWork(work.id)}
                  onMouseLeave={() => setHoveredWork(null)}
                >
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={work.image}
                      alt={work.title}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div
                      className={`absolute inset-0 bg-[#000100]/80 flex items-center justify-center transition-opacity duration-500 ${hoveredWork === work.id ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                      <h3
                        className="text-2xl text-[#B6B6B4]"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        {work.title}
                      </h3>
                    </div>
                  </div>

                  <div
                    className={`absolute inset-0 border-2 border-[#B6B6B4] transition-opacity duration-500 pointer-events-none ${hoveredWork === work.id ? 'opacity-100' : 'opacity-0'
                      }`}
                    style={{
                      boxShadow:
                        hoveredWork === work.id
                          ? '0 0 30px rgba(182, 182, 180, 0.4)'
                          : 'none',
                    }}
                  />
                </motion.div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="h-px bg-gradient-to-r from-transparent via-[#B6B6B4] to-transparent" />
      </div>

      {/* Art for Acquisition */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl md:text-5xl text-[#F5F5F5] mb-12 text-center"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Art for Acquisition
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artForSale.map((product, index) => (
              <motion.div
                key={product.id}
                className="bg-[#292929] overflow-hidden group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className="relative overflow-hidden aspect-[3/4]">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 border-2 transition-all duration-300 ${hoveredProduct === product.id
                        ? 'border-[#B6B6B4] shadow-[0_0_30px_rgba(182,182,180,0.4)]'
                        : 'border-transparent'
                      }`}
                  />
                </div>

                <div className="p-6">
                  <h3
                    className="text-xl text-[#F5F5F5] mb-2"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {product.title}
                  </h3>
                  <p className="text-[#8A8A8A] mb-1">{product.dimensions}</p>
                  {product.framedDimensions && (
                    <p className="text-[#8A8A8A] mb-1">
                      {product.framedDimensions}
                    </p>
                  )}
                  <p className="text-[#B6B6B4] mb-6">{product.price}</p>

                  {product.soldOut ? (
                    <div className="w-full py-3 bg-[#292929] border-2 border-[#8A8A8A] text-[#8A8A8A] text-center">
                      Sold Out
                    </div>
                  ) : (
                    <button
                      onClick={() => navigate('/contacts')}
                      className="w-full py-3 bg-[#B6B6B4] text-[#000100] hover:bg-[#B6B6B4]/90 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(182,182,180,0.3)]"
                    >
                      Inquire to Purchase
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Commission Banner */}
      <section className="py-24 px-6">
        <motion.div
          className="max-w-7xl mx-auto relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative min-h-[500px] flex items-center justify-center">
            <div className="absolute inset-0">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1645636667214-c4875ef3d59c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Art Studio"
                className="w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#000100] via-[#000100]/80 to-[#000100]" />
            </div>

            <div className="relative z-10 text-center px-6 py-16 max-w-4xl">
              <motion.h2
                className="text-4xl md:text-6xl text-[#B6B6B4] mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Commission Your Masterpiece
              </motion.h2>

              <motion.p className="text-xl md:text-2xl text-[#F5F5F5] mb-12 leading-relaxed">
                Theory of Arts Services tailored to your vision
              </motion.p>

              <motion.p className="text-[#8A8A8A] mb-12 max-w-2xl mx-auto leading-relaxed">
                From intimate portraits to grand-scale installations, collaborate
                directly with the artist to create a unique work of art that
                embodies your aesthetic vision and personal narrative.
              </motion.p>

              <motion.button
                onClick={() => navigate('/contacts')}
                className="px-16 py-5 bg-[#B6B6B4] text-[#000100] text-lg hover:bg-[#B6B6B4]/90 transition-all duration-300 hover:scale-105 gold-glow-animation"
              >
                Start Custom Portrait Order
              </motion.button>
            </div>
          </div>

          <div className="absolute inset-0 border-2 border-[#B6B6B4]/30 pointer-events-none" />
        </motion.div>
      </section>
    </div>
  );
}
