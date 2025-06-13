import PricingCard from './components/PricingCard';
import './styles.css';

function App() {
  const pricingPlans = [
    {
      plan: "Basic",
      price: "$9",
      features: [
        "1 project",
        "5GB storage",
        "Basic support",
        "Email support"
      ],
      isFeatured: false
    },
    {
      plan: "Pro",
      price: "$29",
      features: [
        "Unlimited projects",
        "50GB storage",
        "Priority support",
        "24/7 phone support",
        "Advanced analytics"
      ],
      isFeatured: true
    },
    {
      plan: "Enterprise",
      price: "$99",
      features: [
        "Unlimited everything",
        "Custom solutions",
        "Dedicated support",
        "Custom integrations",
        "Advanced security",
        "SLA guarantee"
      ],
      isFeatured: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="nav">
        <button className="hamburger" id="menuBtn">Menu</button>
        <ul className="menu" id="menu">
          <li>Home</li><li>About</li><li>Contact</li>
        </ul>
      </nav>


      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Simple, transparent pricing
            </h1>
            <p className="text-xl text-gray-600">
              Choose the plan that's right for you
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={index}
                plan={plan.plan}
                price={plan.price}
                features={plan.features}
                isFeatured={plan.isFeatured}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
