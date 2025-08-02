export default function CatalogAbout() {
  return (
    <div className="mt-8 mb-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-3xl font-bold text-center mb-8">О нашем каталоге памятников</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12 justify-items-center">
          <div className="overflow-hidden rounded-xl aspect-square">
            <img 
              src="/img/3fcea721-d774-4c1d-bc1b-eeb3215e8455.jpg" 
              alt=""
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="overflow-hidden rounded-xl aspect-square">
            <img 
              src="/img/afe03e9e-1f12-40c1-8503-9f8d4014d1d4.jpg" 
              alt=""
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="overflow-hidden rounded-xl aspect-square">
            <img 
              src="/img/c0de4c7e-7659-454c-b186-7125f9313d41.jpg" 
              alt=""
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        <div className="text-center bg-muted/30 rounded-xl p-8">
          <p className="text-muted-foreground leading-relaxed text-lg max-w-4xl mx-auto">
            Каждый памятник в нашем каталоге создается с особым вниманием к деталям и качеству исполнения. 
            Мы понимаем важность этого выбора и предлагаем только проверенные временем решения, 
            которые станут достойной данью памяти вашим близким.
          </p>
        </div>
      </div>
    </div>
  );
}