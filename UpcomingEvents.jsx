/* File: src/components/UpcomingEvents.js */
import React from 'react';

const UpcomingEvents = () => {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Upcoming Events</h2>
        <div className="row">
          <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="100">
            <div className="card h-100">
              <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" className="card-img-top" alt="People at a career fair, like a job market where you shop for opportunities." />
              <div className="card-body">
                <h5 className="card-title" style={{ color: 'var(--accent-green)' }}>October 5, 2025</h5>
                <p className="card-text">Career Fair: Meet employers, like networking at a party.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="200">
            <div className="card h-100">
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" className="card-img-top" alt="Lecture in a hall, like listening to a story from an expert." />
              <div className="card-body">
                <h5 className="card-title" style={{ color: 'var(--accent-green)' }}>October 12, 2025</h5>
                <p className="card-text">Guest Lecture: Sustainable Energy, like learning to save the planet.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="300">
            <div className="card h-100">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF2VMsR6e2mS4pjgag_oXoBJvZ1AttKnU9FA&s" className="card-img-top" alt="Sports event, like playing games with friends." />
              <div className="card-body">
                <h5 className="card-title" style={{ color: 'var(--accent-green)' }}>October 20, 2025</h5>
                <p className="card-text">Sports Day: Team fun, like a family picnic.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;