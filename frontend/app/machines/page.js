'use client';
import { useState, useEffect } from 'react';

const MachinesPage = () => {
  const [machines, setMachines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMachines = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/machines');
        if (!response.ok) throw new Error('Erreur lors du chargement des machines');
        const data = await response.json();
        setMachines(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchMachines();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen p-8">
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
          <p className="text-red-700">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Nos Machines</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {machines.map((machine) => (
          <div key={machine.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            {machine.image_url && (
              <div className="relative h-48">
                <img
                  src={machine.image_url}
                  alt={machine.name}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{machine.name}</h2>
              <p className="text-gray-600 mb-4">{machine.description}</p>
              <div className="flex justify-between items-center">
                <span className={`px-3 py-1 rounded-full text-sm ${
                  machine.status === 'available' 
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {machine.status === 'available' ? 'Disponible' : 'Occupée'}
                </span>
                <button 
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-200"
                  onClick={() => window.location.href = `/reservations?machine=${machine.id}`}
                >
                  Réserver
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MachinesPage;
