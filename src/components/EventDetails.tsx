
import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const EventDetails = () => {
  const events = [
    {
      name: "Mehndi",
      date: "December 9, 2023",
      time: "11:00 AM - 3:00 PM",
      location: "The Oberoi Udaivilas, Udaipur",
      description: "Join us for the beautiful and traditional Mehndi ceremony where intricate henna designs will adorn the bride's hands and feet."
    },
    {
      name: "Sangeet",
      date: "December 10, 2023",
      time: "7:00 PM - 12:00 AM",
      location: "The Oberoi Udaivilas, Udaipur",
      description: "A night of music, dance, and celebration as both families come together to perform and enjoy the pre-wedding festivities.",
      link: "https://maps.google.com"
    },
    {
      name: "Wedding Ceremony",
      date: "December 11, 2023",
      time: "6:30 PM - 8:30 PM",
      location: "The Oberoi Udaivilas, Udaipur",
      description: "The traditional Indian wedding ceremony where we will exchange vows and begin our journey as husband and wife.",
      link: "https://maps.google.com"
    },
    {
      name: "Reception",
      date: "December 11, 2023",
      time: "9:00 PM - 1:00 AM",
      location: "The Oberoi Udaivilas, Udaipur",
      description: "Join us for dinner and dancing as we celebrate our new beginning with all our loved ones.",
      link: "https://maps.google.com"
    }
  ];

  return (
    <section className="section-padding" id="details">
      <div className="container mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-gray-800 text-center mb-4">Wedding Events</h2>
        <div className="floral-divider">
          <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-4">
            <path d="M20 0C20 0 22 2 25 2C28 2 30 0 30 0C30 0 28 4 28 10C28 16 30 20 30 20C30 20 28 18 25 18C22 18 20 20 20 20C20 20 18 18 15 18C12 18 10 20 10 20C10 20 12 16 12 10C12 4 10 0 10 0C10 0 12 2 15 2C18 2 20 0 20 0Z" fill="#FDA4AF"/>
          </svg>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div 
              key={event.name} 
              className="glass-card opacity-0 animate-scale-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="bg-rose-100 rounded-md px-4 py-2 inline-block mb-4">
                <h3 className="font-serif text-lg text-rose-700">{event.name}</h3>
                
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-rose-500" />
                  <p className="text-gray-700">{event.date}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-rose-500" />
                  <p className="text-gray-700">{event.time}</p>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-rose-500" />
                  <p className="text-gray-700">{event.location}</p>
                </div>
                <p className="text-gray-600 mt-4 pt-4 border-t border-rose-100">
                  {event.description}
                </p>
                <a 
              href={event.link}
              target="_blank" 
              rel="noopener noreferrer"
              className="button-secondary inline-block"
            >
              Get Directions
            </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
