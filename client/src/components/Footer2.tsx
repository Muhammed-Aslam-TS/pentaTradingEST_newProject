import React from 'react'

const Footer2 = () => {
  return (
    <div className="bg-black">
    <div className="max-w-screen-xl container mx-auto py-10 text-white">
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <div className="lg:w-1/2 lg:pr-10">
          <h2 className="text-yellow-400 text-2xl font-bold mb-4">Hexstock</h2>
          <p className="opacity-50 text-sm mb-4">
            Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas.
          </p>
          <p className="opacity-50 text-sm">
            <i className="fas fa-location-dot"></i>&nbsp; 1234 Heaven Stress, Beverly Hill, Melbourne, USA.<br />
            <i className="fas fa-envelope-open-text"></i>&nbsp; hello@hexstock.com<br />
            <i className="fas fa-phone"></i>&nbsp; (800) 123 456 789
          </p>
        </div>

        <ul className="lg:w-1/4 mb-8 lg:mb-0">
          <li className="mb-2 font-semibold">Information</li>
          <li className="opacity-50 text-sm mb-2">About Us</li>
          <li className="opacity-50 text-sm mb-2">Careers</li>
          <li className="opacity-50 text-sm mb-2">Delivery Information</li>
          <li className="opacity-50 text-sm mb-2">Privacy Policy</li>
          <li className="opacity-50 text-sm mb-2">Terms & Conditions</li>
        </ul>

        <ul className="lg:w-1/4 mb-8 lg:mb-0">
          <li className="mb-2 font-semibold">Customer Service</li>
          <li className="opacity-50 text-sm mb-2">Shipping Policy</li>
          <li className="opacity-50 text-sm mb-2">Help & Contact Us</li>
          <li className="opacity-50 text-sm mb-2">Online Stores</li>
          <li className="opacity-50 text-sm mb-2">Terms & Conditions</li>
        </ul>
      </div>

      <hr className="border-white my-6" />

      <div className="flex flex-col lg:flex-row justify-center items-center">
        <div className="lg:w-3/4 lg:pr-10 text-sm opacity-50">
          Copyright &#169; <span className="text-yellow-400">hexstock</span> all rights reserved. Powered by{' '}
          <span className="text-yellow-400">Hexwhale</span>
        </div>

        <ul className="list-inline lg:w-1/4 mt-4 lg:mt-0 text-2xl">
          <li className="list-inline-item mx-4">
            <i className="fas fa-basketball"></i>
          </li>
          <li className="list-inline-item mx-4">
            <i className="fab fa-facebook-f"></i>
          </li>
          <li className="list-inline-item mx-4">
            <i className="fab fa-twitter"></i>
          </li>
          <li className="list-inline-item mx-4">
            <i className="fab fa-behance"></i>
          </li>
          <li className="list-inline-item mx-4">
            <i className="fas fa-share-nodes"></i>
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Footer2