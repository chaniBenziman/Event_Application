
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEventById } from '../../api/eventApi';

const EventPage: React.FC = () => {
  const { id = '' } = useParams<{ id: string }>();
  const [event, setEvent] = useState<any>(null); // שנה את סוג הקומפוננטה לפי הצורך

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const eventData = await getEventById(id);
        setEvent(eventData);
      } catch (error) {
        console.error('Failed to fetch event', error);
      }
    };

    fetchEvent();
  }, [id]);

  if (!event) return <div>Loading...</div>;

  return (
    <div>
      <h1>{event.title}</h1>
      <p>{event.description}</p>
      <p>Available spots: {event.spots}</p>
      <button onClick={() => {/* Handle registration */}}>Register</button>
    </div>
  );
};

export default EventPage;
