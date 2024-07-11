export default function UserAndJourney() {
    return (
      <main className="mt-24 px-6 md:px-24 lg:px-48">
        <div className="text-center mb-16">
          <p className="text-2xl font-bold text-pink-600">Our Journey So Far!</p>
          <p className="text-lg text-gray-700 mt-2">
            Our end-to-end service handles everything from property visits to
            paperwork, including police verification
          </p>
          <p className="text-lg text-gray-700 mt-2">Trusted by customers working at:</p>
        </div>
        <div className="flex justify-center mb-16 space-x-6">
          <img src="/path/to/google-logo.png" alt="Google" className="h-12" />
          <img src="/path/to/cognizant-logo.png" alt="Cognizant" className="h-12" />
          <img src="/path/to/airtel-logo.png" alt="Airtel" className="h-12" />
          <img src="/path/to/zomato-logo.png" alt="Zomato" className="h-12" />
        </div>
        <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-12">
          <div className="text-center">
            <p className="text-5xl font-bold text-gray-800">35%</p>
            <p className="text-lg text-gray-700 mt-2">
              Total Clients who referred us further after using our services
            </p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold text-gray-800">100+</p>
            <p className="text-lg text-gray-700 mt-2">
              Total Properties we have shown to our clients till date
            </p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold text-gray-800">&gt;70%</p>
            <p className="text-lg text-gray-700 mt-2">
              Site Visits we have shown to our clients till date
            </p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold text-gray-800">4.8/5</p>
            <p className="text-lg text-gray-700 mt-2">
              NPS by Clients we have shown to our clients till date
            </p>
          </div>
        </div>
        <div className="text-center mt-12">
        Our end-to-end service handles everything from property visits to paperwork, including police verification.
        Our end-to-end service handles everything from property visits to paperwork, including police verification
        </div>
      </main>
    );
  }
  