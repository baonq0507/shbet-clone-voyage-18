import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SimpleGamesList from "@/components/SimpleGamesList";
import { Trophy, Target, TrendingUp } from "lucide-react";
import { menuItems } from "@/utils/menuItems";
import sportsGame from "@/assets/sports-game.jpg";

const TheThao = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${sportsGame})` }}
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            <span className="text-gradient">CÁ CƯỢC THỂ THAO</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Cá cược thể thao với tỷ lệ cược cao nhất thị trường
          </p>
          <Button variant="casino" size="lg" className="text-lg px-8 py-4">
            <Trophy className="w-6 h-6" />
            Đặt Cược Ngay
          </Button>
        </div>
      </section>

      {/* Sports Types */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-gradient">CÁC MÔN THỂ THAO</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Bóng Đá', 'Bóng Rổ', 'Tennis', 'Bóng Chuyền', 'E-Sports', 'Cầu Lông', 'Bóng Bàn', 'Boxing'].map((sport) => (
              <div key={sport} className="text-center p-6 rounded-lg bg-gradient-primary/10 hover:bg-gradient-primary/20 transition-all cursor-pointer casino-glow">
                <div className="text-4xl mb-3">⚽</div>
                <div className="font-bold text-gradient">{sport}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">
            🏆 TÍNH NĂNG VƯỢT TRỘI 🏆
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-card/10 backdrop-blur-sm rounded-lg p-6 casino-glow">
              <Target className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2 text-gradient">Tỷ Lệ Cao</h3>
              <div className="text-white/80">Tỷ lệ cược hấp dẫn nhất thị trường</div>
            </div>
            <div className="bg-card/10 backdrop-blur-sm rounded-lg p-6 casino-glow">
              <TrendingUp className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2 text-gradient">Live Betting</h3>
              <div className="text-white/80">Cược trực tiếp trong suốt trận đấu</div>
            </div>
            <div className="bg-card/10 backdrop-blur-sm rounded-lg p-6 casino-glow">
              <Trophy className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2 text-gradient">Cash Out</h3>
              <div className="text-white/80">Rút tiền sớm để bảo toàn lợi nhuận</div>
            </div>
          </div>
        </div>
      </section>

      {/* Games */}
      <SimpleGamesList 
        title="THỂ THAO HOT NHẤT" 
        category="sports"
        gpids={menuItems.find(item => item.id === 'thethao')?.dropdown?.map(item => Number(item.id)) || []} 
        maxGames={12} 
      />

      <Footer />
    </div>
  );
};

export default TheThao;