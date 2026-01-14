

// Placeholder images
const images = {
  main: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=1000&auto=format&fit=crop", 
  secondary1: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000&auto=format&fit=crop", 
  secondary2: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=1000&auto=format&fit=crop", 
  secondary3: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=1000&auto=format&fit=crop"
};

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background text-text transition-colors duration-300 pt-20 pb-12 lg:py-0">
      
      {/* Background Decorational Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-64 h-64 md:w-96 md:h-96 bg-secondary/30 rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-[0%] right-[-10%] w-80 h-80 md:w-[500px] md:h-[500px] bg-primary/20 rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 items-center">
          
          {/* --- Left Content --- */}
          <div className="flex flex-col gap-6 text-center lg:text-left relative z-20 order-1">
            
            {/* Badge */}
            <div className="animate-fade-up flex justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/20 border border-secondary/50 text-primary font-medium text-xs md:text-sm tracking-wide">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </div>
                AgroBase 2.0 Launched
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight animate-fade-up delay-100">
              Cultivating <span className="text-primary">Knowledge</span>, Growing Future.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-text/80 max-w-2xl mx-auto lg:mx-0 animate-fade-up delay-200">
              Your ultimate digital companion for agriculture. Explore plant species, understand their unique benefits, and access sustainable farming insights.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-2 animate-fade-up delay-300">
              <button className="px-8 py-3.5 rounded-xl bg-primary text-white font-semibold shadow-lg shadow-primary/30 hover:bg-accent transition-all duration-300 hover:-translate-y-1 hover:shadow-xl w-full sm:w-auto">
                Explore Database
              </button>
              <button className="px-8 py-3.5 rounded-xl border border-text/20 hover:border-primary hover:text-primary transition-all duration-300 w-full sm:w-auto">
                Learn More
              </button>
            </div>
             
             {/* Stats Block */}
            <div className="pt-6 flex items-center justify-center lg:justify-start gap-8 text-text animate-fade-up delay-300">
                <div className="flex flex-col items-center lg:items-start">
                    <span className="text-2xl md:text-3xl font-bold text-primary">850+</span>
                    <span className="text-xs md:text-sm text-text/70 font-medium">Plant Varieties</span>
                </div>
                 <div className="h-10 w-px bg-text/10"></div>
                 <div className="flex flex-col items-center lg:items-start">
                    <span className="text-2xl md:text-3xl font-bold text-primary">Free</span>
                    <span className="text-xs md:text-sm text-text/70 font-medium">Access for All</span>
                </div>
            </div>
          </div>

          {/* --- Right Image Composition --- */}
          <div className="relative order-2 w-full h-[400px] sm:h-[500px] lg:h-[600px] animate-fade-up delay-200 mt-6 lg:mt-0 mx-auto max-w-lg lg:max-w-none">
            
            {/* The large blur behind the images */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-tr from-secondary/30 to-primary/30 rounded-full blur-3xl -z-10 opacity-60" />

            {/* Image 1: Top Right (Background layer) */}
            <div className="absolute top-0 right-0 lg:right-4 w-5/12 aspect-square animate-float-slow delay-700 z-10">
                 <img 
                  src={images.secondary1} 
                  alt="Agriculture field" 
                  className="w-full h-full object-cover rounded-xl md:rounded-2xl shadow-md border-2 border-white/30 dark:border-white/10 opacity-90"
                />
            </div>

             {/* Image 2: Bottom Left (Background layer) */}
            <div className="absolute bottom-8 left-0 lg:left-4 w-5/12 aspect-[4/3] animate-float-medium delay-500 z-10">
                 <img 
                  src={images.secondary2} 
                  alt="Plant details" 
                  className="w-full h-full object-cover rounded-xl md:rounded-2xl shadow-md border-2 border-white/30 dark:border-white/10 opacity-90"
                />
            </div>

            {/* Image 3: MAIN CENTER IMAGE (Foreground) */}
            <div className="absolute top-[10%] left-[15%] md:left-[20%] w-8/12 md:w-7/12 aspect-[3/4] animate-float-slow z-30">
               <div className="relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 border-[4px] border-background/50 dark:border-white/10">
                 <img 
                    src={images.main}
                    alt="Healthy seedling" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                 {/* Glassmorphism overlay on main image */}
                 <div className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4 bg-background/80 backdrop-blur-md p-2 md:p-3 rounded-lg border border-white/20 shadow-sm flex items-center gap-3">
                      <span className="text-xl md:text-2xl">🌱</span>
                      <div className="text-left">
                          <p className="text-xs md:text-sm font-bold text-primary">Know Your Plants</p>
                          <p className="text-[10px] md:text-xs text-white/70 leading-tight">Discover the Benefits</p>
                      </div>
                 </div>
               </div>
            </div>

            {/* Image 4: Bottom Right Overlap (Mid-ground) */}
             <div className="absolute bottom-[5%] right-[5%] w-4/12 aspect-square animate-float-fast delay-200 z-20">
                 <img 
                  src={images.secondary3} 
                  alt="Hands holding soil" 
                  className="w-full h-full object-cover rounded-xl md:rounded-2xl shadow-lg border-2 border-white/50 dark:border-white/20"
                />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;